# 05 — Contact Module (single source of truth for contact data)

## 1. Contact data (store ONLY in `src/config/site.ts`)

```ts
export const site = {
  name: "Q9 Technologies",
  tagline: "Simpler Tomorrow",
  url: "https://REPLACE-WITH-LIVE-DOMAIN", // set via NEXT_PUBLIC_SITE_URL
  email: "support.q9technologies@gmail.com",
  phoneDisplay: "+92 327 5005540",
  phoneLocal: "03275005540",
  phoneTel: "+923275005540",
  whatsapp: "https://wa.me/923275005540", // shown only if features.whatsapp is true
  linkedin: "https://www.linkedin.com/company/116006515/",
  address: {
    line1: "44b Commercial Market Rd",
    city: "Rawalpindi City",
    postalCode: "46000",
    region: "Punjab",
    country: "Pakistan",
    countryCode: "PK",
    full: "44b Commercial Market Rd, Rawalpindi City, 46000, Punjab, Pakistan",
  },
  mapEmbedUrl:
    "https://www.google.com/maps?q=44b%20Commercial%20Market%20Rd%2C%20Rawalpindi%2046000%2C%20Pakistan&output=embed",
  mapLinkUrl:
    "https://www.google.com/maps/search/?api=1&query=44b%20Commercial%20Market%20Rd%2C%20Rawalpindi%2046000%2C%20Pakistan",
} as const;
```

### Notes the agent must respect
- **LinkedIn:** the lead originally shared an *admin dashboard* link (`.../company/116006515/admin/dashboard/`). That link only works for page admins and must NOT be published. Use the public page `https://www.linkedin.com/company/116006515/`. Log this in `ASSUMPTIONS.md`.
- **Address:** the original Google Maps text contained Urdu ("تحصیل راولپنڈی شہر" = Rawalpindi City Tehsil). Display the English version above. Keep an optional `addressUrdu` field in the config, unused for now.
- **Phone:** display as `+92 327 5005540`; `href` as `tel:+923275005540`. The number is also stored in local format `03275005540`.
- **WhatsApp:** not confirmed by the lead. Build the button but keep `features.whatsapp = false` until confirmed. Log in `MISSING-CONTENT.md`.
- **Map:** keyboard-friendly iframe with `title="Q9 Technologies location map"`, `loading="lazy"`, `referrerPolicy="no-referrer-when-downgrade"`, and a visible fallback link "Open in Google Maps" using `mapLinkUrl`. If an exact pin is later provided, replace the URL in config only.

## 2. Where contact info appears
- **Contact page:** full module (form + info cards + map)
- **Home page:** compact preview (email, phone, address, LinkedIn)
- **Footer:** email, phone, short address, LinkedIn icon link
- **Structured data (JSON-LD):** Organization with email, telephone, address, sameAs (LinkedIn)
- **Navbar CTA / CTA banners:** link to `/contact`

## 3. Contact page layout
Two columns on desktop (form 55% / info 45%), stacked on mobile (info cards first on mobile is acceptable, form directly after).

**Info cards (each is a clickable card with icon):**
| Icon | Label | Value | Action |
|---|---|---|---|
| Mail | Email | support.q9technologies@gmail.com | `mailto:` |
| Phone | Phone | +92 327 5005540 | `tel:+923275005540` |
| MapPin | Address | 44b Commercial Market Rd, Rawalpindi City, 46000, Punjab, Pakistan | opens Google Maps |
| Linkedin | LinkedIn | Q9 Technologies on LinkedIn | opens public page in new tab with `rel="noopener noreferrer"` |

Below the cards: `MapEmbed` (rounded, 16:10 ratio, min-height 320px).

## 4. Contact form

### Fields
| Field | Type | Required | Validation |
|---|---|---|---|
| Full name | text | yes | 2–80 chars |
| Email | email | yes | valid email format |
| Phone | tel | no | digits, spaces, `+`, `-`, `(`, `)`, 7–20 chars |
| Subject | select | yes | options below |
| Message | textarea | yes | 10–1500 chars, live counter |
| Honeypot (`company_website`) | hidden text | no | must be empty, else silently reject |

Subject options: `General inquiry`, `Partnership`, `Careers`, `Feedback`, `Other`.

### Behaviour
- Validate with `zod` + `react-hook-form` (client-side); show inline error under each field, announce via `aria-live="polite"`.
- Submit button states: idle (`Send message`), loading (spinner, disabled), success, error.
- Success: replace form with a confirmation card: `Thank you. Your message has been sent. We will get back to you soon.` and a `Send another message` button.
- Error: red banner `Something went wrong. Please try again or email us at support.q9technologies@gmail.com.`
- Rate-limit on the client: disable resubmission for 10 seconds after success.
- Honeypot + minimum time-on-page (reject if submitted in under 3 seconds).
- Never log or store user data in the repo.

### Delivery (no custom backend needed)
Use **Web3Forms** (free, sends the submission to the company email):
- `POST https://api.web3forms.com/submit` with JSON: `access_key`, `name`, `email`, `phone`, `subject`, `message`, `from_name: "Q9 Technologies Website"`.
- Access key from env var `NEXT_PUBLIC_WEB3FORMS_KEY` (see `.env.example`). The lead creates the key at web3forms.com using `support.q9technologies@gmail.com`.
- If the key is missing, the form shows a **fallback**: after validation, open `mailto:support.q9technologies@gmail.com?subject=...&body=...` with the filled data, and show a small notice. The build must never crash without the key.
- Keep the delivery code in `src/lib/contact.ts` so the provider can be swapped (Formspree, Resend, own API route) without touching the form component.

## 5. Quote / "Start a project" modal (reference pattern)
The reference has a "Get a quote" modal. For Q9 this is a **simplified "Contact us" modal** reusing the same form (name, email, phone, subject, message). Opens from the Home hero secondary action or navbar CTA only if `features.quoteModal` is true (default `false`; the navbar CTA goes to `/contact`). Must trap focus, close on Esc, backdrop click and Close button, and restore focus on close.

## 6. Accessibility for the module
- Every input has a visible `<label>` and `aria-describedby` for errors.
- `autocomplete` attributes: `name`, `email`, `tel`.
- Touch targets at least 44px.
- Error summary is focusable and announced.
- Map iframe has a title and a text alternative (the address and the link).

## 7. Testing checklist for the contact module
- [ ] All four info cards open the right action (mail client, dialer, maps, LinkedIn public page)
- [ ] Phone shows `+92 327 5005540`, dials `+923275005540`
- [ ] Map loads, fallback link works
- [ ] Empty submit shows errors for required fields only
- [ ] Invalid email blocked; honeypot filled blocks silently
- [ ] Success and error states render correctly
- [ ] No contact data hard-coded outside `src/config/site.ts`

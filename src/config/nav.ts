export interface NavItem {
  label: string;
  href: string;
}

export const navLinks: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Our Approach", href: "/approach" },
  { label: "Culture", href: "/culture" },
  { label: "Contact", href: "/contact" },
];

export const footerCompanyLinks: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Our Approach", href: "/approach" },
  { label: "Culture & Values", href: "/culture" },
  { label: "Contact Us", href: "/contact" },
];

export const legalLinks: NavItem[] = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms of Service", href: "/terms" },
];

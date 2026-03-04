export type TNavLink = { label: string; path: string };

export interface MobileMenuProps {
  openMenu: boolean;
  setOpenMenu: React.Dispatch<React.SetStateAction<boolean>>;
  links: TNavLink[];
}

export const Links: TNavLink[] = [
  {
    label: "Laptop",
    path: "/laptop",
  },
  {
    label: "Desktop PCs",
    path: "/desktop",
  },
  {
    label: "Networking Devices",
    path: "/network",
  },
  {
    label: "Printer & Scanner",
    path: "/printer",
  },
  {
    label: "PC Parts",
    path: "/pc-parts",
  },
  {
    label: "All Other Products",
    path: "/pc-parts",
  },
];

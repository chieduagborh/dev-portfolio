import Link from "next/link";

type NavLink = { href: string; label: string };

interface HeaderProps {
  brand?: string;
  links?: NavLink[];
}

const DEFAULT_LINKS: NavLink[] = [
  { href: "/#home", label: "Home" },
  { href: "/#skills", label: "Skills" },
  { href: "/#work", label: "Work" },
  { href: "/#contact", label: "Contact" },
  { href: "/privacy", label: "Privacy" },
];

export default function Header({
  brand = "Chiedu Agborh",
  links = DEFAULT_LINKS,
}: HeaderProps) {
  return (
    <header className="w-full border-b">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-8 py-4">
        <Link href="/" className="font-semibold tracking-tight">
          {brand}
        </Link>

        <nav aria-label="Main" className="text-sm">
          <ul className="flex flex-wrap items-center gap-x-6 gap-y-2">
            {links.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className="hover:underline underline-offset-4"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}

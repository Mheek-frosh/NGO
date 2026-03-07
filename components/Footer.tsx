"use client";

import { useLanguage } from "@/context/LanguageContext";

const mainBodies = [
  "General Assembly",
  "GA President",
  "Security Council",
  "SC President",
  "Economic and Social Council",
  "ECOSOC President",
  "Trusteeship Council",
  "International Court of Justice",
  "Secretariat",
  "Secretary-General",
];

const departments = [
  "New York",
  "Geneva",
  "Nairobi",
  "Vienna",
  "System Directory",
  "System Chart",
  "Global Leadership",
  "Information Centres",
];

const resources = [
  "Emergency information",
  "Reporting Wrongdoing",
  "Documents",
  "Databases",
  "Library",
  "Employment",
  "Internships",
  "How to donate",
  "Contact",
];

const keyDocs = [
  "Charter",
  "Universal Declaration of Human Rights",
  "Convention on the Rights of the Child",
  "Annual Report",
];

const newsMedia = [
  "News",
  "Press Releases",
  "Photos",
  "Web TV",
  "Video",
  "Social Media",
];

const issues = [
  "Sustainable Development Goals",
  "Climate Action",
  "Peace and Security",
  "Human Rights",
  "Refugees and Migrants",
];

const socialLinks = [
  { href: "#", label: "Facebook", icon: "facebook" },
  { href: "#", label: "Twitter", icon: "twitter" },
  { href: "#", label: "YouTube", icon: "youtube" },
  { href: "#", label: "Flickr", icon: "flickr" },
  { href: "#", label: "Instagram", icon: "instagram" },
];

function SocialIcon({ type, className }: { type: string; className?: string }) {
  const size = 20;
  const c = className ?? "h-5 w-5 text-white/80 hover:text-white transition";
  switch (type) {
    case "facebook":
      return (
        <svg className={c} fill="currentColor" viewBox="0 0 24 24" aria-hidden>
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
      );
    case "twitter":
      return (
        <svg className={c} fill="currentColor" viewBox="0 0 24 24" aria-hidden>
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      );
    case "youtube":
      return (
        <svg className={c} fill="currentColor" viewBox="0 0 24 24" aria-hidden>
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
        </svg>
      );
    case "flickr":
      return (
        <svg className={c} fill="currentColor" viewBox="0 0 24 24" aria-hidden>
          <path d="M5.5 9.5c1.93 0 3.5 1.57 3.5 3.5s-1.57 3.5-3.5 3.5-3.5-1.57-3.5-3.5 1.57-3.5 3.5-3.5zm13 0c1.93 0 3.5 1.57 3.5 3.5s-1.57 3.5-3.5 3.5-3.5-1.57-3.5-3.5 1.57-3.5 3.5-3.5z" />
        </svg>
      );
    case "instagram":
      return (
        <svg className={c} fill="currentColor" viewBox="0 0 24 24" aria-hidden>
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
        </svg>
      );
    default:
      return null;
  }
}

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-un-navy text-white">
      <div className="mx-auto max-w-7xl px-4 py-16 lg:px-8">
        <div className="grid gap-10 border-b border-un-blue/20 pb-12 sm:grid-cols-2 lg:grid-cols-6">
          <div>
            <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-un-blue-light">
              Main Bodies
            </h4>
            <ul className="mt-4 space-y-1.5 text-sm text-white/90">
              {mainBodies.map((item) => (
                <li key={item}>
                  <a href="#" className="hover:text-white">{item}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-un-blue-light">
              Departments / Offices
            </h4>
            <ul className="mt-4 space-y-1.5 text-sm text-white/90">
              {departments.map((item) => (
                <li key={item}>
                  <a href="#" className="hover:text-white">{item}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-un-blue-light">
              Resources / Services
            </h4>
            <ul className="mt-4 space-y-1.5 text-sm text-white/90">
              {resources.map((item) => (
                <li key={item}>
                  <a href={item === "Contact" ? "#contact" : "#"} className="hover:text-white">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-un-blue-light">
              Key Documents
            </h4>
            <ul className="mt-4 space-y-1.5 text-sm text-white/90">
              {keyDocs.map((item) => (
                <li key={item}>
                  <a href="#" className="hover:text-white">{item}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-un-blue-light">
              News and Media
            </h4>
            <ul className="mt-4 space-y-1.5 text-sm text-white/90">
              {newsMedia.map((item) => (
                <li key={item}>
                  <a href="#" className="hover:text-white">{item}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-un-blue-light">
              Issues / Campaigns
            </h4>
            <ul className="mt-4 space-y-1.5 text-sm text-white/90">
              {issues.map((item) => (
                <li key={item}>
                  <a href="#" className="hover:text-white">{item}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-6 pt-8">
          <div className="flex items-center gap-4">
            <span className="font-display text-lg font-bold">Tony Foundation</span>
            <a
              href="#involved"
              className="rounded bg-un-blue px-4 py-2 text-sm font-semibold text-white hover:bg-un-blue-light transition"
            >
              {t("getInvolved")}
            </a>
          </div>
          <div className="flex gap-6" aria-label="Social media">
            {socialLinks.map((link) => (
              <a
                key={link.icon}
                href={link.href}
                className="hover:text-white transition"
                aria-label={link.label}
              >
                <SocialIcon type={link.icon} />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-un-blue-light">
          <a href="#" className="hover:text-white">A-Z Site Index</a>
          <a href="#contact" className="hover:text-white">{t("contact")}</a>
          <a href="#" className="hover:text-white">Copyright</a>
          <a href="#" className="hover:text-white">FAQ</a>
          <a href="#" className="hover:text-white">Privacy Notice</a>
          <a href="#" className="hover:text-white">Terms of Use</a>
        </div>

        <p className="mt-6 text-sm text-un-blue-light">
          © {new Date().getFullYear()} Tony Foundation. {t("copyright")}
        </p>
      </div>
    </footer>
  );
}

"use client";

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

export default function Footer() {
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
                  <a href="#" className="hover:text-white">{item}</a>
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
              href="#donate"
              className="rounded bg-un-blue px-4 py-2 text-sm font-semibold text-white hover:bg-un-blue-light"
            >
              Donate
            </a>
          </div>
          <div className="flex gap-4 text-white/80">
            <a href="#" className="hover:text-white" aria-label="Facebook">facebook</a>
            <a href="#" className="hover:text-white" aria-label="Twitter">twitter</a>
            <a href="#" className="hover:text-white" aria-label="YouTube">youtube</a>
            <a href="#" className="hover:text-white" aria-label="Flickr">flickr</a>
            <a href="#" className="hover:text-white" aria-label="Instagram">instagram</a>
          </div>
        </div>

        <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-un-blue-light">
          <a href="#" className="hover:text-white">A-Z Site Index</a>
          <a href="#contact" className="hover:text-white">Contact</a>
          <a href="#" className="hover:text-white">Copyright</a>
          <a href="#" className="hover:text-white">FAQ</a>
          <a href="#" className="hover:text-white">Privacy Notice</a>
          <a href="#" className="hover:text-white">Terms of Use</a>
        </div>

        <p className="mt-6 text-sm text-un-blue-light">
          © {new Date().getFullYear()} Tony Foundation. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

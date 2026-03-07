"use client";

export default function GetInvolved() {
  return (
    <section id="involved" className="border-b border-slate-200 bg-white py-14 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <h2 className="font-display text-3xl font-bold text-un-navy">Get Involved</h2>
        <p className="mt-4 max-w-2xl text-slate-700">
          Join us in creating lasting change. Donate, volunteer, or stay informed.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href="#donate"
            className="inline-block rounded bg-un-blue px-6 py-3 font-semibold text-white hover:bg-un-blue-light"
          >
            Donate
          </a>
          <a
            href="#contact"
            className="inline-block rounded border-2 border-un-navy px-6 py-3 font-semibold text-un-navy hover:bg-un-navy hover:text-white"
          >
            Contact
          </a>
        </div>
      </div>
    </section>
  );
}

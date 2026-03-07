"use client";

export default function Contact() {
  return (
    <section id="contact" className="border-b border-slate-200 bg-white py-14 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <h2 className="font-display text-2xl font-bold text-un-navy">Contact Tony Foundation</h2>
            <p className="mt-4 text-slate-700">Get in touch for partnerships, media enquiries or general questions.</p>
            <p className="mt-6 font-medium text-un-navy">contact@tonyfoundation.org</p>
            <p className="mt-2 font-medium text-un-navy">+1 (555) 123-4567</p>
          </div>
          <form className="rounded-lg border border-slate-200 bg-slate-50 p-6">
            <div className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-un-navy">Name</label>
                <input id="name" type="text" className="mt-1 w-full rounded border border-slate-200 px-4 py-2 focus:border-un-blue focus:outline-none" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-un-navy">Email</label>
                <input id="email" type="email" className="mt-1 w-full rounded border border-slate-200 px-4 py-2 focus:border-un-blue focus:outline-none" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-un-navy">Message</label>
                <textarea id="message" rows={4} className="mt-1 w-full rounded border border-slate-200 px-4 py-2 focus:border-un-blue focus:outline-none" />
              </div>
              <button type="submit" className="w-full rounded bg-un-navy py-3 font-semibold text-white hover:bg-un-blue">
                Send message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

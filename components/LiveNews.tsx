"use client";

export default function LiveNews() {
  const items = [
    {
      title: "Justice takes centre stage: Tony Foundation welcomes world's largest women's rights event",
      date: "6 March 2026",
      excerpt: "Women have never been closer to equality and never closer to losing it, according to Tony Foundation ahead of the start of the world's largest gender equality gathering.",
      image: "https://placehold.co/800x450/002B49/ffffff?text=Women+rights+event",
    },
    {
      title: "MIDDLE EAST LIVE 6 March: World economy at grave risk, warns chief; 'the situation could spiral beyond anyone\'s control'",
      date: "6 March 2026",
      excerpt: "Military strikes and counter-strikes are continuing across the Middle East. With the world economy at grave risk, 'the situation could spiral...'",
      image: "https://placehold.co/800x450/002B49/ffffff?text=Middle+East",
    },
    {
      title: "MIDDLE EAST LIVE: Further escalation drives uncertainty and suffering",
      date: "5 March 2026",
      excerpt: "On day six, there's been no let-up in bombs, drones and rockets targeting multiple states, while NATO forces reportedly...",
      image: "https://placehold.co/800x450/002B49/ffffff?text=Escalation",
    },
  ];

  return (
    <section id="pulse" className="border-b border-slate-200 bg-white py-10 lg:py-14">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid gap-8 md:grid-cols-3">
          {items.map((item, i) => (
            <article key={i} className="overflow-hidden rounded border border-slate-200 bg-white shadow-sm">
              <div className="aspect-video w-full overflow-hidden bg-un-navy">
                <img
                  src={item.image}
                  alt=""
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="font-display text-lg font-bold text-un-navy">
                  <a href="#news" className="hover:text-un-blue">{item.title}</a>
                </h3>
                <p className="mt-1 text-sm text-slate-500">{item.date}</p>
                <p className="mt-2 text-sm text-slate-700">{item.excerpt}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

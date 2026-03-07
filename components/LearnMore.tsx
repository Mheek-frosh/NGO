"use client";

export default function LearnMore() {
  const items = [
    {
      title: "Selecting the next Secretary-General",
      excerpt: "The process of selecting and appointing the next Secretary-General. Candidates are nominated by a Member State or a group of Member States. Learn more about the multi-step selection process.",
      image: "https://placehold.co/600x400/002B49/ffffff?text=Secretary+General",
    },
    {
      title: "Climate Change",
      excerpt: "Climate change is the defining issue of our time. There is still time to tackle climate change, but it will require an unprecedented effort from all sectors of society.",
      image: "https://placehold.co/600x400/002B49/ffffff?text=Climate+Change",
    },
    {
      title: "Gender Equality",
      excerpt: "Women and girls represent half of the world's population and, therefore, also half of its potential. Gender equality is essential to achieve peaceful societies with full human potential.",
      image: "https://placehold.co/600x400/002B49/ffffff?text=Gender+Equality",
    },
    {
      title: "Ending Poverty",
      excerpt: "While global poverty rates have been cut by more than half since 2000, one in ten people in developing regions still lives on less than US$1.90 a day.",
      image: "https://placehold.co/600x400/002B49/ffffff?text=Ending+Poverty",
    },
  ];

  return (
    <section className="border-b border-slate-200 bg-white py-14 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <h2 className="font-display text-3xl font-bold text-un-navy">Learn more</h2>
        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item, i) => (
            <article key={i} className="overflow-hidden rounded-lg border border-slate-200 shadow-sm">
              <div className="aspect-video overflow-hidden bg-un-navy">
                <img src={item.image} alt="" className="h-full w-full object-cover" />
              </div>
              <div className="p-4">
                <h3 className="font-display font-semibold text-un-navy">
                  <a href="#work" className="hover:text-un-blue">{item.title}</a>
                </h3>
                <p className="mt-2 text-sm text-slate-600">{item.excerpt}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

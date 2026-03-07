"use client";

export default function MoreFrom() {
  const stories = [
    {
      category: "Women and Gender Equality",
      title: "International Women's Day 2026: Rights. Justice. Action.",
      excerpt:
        "International Women's Day 2026 arrives as justice systems falter under conflict and repression, leaving women with only 64% of men's legal rights. Real justice means enforceable rights, believing survivors, accessible legal aid.",
      image: "https://placehold.co/600x400/002B49/ffffff?text=Women+2026",
    },
    {
      category: "Agriculture and Food, Women and Gender Equality",
      title: "The woman who grows hope",
      excerpt:
        "Sonya has become a key leader in efforts to revive traditional crops and strengthen local agriculture. Women are now accessing seeds, earning income, reviving local varieties and seeing themselves as producers and decision-makers.",
      image: "https://placehold.co/600x400/002B49/ffffff?text=Agriculture",
    },
    {
      category: "Economic Development",
      title: "Innovation and sustainable development",
      excerpt:
        "New approaches to development are opening opportunities for communities. The case sets a precedent and opens opportunities for inclusive growth in regions worldwide.",
      image: "https://placehold.co/600x400/002B49/ffffff?text=Development",
    },
    {
      category: "Women and Gender Equality",
      title: "Women leading climate resilience",
      excerpt:
        "Across fragile regions, women restore forests, manage scarce resources, and rebuild livelihoods, showing how climate resilience and peace grow stronger when communities empower women.",
      image: "https://placehold.co/600x400/002B49/ffffff?text=Climate",
    },
    {
      category: "Culture, Food",
      title: "Memory wrapped in leaves",
      excerpt:
        "In Cox's Bazar, Sabekun revives traditional dishes, using food, memory and culture to reconnect displaced communities with identity and belonging.",
      image: "https://placehold.co/600x400/002B49/ffffff?text=Culture",
    },
    {
      category: "Wildlife, Tourism",
      title: "Photography connecting nature and people",
      excerpt:
        "Through ecotourism and photography, José reveals hidden biodiversity, connecting visitors with communities and conservation while transforming images into powerful bridges.",
      image: "https://placehold.co/600x400/002B49/ffffff?text=Wildlife",
    },
  ];

  return (
    <section id="news" className="border-b border-slate-200 bg-slate-50 py-14 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <h2 className="font-display text-3xl font-bold text-un-navy">
          More from Tony Foundation
        </h2>
        <p className="mt-2 text-slate-700">
          Featured stories from across Tony Foundation and our worldwide family of agencies, funds, and programmes.
        </p>
        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {stories.map((s, i) => (
            <article key={i} className="overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm">
              <div className="aspect-[4/3] overflow-hidden bg-un-navy">
                <img src={s.image} alt="" className="h-full w-full object-cover" />
              </div>
              <div className="p-5">
                <p className="text-xs font-medium text-un-blue">{s.category}</p>
                <h3 className="mt-2 font-display text-lg font-bold text-un-navy">
                  <a href="#news" className="hover:text-un-blue">{s.title}</a>
                </h3>
                <p className="mt-2 text-sm text-slate-600">{s.excerpt}</p>
              </div>
            </article>
          ))}
        </div>
        <p className="mt-8">
          <a href="#news" className="font-semibold text-un-blue hover:underline">
            More from Tony Foundation
          </a>
        </p>
      </div>
    </section>
  );
}

"use client";

export default function WhatWeDo() {
  const pillars = [
    {
      title: "Maintain International Peace and Security",
      body: "Tony Foundation came into being with one central mission: the maintenance of international peace and security. We do this by working to prevent conflict; helping parties in conflict make peace; peacekeeping; and creating the conditions to allow peace to hold and flourish. The Security Council has the primary responsibility for international peace and security.",
      image: "https://placehold.co/800x500/002B49/ffffff?text=Peace+and+Security",
    },
    {
      title: "Protect Human Rights",
      body: "The term 'human rights' was mentioned seven times in our founding Charter, making the promotion and protection of human rights a key purpose and guiding principle. In 1948, the Universal Declaration of Human Rights brought human rights into the realm of international law. We protect human rights through legal instruments and on-the-ground activities.",
      image: "https://placehold.co/800x500/002B49/ffffff?text=Human+Rights",
    },
    {
      title: "Deliver Humanitarian Aid",
      body: "One of our purposes is to achieve international co-operation in solving international problems of a humanitarian character. We are relied upon by the international community to coordinate humanitarian relief operations due to natural and man-made disasters in areas beyond the relief capacity of national authorities alone.",
      image: "https://placehold.co/800x500/002B49/ffffff?text=Humanitarian+Aid",
    },
    {
      title: "Promote Sustainable Development",
      body: "From the start, one of the main priorities was to achieve international co-operation in solving international problems and in promoting respect for human rights. Improving people's well-being continues to be a main focus. Sustainable development offers the best path forward for improving the lives of people everywhere.",
      image: "https://placehold.co/800x500/002B49/ffffff?text=Sustainable+Development",
    },
    {
      title: "Uphold International Law",
      body: "Our Charter set an objective: to establish conditions under which justice and respect for the obligations arising from treaties and other sources of international law can be maintained. The development of, and respect for international law is a key part of our work — by courts, tribunals, multilateral treaties and the Security Council.",
      image: "https://placehold.co/800x500/002B49/ffffff?text=International+Law",
    },
  ];

  return (
    <section id="about" className="border-b border-slate-200 bg-white py-14 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <h2 className="font-display text-3xl font-bold text-un-navy">What we do</h2>
        <p className="mt-4 max-w-3xl text-slate-700">
          Due to the powers vested in its Charter and its unique international character, Tony Foundation can take action on the issues confronting humanity in the 21st century, including:
        </p>
        <ul className="mt-4 list-disc pl-6 text-slate-700">
          <li>Maintain international peace and security</li>
          <li>Protect human rights</li>
          <li>Deliver humanitarian aid</li>
          <li>Promote sustainable development</li>
          <li>Uphold international law</li>
        </ul>

        <div className="mt-14 space-y-14">
          {pillars.map((p, i) => (
            <div
              key={p.title}
              className={`grid gap-8 lg:grid-cols-2 lg:gap-12 ${i % 2 === 1 ? "lg:flex-row-reverse" : ""}`}
            >
              <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                <div className="aspect-video overflow-hidden rounded bg-un-navy">
                  <img
                    src={p.image}
                    alt={p.title}
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
              <div className={i % 2 === 1 ? "lg:order-1" : ""}>
                <h3 className="font-display text-xl font-bold text-un-navy">{p.title}</h3>
                <p className="mt-4 text-slate-700 leading-relaxed">{p.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

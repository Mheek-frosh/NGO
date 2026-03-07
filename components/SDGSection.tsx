"use client";

export default function SDGSection() {
  return (
    <section id="work" className="border-b border-slate-200 bg-white py-14 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <h2 className="font-display text-3xl font-bold text-un-navy">
          Tony Foundation Sustainable Development Goals
        </h2>
        <h3 className="mt-2 text-xl font-semibold text-slate-700">
          17 Goals to transform our world
        </h3>
        <p className="mt-4 max-w-3xl text-slate-700">
          The Sustainable Development Goals are a call for action by all countries — poor, rich
          and middle-income — to promote prosperity while protecting the planet.
        </p>

        <div className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-lg border border-slate-200 p-5 shadow-sm">
            <div className="aspect-video w-full overflow-hidden rounded bg-un-blue-pale">
              <img
                src="https://placehold.co/400x225/009EDB/ffffff?text=ActNow"
                alt="ActNow Campaign"
                className="h-full w-full object-cover"
              />
            </div>
            <h4 className="mt-4 font-display font-semibold text-un-navy">ActNow Campaign</h4>
            <p className="mt-2 text-sm text-slate-600">
              The Goals can improve life for all of us. Cleaner air. Safer cities. Equality.
              Find new inspiring actions at tonyfoundation.org/actnow.
            </p>
          </div>
          <div className="rounded-lg border border-slate-200 p-5 shadow-sm">
            <div className="aspect-video w-full overflow-hidden rounded bg-un-blue-pale">
              <img
                src="https://placehold.co/400x225/009EDB/ffffff?text=Peace"
                alt="Act Now for Peace"
                className="h-full w-full object-cover"
              />
            </div>
            <h4 className="mt-4 font-display font-semibold text-un-navy">Act Now for a Peaceful World</h4>
            <p className="mt-2 text-sm text-slate-600">
              Today, half the world is under 30. The campaign aims to include, invest in, and
              partner with young people to build lasting peace.
            </p>
          </div>
          <div className="rounded-lg border border-slate-200 p-5 shadow-sm">
            <div className="aspect-video w-full overflow-hidden rounded bg-un-blue-pale">
              <img
                src="https://placehold.co/400x225/009EDB/ffffff?text=Book+Club"
                alt="SDG Book Club"
                className="h-full w-full object-cover"
              />
            </div>
            <h4 className="mt-4 font-display font-semibold text-un-navy">SDG Book Club</h4>
            <p className="mt-2 text-sm text-slate-600">
              Reading and learning are essential to children&apos;s growth. The SDG Book Club
              encourages them to learn about the Goals in a fun, engaging way.
            </p>
          </div>
          <div className="rounded-lg border-2 border-un-blue bg-un-blue-pale p-5">
            <h4 className="font-display text-sm font-semibold uppercase text-un-blue">Goal of the Month 5</h4>
            <h5 className="mt-2 font-display text-xl font-bold text-un-navy">Gender Equality</h5>
            <p className="mt-2 text-sm text-slate-700">
              Achieve gender equality and empower all women and girls.
            </p>
            <a href="#work" className="mt-4 inline-block text-sm font-semibold text-un-blue hover:underline">
              More about the Goals →
            </a>
          </div>
        </div>

        <p className="mt-8">
          <a href="#work" className="font-semibold text-un-blue hover:underline">
            More about the Tony Foundation Sustainable Development Goals
          </a>
        </p>
      </div>
    </section>
  );
}

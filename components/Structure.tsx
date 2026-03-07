"use client";

export default function Structure() {
  const bodies = [
    {
      title: "General Assembly",
      desc: "The main deliberative, policymaking and representative organ. All 193 Member States are represented, making it the only body with universal representation.",
    },
    {
      title: "Security Council",
      desc: "Has primary responsibility, under the Charter, for the maintenance of international peace and security. It has 15 Members (5 permanent and 10 non-permanent). Each Member has one vote.",
    },
    {
      title: "Economic and Social Council",
      desc: "The principal body for coordination, policy review, policy dialogue and recommendations on economic, social and environmental issues, as well as implementation of internationally agreed development goals.",
    },
    {
      title: "Trusteeship Council",
      desc: "Established to provide international supervision for Trust Territories and ensure adequate steps were taken to prepare them for self-government and independence.",
    },
    {
      title: "International Court of Justice",
      desc: "The principal judicial organ. Its seat is at the Peace Palace in The Hague (Netherlands). It is the only one of the six principal organs not located at headquarters.",
    },
    {
      title: "Secretariat",
      desc: "Comprises the Secretary-General and tens of thousands of international staff members who carry out the day-to-day work as mandated by the General Assembly and the Organization's other principal organs.",
    },
  ];

  return (
    <section className="border-b border-slate-200 bg-slate-50 py-14 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <h2 className="font-display text-3xl font-bold text-un-navy">
          Structure of Tony Foundation
        </h2>
        <p className="mt-4 max-w-3xl text-slate-700">
          The main parts of the structure are the General Assembly, the Security Council, the Economic and Social Council, the Trusteeship Council, the International Court of Justice, and the Secretariat. All were established when the organization was founded.
        </p>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {bodies.map((b, i) => (
            <div key={b.title} className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="font-display text-lg font-bold text-un-navy">{b.title}</h3>
              <p className="mt-3 text-sm text-slate-600">{b.desc}</p>
            </div>
          ))}
        </div>
        <p className="mt-8">
          <a href="#about" className="font-semibold text-un-blue hover:underline">
            More about the structure of Tony Foundation
          </a>
        </p>
      </div>
    </section>
  );
}

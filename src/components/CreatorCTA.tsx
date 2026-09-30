import Image from "next/image";

export function CreatorCTA() {
  return (
    <section className="relative overflow-hidden bg-[#003BE2] py-24 text-white">

      {/* Grid overlay */}
      <div className="hero-grid absolute inset-0 z-0" />

      {/* Decorative lime pill — top left */}
      <div className="absolute left-[6%] top-10 z-0 h-10 w-28 rotate-[-35deg] rounded-full bg-[#D4FB20]" />

      {/* Decorative triangle — top right */}
      <div
        className="absolute right-[8%] top-8 z-0 h-12 w-12 bg-[#D4FB20]"
        style={{ clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)", transform: "rotate(12deg)" }}
      />

      {/* Decorative small circle — bottom left */}
      <div className="absolute bottom-8 left-[12%] z-0 h-8 w-8 rounded-full border-2 border-[#D4FB20]/60" />

      {/* Decorative dots — bottom right */}
      <div className="absolute bottom-10 right-[10%] z-0 grid grid-cols-3 gap-1.5">
        {Array.from({ length: 9 }).map((_, i) => (
          <div key={i} className="h-1.5 w-1.5 rounded-full bg-[#D4FB20]/50" />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-300 px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2">

          {/* Left — text */}
          <div className="flex flex-col gap-6">
            <h2 className="text-[48px] font-bold leading-tight tracking-tight">
              Unlock Your Potential as a Creator with ByteSpace
            </h2>
            <p className="max-w-120 text-[16px] leading-relaxed text-white/80">
              Experience the collaboration of numerous creators and an expanding
              selection of courses. Register now and become part of a community
              comprising over 10,000 local and international creators. Utilize our
              Course Editor and showcase your expertise by publishing your first
              course on the ByteSpace Course Library.
            </p>
            <div>
              <a
                href="#"
                className="inline-flex items-center gap-2 rounded-full bg-[#D4FB20] px-7 py-3.5 text-[15px] font-bold text-[#040819] transition hover:bg-[#c5ec16]"
              >
                Join as Creator
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="#040819" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>
          </div>

          {/* Right — creator image cards */}
          <div className="relative flex justify-center gap-5 lg:justify-end">
            <div className="relative h-80 w-50 overflow-hidden rounded-3xl">
              <Image src="/creator_2.png" alt="Creator" fill className="object-cover object-top" />
            </div>
            <div className="relative mt-10 h-80 w-50 overflow-hidden rounded-3xl">
              <Image src="/creator_3.png" alt="Creator" fill className="object-cover object-top" />
            </div>
          </div>

        </div>
      </div>

    </section>
  );
}

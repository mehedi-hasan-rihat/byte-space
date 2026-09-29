export function CreatorCTA() {
  return (
    <section className="relative bg-[#003BE2] text-white text-center py-20 px-5 overflow-hidden">
      {/* Decorative shapes */}
      <div className="absolute left-4 top-6 w-28 h-10 rounded-full bg-[#D4FB20] -rotate-45 hidden md:block" />
      <div
        className="absolute right-24 top-6 w-12 h-12 bg-[#D4FB20] rotate-12 hidden md:block"
        style={{ clipPath: "polygon(0 100%, 100% 100%, 50% 0)" }}
      />

      {/* Grid overlay */}
      <div className="absolute inset-0 grid-pattern opacity-20 pointer-events-none" />

      <div className="relative z-10">
        <h2 className="text-3xl md:text-4xl font-extrabold leading-tight max-w-xl mx-auto">
          Unlock Your Potential as a Creator with ByteSpace
        </h2>
        <p className="text-sm text-white/80 max-w-3xl mx-auto mt-5 leading-relaxed">
          Experience the collaboration of numerous creators and an expanding
          selection of courses. Register now and become part of a community
          comprising over 10,000 local and international creators. Utilize our
          Course Editor and showcase your expertise by publishing your first
          course on the ByteSpace Course Library.
        </p>
        <a
          href="#"
          className="inline-block mt-7 bg-[#D4FB20] text-[#040819] font-bold text-sm rounded-full px-6 py-2.5 hover:bg-[#c8f135] transition-colors"
        >
          Join as Creator
        </a>
      </div>
    </section>
  );
}

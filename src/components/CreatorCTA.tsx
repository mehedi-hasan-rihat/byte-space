import Image from "next/image";

export function CreatorCTA() {
  return (
    <section className="relative overflow-hidden bg-[#003BE2] py-24 text-white">
      {/* Grid overlay */}
      <div className="hero-grid absolute inset-0 z-0" />

      {/* Content */}
      <div className="flex flex-col justify-center items-center space-y-10 max-w-241 mx-auto text-center">
        <h2 className="text-[48px] font-bold leading-tight tracking-tight max-w-177.5">
          Unlock Your Potential as a Creator with ByteSpace
        </h2>
        <p className=" text-[16px] leading-relaxed text-white/80">
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
          </a>
        </div>
      </div>

      <Image
        src="/half_top_spring.png"
        alt="img"
        width={285}
        height={285}
        className="absolute top-0 object-center object-contain"
      />

      <Image
        src="/white_spring.png"
        alt="img"
        width={200}
        height={200}
        className="absolute top-10 left-90"
      />

      <Image
        src="/white_cone.png"
        alt="img"
        width={180}
        height={180}
        className="absolute bottom-15 object-center object-contain"
      />

      <Image
        src="/green_circle.png"
        alt="img"
        width={300}
        height={300}
        className="absolute left-30 bottom-0 object-center object-contain"
      />

      <Image
        src="/prisma_green.png"
        alt="img"
        width={188}
        height={188}
        className="absolute right-40 top-10 object-center object-contain"
      />

      <Image
        src="/cylender.png"
        alt="img"
        width={188}
        height={188}
        className="absolute right-0 top-10 object-center object-contain"
      />

      <Image
        src="/half_bottom_spring.png"
        alt="img"
        width={300}
        height={300}
        className="absolute right-10 bottom-0 object-center object-contain"
      />
    </section>
  );
}

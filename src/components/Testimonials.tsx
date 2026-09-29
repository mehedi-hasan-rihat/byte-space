import Image from "next/image";

const testimonials = [
  {
    name: "Sarah M.",
    role: "Enthusiastic Learner",
    roleColor: "text-[#003BE2]",
    quote:
      "ByteSpace has transformed my approach to learning. The diverse range of courses and the quality of content provided by creators have exceeded my expectations. The platform truly fosters a sense of community and lifelong learning.",
    image: "/creator.png",
  },
  {
    name: "James L.",
    role: "Lifelong Learner",
    roleColor: "text-[#003BE2]",
    quote:
      "I've tried several online learning platforms, and ByteSpace stands out for its vibrant community and the variety of courses available. The easy navigation and engaging content make it a go-to platform for continuous skill development.",
    image: "/creator_2.png",
  },
  {
    name: "Alex B.",
    role: "Inspired Creator",
    roleColor: "text-[#003BE2]",
    quote:
      "As a creator, ByteSpace has been a game-changer for me. The Course Editor is user-friendly, and the support from the community is incredible. It's fulfilling to see my courses making a positive impact on learners globally.",
    image: "/creator_3.png",
  },
];

export function Testimonials() {
  return (
    <section className="soft-bg py-20">
      <div className="max-w-300 mx-auto px-5">

        {/* Header */}
        <div className="grid md:grid-cols-2 gap-6 items-start mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold leading-tight text-[#040819]">
            Discover What Our Community Is Saying
          </h2>
          <p className="text-sm text-[#82868E] leading-relaxed">
            At ByteSpace, our vibrant community of learners and creators is at
            the heart of what we do. Hear directly from those who have
            experienced the transformative journey of learning and creating on
            our platform. Explore testimonials that reflect the diverse
            perspectives of enthusiastic learners and accomplished creators.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-10">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-white rounded-2xl p-6 border border-[#E5E6E8] flex flex-col gap-5 hover:shadow-md w-[374px] transition-shadow"
            >
              {/* Avatar */}
              <div className="relative w-20 h-20 rounded-full overflow-hidden shrink-0">
                <Image
                  src={t.image}
                  alt={t.name}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Name + role */}
              <div>
                <p className="font-bold text-[#040819] text-base">{t.name}</p>
                <p className={`text-sm font-medium mt-0.5 ${t.roleColor}`}>
                  {t.role}
                </p>
              </div>

              {/* Quote */}
              <p className="text-sm text-[#4B4C53] leading-relaxed flex-1">
                &ldquo;{t.quote}&rdquo;
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

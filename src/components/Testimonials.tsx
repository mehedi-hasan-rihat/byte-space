import Image from "next/image";

const testimonials = [
  {
    name: "Sarah M.",
    role: "Enthusiastic Learner",
    quote:
      "ByteSpace has transformed my approach to learning. The diverse range of courses and the quality of content provided by creators have exceeded my expectations. The platform truly fosters a sense of community and lifelong learning.",
    image: "/creator.png",
  },
  {
    name: "James L.",
    role: "Lifelong Learner",
    quote:
      "I've tried several online learning platforms, and ByteSpace stands out for its vibrant community and the variety of courses available. The easy navigation and engaging content make it a go-to platform for continuous skill development.",
    image: "/creator_2.png",
  },
  {
    name: "Alex B.",
    role: "Inspired Creator",
    quote:
      "As a creator, ByteSpace has been a game-changer for me. The Course Editor is user-friendly, and the support from the community is incredible. It's fulfilling to see my courses making a positive impact on learners globally.",
    image: "/creator_3.png",
  },
];

export function Testimonials() {
  return (
    <section className="soft-bg py-24">
      <div className="mx-auto max-w-300 px-6">

        {/* Header */}
        <div className="grid items-start gap-8 md:grid-cols-2 mb-14">
          <h2 className="text-[44px] font-bold leading-tight tracking-tight text-[#040819] font-poppins">
            Discover What Our<br />Community Is Saying
          </h2>
          <p className="text-[16px] leading-relaxed text-[#82868E] max-w-115">
            At ByteSpace, our vibrant community of learners and creators is at the heart of what we do. Hear directly from those who have experienced the transformative journey of learning and creating on our platform. Explore testimonials that reflect the diverse perspectives of enthusiastic learners and accomplished creators.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="flex flex-col gap-6 rounded-3xl border border-[#E5E6E8] bg-white p-8 transition-shadow hover:shadow-lg"
            >

              {/* Avatar + name */}
              <div className="flex flex-col gap-4">
                <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full">
                  <Image src={t.image} alt={t.name} fill className="object-cover" />
                </div>
                <div>
                  <p className="text-[15px] font-bold text-[#040819]">{t.name}</p>
                  <p className="text-[13px] font-medium text-[#003BE2]">{t.role}</p>
                </div>
              </div>

              {/* Quote text */}
              <p className="flex-1 text-[15px] leading-relaxed text-[#4B4C53]">
                &ldquo;{t.quote}&rdquo;
              </p>

              
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

import Image from "next/image";

export default function Hero() {
  return (
    <section
      className="relative overflow-hidden bg-[#003BE2] text-white"
      style={{ minHeight: "860px" }}
    >
      {/* Grid overlay */}
      <div className="hero-grid absolute inset-0 z-0" />

      {/* ── Decorative circles ── */}
      {/* Large lime circle — bottom center */}
      <div
        className="absolute left-1/2 -translate-x-1/2 rounded-full bg-[#D4FB20]"
        style={{ top: "580px", width: "1150px", height: "1150px" }}
      />

           {/* Large lime circle — bottom center */}
      <div
        className="absolute left-1/2 -translate-x-1/2 rounded-full bg-[#003BE2]"
        style={{ top: "900px", width: "650px", height: "650px" }}
      />



      {/* ── Main content wrapper ── */}
      <div className="relative z-10 mx-auto flex max-w-300 flex-col items-center px-6 pt-44">
        {/* Heading */}
        <h1 className="max-w-217.5 text-center text-[72px] font-semibold leading-[1.15] tracking-[-1px] text-white">
          Get Access to Hundreds Courses Available
        </h1>

        {/* Sub‑heading */}
        <p className="mt-7 max-w-140 text-center text-[18px] leading-[1.7] text-[#E5E6E8]">
          Unlock your creativity, gain valuable knowledge, and grow your
          business with our wide range of courses.
        </p>

        {/* Search bar */}
        <div className="mt-12 flex items-center gap-3">
          <div className="flex h-13 w-115 items-center gap-3 rounded-full bg-white px-6">
            <svg
              width="20"
              height="20"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="shrink-0"
            >
              <path
                d="M12.5 11H11.71L11.43 10.73C12.41 9.59 13 8.11 13 6.5C13 2.91 10.09 0 6.5 0C2.91 0 0 2.91 0 6.5C0 10.09 2.91 13 6.5 13C8.11 13 9.59 12.41 10.73 11.43L11 11.71V12.5L16 17.49L17.49 16L12.5 11ZM6.5 11C4.01 11 2 8.99 2 6.5C2 4.01 4.01 2 6.5 2C8.99 2 11 4.01 11 6.5C11 8.99 8.99 11 6.5 11Z"
                fill="#82868E"
              />
            </svg>
            <input
              type="text"
              placeholder="Course, topic, creator"
              className="w-full bg-transparent text-[16px] text-gray-800 outline-none placeholder:text-[#82868E]"
            />
          </div>
          <button
            type="button"
            className="flex h-13 items-center justify-center rounded-full bg-[#D4FB20] px-8 text-[16px] font-semibold text-[#242528] transition hover:bg-[#c5ec16]"
          >
            Search
          </button>
        </div>

        <div
          className="relative mt-14 flex justify-center"
          style={{ height: "460px", width: "900px" }}
        >
          <div
            className="absolute left-1/2 -translate-x-1/2 bottom-0 -z-20"
          
          >
            <Image
              src="/course_progress.png"
              alt="Student learning online"
              width={500}
              height={100}
              className="w-full h-full object-cover object-center aspect-578/541"
              priority
            />
          </div>

          <Image
            src="/white_spring.png"
            alt="Learner community"
            width={250}
            height={220}
            className="absolute -right-80 bottom-40"
          />
        </div>
      </div>
      <div className="absolute left-0 top-[20%]">
        <Image
          src="/green_spring.png"
          alt="spring"
          width={200}
          height={150}
          className=""
        />
      </div>

      <Image
        src="/white_spring.png"
        alt="Learner community"
        width={150}
        height={100}
        className="absolute left-80 top-140"
      />

      <Image
        src="/Cone.png"
        alt="Learner community"
        width={150}
        height={100}
        className="absolute -right-3 top-50"
      />

      <Image
        src="/tringle.png"
        alt="Learner community"
        width={150}
        height={50}
        className="absolute right-50 top-100"
      />

      <Image
        src="/circle.png"
        alt="Learner community"
        width={150}
        height={100}
        className="absolute left-60 top-180 w-85.75 h-85.75"
      />

      <Image
        src="/happyStudent.png"
        alt="Learner community"
        width={150}
        height={100}
        className="absolute w-62.25 h-30.25 left-140 top-220 z-90"
      />

      <Image
        src="/ui_ux.png"
        alt="Learner community"
        width={150}
        height={100}
        className="absolute w-52 h-17.5 left-150 top-160"
      />

      <Image
        src="/learning_progress.png"
        alt="Learner community"
        width={150}
        height={100}
        className="absolute w-58 h-32.75 right-140 top-170"
      />
    </section>
  );
}

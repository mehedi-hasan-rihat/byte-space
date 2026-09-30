import React from "react";
import Image from "next/image";

const reviewImages = [
  "/review_img.png",
  "/review_img_2.png",
  "/review_img_3.png",
  "/review_img_4.png",
];

const courseImages = [
  "/Frame.png",
  "/Frame_1.png",
  "/Frame_2.png",
  "/Frame_3.png",
  "/Frame_4.png",
  "/Frame_5.png",
];

const courses = [
  { title: "Learn Figma from Basic", category: "UI/UX Design", price: "$25", image: 0, rating: "4.8" },
  { title: "Build Digital Asset", category: "Development", price: "$29", image: 1, rating: "4.9" },
  { title: "The Power of Big Data", category: "Data Science", price: "$35", image: 2, rating: "4.7" },
  { title: "Balancing Productivity and Creativity", category: "Productivity", price: "$25", image: 3, rating: "4.8" },
  { title: "Mastering Money Management", category: "Business", price: "$25", image: 4, rating: "4.6" },
  { title: "From Idea to Startup Success", category: "Business", price: "$25", image: 5, rating: "4.9" },
];

const categories: { name: string; icon: React.ReactNode }[] = [
  {
    name: "Design",
    icon: (
      <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="60" height="60" rx="30" fill="#D4FB20" />
        <path d="M36.36 29.2633L38.715 26.9083L33.09 21.2833L30.735 23.6383L24.525 17.4433C23.355 16.2733 21.45 16.2733 20.28 17.4433L17.43 20.2933C16.26 21.4633 16.26 23.3683 17.43 24.5383L23.625 30.7333L16.5 37.8733V43.4983H22.125L29.265 36.3583L35.46 42.5533C36.885 43.9783 38.805 43.4533 39.705 42.5533L42.555 39.7033C43.725 38.5333 43.725 36.6283 42.555 35.4583L36.36 29.2633ZM25.77 28.6033L19.56 22.4083L22.395 19.5583L24.3 21.4633L22.53 23.2483L24.645 25.3633L26.43 23.5783L28.605 25.7533L25.77 28.6033ZM37.59 40.4383L31.395 34.2433L34.245 31.3933L36.42 33.5683L34.635 35.3533L36.75 37.4683L38.535 35.6833L40.44 37.5883L37.59 40.4383Z" fill="#242528" />
        <path d="M43.065 22.5583C43.65 21.9733 43.65 21.0283 43.065 20.4433L39.555 16.9333C38.85 16.2283 37.875 16.4983 37.44 16.9333L34.695 19.6783L40.32 25.3033L43.065 22.5583Z" fill="#242528" />
      </svg>
    ),
  },
  {
    name: "Development",
    icon: (
      <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="60" height="60" rx="30" fill="#D4FB20" />
        <path d="M22.5 19.5H37.5V22.5H40.5V16.5C40.5 14.85 39.15 13.515 37.5 13.515L22.5 13.5C20.85 13.5 19.5 14.85 19.5 16.5V22.5H22.5V19.5ZM35.115 36.885L42 30L35.115 23.115L33 25.245L37.755 30L33 34.755L35.115 36.885ZM27 34.755L22.245 30L27 25.245L24.885 23.115L18 30L24.885 36.885L27 34.755ZM37.5 40.5H22.5V37.5H19.5V43.5C19.5 45.15 20.85 46.5 22.5 46.5H37.5C39.15 46.5 40.5 45.15 40.5 43.5V37.5H37.5V40.5Z" fill="#242528" />
      </svg>
    ),
  },
  {
    name: "IT & Software",
    icon: (
      <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="60" height="60" rx="30" fill="#D4FB20" />
        <path d="M42 39C43.65 39 44.985 37.65 44.985 36L45 21C45 19.35 43.65 18 42 18H18C16.35 18 15 19.35 15 21V36C15 37.65 16.35 39 18 39H12V42H48V39H42ZM18 21H42V36H18V21Z" fill="#242528" />
      </svg>
    ),
  },
  {
    name: "Business",
    icon: (
      <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="60" height="60" rx="30" fill="#D4FB20" />
        <path d="M30 22.5V19.5C30 17.85 28.65 16.5 27 16.5H18C16.35 16.5 15 17.85 15 19.5V40.5C15 42.15 16.35 43.5 18 43.5H42C43.65 43.5 45 42.15 45 40.5V25.5C45 23.85 43.65 22.5 42 22.5H30ZM21 40.5H18V37.5H21V40.5ZM21 34.5H18V31.5H21V34.5ZM21 28.5H18V25.5H21V28.5ZM21 22.5H18V19.5H21V22.5ZM27 40.5H24V37.5H27V40.5ZM27 34.5H24V31.5H27V34.5ZM27 28.5H24V25.5H27V28.5ZM27 22.5H24V19.5H27V22.5ZM40.5 40.5H30V37.5H33V34.5H30V31.5H33V28.5H30V25.5H40.5C41.325 25.5 42 26.175 42 27V39C42 39.825 41.325 40.5 40.5 40.5ZM39 28.5H36V31.5H39V28.5ZM39 34.5H36V37.5H39V34.5Z" fill="#242528" />
      </svg>
    ),
  },
  {
    name: "Marketing",
    icon: (
      <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="60" height="60" rx="30" fill="#D4FB20" />
        <path d="M28.5 33H25.5C25.5 25.545 31.545 19.5 39 19.5V22.5C33.195 22.5 28.5 27.195 28.5 33ZM39 28.5V25.5C34.86 25.5 31.5 28.86 31.5 33H34.5C34.5 30.51 36.51 28.5 39 28.5ZM22.5 18C22.5 16.335 21.165 15 19.5 15C17.835 15 16.5 16.335 16.5 18C16.5 19.665 17.835 21 19.5 21C21.165 21 22.5 19.665 22.5 18ZM29.175 18.75H26.175C25.815 20.88 23.985 22.5 21.75 22.5H17.25C16.005 22.5 15 23.505 15 24.75V28.5H24V25.11C26.79 24.225 28.875 21.765 29.175 18.75ZM40.5 37.5C42.165 37.5 43.5 36.165 43.5 34.5C43.5 32.835 42.165 31.5 40.5 31.5C38.835 31.5 37.5 32.835 37.5 34.5C37.5 36.165 38.835 37.5 40.5 37.5ZM42.75 39H38.25C36.015 39 34.185 37.38 33.825 35.25H30.825C31.125 38.265 33.21 40.725 36 41.61V45H45V41.25C45 40.005 43.995 39 42.75 39Z" fill="#242528" />
      </svg>
    ),
  },
  {
    name: "Photography",
    icon: (
      <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="60" height="60" rx="30" fill="#D4FB20" />
        <path d="M42 19.5H37.245L34.5 16.5H25.5L22.755 19.5H18C16.35 19.5 15 20.85 15 22.5V40.5C15 42.15 16.35 43.5 18 43.5H42C43.65 43.5 45 42.15 45 40.5V22.5C45 20.85 43.65 19.5 42 19.5ZM42 40.5H18V22.5H24.075L26.82 19.5H33.18L35.925 22.5H42V40.5Z" fill="#242528" />
        <path d="M30 31.5C31.6569 31.5 33 30.1569 33 28.5C33 26.8431 31.6569 25.5 30 25.5C28.3431 25.5 27 26.8431 27 28.5C27 30.1569 28.3431 31.5 30 31.5Z" fill="#242528" />
        <path d="M34.17 33.87C32.895 33.315 31.485 33 30 33C28.515 33 27.105 33.315 25.83 33.87C24.72 34.35 24 35.43 24 36.645V37.5H36V36.645C36 35.43 35.28 34.35 34.17 33.87Z" fill="#242528" />
      </svg>
    ),
  },
];

function StarIcon({ filled = true }: { filled?: boolean }) {
  return (
    <svg width="14" height="14" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M10.3096 5.5525L8.8396 0.7125C8.5496 -0.2375 7.2096 -0.2375 6.9296 0.7125L5.4496 5.5525H0.999597C0.0295973 5.5525 -0.370403 6.8025 0.419597 7.3625L4.0596 9.9625L2.6296 14.5725C2.3396 15.5025 3.4196 16.2525 4.1896 15.6625L7.8796 12.8625L11.5696 15.6725C12.3396 16.2625 13.4196 15.5125 13.1296 14.5825L11.6996 9.9725L15.3396 7.3725C16.1296 6.8025 15.7296 5.5625 14.7596 5.5625H10.3096V5.5525Z"
        fill={filled ? "#F59E0B" : "#CED0D3"}
      />
    </svg>
  );
}

function DifficultyBadge() {
  return (
    <div className="flex items-center gap-1.5 rounded-full bg-[#F5F5F6] px-3 py-1.5">
      <svg width="13" height="14" viewBox="0 0 13 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10 0H12.5V13.3333H10V0ZM0 8.33333H2.5V13.3333H0V8.33333ZM5 4.16667H7.5V13.3333H5V4.16667Z" fill="#4B4C53" />
      </svg>
      <span className="text-[12px] font-medium text-[#4B4C53]">Beginner</span>
    </div>
  );
}

export function CourseCard({ course }: { course: (typeof courses)[number] }) {
  return (
    <article className="overflow-hidden rounded-3xl border border-[#E5E6E8] bg-white p-4 transition-shadow hover:shadow-lg">
      {/* Thumbnail */}
      <div className="relative w-full overflow-hidden rounded-2xl" style={{ aspectRatio: "341/195" }}>
        <Image
          src={courseImages[course.image]}
          alt={course.title}
          fill
          className="object-cover"
        />
      </div>

      <div className="space-y-3 pt-4 pb-2">
        {/* Title + rating */}
        <div className="flex items-start justify-between gap-2">
          <h3 className="text-[18px] font-semibold leading-snug text-[#040819]">{course.title}</h3>
          <div className="flex shrink-0 items-center gap-1">
            <StarIcon filled />
            <span className="text-[14px] font-medium text-[#4B4C53]">{course.rating}</span>
          </div>
        </div>

        {/* Creator */}
        <p className="text-[13px] text-[#82868E]">
          by <span className="font-medium text-[#003BE2]">purepearl studio</span>
        </p>

        {/* Badges + avatars */}
        <div className="flex items-center gap-3">
          <DifficultyBadge />
          <div className="flex items-center">
            {reviewImages.map((src, i) => (
              <div
                key={src}
                className="relative h-7 w-7 overflow-hidden rounded-full border-2 border-white"
                style={{ marginLeft: i === 0 ? 0 : "-8px", zIndex: i }}
              >
                <Image src={src} alt={`Reviewer ${i + 1}`} fill className="object-cover" />
              </div>
            ))}
            <div
              className="relative flex h-7 w-7 items-center justify-center rounded-full border-2 border-white bg-[#D4FB20]"
              style={{ marginLeft: "-8px", zIndex: 4 }}
            >
              <span className="text-[9px] font-bold text-[#242528]">26+</span>
            </div>
          </div>
        </div>

        {/* Price */}
        <div className="pt-1 text-[13px] text-[#82868E]">
          <span className="text-[22px] font-bold text-[#003BE2]">{course.price}</span>
          {" "}/lifetime
        </div>
      </div>
    </article>
  );
}

const tags = [
  "Featured", "Music", "Drawing & Painting", "Marketing", "Animation",
  "Social Media", "UI/UX Design", "Creative Marketing", "Digital Illustration",
  "Film & Video", "Crafts", "Freelance & Entrepreneur", "Cooking",
];

export function CourseExplorer() {
  return (
    <section id="courses" className="px-6 py-24">
      <div className="mx-auto max-w-300">

        {/* Header */}
        <div className="mx-auto max-w-160 text-center">
          <h2 className="text-[44px] font-semibold leading-tight tracking-tight text-[#040819]">
            Discover Your Passion,<br />Build Your Skills
          </h2>
          <p className="mt-5 text-[17px] leading-relaxed text-[#82868E]">
            At ByteSpace Courses, we bring you closer to life-changing knowledge.
            Explore a variety of courses across different fields, from technology
            to the arts, and make a difference in your career and life.
          </p>
        </div>

        {/* Tag pills */}
        <div className="mx-auto mt-8 flex max-w-225 flex-wrap justify-center gap-2">
          {tags.map((tag, index) => (
            <button
              key={tag}
              type="button"
              className={`rounded-full px-4 py-2 text-[15px] font-medium transition-colors ${
                index === 0
                  ? "bg-[#D4FB20] text-[#242528]"
                  : "bg-[#F5F5F6] text-[#4B4C53] hover:bg-[#e8e9eb]"
              }`}
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Course grid */}
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {courses.map((course) => (
            <CourseCard key={course.title} course={course} />
          ))}
        </div>

        {/* Category section header */}
        <div className="mt-20 text-center">
          <h2 className="text-[40px] font-semibold tracking-tight text-[#040819]">
            Explore Diverse Learning Paths at ByteSpace
          </h2>
          <p className="mx-auto mt-4 max-w-160 text-[17px] leading-relaxed text-[#82868E]">
            At ByteSpace, we believe in empowering individuals. Whether you&apos;re
            looking to start a new career, enhance your skills, or simply enjoy
            learning, our diverse courses are tailored for all skill levels and interests.
          </p>
        </div>

        {/* Category grid */}
        <div className="mt-10 grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-6">
          {categories.map(({ name, icon }) => (
            <button
              key={name}
              type="button"
              className="flex flex-col items-center gap-3 rounded-3xl border border-[#E5E6E8] bg-white px-3 py-7 text-center transition-shadow hover:shadow-md"
            >
              <div>{icon}</div>
              <span className="text-[16px] font-semibold text-[#242528]">{name}</span>
            </button>
          ))}
        </div>

      </div>
    </section>
  );
}

import { CourseCard } from "@/components/CursorExplore";
import Image from "next/image";

export default function AuthLeft() {
    const courses = [
    {
      title: "Build Digital Asset",
      category: "Development",
      price: "$29",
      image: 1,
      rating: "4.9",
    },
    {
      title: "The Power of Big Data",
      category: "Data Science",
      price: "$35",
      image: 2,
      rating: "4.7",
    },
  ];
  return (
     <div className="relative">
            <div className="w-[373px] h-[384px]">
              <CourseCard course={courses[0]} />
            </div>
            <div className="w-[373px] absolute bottom-25 left-30 z-20 h-[384px]">
              <CourseCard course={courses[1]} />
            </div>

            <Image
              src="/auth-cone.png"
              alt="img"
              width={146}
              height={146}
              className="absolute -top-20 left-15 z-20 object-center object-contain"
            />

            <Image
              src="/auth-spring.png"
              alt="img"
              width={175}
              height={175}
              className="absolute -bottom-7 left-85 z-20 object-center object-contain"
            />

            <Image
              src="/auth-hs.png"
              alt="img"
              width={258}
              height={120}
              className="absolute -bottom-20 left-60 object-center object-contain"
            />
            <Image
              src="/prisma_green.png"
              alt="img"
              width={188}
              height={188}
              className="absolute -bottom-30 -left-5 object-center object-contain"
            />
          </div>
  );
}

import Image from "next/image";
import { CourseCard } from "./CursorExplore";

export function Growth() {
  return (
    <section className="space-y-10">
      <div className="flex justify-center growth overflow-hidden items-center py-24">
        <div className="flex-1 flex flex-col items-center">
          <div className="space-y-10 max-w-[550px]">
            <h2 className="leading-[1.2] text-[44px] text-[#242528] font-semibold">
              Your Path to Professional Growth Starts Here!
            </h2>
            <p className="text-[#4B4C53] text-lg max-w-[477px]">
              Explore our curated selection of courses tailored to enhance your
              capabilities and accelerate your career journey. Whether you are
              looking to sharpen specific skills, gain industry expertise, or
              embark on a new career path entirely, we have the resources you
              need.
            </p>
            <div className="flex gap-14">
              <div className="">
                <p className="text-[#003BE2] text-[36px]">12K</p>
                <p className="text-lg text-[#4B4C53]">Students</p>
              </div>
              <div className="">
                <p className="text-[#003BE2] text-[36px]">70+</p>
                <p className="text-lg text-[#4B4C53]">Courses</p>
              </div>
              <div className="">
                <p className="text-[#003BE2] text-[36px]">16</p>
                <p className="text-lg text-[#4B4C53]">Creators</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1 relative">
          <div className="w-93 h-95">
            <CourseCard
              course={{
                title: "Learn Figma from Basic",
                category: "UI/UX Design",
                price: "$25",
                image: 0,
                rating: "4.8",
              }}
            />
          </div>

          <Image
            src="/course_progress.png"
            alt="img"
            width={588}
            height={300}
            className="absolute z-20 left-20 -bottom-30 object-center object-contain"
          />

          <Image
            src="/learning_progress.png"
            alt="img"
            width={232}
            height={138}
            className="absolute z-20 left-98 bottom-5 object-center object-contain"
          />

          <Image
            src="/spring_2.png"
            alt="img"
            width={200}
            height={200}
            className="absolute z-20 left-115 bottom-20 object-center object-contain"
          />
        </div>
      </div>
      <div className="flex content-create justify-center items-center gap-18 py-24">
        <div className="flex-1 flex flex-col items-cnter">
          <div className="relative w-full mx-auto left-70 top-50">
            <Image
              src="/rev_hs.png"
              alt="img"
              width={258}
              height={123}
              className="absolute z-30 left-55 object-center object-contain -top-40"
            />

            <Image
              src="/rev_girl.png"
              alt="img"
              width={435}
              height={596}
              className="absolute z-20 w-[435px] h-[597px] -bottom-30 object-center object-cover"
            />

            <Image
              src="/rev_spring.png"
              alt="img"
              width={500}
              height={100}
              className="absolute w-[215px] h-[215px] object-center z-20 left-55 -top-102 object-cover"
            />
            <Image
              src="/total_revenue.png"
              alt="img"
              width={232}
              height={119}
              className="absolute w-[232x] h-[119px] object-center -left-17 -top-100 object-cover"
            />
            <Image
              src="/year_date.png"
              alt="img"
              width={100}
              height={100}
              className="absolute w-[134px] h-[134px] object-center -left-17 -top-60 object-cover"
            />
          </div>
        </div>
        <div className="flex-1 flex flex-col items-start">
          <div className="space-y-10 max-w-[550px]">
            <h2 className="leading-[1.2] text-[44px] text-[#242528] font-semibold">
              Create & Manage Courses Easily.
            </h2>
            <p className="text-[#4B4C53] text-lg max-w-[477px]">
              ByteSpace supports individuals or entities in the creation,
              publication, and administration of educational courses.
            </p>
            <div className="space-y-2">
              <div className="text-lg flex items-center">
                <div>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    className="w-4 h-4"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM8 15L3 10L4.41 8.59L8 12.17L15.59 4.58L17 6L8 15Z"
                      fill="#003BE2"
                    />
                  </svg>
                </div>
                <p className="text-[#242528] ml-2 font-medium">
                  Share Your Expertise
                </p>
              </div>
              <div className="text-lg flex items-center">
                <div>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    className="w-4 h-4"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM8 15L3 10L4.41 8.59L8 12.17L15.59 4.58L17 6L8 15Z"
                      fill="#003BE2"
                    />
                  </svg>
                </div>
                <p className="text-[#242528] ml-2 font-medium">
                  Monetize Your Passion{" "}
                </p>
              </div>
              <div className="text-[18px] flex items-center">
                <div>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    className="w-4 h-4"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM8 15L3 10L4.41 8.59L8 12.17L15.59 4.58L17 6L8 15Z"
                      fill="#003BE2"
                    />
                  </svg>
                </div>
                <p className="text-[#242528] ml-2 font-medium">
                  Flexibility and Autonomy{" "}
                </p>
              </div>
              <div className="text-lg flex items-center">
                <div>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    className="w-4 h-4"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM8 15L3 10L4.41 8.59L8 12.17L15.59 4.58L17 6L8 15Z"
                      fill="#003BE2"
                    />
                  </svg>
                </div>
                <p className="text-[#242528] ml-2 font-medium">
                  Build a Community{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>{" "}
    </section>
  );
}

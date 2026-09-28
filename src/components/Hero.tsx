import Button from "@/components/ui/Button";

export default function Hero() {
  return (
    <section className="relative bg-persian-blue grid-pattern overflow-hidden pt-16 pb-20 px-6">
      <div className=" max-w-233.75 mx-auto justify-center text-center items-center">
        <h1 className="font-semibold text-7xl text-white leading-[1.2]">
          Get Access to Hundreds Courses Available
        </h1>
        <p className="text-lg font-normal mt-8 text-shuttle-gray">
          Unlock your creativity, gain valuable knowledge, and grow your
          business with our wide range of courses.
        </p>

        <div className="flex items-center justify-center gap-4 pt-15 overflow-hidden">
          {/* Input */}
          <div className="flex w-111.25 h-auto items-center px-4 py-2 text-gray-400 bg-white gap-2 rounded-full">
              {/* Input */}
               <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.5 11H11.71L11.43 10.73C12.41 9.59 13 8.11 13 6.5C13 2.91 10.09 0 6.5 0C2.91 0 0 2.91 0 6.5C0 10.09 2.91 13 6.5 13C8.11 13 9.59 12.41 10.73 11.43L11 11.71V12.5L16 17.49L17.49 16L12.5 11ZM6.5 11C4.01 11 2 8.99 2 6.5C2 4.01 4.01 2 6.5 2C8.99 2 11 4.01 11 6.5C11 8.99 8.99 11 6.5 11Z" fill="#82868E"></path></svg>
                

            <input
              type="text"
              placeholder="Course, topic, creator"
              className="w-full bg-transparent text-xs text-gray-800 outline-none placeholder:text-gray-400"
            />
          </div>

          {/* Search Button */}
          <button
            type="button"
            className="py-2 px-3 shrink-0 rounded-full bg-[#B7FF00] text-xs font-medium text-black"
          >
            Search
          </button>
        </div>
      </div>
    </section>
  );
}

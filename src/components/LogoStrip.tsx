import { Logo as Logo1, Logo2, Logo3, Logo4 } from "@/components/icons/LogoIpsum";

const logos = [
  { Component: Logo1, name: "Logoipsum" },
  { Component: Logo4, name: "Logoipsum" },
  { Component: Logo2, name: "Logoipsum" },
  { Component: Logo3, name: "Logoipsum" },
  { Component: Logo4, name: "Logoipsum" },
];

export function LogoStrip() {
  return (
    <section className="bg-[#F5F5F6] py-14">
      <div className="mx-auto flex max-w-300 items-center justify-between px-8">
        {logos.map(({ Component, name }, index) => (
          <div key={index} className="flex items-center gap-2.5 opacity-70 hover:opacity-100 transition-opacity">
            <Component />
            <span className="text-[15px] font-bold text-[#82868E]">{name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

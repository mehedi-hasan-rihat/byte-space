import { Logo as Logo1, Logo2, Logo3, Logo4 } from "@/components/icons/LogoIpsum";


const logos = [Logo1, Logo4, Logo2, Logo3, Logo4];

export function LogoStrip() {
  return (
    <section className="py-20 px-38.5 bg-[#F5F5F6]">
      <div className="mx-auto grid max-w-6xl grid-cols-2 items-center gap-6 px-6 sm:grid-cols-3 lg:grid-cols-5">
        {logos.map((Logo, index) => (
          <div key={index} className="flex gap-2 items-center justify-center">
            <Logo />
            <span className="text-[#82868E] font-bold">Logoipsum</span>
          </div>
        ))}
      </div>
    </section>
  );
}

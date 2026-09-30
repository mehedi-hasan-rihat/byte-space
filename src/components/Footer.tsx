const footerColumns = [
  {
    heading: "Courses",
    links: ["Featured Courses", "Featured Categories", "Business", "IT & Software", "Design"],
  },
  {
    heading: "Explore",
    links: ["Development", "Marketing", "Photography", "Finance", "Sport"],
  },
  {
    heading: "Company",
    links: ["Become a Creator", "Affiliate Program", "Contact", "Help Center", "About Us"],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-[#E5E6E8] bg-white">
      <div className="mx-auto max-w-300 px-6 pt-16 pb-8">

        {/* Top grid */}
        <div className="grid gap-12 md:grid-cols-2">

          {/* Brand + newsletter */}
          <div className="max-w-95">
            {/* Logo */}
                    <a href="#" className="flex items-center gap-2.5">
          <svg width="29" height="32" viewBox="0 0 29 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.5 10.5C10.5 4.70101 5.79899 0 0 0V21C0 26.799 4.70101 31.5 10.5 31.5V10.5Z" fill="#D4FB20" />
            <path d="M18.375 10.5C24.174 10.5 28.875 15.201 28.875 21H21C15.201 21 10.5 16.299 10.5 10.5L18.375 10.5Z" fill="#D4FB20" />
            <path d="M18.375 31.5C24.174 31.5 28.875 26.799 28.875 21H21C15.201 21 10.5 25.701 10.5 31.5L18.375 31.5Z" fill="#D4FB20" />
          </svg>
          <span className="text-[22px] font-bold tracking-tight text-black" style={{ fontFamily: "var(--font-clash)" }}>ByteSpace</span>
        </a>

            <p className="mt-4 text-[14px] leading-relaxed text-[#82868E]">
              Stay up to date with our latest features and releases by joining our newsletter.
            </p>

            <form className="mt-5 flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                aria-label="Email address"
                className="h-11 flex-1 rounded-full border border-[#CED0D3] px-4 text-[14px] text-[#040819] outline-none placeholder:text-[#82868E] focus:border-[#003BE2] transition-colors"
              />
              <button
                type="submit"
                className="h-11 shrink-0 rounded-full bg-[#D4FB20] px-5 text-[14px] font-bold text-[#040819] transition hover:bg-[#c5ec16]"
              >
                Subscribe
              </button>
            </form>

            <p className="mt-3 text-[12px] leading-relaxed text-[#82868E]">
              By subscribing, you agree to our Privacy Policy and consent to receive updates.
            </p>
          </div>

          {/* Link columns */}
          <div className="grid grid-cols-3 gap-6">
            {footerColumns.map((col) => (
              <div key={col.heading}>
                <p className="mb-4 text-[13px] font-semibold uppercase tracking-wider text-[#040819]">
                  {col.heading}
                </p>
                <ul className="space-y-3">
                  {col.links.map((link) => (
                    <li key={link}>
                      <a
                        href="#"
                        className="text-[14px] text-[#82868E] transition-colors hover:text-[#040819]"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-20 flex flex-wrap items-center justify-between gap-4 border-t border-[#E5E6E8] pt-6">
          <span className="text-[13px] text-[#82868E]">© 2024 ByteSpace. All rights reserved.</span>
          <div className="flex gap-6">
            {["Privacy Policy", "Terms of Service", "Cookies Settings"].map((l) => (
              <a
                key={l}
                href="#"
                className="text-[13px] text-[#82868E] transition-colors hover:text-[#040819]"
              >
                {l}
              </a>
            ))}
          </div>
        </div>

      </div>
    </footer>
  );
}

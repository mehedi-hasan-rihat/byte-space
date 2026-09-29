const footerLinks = [
  ["Featured Courses", "Featured Categories", "Business", "IT", "Design"],
  ["Development", "Marketing", "Photography", "Finance", "Sport"],
  ["Become a Creator", "Affiliate Program", "Contact", "Help", "About"],
];

export function Footer() {
  return (
    <footer className="max-w-6xl mx-auto px-5 pt-14 pb-8 text-sm">
      <div className="grid md:grid-cols-2 gap-10">
        {/* Brand + newsletter */}
        <div>
          <a href="#" className="flex items-center gap-2 font-extrabold text-lg">
            <span className="w-6 h-6 rounded-md bg-[#D4FB20] inline-block" />
            ByteSpace
          </a>
          <p className="text-[#82868E] text-xs mt-3 max-w-xs leading-relaxed">
            Stay up to date with our latest features and releases by joining our
            newsletter.
          </p>
          <form
            className="mt-5 flex gap-3 max-w-sm"
          >
            <input
              className="flex-1 border border-slate-300 rounded-full px-4 py-2 text-xs outline-none focus:border-[#003BE2] transition-colors"
              placeholder="Enter your email"
              aria-label="Email"
              type="email"
            />
            <button
              type="submit"
              className="bg-[#D4FB20] font-bold text-xs rounded-full px-5 py-2 hover:bg-[#c8f135] transition-colors shrink-0"
            >
              Subscribe
            </button>
          </form>
          <p className="text-[#82868E] text-[11px] mt-3 max-w-xs leading-relaxed">
            By subscribing, you agree to our Privacy Policy and consent to
            receive updates from our company.
          </p>
        </div>

        {/* Link columns */}
        <div className="grid grid-cols-3 gap-6 text-xs text-[#82868E]">
          {footerLinks.map((col, i) => (
            <ul key={i} className="space-y-3">
              {col.map((link) => (
                <li key={link}>
                  <a href="#" className="hover:text-[#040819] transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="flex flex-wrap justify-between gap-3 border-t border-slate-200 mt-12 pt-5 text-[11px] text-[#82868E]">
        <span>© 2023 ByteSpace. All right reserved.</span>
        <span className="flex gap-6">
          {["Privacy Policy", "Terms of Service", "Cookies Settings"].map((l) => (
            <a key={l} href="#" className="hover:text-[#040819] transition-colors">
              {l}
            </a>
          ))}
        </span>
      </div>
    </footer>
  );
}

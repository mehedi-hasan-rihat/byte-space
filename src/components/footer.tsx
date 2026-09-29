export function Brand({ light = false }: { light?: boolean }) {
  return (
    <a
      href="#top"
      className="inline-flex items-center gap-2 font-display text-lg font-extrabold"
      aria-label="ByteSpace home"
    >
               <svg
            width="29"
            height="32"
            viewBox="0 0 29 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.5 10.5C10.5 4.70101 5.79899 0 0 0V21C0 26.799 4.70101 31.5 10.5 31.5V10.5Z"
              fill="#D4FB20"
            />
            <path
              d="M18.375 10.5C24.174 10.5 28.875 15.201 28.875 21H21C15.201 21 10.5 16.299 10.5 10.5L18.375 10.5Z"
              fill="#D4FB20"
            />
            <path
              d="M18.375 31.5C24.174 31.5 28.875 26.799 28.875 21H21C15.201 21 10.5 25.701 10.5 31.5L18.375 31.5Z"
              fill="#D4FB20"
            />
          </svg>
      <span className={light ? "text-hero-foreground" : "text-foreground"}>
        ByteSpace
      </span>
    </a>
  );
}

export function Footer() {
  return (
    <footer id="footer" className="px-5 py-14 sm:px-8">
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1.7fr_1fr_1fr_1fr]">
        <div>
          <Brand />
          <p className="mt-4 max-w-md text-sm text-muted-foreground">
            Stay up to date with the latest courses and resources by joining our
            newsletter.
          </p>
          <form
            className="mt-5 flex max-w-md rounded-full border border-border bg-background p-1"
          >
            <input
              aria-label="Email address"
              placeholder="Enter your email"
              className="min-w-0 flex-1 bg-transparent px-4 text-sm outline-hidden"
            />
            <button className="rounded-full bg-lime px-5 text-xs font-bold text-ink">
              Subscribe
            </button>
          </form>
        </div>
        {[
          ["Featured Courses", "Popular Categories", "Creators", "FAQ"],
          ["Development", "Marketing", "Photography", "Finance"],
          ["Become a Creator", "Affiliate Program", "Contact", "Help"],
        ].map((links, i) => (
          <div key={i} className="space-y-3 text-sm">
            {links.map((link) => (
              <a
                href="#top"
                className="block text-muted-foreground hover:text-foreground"
                key={link}
              >
                {link}
              </a>
            ))}
          </div>
        ))}
      </div>
      <div className="mx-auto mt-12 flex max-w-6xl flex-col justify-between gap-4 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row">
        <p>© 2026 ByteSpace. All rights reserved.</p>
        <div className="flex gap-5">
          <a href="#top">Privacy Policy</a>
          <a href="#top">Terms of Service</a>
          <a href="#top">Cookie Settings</a>
        </div>
      </div>
    </footer>
  );
}

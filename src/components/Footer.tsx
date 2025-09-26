export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="py-16 border-t">
      <div className="mx-auto w-full max-w-6xl">
        <div className="mx-auto gap-y-6 w-full max-w-6xl px-6 text-xs flex items-center justify-between flex-col">
          <div className="flex md:justify-end gap-4">
            <a
              href="https://github.com/chieduagborh"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-brand-2/40 hover:border-brand-1 hover:text-brand-1 transition"
            >
              {/* GitHub icon */}
              <svg
                viewBox="0 0 24 24"
                className="h-4 w-4"
                fill="currentColor"
                aria-hidden
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12 .5a11.5 11.5 0 0 0-3.64 22.41c.58.11.79-.25.79-.56l-.02-2.04c-3.2.7-3.88-1.54-3.88-1.54-.53-1.35-1.3-1.71-1.3-1.71-1.06-.73.08-.72.08-.72 1.17.08 1.78 1.2 1.78 1.2 1.04 1.78 2.73 1.27 3.39.97.11-.76.41-1.27.75-1.56-2.55-.29-5.23-1.28-5.23-5.72 0-1.26.45-2.29 1.2-3.1-.12-.29-.52-1.46.11-3.04 0 0 .98-.31 3.2 1.18.93-.26 1.93-.39 2.92-.39.99 0 1.99.13 2.92.39 2.22-1.49 3.2-1.18 3.2-1.18.63 1.58.23 2.75.11 3.04.75.81 1.2 1.84 1.2 3.1 0 4.45-2.69 5.42-5.25 5.71.42.36.8 1.06.8 2.15l-.01 3.19c0 .31.21.67.8.56A11.5 11.5 0 0 0 12 .5Z"
                />
              </svg>
            </a>

            <a
              href="https://www.linkedin.com/in/chiedu-agborh-378b3774/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-brand-2/40 hover:border-brand-1 hover:text-brand-1 transition"
            >
              {/* LinkedIn icon */}
              <svg
                viewBox="0 0 24 24"
                className="h-4 w-4"
                fill="currentColor"
                aria-hidden
              >
                <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5.001 2.5 2.5 0 0 1 0-5zM3 9h4v12H3zM14.5 9c-2.04 0-3.5 1.33-3.5 3.77V21h-4V9h4v1.74c.56-.94 1.64-1.74 3.36-1.74 2.55 0 4.64 1.67 4.64 5.26V21h-4v-4.9c0-1.54-.55-2.6-1.94-2.6-1.06 0-1.69.71-1.97 1.39-.1.24-.12.58-.12.92V21h-4s.05-10.92 0-12h4v1.7c.53-.82 1.49-1.99 3.55-1.99 2.59 0 4.53 1.69 4.53 5.33V21h-4v-7.02c0-1.7-.61-2.98-2.15-2.98z" />
              </svg>
            </a>
          </div>

          <span>© {year} Chiedu Agborh. All rights reserved.</span>

          <a
            href="/privacy"
            className="text-sm hover:underline uppercase pointer"
          >
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  );
}

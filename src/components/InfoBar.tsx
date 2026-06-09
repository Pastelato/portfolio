import { ArrowDown } from "lucide-react";

const linkClass =
  "group inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.12em] text-ink transition-colors hover:text-muted";

export default function InfoBar() {
  return (
    <section className="container-px mx-auto max-w-[1200px] py-6">
      <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
        <span className="hidden h-px w-10 bg-line sm:block" />

        <a
          href="https://www.linkedin.com/in/sergio-michelotti-9b3b22146"
          target="_blank"
          rel="noreferrer"
          className={linkClass}
        >
          <svg viewBox="0 0 24 24" aria-hidden className="size-4 fill-current">
            <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0z" />
          </svg>
          LinkedIn
        </a>

        <a
          href="https://github.com/Pastelato/"
          target="_blank"
          rel="noreferrer"
          className={linkClass}
        >
          <svg viewBox="0 0 24 24" aria-hidden className="size-4 fill-current">
            <path d="M12 .5C5.37.5 0 5.87 0 12.5c0 5.3 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58v-2.03c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.74.08-.73.08-.73 1.2.08 1.84 1.24 1.84 1.24 1.07 1.83 2.81 1.3 3.5.99.11-.78.42-1.3.76-1.6-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.66.24 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.63-5.49 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.22.7.83.58A12 12 0 0 0 24 12.5C24 5.87 18.63.5 12 .5z" />
          </svg>
          GitHub
        </a>

        <span className="hidden h-px flex-1 bg-line sm:block" />

        <a
          href="mailto:sergiomichelottic@gmail.com"
          className={`${linkClass} sm:ml-0 ml-auto`}
        >
          <svg viewBox="0 0 24 24" aria-hidden className="size-4 fill-current">
            <path d="M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6zm-2 0l-8 5-8-5h16zm0 12H4V8l8 5 8-5v10z" />
          </svg>
          sergiomichelottic@gmail.com
        </a>
      </div>

      {/* Download CV */}
      <div className="mt-8 flex justify-center">
        <a
          href="/cv.pdf"
          download="Sergio-Michelotti-CV.pdf"
          className="group inline-flex flex-col items-center"
        >
          <span className="inline-flex items-center gap-2 text-sm font-semibold tracking-wide text-ink transition-colors group-hover:text-muted">
            Download Cv
            <ArrowDown className="size-4 transition-transform duration-300 group-hover:translate-y-0.5" />
          </span>
          <span className="mt-1 h-px w-full bg-ink transition-colors group-hover:bg-muted" />
        </a>
      </div>
    </section>
  );
}

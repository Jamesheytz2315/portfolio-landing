const interests = [
  {
    number: "01",
    title: "Music",
    description:
      "There is almost always a soundtrack playing while I work, rest, or explore new ideas.",
    visual: (
      <div className="flex h-28 items-end gap-2">
        {[32, 62, 45, 84, 55, 72, 38].map((height, index) => (
          <span
            className="w-2 rounded-full bg-current"
            key={index}
            style={{ height: `${height}%` }}
          />
        ))}
      </div>
    ),
  },
  {
    number: "02",
    title: "Fitness",
    description:
      "Training keeps me disciplined, focused, and always working toward a better version of myself.",
    visual: (
      <div className="flex items-center">
        <span className="h-20 w-3 border-y-8 border-current" />
        <span className="h-px w-24 bg-current" />
        <span className="h-20 w-3 border-y-8 border-current" />
      </div>
    ),
  },
  {
    number: "03",
    title: "Flag football",
    description:
      "I enjoy the speed, teamwork, and quick decision-making that come with every game.",
    visual: (
      <div className="flex size-28 rotate-[-28deg] items-center justify-center rounded-[50%] border-2 border-current">
        <span className="h-16 w-px bg-current" />
        <span className="absolute h-px w-12 bg-current" />
      </div>
    ),
  },
  {
    number: "04",
    title: "Games",
    description:
      "Games are where I unwind, solve problems, and appreciate the details behind great experiences.",
    visual: (
      <div className="relative h-20 w-32 rounded-[2rem] border-2 border-current">
        <span className="absolute left-6 top-1/2 h-1 w-8 -translate-y-1/2 bg-current" />
        <span className="absolute left-[2.35rem] top-1/2 h-8 w-1 -translate-y-1/2 bg-current" />
        <span className="absolute right-7 top-7 size-3 rounded-full border border-current" />
        <span className="absolute right-11 top-11 size-3 rounded-full border border-current" />
      </div>
    ),
  },
];

const principles = [
  {
    number: "01",
    title: "Stay curious",
    description: "Ask good questions and keep learning beyond the classroom.",
  },
  {
    number: "02",
    title: "Keep moving",
    description: "Build momentum through consistency, in code and in life.",
  },
  {
    number: "03",
    title: "Play as a team",
    description: "Listen well, communicate clearly, and help others succeed.",
  },
];

function ArrowIcon() {
  return (
    <svg
      aria-hidden="true"
      className="size-4"
      fill="none"
      viewBox="0 0 16 16"
    >
      <path d="M3 13 13 3M5 3h8v8" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-[#f2f2ed] text-[#11110f]">
      <header className="sticky top-0 z-20 border-b border-black/25 bg-[#f2f2ed]/95 backdrop-blur-sm">
        <div className="mx-auto flex h-16 max-w-[1440px] items-center justify-between px-5 md:px-10">
          <a className="font-semibold tracking-tight" href="#top">
            YOUR NAME
          </a>
          <nav aria-label="Primary navigation">
            <ul className="flex items-center gap-5 text-xs font-medium uppercase tracking-[0.16em] md:gap-9">
              <li>
                <a className="nav-link" href="#about">
                  About
                </a>
              </li>
              <li>
                <a className="nav-link" href="#interests">
                  Interests
                </a>
              </li>
              <li className="hidden sm:block">
                <a className="nav-link" href="#education">
                  Education
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <main id="top">
        <section className="mx-auto flex min-h-[calc(100vh-4rem)] max-w-[1440px] flex-col justify-between px-5 pb-8 pt-12 md:px-10 md:pb-10 md:pt-20">
          <div className="grid gap-10 md:grid-cols-12">
            <div className="md:col-span-3">
              <p className="eyebrow">Hello, I&apos;m</p>
              <p className="mt-2 text-sm text-black/55">Fresh graduate · Computer Science</p>
            </div>
            <h1 className="max-w-5xl text-[clamp(3.7rem,9.5vw,9rem)] font-medium leading-[0.86] tracking-[-0.065em] md:col-span-9">
              Curious by
              <br />
              <span className="text-black/35">nature.</span>
            </h1>
          </div>

          <div className="grid items-end gap-8 border-t border-black/25 pt-6 md:grid-cols-12">
            <p className="max-w-md text-base leading-relaxed text-black/65 md:col-span-6 md:col-start-4">
              I&apos;m a recent Computer Science graduate who enjoys learning
              how things work—whether it&apos;s technology, a new training
              routine, a team play, or a great game.
            </p>
            <a
              className="inline-flex w-fit items-center gap-3 border-b border-black pb-1 text-sm font-medium md:col-span-3 md:col-start-10 md:justify-self-end"
              href="#about"
            >
              Get to know me
              <span className="rotate-135">
                <ArrowIcon />
              </span>
            </a>
          </div>
        </section>

        <section
          className="border-y border-black/25 bg-[#deded9]"
          id="about"
        >
          <div className="mx-auto grid max-w-[1440px] gap-14 px-5 py-20 md:grid-cols-12 md:px-10 md:py-28">
            <div className="md:col-span-3">
              <p className="eyebrow">A little about me</p>
            </div>
            <div className="md:col-span-8 md:col-start-5">
              <p className="text-[clamp(2rem,4.2vw,4.5rem)] font-medium leading-[1.05] tracking-[-0.045em]">
                I&apos;m at the beginning of my career—and excited about
                everything there is to learn.
              </p>
              <div className="mt-16 grid gap-10 border-t border-black/25 pt-8 sm:grid-cols-2 md:mt-24">
                <p className="max-w-sm text-lg leading-relaxed">
                  My Computer Science background taught me to break down
                  problems, think logically, and stay patient when the answer
                  is not obvious.
                </p>
                <p className="max-w-sm text-lg leading-relaxed text-black/60">
                  Outside the screen, I find energy in music, fitness, flag
                  football, and games. They keep me balanced, curious, and
                  connected to other people.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section
          className="mx-auto max-w-[1440px] px-5 py-20 md:px-10 md:py-28"
          id="interests"
        >
          <div className="mb-12 flex items-end justify-between md:mb-16">
            <div>
              <p className="eyebrow">Beyond the screen</p>
              <h2 className="mt-3 text-4xl font-medium tracking-[-0.04em] md:text-6xl">
                Things I enjoy
              </h2>
            </div>
            <p className="hidden max-w-xs text-right text-sm leading-relaxed text-black/50 sm:block">
              The interests that shape how I think, recharge, and connect.
            </p>
          </div>

          <div className="grid border-l border-t border-black/25 sm:grid-cols-2 lg:grid-cols-4">
            {interests.map((interest) => (
              <article
                className="group flex min-h-[27rem] flex-col border-b border-r border-black/25 p-6 transition-colors hover:bg-[#deded9] md:p-7"
                key={interest.number}
              >
                <span className="text-xs tracking-[0.18em] text-black/45">
                  {interest.number}
                </span>
                <div
                  aria-hidden="true"
                  className="flex flex-1 items-center justify-center text-black/25 transition-colors group-hover:text-black/45"
                >
                  {interest.visual}
                </div>
                <h3 className="text-2xl font-medium tracking-tight">
                  {interest.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-black/55">
                  {interest.description}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section
          className="border-y border-black/25 bg-[#11110f] text-[#f2f2ed]"
          id="education"
        >
          <div className="mx-auto grid max-w-[1440px] gap-14 px-5 py-20 md:grid-cols-12 md:px-10 md:py-28">
            <div className="md:col-span-3">
              <p className="eyebrow text-white/55">Education</p>
            </div>
            <div className="md:col-span-8 md:col-start-5">
              <p className="text-sm uppercase tracking-[0.15em] text-white/45">
                University of San Carlos
              </p>
              <h2 className="mt-6 text-[clamp(2.7rem,6.2vw,6.5rem)] font-medium leading-[0.95] tracking-[-0.055em]">
                Bachelor of Science in Computer Science
              </h2>
              <div className="mt-16 grid gap-8 border-t border-white/25 pt-7 sm:grid-cols-2 md:mt-24">
                <div>
                  <p className="eyebrow text-white/45">Chapter</p>
                  <p className="mt-3 text-lg">University graduate</p>
                </div>
                <div>
                  <p className="eyebrow text-white/45">What&apos;s next</p>
                  <p className="mt-3 max-w-sm text-lg leading-relaxed text-white/70">
                    Looking forward to putting my foundation into practice,
                    learning from a great team, and growing through real-world
                    challenges.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-[1440px] px-5 py-20 md:px-10 md:py-28">
          <div className="grid gap-12 md:grid-cols-12">
            <div className="md:col-span-3">
              <p className="eyebrow">What guides me</p>
              <h2 className="mt-3 text-4xl font-medium tracking-[-0.04em]">
                Simple principles
              </h2>
            </div>
            <ol className="md:col-span-8 md:col-start-5">
              {principles.map((principle) => (
                <li
                  className="grid gap-3 border-t border-black/25 py-6 sm:grid-cols-[4rem_1fr_1.5fr] sm:gap-6"
                  key={principle.number}
                >
                  <span className="text-sm text-black/45">{principle.number}</span>
                  <h3 className="text-xl font-medium">{principle.title}</h3>
                  <p className="max-w-sm leading-relaxed text-black/60">
                    {principle.description}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section
          className="border-t border-black/25 bg-[#deded9] px-5 py-20 md:px-10 md:py-24"
          id="contact"
        >
          <div className="mx-auto max-w-[1440px]">
            <p className="eyebrow text-black/50">Let&apos;s connect</p>
            <a
              className="group mt-8 flex items-end justify-between border-b border-black/35 pb-5"
              href="mailto:hello@yourname.com"
            >
              <span className="text-[clamp(3rem,8vw,8rem)] font-medium leading-none tracking-[-0.06em]">
                Say hello.
              </span>
              <span className="mb-2 flex size-12 items-center justify-center rounded-full border border-black/40 transition-colors group-hover:bg-black group-hover:text-white md:mb-4 md:size-16">
                <ArrowIcon />
              </span>
            </a>
            <footer className="mt-16 flex flex-col gap-6 text-sm text-black/60 sm:flex-row sm:items-end sm:justify-between md:mt-24">
              <div>
                <a
                  className="block text-black hover:underline"
                  href="mailto:hello@yourname.com"
                >
                  hello@yourname.com
                </a>
                <span>Open to new opportunities</span>
              </div>
              <div className="flex gap-6">
                <a className="hover:text-black" href="#top">
                  LinkedIn
                </a>
                <a className="hover:text-black" href="#top">
                  GitHub
                </a>
              </div>
              <a className="hover:text-black" href="#top">
                Back to top ↑
              </a>
            </footer>
          </div>
        </section>
      </main>
    </div>
  );
}

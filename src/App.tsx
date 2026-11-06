const profile = {
  name: "James Matthew C. Garcia",
  shortName: "James Garcia",
  email: "Jamesgarcia862@gmail.com",
  location: "Cebu City, Philippines",
  github: "https://github.com/Jamesheytz2315",
  linkedin: "", // TODO: paste your LinkedIn URL here. It stays hidden while empty.
  resume: "/resume/James-Garcia-Resume.pdf",
};

const stack = [
  { label: "Backend", items: ["Laravel", "PHP"] },
  { label: "Frontend", items: ["Vue", "Tailwind CSS"] },
  { label: "Database", items: ["MySQL"] },
  { label: "Environment", items: ["Docker"] },
];

const skills = [
  { label: "Backend", items: ["PHP", "Laravel", "MySQL"] },
  { label: "Frontend", items: ["Vue", "React", "HTML", "CSS", "Tailwind"] },
  { label: "Languages", items: ["C", "Python", "Java"] },
  { label: "Tools", items: ["Docker"] },
];

const certifications = [
  { title: "DataCamp: Associate Data Analyst", year: "2024" },
  { title: "PhilNITS: Half passer", year: "2025" },
];

const interests = [
  {
    number: "01",
    title: "Music",
    description: "There is almost always a soundtrack playing while I work, rest, or explore new ideas.",
    visual: (
      <div className="flex h-20 items-end gap-2">
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
    description: "Training keeps me disciplined, focused, and always working toward a better version of myself.",
    visual: (
      <div className="flex items-center">
        <span className="h-16 w-3 border-y-8 border-current" />
        <span className="h-px w-20 bg-current" />
        <span className="h-16 w-3 border-y-8 border-current" />
      </div>
    ),
  },
  {
    number: "03",
    title: "Flag football",
    description: "I enjoy the speed, teamwork, and quick decision-making that come with every game.",
    visual: (
      <div className="flex size-20 rotate-[-28deg] items-center justify-center rounded-[50%] border-2 border-current">
        <span className="h-12 w-px bg-current" />
        <span className="absolute h-px w-10 bg-current" />
      </div>
    ),
  },
  {
    number: "04",
    title: "Games",
    description: "Games are where I unwind, solve problems, and appreciate the details behind great experiences.",
    visual: (
      <div className="relative h-16 w-28 rounded-[2rem] border-2 border-current">
        <span className="absolute left-5 top-1/2 h-1 w-7 -translate-y-1/2 bg-current" />
        <span className="absolute left-[2rem] top-1/2 h-7 w-1 -translate-y-1/2 bg-current" />
        <span className="absolute right-6 top-5 size-3 rounded-full border border-current" />
        <span className="absolute right-10 top-9 size-3 rounded-full border border-current" />
      </div>
    ),
  },
];

function ArrowIcon() {
  return (
    <svg aria-hidden="true" className="size-4" fill="none" viewBox="0 0 16 16">
      <path d="M3 13 13 3M5 3h8v8" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

function Tags({ items }: { items: string[] }) {
  return (
    <ul className="flex flex-wrap gap-2">
      {items.map((item) => (
        <li
          className="rounded-full border border-current/25 px-4 py-2 text-sm"
          key={item}
        >
          {item}
        </li>
      ))}
    </ul>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-[#f2f2ed] text-[#11110f]">
      <header className="sticky top-0 z-20 border-b border-black/25 bg-[#f2f2ed]/95 backdrop-blur-sm">
        <div className="mx-auto flex h-16 max-w-[1440px] items-center justify-between gap-4 px-5 md:px-10">
          <a className="whitespace-nowrap font-semibold tracking-tight" href="#top">
            {profile.shortName}
          </a>
          <nav aria-label="Primary navigation" className="min-w-0">
            <ul className="flex items-center gap-5 overflow-x-auto text-xs font-medium uppercase tracking-[0.16em] md:gap-8">
              <li><a className="nav-link" href="#experience">Experience</a></li>
              <li><a className="nav-link" href="#projects">Projects</a></li>
              <li><a className="nav-link" href="#skills">Skills</a></li>
              <li><a className="nav-link" href="#education">Education</a></li>
              <li><a className="nav-link" href="#about">About</a></li>
              <li><a className="nav-link" href="#contact">Contact</a></li>
              <li>
                <a
                  className="whitespace-nowrap border border-black px-3 py-2 hover:bg-black hover:text-[#f2f2ed]"
                  download
                  href={profile.resume}
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <main id="top">
        {/* Hero */}
        <section className="mx-auto flex min-h-[calc(100vh-4rem)] max-w-[1440px] flex-col justify-between gap-12 px-5 pb-8 pt-12 md:px-10 md:pb-10 md:pt-20">
          <div className="grid gap-10 md:grid-cols-12">
            <div className="md:col-span-3">
              <img
                alt={`Portrait of ${profile.name}`}
                className="aspect-[4/5] w-40 border border-black/25 object-cover md:w-full"
                height={750}
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                }}
                src="/images/profile.jpg"
                width={600}
              />
            </div>
            <div className="md:col-span-9">
              <p className="inline-flex items-center gap-2 border border-black/25 px-3 py-1.5 text-xs font-medium uppercase tracking-[0.16em]">
                <span aria-hidden="true" className="size-2 rounded-full bg-emerald-600" />
                Open to work
              </p>
              <h1 className="mt-6 text-[clamp(3rem,7.5vw,7.5rem)] font-medium leading-[0.92] tracking-[-0.06em]">
                James Matthew
                <br />
                Garcia
              </h1>
              <p className="mt-6 text-[clamp(1.25rem,2.2vw,2rem)] font-medium tracking-[-0.02em]">
                Full Stack Developer
                <span className="text-black/55"> · Laravel · Vue · MySQL</span>
              </p>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-black/70 md:text-lg">
                Computer Science graduate with 300 hours of full stack OJT on an
                ERP system. Looking to start my career in software development.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-4">
                <a
                  className="inline-flex items-center bg-[#11110f] px-6 py-3.5 text-sm font-medium text-[#f2f2ed] hover:bg-black/80"
                  download
                  href={profile.resume}
                >
                  Download resume
                </a>
                <a
                  className="inline-flex items-center border border-black px-6 py-3.5 text-sm font-medium hover:bg-black hover:text-[#f2f2ed]"
                  href="#contact"
                >
                  Contact me
                </a>
                <a className="border-b border-black pb-1 text-sm font-medium" href="#experience">
                  View experience ↓
                </a>
              </div>
            </div>
          </div>

          <dl className="grid gap-6 border-t border-black/25 pt-6 sm:grid-cols-3">
            <div>
              <dt className="eyebrow text-black/55">Education</dt>
              <dd className="mt-2">BS Computer Science, USC · 2026</dd>
            </div>
            <div>
              <dt className="eyebrow text-black/55">Experience</dt>
              <dd className="mt-2">300-hour Full Stack OJT</dd>
            </div>
            <div>
              <dt className="eyebrow text-black/55">Location</dt>
              <dd className="mt-2">{profile.location}</dd>
            </div>
          </dl>
        </section>

        {/* Experience */}
        <section className="border-y border-black/25 bg-[#deded9]" id="experience">
          <div className="mx-auto grid max-w-[1440px] gap-14 px-5 py-20 md:grid-cols-12 md:px-10 md:py-28">
            <div className="md:col-span-3">
              <p className="eyebrow">Experience</p>
            </div>
            <div className="md:col-span-8 md:col-start-5">
              <p className="text-sm text-black/65">Itech-Rar Solutions, Inc.</p>
              <h2 className="mt-4 text-[clamp(2.2rem,5vw,4.5rem)] font-medium leading-[1] tracking-[-0.05em]">
                Full Stack Developer (OJT)
              </h2>
              {/* TODO: add 1 to 3 bullets on what YOU built in the ERP, plus dates. */}
              <dl className="mt-14 border-t border-black/25 md:mt-20">
                <div className="grid gap-2 border-b border-black/25 py-5 sm:grid-cols-[10rem_1fr]">
                  <dt className="text-sm text-black/65">Duration</dt>
                  <dd className="text-lg">300 OJT hours</dd>
                </div>
                <div className="grid gap-2 border-b border-black/25 py-5 sm:grid-cols-[10rem_1fr]">
                  <dt className="text-sm text-black/65">Project</dt>
                  <dd className="text-lg">Construction ERP system</dd>
                </div>
                {stack.map((group) => (
                  <div
                    className="grid gap-2 border-b border-black/25 py-5 sm:grid-cols-[10rem_1fr]"
                    key={group.label}
                  >
                    <dt className="text-sm text-black/65">{group.label}</dt>
                    <dd className="text-lg">{group.items.join(", ")}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </section>

        {/* Projects */}
        <section className="mx-auto max-w-[1440px] px-5 py-20 md:px-10 md:py-28" id="projects">
          <div className="grid gap-14 md:grid-cols-12">
            <div className="md:col-span-3">
              <p className="eyebrow">Projects</p>
            </div>
            <article className="md:col-span-8 md:col-start-5">
              <p className="text-sm text-black/65">Machine learning · Academic project</p>
              <h2 className="mt-4 text-[clamp(1.8rem,3.6vw,3.2rem)] font-medium leading-[1.05] tracking-[-0.04em]">
                Clustering &amp; Classification of Lifestyle Habits for Identifying Stress Levels
              </h2>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-black/70">
                A machine learning model that predicts stress levels from seven
                lifestyle habits.
              </p>
              {/* TODO: add a GitHub or report link when available. */}
              <dl className="mt-14 grid gap-8 border-t border-black/25 pt-8 sm:grid-cols-2">
                <div>
                  <dd className="text-5xl font-medium tracking-[-0.05em] md:text-7xl">93.24%</dd>
                  <dt className="mt-2 text-sm text-black/65">Test accuracy</dt>
                </div>
                <div>
                  <dd className="text-5xl font-medium tracking-[-0.05em] md:text-7xl">&gt; 0.95</dd>
                  <dt className="mt-2 text-sm text-black/65">Macro AUC-ROC</dt>
                </div>
              </dl>
            </article>
          </div>
        </section>

        {/* Skills */}
        <section className="border-y border-black/25 bg-[#deded9]" id="skills">
          <div className="mx-auto grid max-w-[1440px] gap-14 px-5 py-20 md:grid-cols-12 md:px-10 md:py-28">
            <div className="md:col-span-3">
              <p className="eyebrow">Technical skills</p>
            </div>
            <div className="grid gap-10 md:col-span-8 md:col-start-5">
              {skills.map((group) => (
                <div className="grid gap-4 sm:grid-cols-[10rem_1fr]" key={group.label}>
                  <h3 className="text-sm text-black/65">{group.label}</h3>
                  <Tags items={group.items} />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Education */}
        <section className="bg-[#11110f] text-[#f2f2ed]" id="education">
          <div className="mx-auto grid max-w-[1440px] gap-14 px-5 py-20 md:grid-cols-12 md:px-10 md:py-28">
            <div className="md:col-span-3">
              <p className="eyebrow text-white/65">Education</p>
            </div>
            <div className="md:col-span-8 md:col-start-5">
              <p className="text-sm text-white/65">University of San Carlos · 2023 to 2026</p>
              <h2 className="mt-4 text-[clamp(2.2rem,5vw,4.5rem)] font-medium leading-[1] tracking-[-0.05em]">
                Bachelor of Science in Computer Science
              </h2>
              <dl className="mt-14 border-t border-white/25">
                <div className="grid gap-2 border-b border-white/25 py-5 sm:grid-cols-[10rem_1fr]">
                  <dt className="text-sm text-white/65">GWA</dt>
                  <dd className="text-lg">1.54</dd>
                </div>
                <div className="grid gap-2 border-b border-white/25 py-5 sm:grid-cols-[10rem_1fr]">
                  <dt className="text-sm text-white/65">Senior high school</dt>
                  <dd className="text-lg">STEM, University of San Carlos · 2021 to 2023</dd>
                </div>
                {certifications.map((cert) => (
                  <div
                    className="grid gap-2 border-b border-white/25 py-5 sm:grid-cols-[10rem_1fr]"
                    key={cert.title}
                  >
                    <dt className="text-sm text-white/65">Certification</dt>
                    <dd className="text-lg">
                      {cert.title} · {cert.year}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </section>

        {/* About */}
        <section className="mx-auto max-w-[1440px] px-5 py-20 md:px-10 md:py-28" id="about">
          <div className="grid gap-14 md:grid-cols-12">
            <div className="md:col-span-3">
              <p className="eyebrow">About</p>
            </div>
            <div className="md:col-span-8 md:col-start-5">
              <p className="text-[clamp(1.8rem,3.6vw,3.2rem)] font-medium leading-[1.1] tracking-[-0.04em]">
                I&apos;m eager to learn from real-world experience, contribute to
                team projects, and grow into a reliable and capable developer.
              </p>
              <div className="mt-14 border-t border-black/25 pt-8">
                <p className="text-sm text-black/65">Languages</p>
                <p className="mt-4 text-lg">English, Filipino</p>
              </div>
            </div>

            <div className="md:col-span-12">
              <p className="eyebrow mb-6">Beyond the screen</p>
              <div className="grid border-l border-t border-black/25 sm:grid-cols-2 lg:grid-cols-4">
                {interests.map((interest) => (
                  <article
                    className="group flex min-h-[18rem] flex-col border-b border-r border-black/25 p-6 transition-colors hover:bg-[#deded9]"
                    key={interest.number}
                  >
                    <span className="text-xs tracking-[0.18em] text-black/55">{interest.number}</span>
                    <div
                      aria-hidden="true"
                      className="flex flex-1 items-center justify-center text-black/25 transition-colors group-hover:text-black/45"
                    >
                      {interest.visual}
                    </div>
                    <h3 className="text-xl font-medium tracking-tight">{interest.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-black/65">{interest.description}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section className="border-t border-black/25 bg-[#deded9] px-5 py-20 md:px-10 md:py-24" id="contact">
          <div className="mx-auto max-w-[1440px]">
            <p className="eyebrow text-black/65">Contact</p>
            <a
              className="group mt-8 flex items-end justify-between border-b border-black/35 pb-5"
              href={`mailto:${profile.email}`}
            >
              <span className="text-[clamp(3rem,8vw,8rem)] font-medium leading-none tracking-[-0.06em]">
                Say hello.
              </span>
              <span className="mb-2 flex size-12 items-center justify-center rounded-full border border-black/40 transition-colors group-hover:bg-black group-hover:text-white md:mb-4 md:size-16">
                <ArrowIcon />
              </span>
            </a>
            <footer className="mt-16 flex flex-col gap-6 text-sm text-black/70 sm:flex-row sm:items-end sm:justify-between md:mt-24">
              <div>
                <a className="block text-black hover:underline" href={`mailto:${profile.email}`}>
                  {profile.email}
                </a>
                <span>{profile.location} · Open to new opportunities</span>
              </div>
              <div className="flex flex-wrap gap-6">
                <a className="hover:text-black" href={profile.github} rel="noreferrer" target="_blank">
                  GitHub
                </a>
                {profile.linkedin && (
                  <a className="hover:text-black" href={profile.linkedin} rel="noreferrer" target="_blank">
                    LinkedIn
                  </a>
                )}
                <a className="hover:text-black" download href={profile.resume}>
                  Resume (PDF)
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
// BSS – Home + Music Teaser (React)
// Branding: apricot orange (#FFB267 approx) + black (#000)
// Usage:
// - If you're on Next.js App Router: save as app/page.jsx (home) and copy the MusicPage content to app/mizik/page.jsx.
// - If you're on Pages Router: save the default export to pages/index.jsx and copy MusicPage to pages/mizik.jsx.
// - Place your three audio files into /public/audio (or update the src URLs below).
// - Replace COVER_URL placeholders with your actual cover images or logo.

const TRACKS = [
  {
    id: "matoman-bss",
    title: "MATOMAN BSS",
    artist: "Briyant Solèy Signo 1815",
    duration: "3:47",
    src: "/audio/matoman-bss.mp3", // TODO: update
    cover: "/images/bss-cover-1.jpg", // TODO: update (or keep logo)
  },
  {
    id: "mizik-2",
    title: "Mizik #2",
    artist: "Briyant Solèy Signo 1815",
    duration: "4:12",
    src: "/audio/mizik-2.mp3", // TODO: update
    cover: "/images/bss-cover-2.jpg", // TODO: update
  },
  {
    id: "mizik-3",
    title: "Mizik #3",
    artist: "Briyant Solèy Signo 1815",
    duration: "3:58",
    src: "/audio/mizik-3.mp3", // TODO: update
    cover: "/images/bss-cover-3.jpg", // TODO: update
  },
];

function SectionTitle({ kreyol, english, subtle }) {
  return (
    <div className="flex items-center justify-between">
      <h2 className="text-xl sm:text-2xl font-bold tracking-tight">
        <span className="text-black">{kreyol}</span>
        <span className="text-neutral-500 ml-2 font-normal">{english}</span>
      </h2>
      {subtle ? (
        <span className="text-xs text-neutral-500 hidden sm:block">{subtle}</span>
      ) : null}
    </div>
  );
}

function TrackCard({ track, compact=false }) {
  return (
    <div className="group rounded-2xl border border-neutral-200 shadow-sm hover:shadow-md transition-shadow bg-white overflow-hidden">
      <div className="flex items-center gap-4 p-4">
        <div className="relative w-14 h-14 shrink-0 rounded-xl overflow-hidden bg-black/5">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={track.cover || "/images/bss-logo.png"}
            alt={track.title}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="min-w-0 flex-1">
          <p className="text-sm text-neutral-500">{track.artist}</p>
          <h3 className="text-base font-semibold truncate">{track.title}</h3>
          <p className="text-xs text-neutral-500">{track.duration}</p>
        </div>
      </div>
      <div className="px-4 pb-4">
        <audio controls className="w-full rounded-lg outline-none">
          <source src={track.src} type="audio/mpeg" />
          Navigatè ou a pa sipòte odyo an.
        </audio>
      </div>
    </div>
  );
}

function MusicTeaser() {
  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="flex items-center justify-between mb-4">
        <SectionTitle kreyol="Nouvo Mizik" english=" • New Tracks" subtle="3 mizik – koute koulye a" />
        <a
          href="/mizik"
          className="hidden sm:inline-flex items-center gap-2 rounded-full border border-black px-4 py-2 text-sm font-medium hover:bg-black hover:text-white transition-colors"
        >
          Ale sou paj Mizik
          <span aria-hidden>→</span>
        </a>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {TRACKS.map((t) => (
          <TrackCard key={t.id} track={t} compact />
        ))}
      </div>
      <div className="sm:hidden mt-6 text-center">
        <a
          href="/mizik"
          className="inline-flex items-center gap-2 rounded-full border border-black px-4 py-2 text-sm font-medium hover:bg-black hover:text-white transition-colors"
        >
          Ale sou paj Mizik <span aria-hidden>→</span>
        </a>
      </div>
    </section>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#FFB267]/30 to-white"/>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20">
        <div className="flex flex-col sm:flex-row items-center gap-8">
          {/* Logo / Badge */}
          <div className="w-28 h-28 sm:w-36 sm:h-36 rounded-2xl bg-black flex items-center justify-center shadow-lg">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/bss-logo.png" alt="BSS Logo" className="w-24 sm:w-28 h-auto" />
          </div>
          {/* Text */}
          <div className="text-center sm:text-left">
            <p className="uppercase tracking-widest text-xs sm:text-sm text-black/80">Sit Ofisyèl • Officiel</p>
            <h1 className="text-3xl sm:text-5xl font-extrabold leading-tight mt-2">
              Briyant Solèy <span className="text-[#FFB267]">Signo 1815</span>
            </h1>
            <p className="mt-3 text-neutral-700 max-w-xl">
              Yon mountain, yon vizyon, yon limyè ki pap janm ka etenn. Tout wouj jon abrikot ak nwa.
            </p>
            <div className="mt-5 flex flex-wrap gap-3 justify-center sm:justify-start">
              <a href="#mizik" className="rounded-full bg-black text-white px-5 py-2 text-sm font-medium hover:opacity-90">Koute Mizik</a>
              <a href="/videyo" className="rounded-full border border-black px-5 py-2 text-sm font-medium hover:bg-black hover:text-white">Gade Videyo</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white text-black">
      <Hero />
      {/* Teaser anchor for quick jump */}
      <div id="mizik" />
      <MusicTeaser />
      <footer className="border-t mt-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 text-sm text-neutral-600">
          © 2025 Briyant Solèy Signo 1815 • Nwa & Jon Abrikot • BSS toujou kléré
        </div>
      </footer>
    </main>
  );
}

// --- Full Music Page ---
// Copy below into app/mizik/page.jsx (App Router) or pages/mizik.jsx (Pages Router)
export function MusicPage() {
  return (
    <main className="min-h-screen bg-white text-black">
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <SectionTitle kreyol="Mizik Ofisyèl" english=" • Official Tracks" subtle={`${TRACKS.length} mizik`} />
        <p className="mt-2 text-neutral-700">Koute, pataje, epi soutni BSS. Mèsi pou lanmou a.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
          {TRACKS.map((t) => (
            <TrackCard key={t.id} track={t} />
          ))}
        </div>
      </section>
    </main>
  );
}


Nice. I dropped a clean homepage + “Nouvo Mizik” teaser into the canvas—ready to paste into your repo.

Quick install:

Next.js (either router):

Put the default export in pages/index.jsx (or app/page.jsx).

Copy the MusicPage part into pages/mizik.jsx (or app/mizik/page.jsx).


Put your 3 MP3s in /public/audio/ and swap the src placeholders. Same for cover images (or use the BSS logo).


Want me to wire this into your GitHub repo and push a Vercel deploy, or do you prefer to drop the files in yourself?


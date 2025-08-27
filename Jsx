// pages/mizik.jsx
const TRACKS = [
  { id: "matoman-bss", title: "MATOMAN BSS", artist: "Briyant Solèy Signo 1815", duration: "3:47", src: "/audio/matoman-bss.mp3", cover: "/images/bss-cover-1.jpg" },
  { id: "mizik-2", title: "Mizik #2", artist: "Briyant Solèy Signo 1815", duration: "4:12", src: "/audio/mizik-2.mp3", cover: "/images/bss-cover-2.jpg" },
  { id: "mizik-3", title: "Mizik #3", artist: "Briyant Solèy Signo 1815", duration: "3:58", src: "/audio/mizik-3.mp3", cover: "/images/bss-cover-3.jpg" },
];

function TrackCard({ track }) {
  return (
    <div className="group rounded-2xl border border-neutral-200 shadow-sm hover:shadow-md transition-shadow bg-white overflow-hidden">
      <div className="flex items-center gap-4 p-4">
        <div className="relative w-14 h-14 shrink-0 rounded-xl overflow-hidden bg-black/5">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={track.cover || "/images/bss-logo.png"} alt={track.title} className="w-full h-full object-cover" />
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

export default function MusicPage() {
  return (
    <main className="min-h-screen bg-white text-black">
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex items-center justify-between">
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight">
            <span className="text-black">Mizik Ofisyèl</span>
            <span className="text-neutral-500 ml-2 font-normal"> • Official Tracks</span>
          </h2>
          <span className="text-xs text-neutral-500 hidden sm:block">{TRACKS.length} mizik</span>
        </div>
        <p className="mt-2 text-neutral-700">Koute, pataje, epi soutni BSS. Mèsi pou lanmou a.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
          {TRACKS.map(t => <TrackCard key={t.id} track={t} />)}
        </div>
      </section>
    </main>
  );
}

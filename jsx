export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[#d77c00] to-black text-white">
      <main className="text-center p-6">
        <img
          src="/logo.png"
          alt="Briyant Solèy Signo 1815 Logo"
          className="w-60 h-auto mx-auto mb-4"
        />
        <h1 className="text-3xl font-bold mb-2">Briyant Solèy Signo 1815</h1>
        <p className="max-w-2xl mx-auto leading-relaxed">
          “Briyant Solèy se yon mountain, yon vision, yon limyè ki pap janm ka etenn.”
        </p>
      </main>
    </div>
  );
}

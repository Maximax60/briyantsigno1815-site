// pages/index.jsx
import Head from "next/head";

export default function HomePage() {
  const TITLE = "BSS 1815 — Sit Ofisyèl • Nouvo Mizik";
  const DESC  = "Koute dènye mizik BSS 1815 sou paj lakay la. Briyant Solèy toujou kléré.";
  const URL   = "https://briyantsoleysigno1815.com/";
  const IMG   = `${URL}og-bss.jpg`;

  return (
    <>
      <Head>
        {/* Page-specific overrides (these replace the global defaults for this page) */}
        <title>{TITLE}</title>
        <meta name="description" content={DESC} />
        <meta property="og:title" content={TITLE} />
        <meta property="og:description" content={DESC} />
        <meta property="og:url" content={URL} />
        <meta property="og:image" content={IMG} />
        <meta name="twitter:title" content={TITLE} />
        <meta name="twitter:description" content={DESC} />
        <meta name="twitter:image" content={IMG} />
      </Head>

      {/* your existing homepage hero + music teaser JSX goes here */}
    </>
  );
}

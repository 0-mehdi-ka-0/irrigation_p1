import { useEffect, useState, useCallback } from "react";
import { slides } from "./slideData";
import { ChevronLeft, ChevronRight, Grid3x3, Maximize2, X } from "lucide-react";

export default function SlideDeck() {
  const [current, setCurrent] = useState(0);
  const [showGrid, setShowGrid] = useState(false);

  const next = useCallback(() => setCurrent((c) => Math.min(c + 1, slides.length - 1)), []);
  const prev = useCallback(() => setCurrent((c) => Math.max(c - 1, 0)), []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === " ") { e.preventDefault(); next(); }
      if (e.key === "ArrowLeft") prev();
      if (e.key === "g" || e.key === "G") setShowGrid((s) => !s);
      if (e.key === "f" || e.key === "F") document.documentElement.requestFullscreen?.();
      if (e.key === "Escape") setShowGrid(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [next, prev]);

  const slide = slides[current];

  return (
    <div className="min-h-screen flex flex-col">
      {/* Top bar */}
      <header className="px-6 py-3 flex items-center justify-between border-b border-border bg-background/60 backdrop-blur z-20">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-lg bg-emerald flex items-center justify-center text-navy-deep font-extrabold">SI</div>
          <div>
            <div className="font-display font-bold text-sm leading-none">Autonomous Smart Irrigation</div>
            <div className="text-xs text-muted-foreground mt-0.5">IoT Architecture · Academic 2026</div>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button onClick={() => setShowGrid(true)} className="p-2 rounded-lg hover:bg-card transition" title="Grid (G)">
            <Grid3x3 className="w-4 h-4" />
          </button>
          <button onClick={() => document.documentElement.requestFullscreen?.()} className="p-2 rounded-lg hover:bg-card transition" title="Fullscreen (F)">
            <Maximize2 className="w-4 h-4" />
          </button>
        </div>
      </header>

      {/* Slide area — fixed 16:9 */}
      <main className="flex-1 flex items-center justify-center p-6">
        <div
          key={slide.id}
          className="relative w-full max-w-[1400px] aspect-video bg-card/30 backdrop-blur-sm rounded-3xl border border-border overflow-hidden shadow-[var(--shadow-card)] slide-in"
        >
          {slide.render()}

          {/* Logo placeholder top-right */}
          <div className="absolute top-5 right-6 text-xs text-muted-foreground/70 font-mono tracking-wider">[ LOGO ]</div>

          {/* Slide number bottom-right */}
          <div className="absolute bottom-5 right-6 flex items-center gap-2 text-sm">
            <span className="text-emerald font-extrabold text-xl">{String(current + 1).padStart(2, "0")}</span>
            <span className="text-muted-foreground">/ {slides.length}</span>
          </div>
        </div>
      </main>

      {/* Controls */}
      <footer className="px-6 pb-6 flex items-center justify-between gap-4">
        <button
          onClick={prev}
          disabled={current === 0}
          className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-card border border-border hover:border-emerald disabled:opacity-30 transition"
        >
          <ChevronLeft className="w-4 h-4" /> Prev
        </button>
        <div className="flex gap-1.5 flex-1 justify-center max-w-3xl">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`h-1.5 rounded-full transition-all ${i === current ? "w-8 bg-emerald" : "w-4 bg-border hover:bg-muted-foreground"}`}
              aria-label={`Slide ${i + 1}`}
            />
          ))}
        </div>
        <button
          onClick={next}
          disabled={current === slides.length - 1}
          className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-emerald text-navy-deep font-semibold hover:opacity-90 disabled:opacity-30 transition"
        >
          Next <ChevronRight className="w-4 h-4" />
        </button>
      </footer>

      {/* Grid overlay */}
      {showGrid && (
        <div className="fixed inset-0 z-50 bg-background/95 backdrop-blur overflow-auto p-8">
          <div className="flex justify-between items-center mb-6 max-w-7xl mx-auto">
            <h2 className="text-2xl font-bold">All Slides</h2>
            <button onClick={() => setShowGrid(false)} className="p-2 rounded-lg bg-card border border-border hover:border-emerald">
              <X className="w-5 h-5" />
            </button>
          </div>
          <div className="grid grid-cols-3 gap-5 max-w-7xl mx-auto">
            {slides.map((s, i) => (
              <button
                key={s.id}
                onClick={() => { setCurrent(i); setShowGrid(false); }}
                className={`group relative aspect-video rounded-xl border-2 overflow-hidden bg-card/30 transition ${
                  i === current ? "border-emerald shadow-[var(--shadow-glow)]" : "border-border hover:border-emerald/60"
                }`}
              >
                <div className="absolute inset-0 origin-top-left" style={{ transform: "scale(0.32)", width: "312.5%", height: "312.5%" }}>
                  {s.render()}
                </div>
                <div className="absolute bottom-2 left-3 text-emerald font-bold bg-background/80 px-2 py-0.5 rounded text-sm">
                  {String(i + 1).padStart(2, "0")}
                </div>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

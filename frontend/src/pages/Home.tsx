import { ArrowRight, BookOpen, CheckCircle2, ChevronRight, Heart, ShieldCheck, Sparkles, Utensils } from "lucide-react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useEffect, useState, type ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { PageFrame } from "@/components/AppShell";
import { useSession } from "@/lib/learningSession";

export default function Home() {
  const { profile } = useSession();
  const navigate = useNavigate();
  return <PageFrame>
    <section className="relative overflow-hidden rounded-[2rem] border border-pink-100 bg-[#fff1f7] px-6 py-8 shadow-[0_18px_50px_rgba(244,114,182,.12)] sm:px-10 sm:py-12 lg:px-16 lg:py-14" data-testid="hero-section">
      <div className="absolute -right-10 -top-10 size-40 rounded-full bg-yellow-200/60 blur-2xl" /><div className="absolute bottom-0 left-1/3 size-32 rounded-full bg-purple-200/60 blur-2xl" />
      <div className="relative grid items-center gap-8 lg:grid-cols-[1.05fr_.95fr]">
        <div className="max-w-xl">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-white/80 px-3 py-1.5 text-xs font-extrabold uppercase tracking-[0.14em] text-pink-600" data-testid="hero-eyebrow"><Sparkles className="size-4" /> Media edukasi interaktif</div>
          <h1 className="font-heading text-4xl font-extrabold leading-[1.08] tracking-tight text-slate-800 sm:text-5xl lg:text-6xl" data-testid="hero-title">Yuk, Kenali Makanan Bergizi untuk <span className="text-pink-500">Si Kecil!</span></h1>
          <p className="mt-5 max-w-lg text-base leading-relaxed text-slate-600 sm:text-lg" data-testid="hero-description">Belajar memilih, menyusun, dan memberikan makanan yang lebih bergizi melalui permainan interaktif yang hangat dan praktis.</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row"><Button onClick={() => navigate("/mulai-profil")} className="min-h-12 rounded-2xl bg-pink-500 px-5 font-bold shadow-md hover:bg-pink-600" data-testid="start-learning-button">Mulai Belajar <ArrowRight className="ml-2 size-4" /></Button><a href="#kenapa" className="inline-flex min-h-12 items-center justify-center rounded-2xl border border-pink-200 bg-white/70 px-5 font-bold text-pink-700 hover:bg-white" data-testid="why-education-button">Kenapa edukasi ini penting?</a></div>
          {profile && <p className="mt-4 text-sm font-bold text-pink-600" data-testid="profile-welcome-note">Hai, {profile.nickname}! Siap melanjutkan belajar?</p>}
        </div>
        <div className="relative flex min-h-[280px] items-center justify-center lg:min-h-[360px]" data-testid="hero-illustration"><div className="absolute size-56 rounded-full bg-white/70 sm:size-72" /><HeroPlate /><span className="absolute right-0 top-5 z-20 rounded-2xl bg-white px-3 py-2 text-2xl shadow-sm">🥕</span><span className="absolute left-0 top-1/2 z-20 -translate-y-1/2 rounded-2xl bg-white px-3 py-2 text-2xl shadow-sm sm:left-2" aria-hidden="true">🍎</span></div>
      </div>
    </section>
    <section id="kenapa" className="mt-14 grid gap-4 sm:grid-cols-3" data-testid="why-section"><InfoCard icon={<Heart className="size-5" />} title="Belajar tanpa menghakimi" text="Langkah kecil dan pilihan realistis untuk keluarga sehari-hari." tone="pink" /><InfoCard icon={<Utensils className="size-5" />} title="Coba langsung" text="Susun piring, tukar camilan, dan latih keputusan bersama." tone="purple" /><InfoCard icon={<ShieldCheck className="size-5" />} title="Media edukasi" text="Berbasis panduan resmi, bukan diagnosis atau pemantauan medis." tone="blue" /></section>
    <section className="mt-16" data-testid="home-journey-section"><div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end"><div><p className="text-xs font-extrabold uppercase tracking-[0.16em] text-pink-500">Jelajah singkat</p><h2 className="mt-2 font-heading text-3xl font-extrabold text-slate-800">Belajar sambil bermain</h2></div><Link to="/belajar" className="font-bold text-pink-600 hover:text-pink-700" data-testid="home-see-modules-link">Lihat semua materi <ChevronRight className="inline size-4" /></Link></div><div className="mt-6 grid gap-4 md:grid-cols-3"><MiniJourney icon="📚" title="10 materi ringkas" text="Visual, contoh makanan, dan tips praktis." /><MiniJourney icon="🍽️" title="Susun piringku" text="Klik bahan makanan dan lihat saran ramah." /><MiniJourney icon="🎉" title="Kuis & skenario" text="Uji pemahaman dengan feedback langsung." /></div></section>
  </PageFrame>;
}

const heroPlates = [
  { foods: ["🍚", "🥚", "🥦", "🍌"], label: "Nasi, telur, brokoli, pisang", caption: "Piring beragam, hati senang 💕" },
  { foods: ["🥔", "🐟", "🥕", "🍊"], label: "Kentang, ikan, wortel, jeruk", caption: "Ikan untuk protein hewani 🐟" },
  { foods: ["🍞", "🍗", "🥬", "🍉"], label: "Roti, ayam, sayur hijau, semangka", caption: "Warna-warni sayur dan buah 🌈" },
  { foods: ["🌽", "🍳", "🥑", "🍈"], label: "Jagung, telur dadar, alpukat, melon", caption: "Lemak baik dari alpukat 🥑" },
];

function HeroPlate() {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) return;
    const timer = window.setInterval(() => setIndex((current) => (current + 1) % heroPlates.length), 4000);
    return () => window.clearInterval(timer);
  }, []);
  const plate = heroPlates[index];
  return <div className="relative z-10 flex flex-col items-center animate-gentle-float" data-testid="hero-plate">
    <div className="grid size-44 grid-cols-2 place-items-center gap-1 overflow-hidden rounded-full border-[14px] border-white bg-[#fffdf6] p-4 shadow-[0_16px_0_#fbcfe8,0_24px_45px_rgba(244,114,182,.18)] sm:size-56 sm:p-5" role="img" aria-label={`Piring berisi ${plate.label}`} data-testid="hero-plate-foods">
      {plate.foods.map((food, position) => <span key={`${index}-${position}`} className="animate-food-swap text-3xl leading-none sm:text-5xl" style={{ animationDelay: `${position * 90}ms` }} aria-hidden="true">{food}</span>)}
    </div>
    <div key={index} className="animate-food-swap mt-5 whitespace-nowrap rounded-full bg-white px-4 py-2 text-sm font-extrabold text-pink-700 shadow-sm" data-testid="hero-plate-caption">{plate.caption}</div>
    <div className="mt-3 flex gap-1.5" aria-hidden="true">{heroPlates.map((_, dot) => <span key={dot} className={`h-1.5 rounded-full transition-[width,background-color] duration-300 ${dot === index ? "w-5 bg-pink-400" : "w-1.5 bg-pink-200"}`} />)}</div>
  </div>;
}

function InfoCard({ icon, title, text, tone }: { icon: ReactNode; title: string; text: string; tone: string }) { return <div className={`rounded-3xl border p-5 ${tone === "pink" ? "border-pink-100 bg-pink-50/60" : tone === "purple" ? "border-purple-100 bg-purple-50/60" : "border-sky-100 bg-sky-50/60"}`} data-testid={`why-card-${tone}`}><div className="mb-4 grid size-10 place-items-center rounded-2xl bg-white text-pink-600 shadow-sm">{icon}</div><h3 className="font-heading text-lg font-extrabold text-slate-800">{title}</h3><p className="mt-2 text-sm leading-relaxed text-slate-600">{text}</p></div> }
function MiniJourney({ icon, title, text }: { icon: string; title: string; text: string }) { return <div className="rounded-3xl border border-slate-100 bg-white p-5 shadow-[0_8px_30px_rgba(0,0,0,.04)] transition-transform hover:-translate-y-1" data-testid={`journey-card-${title.toLowerCase().replaceAll(" ", "-")}`}><span className="text-3xl">{icon}</span><h3 className="mt-4 font-heading text-lg font-extrabold text-slate-800">{title}</h3><p className="mt-2 text-sm leading-relaxed text-slate-500">{text}</p><CheckCircle2 className="mt-4 size-5 text-emerald-400" /></div> }
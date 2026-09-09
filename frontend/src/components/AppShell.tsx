import { Link, useLocation } from "react-router-dom";
import { ArrowLeft, BookOpen, Heart, Home, Menu, Sparkles, Utensils, X } from "lucide-react";
import { useState, type ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { modules } from "@/data/content";
import { useSession } from "@/lib/learningSession";

const navItems = [
  { path: "/", label: "Beranda", icon: Home },
  { path: "/belajar", label: "Belajar", icon: BookOpen },
  { path: "/piringku", label: "Piringku", icon: Utensils },
  { path: "/kuis", label: "Kuis", icon: Sparkles },
];

function Header() {
  const location = useLocation();
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-pink-100/70 bg-[#fffdfa]/90 backdrop-blur-xl" data-testid="site-header">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link to="/" className="flex items-center gap-2.5" data-testid="brand-home-link" onClick={() => setOpen(false)}>
          <span className="grid size-10 place-items-center rounded-2xl bg-pink-100 text-xl shadow-sm">🍽️</span>
          <span className="leading-none"><strong className="block font-heading text-base text-slate-800">Makan Ceria</strong><small className="text-[10px] font-semibold uppercase tracking-[0.18em] text-pink-500">gizi balita</small></span>
        </Link>
        <nav className="hidden items-center gap-1 md:flex" aria-label="Navigasi utama">
          {navItems.map(({ path, label, icon: Icon }) => <Link key={path} to={path} data-testid={`desktop-nav-${label.toLowerCase()}`} className={`rounded-xl px-3 py-2 text-sm font-bold transition-colors ${location.pathname === path || (path === "/belajar" && location.pathname.startsWith("/materi")) ? "bg-pink-100 text-pink-700" : "text-slate-500 hover:bg-pink-50 hover:text-pink-700"}`}><Icon className="mr-1.5 inline size-4" />{label}</Link>)}
        </nav>
        <Button variant="ghost" size="icon" className="rounded-xl md:hidden" onClick={() => setOpen(!open)} aria-label={open ? "Tutup menu" : "Buka menu"} data-testid="mobile-menu-toggle-button">{open ? <X /> : <Menu />}</Button>
      </div>
      {open && <div className="border-t border-pink-100 bg-white px-4 py-3 md:hidden" data-testid="mobile-navigation-menu">{navItems.map(({ path, label, icon: Icon }) => <Link key={path} to={path} onClick={() => setOpen(false)} data-testid={`mobile-nav-${label.toLowerCase()}`} className="block rounded-xl px-3 py-3 font-bold text-slate-700 hover:bg-pink-50"><Icon className="mr-2 inline size-4 text-pink-500" />{label}</Link>)}</div>}
    </header>
  );
}

function Footer() {
  return <footer className="mt-16 border-t border-pink-100 bg-white/70" data-testid="site-footer"><div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-8 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between sm:px-6"><div><p className="font-heading font-bold text-slate-700">Media Edukasi Gizi Balita</p><p>Untuk keperluan edukasi • bukan diagnosis atau pemantauan medis</p></div><Link to="/referensi" className="font-bold text-pink-600 hover:text-pink-700" data-testid="footer-references-link">Lihat referensi →</Link></div></footer>;
}

export function ProgressBar({ current = 0, total = 5 }: { current?: number; total?: number }) {
  return <div className="flex items-center gap-2" aria-label={`Progress ${current} dari ${total}`} data-testid="learning-progress"><span className="text-xs font-extrabold uppercase tracking-[0.14em] text-slate-400">Langkah</span><div className="h-2 min-w-28 flex-1 overflow-hidden rounded-full bg-pink-100"><div className="h-full rounded-full bg-pink-400 transition-all duration-500" style={{ width: `${Math.min(100, (current / total) * 100)}%` }} /></div><span className="text-xs font-extrabold text-pink-600">{current}/{total}</span></div>;
}

export function PageIntro({ eyebrow, title, description, current, total, children }: { eyebrow: string; title: string; description: string; current?: number; total?: number; children?: ReactNode }) {
  return <div className="mb-8 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between" data-testid="page-intro"><div><div className="mb-3 flex items-center gap-2 text-xs font-extrabold uppercase tracking-[0.16em] text-pink-500"><Heart className="size-4 fill-pink-200" />{eyebrow}</div><h1 className="max-w-2xl font-heading text-3xl font-extrabold tracking-tight text-slate-800 sm:text-4xl">{title}</h1><p className="mt-3 max-w-2xl text-base leading-relaxed text-slate-600">{description}</p></div><div className="w-full sm:w-48">{current !== undefined && <ProgressBar current={current} total={total} />}{children}</div></div>;
}

export function PageFrame({ children, backTo, nextTo, nextLabel = "Lanjut" }: { children: ReactNode; backTo?: string; nextTo?: string; nextLabel?: string; current?: number; total?: number }) {
  return <><Header /><main className="mx-auto min-h-[calc(100vh-4rem)] max-w-6xl px-4 pb-10 pt-8 sm:px-6 sm:pt-12">{children}<div className="mt-10 flex flex-col-reverse gap-3 border-t border-pink-100 pt-5 sm:flex-row sm:items-center sm:justify-between" data-testid="page-navigation">{backTo ? <Link to={backTo} className="inline-flex min-h-12 items-center justify-center gap-2 rounded-2xl px-4 font-bold text-slate-500 hover:bg-white hover:text-pink-600" data-testid="page-back-button"><ArrowLeft className="size-4" />Kembali</Link> : <span />}{nextTo && <Link to={nextTo} className="inline-flex min-h-12 items-center justify-center rounded-2xl bg-pink-500 px-5 font-bold text-white shadow-sm transition-all hover:-translate-y-0.5 hover:bg-pink-600 hover:shadow-md active:scale-95" data-testid="page-next-button">{nextLabel}</Link>}</div></main><Footer /></>;
}

export function AppLayout({ children }: { children: ReactNode }) { return <div className="min-h-screen overflow-x-hidden bg-[#fafaf7] text-slate-800"><div className="pointer-events-none fixed -left-20 top-28 z-0 size-48 rounded-full bg-pink-100/50 blur-3xl" /><div className="pointer-events-none fixed -right-20 bottom-20 z-0 size-64 rounded-full bg-purple-100/50 blur-3xl" /><div className="relative z-10">{children}</div></div>; }

export function ModuleProgress() {
  const { completedModules } = useSession();
  return <div className="rounded-2xl bg-white/80 p-3 text-xs font-bold text-slate-500 shadow-sm" data-testid="module-progress-summary"><span className="text-pink-600">{completedModules.length}</span> dari {modules.length} materi selesai</div>;
}
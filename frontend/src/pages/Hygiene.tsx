import { Check, ChevronRight, Circle, ShieldCheck } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { PageFrame, PageIntro } from "@/components/AppShell";

const hygieneItems = [
  "Cuci tangan dengan sabun sebelum menyiapkan atau menyuapi makanan.",
  "Gunakan alat makan yang bersih dan kering.",
  "Pilih bahan makanan yang segar dan aman.",
  "Masak telur, ikan, dan daging hingga matang.",
  "Simpan makanan matang dalam wadah tertutup.",
];

export default function Hygiene() {
  const [checked, setChecked] = useState<number[]>([]);
  const toggle = (index: number) => setChecked((current) => current.includes(index) ? current.filter((item) => item !== index) : [...current, index]);
  const done = checked.length === hygieneItems.length;
  return <PageFrame backTo="/skenario" nextTo="/ringkasan" nextLabel="Lihat Ringkasan" current={5} total={5}><PageIntro eyebrow="Kebiasaan aman" title="Checklist Higiene 🧼" description="Centang kebiasaan yang sudah dilakukan. Tidak perlu sempurna; pilih satu langkah yang bisa dicoba hari ini." /><div className="mx-auto max-w-3xl"><section className="rounded-[2rem] border border-sky-100 bg-sky-50 p-6 sm:p-8" data-testid="hygiene-card"><div className="flex items-center justify-between"><div className="flex items-center gap-3"><span className="grid size-12 place-items-center rounded-2xl bg-white text-sky-600 shadow-sm"><ShieldCheck /></span><div><h2 className="font-heading text-xl font-extrabold text-slate-800">Sebelum makanan bertemu si kecil</h2><p className="mt-1 text-sm text-slate-600">{checked.length} dari {hygieneItems.length} kebiasaan dicentang</p></div></div><div className="text-2xl font-extrabold text-sky-600">{Math.round((checked.length / hygieneItems.length) * 100)}%</div></div><div className="mt-7 h-3 overflow-hidden rounded-full bg-white"><div className="h-full rounded-full bg-sky-400 transition-all duration-300" style={{ width: `${(checked.length / hygieneItems.length) * 100}%` }} /></div><div className="mt-6 space-y-3">{hygieneItems.map((item, index) => { const isChecked = checked.includes(index); return <button key={item} onClick={() => toggle(index)} className={`flex min-h-16 w-full items-center gap-4 rounded-2xl border p-4 text-left transition ${isChecked ? "border-emerald-200 bg-emerald-50" : "border-white bg-white hover:border-sky-200"}`} data-testid={`hygiene-check-${index + 1}`}><span className={`grid size-8 shrink-0 place-items-center rounded-xl ${isChecked ? "bg-emerald-500 text-white" : "bg-slate-100 text-slate-400"}`}>{isChecked ? <Check className="size-5" /> : <Circle className="size-4" />}</span><span className={`text-sm font-bold ${isChecked ? "text-emerald-800" : "text-slate-700"}`}>{item}</span></button>})}</div>{done && <div className="animate-soft-pop mt-6 rounded-2xl bg-emerald-100 p-4 text-sm font-extrabold text-emerald-800" role="status" data-testid="hygiene-complete-message">🎉 Semua checklist selesai. Kebiasaan baik dibangun bersama!</div>}</section><Link to="/ringkasan" className="mt-6 flex min-h-12 items-center justify-center rounded-2xl bg-pink-500 px-4 font-extrabold text-white hover:bg-pink-600" data-testid="hygiene-summary-link">Lanjut ke Ringkasan <ChevronRight className="ml-2 size-4" /></Link></div></PageFrame>;
}
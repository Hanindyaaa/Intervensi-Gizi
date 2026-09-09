# Makan Ceria — Living Spec

## Purpose
Media edukasi interaktif berbahasa Indonesia tentang gizi dan pemberian makan balita. Aplikasi bukan diagnosis, bukan pemantauan status gizi, dan bukan aplikasi tracking.

## Data and privacy
- Session-only React state stores optional nickname, age group (`12-23`, `2-3`, `4-5`), and completed module ids.
- No login, backend/database, BB/TB, medical records, personal history, or analytics.

## Routes and flows
- `/` Beranda → `/mulai-profil` Profil → `/belajar` Menu Materi.
- `/materi/:id` contains 10 short modules with examples and positive tips.
- `/piringku` lets users choose one food per category and receive a friendly checklist evaluation.
- `/camilan` provides three snack-switch comparisons.
- `/kuis` provides eight multiple-choice questions with immediate explanations.
- `/skenario` provides a positive caregiver decision exercise.
- `/higiene` provides a five-item interactive hygiene checklist.
- `/ringkasan` provides five takeaways; `/referensi` lists official sources and disclaimer.

## Content safety
Content uses general educational guidance and official Kemenkes/BPK references. No individual AKG calculation or medical claim is made. Users with special conditions, allergies, or feeding difficulties are directed to health workers.

## Official AKG content
- User-provided Permenkes No. 28 Tahun 2019 PDF is linked from `/referensi`.
- The page now contains three responsive, collapsible tables: Tabel 1 makro (energy, protein, fat, omega 3/6, carbohydrate, fiber, water), Tabel 2 vitamins, and Tabel 3 minerals for 1–3 and 4–6 years.
- The page summarizes Tabel 1, pages 6–7: 1–3 years = 1,350 kkal, 20 g protein, 45 g fat, 215 g carbohydrate; 4–6 years = 1,400 kkal, 25 g protein, 50 g fat, 220 g carbohydrate, plus fiber and water.
- Website labels map 12–23 months to the nearest official 1–3 years group, 2–3 years to 1–3 years, and 4–5 years to 4–6 years. The mapping is explicitly disclosed and is not individualized.
- User-provided nutrition and progress infographics are shown responsively in the first learning module and summary.
- The generated hero asset with a checkerboard background was removed; the homepage uses a clean CSS/emoji plate illustration instead.
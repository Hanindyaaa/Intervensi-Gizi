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
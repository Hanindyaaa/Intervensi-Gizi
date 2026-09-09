export type AgeGroup = "12-23" | "2-3" | "4-5";

export interface LearningModule {
  id: string;
  number: number;
  emoji: string;
  title: string;
  category: string;
  summary: string;
  points: string[];
  examples: string[];
  accent: "pink" | "purple" | "yellow" | "blue" | "green";
}

export interface FoodItem {
  id: string;
  label: string;
  emoji: string;
  category: string;
}

export interface SnackSwap {
  usual: { label: string; emoji: string; note: string };
  try: { label: string; emoji: string; note: string };
  reason: string;
}

export interface QuizQuestion {
  question: string;
  choices: string[];
  answer: number;
  explanation: string;
}

export interface AkgReferenceRow {
  websiteAge: string;
  officialGroup: string;
  energy: string;
  protein: string;
  fat: string;
  carbohydrate: string;
}

export interface AkgNutrientRow {
  name: string;
  unit: string;
  age13: string;
  age46: string;
  note?: string;
}

export const ageLabels: Record<AgeGroup, string> = {
  "12-23": "12–23 bulan",
  "2-3": "2–3 tahun",
  "4-5": "4–5 tahun",
};

export const modules: LearningModule[] = [
  {
    id: "kebutuhan-gizi",
    number: 1,
    emoji: "🌱",
    title: "Kenali Kebutuhan Gizi Balita",
    category: "Dasar gizi",
    summary: "Kenali peran makanan beragam untuk menemani tumbuh kembang si kecil.",
    points: [
      "Balita membutuhkan makanan beragam dari beberapa kelompok makanan.",
      "Makanan pokok memberi energi untuk bermain dan belajar.",
      "Protein, sayur, buah, lemak, dan air saling melengkapi.",
      "Tekstur dan ukuran makanan dapat disesuaikan dengan usia serta kemampuan anak.",
    ],
    examples: ["Nasi", "Telur", "Bayam", "Pepaya", "Air putih"],
    accent: "green",
  },
  {
    id: "isi-piringku",
    number: 2,
    emoji: "🍚",
    title: "Isi Piringku untuk Balita",
    category: "Panduan piring",
    summary: "Susun makanan pokok, lauk, sayur, buah, dan lemak dalam satu piring.",
    points: [
      "Jadikan satu piring sebagai kesempatan mengenalkan beberapa kelompok makanan.",
      "Utamakan lauk sumber protein hewani dalam menu makan utama.",
      "Lengkapi dengan sayur dan buah yang berwarna-warni.",
      "Gunakan minyak atau sumber lemak dalam jumlah yang sesuai untuk membantu energi.",
    ],
    examples: ["Nasi + ikan", "Sup wortel", "Pisang", "Alpukat"],
    accent: "yellow",
  },
  {
    id: "protein-hewani",
    number: 3,
    emoji: "🥚",
    title: "Protein Hewani",
    category: "Bahan makanan",
    summary: "Temukan pilihan protein hewani yang mudah ditemui dan disukai keluarga.",
    points: [
      "Telur, ikan, ayam, dan daging adalah contoh protein hewani.",
      "Protein membantu membangun dan memperbaiki jaringan tubuh.",
      "Pilih bahan yang segar, masak hingga matang, dan sesuaikan teksturnya.",
      "Tahu, tempe, dan kacang-kacangan juga dapat melengkapi menu.",
    ],
    examples: ["Telur", "Ikan", "Ayam", "Daging", "Tahu", "Tempe"],
    accent: "pink",
  },
  {
    id: "sayur-buah",
    number: 4,
    emoji: "🥦",
    title: "Sayur dan Buah",
    category: "Bahan makanan",
    summary: "Ajak si kecil menikmati warna dan rasa alami dari sayur serta buah.",
    points: [
      "Coba tawarkan sayur dan buah dengan warna serta tekstur yang berbeda.",
      "Wortel, bayam, brokoli, labu, pisang, pepaya, dan jeruk mudah dipadukan.",
      "Tawarkan berulang kali tanpa memaksa ketika anak belum mau mencoba.",
      "Potongan yang aman dan sesuai kemampuan anak membantu pengalaman makan.",
    ],
    examples: ["Wortel", "Bayam", "Brokoli", "Pisang", "Pepaya", "Jeruk"],
    accent: "blue",
  },
  {
    id: "lemak-energi",
    number: 5,
    emoji: "🥑",
    title: "Lemak dan Energi",
    category: "Bahan makanan",
    summary: "Pahami bahwa lemak dapat menjadi bagian dari menu balita yang seimbang.",
    points: [
      "Lemak membantu menambah energi dalam porsi makanan yang tidak terlalu besar.",
      "Contohnya minyak, santan, alpukat, telur, dan kacang.",
      "Tambahkan dalam menu keluarga dengan jumlah yang wajar.",
      "Variasikan sumber lemak agar anak mengenal banyak rasa.",
    ],
    examples: ["Minyak", "Santan", "Alpukat", "Kacang", "Telur"],
    accent: "purple",
  },
  {
    id: "porsi-frekuensi",
    number: 6,
    emoji: "🍽️",
    title: "Porsi dan Frekuensi Makan",
    category: "Jadwal makan",
    summary: "Buat ritme makan yang teratur tanpa menjadikan waktu makan tegang.",
    points: [
      "Tawarkan makan utama dan selingan secara teratur sesuai rutinitas keluarga.",
      "Berikan porsi kecil terlebih dahulu, lalu tambah bila anak masih lapar.",
      "Jaga suasana makan tetap tenang dan beri waktu anak untuk merespons.",
      "Air putih dapat ditawarkan di antara waktu makan.",
    ],
    examples: ["Sarapan", "Makan siang", "Makan malam", "Selingan"],
    accent: "yellow",
  },
  {
    id: "camilan",
    number: 7,
    emoji: "🍪",
    title: "Memilih Camilan Lebih Bergizi",
    category: "Selingan sehat",
    summary: "Bukan melarang, tetapi mengarahkan ke pilihan yang lebih beragam.",
    points: [
      "Camilan dapat menjadi kesempatan menambah buah, protein, atau energi.",
      "Bandingkan rasa, tekstur, dan kandungan gula, garam, serta lemak.",
      "Buah, roti isi telur, ubi, atau tahu dapat menjadi pilihan sederhana.",
      "Libatkan anak memilih dari dua pilihan yang sama-sama baik.",
    ],
    examples: ["Pisang + telur", "Roti isi telur", "Ubi kukus", "Buah potong"],
    accent: "pink",
  },
  {
    id: "perilaku-makan",
    number: 8,
    emoji: "😊",
    title: "Perilaku Makan Anak",
    category: "Suasana makan",
    summary: "Bangun hubungan yang positif dengan makanan melalui rutinitas yang hangat.",
    points: [
      "Makan bersama keluarga memberi contoh dan membuat waktu makan lebih menyenangkan.",
      "Kenali tanda lapar dan kenyang; hindari memaksa suapan terakhir.",
      "Batasi distraksi seperti gawai agar anak dapat fokus pada makanan.",
      "Orang tua menyediakan pilihan, anak belajar merespons rasa lapar dan kenyang.",
    ],
    examples: ["Makan bersama", "Tanpa gawai", "Porsi kecil", "Tawarkan ulang"],
    accent: "blue",
  },
  {
    id: "higiene",
    number: 9,
    emoji: "🧼",
    title: "Higiene dan Keamanan Makanan",
    category: "Kebersihan",
    summary: "Biasakan langkah sederhana agar makanan lebih aman untuk si kecil.",
    points: [
      "Cuci tangan dengan sabun sebelum menyiapkan dan menyuapi makanan.",
      "Gunakan alat makan yang bersih dan bahan makanan yang baik.",
      "Masak telur, ikan, dan daging hingga matang.",
      "Simpan makanan dalam wadah tertutup dan jaga kebersihan area makan.",
    ],
    examples: ["Cuci tangan", "Alat bersih", "Masak matang", "Wadah tertutup"],
    accent: "green",
  },
  {
    id: "tips-praktis",
    number: 10,
    emoji: "💡",
    title: "Tips Praktis untuk Orang Tua",
    category: "Sehari-hari",
    summary: "Coba strategi kecil yang realistis saat anak pilih-pilih makanan.",
    points: [
      "Kenalkan makanan baru perlahan dan berulang tanpa tekanan.",
      "Sajikan porsi kecil agar anak tidak merasa kewalahan.",
      "Ubah bentuk atau cara masak sambil tetap menjaga bahan utamanya.",
      "Tetap sabar; kebiasaan makan dibangun sedikit demi sedikit.",
    ],
    examples: ["Porsi kecil", "Bentuk menarik", "Ajak memilih", "Tetap tenang"],
    accent: "purple",
  },
];

export const foods: FoodItem[] = [
  { id: "nasi", label: "Nasi", emoji: "🍚", category: "pokok" },
  { id: "kentang", label: "Kentang", emoji: "🥔", category: "pokok" },
  { id: "ubi", label: "Ubi", emoji: "🍠", category: "pokok" },
  { id: "roti", label: "Roti", emoji: "🍞", category: "pokok" },
  { id: "telur", label: "Telur", emoji: "🥚", category: "hewani" },
  { id: "ikan", label: "Ikan", emoji: "🐟", category: "hewani" },
  { id: "ayam", label: "Ayam", emoji: "🍗", category: "hewani" },
  { id: "tahu", label: "Tahu", emoji: "⬜", category: "nabati" },
  { id: "tempe", label: "Tempe", emoji: "🟫", category: "nabati" },
  { id: "wortel", label: "Wortel", emoji: "🥕", category: "sayur" },
  { id: "bayam", label: "Bayam", emoji: "🌿", category: "sayur" },
  { id: "brokoli", label: "Brokoli", emoji: "🥦", category: "sayur" },
  { id: "pisang", label: "Pisang", emoji: "🍌", category: "buah" },
  { id: "pepaya", label: "Pepaya", emoji: "🍊", category: "buah" },
  { id: "semangka", label: "Semangka", emoji: "🍉", category: "buah" },
  { id: "alpukat", label: "Alpukat", emoji: "🥑", category: "lemak" },
  { id: "santan", label: "Santan", emoji: "🥥", category: "lemak" },
  { id: "kacang", label: "Kacang", emoji: "🥜", category: "lemak" },
];

export const foodCategoryLabels: Record<string, string> = {
  pokok: "Makanan pokok",
  hewani: "Protein hewani",
  nabati: "Protein nabati",
  sayur: "Sayur",
  buah: "Buah",
  lemak: "Sumber lemak",
};

export const snackSwaps: SnackSwap[] = [
  {
    usual: { label: "Biskuit manis", emoji: "🍪", note: "Praktis dan rasanya disukai anak." },
    try: { label: "Pisang + telur", emoji: "🍌🥚", note: "Ada buah dan protein dalam satu selingan." },
    reason: "Pilihan ini menambah variasi rasa serta kelompok makanan, tanpa perlu melarang camilan favorit secara mendadak.",
  },
  {
    usual: { label: "Keripik kemasan", emoji: "🥔", note: "Renyah dan mudah dibawa." },
    try: { label: "Ubi kukus", emoji: "🍠", note: "Teksturnya lembut dan mengenyangkan." },
    reason: "Coba hadirkan pilihan rumahan yang tetap punya rasa dan tekstur menarik untuk anak.",
  },
  {
    usual: { label: "Minuman manis", emoji: "🧃", note: "Terasa segar dan manis." },
    try: { label: "Air putih + buah", emoji: "💧🍉", note: "Segar dengan rasa alami dari buah." },
    reason: "Air putih membantu memenuhi kebutuhan cairan, sementara buah memberi pengalaman rasa yang beragam.",
  },
];

export const quizQuestions: QuizQuestion[] = [
  { question: "Manakah yang termasuk sumber protein hewani?", choices: ["Nasi", "Telur", "Wortel", "Pisang"], answer: 1, explanation: "Telur merupakan salah satu sumber protein hewani." },
  { question: "Apa yang dapat dilakukan saat anak belum mau mencoba sayur?", choices: ["Memaksa sampai habis", "Tidak menawarkan lagi", "Menawarkan ulang tanpa memaksa", "Mengganti semua makanan dengan camilan"], answer: 2, explanation: "Anak dapat membutuhkan beberapa kali perkenalan. Tawarkan ulang dengan sabar." },
  { question: "Contoh makanan pokok adalah...", choices: ["Nasi", "Telur", "Bayam", "Pepaya"], answer: 0, explanation: "Nasi adalah contoh makanan pokok yang memberi energi." },
  { question: "Mengapa protein hewani penting dikenalkan?", choices: ["Hanya untuk membuat makanan mahal", "Untuk melengkapi kebutuhan zat gizi dan membangun tubuh", "Agar anak tidak makan sayur", "Sebagai pengganti air putih"], answer: 1, explanation: "Protein membantu membangun dan memperbaiki jaringan tubuh." },
  { question: "Manakah contoh camilan yang lebih beragam?", choices: ["Buah potong dan telur", "Permen saja", "Keripik saja", "Minuman manis saja"], answer: 0, explanation: "Buah dan telur menghadirkan lebih dari satu kelompok makanan." },
  { question: "Apa yang sebaiknya dilakukan saat anak menunjukkan tanda kenyang?", choices: ["Memaksa satu suapan lagi", "Menghentikan tekanan dan menghargai tandanya", "Menyembunyikan makanan", "Memberi gawai agar mau makan"], answer: 1, explanation: "Menghargai tanda kenyang membantu suasana makan tetap positif." },
  { question: "Sebelum menyiapkan makanan, kebiasaan penting adalah...", choices: ["Mencicipi dengan tangan", "Mencuci tangan dengan sabun", "Membiarkan alat makan terbuka", "Menyimpan makanan di lantai"], answer: 1, explanation: "Cuci tangan dengan sabun membantu menjaga kebersihan makanan." },
  { question: "Bagaimana cara memulai porsi makan anak?", choices: ["Selalu porsi sangat besar", "Porsi kecil lalu tambah bila masih lapar", "Tidak perlu jadwal", "Hanya memberi camilan"], answer: 1, explanation: "Porsi kecil dapat terasa lebih ramah dan bisa ditambah sesuai respons anak." },
];

export const uploadedInfographics = {
  nutrition: "https://customer-assets-39nsmqrw.emergentagent.net/job_balita-belajar-gizi/artifacts/gav53o90_ChatGPT%20Image%20Sep%2010%2C%202026%2C%2012_21_10%20AM.png",
  progress: "https://customer-assets-39nsmqrw.emergentagent.net/job_balita-belajar-gizi/artifacts/434qn93d_ChatGPT%20Image%20Sep%2010%2C%202026%2C%2012_21_59%20AM.png",
};

export const akgReferenceRows: AkgReferenceRow[] = [
  { websiteAge: "12–23 bulan", officialGroup: "1–3 tahun (acuan terdekat)", energy: "1.350 kkal", protein: "20 g", fat: "45 g", carbohydrate: "215 g" },
  { websiteAge: "2–3 tahun", officialGroup: "1–3 tahun", energy: "1.350 kkal", protein: "20 g", fat: "45 g", carbohydrate: "215 g" },
  { websiteAge: "4–5 tahun", officialGroup: "4–6 tahun", energy: "1.400 kkal", protein: "25 g", fat: "50 g", carbohydrate: "220 g" },
];

export const akgMacroRows: AkgNutrientRow[] = [
  { name: "Energi", unit: "kkal", age13: "1.350", age46: "1.400" },
  { name: "Protein", unit: "g", age13: "20", age46: "25" },
  { name: "Lemak total", unit: "g", age13: "45", age46: "50" },
  { name: "Omega 3", unit: "g", age13: "0,7", age46: "0,9" },
  { name: "Omega 6", unit: "g", age13: "7", age46: "10" },
  { name: "Karbohidrat", unit: "g", age13: "215", age46: "220" },
  { name: "Serat", unit: "g", age13: "19", age46: "20" },
  { name: "Air", unit: "ml", age13: "1.150", age46: "1.450" },
];

export const akgVitaminRows: AkgNutrientRow[] = [
  { name: "Vitamin A", unit: "RE", age13: "400", age46: "450" },
  { name: "Vitamin D", unit: "mcg", age13: "15", age46: "15" },
  { name: "Vitamin E", unit: "mg", age13: "6", age46: "7" },
  { name: "Vitamin K", unit: "mcg", age13: "15", age46: "20" },
  { name: "Vitamin B1", unit: "mg", age13: "0,5", age46: "0,6" },
  { name: "Vitamin B2", unit: "mg", age13: "0,5", age46: "0,6" },
  { name: "Vitamin B3", unit: "mg", age13: "6", age46: "8" },
  { name: "Vitamin B5 (Pantotenat)", unit: "mg", age13: "2,0", age46: "3,0" },
  { name: "Vitamin B6", unit: "mg", age13: "0,5", age46: "0,6" },
  { name: "Folat", unit: "mcg", age13: "160", age46: "200" },
  { name: "Vitamin B12", unit: "mcg", age13: "1,5", age46: "1,5" },
  { name: "Biotin", unit: "mcg", age13: "8", age46: "12" },
  { name: "Kolin", unit: "mg", age13: "200", age46: "250" },
  { name: "Vitamin C", unit: "mg", age13: "40", age46: "45" },
];

export const akgMineralRows: AkgNutrientRow[] = [
  { name: "Kalsium", unit: "mg", age13: "650", age46: "1.000" },
  { name: "Fosfor", unit: "mg", age13: "460", age46: "500" },
  { name: "Magnesium", unit: "mg", age13: "65", age46: "95" },
  { name: "Besi", unit: "mg", age13: "7", age46: "10", note: "Catatan kaki 2" },
  { name: "Iodium", unit: "mcg", age13: "90", age46: "120" },
  { name: "Seng", unit: "mg", age13: "3", age46: "5", note: "Catatan kaki 3" },
  { name: "Selenium", unit: "mcg", age13: "18", age46: "21" },
  { name: "Mangan", unit: "mg", age13: "1,2", age46: "1,5" },
  { name: "Kromium", unit: "mcg", age13: "14", age46: "16" },
  { name: "Fluor", unit: "mg", age13: "0,7", age46: "1,0" },
  { name: "Kalium", unit: "mg", age13: "2.600", age46: "2.700" },
  { name: "Natrium", unit: "mg", age13: "800", age46: "900" },
  { name: "Klorida", unit: "mg", age13: "1.200", age46: "1.300" },
  { name: "Tembaga", unit: "mcg", age13: "340", age46: "440" },
];

export const references = [
  { title: "Isi Piringku", institution: "Kementerian Kesehatan Republik Indonesia", year: "Diakses 2025", url: "https://ayosehat.kemkes.go.id/isi-piringku" },
  { title: "Pedoman Gizi Seimbang", institution: "Kementerian Kesehatan Republik Indonesia", year: "Pedoman resmi", url: "https://ayosehat.kemkes.go.id/pedoman-gizi-seimbang" },
  { title: "Permenkes Nomor 28 Tahun 2019 tentang Angka Kecukupan Gizi", institution: "Kementerian Kesehatan Republik Indonesia", year: "2019 · halaman 6–14", url: "https://customer-assets-39nsmqrw.emergentagent.net/job_balita-belajar-gizi/artifacts/qqvff0mw_PMK_No__28_Th_2019_ttg_Angka_Kecukupan_Gizi_Yang_D_250421_155247.pdf" },
];
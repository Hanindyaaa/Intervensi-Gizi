import { Routes, Route } from "react-router-dom";
import { AppLayout } from "@/components/AppShell";
import Home from "@/pages/Home";
import Profile from "@/pages/Profile";
import Learn from "@/pages/Learn";
import MaterialDetail from "@/pages/MaterialDetail";
import PlateBuilder from "@/pages/PlateBuilder";
import Snacks from "@/pages/Snacks";
import Quiz from "@/pages/Quiz";
import Scenario from "@/pages/Scenario";
import Hygiene from "@/pages/Hygiene";
import Summary from "@/pages/Summary";
import References from "@/pages/References";

// One <Route> per page in src/pages; BrowserRouter already wraps this in main.tsx.
export default function App() {
  return <AppLayout><Routes>
    <Route path="/" element={<Home />} />
    <Route path="/mulai-profil" element={<Profile />} />
    <Route path="/belajar" element={<Learn />} />
    <Route path="/materi/:id" element={<MaterialDetail />} />
    <Route path="/piringku" element={<PlateBuilder />} />
    <Route path="/camilan" element={<Snacks />} />
    <Route path="/kuis" element={<Quiz />} />
    <Route path="/skenario" element={<Scenario />} />
    <Route path="/higiene" element={<Hygiene />} />
    <Route path="/ringkasan" element={<Summary />} />
    <Route path="/referensi" element={<References />} />
  </Routes></AppLayout>;
}

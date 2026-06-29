import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import "./Layout.css";
import "./tailwind.css";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-[#18181b] to-[#4a240f]">
      <Header />
      <main className="flex-1 bg-transparent">
        {children}
      </main>
      <Footer />
    </div>
  );
}

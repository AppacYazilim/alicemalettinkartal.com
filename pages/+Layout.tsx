import "./tailwind.css";
import "./Layout.css";
import { AckNav } from "../components/AckNav";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#F9F8F5", color: "#111010" }}>
      <AckNav />
      {children}
    </div>
  );
}

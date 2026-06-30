import "./tailwind.css";
import "./Layout.css";
import { AckNav } from "../components/AckNav";
import { usePageContext } from "vike-react/usePageContext";

export default function Layout({ children }: { children: React.ReactNode }) {
  const pageContext = usePageContext();
  const isStandalone = pageContext.urlPathname.startsWith("/platforms");

  if (isStandalone) return <>{children}</>;

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#F9F8F5", color: "#111010" }}>
      <AckNav />
      {children}
    </div>
  );
}

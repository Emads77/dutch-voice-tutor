import Nav from "./components/Nav";
import Hero from "./components/Hero";
import CefrStrip from "./components/CefrStrip";
import HealthBadge from "./components/HealthBadge";

export default function App() {
  return (
    <div className="page">
      <span className="wordmark" aria-hidden="true">
        صوتي
      </span>

      <Nav />
      <Hero />
      <CefrStrip />

      {/* Remove once ticket 1.3 is signed off */}
      {import.meta.env.DEV && <HealthBadge />}
    </div>
  );
}

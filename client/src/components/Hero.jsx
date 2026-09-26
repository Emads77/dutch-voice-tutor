import DeviceCard from "./DeviceCard";
import { MicIcon } from "./Icons";

export default function Hero() {
  return (
    <header className="shell hero" id="top">
      <div className="hero__copy">
        <p className="hero__eyelet">NEDERLANDS · A0 → B1 · INBURGERING</p>

        <h1 className="hero__title">
          تحدَّث الهولندية بثقة،
          <br />
          واستعدّ لامتحان الاندماج
        </h1>

        <p className="hero__lede">
          تدرّب بصوتك خطوة بخطوة، من <span className="figure">A0</span> إلى{" "}
          <span className="figure">B1</span> — والتصحيح والشرح كلّه بلغتك العربية.
        </p>

        <div className="hero__actions">
          <a className="btn btn--solid btn--lg" href="#start">
            <MicIcon size={18} color="currentColor" />
            ابدأ التحدّث الآن
          </a>
          <a className="btn btn--outline btn--lg" href="#how">
            شاهد كيف يعمل
          </a>
        </div>

        <div className="meta">
          <span>€9,99 / MAAND</span>
          <span className="meta__dot" />
          <span>ZONDER APP STORE</span>
          <span className="meta__dot" />
          <span>NL &amp; BE</span>
        </div>
      </div>

      <div className="hero__visual">
        <DeviceCard />
      </div>
    </header>
  );
}

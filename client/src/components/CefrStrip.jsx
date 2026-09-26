const LEVELS = [
  "A0 → A1 · 80–100 U",
  "A1 → A2 · 180–200 U",
  "A2 → B1 · 350–400 U",
];

export default function CefrStrip() {
  return (
    <section className="cefr" id="levels">
      <div className="shell cefr__inner">
        <h2 className="cefr__title">مسار مبني على ساعات الكلام الفعلية</h2>

        <div className="cefr__levels">
          {LEVELS.map((level, i) => (
            <span key={level} style={{ display: "contents" }}>
              {i > 0 && <span className="meta__dot" />}
              <span>{level}</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

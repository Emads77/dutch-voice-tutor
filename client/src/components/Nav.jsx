import { MicIcon } from "./Icons";

export default function Nav() {
  return (
    <nav className="shell nav">
      <a className="brand" href="#top">
        <span className="brand__mark">
          <MicIcon size={16} color="#ffffff" />
        </span>
        <span className="brand__name">صوتي</span>
      </a>

      <div className="nav__links">
        <a href="#levels">المستويات</a>
        <a href="#how">كيف يعمل</a>
        <a href="#why">لماذا صوتي؟</a>
        <span className="nav__lang">AR · NL</span>
      </div>

      <a className="btn btn--solid" href="#login">
        تسجيل الدخول
      </a>
    </nav>
  );
}

import { useEffect, useRef, useState } from 'react';
import {
  ArrowDownLeft,
  ArrowLeft,
  ArrowUpRight,
  Check,
  ChevronDown,
  CircleStop,
  LockKeyhole,
  Menu,
  Mic,
  Pause,
  Play,
  Sparkles,
  Volume2,
  Waves,
  X,
} from 'lucide-react';
import './App.css';

const COPY = {
  ar: {
    dir: 'rtl',
    code: 'العربية',
    title: 'صوتي — تدرّب على ما ستقوله في الامتحان',
    navWhy: 'لماذا صوتي؟',
    navHow: 'كيف يعمل',
    navLevels: 'المستويات',
    login: 'دخول',
    menu: 'القائمة',
    heroLine1: 'تدرّب على ما',
    heroLine2: 'ستقوله في',
    heroAccent: 'الامتحان.',
    intro: 'صوتي هو مساحة آمنة للتدرب بصوت عالٍ على الهولندية، تمامًا كما تحتاجها في امتحان الاندماج.',
    start: 'ابدأ بالمحادثة',
    noAccount: 'لا يحتاج حسابًا · تجربة مجانية ليوم واحد',
    practiceLabel: 'تدريب اليوم',
    prompt: 'اسمع، ثم قلها بصوتك',
    recordIdle: 'اضغط للتحدث',
    recordLive: 'جاري التسجيل… اضغط للإيقاف',
    recorderHint: 'لا يتم حفظ تسجيلك في هذه التجربة',
    levelsLabel: 'مستواك الآن',
    levelCopy: 'تمارين تتكلم معك، لا عنك.',
    levelLink: 'استكشف المستويات',
    howTitle: 'صُممت للحظة التي يطلبون فيها منك أن تتكلم.',
    howCopy: 'استمع إلى سؤال واقعي، تدرب على إجابتك، ثم أعد المحاولة بوضوح أكبر. بلا تشتيت، فقط صوتك والخطوة التالية.',
    whyEyebrow: 'لماذا صوتي',
    whyTitle: 'لأن المعرفة لا تكفي عندما يكون الدور عليك.',
    whyCopy:
      'قد تعرف الكلمات، وقد تفهم الدرس. لكن الامتحان الشفهي يطلب منك أن تجيب الآن. صوتي يمنحك مساحة هادئة لتعتاد على لحظة الكلام — قبل يوم الامتحان.',
    whyBack: 'ارجع إلى الميكروفون',
    whyCta: 'تدرب بصوتك الآن',
    authTitle: 'مرحبًا بك',
    authLogin: 'دخول',
    authSignup: 'إنشاء حساب',
    name: 'الاسم',
    identifier: 'البريد أو رقم الهاتف',
    password: 'كلمة المرور',
    submit: 'متابعة',
    authNotice: 'تسجيل الدخول غير متصل بخلفية بعد. هذا نموذج للواجهة فقط.',
    tutor: 'المدرّب',
    learner: 'أنت',
    tutorCaption: 'اسمع السؤال، ثم أجب بجملة كاملة.',
    learnerCaption: 'إجابة المتعلم',
    playAudio: 'تشغيل التسجيل',
    pauseAudio: 'إيقاف التسجيل',
    read: 'تمت القراءة',
    startRecording: 'بدء التسجيل',
    stopRecording: 'إيقاف التسجيل',
    close: 'إغلاق',
    livePractice: 'تدريب مباشر',
    done: 'مكتمل',
    now: 'الآن',
    next: 'التالي',
    footerTagline: 'تدريب صوتي للحظات الحقيقية.',
    voiceFirst: 'الصوت أولًا',
    spokenPractice: 'تدريب المحادثة الهولندية',
    dutchPrompt: 'Waar woont u?',
    dutchReply: 'Ik woon in Antwerpen.',
    recorded: 'Ik oefen Nederlands.',
  },
  en: {
    dir: 'ltr',
    code: 'English',
    title: 'Sawti — Practise what you’ll say in the exam',
    navWhy: 'Why Sawti',
    navHow: 'How it works',
    navLevels: 'Levels',
    login: 'Log in',
    menu: 'Menu',
    heroLine1: 'Practise what',
    heroLine2: 'you’ll say in the',
    heroAccent: 'exam.',
    intro: 'Sawti is a calm space to practise Dutch out loud — exactly the kind of speaking your civic integration exam asks for.',
    start: 'Start speaking',
    noAccount: 'No account · 1-day free trial',
    practiceLabel: 'Today’s practice',
    prompt: 'Listen, then say it your way',
    recordIdle: 'Press to speak',
    recordLive: 'Recording… press to stop',
    recorderHint: 'Your recording is not saved in this demo',
    levelsLabel: 'Your current level',
    levelCopy: 'Exercises that speak with you, not about you.',
    levelLink: 'Explore levels',
    howTitle: 'Made for the moment they ask you to speak.',
    howCopy: 'Hear a real-life question, practise your answer, then try again with more ease. No distractions — just your voice and the next step.',
    whyEyebrow: 'Why Sawti',
    whyTitle: 'Knowing the words is different from saying them when it counts.',
    whyCopy:
      'You may know the vocabulary. You may understand the lesson. But the spoken exam asks you to answer now. Sawti gives you a quiet place to get used to that moment — before exam day.',
    whyBack: 'Back to the microphone',
    whyCta: 'Practise with your voice',
    authTitle: 'Welcome',
    authLogin: 'Log in',
    authSignup: 'Create account',
    name: 'Name',
    identifier: 'Email or phone',
    password: 'Password',
    submit: 'Continue',
    authNotice: 'Sign-in is not connected to a backend yet. This is an interface-only form.',
    tutor: 'Tutor',
    learner: 'You',
    tutorCaption: 'Hear the question, then answer in a full sentence.',
    learnerCaption: 'Learner’s response',
    playAudio: 'Play audio',
    pauseAudio: 'Pause audio',
    read: 'Read',
    startRecording: 'Start recording',
    stopRecording: 'Stop recording',
    close: 'Close',
    livePractice: 'Live practice',
    done: 'Done',
    now: 'Now',
    next: 'Next',
    footerTagline: 'Voice practice for real moments.',
    voiceFirst: 'voice first',
    spokenPractice: 'Spoken Dutch practice',
    dutchPrompt: 'Waar woont u?',
    dutchReply: 'Ik woon in Antwerpen.',
    recorded: 'Ik oefen Nederlands.',
  },
  nl: {
    dir: 'ltr',
    code: 'Nederlands',
    title: 'Sawti — Oefen wat je zegt tijdens je examen',
    navWhy: 'Waarom Sawti',
    navHow: 'Zo werkt het',
    navLevels: 'Niveaus',
    login: 'Inloggen',
    menu: 'Menu',
    heroLine1: 'Oefen wat je',
    heroLine2: 'zegt tijdens je',
    heroAccent: 'examen.',
    intro: 'Sawti is een rustige plek om hardop Nederlands te oefenen — precies het soort spreken dat je inburgeringsexamen vraagt.',
    start: 'Begin met spreken',
    noAccount: 'Geen account · 1 dag gratis proberen',
    practiceLabel: 'Oefening van vandaag',
    prompt: 'Luister en zeg het op jouw manier',
    recordIdle: 'Druk om te spreken',
    recordLive: 'Opnemen… druk om te stoppen',
    recorderHint: 'Je opname wordt niet bewaard in deze demo',
    levelsLabel: 'Je huidige niveau',
    levelCopy: 'Oefeningen die met je praten, niet over je.',
    levelLink: 'Bekijk niveaus',
    howTitle: 'Gemaakt voor het moment waarop ze je vragen te spreken.',
    howCopy: 'Hoor een echte vraag, oefen je antwoord en probeer opnieuw met meer rust. Geen afleiding — alleen jouw stem en de volgende stap.',
    whyEyebrow: 'Waarom Sawti',
    whyTitle: 'De woorden kennen is iets anders dan ze zeggen wanneer het telt.',
    whyCopy:
      'Misschien ken je de woorden. Misschien begrijp je de les. Maar bij het spreekexamen moet je nu antwoorden. Sawti geeft je een rustige plek om aan dat moment te wennen — vóór de examendag.',
    whyBack: 'Terug naar de microfoon',
    whyCta: 'Oefen met je stem',
    authTitle: 'Welkom',
    authLogin: 'Inloggen',
    authSignup: 'Account maken',
    name: 'Naam',
    identifier: 'E-mail of telefoon',
    password: 'Wachtwoord',
    submit: 'Doorgaan',
    authNotice: 'Inloggen is nog niet verbonden met een backend. Dit is alleen een interfaceformulier.',
    tutor: 'Coach',
    learner: 'Jij',
    tutorCaption: 'Luister naar de vraag en antwoord daarna in één hele zin.',
    learnerCaption: 'Antwoord van de leerling',
    playAudio: 'Audio afspelen',
    pauseAudio: 'Audio pauzeren',
    read: 'Gelezen',
    startRecording: 'Opname starten',
    stopRecording: 'Opname stoppen',
    close: 'Sluiten',
    livePractice: 'Live oefenen',
    done: 'Klaar',
    now: 'Nu',
    next: 'Volgende',
    footerTagline: 'Stemoefening voor echte momenten.',
    voiceFirst: 'stem eerst',
    spokenPractice: 'Nederlands spreken oefenen',
    dutchPrompt: 'Waar woont u?',
    dutchReply: 'Ik woon in Antwerpen.',
    recorded: 'Ik oefen Nederlands.',
  },
};

const WAVE_HEIGHTS = [12, 19, 28, 18, 34, 24, 15, 31, 21, 37, 25, 14, 28, 19, 33, 22, 16, 28, 18, 12];

function durationText(total) {
  const min = Math.floor(total / 60);
  const sec = total % 60;
  return `${min}:${String(sec).padStart(2, '0')}`;
}

function Mark() {
  return (
    <span className="brand-mark" aria-hidden="true">
      <i />
      <i />
      <i />
    </span>
  );
}

function Waveform({ active = false }) {
  return (
    <span className={`waveform ${active ? 'is-playing' : ''}`} aria-hidden="true">
      {WAVE_HEIGHTS.map((height, index) => (
        <i style={{ height }} key={index} />
      ))}
    </span>
  );
}

function ConversationBubble({ bubble, t, language }) {
  const [playing, setPlaying] = useState(false);
  const timer = useRef(undefined);

  useEffect(() => {
    if (!playing) return undefined;
    timer.current = window.setTimeout(() => setPlaying(false), bubble.duration * 1000);
    return () => window.clearTimeout(timer.current);
  }, [bubble.duration, playing]);

  const isTutor = bubble.speaker === 'tutor';
  return (
    <article className={`thread-bubble ${isTutor ? 'tutor' : 'learner'} ${bubble.fresh ? 'fresh' : ''}`}>
      <div className="bubble-meta">
        <span className="speaker-dot">{isTutor ? <Volume2 size={14} /> : <Mic size={14} />}</span>
        <span>{isTutor ? t.tutor : t.learner}</span>
        <span className="seen" aria-label={t.read}>
          <Check size={14} />
        </span>
      </div>
      <div className="audio-row" dir="ltr">
        <button
          className="play-button"
          aria-label={playing ? t.pauseAudio : t.playAudio}
          aria-pressed={playing}
          onClick={() => setPlaying((value) => !value)}
        >
          {playing ? <Pause size={15} fill="currentColor" /> : <Play size={15} fill="currentColor" />}
        </button>
        <Waveform active={playing} />
        <time>{durationText(bubble.duration)}</time>
      </div>
      <p className={`bubble-caption ${language === 'ar' && !isTutor ? 'dutch-island' : ''}`} dir={isTutor ? undefined : 'ltr'} lang={isTutor ? undefined : 'nl'}>
        {isTutor ? t[bubble.captionKey] : bubble.phrase}
      </p>
      {isTutor && (
        <p className="dutch-island bubble-phrase" dir="ltr" lang="nl">
          {bubble.phrase}
        </p>
      )}
    </article>
  );
}

function LoginModal({ open, onClose, t }) {
  const [mode, setMode] = useState('login');
  const dialogRef = useRef(null);
  const lastTrigger = useRef(null);

  useEffect(() => {
    if (!open) return undefined;
    lastTrigger.current = document.activeElement;
    const firstInput = dialogRef.current?.querySelector('input,button');
    firstInput?.focus();
    const onKey = (event) => {
      if (event.key === 'Escape') onClose();
      if (event.key !== 'Tab' || !dialogRef.current) return;
      const nodes = Array.from(dialogRef.current.querySelectorAll('button, input, [href], [tabindex]:not([tabindex="-1"])'));
      if (!nodes.length) return;
      const first = nodes[0];
      const last = nodes[nodes.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      }
      if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };
    window.addEventListener('keydown', onKey);
    return () => {
      window.removeEventListener('keydown', onKey);
      lastTrigger.current?.focus();
    };
  }, [open, onClose]);

  if (!open) return null;
  return (
    <div className="modal-backdrop" role="presentation" onMouseDown={onClose}>
      <section
        className="auth-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="auth-title"
        dir={t.dir}
        ref={dialogRef}
        onMouseDown={(event) => event.stopPropagation()}
      >
        <button className="modal-close" onClick={onClose} aria-label={t.close}>
          <X size={20} />
        </button>
        <div className="auth-symbol">
          <Mark />
        </div>
        <h2 id="auth-title">{t.authTitle}</h2>
        <div className="auth-tabs" role="tablist" aria-label="Authentication mode">
          <button role="tab" aria-selected={mode === 'login'} className={mode === 'login' ? 'active' : ''} onClick={() => setMode('login')}>
            {t.authLogin}
          </button>
          <button role="tab" aria-selected={mode === 'signup'} className={mode === 'signup' ? 'active' : ''} onClick={() => setMode('signup')}>
            {t.authSignup}
          </button>
        </div>
        <form onSubmit={(event) => event.preventDefault()}>
          {mode === 'signup' && (
            <label>
              {t.name}
              <input required autoComplete="name" />
            </label>
          )}
          <label>
            {t.identifier}
            <input required autoComplete="username" />
          </label>
          <label>
            {t.password}
            <input type="password" required autoComplete="current-password" />
          </label>
          <button className="auth-submit" type="submit">
            {t.submit}
            <ArrowUpRight size={16} />
          </button>
        </form>
        <p className="auth-note">
          <Sparkles size={14} />
          {t.authNotice}
        </p>
      </section>
    </div>
  );
}

export default function App() {
  const [language, setLanguage] = useState('ar');
  const [languageOpen, setLanguageOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [authOpen, setAuthOpen] = useState(false);
  const [recording, setRecording] = useState(false);
  const [elapsed, setElapsed] = useState(0);
  const [recordings, setRecordings] = useState([]);
  const [whyPage, setWhyPage] = useState(window.location.hash === '#/why');
  const languageMenu = useRef(null);
  const t = COPY[language];

  useEffect(() => {
    const syncHash = () => setWhyPage(window.location.hash === '#/why');
    window.addEventListener('hashchange', syncHash);
    return () => window.removeEventListener('hashchange', syncHash);
  }, []);

  useEffect(() => {
    document.documentElement.dir = t.dir;
    document.documentElement.lang = language;
    document.title = t.title;
    const closeMenu = (event) => {
      if (languageMenu.current && !languageMenu.current.contains(event.target)) setLanguageOpen(false);
    };
    window.addEventListener('mousedown', closeMenu);
    return () => window.removeEventListener('mousedown', closeMenu);
  }, [language, t]);

  useEffect(() => {
    if (!recording) return undefined;
    const timer = window.setInterval(() => setElapsed((value) => value + 1), 1000);
    return () => window.clearInterval(timer);
  }, [recording]);

  const startExperience = () => document.querySelector('#practice')?.scrollIntoView({ behavior: 'smooth' });
  const navigateWhy = () => {
    window.location.hash = '/why';
    setMobileOpen(false);
  };
  const navigateHome = () => {
    history.pushState(null, '', window.location.pathname);
    setWhyPage(false);
  };
  const toggleRecording = () => {
    if (recording) {
      const duration = Math.max(elapsed, 1);
      setRecordings((value) => [
        ...value,
        { id: `recording-${Date.now()}`, speaker: 'learner', duration, phrase: t.recorded, captionKey: 'learnerCaption', fresh: true },
      ]);
      setRecording(false);
      setElapsed(0);
    } else {
      setElapsed(0);
      setRecording(true);
    }
  };

  const bubbles = [
    { id: 'tutor-1', speaker: 'tutor', duration: 4, phrase: t.dutchPrompt, captionKey: 'tutorCaption' },
    { id: 'learner-1', speaker: 'learner', duration: 3, phrase: t.dutchReply, captionKey: 'learnerCaption' },
    ...recordings,
  ];

  const navLinks = (
    <>
      <button onClick={navigateWhy}>{t.navWhy}</button>
      <a href="#how" onClick={() => setMobileOpen(false)}>
        {t.navHow}
      </a>
      <a href="#levels" onClick={() => setMobileOpen(false)}>
        {t.navLevels}
      </a>
    </>
  );

  return (
    <div className="site-shell" dir={t.dir}>
      <header className="site-header">
        <a
          className="brand"
          href="#"
          onClick={(event) => {
            event.preventDefault();
            navigateHome();
          }}
          aria-label="Sawti home"
        >
          <Mark />
          <span>Sawti</span>
        </a>
        <nav className="desktop-nav" aria-label="Main navigation">
          {navLinks}
        </nav>
        <div className="header-actions">
          <div className="language-menu" ref={languageMenu}>
            <button
              className="language-trigger"
              onClick={() => setLanguageOpen((value) => !value)}
              aria-expanded={languageOpen}
              aria-haspopup="menu"
            >
              <span>{t.code}</span>
              <ChevronDown size={14} />
            </button>
            {languageOpen && (
              <div className="language-popover" role="menu">
                {Object.keys(COPY).map((key) => (
                  <button
                    key={key}
                    role="menuitemradio"
                    aria-checked={language === key}
                    onClick={() => {
                      setLanguage(key);
                      setLanguageOpen(false);
                    }}
                  >
                    <span>{COPY[key].code}</span>
                  </button>
                ))}
              </div>
            )}
          </div>
          <button className="login-button" onClick={() => setAuthOpen(true)}>
            {t.login}
            <ArrowUpRight size={14} />
          </button>
          <button className="mobile-menu-button" aria-label={t.menu} aria-expanded={mobileOpen} onClick={() => setMobileOpen((value) => !value)}>
            {mobileOpen ? <X /> : <Menu />}
          </button>
        </div>
        {mobileOpen && (
          <nav className="mobile-nav" aria-label="Mobile navigation">
            {navLinks}
            <button
              onClick={() => {
                setAuthOpen(true);
                setMobileOpen(false);
              }}
            >
              {t.login}
            </button>
          </nav>
        )}
      </header>

      {whyPage ? (
        <main className="why-page">
          <section className="why-hero">
            <span className="why-eyebrow">
              <span />
              <span>{t.whyEyebrow}</span>
            </span>
            <div className="why-copy">
              <p className="serial">01 — Sawti</p>
              <h1>{t.whyTitle}</h1>
              <p>{t.whyCopy}</p>
              <button
                className="coral-action"
                onClick={() => {
                  navigateHome();
                  setTimeout(startExperience, 0);
                }}
              >
                <Mic size={18} />
                {t.whyCta}
                <ArrowDownLeft size={18} />
              </button>
            </div>
            <div className="why-art">
              <img src="/images/sawti-voice-thread.webp" alt="Abstract layers representing a voice in motion" />
            </div>
          </section>
          <section className="why-footnote">
            <span>SAWTI / صَوْتي</span>
            <span>{t.whyBack}</span>
            <button onClick={navigateHome} aria-label={t.whyBack}>
              <ArrowLeft size={20} />
            </button>
          </section>
        </main>
      ) : (
        <main>
          <section className="hero" dir={t.dir}>
            <div className="hero-copy">
              <p className="hero-serial">
                ● &nbsp; SAWTI / صَوْتي <span>— 01</span>
              </p>
              <h1>
                {t.heroLine1}
                <br />
                {t.heroLine2} <em>{t.heroAccent}</em>
              </h1>
              <p className="hero-intro">{t.intro}</p>
              <div className="hero-actions">
                <button className="coral-action" onClick={startExperience}>
                  <Mic size={18} />
                  {t.start}
                  <ArrowDownLeft size={18} />
                </button>
              </div>
              <div className="trial-note">
                <span>
                  <Check size={13} />
                </span>
                {t.noAccount}
              </div>
            </div>
            <div className="hero-visual" aria-hidden="true">
              <img src="/images/sawti-soft-wave.webp" alt="" />
              <div className="sound-stamp">
                <Waves size={23} />
                <span>{t.voiceFirst}</span>
              </div>
            </div>
            <div className="hero-bottom-line">
              <span>NL</span>
              <span>BE</span>
              <span>
                — <b>{t.spokenPractice}</b>
              </span>
            </div>
          </section>

          <section className="practice-section" id="practice">
            <div className="practice-sidebar">
              <div>
                <p className="section-number">02</p>
                <p className="section-label">{t.practiceLabel}</p>
              </div>
              <div className="today-label">
                <span className="live-dot" /> <span>{t.livePractice}</span>
              </div>
            </div>
            <div className="practice-main">
              <div className="practice-heading">
                <h2>{t.prompt}</h2>
                <p>01 / 01</p>
              </div>
              <div className="conversation-thread" aria-label="Sample voice conversation">
                {bubbles.map((bubble) => (
                  <ConversationBubble key={bubble.id} bubble={bubble} t={t} language={language} />
                ))}
              </div>
              <div className="recorder-panel">
                <div className="record-status">
                  <span className={recording ? 'record-indicator active' : 'record-indicator'} />
                  <span aria-live="polite">{recording ? durationText(elapsed) : '00:00'}</span>
                </div>
                <button
                  className={`mic-button ${recording ? 'is-recording' : ''}`}
                  onClick={toggleRecording}
                  aria-label={recording ? t.stopRecording : t.startRecording}
                  aria-pressed={recording}
                >
                  {recording ? (
                    <>
                      <Waves size={26} />
                      <i className="stop-badge">
                        <CircleStop size={11} fill="currentColor" />
                      </i>
                    </>
                  ) : (
                    <Mic size={28} />
                  )}
                </button>
                <div className="record-copy">
                  <strong>{recording ? t.recordLive : t.recordIdle}</strong>
                  <span>{t.recorderHint}</span>
                </div>
              </div>
            </div>
          </section>

          <section className="levels-section" id="levels">
            <div className="levels-copy">
              <p className="section-number">03</p>
              <span className="section-label">{t.levelsLabel}</span>
              <h2>{t.levelCopy}</h2>
              <a href="#how">
                {t.levelLink}
                <ArrowUpRight size={16} />
              </a>
            </div>
            <div className="levels-track" aria-label="Progress through language levels">
              {[
                ['A0', 'done'],
                ['A1', 'done'],
                ['A2', 'current'],
                ['B1', 'locked'],
              ].map(([level, status]) => (
                <div className={`level-chip ${status}`} key={level}>
                  <span>{status === 'done' ? <Check size={14} /> : status === 'locked' ? <LockKeyhole size={13} /> : <i />}</span>
                  <b>{level}</b>
                  <small>{status === 'done' ? t.done : status === 'current' ? t.now : t.next}</small>
                </div>
              ))}
            </div>
          </section>

          <section className="how-section" id="how">
            <div className="how-quote">
              <span>“</span>
            </div>
            <div>
              <p className="section-number">04</p>
              <p className="section-label">{t.navHow}</p>
            </div>
            <div className="how-main">
              <h2>{t.howTitle}</h2>
              <p>{t.howCopy}</p>
              <button onClick={startExperience}>
                {t.start}
                <ArrowDownLeft size={17} />
              </button>
            </div>
          </section>
        </main>
      )}
      <footer>
        <a
          className="brand"
          href="#"
          onClick={(event) => {
            event.preventDefault();
            navigateHome();
          }}
        >
          <Mark />
          <span>Sawti</span>
        </a>
        <span>{t.footerTagline}</span>
        <span>© 2026</span>
      </footer>
      <LoginModal open={authOpen} onClose={() => setAuthOpen(false)} t={t} />
    </div>
  );
}

import Waveform from "./Waveform";
import { PlayIcon } from "./Icons";

export default function DeviceCard() {
  return (
    <div className="device">
      <span className="device__badge">LEVEL A1 · 62 U</span>

      <div className="device__body">
        <div className="device__screen">
          <div className="device__bar">
            <span>GEMEENTE · ROLEPLAY</span>
            <span>04:12</span>
          </div>

          <div className="bubble bubble--tutor">
            <p className="bubble__dutch" lang="nl">
              Waar is het gemeentehuis?
            </p>
            <div className="bubble__foot">
              <button type="button" className="play" aria-label="تشغيل نطق الجملة">
                <PlayIcon />
              </button>
              <Waveform bars={15} height={18} color="#7e93ad" />
              <span className="bubble__time">0:04</span>
            </div>
          </div>

          <div className="bubble bubble--learner">
            <p className="bubble__dutch" lang="nl">
              Het gemeentehuis is daar
            </p>
            <div className="bubble__foot">
              <Waveform bars={10} height={16} color="#b9b1a0" />
              <span className="bubble__time">0:03</span>
            </div>
          </div>

          <div className="feedback">
            <p className="feedback__label">GRAMMATICA · شرح بالعربية</p>
            <p className="feedback__body">
              نطقك ممتاز. لاحظ أنّ الفعل يأتي في المرتبة الثانية دائمًا في الجملة
              الهولندية — تمامًا كما في{" "}
              <span className="feedback__dutch" lang="nl">
                het gemeentehuis is daar
              </span>
              .
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

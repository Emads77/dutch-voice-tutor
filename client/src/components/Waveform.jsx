/**
 * Static waveform. Heights are fixed rather than random so the bars don't
 * reshuffle on every re-render. Swap for real amplitude data once the
 * recorder is wired up (ticket 1.4).
 */
const PATTERN = [6, 14, 8, 18, 10, 4, 14, 8, 16, 6, 12, 4, 10, 6, 3];

export default function Waveform({ bars = 15, height = 18, color = "#7e93ad" }) {
  const slice = PATTERN.slice(0, bars);
  const width = slice.length * 7;

  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      aria-hidden="true"
      style={{ flexShrink: 0 }}
    >
      {slice.map((h, i) => {
        const barHeight = Math.min(h, height);
        return (
          <rect
            key={i}
            x={i * 7}
            y={(height - barHeight) / 2}
            width="3"
            height={barHeight}
            rx="1.5"
            fill={color}
          />
        );
      })}
    </svg>
  );
}

import { useEffect, useState } from "react";
import { getHealth, API_URL } from "../lib/api";

/**
 * Temporary: proves the React app can reach the Express server (ticket 1.3).
 * Delete this component and its mount in App.jsx once verified.
 */
export default function HealthBadge() {
  const [status, setStatus] = useState("checking");

useEffect(() => {
  let cancelled = false;

  async function check() {
    try {
      await getHealth();
      if (!cancelled) setStatus("ok");
    } catch (err) {
      if (!cancelled) {
        console.error("Backend unreachable:", err);
        setStatus("fail");
      }
    }
  }

     check();
    return () => {
      cancelled = true;
    };
  }, []);

  const label = {
    checking: "checking backend…",
    ok: `backend ok — ${API_URL}`,
    fail: `backend unreachable — ${API_URL}`,
  }[status];

  return (
    <div className="health" role="status">
      <span className={`health__dot health__dot--${status === "checking" ? "" : status}`} />
      <span>{label}</span>
    </div>
  );
}

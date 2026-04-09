import { useMemo, useState } from "react";

const baseHistory = [
  { date: "2026-04-08", present: true, markedAt: "08:46 AM" },
  { date: "2026-04-07", present: true, markedAt: "08:39 AM" },
  { date: "2026-04-06", present: false, markedAt: "-" },
  { date: "2026-04-05", present: true, markedAt: "08:51 AM" },
];

function Attendance({ currentUser }) {
  const [history, setHistory] = useState(baseHistory);

  const studentName = currentUser?.name || "Student";
  const studentEmail = currentUser?.email || "student@pmedu.com";
  const studentId = currentUser?.studentId || "ST-1002";

  const today = new Date().toISOString().slice(0, 10);
  const todayRecord = history.find((item) => item.date === today);
  const isPresentToday = Boolean(todayRecord?.present);

  const presentCount = useMemo(() => history.filter((record) => record.present).length, [history]);
  const attendanceRate = Math.round((presentCount / history.length) * 100);

  const handleMarkAttendance = () => {
    const markTime = new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });

    setHistory((previous) => {
      const hasToday = previous.some((item) => item.date === today);

      if (hasToday) {
        return previous.map((item) =>
          item.date === today
            ? {
                ...item,
                present: !item.present,
                markedAt: !item.present ? markTime : "-",
              }
            : item
        );
      }

      return [{ date: today, present: true, markedAt: markTime }, ...previous];
    });
  };

  return (
    <section className="feature-section">
      <h2 className="section-title">My Attendance</h2>
      <p className="section-subtitle">Track and mark your own attendance from this page.</p>

      <article className="attendance-self-card">
        <div className="attendance-student-meta">
          <div className="attendance-avatar">{studentName.slice(0, 1)}</div>
          <div>
            <h3>{studentName}</h3>
            <p>{studentId} | {studentEmail}</p>
          </div>
        </div>
        <button type="button" className="btn-primary" onClick={handleMarkAttendance}>
          {isPresentToday ? "Mark Me Absent" : "Mark Me Present"}
        </button>
      </article>

      <div className="feature-stats-grid">
        <article className="feature-mini-card">
          <span>Today&apos;s Status</span>
          <strong>{isPresentToday ? "Present" : "Absent"}</strong>
        </article>
        <article className="feature-mini-card">
          <span>Classes Recorded</span>
          <strong>{history.length}</strong>
        </article>
        <article className="feature-mini-card">
          <span>Attendance Rate</span>
          <strong>{attendanceRate}%</strong>
        </article>
      </div>

      <div className="table-wrap">
        <table className="feature-table">
          <thead>
            <tr>
              <th>Date</th>
              <th>Status</th>
              <th>Marked Time</th>
            </tr>
          </thead>
          <tbody>
            {history.map((record) => (
              <tr key={record.date}>
                <td>{record.date}</td>
                <td>
                  <span className={`status-pill ${record.present ? "active" : "inactive"}`}>
                    {record.present ? "Present" : "Absent"}
                  </span>
                </td>
                <td>{record.markedAt}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default Attendance;

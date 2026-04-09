import { useMemo, useState } from "react";

const upcomingExams = [
  { id: 1, subject: "Mathematics", date: "2026-04-18", time: "09:00 AM" },
  { id: 2, subject: "OOP I", date: "2026-04-20", time: "01:00 PM" },
  { id: 3, subject: "English", date: "2026-04-22", time: "10:30 AM" },
];

const results = [
  { id: "RS-201", subject: "Mathematics", mark: 86, grade: "A" },
  { id: "RS-202", subject: "OODP", mark: 74, grade: "B" },
  { id: "RS-203", subject: "English", mark: 92, grade: "A+" },
  { id: "RS-204", subject: "OOP I", mark: 68, grade: "C+" },
];

function ExamResults() {
  const [subjectFilter, setSubjectFilter] = useState("All");

  const subjects = ["All", ...new Set(results.map((item) => item.subject))];

  const filteredResults = useMemo(() => {
    if (subjectFilter === "All") {
      return results;
    }
    return results.filter((item) => item.subject === subjectFilter);
  }, [subjectFilter]);

  const avgMark = Math.round(filteredResults.reduce((sum, row) => sum + row.mark, 0) / filteredResults.length);

  return (
    <section className="feature-section">
      <h2 className="section-title">My Results</h2>
      <p className="section-subtitle">Track your upcoming exams and monitor your personal performance.</p>

      <div className="feature-stats-grid">
        <article className="feature-mini-card">
          <span>My Upcoming Exams</span>
          <strong>{upcomingExams.length}</strong>
        </article>
        <article className="feature-mini-card">
          <span>Average Mark</span>
          <strong>{Number.isFinite(avgMark) ? `${avgMark}%` : "0%"}</strong>
        </article>
        <article className="feature-mini-card">
          <span>Latest Grade</span>
          <strong>{filteredResults[0]?.grade || "-"}</strong>
        </article>
      </div>

      <div className="exam-grid">
        {upcomingExams.map((exam) => (
          <article key={exam.id} className="exam-card">
            <h3>{exam.subject}</h3>
            <p>{exam.date}</p>
            <span>{exam.time}</span>
          </article>
        ))}
      </div>

      <div className="feature-toolbar">
        <select className="feature-select" value={subjectFilter} onChange={(event) => setSubjectFilter(event.target.value)}>
          {subjects.map((subject) => (
            <option key={subject} value={subject}>
              {subject}
            </option>
          ))}
        </select>
      </div>

      <div className="table-wrap">
        <table className="feature-table">
          <thead>
            <tr>
              <th>Result ID</th>
              <th>Subject</th>
              <th>Mark</th>
              <th>Grade</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {filteredResults.map((row) => (
              <tr key={row.id}>
                <td>{row.id}</td>
                <td>{row.subject}</td>
                <td>{row.mark}%</td>
                <td>{row.grade}</td>
                <td>
                  <span className={`status-pill ${row.mark >= 75 ? "active" : "pending"}`}>
                    {row.mark >= 75 ? "Excellent" : "Needs Review"}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default ExamResults;

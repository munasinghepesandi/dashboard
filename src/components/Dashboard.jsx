function Dashboard() {
  const weeklySeries = [
    { day: "Mon", value: 68 },
    { day: "Tue", value: 75 },
    { day: "Wed", value: 82 },
    { day: "Thu", value: 70 },
    { day: "Fri", value: 87 },
  ];

  const priorities = [
    "Review today's lesson plan",
    "Prepare for the next exam",
    "Check attendance for the day",
  ];

  const modules = [
    {
      title: "Active Lessons",
      value: "4",
      trend: "+1 from yesterday",
      progress: 78,
      tone: "sky",
    },
    {
      title: "Active Assignments",
      value: "1",
      trend: "Submission rate 92%",
      progress: 92,
      tone: "teal",
    },
    {
      title: "Upcoming Exams",
      value: "2",
      trend: "Starts in 9 days",
      progress: 40,
      tone: "amber",
    },
  ];

  const classSchedule = [
    {
      id: 1,
      subject: "Mathematics",
      teacher: "Mr. Silva",
      time: "08:30 AM - 10:30 AM",
      type: "Core",
    },
    {
      id: 2,
      subject: "OODP",
      teacher: "Mrs. Jayasinghe",
      time: "10:15 AM - 11:45 AM",
      type: "Theory",
    },
    {
      id: 3,
      subject: "Software Engineering",
      teacher: "Ms. Fernando",
      time: "04:30 PM - 06:00 PM",
      type: "Project Sprint",
    },
  ];

  return (
    <section className="dashboard-section">
      <div className="dashboard-hero">
        <div>
          <h2 className="section-title">My Dashboard</h2>
          <p className="section-subtitle">A personal view of your classes, progress, attendance, and assessments.</p>
        </div>
        <div className="dashboard-hero-badge">
          <span>Overall Progress</span>
          <strong>84%</strong>
        </div>
      </div>

      <div className="dashboard-kpi-grid">
        {modules.map((module) => (
          <article key={module.title} className="kpi-card">
            <div className="kpi-top">
              <span className="kpi-title">{module.title}</span>
              <span className={`kpi-dot ${module.tone}`} />
            </div>
            <div className="kpi-value">{module.value}</div>
            <p className="kpi-trend">{module.trend}</p>
            <div className="kpi-progress-track">
              <span className={`kpi-progress-fill ${module.tone}`} style={{ width: `${module.progress}%` }} />
            </div>
          </article>
        ))}
      </div>

      <div className="dashboard-content-grid">
        <article className="panel-card">
          <div className="panel-head">
            <h3>Weekly Progress</h3>
            <span className="panel-meta">Updated 2 mins ago</span>
          </div>
          <div className="activity-bars">
            {weeklySeries.map((item) => (
              <div key={item.day} className="activity-item">
                <div className="bar-shell">
                  <span className="bar-fill" style={{ height: `${item.value}%` }} />
                </div>
                <span className="bar-label">{item.day}</span>
              </div>
            ))}
          </div>
        </article>

        <article className="panel-card">
          <div className="panel-head">
            <h3>Today&apos;s Priorities</h3>
            <span className="panel-meta">3 tasks</span>
          </div>
          <ul className="priority-list">
            {priorities.map((task) => (
              <li key={task}>{task}</li>
            ))}
          </ul>
          <div className="quick-actions">
            <button type="button" className="btn-primary">Create Reminder</button>
            <button type="button" className="btn-muted">Open Calendar</button>
          </div>
        </article>
      </div>

      <article className="panel-card class-schedule-panel">
        <div className="panel-head">
          <h3>Today&apos;s Schedule</h3>
          <span className="panel-meta">{classSchedule.length} classes</span>
        </div>
        <div className="schedule-mini-list">
          {classSchedule.map((item) => (
            <div key={item.id} className="schedule-mini-row">
              <div className="schedule-time-chip">{item.time}</div>
              <div className="schedule-mini-info">
                <strong>{item.subject}</strong>
                <span>{item.teacher}</span>
              </div>
              <span className="schedule-type-pill">{item.type}</span>
              <button type="button" className="btn-primary schedule-join-btn">Join</button>
            </div>
          ))}
        </div>
      </article>

      <div className="dashboard-note">
        <strong>Insight:</strong> Your schedule is busiest on Friday. Plan revision and assessments earlier in the week.
      </div>
    </section>
  );
}

export default Dashboard;

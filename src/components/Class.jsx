import React, { useMemo, useState } from "react";

function Class() {
  const [activeDay, setActiveDay] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  
  const classes = [
    {
      id: 1,
      subject: "Mathematics",
      teacher: "Mr. Silva",
      time: "08:30 AM - 10:30 AM",
      day: "Monday",
      color: "Core",
    },
    {
      id: 2,
      subject: "OODP",
      teacher: "Mrs. Jayasinghe",
      time: "10:15 AM - 11:45 AM",
      day: "Tuesday",
      color: "Theory",
    },
    {
      id: 3,
      subject: "OOP I",
      teacher: "Ms. Perera",
      time: "01:00 PM - 02:30 PM",
      day: "Wednesday",
      color: "Practical",
    },
    
    {
      id: 4,
      subject: "English",
      teacher: "Ms. Perera",
      time: "01:00 PM - 02:30 PM",
      day: "Wednesday",
      color: "Language",
    },
    {
      id: 5,
      subject: "OODP I",
      teacher: "Mr. Jayasinghe",
      time: "02:45 PM - 04:15 PM",
      day: "Thursday",
      color: "Lab Session",
    },
    {
      id: 6,
      subject: "Software Engineering",
      teacher: "Ms. Fernando",
      time: "04:30 PM - 06:00 PM",
      day: "Friday",
      color: "Project Sprint",
    }
  ];

  const dayFilters = ["All", ...new Set(classes.map((cls) => cls.day))];

  const filteredClasses = useMemo(() => {
    return classes.filter((cls) => {
      const byDay = activeDay === "All" || cls.day === activeDay;
      const bySearch =
        cls.subject.toLowerCase().includes(searchTerm.toLowerCase()) ||
        cls.teacher.toLowerCase().includes(searchTerm.toLowerCase());

      return byDay && bySearch;
    });
  }, [activeDay, searchTerm]);

  return (
    <section className="schedule-section">
      <h2 className="section-title">My Schedule</h2>
      <p className="section-subtitle">Plan your week with quick actions and details.</p>

      <div className="schedule-toolbar">
        <input
          type="text"
          className="class-search"
          placeholder="Search by subject or teacher"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <div className="day-filters">
          {dayFilters.map((day) => (
            <button
              key={day}
              type="button"
              className={`day-filter-btn ${activeDay === day ? "active" : ""}`}
              onClick={() => setActiveDay(day)}
            >
              {day}
            </button>
          ))}
        </div>
      </div>

      <p className="result-count">Showing {filteredClasses.length} classes</p>

      <div className="schedule-grid">
          {filteredClasses.map((cls) => (
            <div
              key={cls.id}
              className="class-card"
            >
              <h3>{cls.subject}</h3>
              <span className="chip">{cls.color}</span>
              <div className="class-meta">
                <div><strong>Teacher:</strong> {cls.teacher}</div>
                <div><strong>Day:</strong> {cls.day}</div>
                <div><strong>Time:</strong> {cls.time}</div>
              </div>

              <div className="class-actions">
                <button className="btn-primary">
                  Join Class
                </button>
                <button className="btn-muted">
                  View Details
                </button>
              </div>
            </div>
          ))}
      </div>
    </section>
  );
}

export default Class;

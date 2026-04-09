import { useState } from "react";

function UploadAssessments() {
  const [title, setTitle] = useState("");
  const [subject, setSubject] = useState("Mathematics");
  const [dueDate, setDueDate] = useState("");
  const [instructions, setInstructions] = useState("");
  const [fileName, setFileName] = useState("");
  const [assessments, setAssessments] = useState([
    {
      id: "AS-001",
      title: "Algebra Worksheet",
      subject: "Mathematics",
      dueDate: "2026-04-15",
      status: "Published",
      fileName: "algebra-worksheet.pdf",
    },
  ]);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!title.trim() || !dueDate || !fileName.trim()) {
      return;
    }

    const newAssessment = {
      id: `AS-${String(assessments.length + 1).padStart(3, "0")}`,
      title: title.trim(),
      subject,
      dueDate,
      status: "Draft",
      fileName: fileName.trim(),
      instructions: instructions.trim(),
    };

    setAssessments((previous) => [newAssessment, ...previous]);
    setTitle("");
    setDueDate("");
    setInstructions("");
    setFileName("");
  };

  const toggleStatus = (id) => {
    setAssessments((previous) =>
      previous.map((item) =>
        item.id === id
          ? { ...item, status: item.status === "Published" ? "Draft" : "Published" }
          : item
      )
    );
  };

  return (
    <section className="feature-section">
      <h2 className="section-title">My Assessments</h2>
      <p className="section-subtitle">Create, upload, and publish your personal assessments.</p>

      <form className="upload-form" onSubmit={handleSubmit}>
        <input
          type="text"
          className="feature-input"
          placeholder="Assessment title"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
        <select className="feature-select" value={subject} onChange={(event) => setSubject(event.target.value)}>
          <option>Mathematics</option>
          <option>OODP</option>
          <option>OOP I</option>
          <option>English</option>
        </select>
        <input
          type="date"
          className="feature-input"
          value={dueDate}
          onChange={(event) => setDueDate(event.target.value)}
        />
        <input
          type="text"
          className="feature-input"
          placeholder="File name (example: assignment-1.pdf)"
          value={fileName}
          onChange={(event) => setFileName(event.target.value)}
        />
        <textarea
          className="feature-textarea"
          placeholder="Instructions"
          value={instructions}
          onChange={(event) => setInstructions(event.target.value)}
        />
        <button type="submit" className="btn-primary">Add Assessment</button>
      </form>

      <div className="table-wrap">
        <table className="feature-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Subject</th>
              <th>Due Date</th>
              <th>File</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {assessments.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.title}</td>
                <td>{item.subject}</td>
                <td>{item.dueDate}</td>
                <td>{item.fileName}</td>
                <td>
                  <span className={`status-pill ${item.status === "Published" ? "active" : "pending"}`}>
                    {item.status}
                  </span>
                </td>
                <td>
                  <button type="button" className="btn-muted" onClick={() => toggleStatus(item.id)}>
                    {item.status === "Published" ? "Unpublish" : "Publish"}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default UploadAssessments;

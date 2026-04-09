import React, { useEffect, useState } from "react";
import Nav from "./components/Nav";
import "./App.css";
import Header from "./components/Header";
import Dashboard from "./components/Dashboard";
import Footer from "./components/Footer";
import Class from "./components/Class";
import StudentLogin from "./components/StudentLogin";
import StudentDetails from "./components/StudentDetails";
import ExamResults from "./components/ExamResults";
import Attendance from "./components/Attendance";
import UploadAssessments from "./components/UploadAssessments";

const SESSION_KEY = "pm-education-student-session";

const DEFAULT_STUDENT = {
  email: "student@pmedu.com",
  password: "Student@123",
  name: "Pesandi Munasinghe",
  studentId: "ST-1002",
  role: "Student",
};

function App() {
 const [currentUser, setCurrentUser] = useState(null);
 const [activeSection, setActiveSection] = useState("dashboard");

 useEffect(() => {
  const storedSession = localStorage.getItem(SESSION_KEY);
  if (!storedSession) {
    return;
  }

  try {
    const parsed = JSON.parse(storedSession);
    if (parsed?.email) {
      setCurrentUser(parsed);
    }
  } catch (error) {
    localStorage.removeItem(SESSION_KEY);
  }
 }, []);

 const handleLogin = ({ email, password }) => {
  const normalizedEmail = email.trim().toLowerCase();
  const isValid =
    normalizedEmail === DEFAULT_STUDENT.email && password === DEFAULT_STUDENT.password;

  if (!isValid) {
    return {
      success: false,
      message: "Invalid credentials. Use the student account details provided.",
    };
  }

  const loggedInUser = {
    name: DEFAULT_STUDENT.name,
    role: DEFAULT_STUDENT.role,
    email: DEFAULT_STUDENT.email,
    studentId: DEFAULT_STUDENT.studentId,
  };

  setCurrentUser(loggedInUser);
  localStorage.setItem(SESSION_KEY, JSON.stringify(loggedInUser));
  return { success: true };
 };

 const handleLogout = () => {
  setCurrentUser(null);
  localStorage.removeItem(SESSION_KEY);
 };

 const renderSection = () => {
  if (activeSection === "student-details") {
    return <StudentDetails currentUser={currentUser} />;
  }

  if (activeSection === "class-schedule") {
    return <Class />;
  }

  if (activeSection === "exam-results") {
    return <ExamResults />;
  }

  if (activeSection === "attendance") {
    return <Attendance currentUser={currentUser} />;
  }

  if (activeSection === "upload-assessments") {
    return <UploadAssessments />;
  }

  return <Dashboard />;
 };

 if (!currentUser) {
  return (
    <div className="app-shell">
      <StudentLogin onLogin={handleLogin} demoUser={DEFAULT_STUDENT} />
    </div>
  );
 }

 return(
  <div className="app-shell">
    <Header user={currentUser} onLogout={handleLogout} />
    <div className="app-layout">
      <aside className="app-sidebar">
        <Nav activeSection={activeSection} onSectionChange={setActiveSection} />
      </aside>
      <main className="app-main">
        {renderSection()}
      </main>
    </div>
    <Footer />
  </div>
 )
}

export default App;

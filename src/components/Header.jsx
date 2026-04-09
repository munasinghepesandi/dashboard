import { useMemo, useState } from "react";
import logo from '../assets/logo.png';
import { BellOutlined, SearchOutlined, UserOutlined } from '@ant-design/icons';

function Header ({ user, onLogout }){
    const [query, setQuery] = useState("");
    const quickLinks = [
        "Dashboard",
        "My Profile",
        "My Schedule",
        "My Results",
        "My Attendance",
        "My Assessments"
    ];

    const matchingLinks = useMemo(() => {
        if (!query.trim()) {
            return [];
        }
        return quickLinks.filter((item) =>
            item.toLowerCase().includes(query.toLowerCase())
        );
    }, [query]);

    const currentHour = new Date().getHours();
    const greeting = currentHour < 12 ? "Good morning" : currentHour < 18 ? "Good afternoon" : "Good evening";

    return(
        <header className="header-bar">
            <div className="brand-wrap">
                <img src={logo} alt="PM Education" className="brand-logo" />
                <div className="brand-text">
                    <h1>PM Education</h1>
                    <p>{greeting}, manage your learning portal with confidence</p>
                </div>
            </div>
            <div className="header-tools">
                <div className="search-box-wrap">
                    <SearchOutlined className="search-icon" />
                    <input
                        type="text"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        placeholder="Quick search modules"
                        className="search-input"
                    />
                    {!!matchingLinks.length && (
                        <div className="search-dropdown">
                            {matchingLinks.slice(0, 4).map((link) => (
                                <button key={link} className="search-result-item" type="button">
                                    {link}
                                </button>
                            ))}
                        </div>
                    )}
                </div>
                <button className="notify-btn" type="button" aria-label="Notifications">
                    <BellOutlined />
                    <span className="notify-count">3</span>
                </button>
            </div>
            <div className="header-user">
                <div className="header-name">
                    <strong>{user?.name || "Student"}</strong>
                    <span>{user?.role || "Student"}</span>
                </div>
                <div className="user-avatar">
                    <UserOutlined />
                </div>
                <button className="logout-btn" onClick={onLogout} type="button">Logout</button>
            </div>
        </header>
    );
}

export default Header;
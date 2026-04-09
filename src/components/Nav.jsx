import React from "react";
import {
  MailOutlined,
  UserOutlined,
  DashboardOutlined,
  ScheduleOutlined,
  FileTextOutlined,
  CheckCircleOutlined,
} from "@ant-design/icons";
import { Menu } from "antd";


const items = [
  {
    key: "dashboard",
    label: "Dashboard",
    icon: <DashboardOutlined />,
    
  },
  {
    key: "student-details",
    label: "My Profile",
    icon: <UserOutlined />,
    
  },
  
  {
    key: "class-schedule",
    label: "My Schedule",
    icon: <ScheduleOutlined />,
    
  },
  {
    key: "exam-results",
    label: "My Results",
    icon: <MailOutlined />,
    
  },
  {
    key: "attendance",
    label: "My Attendance",
    icon: <CheckCircleOutlined />,
    
  },
  {
    key: "upload-assessments",
    label: "My Assessments",
    icon: <FileTextOutlined />,
    
  },
  
  
  
  
  
];

function Nav({ activeSection, onSectionChange }){
  const onClick = (e) => {
    onSectionChange(e.key);
  };

  return (
      <div className="sidebar-shell">
        <Menu
          onClick={onClick}
          style={{ width: "100%", borderRight: 0, background: "transparent" }}
          selectedKeys={[activeSection]}
          mode="inline"
          items={items}
        />
      </div>
  );
}

export default Nav;





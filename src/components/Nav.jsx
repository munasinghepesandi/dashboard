import React from "react";
import {
  AppstoreOutlined,
  MailOutlined,
  UserOutlined,
  DashboardOutlined,
  ScheduleOutlined,
  FileTextOutlined,
  CheckCircleOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Menu } from "antd";


const items = [
  {
    key: "sub1",
    label: "Dashboard",
    icon: <DashboardOutlined />,
    
  },
  {
    key: "sub2",
    label: "Student Details",
    icon: <UserOutlined />,
    
  },
  
  {
    key: "sub3",
    label: "Class Shedule",
    icon: <ScheduleOutlined />,
    
  },
  {
    key: "sub4",
    label: "Exams & Results",
    icon: <MailOutlined />,
    
  },
  {
    key: "sub5",
    label: "Attendance",
    icon: <CheckCircleOutlined />,
    
  },
  {
    key: "sub6",
    label: "Upload Assesments",
    icon: <FileTextOutlined />,
    
  },
  
  
  
  
  
];

function Nav(){
     const onClick = (e) => {
    console.log("click ", e);
  };

  return (
    <>
      <div className="w-full flex h-screen ">
        <div className="w-1/5 shadow h-full ">
          <Menu
            onClick={onClick}
            style={{ width: 256, height:"100%", borderRight: 0}}
            defaultSelectedKeys={["1"]}
            defaultOpenKeys={["sub1"]}
            mode="inline"
            items={items}
          />
        </div>
        
      </div>
      
    </>
  );
}

export default Nav;





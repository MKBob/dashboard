import React from "react";
import Sidebar from "../component/Sidebar";
import CoursePanel from "../component/CoursePanel";
import Rightbar from "../component/Rightbar";

const Layout = () => {
  return (
    <div className="flex gap-6">
      <Sidebar />
      <div className="flex-1 min-w-0">
        <CoursePanel />
      </div>
      <Rightbar />
    </div>
  );
};

export default Layout;

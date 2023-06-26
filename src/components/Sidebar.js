import React from "react";
import "../App.css";
import dashboard from "../icons/dashboard.png";
import properties from "../icons/properties.png";
import leads from "../icons/leads.png";
import tenants from "../icons/tenants.png";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <Link to="/" style={{ textDecoration: "none", margin:"20px 0" }}>
        <div className="sidebar-content">
          <i
            className="fa-solid fa-table-columns fa-xl icon"
            style={{ color: "#223750" }}
          ></i>
          <div className="sidebar-name">
            <p>Dashboard</p>
          </div>
        </div>
      </Link>

      <Link to="/properties" style={{ textDecoration: "none", margin:"20px 0" }}>
        <div className="sidebar-content">
          <i
            className="fa-solid fa-house fa-xl icon"
            style={{ color: "#223750" }}
          ></i>
          <div className="sidebar-name">
            <p>Properties</p>
          </div>
        </div>
      </Link>

      <Link to="/leads" style={{ textDecoration: "none", margin:"20px 0"  }}>
        <div className="sidebar-content">
          <i
            className="fa-solid fa-user-group fa-xl icon"
            style={{ color: "#223750" }}
          ></i>
          <div className="sidebar-name">
            <p>Leads</p>
          </div>
        </div>
      </Link>
      <Link to="/tenants" style={{ textDecoration: "none", margin:"20px 0"  }}>
        <div className="sidebar-content">
          <i
            className="fa-solid fa-user-lock fa-xl icon"
            style={{ color: "#223750" }}
          ></i>
          <div className="sidebar-name">
            <p>Tenants</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Sidebar;

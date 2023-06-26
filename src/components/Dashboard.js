import React from "react";
import "../App.css";
import Chart from "./Chart.js";
import Income from "./Income";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="dashboard-heading">
        <p>Dashboard</p>
      </div>
      <div className="dashboard-wrapper">
        <div className="dashboard-left">
          <div className="dashbaord-accounting">
            <div className="accounting-top">
              <div className="accounting-top-left">
                <div className="accounting-top-left-top-text">
                  <p className="text-accounting">Accounting</p>
                  <p className="text-date">March 1,2023 - March 31, 2023</p>
                </div>
                <div className="accounting-top-left-bottom-text">
                  <p className="text-avg-monthly-income">
                    Average Monthly Income
                  </p>
                  <p className="text-monthly-income">
                    <i
                      className="fa-solid fa-indian-rupee-sign "
                      style={{ color: "#230750" }}
                    ></i>{" "}
                    50,000
                  </p>
                </div>
              </div>
              <div className="accounting-top-right">
                <Chart />
              </div>
            </div>
            <hr />
            <div className="accounting-bottom">
              <div className="accounting-bottom-left">
                <p className="accounting-bottom-left-total">
                  <i
                    className="fa-solid fa-indian-rupee-sign"
                    style={{ color: "#230750" }}
                  ></i>{" "}
                  2,80,0000
                </p>
                <p className="accounting-bottom-left-total-income">
                  Total Income
                </p>
              </div>

              <div className="accounting-bottom-right">
                <p className="accounting-bottom-left-total">
                  <i
                    className="fa-solid fa-indian-rupee-sign"
                    style={{ color: "#230750" }}
                  ></i>{" "}
                  30,000
                </p>
                <p className="accounting-bottom-left-total-income">
                  Total Expense
                </p>
              </div>
            </div>
          </div>
          <div className="dashboard-left-bottom">
            <div className="dashboard-task-summary">
              <p>Task Summary</p>
              <div className="task-wrapper">
                <div className="task">
                  <p>New</p>
                  <h4>3</h4>
                </div>
                <div className="task">
                  <p>Assigned</p>
                  <h4>3</h4>
                </div>
                <div className="task">
                  <p>Closed</p>
                  <h4>3</h4>
                </div>
              </div>
            </div>
            <div className="dashboard-properties">
              <p className="dashboard-properties-heading">Properties</p>
              <div className="task-wrapper">
                <div className="task">
                  <p>Total</p>
                  <h4>40</h4>
                </div>
                <div className="task">
                  <p>Occupied</p>
                  <h4>32</h4>
                </div>
                <div className="task">
                  <p>Vacant</p>
                  <h4>8</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Income/>
      </div>
    </div>
  );
};

export default Dashboard;

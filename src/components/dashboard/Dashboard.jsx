import React from "react";
import "./dashboard.css";

function Dashboard() {
  document.querySelectorAll(".year").forEach((yearDiv) => {
    yearDiv.addEventListener("click", () => {
      console.log("inside");
      let year = this.parentElement;
      year.classList.toggle("expanded");
    });
  });

  return (
    <div className="dashboard_container">
      <div className="section">
        <span className="year">2024</span>
        <div className="months">
          <div className="month">
            <div className="arrow"></div>
            <div className="month-div">January</div>
          </div>
          <div className="month">
            <div className="arrow"></div>
            <div className="month-div">January</div>
          </div>
          <div className="month">
            <div className="arrow"></div>
            <div className="month-div">January</div>
          </div>
          <div className="month">
            <div className="arrow"></div>
            <div className="month-div">January</div>
          </div>
        </div>
      </div>
      <div className="section">
        <span className="year">2023</span>
        <div className="months">
          <div className="month">
            <div className="arrow"></div>
            <div className="month-div">January</div>
          </div>
          <div className="month">
            <div className="arrow"></div>
            <div className="month-div">January</div>
          </div>
          <div className="month">
            <div className="arrow"></div>
            <div className="month-div">January</div>
          </div>
          <div className="month">
            <div className="arrow"></div>
            <div className="month-div">January</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;

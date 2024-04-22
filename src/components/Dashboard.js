import React from "react";

function Dashboard({ tasks }) {
  const completedCount = tasks.filter((task) => task.done).length;
  const totalCount = tasks.length;
  const percentage = (completedCount / totalCount) * 100;

  return (
    <div className="dashboard-container">
      <svg viewBox="0 0 36 36" className="circular-chart">
        <path
          className="circle-bg"
          d="M18 2.0845
            a 15.9155 15.9155 0 0 1 0 31.831
            a 15.9155 15.9155 0 0 1 0 -31.831"
        />
        <path
          className="circle"
          strokeDasharray={`${percentage}, 100`}
          d="M18 2.0845
            a 15.9155 15.9155 0 0 1 0 31.831
            a 15.9155 15.9155 0 0 1 0 -31.831"
        />
        <text x="18" y="20.35" className="percentage">
          {Math.round(percentage)}%
        </text>
      </svg>
    </div>
  );
}

export default Dashboard;

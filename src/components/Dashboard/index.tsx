import * as React from "react";
import styles from "./dashboard.module.scss";

type DashboardProps = {
  className?: string;
  children: React.ReactNode;
};

const Dashboard = ({ className, children }: DashboardProps) => {
  return (
    <div className={`${styles.dashboard} ${className || ""}`}>
      <h1 className={styles.heading}>Tiny Task Tracker</h1>
      {children}
    </div>
  );
};

export default Dashboard;

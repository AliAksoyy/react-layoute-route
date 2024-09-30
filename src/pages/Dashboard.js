import React from "react";
import { useLocation } from "react-router-dom";

const Dashboard = () => {
  const { state } = useLocation();

  return <div>Dashboard, {state} </div>;
};

export default Dashboard;

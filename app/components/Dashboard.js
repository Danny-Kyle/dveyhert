import React from "react";
import Navbar from "./Navbar";
import OrderHistory from "./OrderHistory";
import PlatformMetrics from "./PlatformMetrics";
import SalesTrends from "./SalesTrends";

const Dashboard = () => {
  return (
    <div>
      <Navbar />
      <div>
        <SalesTrends />
      </div>
      <div>
        <OrderHistory />
        <PlatformMetrics />
      </div>
    </div>
  );
};

export default Dashboard;

import React from "react";
import Navbar from "./Navbar";
import OrderHistory from "./OrderHistory";
import PlatformMetrics from "./PlatformMetrics";
import SalesTrends from "./SalesTrends";

const Dashboard = () => {
  return (
    <div className="">
      <Navbar />
      <section className="p-3">
      <div>
        <SalesTrends />
      </div>
      <div className="flex flex-row justify-between">
        <OrderHistory />
        <PlatformMetrics />
      </div>
      </section>
    </div>
  );
};

export default Dashboard;

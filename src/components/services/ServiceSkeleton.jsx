// components/Services/ServiceSkeleton.jsx
import React from "react";

const ServiceSkeleton = () => {
  return (
    <div className="animate-pulse bg-gray-100 dark:bg-gray-800 rounded-lg p-6 shadow">
      <div className="h-24 bg-gray-300 rounded mb-4"></div>
      <div className="h-4 bg-gray-300 rounded w-3/4 mb-2"></div>
      <div className="h-3 bg-gray-300 rounded w-full mb-1"></div>
      <div className="h-3 bg-gray-300 rounded w-5/6"></div>
    </div>
  );
};

export default ServiceSkeleton;

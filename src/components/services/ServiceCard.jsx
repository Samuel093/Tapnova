// components/Services/ServiceCard.jsx
import React from "react";

const ServiceCard = ({ service, data }) => {
  return (
    <div className="bg-gray-50 dark:bg-gray-800 rounded-lg shadow p-6">
      <img src={service.image} className="mb-4" alt={service.title} />
      <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
        {service.title}
      </h3>
      <p className="text-gray-600 dark:text-gray-300">
        {data || service.description || "Dynamic content loaded via API."}
      </p>
      <div className="mt-5">
        <a href={`#${service.id}`} className="text-blue-600 font-medium hover:underline">
          Learn more →
        </a>
      </div>
    </div>
  );
};

export default ServiceCard;

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import axiosInstance from "../../lib/axiosInstance";
import { services } from "../../constants";
import ServiceCard from "./ServiceCard";
import ServiceSkeleton from "./ServiceSkeleton";

const Services = () => {
  const [dataMap, setDataMap] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const results = await Promise.all(
          services.map(async (service) => {
            const response = await axios.get(service.api);
            return { id: service.id, data: JSON.stringify(response.data).slice(0, 100) + "..." };
          })
        );

        const map = {};
        results.forEach((res) => {
          map[res.id] = res.data;
        });

        setDataMap(map);
      } catch (error) {
        console.error("Service fetch error:", error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchServices();
  }, []);

  return (
    <section id="services" className="py-20 px-6 scroll-mt-24 bg-white dark:bg-gray-900">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 dark:text-white">
          Our Services
        </h2>
        <p className="mt-6 font-thin text-2xl text-gray-900 dark:text-gray-400 max-w-xl mr-5">
          Technology Solutions That Drive Growth.
        </p>
      </motion.div>

      <div className="max-w-6xl mx-auto grid gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {loading
          ? Array.from({ length: 4 }).map((_, i) => <ServiceSkeleton key={i} />)
          : services.map((service) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <ServiceCard service={service} data={dataMap[service.id]} />
              </motion.div>
            ))}
      </div>
    </section>
  );
};

export default Services;


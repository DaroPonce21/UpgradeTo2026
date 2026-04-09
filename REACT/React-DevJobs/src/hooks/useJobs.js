import React, { useState } from "react";
import { useEffect } from "react";

const useJobs = () => {
  const [trabajos, setTrabajos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        setLoading(true);
        const res = await fetch("/data.json");
        const data = await res.json();
        setTrabajos(data);
      } catch (error) {
        console.error("Error fetching jobs:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchJobs();
  }, []);

  return { trabajos, loading };
};
export default useJobs;

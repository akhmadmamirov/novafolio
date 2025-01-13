import { useState, useEffect } from 'react';
import { Eye } from 'lucide-react';

const VisitorCounter = () => {
  const [count, setCount] = useState(0);
  const [isLoading, setLoading] = useState(true)

  useEffect(() => {
    const fetchCount = async () => {
      try {
        const response = await fetch("/api/visitorCount");
        const data = await response.json();
        setCount(data.count);
        setLoading(false)
      } catch (error) {
        setLoading(false)
        console.error("Error fetching visitor count:", error);
      }
    };

    fetchCount();
  }, []);

  return (
    <div className="flex items-center text-white gap-2">
      <Eye size={20} />
        {isLoading ? (
          <div className="animate-spin w-5 h-5 border-4 border-t-transparent border-blue-500 rounded-full"></div> // Simple spinner as loader
        ) : (
          <span>{count}</span>
        )}
    </div>
  );
};

export default VisitorCounter;
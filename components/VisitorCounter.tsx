import { useState, useEffect } from 'react';
import { Eye } from 'lucide-react';

const VisitorCounter = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const fetchCount = async () => {
      try {
        const response = await fetch("/api/visitorCount");
        const data = await response.json();
        setCount(data.count);
      } catch (error) {
        console.error("Error fetching visitor count:", error);
      }
    };

    fetchCount();
  }, []);

  return (
    <div className="flex items-center text-white gap-2">
      <Eye size={20} />
      <span>{count}</span>
    </div>
  );
};

export default VisitorCounter;
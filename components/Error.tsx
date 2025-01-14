import React from "react";
import { XCircle } from "lucide-react";

interface ErrorDisplayProps {
  title?: string;
  message: string;
  className?: string;
}

const ErrorDisplay: React.FC<ErrorDisplayProps> = ({
  title = "Error",
  message,
  className = "",
}) => {
  return (
    <div className={`bg-red-50 border-l-4 border-red-500 p-4 rounded-md max-w-md ${className}`}>
      <div className="flex items-start">
        <div className="flex-shrink-0">
          <XCircle className="h-5 w-5 text-red-500" />
        </div>
        <div className="ml-3">
          <h3 className="text-sm font-medium text-red-800">
            {title}
          </h3>
          <div className="mt-2 text-sm text-red-700">
            {message}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ErrorDisplay;
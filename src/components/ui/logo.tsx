import { cn } from "@/lib/utils";
import React from "react";

const LogoSvg = ({
  hover,
  className = "size-8 md:size-10",
}: {
  hover?: boolean;
  className?: string;
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="123"
      height="78"
      viewBox="0 0 123 78"
      fill="none"
      className={cn(className)}
    >
      <path
        d="M20.0109 21.5C20.0109 21.5 7.01092 34.5 5.51091 35C4.01091 35.5 0.788898 33.0511 1.01091 28.5C13.1305 15.2767 19.4914 10.0804 30.0109 5C37.4879 3.34998 41.4084 3.42468 48.0109 5L73.5109 12.5C83.8598 15.7673 89.662 14.751 100.011 12.5C106.906 8.60394 110.033 6.06293 114.511 1C117.229 2.20315 118.226 3.07951 119.011 5C112.153 15.8489 105.961 20.7408 93.0109 28.5C85.7433 30.915 80.8867 31.3284 70.5109 30L41.0109 19.5C29.5248 18.8965 25.6499 19.639 20.0109 21.5Z"
        className={cn(
          "stroke-primary fill-primary",
          hover &&
            "group-hover/logo:fill-secondary group-hover/logo:stroke-secondary"
        )}
      />
      <path
        d="M23.0109 63.5C23.0109 63.5 10.0109 76.5 8.51091 77C7.01091 77.5 3.7889 75.0511 4.01091 70.5C16.1305 57.2767 22.4914 52.0804 33.0109 47C40.4879 45.35 44.4084 45.4247 51.0109 47L76.5109 54.5C86.8598 57.7673 92.662 56.751 103.011 54.5C109.906 50.6039 113.033 48.0629 117.511 43C120.229 44.2032 121.226 45.0795 122.011 47C115.153 57.8489 108.961 62.7408 96.0109 70.5C88.7433 72.915 83.8867 73.3284 73.5109 72L44.0109 61.5C32.5248 60.8965 28.6499 61.639 23.0109 63.5Z"
        className={cn(
          "stroke-secondary fill-secondary",
          hover &&
            "group-hover/logo:fill-primary group-hover/logo:stroke-primary"
        )}
      />
    </svg>
  );
};

export default LogoSvg;

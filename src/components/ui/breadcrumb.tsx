import { IBreadcrumb } from "@/interfaces/common";
import { Home } from "lucide-react";
import Link from "next/link";

interface BreadcrumbProps {
  items: IBreadcrumb[];
  className?: string;
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ items, className = "" }) => {
  const path = [
    { label: "Trang chủ", href: "/", icon: <Home className="w-4 h-4" /> },
    ...items,
  ];

  return (
    <nav className={`flex items-center text-sm ${className}`}>
      {path.map((item, idx) => (
        <div key={idx} className="flex items-center">
          {idx > 0 && <span className="mx-2 text-gray-400">/</span>}

          {idx === path.length - 1 ? (
            <span className="flex items-center gap-1 text-gray-600 font-medium">
              {item.icon}
              {item.label}
            </span>
          ) : (
            <Link
              href={item.href}
              className="flex items-center gap-1 text-gray-600 font-medium"
            >
              {item.icon}
              {item.label}
            </Link>
          )}
        </div>
      ))}
    </nav>
  );
};

export default Breadcrumb;

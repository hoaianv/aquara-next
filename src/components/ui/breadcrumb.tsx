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

  const truncateText = (text: string, maxLength: number) => {
    if (text.length <= maxLength) return text;
    return text.slice(0, maxLength) + "...";
  };

  return (
    <nav
      className={`flex items-center text-sm overflow-x-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent ${className}`}
    >
      <div className="flex items-center whitespace-nowrap min-w-0 gap-1">
        {path.map((item, idx) => (
          <div key={idx} className="flex items-center shrink-0">
            {idx > 0 && <span className="mx-1 sm:mx-2 text-gray-400">/</span>}

            {idx === path.length - 1 ? (
              <span className="flex items-center gap-1 text-gray-600 font-medium">
                {idx === 0 && item.icon}
                <span
                  className="truncate max-w-[120px] sm:max-w-[200px] md:max-w-[300px] lg:max-w-none"
                  title={item.label}
                >
                  {idx === 0 ? item.label : truncateText(item.label, 50)}
                </span>
              </span>
            ) : (
              <Link
                href={item.href}
                className="flex items-center gap-1 text-blue-600 hover:text-blue-800 transition-colors"
                title={item.label}
              >
                {idx === 0 && item.icon}
                <span className="truncate max-w-[80px] sm:max-w-[120px] md:max-w-[150px]">
                  {idx === 0 ? item.label : truncateText(item.label, 30)}
                </span>
              </Link>
            )}
          </div>
        ))}
      </div>
    </nav>
  );
};

export default Breadcrumb;

import { IBlogCard } from "@/interfaces/models/IBlog.interface";
import { LucideIcon } from "lucide-react";

export interface IBreadcrumb {
  label: string;
  href: string;
  icon?: React.ReactNode;
}

export interface IPagination {
  currentPage: number;
  lastPage: number;
  total: number;
}

export type ButtonVariant =
  | "white"
  | "black"
  | "orange"
  | "transparent"
  | "blue";

export interface NavLink {
  id: number;
  href: string | null;
  isMobile?: boolean; // Made optional
  label?: string;
  icon?: JSX.Element;
  isPublic: boolean;
  children?: NavLink[];
  description?: string;
  active?: boolean;
}

export interface Banner {
  id: number;
  href: string | null;
  label?: string;
  image: string;
  description: string | null;
  button: {
    text: string;
    variant: ButtonVariant;
    onClick?: () => void;
  };
}

export interface Brand {
  id: number;
  name: string;
  isNew: boolean;
  image: string;
  link: string;
}

export interface IAdCard {
  id: number;
  href: string | null;
  title: string;
  subtitle?: string;
  label?: string;
  image: string;
  description?: string | null;
  buttons: {
    text: string;
    variant: ButtonVariant;
    onClick?: () => void;
  }[];
}

export interface ServiceItem {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface ISearch {
  status: boolean;
  content: string;
}

export interface ISearchProduct {
  id: number;
  name: string;
  url: string;
  priceBase: number;
  stock: number;
  picture: string;
}

export interface IResponseSearchProduct {
  status: boolean;
  message: string;
  error_code: number;
  data: ISearchProduct[];
}
// Định nghĩa kiểu cho các giá trị ENUM của cột 'type' trong DB
export type FooterItemType =
  | "brand"
  | "social"
  | "link"
  | "contact"
  | "feature";

export interface IFooterItem {
  id: number;
  type: FooterItemType;
  subkey: string | null;
  title: string;
  value: string | null;
  url: string | null;
  icon: string | null;
  orderNo: number;
}

export interface IFooterResponse {
  status: boolean;
  error_code: number;
  message: string;
  data: {
    brand?: IFooterItem[];
    social?: IFooterItem[];
    links?: IFooterItem[];
    contact?: IFooterItem[];
    features?: IFooterItem[];
    map?: string;
    blogsPolicy: IBlogCard[];
  };
}
export interface IParams {
  key: string;
  value: string;
}

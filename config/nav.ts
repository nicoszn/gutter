import { MenuNavItem } from "@/types";



export const adminNavItems: MenuNavItem[] = [
  {
    title: "Admin",
    href: "/admin",
  },
  {
    title: "Users",
    href: "/admin/users",
  },
  {
    title: "Activity",
    href: "/admin/activity",
  },
  {
    title: "Products",
    href: "/admin/products",
  },
  {
    title: "Settings",
    href: "/admin/settings",
  },
]

export const userNavItems: MenuNavItem[] = [
    {
        title: "Overview",
        href: "/me",
      },
    {
        title: "Portfolio",
        href: "/me/portfolio",
      },
    {
        title: "Activity",
        href: "/me/activity",
      },
      {
        title: "Settings",
        href: "/me/setting",
      },
]
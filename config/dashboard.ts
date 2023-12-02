import { DoubleNav } from "@/types"

export const dashboardConfig: DoubleNav = {
  mainNav: [
    {
      title: "Documentation",
      href: "/docs",
    },
    {
      title: "Support",
      href: "/support",
      disabled: true,
    },
  ],
  sidebarNav: [
    {
      title: "Account",
      href: "/app/accounts",
      icon: "money",
    },
    {
      title: "Activity",
      href: "/app/activity",
      icon: "activity",
    },
    {
      title: "Settings",
      href: "/dashboard/settings",
      icon: "settings",
    },
  ],
}

import { Icons } from "@/components/icons";


 export type MenuItem = {
    title: string
    href: string
    disabled?: boolean
 }
  export type NavItem = {
    title: string
    href: string
    icon?: keyof typeof Icons
    description?: string
    disabled?: boolean
  }
  
  export type MenuNavItem = MenuItem
  export type MainNavItem = NavItem

  export type SiteConfig = {
    name: string
    description: string
    url: string
    ogImage: string
    links: {
      twitter: string
      github: string
    }
  }

  export type SidebarNavItem = {
    title: string
    disabled?: boolean
    external?: boolean
    icon?: keyof typeof Icons
  } & (
    | {
        href: string
        items?: never
      }
    | {
        href?: string
        items: NavItem[]
      }
  )
  

  export type DoubleNav = {
    mainNav: MainNavItem[]
    sidebarNav: SidebarNavItem[]
  }
  
// export type ZodType<T> = T extends z.ZodType<infer U> ? U : never;

// export type ZodSchema<T> = T extends z.ZodSchema<infer U> ? U : never;

/** Overwite the properties of one type with another */
export type Merge<A extends object, B extends object> = Omit<A, keyof B> & B;
export const siteConfig = {
    name: "Spiral Inc",
    url: "localhost:3000",
    ogImage: "http://localhost:3000/og.png",
    description:
      "Spiral Inc is an investment app for investors of the future",
  }
export const adminConfig = {
    name: "Admin Spiral Inc",
    url: "localhost:3000/console",
    description:
      "Admin console for spiral inc users",
  }
export const userConfig = {
    name: "User Spiral Inc",
    url: "localhost:3000/user",
    description:
      "Investors app for users",
  }
export const authConfig = {
    name: "Authentication",
    url: "localhost:3000",
    description:
      "Authentication 2FA | Spiral Inc Account",
  }
  
  export type SiteConfig = typeof siteConfig
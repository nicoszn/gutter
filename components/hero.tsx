
'use client'
import * as React from "react"
import { toast } from "./ui/use-toast"


import {   PageHeader,
    PageHeaderDescription,
    PageHeaderHeading, } from "@/components/page-header"
import Link from "next/link"
import { Separator } from "@/components/ui/separator"
import { ArrowRightIcon } from "@radix-ui/react-icons"
import { Button, buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { Icons } from "@/components/icons"

export default function Hero() {
    return (
      <section className="w-full py-12 md:py-24">
        <div className="container px-4 md:px-6 space-y-8">

        <PageHeader className="space-y-4">
        <Link
          href="/"
          className="inline-flex items-center rounded-lg bg-muted px-3 py-1 text-sm font-medium"
        >
          🎉 <Separator className="mx-2 h-4" orientation="vertical" />{" "}
          <span className="sm:hidden">Gutter, a new TradeFi and more.</span>
          <span className="hidden sm:inline">
            Introducing Gutter Dao, a RELIABLE TRADETECH and more.
          </span>
          <ArrowRightIcon className="ml-1 h-4 w-4" />
        </Link>
        <PageHeaderHeading
        className="bg-clip-text text-transparent bg-gradient-to-l from-white to- gray-500  indent-4"
        >Buy & sell cryptocurrencies</PageHeaderHeading>
        <PageHeaderDescription>
          Powerfuly designed for quick trade.
        </PageHeaderDescription>
        <div className="flex w-full items-center space-x-4 pb-8 pt-4 md:pb-10">
         <Button
         onClick={() => toast({ title: "Coming Soon", description: "All trade history will be available" })} className="w-full md:w-auto"
         >
         History
         </Button>
            
          
          <Button
            variant="outline"
            className="w-full md:w-auto"
            onClick={() => toast({ title: "Coming Soon" , description: "Gutter trade platform currently in development"})}
          >
            <Icons.construction className="mr-2 h-4 w-4" />
            Enter
          </Button>
        </div>
      </PageHeader>

          <div className="grid gap-6 items-center">
            <div className="flex flex-col justify-center space-y-8 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500">
                  Discover Our Unique Features
                </h1>
                <p className="max-w-[600px] md:text-xl  mx-auto">
                  Our features are designed to enhance your trade experience.
                </p>
              </div>

              <div className="w-full max-w-full space-y-4 mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  <div className="flex flex-col items-center space-y-2 p-4 group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
                    <div className="p-2 bg-opacity-50 rounded-full">
                      <Icons.smartphone className=" h-6 w-6 mb-2 opacity-75" />
                    </div>
                    <h2 className="text-xl font-bold ">Simplicity</h2>
                    <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
                      Our platform is designed to be simple and easy to use.
                    </p>
                  </div>
                  <div className="flex flex-col items-center space-y-2  p-4 group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
                    <div className="p-2 bg-opacity-50 rounded-full">
                      <Icons.fileLineChart className=" h-6 w-6 mb-2 opacity-75" />
                    </div>
                    <h2 className="text-xl font-bold ">No limits</h2>
                    <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
                      No limits on trading, upto a maximum of $1000 per day.
                    </p>
                  </div>
                  <div className="flex flex-col items-center space-y-2  p-4 group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
                    <div className="p-2 bg-opacity-50 rounded-full">
                      <Icons.help className=" h-6 w-6 mb-2 opacity-75" />
                    </div>
                    <h2 className="`mb-3 text-2xl font-semibold ">
                      Support
                      </h2>
                    <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
                      Find answers to your questions and get support.
                    </p>
                  </div>
                
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
  
  function IconCollaboration(props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path d="m8 6 4-4 4 4" />
        <path d="M12 2v10.3a4 4 0 0 1-1.172 2.872L4 22" />
        <path d="m20 22-5-5" />
      </svg>
    )
  }
  
  
  function IconCustomization(props) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    )
  }
  
  
  function IconInbox(props) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <polyline points="22 12 16 12 14 15 10 15 8 12 2 12" />
        <path d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z" />
      </svg>
    )
  }
  
  
  function IconIntegration(props) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path d="m8 6 4-4 4 4" />
        <path d="M12 2v10.3a4 4 0 0 1-1.172 2.872L4 22" />
        <path d="m20 22-5-5" />
      </svg>
    )
  }
  
  
  function IconSearch(props) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <circle cx="11" cy="11" r="8" />
        <path d="m21 21-4.3-4.3" />
      </svg>
    )
  }
  
  
  function IconSecurity(props) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
      </svg>
    )
  }
  
/* eslint-disable @next/next/no-img-element */
// import ConnectWalletButton from "@/components/connect-wallet-button"
// import { siteConfig } from "@/config/site"
// import { cn } from "@/utils/cn"
// import Link from "next/link"
import { Link } from '@chakra-ui/next-js'
import { MenuIcon } from "lucide-react"
import { useRouter } from "next/router"
import { cn } from "@clement-utils/cn"
import ConnectWalletButton from "@components/connect-wallet-button"
import { siteConfig } from "@config/site"
import { IconButton } from "./ui/icon-button"
import { Typography } from "./ui/typography"

const MenuItems = [
  {
    text: "Home",
    href: "/",
  },
  {
    text: "Transfer",
    href: "/transfer",
  },
  {
    text: "Clément",
    href: "/ClementApp",
  },
  {
    text: "About",
    href: "/about",
  },
  {
    text: "Card",
    href: "/card",
  },
]

export default function Header() {
  const { asPath } = useRouter()

  return (
    <header className="fixed left-0 top-0 z-20 w-full border-b border-gray-200 bg-white">
      <div className="container mx-auto flex items-center p-4 md:px-6">
        <a href="/" className="flex items-center">
          <img src="/assets/logo.png" className="mr-3 h-8" alt={siteConfig.name} />
          <Typography as="span" level="h6" className="hidden whitespace-nowrap font-semibold md:inline-block">
            {siteConfig.name}
          </Typography>
        </a>

        <ul className="ml-10 hidden items-center gap-6 md:flex">
          {MenuItems.map((item) => (
            <li key={item.text}>

               <Link
                href={item.href}
                className={cn("text-gray-600 hover:underline", {
                  "text-gray-900": item.href === "/" ? asPath === item.href : asPath.startsWith(item.href),
                })}
              >
                <Typography level="body4" className="font-semibold">
                  {item.text}(TW)
                </Typography>
              </Link>
              <br/>
               <Link
                href={item.href}
                color='blue.400' _hover={{ color: 'blue.500' }}
               >
                <Typography level="body4" className="font-semibold">
                  {item.text}(Chakra)
                </Typography>
              </Link>

            </li>
          ))}
        </ul>

        <div className="flex flex-1 items-center justify-end gap-2">
          <ConnectWalletButton />
          <IconButton className="md:hidden">
            <MenuIcon />
          </IconButton>
        </div>
      </div>
    </header>
  )
}

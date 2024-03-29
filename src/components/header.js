import { Icon } from "@iconify/react";
import ctl from "@netlify/classnames-template-literals";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";

import {
  BLOG,
  CONTACT_US,
  CYBERROOTSUMMIT,
  HOME,
  SERVICES_PAGES,
  TRAINING,
} from "@/config/link";

export default function Header({
  title = "Cyberroot || Cyber Security consulting and IT firm",
  description = "CyberRoot International Ltd is a cyber security consulting and IT firms in Nigeria specializes in Information and intelligence gathering, managed cyber security services, strategic IT consulting, cyber.",
}) {
  const [isOpen, setIsOpen] = React.useState(false);
  const [isService, setIsService] = React.useState(false);
  return (
    <header className={HeaderStyle}>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <meta
          property="og:title"
          content="Cyberroot || Cyber Security consulting and IT firm"
        />
        <meta property="og:locale" content="en_US" />
        <meta
          property="og:site_name"
          content="Cyberroot || Cyber Security consulting and IT firm"
        />
        <meta property="og:url" content="https://cyberrootltd.com" />
        <meta
          property="og:description"
          content="CyberRoot is a leading cybersecurity company dedicated to providing
          advanced solutions and comprehensive protection for businesses and
          organizations. With our team of highly skilled experts and
          cutting-edge technologies, we offer a wide range of services to
          safeguard valuable data, secure networks, and defend against cyber
          threats. We prioritize proactive defense strategies, leveraging threat
          intelligence and continuous monitoring to identify vulnerabilities and
          mitigate risks before they can be exploited."
        />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/duakn882p/image/upload/v1685193749/favicon_pfphf0.ico"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <meta property="og:type" content="article" />
        <meta property="article:section" content="Cyber security services" />

        <meta
          property="twitter:card"
          content="CyberRoot is a leading cybersecurity company dedicated to providing
          advanced solutions and comprehensive protection for businesses and
          organizations."
        />
        <meta
          property="twitter:title"
          content="Cyberroot || Cyber Security consulting and IT firm"
        />
        <meta
          property="twitter:description"
          content="CyberRoot is a leading cybersecurity company dedicated to providing
          advanced solutions and comprehensive protection for businesses and
          organizations. With our team of highly skilled experts and
          cutting-edge technologies, we offer a wide range of services to
          safeguard valuable data, secure networks, and defend against cyber
          threats."
        />
        <meta
          property="twitter:image"
          content="https://res.cloudinary.com/duakn882p/image/upload/v1685193827/cyberrootIcon_1_ksnfya.png"
        />
        <meta property="twitter:url" content="https://cyberrootltd.com" />
      </Head>
      <div className={HeaderWrapperStyle}>
        <Link href={HOME}>
          <Image
            src="/CyberRoot Logo.png"
            alt="cyberroot Icon"
            width={200}
            height={49}
          />
        </Link>
        <div className={HeaderLinkStyle(isOpen)}>
          <ul className={HeaderWrapperLinkStyle}>
            <li
              className="relative text-base m:text-lg lg:text-xl text-white m:text-black capitalize"
              onMouseEnter={() => setIsService(true)}
              onMouseLeave={() => setIsService(false)}
            >
              <div
                className="flex items-center gap-2 cursor-pointer"
                onClick={() => setIsService((prev) => !prev)}
              >
                <span>Services</span>
                <Icon icon="icon-park:down" />
              </div>

              <ul
                className={`m:absolute top-full w-[270px] -left-[180%] px-3 py-3 text-white bg-brightNavyBlue ${
                  isService ? "max-h-[600px]" : "!py-0 max-h-0"
                } 
                transition-all ease-in origin-top overflow-hidden `}
              >
                {[
                  {
                    name: "Ethical Hacking Training",
                    url: "ethical-hacking-training",
                  },
                  {
                    name: "Penetration Testing",
                    url: "penetration-testing",
                  },
                  {
                    name: "Threat Assessment",
                    url: "threat-assessment",
                  },
                  {
                    name: "Vulnerability Assessment",
                    url: "vulnerability-assessment",
                  },
                ].map((item) => (
                  <li
                    key={item.name}
                    className="border-b border-white py-1 text-base"
                  >
                    <Link href={SERVICES_PAGES(item.url)} className="block">
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
            {[
              { name: "Events", url: CYBERROOTSUMMIT },
              { name: "blog", url: BLOG },
              // { name: "training", url: TRAINING },
            ].map((item) => (
              <li
                className="text-base m:text-lg lg:text-xl text-white m:text-black capitalize"
                key={item.name}
              >
                <Link href={item.url} target="_blank">
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
          <Link
            href={CONTACT_US}
            className="mt-5 m:mt-0 px-8 py-3 text-base m:text-lg lg:text-xl block w-fit bg-brightNavyBlue text-white rounded-m"
          >
            Contact Us
          </Link>
        </div>
        <button
          className={HamburgerButtonStyle}
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className={FirstStrokeStyle(isOpen)} />
          <span className={SecondStrokeStyle(isOpen)} />
          <span className={ThirdStrokeStyle(isOpen)} />
        </button>
      </div>
    </header>
  );
}

function FirstStrokeStyle(isOpen) {
  return ctl(`
      ${genericHamburgerLine} 
      ${
        isOpen
          ? `
            rotate-45 
            translate-y-3 
            group-hover:opacity-100
            `
          : `group-hover:opacity-100`
      }
  `);
}
function SecondStrokeStyle(isOpen) {
  return ctl(`
      ${genericHamburgerLine} 
      ${isOpen ? "opacity-0" : "group-hover:opacity-100"}
  `);
}
function ThirdStrokeStyle(isOpen) {
  return ctl(`
      ${genericHamburgerLine} 
      ${
        isOpen
          ? `
            -rotate-45 
            -translate-y-3 
            group-hover:opacity-100
          `
          : `group-hover:opacity-100`
      }
  `);
}
const HeaderStyle = ctl(`
  border-b 
  border-cornflowerBlue 
  relative
`);

const HeaderWrapperStyle = ctl(`
  flex 
  items-center 
  justify-between 
  max-w-[1500px] 
  w-[92%] 
  mx-auto 
  py-6
`);

function HeaderLinkStyle(isOpen) {
  return ctl(`
        w-[100%] 
        inset-x-0 
        m:w-[65%] 
        absolute 
        top-full 
        p-10 
        m:p-0 
        bg-cornflowerBlue 
        m:bg-transparent 
        m:flex 
        m:relative 
        justify-between 
        z-50 
        ${isOpen ? "scale-y-100" : "scale-y-0"} 
        m:scale-100 
        origin-top 
        transition-all 
        duration-300
      `);
}

const HeaderWrapperLinkStyle = ctl(`
  flex 
  flex-col 
  m:flex-row 
  items-start 
  m:items-center 
  w-[50%] 
  gap-5 
  justify-between 
`);

const genericHamburgerLine = ctl(`
  h-1 
  w-6 
  my-1 
  rounded-full 
  bg-gray 
  transition 
  ease 
  transform 
  duration-300
`);

const HamburgerButtonStyle = ctl(`
  flex 
  flex-col 
  h-11 
  w-11 
  border-2 
  rounded 
  justify-center 
  items-center 
  group 
  m:hidden
`);

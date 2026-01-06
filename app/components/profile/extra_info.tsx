import Image from "next/image";

import { BsTelegram, BsGithub } from "react-icons/bs";
import { GiGamepad } from "react-icons/gi";
import { BiLogoVuejs } from "react-icons/bi";
import { BsTreeFill } from "react-icons/bs";

import Stack from "@/app/components/profile/stack";

type Card = {
  title: string;
  list?: Card[];
  icon?: React.ReactElement;
  link?: string;
};

export default function ExtraInfo() {
  const rightCard: Card[] = [
    {
      title: "About",
      list: [
        {
          icon: <BiLogoVuejs />,
          title: "Frontend_Developer",
        },
        {
          icon: <BsTreeFill />,
          title: "Siberian_Russian_Guy",
        },
        {
          icon: <GiGamepad />,
          title: "Also_Gamer",
        },
      ],
    },
    {
      title: "Web Resources",
      list: [
        {
          icon: <BsTelegram />,
          title: "Telegram",
          link: "https://t.me/Raynebul",
        },
        {
          icon: <BsGithub />,
          title: "GitHub",
          link: "https://github.com/Raynebul",
        },
      ],
    },
  ];

  return (
    <div className="flex flex-col gap-4 text-base font-medium">
      {rightCard.map((item, key) => (
        <div key={key}>
          <span className="custom-text-shadow manrope max-w-xs text-2xl font-semibold text-zinc-50 text-shadow-md">
            {item.title}
          </span>
          <div className="pt-2 flex flex-col gap-0">
            {item?.list &&
              item.list.map((paragraph, index) => (
                <div
                className={
                    `flex gap-2 items-center text-slate-500 text-xl text-shadow-md ` +
                    (paragraph?.link
                      ? `transition-all duration-300 ease-out hover:py-1 hover:bg-gradient-to-r hover:from-[#17a7e9] hover:to-[#715ebde6] hover:text-transparent hover:!bg-clip-text hover:scale-110`
                      : ""
                    )
                  }
                  key={index}
                >
                  {paragraph?.icon && <div>{paragraph.icon}</div>}
                  {paragraph?.link ? (
                    <a
                      href={paragraph.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ibm-plex-mono"
                    >
                      {paragraph.title}
                    </a>
                  ) : (
                    <span className="ibm-plex-mono">{paragraph.title}</span>
                  )}
                </div>
              ))}
          </div>
        </div>
      ))}
      <hr className="h-px border-0 bg-gradient-to-r from-[#17a7e9] via-[#715ebde6]/33 to-transparent" />
      <div className="flex gap-2 items-center">
        <div className="manrope text-white font-semibold text-2xl custom-text-shadow">
          TECH STACK
        </div>
        <Image
          src="/links.svg"
          alt="Next.js logo"
          width={35}
          height={35}
          priority
        />
      </div>
      <div>
        <Stack />
      </div>
    </div>
  );
}

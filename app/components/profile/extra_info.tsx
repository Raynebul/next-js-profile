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
          title: "Frontend Developer",
        },
        {
          icon: <BsTreeFill />,
          title: "Siberian Russian Guy",
        },
        {
          icon: <GiGamepad />,
          title: "Also Gamer",
        },
      ],
    },
    {
      title: "Web Resources",
      list: [
        {
          icon: <BsTelegram />,
          title: "Telegram",
          link: "",
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
                  className="flex gap-2 items-center text-slate-500 text-xl text-shadow-md"
                  key={index}
                >
                  {paragraph?.icon && <div>{paragraph.icon}</div>}
                  <span>{paragraph.title}</span>
                </div>
              ))}
          </div>
        </div>
      ))}
      <hr className="h-px border-0 bg-gradient-to-r from-[#17a7e9] via-[#715ebde6]/33 to-transparent" />
      <div className="cursor-pointer flex gap-2 items-center">
        <div className="manrope text-white font-semibold text-2xl custom-text-shadow">
          STACK
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

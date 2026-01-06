import {
  BiLogoVuejs,
  BiLogoReact,
  BiLogoTypescript,
  BiLogoJavascript,
  BiLogoHtml5,
  BiLogoCss3,
  BiLogoTailwindCss,
  BiLogoBootstrap,
  BiBarChartAlt,
  BiSolidBarChartAlt2
} from "react-icons/bi";

const Stack = () => {
  const stack = [
    {
      label: "HMTL5",
      icon: <BiLogoHtml5 />,
      className: "text-yellow-300",
      color: "var(--color-yellow-300)",
    },
    {
      label: "CSS",
      icon: <BiLogoCss3 />,
      className: "text-sky-300",
      color: "var(--color-sky-300)",
    },
    {
      label: "Javascript",
      icon: <BiLogoJavascript />,
      className: "text-yellow-300",
      color: "var(--color-yellow-300)",
    },
    {
      label: "Typescript",
      icon: <BiLogoTypescript />,
      className: "text-sky-300",
      color: "var(--color-sky-300)",
    },
    {
      label: "VUE",
      icon: <BiLogoVuejs />,
      className: "text-emerald-500",
      color: "var(--color-emerald-500)",
    },
    {
      label: "Primevue",
      icon: <BiLogoVuejs />,
      className: "text-slate-400",
      color: "var(--color-slate-400)",
    },
    {
      label: "React",
      icon: <BiLogoReact />,
      className: "text-sky-400",
      color: "var(--color-sky-400)",
    },
    {
      label: "Bootstrap",
      icon: <BiLogoBootstrap />,
      className: "text-violet-500",
      color: "var(--color-violet-500)",
    },
    {
      label: "TailwindCSS",
      icon: <BiLogoTailwindCss />,
      className: "text-blue-500",
      color: "var(--color-blue-500)",
    },
    {
      label: "Vite",
      className:
        "bg-gradient-to-r from-[#17a7e9] to-[#715ebde6] text-transparent !bg-clip-text",
      color: `linear-gradient(
        135deg,
        #17a7e9,
        #715ebde6
      )`,
    },
    {
      label: "Next.js",
      className: "text-white",
      color: "var(--color-white)",
    },
    {
      label: "Chart.js",
      icon: <BiBarChartAlt />,
      className: "text-rose-500",
      color: "var(--color-rose-500)",
    },
    {
      label: "Plotly.js",
      icon: <BiSolidBarChartAlt2 />,
      className: "text-blue-500",
      color: "var(--color-blue-500)",
    },
  ];

  return (
    <div className="flex gap-2 text-base flex-wrap max-w-[560px] ">
      {stack.map((item, key) => (
        <div
          key={key}
          style={{ "--badge-color": item.color } as React.CSSProperties}
          className={`relative flex gap-1 items-center px-4 py-2 rounded-xl !z-50 badge-background`}
        >
          {item?.icon && (
            <div className={`z-40 text-xl ${item.className}`}>{item.icon}</div>
          )}
          <span className={`ibm-plex-mono z-40 opacity-50  ${item.className}`}>
            {item.label}
          </span>
        </div>
      ))}
    </div>
  );
};

export default Stack;

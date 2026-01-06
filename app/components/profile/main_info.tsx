import Image from "next/image";

export default function MainInfo() {
  return (
    <div className="relative">
      <div className="avatar-background opacity-40"></div>
      <div className="flex flex-col items-center gap-4 text-center">
        <div className="avatar border-8 border-[#002956] border-l-transparent border-t-transparent rounded-full !z-50">
          <Image
            className="shadow-xl glow-avatar border-8 border-[#002956] border-r-transparent border-b-transparent rounded-full"
            src="profile-photo.jpg"
            alt="Next.js logo"
            width={100}
            height={100}
          />
        </div>
        <h1 className="name !z-50 flex gap-2 font-semibold max-w-xs text-4xl tracking-tight text-black dark:text-zinc-50">
          <span>Sergey</span>
          <span className="">Boldyrev</span>
        </h1>
        <h3 className="place uppercase max-w-xs text-xl text-slate-500 font-semibold !z-50">
          Novosibirsk, Russia
        </h3>
      </div>
    </div>
  );
}

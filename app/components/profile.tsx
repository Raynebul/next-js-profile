import "../style/profile.scss";

import MainInfo from "./profile/main_info";

import ExtraInfo from "./profile/extra_info";

export default function Profile() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-[#070707]">
      <main className="flex max-md:flex-col gap-16 justify-center min-h-screen w-full items-center py-32 px-16 bg-white dark:bg-[#070707]">
        <MainInfo />
        <ExtraInfo />
      </main>
    </div>
  );
}

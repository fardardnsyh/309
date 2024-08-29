"use client";

import { Tabs } from "@/components/ui/tabs";
import Image from "next/image";
import Link from "next/link";

export function TabsDemo() {
  const tabs = [
    {
      title: "Tip Calculator",
      value: "dashboard",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>Tip Calculator using ReactJS</p>
          <ImageContainer
            src="/images/best-projects/tip-calculator.png"
            href="https://tip-calculator-jet-omega.vercel.app/"
          />
        </div>
      ),
    },
    {
      title: "Todo App",
      value: "todo",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>Todo App With CRUD Operation</p>
          <ImageContainer
            src="/images/best-projects/todo.png"
            href="https://todo-sage-alpha.vercel.app/"
          />
        </div>
      ),
    },
    {
      title: "Movies App",
      value: "movies",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>Movies App</p>
          <ImageContainer
            src="/images/best-projects/movies.png"
            href="https://movies-app-yt-live.vercel.app/"
          />
        </div>
      ),
    },
    {
      title: "Landing Page",
      value: "weather",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>Landing Page</p>
          <ImageContainer
            src="/images/best-projects/fylo-landing-page.png"
            href="https://fylo-landing-page-theta-three.vercel.app/"
          />
        </div>
      ),
    },
    {
      title: "Dev Finder",
      value: "devfinder",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>Github User App</p>
          <ImageContainer
            src="/images/best-projects/dev-finder.png"
            href="https://dev-finder-beta-one.vercel.app/"
          />
        </div>
      ),
    },
  ];

  return (
    <div className="h-[30rem] md:h-[40rem] [perspective:1000px] relative b flex flex-col max-w-5xl mx-auto w-full  items-start justify-start my-40 gap-10">
      <h2 className="font-bold text-4xl text-white">Best Projects</h2>
      <Tabs tabs={tabs} />
    </div>
  );
}

function ImageContainer({ src, href }: { src: string; href: string }) {
  return (
    <Link href={href ?? ""} target="_blank">
      <Image
        src={src}
        alt="dummy image"
        width={1000}
        height={1000}
        className="object-cover object-left-top h-[80%]  md:h-[90%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto "
      />
    </Link>
  );
}

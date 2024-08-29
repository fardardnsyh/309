import { cn } from "@/utils/cn";
import React from "react";
import {
  IconArrowWaveRightUp,
  IconBoxAlignRightFilled,
  IconBoxAlignTopLeft,
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import Image from "next/image";
import Link from "next/link";

export function BentoGridDemo() {
  return (
    <div className="flex flex-col gap-10 max-w-4xl mx-auto mb-10">
      <h2 className="font-bold text-4xl text-white">Best Projects</h2>
      <BentoGrid className="">
        {items.map((item, i) => (
          <BentoGridItem
            key={i}
            title={item.title}
            description={item.description}
            header={item.header}
            icon={item.icon}
            className={i === 3 || i === 6 ? "md:col-span-2" : ""}
          />
        ))}
      </BentoGrid>
    </div>
  );
}
function ItemImage({ src, href }: { src: string; href: string }) {
  return (
    <Link
      target="_blank"
      href={href ?? ""}
      className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl overflow-hidden  "
    >
      <Image
        className="h-full w-full object-cover"
        width={500}
        height={500}
        src={src ?? ""}
        alt="project-img"
      />
    </Link>
  );
}
const items = [
  {
    title: "Tip Calculator",
    description: "Divide the Bill Equally.",
    header: (
      <ItemImage
        src="/images/best-projects/tip-calculator.png"
        href="https://tip-calculator-jet-omega.vercel.app/"
      />
    ),
    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Todo App",
    description: "Dive into the transformative power of technology.",
    header: (
      <ItemImage
        src="/images/best-projects/todo.png"
        href="https://todo-sage-alpha.vercel.app/"
      />
    ),
    icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Movies App",
    description: "Discover the beauty of thoughtful and functional design.",
    header: (
      <ItemImage
        src="/images/best-projects/movies.png"
        href="https://movies-app-yt-live.vercel.app/"
      />
    ),
    icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Landing Page",
    description:
      "Understand the impact of effective communication in our lives.",
    header: (
      <ItemImage
        src="/images/best-projects/fylo-landing-page.png"
        href="https://fylo-landing-page-theta-three.vercel.app/"
      />
    ),
    icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Dev Finder",
    description: "Get Information of Any GitHub Account by Username.",
    header: (
      <ItemImage
        src="/images/best-projects/dev-finder.png"
        href="https://dev-finder-beta-one.vercel.app/"
      />
    ),
    icon: <IconArrowWaveRightUp className="h-4 w-4 text-neutral-500" />,
  },
];

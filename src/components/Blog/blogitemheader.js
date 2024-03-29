import { Icon } from "@iconify/react";
import Image from "next/image";
import Link from "next/link";

import { HOME } from "@/config/link";

import { Heading } from "../ui";

export default function BlogItemHeader({
  title,
  category,
  authorImage,
  authorName,
  date,
  igLink,
  twitterLink,
  facebookLink,
}) {
  return (
    <section className="w-[80%] pt-16 pb-6 mx-auto space-y-5 m:space-y-10">
      <Heading level={"h5"} styles={"text-gray uppercase"}>
        {category}
      </Heading>
      <Heading
        level={"h2"}
        variant={"xl"}
        styles={"font-black text-brightNavyBlue max-w-[740px]"}
      >
        {title}
      </Heading>
      <div className="flex flex-col m:flex-row justify-between gap-5 m:items-center">
        <div className="flex gap-3 items-center">
          <div className="relative w-[98px] h-[98px] bg-gray overflow-hidden rounded-full">
            {authorImage ? (
              <Image
                src={"http://" + authorImage}
                alt={authorName}
                fill
                className="object-cover"
              />
            ) : null}
          </div>
          <div className="space-y-1">
            <Heading level={"h5"} styles={"text-brightNavyBlue"}>
              {authorName}
            </Heading>
            <p className="text-gray">{date}</p>
          </div>
        </div>
        <ul className="flex gap-3">
          {["ic:sharp-facebook", "mdi:twitter", "ph:instagram-logo-fill"].map(
            (item) => (
              <li key={item}>
                <Link href={HOME}>
                  <Icon icon={item} color="#146BDF" fontSize={"44px"} />
                </Link>
              </li>
            )
          )}
        </ul>
      </div>
    </section>
  );
}

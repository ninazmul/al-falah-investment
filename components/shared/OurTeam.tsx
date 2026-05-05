"use client";

import Image from "next/image";
import Link from "next/link";
import { ImFacebook } from "react-icons/im";
import { FaXTwitter, FaLinkedinIn } from "react-icons/fa6";

const teamMembers = [
  {
    name: "Mizan Howlader",
    role: "Managing Director",
    image: "/assets/images/Teams/MH IEA Profile Photo 3.png",
    description:
      "An experienced professional with a strong background in education and community development. He has a proven track record of successfully managing educational institutions and fostering community engagement. With a passion for creating positive change, Mizan is dedicated to leading initiatives that enhance educational opportunities and promote social development. His leadership style is characterized by collaboration, innovation, and a commitment to excellence.",
    socials: {
      facebook: "https://facebook.com/johndoe",
      twitter: "https://twitter.com/johndoe",
      linkedin: "https://linkedin.com/in/johndoe",
    },
  },
  {
    name: "Faruk Ahmed",
    role: "Director",
    image: "/assets/images/Teams/Faruk Ahmed.jpeg",
    description:
      "A dedicated community-minded professional with a strong interest in education, leadership, and social development. He is committed to supporting initiatives that create lasting opportunities for future generations and strengthen community values through quality education. He will be part of the company funding the establishment of an Islamic School, contributing his experience, vision, and commitment to this important project. He previously served as Director at Al-Barakah Trust and is also a Member of the MFIS ICT Committee, where he has contributed to governance, technology planning, and community advancement. His background reflects a strong dedication to service, strategic growth, and the development of faith-based educational institutions.",
    socials: {
      facebook: "https://facebook.com/janesmith",
      twitter: "https://twitter.com/janesmith",
      linkedin: "https://linkedin.com/in/janesmith",
    },
  },
  {
    name: "AKM Moniruzzaman",
    role: "Director",
    image: "/assets/images/Teams/AK Moniruzzaman.jpg",
    description:
      "A dedicated community-minded professional with a strong interest in education, leadership, and social development. He is committed to supporting initiatives that create lasting opportunities for future generations and strengthen community values through quality education. He will be part of the company funding the establishment of an Islamic School, contributing his experience, vision, and commitment to this important project. He previously served as Director at Al-Barakah Trust and is also a Member of the MFIS ICT Committee, where he has contributed to governance, technology planning, and community advancement. His background reflects a strong dedication to service, strategic growth, and the development of faith-based educational institutions.",
    socials: {
      facebook: "https://facebook.com/janesmith",
      twitter: "https://twitter.com/janesmith",
      linkedin: "https://linkedin.com/in/janesmith",
    },
  },
];

const OurTeam = () => {
  return (
    <div className="relative h-auto overflow-hidden p-10 lg:p-20">
      <div className="w-full space-y-4 text-center">
        <h3 className="p-medium-12 md:p-medium-16 text-primary-500">
          Our Team members
        </h3>
        <h1 className="h2-bold">
          Our <span className="text-primary-500">Team</span>
        </h1>
      </div>
      <div className="space-y-20 lg:space-y-32 mt-10 md:mt-20">
        {teamMembers.map((member, index) => {
          const isEven = index % 2 === 0;
          return (
            <div
              key={index}
              className={`flex flex-col gap-12 lg:gap-0 items-center justify-around mx-auto w-full ${
                isEven ? "lg:flex-row" : "lg:flex-row-reverse"
              }`}
            >
              <div className="flex justify-center w-full lg:w-1/2 relative py-4">
                <Image
                  src={member.image}
                  width={500}
                  height={500}
                  alt={member.name}
                  className="w-full sm:w-2/3 lg:w-3/4 rounded-lg shadow-md relative z-10"
                />
                <div
                  className={`absolute ${
                    isEven
                      ? "-right-[2%] md:right-[10%] lg:right-[5%]"
                      : "-left-[2%] md:left-[10%] lg:left-[5%]"
                  } -top-[5%] md:-top-[10%] rounded-none p-8 md:p-12 lg:p-16 bg-primary-500 z-0`}
                />
                <div
                  className={`absolute ${
                    isEven
                      ? "-left-[2%] md:left-[10%] lg:left-[5%]"
                      : "-right-[2%] md:right-[10%] lg:right-[5%]"
                  } -bottom-[5%] md:-bottom-[10%] rounded-none p-8 md:p-12 lg:p-16 bg-yellow-400 z-0`}
                />
              </div>
              <div className="w-full lg:w-1/2 space-y-4 lg:px-10 text-center lg:text-left">
                <h2 className="text-3xl font-bold md:text-4xl">{member.name}</h2>
                <h3 className="text-xl font-semibold text-primary-500 mb-4">
                  {member.role}
                </h3>
                <div className="text-sm md:text-base text-muted-foreground leading-relaxed flex-grow space-y-4">
                  {member.description.split("\n").map((para, i) => (
                    <p key={i}>{para}</p>
                  ))}
                </div>
                <div className="flex items-center justify-center lg:justify-start gap-4 pt-6 pb-2">
                  <Link href={member.socials.facebook} target="_blank">
                    <ImFacebook className="size-10 bg-primary-500 p-2.5 rounded-md text-white hover:text-black shadow hover:bg-yellow-400 transition-colors" />
                  </Link>
                  <Link href={member.socials.twitter} target="_blank">
                    <FaXTwitter className="size-10 bg-primary-500 p-2.5 rounded-md text-white hover:text-black shadow hover:bg-yellow-400 transition-colors" />
                  </Link>
                  <Link href={member.socials.linkedin} target="_blank">
                    <FaLinkedinIn className="size-10 bg-primary-500 p-2.5 rounded-md text-white hover:text-black shadow hover:bg-yellow-400 transition-colors" />
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default OurTeam;

import { GoDeviceDesktop } from "react-icons/go";
import { MdOutlineAppSettingsAlt, MdOutlineDesignServices } from "react-icons/md";
import { SiAdobeindesign } from "react-icons/si";

export const ABOUT = {
    title: "About Me",
    name: "Arif Almas",
    description: "I am a web developer with a passion for building beautiful, responsive websites and applications. I have a background in graphic design and I am currently working on a career in web development.",
    exports: ['JavaScript', 'React', 'Tailwind'],
    image: "/Asset/me.png",
    services: [
        {
            title: "Web Development",
            text: "Lorem ipsum dolor sit amet Consectetur adipisicing elit.",
            icon: <GoDeviceDesktop size={33} />
        },
        {
            title: "Mobile Apps",
            text: "Lorem ipsum dolor sit amet Consectetur adipisicing elit.",
            icon: <MdOutlineAppSettingsAlt size={33} />
        },
        {
            title: "UI/UX Design",
            text: "Lorem ipsum dolor sit amet Consectetur adipisicing elit.",
            icon: <MdOutlineDesignServices size={33} />
        },
        {
            title: "Web Design",
            text: "Lorem ipsum dolor sit amet Consectetur adipisicing elit.",
            icon: <SiAdobeindesign size={33} />
        },
    ]
}
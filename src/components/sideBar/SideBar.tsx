import React from 'react';
import Link from "next/link";
import {IoHome, IoSettingsOutline} from "react-icons/io5";
import {useTranslation} from "@/app/i18n";
import {BsPostcard} from "react-icons/bs";
import {MdOutlineAddPhotoAlternate, MdOutlinePending} from "react-icons/md";

const nav = [
    {
        name: "Dashboard",
        path: "/",
        icon: <IoHome/>,
    },
    {
        name: "Blogs",
        path: "/blogs",
        icon: <BsPostcard/>,
    },
    {
        name: "AddBlog",
        path: "/addBlog",
        icon: <MdOutlineAddPhotoAlternate/>,
    },
    {
        name: "Pending",
        path: "/draft",
        icon: <MdOutlinePending/>,
    },
    {
        name: "Settings",
        path: "/settings",
        icon: <IoSettingsOutline/>,
    }
]

interface SideBarProps{
    lng: string
}
const SideBar :React.FC<SideBarProps>=async ({lng}) => {
    const {t} = await useTranslation(lng,"nav");
    return (
        <aside className="asideleft">
            {nav.map((item, index) => (
                <Link key={index} href={item.path} >
                    {item.icon}
                    <span className="text-sm">{t(item.name)}</span>
                </Link>
            ))}
        </aside>
    );
};

export default SideBar;

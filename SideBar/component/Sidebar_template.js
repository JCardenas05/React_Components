"use client";

import { ChevronFirst, ChevronLast, MoreVertical, ChevronDown, ChevronRight } from "lucide-react";
import Image from 'next/image';
import Link from 'next/link';
import logo from "@/../public/Binance-logo.png";
import profile from "@/../public/profile.png";
import { createContext, useContext, useEffect, useState } from "react";
import './styles.css';

const SidebarContext = createContext();

export default function Sidebar_template({ children }) {
    const [expanded, setExpanded] = useState(true);

    useEffect(() => {
        if (typeof window !== "undefined") {
            const storedState = localStorage.getItem('sidebar-expanded');
            setExpanded(storedState !== null ? JSON.parse(storedState) : true);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('sidebar-expanded', JSON.stringify(expanded));
    }, [expanded]);

    return (
        <aside className="h-screen">
            <nav className="h-full flex flex-col bg-white border-r shadow-sm">
                <div className="p-4 pb-2 flex justify-between items-center">
                    <div className={`overflow-hidden transition-all ${expanded ? "sidebar-expanded" : "sidebar-collapsed"}`}>
                        <Image src={logo} alt="Logo" width={128} height={128} />
                    </div>
                    <button onClick={() => setExpanded((curr) => !curr)} className="sidebar-toggle-button">
                        {expanded ? <ChevronFirst /> : <ChevronLast />}
                    </button>
                </div>

                <SidebarContext.Provider value={{ expanded }}>
                    <ul className="flex-1 px-3">{children}</ul>
                </SidebarContext.Provider>

                <div className="border-t flex p-3">
                    <div className="w-10 h-10 rounded-md overflow-hidden">
                        <Image src={profile} alt="Profile" width={40} height={40} />
                    </div>
                    <div className={`sidebar-profile-info ${expanded ? "w-52 ml-3" : "sidebar-collapsed"} `}>
                        <div className="leading-4">
                            <h4 className="font-semibold">my name</h4>
                            <span className="text-xs text-gray-600">email</span>
                        </div>
                        <MoreVertical size={20} />
                    </div>
                </div>
            </nav>
        </aside>
    );
}

export function SidebarItem({ icon, text, active, alert, link, children }) {
    const { expanded } = useContext(SidebarContext);
    const [submenuOpen, setSubmenuOpen] = useState(false);

    const toggleSubmenu = (event) => {
        event.stopPropagation();
        setSubmenuOpen(prev => !prev);
    };

    const hasSubmenu = Array.isArray(children);

    return (
        <li className="relative">
            <div
                className={`relative flex items-center py-2 px-3 my-1 font-medium rounded-md cursor-pointer transition-colors group ${active ? "sidebar-item-expanded" : "sidebar-item-collapsed"}`}
                onClick={() => {
                    if (!expanded) {
                        setSubmenuOpen((prev) => !prev);
                    }
                }}
            >
                <Link href={link}>
                    <div className={`flex items-center space-x-2 ${expanded ? '' : 'pointer-events-none'}`}>
                        {icon}
                        <span className={`menu-text ${expanded ? "sidebar-text-expanded" : "sidebar-text-collapsed"}`}>{text}</span>
                        {hasSubmenu && expanded && (
                            <button
                                className="ml-auto"
                                onClick={(e) => {
                                    e.preventDefault();
                                    setSubmenuOpen((prev) => !prev);
                                }}
                            >
                                {submenuOpen ? <ChevronDown /> : <ChevronRight />}
                            </button>
                        )}
                    </div>
                </Link>
                {alert && (
                    <div className={`absolute right-2 w-2 h-2 rounded bg-indigo-400 ${expanded ? "" : "top-2"}`}></div>
                )}
                {!expanded && !hasSubmenu && (
                    <div className={`absolute left-full rounded-md px-2 py-1 ml-6 bg-indigo-100 text-indigo-800 text-sm invisible opacity-20 -translate-x-3 transition-all group-hover:visible group-hover:opacity-100 group-hover:translate-x-0`}>
                        {text}
                    </div>
                )}
                {!expanded && hasSubmenu && (
                    <ul className="sidebar-submenu-open">
                        {children}
                    </ul>
                )}
            </div>
            {submenuOpen && expanded && (
                <ul className={`pl-6 ${expanded ? "block" : "hidden"}`}>
                    {children}
                </ul>
            )}
        </li>
    );
}


export function SubmenuItem({ icon, text, link }) {
    return (
        <li className="relative flex items-center py-2 px-3 my-1 font-medium rounded-md cursor-pointer transition-colors group hover:bg-indigo-50 text-gray-600">
            <Link href={link} legacyBehavior>
                <a className="flex items-center space-x-2">
                    {icon}
                    <span>{text}</span>
                </a>
            </Link>
        </li>
    );
}

import Link from "next/link";
import React from "react";

export default function ButtonLinkPrimary(
    {
        children,
        link
    }:{
        children: React.ReactNode,
        link: string
    }
) {
    return (
        <Link href={link} className='bg-purple px-6 py-3 rounded-full hover:bg-darkPurple'>
            {children}
        </Link>
    );
}
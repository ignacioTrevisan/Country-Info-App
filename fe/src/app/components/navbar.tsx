"use client"

import Link from "next/link"

export const Navbar = () => {
    return (
        <header className="bg-blue-600 text-white p-4">
            <nav>
                <Link href="/" className="text-2xl font-bold hover:text-blue-200">
                    Countries list
                </Link>
            </nav>
        </header>
    )
}

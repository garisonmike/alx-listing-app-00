import React from 'react';

const Header: React.FC = () => {
    return (
        <header className="bg-white shadow-sm">
            <div className="container flex items-center justify-between py-4">
                <div className="flex items-center gap-4">
                    <div className="text-xl font-bold text-indigo-600">ALXListing</div>
                    <nav className="hidden md:flex gap-3 text-sm text-gray-600">
                        <a className="hover:text-indigo-600" href="#">Rooms</a>
                        <a className="hover:text-indigo-600" href="#">Mansion</a>
                        <a className="hover:text-indigo-600" href="#">Countryside</a>
                    </nav>
                </div>

                <div className="flex items-center gap-3">
                    <input placeholder="Search..." className="hidden sm:inline-block px-3 py-2 border rounded-md" />
                    <button className="text-sm px-3 py-2">Sign in</button>
                    <button className="text-sm px-3 py-2 bg-indigo-600 text-white rounded-md">Sign up</button>
                </div>
            </div>
        </header>
    );
};

export default Header;

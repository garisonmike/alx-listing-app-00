import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-white border-t">
            <div className="container py-8">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                    <div className="text-sm text-gray-600">© {new Date().getFullYear()} ALX, All rights reserved.</div>
                    <div className="flex gap-4 text-sm">
                        <a href="#" className="text-gray-600 hover:text-indigo-600">About</a>
                        <a href="#" className="text-gray-600 hover:text-indigo-600">Contact</a>
                        <a href="#" className="text-gray-600 hover:text-indigo-600">Privacy</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

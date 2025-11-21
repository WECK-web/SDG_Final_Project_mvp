import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-dark text-white py-6 mt-auto">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-4 md:mb-0">
                        <span className="text-lg font-bold">FarmConnect</span>
                        <p className="text-sm text-gray-400">Connecting farmers to your table.</p>
                    </div>
                    <div className="text-sm text-gray-400">
                        &copy; {new Date().getFullYear()} FarmConnect. All rights reserved.
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

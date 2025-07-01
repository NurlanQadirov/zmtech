import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-[#050505] border-t border-gray-800/30 text-gray-400">
            <div className="container mx-auto px-4 py-16">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div className="md:col-span-2">
                        <h3 className="text-2xl font-bold tracking-tighter text-white">ZM Tech</h3>
                        <p className="mt-4 max-w-sm">
                            Crafting the future of digital interaction with innovative and robust IT solutions.
                        </p>
                    </div>
                    <div>
                        <h4 className="font-semibold text-white mb-4">Navigation</h4>
                        <ul className="space-y-2">
                            {/* DƏYİŞİKLİK: hover effekti hover:text-white oldu */}
                            <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
                            <li><Link to="/services" className="hover:text-white transition-colors">Services</Link></li>
                            <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-semibold text-white mb-4">Get in Touch</h4>
                        <ul className="space-y-2">
                            <li><a href="mailto:contact@zmtech.com" className="hover:text-white transition-colors">contact@zmtech.com</a></li>
                            <li><a href="tel:+994000000000" className="hover:text-white transition-colors">+994 (XX) XXX XX XX</a></li>
                        </ul>
                    </div>
                </div>

                {/* DƏYİŞİKLİK: justify-between -> justify-center olaraq dəyişdirildi */}
                <div className="mt-16 pt-8 border-t border-gray-800/50 flex flex-col sm:flex-row justify-center items-center text-center text-sm">
                    <p>&copy; {new Date().getFullYear()} ZM Tech. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
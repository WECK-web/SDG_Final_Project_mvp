import React from 'react';
import { Link } from 'react-router-dom';
import { Leaf, Tractor, Sun, ArrowRight, DollarSign, Truck, Sprout, Users } from 'lucide-react';
import { SignedIn, SignedOut, SignInButton } from "@clerk/clerk-react";

const Home = () => {
    return (
        <div className="flex flex-col">
            {/* Hero Section */}
            <section className="relative bg-emerald-900 text-white py-20 lg:py-32 overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full filter blur-3xl opacity-20 -translate-x-1/2 -translate-y-1/2"></div>
                    <div className="absolute bottom-0 right-0 w-96 h-96 bg-yellow-400 rounded-full filter blur-3xl opacity-10 translate-x-1/3 translate-y-1/3"></div>
                </div>

                <div className="container mx-auto px-6 relative z-10">
                    <div className="max-w-3xl mx-auto text-center">
                        <div className="inline-flex items-center gap-2 bg-emerald-800/50 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-emerald-700">
                            <Sprout className="w-4 h-4 text-emerald-400" />
                            <span className="text-emerald-100 text-sm font-medium">Sustainable Farming Future</span>
                        </div>

                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight leading-tight">
                            Cultivating <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-yellow-300">Connections</span>
                        </h1>

                        <p className="text-xl text-emerald-100 mb-10 leading-relaxed">
                            Directly connecting local farmers with conscious consumers.
                            Fresh produce, fair prices, and a thriving community ecosystem.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                to="/products"
                                className="bg-yellow-500 hover:bg-yellow-400 text-emerald-950 font-bold py-4 px-8 rounded-full transition-all transform hover:-translate-y-1 shadow-lg hover:shadow-yellow-500/20 flex items-center justify-center gap-2"
                            >
                                Shop Fresh <ArrowRight className="w-5 h-5" />
                            </Link>
                            <SignedOut>
                                <SignInButton mode="modal">
                                    <button className="bg-emerald-800 hover:bg-emerald-700 text-white font-bold py-4 px-8 rounded-full transition-all border border-emerald-600 flex items-center justify-center">
                                        Join as Farmer
                                    </button>
                                </SignInButton>
                            </SignedOut>
                            <SignedIn>
                                <Link
                                    to="/dashboard"
                                    className="bg-emerald-800 hover:bg-emerald-700 text-white font-bold py-4 px-8 rounded-full transition-all border border-emerald-600 flex items-center justify-center"
                                >
                                    Go to Dashboard
                                </Link>
                            </SignedIn>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Grid */}
            <section className="py-20 bg-stone-50">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-stone-800 mb-4">Why Choose FarmConnect?</h2>

                        <p className="text-stone-600 max-w-2xl mx-auto">We're revolutionizing the food supply chain by cutting out the middlemen and empowering local producers.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <FeatureCard
                            icon={Sun}
                            title="Peak Freshness"
                            description="Produce harvested at the perfect moment and delivered directly to your table within hours."
                            color="bg-yellow-100 text-yellow-700"
                        />
                        <FeatureCard
                            icon={Users}
                            title="Community First"
                            description="Support local families and build a resilient food system in your own neighborhood."
                            color="bg-emerald-100 text-emerald-700"
                        />
                        <FeatureCard
                            icon={DollarSign}
                            title="Fair Pricing"
                            description="Farmers get paid what they deserve, and you pay less than grocery store markups."
                            color="bg-blue-100 text-blue-700"
                        />
                    </div>
                </div>
            </section>

            {/* How It Works */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col lg:flex-row items-center gap-16">
                        <div className="lg:w-1/2">
                            <div className="relative">
                                <div className="absolute -inset-4 bg-emerald-100 rounded-2xl transform -rotate-3"></div>
                                <img
                                    src="https://images.unsplash.com/photo-1488459716781-31db52582fe9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                                    alt="Farmer holding fresh vegetables"
                                    className="relative rounded-2xl shadow-xl w-full object-cover h-[500px]"
                                />
                            </div>
                        </div>
                        <div className="lg:w-1/2 space-y-8">
                            <h2 className="text-3xl md:text-4xl font-bold text-stone-800">From Soil to Soul</h2>
                            <div className="space-y-6">
                                <Step
                                    number="01"
                                    title="Farmers List Produce"
                                    description="Local growers update their inventory in real-time as crops are ready for harvest."
                                />
                                <Step
                                    number="02"
                                    title="You Place an Order"
                                    description="Browse seasonal offerings and select exactly what you need for the week."
                                />
                                <Step
                                    number="03"
                                    title="Direct Delivery"
                                    description="We coordinate the logistics to bring the farm directly to your doorstep."
                                />
                            </div>
                            <div className="pt-4">
                                <Link to="/products" className="text-emerald-600 font-bold hover:text-emerald-700 inline-flex items-center gap-2 group">
                                    Start Shopping <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-emerald-900 text-white text-center">
                <div className="container mx-auto px-6">
                    <Leaf className="w-12 h-12 text-emerald-400 mx-auto mb-6" />
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Taste the Difference?</h2>
                    <p className="text-emerald-100 max-w-2xl mx-auto mb-10 text-lg">
                        Join thousands of happy customers who have made the switch to local, sustainable, and delicious food.
                    </p>
                    <Link
                        to="/products"
                        className="bg-white text-emerald-900 font-bold py-4 px-10 rounded-full hover:bg-emerald-50 transition-colors shadow-lg inline-block"
                    >
                        Browse Market
                    </Link>
                </div>
            </section>
        </div>
    );
};

const FeatureCard = ({ icon: Icon, title, description, color }) => (
    <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-stone-100">
        <div className={`w-14 h-14 ${color} rounded-xl flex items-center justify-center mb-6`}>
            <Icon className="w-7 h-7" />
        </div>
        <h3 className="text-xl font-bold text-stone-800 mb-3">{title}</h3>
        <p className="text-stone-600 leading-relaxed">{description}</p>
    </div>
);

const Step = ({ number, title, description }) => (
    <div className="flex gap-6">
        <div className="flex-shrink-0">
            <span className="text-4xl font-black text-emerald-100">{number}</span>
        </div>
        <div>
            <h3 className="text-xl font-bold text-stone-800 mb-2">{title}</h3>
            <p className="text-stone-600">{description}</p>
        </div>
    </div>
);

export default Home;
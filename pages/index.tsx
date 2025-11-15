import { useMemo, useState } from 'react';
import PropertyCard from '../components/property/PropertyCard';
import Pill from '../components/ui/Pill';
import { PROPERTYLISTINGSAMPLE } from '../constants';
import { PropertyProps } from '../interfaces';

const filterLabels = [
    'All',
    'Beachfront',
    'Private Pool',
    'Self Checkin',
    'City Center',
    'Mountain View',
    'Pet Friendly'
];

export default function Home() {
    const [activeFilter, setActiveFilter] = useState<string>('All');

    const filtered = useMemo(() => {
        if (activeFilter === 'All') return PROPERTYLISTINGSAMPLE;
        return PROPERTYLISTINGSAMPLE.filter((p) => p.category.includes(activeFilter));
    }, [activeFilter]);

    return (
        <div>
            {/* Hero */}
            <section className="relative bg-cover bg-center" style={{ backgroundImage: `url(${PROPERTYLISTINGSAMPLE[0].image})` }}>
                <div className="bg-black/50">
                    <div className="container py-24">
                        <h1 className="text-4xl sm:text-5xl font-extrabold text-white">Find your favorite place here!</h1>
                        <p className="mt-3 text-lg text-gray-200">The best prices for over 2 million properties worldwide.</p>
                        <div className="mt-6 flex flex-wrap gap-3">
                            <input placeholder="Search destination..." className="px-4 py-2 rounded-md w-full sm:w-96" />
                            <button className="px-4 py-2 bg-indigo-600 text-white rounded-md">Search</button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Filters */}
            <section className="container py-8">
                <div className="flex gap-3 flex-wrap">
                    {filterLabels.map((label) => (
                        <Pill key={label} label={label} active={label === activeFilter} onClick={() => setActiveFilter(label)} />
                    ))}
                </div>
            </section>

            {/* Listings */}
            <section className="container pb-16">
                <h2 className="text-2xl font-semibold mb-4">Listings</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filtered.map((p: PropertyProps, i) => (
                        <PropertyCard key={i} property={p} />
                    ))}
                </div>
            </section>
        </div>
    );
}

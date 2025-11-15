import React from 'react';
import { PropertyProps } from '../../interfaces';

const PropertyCard: React.FC<{ property: PropertyProps }> = ({ property }) => {
    return (
        <article className="bg-white rounded-lg overflow-hidden shadow-sm">
            <div className="h-48 bg-gray-200 overflow-hidden">
                <img src={property.image} alt={property.name} className="w-full h-full object-cover" />
            </div>
            <div className="p-4">
                <div className="flex items-center justify-between">
                    <h3 className="font-semibold text-lg">{property.name}</h3>
                    <div className="text-sm text-yellow-500">⭐ {property.rating}</div>
                </div>
                <p className="text-sm text-gray-500 mt-1">{property.address.city}, {property.address.country}</p>
                <div className="mt-3 flex items-center justify-between">
                    <div className="text-sm text-gray-600">{property.offers.bed} beds • {property.offers.shower} baths</div>
                    <div className="text-lg font-bold">${property.price}</div>
                </div>
            </div>
        </article>
    );
};

export default PropertyCard;

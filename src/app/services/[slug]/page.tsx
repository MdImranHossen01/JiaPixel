import React from 'react';

interface ServiceDetailsProps {
    params: { slug: string };
}

const ServiceDetails: React.FC<ServiceDetailsProps> = ({ params }) => {
    const slug: string = params.slug;

    return (
        <div>
            <h1>This is the service details page for {slug}</h1>
        </div>
    );
};

export default ServiceDetails;
import React from 'react';

interface ServiceDetailsPageProps {
    params: {
        slug: string;
    };
}

const ServiceDetailsPage: React.FC<ServiceDetailsPageProps> = ({ params }) => {
    const slug = params?.slug;
    return (
        <div>
            <h1>This is service details page for service: {slug}</h1>
        </div>
    );
};

export default ServiceDetailsPage;
import React, { lazy } from 'react';
import { useParams } from 'react-router-dom';
import LocationPage from './LocationPage';
import SEO from '../common/SEO';

const KozhikodePage = lazy(() => import('./KozhikodePage'));

const DynamicPageHandler = () => {
    const { slug } = useParams();

    if (slug === 'accounting-service-in-kozhikode') {
        return <KozhikodePage />;
    }

    if (slug && slug.startsWith('accounting-service-in-')) {
        const citySlug = slug.replace('accounting-service-in-', '');
        return <LocationPage citySlugOverride={citySlug} />;
    }

    // Fallback for 404 or other dynamic pages not yet handled
    return (
        <div className="min-h-screen flex items-center justify-center bg-dark-bg text-white">
            <SEO
                title="Page Not Found | Acharya Professional Accountants"
                description="The page you are looking for does not exist."
                robots="noindex, nofollow"
            />
            <div className="text-center">
                <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
                <p className="text-boulder">The page you are looking for does not exist.</p>
                <a href="/" className="inline-block mt-6 px-6 py-2 bg-primary-accent rounded-full text-white">
                    Go Back Home
                </a>
            </div>
        </div>
    );
};

export default DynamicPageHandler;

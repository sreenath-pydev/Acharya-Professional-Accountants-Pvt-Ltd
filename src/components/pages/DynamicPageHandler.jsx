import React from 'react';
import { useParams } from 'react-router-dom';
import LocationPage from './LocationPage';
import SEO from '../common/SEO';

import KozhikodePage from './KozhikodePage';
import KannurPage from './KannurPage';
import MalappuramPage from './MalappuramPage';
import ThrissurPage from './ThrissurPage';
import WayanadPage from './WayanadPage';
import KasaragodPage from './KasaragodPage';
import KochiPage from './KochiPage';
import PalakkadPage from './PalakkadPage';
import BangalorePage from './BangalorePage';
import MangaluruPage from './MangaluruPage';
import ChennaiPage from './ChennaiPage';
import CoimbatorePage from './CoimbatorePage';
import MumbaiPage from './MumbaiPage';
import HyderabadPage from './HyderabadPage';

const DynamicPageHandler = () => {
    const { slug } = useParams();

    if (slug === 'accounting-service-in-kozhikode') {
        return <KozhikodePage />;
    }

    if (slug === 'accounting-service-in-kannur') {
        return <KannurPage />;
    }

    if (slug === 'accounting-service-in-malappuram') {
        return <MalappuramPage />;
    }

    if (slug === 'accounting-service-in-thrissur') {
        return <ThrissurPage />;
    }

    if (slug === 'accounting-service-in-wayanad') {
        return <WayanadPage />;
    }

    if (slug === 'accounting-service-in-kasaragod') {
        return <KasaragodPage />;
    }

    if (slug === 'accounting-service-in-kochi') {
        return <KochiPage />;
    }

    if (slug === 'accounting-service-in-palakkad') {
        return <PalakkadPage />;
    }

    if (slug === 'accounting-service-in-bangalore' || slug === 'accounting-service-in-bengaluru') {
        return <BangalorePage />;
    }

    if (slug === 'accounting-service-in-mangaluru' || slug === 'accounting-service-in-mangalore') {
        return <MangaluruPage />;
    }

    if (slug === 'accounting-service-in-chennai') {
        return <ChennaiPage />;
    }

    if (slug === 'accounting-service-in-coimbatore') {
        return <CoimbatorePage />;
    }

    if (slug === 'accounting-service-in-mumbai' || slug === 'mumbai') {
        return <MumbaiPage />;
    }

    if (slug === 'accounting-service-in-hyderabad' || slug === 'hyderabad') {
        return <HyderabadPage />;
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

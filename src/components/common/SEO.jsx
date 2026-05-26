import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

const SEO = ({
    title,
    description,
    keywords,
    canonical,
    ogType = 'website',
    ogImage,
    robots
}) => {
    const location = useLocation();
    const siteUrl = 'https://www.acharyaprofessionalaccountants.in';

    // Construct absolute URL for canonical if not provided or relative
    const currentUrl = canonical
        ? canonical
        : `${siteUrl}${location.pathname}`;

    // Default fallback image
    const defaultImage = `${siteUrl}/images/Acharya-Professional-Accountants-OG-image.webp`;
    const absoluteImage = ogImage
        ? (ogImage.startsWith('http') ? ogImage : `${siteUrl}${ogImage}`)
        : defaultImage;

    const fullTitle = title
        ? (title.includes('Acharya') ? title : `${title} | Acharya Professional Accountants`)
        : 'Acharya Professional Accountants | CA & Tax Consultant in Calicut';

    return (
        <Helmet>
            {/* Basic Metadata */}
            <title>{fullTitle}</title>
            <meta name="description" content={description} />
            {keywords && <meta name="keywords" content={keywords} />}
            {robots && <meta name="robots" content={robots} />}
            <link rel="canonical" href={currentUrl} />

            {/* Open Graph / Facebook */}
            <meta property="og:site_name" content="Acharya Professional Accountants" />
            <meta property="og:type" content={ogType} />
            <meta property="og:title" content={fullTitle} />
            <meta property="og:description" content={description} />
            <meta property="og:url" content={currentUrl} />
            <meta property="og:image" content={absoluteImage} />
            <meta property="og:image:secure_url" content={absoluteImage} />
            <meta property="og:image:alt" content={fullTitle} />

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={fullTitle} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={absoluteImage} />
        </Helmet>
    );
};

export default SEO;

import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
    title?: string;
    description?: string;
    image?: string;
    url?: string;
    type?: string;
}

export const SEO: React.FC<SEOProps> = ({
    title = 'RAISE | AI RDA Copilot',
    description = "Trasforma la creazione di Richieste d'Acquisto da onere burocratico a vantaggio competitivo. Zero moduli. Zero errori. 100% Compliance.",
    image = '/og-image.png',
    url,
    type = 'website'
}) => {
    const siteUrl = 'https://raise-website.vercel.app'; // Assuming a placeholder or the actual one if known. Using window.location.origin in logic might be better but for SSR/sharing static is needed.
    // Ideally, this should be an env var. For now I'll use a placeholder or relative if applicable, but LinkedIn needs absolute URLs for images usually. 
    // Determining absolute URL:
    const absoluteUrl = url ? (url.startsWith('http') ? url : `${siteUrl}${url}`) : siteUrl;
    const absoluteImage = image.startsWith('http') ? image : `${siteUrl}${image}`;

    return (
        <Helmet>
            {/* Standard Metadata */}
            <title>{title}</title>
            <meta name="description" content={description} />

            {/* Open Graph / Facebook / LinkedIn */}
            <meta property="og:type" content={type} />
            <meta property="og:url" content={absoluteUrl} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={absoluteImage} />

            {/* Twitter */}
            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content={absoluteUrl} />
            <meta property="twitter:title" content={title} />
            <meta property="twitter:description" content={description} />
            <meta property="twitter:image" content={absoluteImage} />
        </Helmet>
    );
};

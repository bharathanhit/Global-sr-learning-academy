import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const SEO = ({
    title,
    description,
    keywords,
    image = '/global-sr-logo.png',
    type = 'website',
    author = 'Dr. T. Sheela MBA., M. Phil',
    canonical
}) => {
    const location = useLocation();
    const baseUrl = 'https://globalsr.edu';
    const currentUrl = canonical || `${baseUrl}${location.pathname}`;

    useEffect(() => {
        // Update document title
        if (title) {
            document.title = `${title} | GLOBAL SR ENGLISH LEARNING ACADEMY`;
        }

        // Update or create meta tags
        const updateMetaTag = (name, content, isProperty = false) => {
            if (!content) return;

            const attribute = isProperty ? 'property' : 'name';
            let element = document.querySelector(`meta[${attribute}="${name}"]`);

            if (!element) {
                element = document.createElement('meta');
                element.setAttribute(attribute, name);
                document.head.appendChild(element);
            }
            element.setAttribute('content', content);
        };

        // Standard meta tags
        updateMetaTag('description', description);
        updateMetaTag('keywords', keywords);
        updateMetaTag('author', author);
        updateMetaTag('robots', 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1');

        // Open Graph tags
        updateMetaTag('og:title', title, true);
        updateMetaTag('og:description', description, true);
        updateMetaTag('og:image', `${baseUrl}${image}`, true);
        updateMetaTag('og:url', currentUrl, true);
        updateMetaTag('og:type', type, true);
        updateMetaTag('og:site_name', 'GLOBAL SR ENGLISH LEARNING ACADEMY', true);
        updateMetaTag('og:locale', 'en_IN', true);

        // Twitter Card tags
        updateMetaTag('twitter:card', 'summary_large_image');
        updateMetaTag('twitter:title', title);
        updateMetaTag('twitter:description', description);
        updateMetaTag('twitter:image', `${baseUrl}${image}`);

        // Additional SEO tags
        updateMetaTag('geo.region', 'IN-TN');
        updateMetaTag('geo.placename', 'Kovai Pudur, Coimbatore');
        updateMetaTag('geo.position', '11.0168;76.9558');
        updateMetaTag('ICBM', '11.0168, 76.9558');

        // Update canonical link
        let canonicalLink = document.querySelector('link[rel="canonical"]');
        if (!canonicalLink) {
            canonicalLink = document.createElement('link');
            canonicalLink.setAttribute('rel', 'canonical');
            document.head.appendChild(canonicalLink);
        }
        canonicalLink.setAttribute('href', currentUrl);

    }, [title, description, keywords, image, type, author, currentUrl]);

    return null;
};

export default SEO;

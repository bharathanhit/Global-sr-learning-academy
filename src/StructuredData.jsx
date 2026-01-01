import { useEffect } from 'react';

const StructuredData = () => {
    useEffect(() => {
        // Organization Schema
        const organizationSchema = {
            "@context": "https://schema.org",
            "@type": "EducationalOrganization",
            "name": "GLOBAL SR ENGLISH LEARNING ACADEMY",
            "alternateName": "GLOBAL SR ENGLISH LEARNING ACADEMY",
            "url": "https://globalsr.edu",
            "logo": "https://globalsr.edu/global-sr-logo.png",
            "description": "Premier English learning academy offering Spoken English and professional communication training in Kovai Pudur, Coimbatore, Tamil Nadu.",
            "founder": {
                "@type": "Person",
                "name": "Dr. T. Sheela MBA., M. Phil",
                "jobTitle": "Founder & Director",
                "description": "Expert English language educator with MBA and M. Phil from PSG Institution, Coimbatore. Founder of GLOBAL SR ENGLISH LEARNING ACADEMY."
            },
            "address": {
                "@type": "PostalAddress",
                "streetAddress": "Kovai Pudur",
                "addressLocality": "Coimbatore",
                "addressRegion": "Tamil Nadu",
                "addressCountry": "IN"
            },
            "geo": {
                "@type": "GeoCoordinates",
                "latitude": "11.0168",
                "longitude": "76.9558"
            },
            "contactPoint": {
                "@type": "ContactPoint",
                "contactType": "Customer Service",
                "availableLanguage": ["English", "Tamil"]
            },
            "sameAs": [
                "https://www.instagram.com/globalsr",
                "https://www.facebook.com/globalsr"
            ]
        };

        // Course Schema
        const courseSchema = {
            "@context": "https://schema.org",
            "@type": "ItemList",
            "itemListElement": [
                {
                    "@type": "Course",
                    "name": "Language Courses (Learning Languages)",
                    "description": "Comprehensive English courses including Beginner and Intermediate levels, both in English and through Tamil.",
                    "provider": {
                        "@type": "EducationalOrganization",
                        "name": "GLOBAL SR ENGLISH LEARNING ACADEMY"
                    },
                    "courseMode": "Blended",
                    "availableLanguage": "English",
                    "inLanguage": "en"
                },
                {
                    "@type": "Course",
                    "name": "Communicative English through Tamil",
                    "description": "Structured levels of communicative English training from Pre-Basic to Intermediate, specifically designed for Tamil speakers.",
                    "provider": {
                        "@type": "EducationalOrganization",
                        "name": "GLOBAL SR ENGLISH LEARNING ACADEMY"
                    },
                    "courseMode": "Blended",
                    "availableLanguage": "English",
                    "inLanguage": "en"
                }
            ]
        };

        // Website Schema
        const websiteSchema = {
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "GLOBAL SR ENGLISH LEARNING ACADEMY",
            "url": "https://globalsr.edu",
            "potentialAction": {
                "@type": "SearchAction",
                "target": "https://globalsr.edu/search?q={search_term_string}",
                "query-input": "required name=search_term_string"
            }
        };

        // Breadcrumb Schema
        const breadcrumbSchema = {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
                {
                    "@type": "ListItem",
                    "position": 1,
                    "name": "Home",
                    "item": "https://globalsr.edu"
                },
                {
                    "@type": "ListItem",
                    "position": 2,
                    "name": "Courses",
                    "item": "https://globalsr.edu/#services"
                },
                {
                    "@type": "ListItem",
                    "position": 3,
                    "name": "About",
                    "item": "https://globalsr.edu/#about"
                },
                {
                    "@type": "ListItem",
                    "position": 4,
                    "name": "Contact",
                    "item": "https://globalsr.edu/#contact"
                }
            ]
        };

        // FAQ Schema
        const faqSchema = {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
                {
                    "@type": "Question",
                    "name": "What courses does GLOBAL SR ENGLISH LEARNING ACADEMY offer?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "We offer Spoken English, Business Communication, and Professional English courses tailored for different proficiency levels."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Who is the founder of GLOBAL SR ENGLISH LEARNING ACADEMY?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Dr. T. Sheela MBA., M. Phil is the founder and director of GLOBAL SR ENGLISH LEARNING ACADEMY. She completed her education at PSG Institution, Coimbatore, and has extensive experience in English language education."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Where is GLOBAL SR ENGLISH LEARNING ACADEMY located?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "GLOBAL SR ENGLISH LEARNING ACADEMY is located in Kovai Pudur, Coimbatore, Tamil Nadu, India, serving students across the region with both online and offline classes."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Do you offer online classes?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Yes, we offer both online and offline classes to accommodate students' preferences and schedules, ensuring flexible learning options."
                    }
                }
            ]
        };

        // Insert all schemas
        const schemas = [
            organizationSchema,
            courseSchema,
            websiteSchema,
            breadcrumbSchema,
            faqSchema
        ];

        schemas.forEach((schema, index) => {
            const scriptId = `structured-data-${index}`;
            let script = document.getElementById(scriptId);

            if (!script) {
                script = document.createElement('script');
                script.id = scriptId;
                script.type = 'application/ld+json';
                document.head.appendChild(script);
            }

            script.textContent = JSON.stringify(schema);
        });

        // Cleanup function
        return () => {
            schemas.forEach((_, index) => {
                const script = document.getElementById(`structured-data-${index}`);
                if (script) {
                    script.remove();
                }
            });
        };
    }, []);

    return null;
};

export default StructuredData;

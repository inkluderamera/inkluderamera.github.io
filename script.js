document.addEventListener('DOMContentLoaded', () => {
    // Define your translations
    const translations = {
        en: {
            page_title: "Empower & Engage: Inclusive Education",
            logo_text: "Empower & Engage",
            nav_about: "About Me",
            nav_topics: "Lecture Topics",
            nav_testimonials: "Testimonials",
            nav_resources: "Resources",
            nav_contact: "Contact",
            hero_heading: "Inspiring Change for a Truly Inclusive World",
            hero_subheading: "Expert lectures and workshops on equality and accessibility for organizations, educators, and leaders.",
            btn_book_lecture: "Book a Lecture",
            btn_explore_topics: "Explore Topics",
            about_heading: "About Me",
            about_p1: "Hello! I'm [Your Name], a passionate lecturer dedicated to fostering environments where everyone belongs and can thrive. My journey into equality and accessibility began with [brief personal anecdote or motivation]. I believe in the power of education to dismantle barriers and build bridges.",
            about_p2: "With [X years] of experience and a background in [Your Field/Degree], I translate complex concepts into actionable strategies, empowering audiences to create truly inclusive spaces, whether digital, physical, or cultural.",
            btn_learn_more_about: "Learn More About My Story",
            about_image_alt: "Professional photo of [Your Name], a friendly and approachable lecturer.",
            services_heading: "My Lecture Topics & Services",
            services_description: "Customizable presentations designed to meet your organization's unique needs.",
            service1_heading: "Digital Accessibility for All",
            service1_text: "Practical strategies for creating inclusive websites, apps, and digital content compliant with WCAG standards.",
            service2_heading: "Inclusive Leadership & Culture",
            service2_text: "Empowering leaders to foster psychological safety, belonging, and equitable opportunities within their teams.",
            service3_heading: "Neurodiversity in the Workplace",
            service3_text: "Understanding and supporting neurodivergent talent, creating environments where unique strengths flourish.",
            service4_heading: "Building Accessible Events",
            service4_text: "Guidance on planning and executing physical and virtual events that are welcoming and usable for everyone.",
            btn_learn_more: "Learn More →",
            testimonials_heading: "What Clients Say",
            testimonial1_text: "\"[Your Name]'s lecture on inclusive design was incredibly insightful and actionable. Our team left feeling inspired and equipped to make real changes!\"",
            testimonial1_cite: "— Jane Doe, Head of HR, Innovative Solutions Inc.",
            testimonial2_text: "\"The workshop transformed our understanding of accessibility. The content was engaging, and [Your Name]'s delivery was exceptional.\"",
            testimonial2_cite: "— John Smith, Director of Product, Global Tech Co.",
            resources_heading: "Resources & Insights",
            resources_description: "Stay informed with my latest articles, guides, and recommended tools.",
            resource1_heading: "The Ultimate Guide to Accessible Web Forms",
            resource1_text: "Learn how to design and code forms that are usable for everyone, regardless of ability.",
            resource2_heading: "Podcast: Why Inclusive Language Matters",
            resource2_text: "Tune into a discussion about the impact of language on inclusion and belonging.",
            btn_read_more: "Read More →",
            btn_listen_now: "Listen Now →",
            contact_heading: "Let's Talk About Your Needs",
            contact_description: "Ready to empower your team or organization? Fill out the form below or reach out directly.",
            form_name_label: "Your Name",
            form_name_placeholder: "Your Name",
            form_email_label: "Your Email",
            form_email_placeholder: "your.email@example.com",
            form_org_label: "Organization (Optional)",
            form_org_placeholder: "Your Organization",
            form_inquiry_label: "What are you looking for?",
            form_inquiry_placeholder: "Tell me about your needs",
            form_submit_btn: "Send Inquiry",
            contact_direct_p: "Prefer to connect directly? Email me at <a href=\"mailto:your.email@example.com\">your.email@example.com</a> or call <a href=\"tel:+1234567890\">+1 (234) 567-890</a>.",
            footer_copyright: "© 2023 [Your Name/Brand Name]. All rights reserved.",
            footer_privacy: "Privacy Policy",
            footer_accessibility: "Accessibility Statement",
            footer_terms: "Terms of Service",
        },
        sv: {
            page_title: "Stärk & Engagera: Inkluderande Utbildning",
            logo_text: "Stärk & Engagera",
            nav_about: "Om Mig",
            nav_topics: "Föreläsningsämnen",
            nav_testimonials: "Omdömen",
            nav_resources: "Resurser",
            nav_contact: "Kontakt",
            hero_heading: "Inspirera till Förändring för en Verkligt Inkluderande Värld",
            hero_subheading: "Expertföreläsningar och workshops om jämställdhet och tillgänglighet för organisationer, utbildare och ledare.",
            btn_book_lecture: "Boka Föreläsning",
            btn_explore_topics: "Utforska Ämnen",
            about_heading: "Om Mig",
            about_p1: "Hej! Jag är [Ditt Namn], en passionerad föreläsare dedikerad till att främja miljöer där alla hör hemma och kan frodas. Min resa inom jämställdhet och tillgänglighet började med [kort personlig anekdot eller motivation]. Jag tror på utbildningens kraft att bryta ner barriärer och bygga broar.",
            about_p2: "Med [X år] av erfarenhet och en bakgrund inom [Ditt Område/Examen] omvandlar jag komplexa koncept till handlingsbara strategier, vilket ger publiken möjlighet att skapa verkligt inkluderande utrymmen, vare sig de är digitala, fysiska eller kulturella.",
            btn_learn_more_about: "Läs Mer Om Min Berättelse",
            about_image_alt: "Professionell bild av [Ditt Namn], en vänlig och tillgänglig föreläsare.",
            services_heading: "Mina Föreläsningsämnen & Tjänster",
            services_description: "Anpassningsbara presentationer utformade för att möta din organisations unika behov.",
            service1_heading: "Digital Tillgänglighet för Alla",
            service1_text: "Praktiska strategier för att skapa inkluderande webbplatser, appar och digitalt innehåll som följer WCAG-standarder.",
            service2_heading: "Inkluderande Ledarskap & Kultur",
            service2_text: "Ge ledare möjlighet att främja psykologisk trygghet, tillhörighet och rättvisa möjligheter inom sina team.",
            service3_heading: "Neurodiversitet på Arbetsplatsen",
            service3_text: "Förstå och stödja neurodivergenta talanger, skapa miljöer där unika styrkor blomstrar.",
            service4_heading: "Skapa Tillgängliga Evenemang",
            service4_text: "Vägledning för att planera och genomföra fysiska och virtuella evenemang som är välkomnande och användbara för alla.",
            btn_learn_more: "Läs Mer →",
            testimonials_heading: "Vad Kunder Säger",
            testimonial1_text: "\"[Ditt Namn]s föreläsning om inkluderande design var otroligt insiktsfull och handlingsbar. Vårt team lämnade inspirerat och utrustat för att göra verkliga förändringar!\"",
            testimonial1_cite: "— Jane Svensson, HR-chef, Innovativa Lösningar AB",
            testimonial2_text: "\"Workshopen förändrade vår förståelse för tillgänglighet. Innehållet var engagerande, och [Ditt Namn]s leverans var exceptionell.\"",
            testimonial2_cite: "— Johan Karlsson, Produktchef, Global Tech AB",
            resources_heading: "Resurser & Insikter",
            resources_description: "Håll dig informerad med mina senaste artiklar, guider och rekommenderade verktyg.",
            resource1_heading: "Den Ultimata Guiden till Tillgängliga Webformulär",
            resource1_text: "Lär dig hur du designar och kodar formulär som är användbara för alla, oavsett förmåga.",
            resource2_heading: "Podcast: Varför Inkluderande Språk Är Viktigt",
            resource2_text: "Lyssna på en diskussion om språkets inverkan på inkludering och tillhörighet.",
            btn_read_more: "Läs Mer →",
            btn_listen_now: "Lyssna Nu →",
            contact_heading: "Låt Oss Prata Om Dina Behov",
            contact_description: "Redo att stärka ditt team eller din organisation? Fyll i formuläret nedan eller kontakta mig direkt.",
            form_name_label: "Ditt Namn",
            form_name_placeholder: "Ditt Namn",
            form_email_label: "Din E-post",
            form_email_placeholder: "din.epost@exempel.se",
            form_org_label: "Organisation (Valfritt)",
            form_org_placeholder: "Din Organisation",
            form_inquiry_label: "Vad söker du?",
            form_inquiry_placeholder: "Berätta om dina behov",
            form_submit_btn: "Skicka Förfrågan",
            contact_direct_p: "Föredrar du att kontakta mig direkt? Maila mig på <a href=\"mailto:your.email@example.com\">your.email@example.com</a> eller ring <a href=\"tel:+1234567890\">+1 (234) 567-890</a>.",
            footer_copyright: "© 2023 [Ditt Namn/Varumärke]. Alla rättigheter reserverade.",
            footer_privacy: "Integritetspolicy",
            footer_accessibility: "Tillgänglighetsförklaring",
            footer_terms: "Användarvillkor",
        }
    };

    const languageButtons = document.querySelectorAll('.lang-button');
    const htmlElement = document.documentElement;

    function updateContent(lang) {
        // Update elements with data-i18n attribute
        document.querySelectorAll('[data-i18n]').forEach(element => {
            const key = element.getAttribute('data-i18n');
            if (translations[lang] && translations[lang][key]) {
                element.innerHTML = translations[lang][key]; // Use innerHTML for cases with links/HTML within text
            }
        });

        // Update elements with data-i18n-alt attribute for image alt text
        document.querySelectorAll('[data-i18n-alt]').forEach(element => {
            const key = element.getAttribute('data-i18n-alt');
            if (translations[lang] && translations[lang][key]) {
                element.setAttribute('alt', translations[lang][key]);
            }
        });

        // Update elements with data-i18n-placeholder attribute for input placeholders
        document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
            const key = element.getAttribute('data-i18n-placeholder');
            if (translations[lang] && translations[lang][key]) {
                element.setAttribute('placeholder', translations[lang][key]);
            }
        });

        // Update the main HTML lang attribute for screen readers
        htmlElement.setAttribute('lang', lang);

        // Update active class and aria-checked for buttons
        languageButtons.forEach(button => {
            if (button.dataset.lang === lang) {
                button.classList.add('active');
                button.setAttribute('aria-checked', 'true');
            } else {
                button.classList.remove('active');
                button.setAttribute('aria-checked', 'false');
            }
        });

        // Store selected language in local storage
        localStorage.setItem('selectedLanguage', lang);
    }

    // Event listeners for language buttons
    languageButtons.forEach(button => {
        button.addEventListener('click', () => {
            const selectedLang = button.dataset.lang;
            updateContent(selectedLang);
        });
    });

    // Initial load: check for stored language, otherwise default to English
    const storedLanguage = localStorage.getItem('selectedLanguage');
    if (storedLanguage) {
        updateContent(storedLanguage);
    } else {
        updateContent('en'); // Default language
    }
});

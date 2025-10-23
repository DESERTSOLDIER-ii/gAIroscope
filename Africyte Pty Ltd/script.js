// Set current year in footer
document.getElementById('current-year').textContent = new Date().getFullYear();

// Mobile menu toggle
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const navLinks = document.querySelector('.nav-links');

if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
}

// Chat Bot functionality
const chatButton = document.querySelector('.chat-button');
const chatWindow = document.querySelector('.chat-window');
const chatBody = document.getElementById('chat-body');

if (chatButton) {
    chatButton.addEventListener('click', () => {
        chatWindow.style.display = chatWindow.style.display === 'flex' ? 'none' : 'flex';
    });
}

// Chat options and responses
const chatOptions = document.querySelectorAll('.option');

// Chat conversation data
const chatData = {
    products: {
        question: "Which product are you interested in?",
        options: [
            { text: "DEVFLOW", value: "devflow" },
            { text: "Locallo", value: "locallo" },
            { text: "gAIroscope", value: "gairoscope" },
            { text: "IT & Support", value: "itsupport" },
            { text: "Done", value: "done" }
        ]
    },
    services: {
        question: "Which service would you like to know more about?",
        options: [
            { text: "Custom Software Development", value: "custom-software" },
            { text: "Web & Mobile App Design", value: "app-design" },
            { text: "Marketplace Integration", value: "marketplace" },
            { text: "AI & Data Solutions", value: "ai-solutions" },
            { text: "IT Consulting", value: "it-consulting" },
            { text: "Maintenance & Management", value: "maintenance" },
            { text: "Done", value: "done" }
        ]
    },
    careers: {
        question: "What would you like to know about careers at Africyte?",
        options: [
            { text: "Current Openings", value: "openings" },
            { text: "Company Culture", value: "culture" },
            { text: "Application Process", value: "application" },
            { text: "Internships", value: "internships" },
            { text: "Done", value: "done" }
        ]
    },
    partnerships: {
        question: "What type of partnership are you interested in?",
        options: [
            { text: "Business Partnerships", value: "business" },
            { text: "Technology Partnerships", value: "technology" },
            { text: "Community Initiatives", value: "community" },
            { text: "Investment Opportunities", value: "investment" },
            { text: "Done", value: "done" }
        ]
    },
    devflow: {
        response: "DEVFLOW is our full-stack development studio that delivers software, web, and app solutions. We specialize in product design, prototyping, and creating scalable digital solutions for businesses of all sizes.",
        options: [
            { text: "Contact DEVFLOW Team", value: "contact-devflow" },
            { text: "Request Consultation", value: "consultation" },
            { text: "Back to Products", value: "products" },
            { text: "Done", value: "done" }
        ]
    },
    locallo: {
        response: "Locallo is our digital marketplace that empowers local traders to sell professionally online. We provide verification, fast delivery, marketing support, and safe payment systems to help small businesses thrive.",
        options: [
            { text: "Become a Seller", value: "seller" },
            { text: "Contact Locallo Team", value: "contact-locallo" },
            { text: "Back to Products", value: "products" },
            { text: "Done", value: "done" }
        ]
    },
    gairoscope: {
        response: "gAIroscope is our AI-powered market prediction platform that delivers real-time analytics and trading signals. It helps traders and investors make data-driven decisions with confidence.",
        options: [
            { text: "Request Demo", value: "demo" },
            { text: "Contact gAIroscope Team", value: "contact-gairoscope" },
            { text: "Back to Products", value: "products" },
            { text: "Done", value: "done" }
        ]
    },
    itsupport: {
        response: "Our IT & Support services provide professional consulting, infrastructure management, and system solutions. We ensure reliable, scalable operations with 24/7 support for your business needs.",
        options: [
            { text: "Request Consultation", value: "consultation" },
            { text: "Contact IT Support", value: "contact-itsupport" },
            { text: "Back to Products", value: "products" },
            { text: "Done", value: "done" }
        ]
    },
    // Contact responses
    "contact-devflow": {
        response: "For DEVFLOW inquiries, please contact our development team at info@devflow.co.za. We'll get back to you within 24 hours to discuss your project requirements.",
        options: [
            { text: "Back to Products", value: "products" },
            { text: "Done", value: "done" }
        ]
    },
    "contact-locallo": {
        response: "For Locallo seller applications or business inquiries, please email info@locallo.co.za. Our team will guide you through the onboarding process.",
        options: [
            { text: "Back to Products", value: "products" },
            { text: "Done", value: "done" }
        ]
    },
    "contact-gairoscope": {
        response: "For gAIroscope demonstrations or technical inquiries, please contact info@gairoscope.co.za. Our AI specialists will schedule a personalized demo.",
        options: [
            { text: "Back to Products", value: "products" },
            { text: "Done", value: "done" }
        ]
    },
    "contact-itsupport": {
        response: "For IT support and consulting services, please reach out to info@africyte.co.za. Our technical team will assess your requirements and provide tailored solutions.",
        options: [
            { text: "Back to Products", value: "products" },
            { text: "Done", value: "done" }
        ]
    },
    // Career responses
    openings: {
        response: "We're currently looking for:\n• Administrators with computer skills\n• Software Developers (Frontend & Backend)\n• Delivery Drivers for Locallo\n• IT Support Specialists\n\nSend your CV to careers@africyte.co.za",
        options: [
            { text: "Application Process", value: "application" },
            { text: "Company Culture", value: "culture" },
            { text: "Back to Careers", value: "careers" },
            { text: "Done", value: "done" }
        ]
    },
    culture: {
        response: "At Africyte, we foster a collaborative environment where innovation thrives. We value diversity, continuous learning, and work-life balance. Our team is passionate about creating technology that makes a real difference.",
        options: [
            { text: "Current Openings", value: "openings" },
            { text: "Application Process", value: "application" },
            { text: "Back to Careers", value: "careers" },
            { text: "Done", value: "done" }
        ]
    },
    application: {
        response: "Our hiring process:\n1. Submit your CV to careers@africyte.co.za\n2. Initial phone screening\n3. Technical assessment\n4. Team interview\n5. Offer and onboarding\n\nWe aim to respond to all applications within 5 business days.",
        options: [
            { text: "Current Openings", value: "openings" },
            { text: "Company Culture", value: "culture" },
            { text: "Back to Careers", value: "careers" },
            { text: "Done", value: "done" }
        ]
    },
    internships: {
        response: "We offer internship opportunities for students and recent graduates looking to gain experience in technology. While we don't have specific internship openings listed currently, we welcome applications from passionate individuals. Send your CV and cover letter to careers@africyte.co.za",
        options: [
            { text: "Current Openings", value: "openings" },
            { text: "Application Process", value: "application" },
            { text: "Back to Careers", value: "careers" },
            { text: "Done", value: "done" }
        ]
    },
    // Service responses
    "custom-software": {
        response: "Our custom software development service creates tailored solutions for your business needs. From enterprise systems to specialized applications, we deliver robust, scalable software. Contact info@africyte.co.za for consultation.",
        options: [
            { text: "Back to Services", value: "services" },
            { text: "Request Consultation", value: "consultation" },
            { text: "Done", value: "done" }
        ]
    },
    "app-design": {
        response: "We design and develop responsive web and mobile applications with intuitive user interfaces and seamless user experiences. Our design process focuses on your business goals and user needs. Contact info@africyte.co.za to discuss your project.",
        options: [
            { text: "Back to Services", value: "services" },
            { text: "Request Consultation", value: "consultation" },
            { text: "Done", value: "done" }
        ]
    },
    "marketplace": {
        response: "Our marketplace integration services help businesses create powerful online platforms connecting buyers and sellers. We handle everything from vendor onboarding to payment processing and logistics. Contact info@africyte.co.za for integration support.",
        options: [
            { text: "Back to Services", value: "services" },
            { text: "Request Consultation", value: "consultation" },
            { text: "Done", value: "done" }
        ]
    },
    "ai-solutions": {
        response: "We develop AI and data solutions that help businesses gain insights, automate processes, and make data-driven decisions. Our services include predictive analytics, machine learning models, and business intelligence. Contact info@africyte.co.za to explore AI solutions.",
        options: [
            { text: "Back to Services", value: "services" },
            { text: "Request Consultation", value: "consultation" },
            { text: "Done", value: "done" }
        ]
    },
    "it-consulting": {
        response: "Our IT consulting services help businesses optimize their technology infrastructure, plan digital transformation, and implement efficient systems. We provide strategic guidance tailored to your business objectives. Contact info@africyte.co.za for IT consulting.",
        options: [
            { text: "Back to Services", value: "services" },
            { text: "Request Consultation", value: "consultation" },
            { text: "Done", value: "done" }
        ]
    },
    "maintenance": {
        response: "We offer comprehensive maintenance and technical management services to keep your systems running smoothly. This includes monitoring, updates, security patches, and performance optimization. Contact info@africyte.co.za for maintenance plans.",
        options: [
            { text: "Back to Services", value: "services" },
            { text: "Request Consultation", value: "consultation" },
            { text: "Done", value: "done" }
        ]
    },
    // Partnership responses
    business: {
        response: "Business partnership opportunities are currently being reviewed. Please contact info@africyte.co.za with your proposal, and our partnerships team will get back to you.",
        options: [
            { text: "Back to Partnerships", value: "partnerships" },
            { text: "Done", value: "done" }
        ]
    },
    technology: {
        response: "For technology partnerships involving integration, co-development, or technical collaboration, please contact info@africyte.co.za with details about your technology and proposed partnership.",
        options: [
            { text: "Back to Partnerships", value: "partnerships" },
            { text: "Done", value: "done" }
        ]
    },
    community: {
        response: "We're always interested in community initiatives that align with our mission of digital inclusion. For community partnerships, please email info@africyte.co.za with information about your initiative.",
        options: [
            { text: "Back to Partnerships", value: "partnerships" },
            { text: "Done", value: "done" }
        ]
    },
    investment: {
        response: "For investment opportunities in Africyte or our products, please contact info@africyte.co.za with your investment profile and areas of interest. Our executive team will review your inquiry.",
        options: [
            { text: "Back to Partnerships", value: "partnerships" },
            { text: "Done", value: "done" }
        ]
    },
    // Special cases
    seller: {
        response: "To become a Locallo seller, please send your business details to info@locallo.co.za. We'll guide you through the verification process and help you set up your digital storefront.",
        options: [
            { text: "Back to Locallo", value: "locallo" },
            { text: "Done", value: "done" }
        ]
    },
    demo: {
        response: "gAIroscope demonstrations are currently being scheduled. Please contact info@gairoscope.co.za to request a demo, and our team will arrange a personalized session.",
        options: [
            { text: "Back to gAIroscope", value: "gairoscope" },
            { text: "Done", value: "done" }
        ]
    },
    consultation: {
        response: "For consultation requests, please email info@africyte.co.za with your requirements. Our specialists will contact you to schedule a meeting and discuss how we can help your business.",
        options: [
            { text: "Back", value: "back" },
            { text: "Done", value: "done" }
        ]
    }
};

// Handle option clicks
if (chatOptions.length > 0) {
    chatOptions.forEach(option => {
        option.addEventListener('click', () => {
            const optionValue = option.getAttribute('data-option');
            handleChatOption(optionValue, option.textContent);
        });
    });
}

function handleChatOption(value, text) {
    // Add user message
    addMessage(text, 'user-option');
    
    // Handle "Done" option
    if (value === 'done') {
        setTimeout(() => {
            addMessage("Thanks for chatting with me! Is there anything else I can help you with?", 'bot-message');
            addOptions([
                { text: "Our Products", value: "products" },
                { text: "Our Services", value: "services" },
                { text: "Careers", value: "careers" },
                { text: "Partnerships", value: "partnerships" }
            ]);
        }, 500);
        return;
    }
    
    // Handle "Back" option
    if (value === 'back') {
        setTimeout(() => {
            addMessage("What would you like to know about?", 'bot-message');
            addOptions([
                { text: "Our Products", value: "products" },
                { text: "Our Services", value: "services" },
                { text: "Careers", value: "careers" },
                { text: "Partnerships", value: "partnerships" }
            ]);
        }, 500);
        return;
    }
    
    // Handle regular options
    if (chatData[value]) {
        setTimeout(() => {
            if (chatData[value].question) {
                addMessage(chatData[value].question, 'bot-message');
                addOptions(chatData[value].options);
            } else if (chatData[value].response) {
                addMessage(chatData[value].response, 'bot-message');
                addOptions(chatData[value].options);
            }
        }, 500);
    } else {
        // Default response for undefined options
        setTimeout(() => {
            addMessage("I'm still learning about this topic. Please contact info@africyte.co.za for more specific information.", 'bot-message');
            addOptions([
                { text: "Our Products", value: "products" },
                { text: "Our Services", value: "services" },
                { text: "Careers", value: "careers" },
                { text: "Partnerships", value: "partnerships" },
                { text: "Done", value: "done" }
            ]);
        }, 500);
    }
}

function addMessage(text, className) {
    const messageDiv = document.createElement('div');
    messageDiv.className = `chat-message ${className}`;
    
    // Handle line breaks in text
    const formattedText = text.replace(/\n/g, '<br>');
    messageDiv.innerHTML = formattedText;
    
    chatBody.appendChild(messageDiv);
    chatBody.scrollTop = chatBody.scrollHeight;
}

function addOptions(options) {
    const optionsContainer = document.createElement('div');
    optionsContainer.className = 'chat-options';
    
    options.forEach(option => {
        const optionDiv = document.createElement('div');
        optionDiv.className = 'option';
        optionDiv.textContent = option.text;
        optionDiv.setAttribute('data-option', option.value);
        optionDiv.addEventListener('click', () => {
            handleChatOption(option.value, option.text);
        });
        optionsContainer.appendChild(optionDiv);
    });
    
    chatBody.appendChild(optionsContainer);
    chatBody.scrollTop = chatBody.scrollHeight;
}

// Scroll animation for elements
const fadeElements = document.querySelectorAll('.fade-in');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            
            // Animate counters if it's a counter element
            if (entry.target.querySelector('.counter')) {
                animateCounter(entry.target);
            }
            
            // Animate chart bars
            if (entry.target.classList.contains('comparison-chart')) {
                animateChartBars();
            }
        }
    });
}, { threshold: 0.1 });

fadeElements.forEach(el => observer.observe(el));

// Counter animation
function animateCounter(element) {
    const counters = element.querySelectorAll('.counter');
    
    counters.forEach(counter => {
        const target = +counter.getAttribute('data-target');
        if (!target) return;
        
        let count = 0;
        const increment = target / 100;
        const timer = setInterval(() => {
            count += increment;
            if (count >= target) {
                counter.textContent = target.toLocaleString() + '+';
                clearInterval(timer);
            } else {
                counter.textContent = Math.floor(count).toLocaleString();
            }
        }, 20);
    });
}

// Chart bar animation
function animateChartBars() {
    const bars = document.querySelectorAll('.bar');
    
    bars.forEach(bar => {
        if (bar.classList.contains('bar-traditional')) {
            bar.style.height = '60%';
        } else if (bar.classList.contains('bar-africyte')) {
            bar.style.height = '100%';
        }
    });
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
            
            // Close mobile menu if open
            if (navLinks) {
                navLinks.classList.remove('active');
            }
        }
    });
});

// Initialize chart bars with 0 height
document.addEventListener('DOMContentLoaded', function() {
    const bars = document.querySelectorAll('.bar');
    bars.forEach(bar => {
        bar.style.height = '0';
    });
    
    // FAQ functionality
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        
        question.addEventListener('click', () => {
            // Close all other items
            faqItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove('active');
                }
            });
            
            // Toggle current item
            item.classList.toggle('active');
        });
    });
    
    // Contact form handling
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(this);
            const data = Object.fromEntries(formData);
            
            // Show success message
            alert('Thank you for your message! We will get back to you soon.');
            this.reset();
        });
    }
    
    // Initialize all animations
    initializeAnimations();
});

function initializeAnimations() {
    // Initialize any additional animations needed for the new pages
    const animatedElements = document.querySelectorAll('.fade-in');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });
    
    animatedElements.forEach(el => observer.observe(el));
}

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        if (navLinks.classList.contains('active')) {
            navLinks.classList.remove('active');
        }
    });
});

// Close chat when clicking outside
document.addEventListener('click', (e) => {
    if (chatWindow && chatWindow.style.display === 'flex') {
        if (!chatWindow.contains(e.target) && !chatButton.contains(e.target)) {
            chatWindow.style.display = 'none';
        }
    }
});

// Enhanced mobile menu close on outside click
document.addEventListener('click', (e) => {
    if (navLinks && navLinks.classList.contains('active')) {
        if (!navLinks.contains(e.target) && !mobileMenuBtn.contains(e.target)) {
            navLinks.classList.remove('active');
        }
    }
});
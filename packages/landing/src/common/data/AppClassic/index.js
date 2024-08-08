/* appClassic dummy data list :-
- Navbar
- Client
- Key Feature section
- App Slider
- Features section
- Design and built
- Feature tab
- Pricing policy
- Testimonial section
- Faq section
- Join slack
- Footer
  - widget
  - logo
  - menu
  - copyright 
*/

/* ------------------------------------ */
// Navbar data section
/* ------------------------------------ */
import logo from 'common/assets/image/appClassic/logo.png'

export const navbar = {
    logo: logo, navMenu: [{
        id: 1, label: 'Home', path: '#home', offset: '84',
    }, {
        id: 2, label: 'Features', path: '#features', offset: '84',
    }, {
        id: 3, label: 'Download', path: '#pricing', offset: '84',
    }, {
        id: 4, label: 'How to', path: '#faq', offset: '80',
    }, {
        id: 5, label: 'Testimonials', path: '#testimonial', offset: '80',
    },],
}

/* ------------------------------------ */
// client data section
/* ------------------------------------ */
import client1 from 'common/assets/image/appClassic/client1.svg'
import client2 from 'common/assets/image/appClassic/client2.svg'
import client3 from 'common/assets/image/appClassic/client3.svg'
import client4 from 'common/assets/image/appClassic/client4.svg'

export const client = [{
    id: 1, image: client1, title: 'The new york times',
}, {
    id: 2, image: client2, title: 'amazon',
}, {
    id: 3, image: client3, title: 'evernote',
}, {
    id: 4, image: client4, title: 'the verge',
},]

/* ------------------------------------ */
// Key Features data section
/* ------------------------------------ */
import keyFeature1 from 'common/assets/image/appClassic/keyFeature-1.svg'
import keyFeature2 from 'common/assets/image/appClassic/keyFeature-2.svg'
import keyFeature3 from 'common/assets/image/appClassic/keyFeature-3.svg'

export const keyFeatures = {
    slogan: 'WHATS THE FUNCTION', title: 'Meet the feature of app', features: [{
        id: 1,
        color: '#F55767',
        icon: keyFeature1,
        title: 'Fast Performance',
        description: 'Get your blood tests delivered at home collect a sample from the news your blood tests.',
    }, {
        id: 2,
        color: '#2563FF',
        icon: keyFeature2,
        title: 'Prototyping',
        description: 'Get your blood tests delivered at home collect a sample from the news your blood tests.',
    }, {
        id: 3,
        color: '#40975F',
        icon: keyFeature3,
        title: 'Vector Editing',
        description: 'Get your blood tests delivered at home collect a sample from the news your blood tests.',
    },],
}

/* ------------------------------------ */
// App slider data section
/* ------------------------------------ */
import appSlide1 from 'common/assets/image/appClassic/appSlider1.png'
import appSlide2 from 'common/assets/image/appClassic/appSlider2.png'
import appSlide3 from 'common/assets/image/appClassic/appSlider3.png'
import appSlide4 from 'common/assets/image/appClassic/appSlider4.png'
import appAthlete from 'common/assets/image/appClassic/appAthlete.png'
import appCoach from 'common/assets/image/appClassic/appCoach.png'

export const appSlider = {
    carousel: [{
        id: 1, image: appSlide1, title: 'App Slide 1',
    }, {
        id: 2, image: appSlide2, title: 'App Slide 2',
    }, {
        id: 3, image: appSlide3, title: 'App Slide 3',
    }, {
        id: 4, image: appSlide4, title: 'App Slide 4',
    },
],
    title: 'Mobile App Features',
    description: "At ORIENTEERING.PRO, we are proud to introduce our two cutting-edge mobile applications designed to revolutionize the way coaches create routes and athletes engage with orienteering.",
    features: [{
        id: 1,
        image: appAthlete,
        title: 'ATHLETE',
        description: 'Embark on your orienteering journey with our Athlete app, designed to enrich your training with AR Control Points (CPs) and real-time tracking. Elevate your runs and celebrate each victory with medals, all through an intuitive interface.',
    }, {
        id: 2,
        image: appCoach,
        title: 'COACH',
        description: 'The Coach app streamlines route creation with AR, offering a novel way to engage athletes and a platform for monetizing your courses. Set routes, earn rewards, and track athlete progress with ease.',
    },],
}

/* ------------------------------------ */
// Features data section
/* ------------------------------------ */
import featureIcon1 from 'common/assets/image/appClassic/featureIcon-1.svg'
import featureIcon2 from 'common/assets/image/appClassic/featureIcon-2.svg'
import featureIcon3 from 'common/assets/image/appClassic/featureIcon-3.svg'
import featureIcon4 from 'common/assets/image/appClassic/featureIcon-4.svg'
import featureIcon5 from 'common/assets/image/appClassic/featureIcon-5.svg'
import featureIcon6 from 'common/assets/image/appClassic/featureIcon-6.svg'

export const features = {
    slogan: 'PRODUCT COMPARISON', title: 'Why you choose our App', items: [{
        id: 1,
        color: '#F55767',
        icon: featureIcon1,
        title: 'App Development',
        description: 'Get your proof tests delivered home collect a sample from the news get design.',
    }, {
        id: 2,
        color: '#3DABDD',
        icon: featureIcon2,
        title: '10 Times Award',
        description: 'Get your proof tests delivered home collect a sample from the news get design.',
    }, {
        id: 3,
        color: '#D6AB00',
        icon: featureIcon3,
        title: 'Cloud Storage',
        description: 'Get your proof tests delivered home collect a sample from the news get design.',
    }, {
        id: 4,
        color: '#40975F',
        icon: featureIcon4,
        title: 'Customization',
        description: 'Get your proof tests delivered home collect a sample from the news get design.',
    }, {
        id: 5,
        color: '#5856D6',
        icon: featureIcon5,
        title: 'UX Planning',
        description: 'Get your proof tests delivered home collect a sample from the news get design.',
    }, {
        id: 6,
        color: '#E97325',
        icon: featureIcon6,
        title: 'Customer Support',
        description: 'Get your proof tests delivered home collect a sample from the news get design.',
    },],
}

/* ------------------------------------ */
// Design and built data section
/* ------------------------------------ */
import builtLogo from 'common/assets/image/appClassic/appAndMap.png'

export const designAndBuilt = {
    image: builtLogo,
    title: 'Designed & Built by the latest code integration',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit sed eiusmod tempor incididunt labore dolore features that Lorem ipsum dolor sit amet consectetur.',
}

/* ------------------------------------ */
// Feature tab data section
/* ------------------------------------ */
import appTabIcon1 from 'common/assets/image/appClassic/appTabIcon1.svg'
import appTabIcon2 from 'common/assets/image/appClassic/appTabIcon2.svg'
import appTabIcon3 from 'common/assets/image/appClassic/appTabIcon3.svg'
import appTabIcon4 from 'common/assets/image/appClassic/appTabIcon4.svg'
import appTabIcon5 from 'common/assets/image/appClassic/appTabIcon5.svg'
import appTabIcon6 from 'common/assets/image/appClassic/appTabIcon6.svg'
// image
import appTabImg1 from 'common/assets/image/appClassic/appTabImg1.png'
import appTabImg2 from 'common/assets/image/appClassic/appTabImg2.png'
import appTabImg3 from 'common/assets/image/appClassic/appTabImg3.png'
import appTabImg4 from 'common/assets/image/appClassic/appTabImg4.png'
import appTabImg5 from 'common/assets/image/appClassic/appTabImg5.png'
import appTabImg6 from 'common/assets/image/appClassic/appTabImg6.png'

export const featuresTab = {
    slogan: 'DIFFERENTIATION', title: 'Ultimate features that we built', tab: [{
        id: 1,
        color: '#F55767',
        icon: appTabIcon1,
        title: 'App Development',
        description: 'Get your proof tests delivered home collect a sample.',
        image: appTabImg1,
    }, {
        id: 2,
        color: '#40975F',
        icon: appTabIcon2,
        title: 'Customization',
        description: 'Get your proof tests delivered home collect a sample.',
        image: appTabImg2,
    }, {
        id: 3,
        color: '#5856D6',
        icon: appTabIcon3,
        title: 'UX Planning',
        description: 'Get your proof tests delivered home collect a sample.',
        image: appTabImg3,
    }, {
        id: 4,
        color: '#D6AB00',
        icon: appTabIcon4,
        title: 'Cloud Storage',
        description: 'Get your proof tests delivered home collect a sample.',
        image: appTabImg4,
    }, {
        id: 5,
        color: '#E97325',
        icon: appTabIcon5,
        title: 'Customer Support',
        description: 'Get your proof tests delivered home collect a sample.',
        image: appTabImg5,
    }, {
        id: 6,
        color: '#3DABDD',
        icon: appTabIcon6,
        title: '10 Times Award',
        description: 'Get your proof tests delivered home collect a sample.',
        image: appTabImg6,
    },],
}

/* ------------------------------------ */
// Pricing policy data section
/* ------------------------------------ */
export const download = {
    title: 'DOWNLOAD', athlete: {
        id: 1, title: 'Athlete app', description: 'For dynamic sports route exploration.', features: [{
            id: 1, text: 'Install the athlete app',
        }, {
            id: 2, text: "Top up your account (OPTIONAL)",
        }, {
            id: 3, text: 'Choose a route',
        }, {
            id: 4, text: 'RUN!',
        },],
    }, coach: {
        id: 1, title: 'Coach app', description: 'For creating competitive orienteering routes', features: [{
            id: 1, text: 'Install the Coach app',
        }, {
            id: 2, text: "Set Control Points as AR objects(EASY)",
        }, {
            id: 3, text: 'Set a route',
        }, {
            id: 4, text: 'Set route price and earn or keep it free',
        },],
    },
}

/* ------------------------------------ */
// Testimonial data section
/* ------------------------------------ */
export const testimonial = {
    title: 'We LOVE orienteering!', reviews: [{
        id: 1,
        title: 'Modern look & trending design',
        description: 'Get working experience to work with this amazing team & in future want to work together for bright future projects and also make deposit to freelancer.',
        avatar: 'https://pbs.twimg.com/profile_images/974736784906248192/gPZwCbdS.jpg',
        name: 'Jon Doe',
        designation: 'CEO of RedQ Inc.',
        review: 4,
    }, {
        id: 2,
        title: 'User friendly & Customizable',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit sed eiusmod tempor incididunt labore dolore features Lorem ipsum dolor sit amet consectetur adipisicing.',
        avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
        name: 'Jeny Doe',
        designation: 'Co Founder of RedQ Inc.',
        review: 5,
    }, {
        id: 3,
        title: 'User friendly & Customizable',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit sed eiusmod tempor incididunt labore dolore features Lorem ipsum dolor sit amet consectetur adipisicing.',
        avatar: 'https://randomuser.me/api/portraits/men/44.jpg',
        name: 'Jon Doe',
        designation: 'Co Founder of RedQ Inc.',
        review: 5,
    },],
}

/* ------------------------------------ */
// Faq data section
import testGif from 'common/assets/image/appClassic/farTESTgif.gif'
/* ------------------------------------ */
export const faq = {
    slogan: 'FREQUENT QUESTION', title: 'HOW TO', faqs: {
        athlete: [{
            id: 1,
            question: 'How to change km to miles?',
            videoUrl: "https://www.youtube.com/embed/Q3DZT9hju7A?si=FkhuNQ5wnpVAH9Pz",
        }, {
            id: 2,
            question: 'How to change the app language?',
            videoUrl: "https://www.youtube.com/embed/FeynIEpPNXY?si=-GnAtFygjsbVWnCc",
        }, {
            id: 3, question: 'How to change my nick and photo in the app?',
            videoUrl: "https://www.youtube.com/embed/iDKDQREhe1c?si=tw3GtW61XmanmUaB",
        }, {
            id: 4,
            question: 'What the symbols on the Route Plaque mean?',
            videoUrl: "https://www.youtube.com/embed/3E6H_d98sTU?si=g1fKeyFOqgNCPVtR",
        }, {
            id: 5,
            question: 'How to view route comments?',
            videoUrl: "https://www.youtube.com/embed/OeE2Y5RiyHQ?si=pYhdCAf8B6GHuXYx",
        }, {
            id: 6,
            question: 'How to ask a Question?',
            videoUrl: "https://www.youtube.com/embed/mEqW6qrQy_4?si=xEYPWZiWAqCDIgsl",
        }, {
            id: 7,
            question: 'How to Share a route?',
           videoUrl:"https://www.youtube.com/embed/xWYav5DbLqg?si=tn4wgK5m1erAFBun",
        }, {
            id: 8,
            question: 'How to Choose the right route for me?',
            videoUrl: "https://www.youtube.com/embed/Fp3p6TAN0DY?si=gDxjucBpyvlUVu5B",
        },  {
            id: 9,
            question: "How to find My Coach's routes?",
            videoUrl: "https://www.youtube.com/embed/2ukgI2gsorQ?si=lkyAOtEcwZ-L2X-w",
        }, {
            id: 10,
            question: "How to use the Map, Compass and Ruler in the app?",
            videoUrl: "https://www.youtube.com/embed/-4CGne8sg8A?si=G9cftnf0bq0QMFoo",
        }, {
            id: 11,
            question: "How to use the Hint to find the next control point?",
            videoUrl: "https://www.youtube.com/embed/7Rc7nv3xQg4?si=9GDuE2T7kYB46yAw",
        }, {
            id: 12,
            question: "What to do if I GET LOST?",
            videoUrl: "https://www.youtube.com/embed/B96gv20wXoo?si=mdudKnJYo_dW-JTx",
        }, {
            id: 13,
            question: "How to find the Starting Control Point of a route?",
            videoUrl: "https://www.youtube.com/embed/9purlnAMkDg?si=rbQiBt1khMW5PhMH",
        }, {
            id: 14,
            question: "How to open a Closed route?",
            videoUrl: "https://www.youtube.com/embed/dppp6Ey7frQ?si=sMcTnJQEy9DaJw5b",
        }, {
            id: 15,
            question: "How to Get Off the route?",
            videoUrl: "https://www.youtube.com/embed/1JocAxkKyjQ?si=0IiqAmomZH9S8Wjp",
        }, {
            id: 16,
            question: "How to Analyze an Athlete's Performance on a route?",
            videoUrl: "https://www.youtube.com/embed/NlS62_izVbM?si=rphn-zd1lIxKOo4F",
        }, {
            id: 17,
            question: "What the symbols on the Medal mean?",
            videoUrl: "https://www.youtube.com/embed/lJboLMt1lIo?si=qGU77mgd_tSqFAak",
        },], coach: [{
            id: 1,
            question: 'How to set up a Control Point?',
            videoUrl: "https://www.youtube.com/embed/FlhBn2UOx8Q?si=nKWGihZaIpMJZrQ4",
        }, {
            id: 2,
            question: 'How to set up an Open route?',
            videoUrl: "https://www.youtube.com/embed/HYuBqK0HVh0?si=detRULwk_vcOpSKF",
        }, {
            id: 3, question: 'How to set up a Closed route?',
            videoUrl: "https://www.youtube.com/embed/IgLeIqLabQY?si=KdS36CSUoP69-p0y",
        }, {
            id: 4,
            question: 'How to delete a route?',
            videoUrl: "https://www.youtube.com/embed/14IV_mi-nQk?si=KHfRzJmhGph5u61U",
        },],
    },


}

/* ------------------------------------ */
// Join Slack data section
/* ------------------------------------ */
import slackLogo from 'common/assets/image/appClassic/slack.png'

export const joinSlack = {
    logo: slackLogo,
    title: 'Start your 30 days free trail today!',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit sed eiusmod tempor incididunt labore dolore.',
}

/* ------------------------------------ */
// Footer data section
/* ------------------------------------ */
import chat from 'common/assets/image/appClassic/chat.svg'
import group from 'common/assets/image/appClassic/group.svg'
import cooperation from 'common/assets/image/appClassic/cooperation.svg'
import buyMeACoffee from 'common/assets/image/appClassic/buyMeACoffee.png'

export const footer = {
    widgets: [{
        id: 1,
        icon: chat,
        link:"https://t.me/official_orienteering_pro/3",
        title: 'Ask Support', // description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit sed eiusmod tempor incididunt labore dolore.',
    }, {
        id: 2,
        icon: group,
        link:'https://t.me/official_orienteering_pro',
        title: 'Join community', // description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit sed eiusmod tempor incididunt labore dolore.',
    }, {
        id: 3,
        icon: cooperation,
        title: 'Offer cooperation',
        link: "https://t.me/zzrklmn",
        // description: 'We love  orienteering! Help us share our  LOVE!',
    }, {
        id: 4,
        icon: buyMeACoffee,
        link:'https://s.binance.com/Ug9JpUDL',
        title: 'Donate Project', // description: 'We love  orienteering! Help us share our  LOVE!',
    },], 
    
    logo: logo, menu: [{
        id: 1, text: 'Home', link: '#',path: '#home', offset: '84',
    }, {
        id: 2, text: 'Features', link: '#', path: '#features', offset: '84',
    }, {
        id: 3, text: 'Download', link: '#',path: '#pricing', offset: '84',
    }, {
        id: 4, text: 'How To', link: '#',path: '#faq', offset: '80',
    }, {
        id: 5, text: 'Testimonials', link: '#', path: '#testimonial', offset: '80',
    },],
}

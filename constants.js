import shopify from '@/public/page-landing/marquee/shopify.png'
import avatar from '@/public/page-landing/marquee/avatar.png'
import eventbrite from '@/public/page-landing/marquee/eventbrite.png'
import deezer from '@/public/page-landing/marquee/deezer.png'
import squarespace from '@/public/page-landing/marquee/squarespace.png'

// Form validation rules
export const VALIDATION_RULES = {
    email: {
        required: 'E-posta alanı zorunludur',
        pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: 'Geçerli bir e-posta adresi giriniz'
        }
    },
    password: {
        required: 'Şifre alanı zorunludur',
        minLength: {
            value: 6,
            message: 'Şifre en az 6 karakter olmalıdır'
        }
    },
    required: (fieldName) => ({ required: `${fieldName} zorunludur` })
}

// Configuration constants
export const SCALING_CONFIG = {
    hero: {
        referenceWidth: 2200,
        referenceHeight: 1200,
        minScale: 0.35,
        maxScale: 1.0,
        containerSize: { width: 500, height: 570 }
    },
    section2: {
        referenceWidth: 2200,
        referenceHeight: 1200,
        minScale: 0.4,
        maxScale: 1.0,
        containerSize: { width: 1800, height: 600 }
    }
}

export const HERO_ELEMENTS_CONFIG = {
    avatar: {
        width: 500,
        height: 500,
        transform: 'translate(-50%, -50%)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    button1: {
        width: 400,
        bottom: -18,
        left: -272
    },
    button2: {
        width: 320,
        bottom: -100,
        left: -152
    },
    productCard: {
        width: 600,
        bottom: -250,
        right: -300
    },
    statsCard: {
        width: 600,
        top: -40,
        left: -300
    },
    semiRounded2: {
        width: 270,
        top: -8,
        right: -180
    },
    semiRounded1: {
        width: 150,
        top: 200,
        right: -250
    }
}

export const SECTION2_ELEMENTS_CONFIG = {
    table1: {
        width: 700,
        height: 280,
        left: 0,
        top: '35%',
        zIndex: 5,
        transform: 'translateX(0%) translateY(50%)'
    },
    table2: {
        width: 850,
        height: 230,
        left: '33%',
        top: '15%',
        transform: 'translateX(-40%)',
        zIndex: 4
    },
    table3: {
        width: 800,
        height: 200,
        left: '33%',
        top: '64%',
        transform: 'translateX(-50%) translateY(20%)',
        zIndex: 5
    },
    cardGoogleAnalytics: {
        width: 225,
        height: 100,
        right: '9%',
        top: '29%',
        zIndex: 5
    },
    cardShopify: {
        width: 225,
        height: 100,
        right: '15%',
        top: '50%',
        transform: 'translateX(140%)',
        zIndex: 5
    }
}

export const MARQUEE_ITEMS = [
    {
        id: 1,
        image: shopify
    },
    {
        id: 2,
        image: avatar
    },
    {
        id: 3,
        image: eventbrite
    },
    {
        id: 4,
        image: avatar
    },
    {
        id: 5,
        image: deezer
    },
    {
        id: 6,
        image: avatar
    },
    {
        id: 7,
        image: squarespace
    }

]
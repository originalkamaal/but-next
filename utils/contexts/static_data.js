
import AccountManagementIcon from '../../assets/AccountManagementIcon.png';
import AdsAndDMIcon from '../../assets/AdsAndDMIcon.png';
import AppDevIcon from '../../assets/AppDevIcon.png';
import ListingAndCatalogingIcon from '../../assets/ListingAndCatalogingIcon.png';
import NewAccountRegistrationIcon from '../../assets/NewAccountRegistrationIcon.png';
import ProductPhotographyIcon from '../../assets/ProductPhotographyIcon.png';
import SellerReinstatementIcon from '../../assets/SellerReinstatementIcon.png';
import SellerTrainingIcon from '../../assets/SellerTrainingIcon.png';

export const platforms = [
    {
        name : 'Flipkart',
        web: 'https://flipkart.com',
        description : '',
        key : 'FK'
    },
    {
        name : 'Amazon India',
        web:'https://amazon.in',
        description : '',
        key : 'AZ'
    },
    {
        name : 'Paytm',
        web:'https://paytmmall.com',
        description : '',
        key : 'PT'
    },
    {
        name : 'Meesho',
        web:'https://paytmmall.com',
        description : '',
        key : 'ME'
    },
    {
        name : 'Shopclues',
        web:'https://shopclues.com',
        description : '',
        key : 'SC'
    },
    {
        name : 'Myntra',
        web:'https://myntra.com',
        description : '',
        key : 'MT'
    },
    {
        name : 'AJIO',
        web:'https://ajio.com',
        description : '',
        key : 'AJ'
    },
    {
        name : 'TataCliq',
        web:'https://tatacliq.com',
        description : '',
        key : 'TC'
    },
    {
        name : 'Ebay',
        web:'https://ebay.com',
        description : '',
        key : 'EB'
    },
    {
        name : 'SnapDeal',
        web:'https://snapdeal.com',
        description : '',
        key : 'SD'
    }
]

export const service_groups = [
    {
        title: 'New Account Registration',
        desc: 'Planing to start selling on online marketplaces? We will take care of account registration process and will get you started smoothly.',
        icon: { NewAccountRegistrationIcon },
        link: '#',
    },
    {
        title: 'Account Management',
        desc: 'Need help to manage and grow your e-commerce business? Our expert account managers are here to help you.',
        icon: { AccountManagementIcon },
        link: '#',
    },
    {
        title: 'Product Photography',
        desc: 'Do you want to showcase your products with high quality Imagery? We can help you increase views for your product following marketplace guidelines.',
        icon: { ProductPhotographyIcon },
        link: '#',
    },
    {
        title: 'Listing & Catalogs',
        desc: 'We are expert in creating apealing catalog with optimised content that will attract more customers.',
        icon: { ListingAndCatalogingIcon },
        link: '#',
    },
    {
        title: 'Seller Training',
        desc: 'Understand from our exports, the different tools and policies needed to grow your business',
        icon: { SellerTrainingIcon },
        link: '#',
    },
    {
        title: 'Ads & Digital Marketing',
        desc: 'Getting low visibility, or you want to promote your products or brand? Let our Digital marketing experts manage your advertisements',
        icon: { AdsAndDMIcon },
        link: '#',
    },
    {
        title: 'Account Reinstatement',
        desc: "Has your account been deactivated or been put on-hold? Our experts will help you reinstate your account and assist you to ensure your accounts don't get suspended in future.",
        icon: { SellerReinstatementIcon },
        link: '#',
    },
    {
        title: 'Website/App Development',
        desc: 'Willing to start your online store website and/or app? Let us do it for you. We can build performing website, android and ios apps using modern technologies.',
        icon: { AppDevIcon },
        link: '#',
    },
];


export const sidebarMenu = [
    {
        title: 'Dashboard',
        link: '/admin',
        icon: () => (<svg className="w-5 h-5 stroke-current" fill="none" viewBox="0 0 24 24">
            <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M4.75 6.75C4.75 5.64543 5.64543 4.75 6.75 4.75H17.25C18.3546 4.75 19.25 5.64543 19.25 6.75V17.25C19.25 18.3546 18.3546 19.25 17.25 19.25H6.75C5.64543 19.25 4.75 18.3546 4.75 17.25V6.75Z"
            ></path>
            <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M9.75 8.75V19"
            ></path>
            <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M5 8.25H19"
            ></path>
        </svg>)
    },
    {
        title: 'Customers',
        children: [
            {
                title: 'All Customers',
                link: '/admin/customers'
            },
            {
                title: 'Add New Customer',
                link: '/admin/customers/addnew'
            }
        ],
        icon: () => (<></>)
    },
    {
        title: 'Services',
        children: [
            {
                title: 'All Services',
                link: '/admin/services'
            }, {
                title: 'Add New Services',
                link: '/admin/services/add-new-service'
            }

        ],
        icon: () => (<></>)
    },
    {
        title: 'Blogs',
        children: [
            {
                title: 'All Posts',
                link: '/blog'
            }, {
                title: 'Add New Article',
                link: '/blog/addnew'
            }, {
                title: 'Manage Categories',
                link: '/blog/catagories'
            }

        ],
        icon: () => (<></>)
    },
    {
        title: 'Users',
        children: [
            {
                title: 'All Users',
                link: '/blog'
            }, {
                title: 'Add New User',
                link: '/blog/addnew'
            }, {
                title: 'Manage User',
                link: '/blog/catagories'
            }

        ],
        icon: () => (<></>)
    },
    {
        title: 'Reports',
        children: [
            {
                title: 'Sales',
                link: '/blog'
            }, {
                title: 'Returning Customers',
                link: '/blog/addnew'
            }, {
                title: '360 Degree Report',
                link: '/blog/catagories'
            }

        ],
        icon: () => (<></>)
    }
]
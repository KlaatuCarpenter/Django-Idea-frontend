import howItWorksInstall from "../static/howItWorksInstall.png"
import howItWorksDeploy from "../static/howItWorksDeploy.png"
import howItWorksSell from "../static/howItWorksSell.png"

export const companyName = "Django Idea"
export const copyrightStatement = "Copyright © Great Teaching Is Like an Onion"

export const navMenu = [
  {
    name: "How it works?",
    href: "/#how-it-works",
  },
  // {
  //   name: "Features",
  //   href: "#",
  // },
  // {
  //   name: "Try for free",
  //   href: "#",
  // },
  // {
  //   name: "Why is it worth?",
  //   href: "#",
  // },
  {
    name: "Pricing",
    href: "/#pricing",
  },
  // {
  //   name: "FAQ",
  //   href: "#",
  // },
  // {
  //   name: "Contact",
  //   href: "#",
  // },
]

export const navMenuLoggedUser = [
  ...navMenu,
  {
    name: "My Courses",
    href: "#",
  },
]

export const productHero = {
  backgroundImage: "https://source.unsplash.com/random",
  motto: "CREATE AND SELL COURSES ONLINE",
  callToAction: "We provide technology. You - your passion and knowledge.",
  buttonText: "Test for free",
  textUnderButton: "15 days free trial",
  buttonLink: "#",
}

export const tiers = [
  {
    title: "Free",
    price: "0",
    description: [
      "10 users included",
      "2 GB of storage",
      "Help center access",
      "Email support",
    ],
    buttonText: "Sign up for free",
    buttonVariant: "outlined",
  },
  {
    title: "Pro",
    subheader: "Most popular",
    price: "15",
    description: [
      "20 users included",
      "10 GB of storage",
      "Help center access",
      "Priority email support",
    ],
    buttonText: "Get started",
    buttonVariant: "contained",
  },
  {
    title: "Enterprise",
    price: "30",
    description: [
      "50 users included",
      "30 GB of storage",
      "Help center access",
      "Phone & email support",
    ],
    buttonText: "Contact us",
    buttonVariant: "outlined",
  },
]

export const howItWorks = {
  title: "How it works",
  description:
    "You receive the ready to go tool to create and sell courses online on your site or blog - without any limits. You buy Django Idea once and forever or in comfy subscription - it's up to you. Orders, invoices, payments - everything is fully automated. This is the box solution for everyone who wants to earn in web. This is so simple:",
  steps: [
    {
      title: "1. Install",
      description:
        "Choose your plan or try for free. Our refund policy provides a 30-day, money-back guarantee. We help you complete the installation proccess.",
      imgAlt: "install",
      imgSrc: howItWorksInstall,
    },
    {
      title: "2. Deploy your course",
      description:
        "Choose your favorite template and add your courses in admin panel.",
      imgAlt: "deploy",
      imgSrc: howItWorksDeploy,
    },
    {
      title: "3. Sell",
      description:
        "Develop your bussiness and enjoy new orders. Django Idea will take care for the rest.",
      imgAlt: "sell",
      imgSrc: howItWorksSell,
    },
  ],
}

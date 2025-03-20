import { cva } from "class-variance-authority";
export const linkVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded font-medium transition-all duration-300 disabled:pointer-events-none disabled:opacity-50 ",
  {
    variants: {
      variant: {
        default: "hover:bg-lighter bg-light text-darkest border border-light",
        outline:
          "border border-light text-darkest shadow-[0px_0px_12px_hsl(var(--light))] bg-gradient-to-t from-lighter to-lightest",
      },
      size: {
        default: "h-9 px-4 py-2",
        icon: "size-8",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export const servicesData = [
  {
    id: 1,
    title: "Elevate Your Brand with Strategic Digital Marketing Solutions",
    content:
      "Our expert digital marketing services are designed to enhance your online presence and drive meaningful audience engagement. From advanced SEO strategies to targeted social media campaigns, we create customized solutions that align with your business objectives and effectively reach your target market.",
    image: "/digitalmarketing.webp",
    alt: "digital marketing",
  },
  {
    id: 2,

    title: "Transform Your Space with Custom Signage Solutions",
    content:
      "We provide end-to-end signage services, including innovative design, high-quality production, and professional installation. Our goal is to ensure your brand stands out with clear, compelling messaging that leaves a lasting impression.",
    image: "/signage.webp",
    alt: "signage solutions",
  },
  {
    id: 3,

    title: "Refine Your Space with Expert Interior Design Services",
    content:
      "Our professional interior design solutions focus on creating environments that are both aesthetically pleasing and highly functional. From concept development to final execution, we manage every detail to bring your vision to life seamlessly.",
    image: "/interior.webp",
    alt: "interior designing",
  },
  {
    id: 4,

    title: "Tailored Accounting Solutions to Support Your Business Growth",
    content:
      "Our comprehensive accounting services include meticulous bookkeeping, strategic tax planning, and in-depth financial analysis. With our expertise, we help you maintain financial stability and optimize growth while you focus on scaling your business.",
    image: "/accounting.webp",
    alt: "accounting solution",
  },
];

export const faqs = [
  {
    question: "What services do you offer?",
    answer:
      "We provide a wide range of services, including digital marketing, signage solutions, and interior design. Our goal is to help businesses thrive by delivering tailored strategies and innovative designs.",
  },
  {
    question: "How can I contact you?",
    answer:
      "You can reach us through our contact page, where you'll find our email and phone number. Our team is ready to assist you with any inquiries.",
  },
  {
    question: "What is your pricing?",
    answer:
      "Our pricing is based on the specific services and solutions you require. We offer competitive rates while maintaining high-quality standards. For a detailed quote, please contact us directly.",
  },
  {
    question: "Do you offer customized solutions?",
    answer:
      "Yes, all our services are tailored to meet your unique business needs. We take the time to understand your objectives and create personalized strategies that deliver results.",
  },
  {
    question: "What industries do you serve?",
    answer:
      "We work with businesses across various industries, including retail, corporate, hospitality, and more. Our expertise allows us to craft solutions that align with different market demands.",
  },
  {
    question: "How do you ensure high service quality?",
    answer:
      "We are committed to delivering excellence through meticulous planning, skilled professionals, and high-quality materials. Our team follows industry best practices and continuously innovates to provide outstanding results for every project.",
  },
];

export const company = [
  { number: 500, text: "Happy Clients" },
  { number: 20, text: "Countries" },
  { number: 200, text: "Successfull Projects" },
];

export type TService = {
  id: number;
  title: string;
  content: string;
  image: string;
  alt: string;
};

export type TCompany = {
  number: number;
  text: string;
};

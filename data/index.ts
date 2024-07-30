export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "Working closely with clients and ensuring clear, consistent communication. ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "Flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently building and deploying a AI MERN Application",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "AI-Chatbot -(Still Developing)",
    des: "MERN ChatBot is an AI-driven chat application built with the MERN stack (MongoDB, Express.js, React.js, Node.js). It features secure user authentication via JWT, real-time communication powered by OpenAI's API, and comprehensive chat history management. The project focuses on delivering a responsive and intuitive user interface, robust security measures, and high performance.",
    img: "/p1.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
    link: "/ai-chatbot.fortunelinus.com",
  },
  {
    id: 2,
    title: "Yoom - Video Conferencing App -(Still Developing)",
    des: "Simplify your video conferencing experience with Yoom. Seamlessly connect with colleagues and friends.",
    img: "/p2.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
    link: "/ui.yoom.com",
  },
  {
    id: 3,
    title: "AI Image SaaS - Canva Application",
    des: "A REAL Software-as-a-Service app with AI features and a payments and credits system using the latest tech stack.",
    img: "/p3.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
    link: "/ui.aiimg.com",
  },
  {
    id: 4,
    title: "Animated Apple Iphone 3D Website",
    des: "Recreated the Apple iPhone 15 Pro website, combining GSAP animations and Three.js 3D effects..",
    img: "/p4.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    link: "/ui.apple.com",
  },
];

export const testimonials = [
  {
    quote:
      "Fortune is a highly motivated and hardworking individual with a passion for cybersecurity. His exceptional work ethic, coupled with his technical skills and ability to collaborate effectively, makes him a valuable asset to any team. I do not doubt that he will excel in any future endeavors and contribute positively to any organization he joins.",
    name: "Thomas Burrell",
    title: "Director Security Solutions - BCD Travel",
  },
  {
    quote:
      "Collaborating with Fortune was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Fortune's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Fortune is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Fortune is a highly driven and talented individual with a bright future in Software Development. His strong work ethic, technical expertise, and collaborative spirit make him an invaluable asset to any organization. I am confident that he will excel in any role she pursues and I wholeheartedly recommend him for any opportunities he seeks.",
    name: "Stephanie Hoobler",
    title: "Senior Security Analyst - BCD Travel",
  },
  {
    quote:
      "Fortune’s organizational skills and ability to manage multiple responsibilities simultaneously were evident throughout his internship. He consistently met deadlines, delivered high-quality work, and maintained a positive and resilient attitude even under pressure. His dedication and hard work significantly contributed to the success of our team’s initiatives.",
    name: "Christopher Simmons",
    title: "Analyst 1 - BCD Travel",
  },
  {
    quote:
      "Fortune has exhibited an impressive level of technical competence. He has a deep understanding of machine learning algorithms and their applications in hydrology. His work on the streamflow prediction model not only showcased her programming skills but also her ability to interpret and analyze complex data. The results of his efforts were evident in the significant improvements in the model's accuracy and reliability.",
    name: "Dr. James Halgren",
    title: "Assistant Director of Science - Alabama Water Institute",
  },
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "BCD Travel, Security Solution Intern",
    desc: "Successfully implemented PCI-DSS compliance, safeguarding cardholder data for over 10,000 customers and reducing security risks by 60%.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "University of Alabama, Research Intern",
    desc: "Developed an LSTM neural network model using synthetic data to improve river streamflow predictions in unmonitored segments.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Deloitte Inc., Machine Learning Intern",
    desc: "Designed and implemented machine learning algorithms to extract insights from large datasets, enhancing operational efficiency and productivity.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Uprise Tech Club, Co-Founder",
    desc: "Founded UPRISE NG, an initiative dedicated to nurturing African talent by training over 30 high-achieving students in Data Engineering, UI/UX Design, and Product Management",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
  },
  {
    id: 2,
    img: "/twit.svg",
  },
  {
    id: 3,
    img: "/link.svg",
  },
];

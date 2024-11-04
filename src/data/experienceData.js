
import proj_sickkids from "../assets/img/proj/proj1.jpeg";
import proj2 from "../assets/img/proj/proj2.jpeg";
import proj3 from "../assets/img/proj/proj3.jpeg";
import proj4 from "../assets/img/proj/proj4.jpeg";
import proj5 from "../assets/img/proj/proj5.jpeg";

import gaitmate_demo from "../assets/img/gaitmate-demo.mp4";
import gatimate from "../assets/img/gaitmate-thumbnail.jpg";
import joymouse from "../assets/img/joymouse-thumbnail.png";
import joymouse_pdf from "../assets/img/joymouse-summary.pdf";
import paint1 from "../assets/img/artwork/img-paint1.jpg";
import paint2 from "../assets/img/artwork/img-paint2.jpg";
import paint3 from "../assets/img/artwork/img-paint3.jpg";
import threeD1 from "../assets/img/artwork/img-3d1.jpg";
import threeD2 from "../assets/img/artwork/img-3d2.jpg";


export const workData = [
    {
        id: 5,
        title: "Biomedical Systems Developer",
        company: "SickKids Hospital",
        imgUrl: proj_sickkids,
        link: "",
        details: {
            subtitle: "May 2023 - August 2023",
            bulletPoints: [
            "Constructed a neuroendovascular surgical simulation system to improve the surgical training processes.",
            "Designed and assembled a mechanical system using SolidWorks to replicate anatomical properties.",
            "Developed a pipeline to 3D print patient-specific anatomy from imaging data using Mimics and 3-Matic."
            ],
            buttons: [
            { url: "https://www.sickkids.ca/en/care-services/centres/centre-for-brain-mental-health/paediatric-neurovascular-program/", label: "Department Site" },
            ],
            images: [proj_sickkids, proj_sickkids, proj_sickkids, proj_sickkids, proj_sickkids, proj_sickkids]
        }
    },
    {
        id: 4,
        title: "Research and Development Engineer",
        company: "MOLLI Surgical",
        imgUrl: proj3,
        link: "http://mollisurgical.com/molli2-wand-tablet/",
        details: {
            subtitle: "May 2022 - August 2022",
            bulletPoints: [
            "Built a pipeline that aggregates data and connects firmware to a dashboard using Python for a surgical tool.",
            "Designed tools and Python scripts to assess a surgical localization device's accuracy from 3M+ data points.",
            "Established a proof-of-concept wireless data transfer system through real-time Bluetooth communication."
            ],
            buttons: [
            { url: "http://mollisurgical.com/molli2-wand-tablet/", label: "Product Site" },
            ],
            images: [proj_sickkids, proj2]
        }
    },
    {
        id: 3,
        title: "Product Development Engineer",
        company: "Ford Motor Company",
        imgUrl: proj5,
        details: {
            subtitle: "Sept 2021 - Dec 2021",
            bulletPoints: [
            "Collaborated with senior developers, oversaw testing, and solved multiple user interface tickets using React.",
            "Deployed React based features that are implemented in the infotainment system of Ford electric vehicles.",
            "Automated testing using data processing Python scripts to parse log files to plot display state changes."
            ],
            buttons: [
                { url: "https://www.ford.com/technology/sync/#:~:text=Alexa%20Built%2Din-,SYNC%C2%AE%204%20Technology,-Available%20SYNC%204", label: "Product Site" },
            ],
            images: [proj4, proj_sickkids]
        }
    },
    {
        id: 2,
        title: "Machine Learning Engineer",
        company: "XSENSOR Technology Corporation",
        imgUrl: proj2,
        details: {
            subtitle: "Jan 2021 - Apr 2021",
            bulletPoints: [
            "Utilized signals and filtering to make a real-time contactless heart rate detection system with 94% accuracy.",
            "Oversaw data collection, cleaning, and testing that improved the prediction of patient's pressure injury risk.",
            ],
            buttons: [
            { url: "https://www.xsensor.com/solutions-and-platform/csm/patient-bed-monitoring", label: "Product Site" },
            ],
            images: [proj_sickkids, proj_sickkids]
        }
    },
    {
        id: 1,
        title: "Brain-Computer Interface Engineer",
        company: "Alberta Children's Hospital",
        imgUrl: proj4,
        details: {
            subtitle: "May 2020 - Aug 2020",
            bulletPoints: [
            "Developed a prototype that assists kids with neurological disabilities to paint without physical control.",
            "Employed Python for real-time EEG data analysis and Node.js for robot control based on extracted features.",
            "Presented the project outcome at 2 symposiums and received an award for the best 3-minute presentation."
            ],
            buttons: [
                { url: "https://cumming.ucalgary.ca/research/pediatric-bci/bci-program/bci-program", label: "Program Link" },
                { url: "https://github.com/raziqkassam/sphero", label: "GitHub" },
                { url: "https://www.youtube.com/watch?v=D6xbxsmxb2w", label: "Presentation Video" },
            ],
            images: [proj_sickkids, proj_sickkids]
        }
    },
    // Add more projects as needed
  ];

  export const projectData = [
    {
        id: 3,
        title: "ROMET",
        company: "Range-of-Motion Exercise Tracker for Physiotherapists and Patients",
        imgUrl: proj2,
        details: {
            subtitle: "Range-of-Motion Exercise Tracker for Physiotherapists and Patients",
            bulletPoints: [
            "Developed a web app with React for physiotherapists to prescribe at home exercises and track progress.",
            "Built an iOS app that leverages computer vision to measure range-of-motion angles with ± 4˚ accuracy.",
            "Connected web and mobile apps using RESTful APIs built with Python and a MongoDB database."
            ],
            buttons: [
            { url: "https://romet.app", label: "Active Web App" },
            { url: "https://www.youtube.com/watch?v=pClD94RXg68", label: "Demo Video" }
            ],
            images: [proj2, proj2]
        }
    },
    {
        id: 2,
        title: "GaitMate",
        company: "Plantar Pressure Sensor with Real-Time Haptic Feedback",
        imgUrl: gatimate,
        details: {
            subtitle: "Plantar Pressure Sensor with Real-Time Haptic Feedback",
            bulletPoints: [
            "Developed a system that translated real-time gait pressure data into perceivable haptic feedback.",
            "Enabled users with peripheral neuropathy to perceive the location and magnitude of their foot forces.",
            ],
            buttons: [
            { url: gaitmate_demo, label: "Demo Video" },
            ],
            images: [proj2, proj2]
        }
    },
    {
        id: 1,
        title: "JoyMouse",
        company: "Joystick Controlled Cursor for Individuals with Hand Tremors",
        imgUrl: joymouse,
        details: {
            subtitle: "Joystick Controlled Cursor for Individuals with Hand Tremors",
            bulletPoints: [
            "Created a joystick-based prototype that mechanically filters out unwanted motions for cursor control.",
            "Utilized Arduino filters to enable users with hand tremors to successfully decrease acceleration by 266%.",
            ],
            buttons: [
            { url: joymouse_pdf, label: "Summary PDF" }
            ],
            images: [proj2, proj2]
        }
    },
    // Add more projects as needed
  ];

  export const thirdData = [
    {
        id: 4,
        title: "Men's Varsity Squash Team",
        company: "University of Waterloo",
        imgUrl: proj3,
        details: {
            subtitle: "2019-2024 - Player and Co-Captain",
            bulletPoints: [
            "Throughout my 5 amazing years at Waterloo, I competed on the Men's Varsity Squash team.",
            "2020 OUA Silver Medal, 2022 and 2024 OUA Bronze Medal. 2019-20 Jesters Champions, 2022-23 and 2023-24 Jesters Finalists.",
            "Coached both the Men's and Women's teams during tournaments, and was an Atheltic Mentor for first year students.",
            ],
            buttons: [
            ],
            images: [proj3, proj5]
        }
    },
    {
        id: 3,
        title: "Web Platform Lead",
        company: "Biotechnology and Bioengineering Conference",
        imgUrl: proj3,
        details: {
            subtitle: "BioTEC Conference",
            bulletPoints: [
            "Designed and revamped the website for the virtual 2021 and 2022 BioTEC conferences, hosting over 3000 global attendees.",
            "Collaborated with multiple teams to produce, implement, and display forms of content to over 3000 monthly visitors.",
            "Plan website layouts in Figma and apply creative design solutions to help craft the digital brand of the conference.",
            ],
            buttons: [
            ],
            images: [proj3, proj5]
        }
    },
    {
        id: 1,
        title: "Global Encounters",
        company: "Hyderabad, India",
        imgUrl: proj3,
        details: {
            subtitle: "Service Learning Trip",
            bulletPoints: [
            "Travelled to India along with 60 other students across 17 countries on a trip focused on service, leadership, and culture.",
            "Volunteered over 50 hours at a local government school and led debriefs for our service team to try and increase productivity.",
            "Got immersed in the beautiful culture and learned about the many revitalization projects that aim to maintain extraordinary historic sites across the country."
            ],
            buttons: [
            ],
            images: [proj3, proj5]
        }
    },
    {
        id: 0,
        title: "Various Art Projects",
        company: "",
        imgUrl: proj3,
        details: {
            subtitle: "Paintings, Sketches, SolidWorks Designs",
            bulletPoints: [
            ],
            buttons: [
            ],
            images: [paint1, paint2, paint3, threeD1, threeD2]
        }
    },
    // Add more projects as needed
  ];
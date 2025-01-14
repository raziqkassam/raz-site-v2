// WORK
import sickkids_tn from "../assets/img/thumbnails/tn/sickkids-tn.png";
import sickkids_demo from "../assets/img/sickkids-demo.mp4";
import molli_tn from "../assets/img/thumbnails/tn/molli-tn.png";
import ford_tn from "../assets/img/thumbnails/tn/ford-tn.png";
import xsensor_tn from "../assets/img/thumbnails/tn/xsensor-tn.png";
import bci_tn from "../assets/img/thumbnails/tn/bci-tn.png";

// PROJECTS
import romet_tn from "../assets/img/thumbnails/tn/romet-tn.png";
import gaitmate_tn from "../assets/img/thumbnails/tn/gaitmate-tn.png";
import gaitmate_demo from "../assets/img/gaitmate-demo.mp4";
import joymouse_tn from "../assets/img/thumbnails/tn/joymouse-tn.png";
import joymouse_pdf from "../assets/img/joymouse-summary.pdf";

// LEADERSHIP
import squash_tn from "../assets/img/thumbnails/tn/squash-tn.png";
import biotec_tn from "../assets/img/thumbnails/tn/biotec-tn.png";
import ge_tn from "../assets/img/thumbnails/tn/ge-tn.png";

// Function to import all images from a folder
function importAll(r) {
    let images = {};
    r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
    return images;
}
// Import all images in each folder for the full project details
// const personal = importAll(require.context("../assets/img/proj/thumbnails/personal", false, /\.(png|jpeg|svg)$/));
// const scenes = importAll(require.context("../assets/img/proj/", false, /\.(png|jpeg|svg)$/));
const sickkids = importAll(require.context("../assets/img/thumbnails/sickkids", false, /\.(png|jpe?g||jpg|svg)$/));
const molli = importAll(require.context("../assets/img/thumbnails/molli", false, /\.(png|jpe?g|jpg|svg)$/));
const ford = importAll(require.context("../assets/img/thumbnails/ford", false, /\.(png|jpe?g|jpg|svg)$/));
const xsensor = importAll(require.context("../assets/img/thumbnails/xsensor", false, /\.(png|jpe?g|jpg|svg)$/));
const bci = importAll(require.context("../assets/img/thumbnails/bci", false, /\.(png|jpe?g|jpg|svg)$/));
const romet = importAll(require.context("../assets/img/thumbnails/romet", false, /\.(png|jpe?g|jpg|svg)$/));
const gaitmate = importAll(require.context("../assets/img/thumbnails/gaitmate", false, /\.(png|jpe?g|jpg|svg)$/));
const joymouse = importAll(require.context("../assets/img/thumbnails/joymouse", false, /\.(png|jpe?g|jpg|svg)$/));
const squash = importAll(require.context("../assets/img/thumbnails/squash", false, /\.(png|jpe?g|jpg|svg)$/));
const biotec = importAll(require.context("../assets/img/thumbnails/biotec", false, /\.(png|jpe?g|jpg|svg|gif)$/));
const ge = importAll(require.context("../assets/img/thumbnails/ge", false, /\.(png|jpe?g|jpg|svg)$/));


export const workData = [
    {
        id: 5,
        title: "Robotic Systems Designer",
        company: "SickKids Hospital",
        imgUrl: sickkids_tn,
        link: "",
        details: {
            subtitle: "Toronto, Canada",
            bulletPoints: [
            "Designed and assembled an electro-mechanical system that uses pediatric-specific neurovascular 3D-models with realistic anatomy and flow characteristics for hands-on endovascular simulation.",            
            "This simulation system is vital for high-precision practice, allowing medical professionals to gain realistic and hands-on experience before performing complex procedures.",
            "Leveraged SolidWorks for part design, and built a 3D printing pipeline using Mimics and 3-Matic to recreate patient-specific anatomy from imaging data.",
            ],
            buttons: [
            { url: sickkids_demo, label: "Demo Video" },
            { url: "https://www.sickkids.ca/en/care-services/centres/centre-for-brain-mental-health/paediatric-neurovascular-program/", label: "Department Site" },
            ],
            images:  Object.values(sickkids)
        }
    },
    {
        id: 4,
        title: "Research and Development Engineer",
        company: "MOLLI Surgical",
        imgUrl: molli_tn,
        link: "http://mollisurgical.com/molli2-wand-tablet/",
        details: {
            subtitle: "Toronto, Canada",
            bulletPoints: [
                "Led the validation and testing initiatives for MOLLI 2, a breakthrough surgical localization device that revolutionizes minimally invasive tumor surgeries by providing sub-millimeter 3D guidance.",
                "Developed and implemented a comprehensive Python-based testing framework that analyzed  3M+ data points to validate the 3-dimensional accuracy of the surgical device.",
                "Built a pipeline that aggregates data and connects firmware to a dashboard using Python for a surgical tool. Established a proof-of-concept wireless data transfer system through real-time Bluetooth communication.",
            ],
            buttons: [
            { url: "http://mollisurgical.com/molli2-wand-tablet/", label: "Product Site" },
            ],
            images:  Object.values(molli)
        }
    },
    {
        id: 3,
        title: "Product Development Engineer",
        company: "Ford Motor Company",
        imgUrl: ford_tn,
        details: {
            subtitle: "Waterloo, Canada",
            bulletPoints: [
            "Collaborated with senior developers, oversaw testing, and solved multiple user interface tickets using React.",
            "Deployed React based features that are implemented in the infotainment system of Ford electric vehicles.",
            "Automated testing using data processing Python scripts to parse log files to plot display state changes."
            ],
            buttons: [
                { url: "https://www.ford.com/technology/sync/#:~:text=Alexa%20Built%2Din-,SYNC%C2%AE%204%20Technology,-Available%20SYNC%204", label: "Product Site" },
            ],
            images:  Object.values(ford)
        }
    },
    {
        id: 2,
        title: "Machine Learning Engineer",
        company: "XSENSOR Technology Corporation",
        imgUrl: xsensor_tn,
        details: {
            subtitle: "Calgary, Canada",
            bulletPoints: [
            "Utilized signals and filtering to make a real-time contactless heart rate detection system with 94% accuracy.",
            "Oversaw data collection, cleaning, and testing that improved the prediction of patient's pressure injury risk.",
            "Managed data cleaning outsourcing, including vendor selection, negotiation, training resource development, and setting up virtual workspaces via AWS for efficient process scaling."
        ],
            buttons: [
            { url: "https://www.xsensor.com/solutions-and-platform/csm/patient-bed-monitoring", label: "Product Site" },
            ],
            images:  Object.values(xsensor)
        }
    },
    {
        id: 1,
        title: "Brain-Computer Interface Engineer",
        company: "Alberta Children's Hospital",
        imgUrl: bci_tn,
        details: {
            subtitle: "Calgary, Canada",
            bulletPoints: [
            "Created a brain-computer interface project that enables children to paint without physical control by utilizing SSVEP-based systems, fostering cognitive development and creating an outlet of play. ",
            "Utilized Python for EEG data processing and Node.js for controlling the robot by translating brain signals into robot actions which they then drive through paint drops on a canvas to create beautiful abstract designs. ",
            "Demonstrated the capability of controlling programmable games with BCI for entertainment, creating a compact, transportable, affordable option. The ideation and prototype was later verified on children with cerebral palsy, where several kids won awards within the community for the paintings they created.",
        ],
            buttons: [
                { url: "https://cumming.ucalgary.ca/research/pediatric-bci/bci-program/bci-program", label: "Program Link" },
                { url: "https://www.youtube.com/watch?v=D6xbxsmxb2w", label: "Presentation Video" },
                { url: "https://github.com/raziqkassam/sphero", label: "GitHub" },
            ],
            images:  Object.values(bci)
        }
    },
    // Add more projects as needed
  ];

  export const projectData = [
    {
        id: 3,
        title: "Product Designer, Frontend Developer",
        company: "ROMET: Range of Motion Exercise Tracker",
        imgUrl: romet_tn,
        details: {
            subtitle: "ROMET",
            bulletPoints: [
                "Designed and built a web app in React for physiotherapists to prescribe at-home exercises and monitor patient rehab progress, paired with an iOS app that uses computer vision for accurate range-of-motion exercise measurements.",
                "By combining app interfaces and data analytics, the goal is to improve patient adherence, optimize recovery outcomes, and contribute to more efficient healthcare resource allocation.",
                "Resulted in a functional system that achieved ±4˚ of accuracy in range-of-motion measurements and improved rehabilitation tracking for both qualitative and quantitive metrics, elevating the standard of injury recovery.",
            ],
            buttons: [
            { url: "https://romet.app", label: "Active Web App" },
            { url: "https://www.youtube.com/watch?v=pClD94RXg68", label: "Demo Video" }
            ],
            images:  Object.values(romet)
        }
    },
    {
        id: 2,
        title: "GaitMate",
        company: "Plantar Pressure Sensor with Real-Time Haptic Feedback",
        imgUrl: gaitmate_tn,
        details: {
            subtitle: "Plantar Pressure Sensor with Real-Time Haptic Feedback",
            bulletPoints: [
            "Developed a system that translated real-time gait pressure data into perceivable haptic feedback.",
            "Enabled users with peripheral neuropathy to perceive the location and magnitude of their foot forces.",
            ],
            buttons: [
            { url: gaitmate_demo, label: "Demo Video" },
            ],
            images:  Object.values(gaitmate)
        }
    },
    {
        id: 1,
        title: "JoyMouse",
        company: "Joystick Controlled Cursor for Individuals with Hand Tremors",
        imgUrl: joymouse_tn,
        details: {
            subtitle: "Joystick Controlled Cursor for Individuals with Hand Tremors",
            bulletPoints: [
            "Created a joystick-based prototype that mechanically filters out unwanted motions for cursor control.",
            "Utilized Arduino filters to enable users with hand tremors to successfully decrease acceleration by 266%.",
            ],
            buttons: [
            { url: joymouse_pdf, label: "Summary PDF" }
            ],
            images:  Object.values(joymouse)
        }
    },
    // Add more projects as needed
  ];

  export const thirdData = [
    {
        id: 4,
        title: "Men's Varsity Squash Team",
        company: "University of Waterloo",
        imgUrl: squash_tn,
        details: {
            subtitle: "2019-2024 - Player and Co-Captain",
            bulletPoints: [
            "Throughout my 5 amazing years at Waterloo, I competed on the Men's Varsity Squash team.",
            "2020 OUA Silver Medal, 2022 and 2024 OUA Bronze Medal. 2019-20 Jesters Champions, 2022-23 and 2023-24 Jesters Finalists.",
            "Coached both the Men's and Women's teams during tournaments, and was an Atheltic Mentor for first year students.",
            ],
            buttons: [
            ],
            images:  Object.values(squash)
        }
    },
    {
        id: 3,
        title: "Web Platform Lead",
        company: "Biotechnology and Bioengineering Conference",
        imgUrl: biotec_tn,
        details: {
            subtitle: "BioTEC Conference",
            bulletPoints: [
            "Designed and revamped the website for the virtual 2021 and 2022 BioTEC conferences, hosting over 3000 global attendees.",
            "Collaborated with multiple teams to produce, implement, and display forms of content to over 3000 monthly visitors.",
            "Plan website layouts in Figma and apply creative design solutions to help craft the digital brand of the conference.",
            ],
            buttons: [
            ],
            images:  Object.values(biotec)
        }
    },
    {
        id: 1,
        title: "Global Encounters",
        company: "Hyderabad, India",
        imgUrl: ge_tn,
        details: {
            subtitle: "Service Learning Trip",
            bulletPoints: [
            "Travelled to India along with 60 other students across 17 countries on a trip focused on service, leadership, and culture.",
            "Volunteered over 50 hours at a local government school and led debriefs for our service team to try and increase productivity.",
            "Got immersed in the beautiful culture and learned about the many revitalization projects that aim to maintain extraordinary historic sites across the country."
            ],
            buttons: [
            ],
            images:  Object.values(ge)
        }
    },
    // Add more projects as needed
  ];
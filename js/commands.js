const LINKEDIN = "https://www.linkedin.com/in/ilshin-jeon-4011b6235/";
const INSTAGRAM = "https://www.instagram.com/jeon.ilshin/";
const GITHUB = "https://github.com/jeonilshin";
const EMAIL = 'cloud.jeonilshin@gmail.com';
const USERNAME = "jeonilshin";

// const ABOUT = [
//   "<br>",
//   "Hello and welcome to my portfolio website!",
//   "My name is Eric, and I'm a final year Computer Science and Engineering student.",
//   "Throughout my degree, I've honed my skills in algorithms, mathematics, and other",
//   "technical fields. I'm passionate about technology and enjoy learning new things, ",
//   "as well as tackling challenges with creativity and innovation. In my free time,", 
//   "I enjoy reading, exercising, and playing video games occasionally. I believe that ",
//   "a balanced lifestyle is essential to maintaining a healthy body and mind, which is ",
//   "crucial for success in any field. As I approach the end of my studies, I'm excited ",
//   "to explore job opportunities and research collaborations. I'm passionate about being",
//   "at the forefront of technological innovation and making a positive impact in the world.",
//   "<br>"
// ];

const ABOUT = [
  "<br>",
  "Hello there!👋" ,
  "              ",
  "I'm Shin, a Student, Studying ",
  "hard to be a Cloud Engineer.",
  "I love cats and to code. 🧑‍💻",
  "                            ",
  "                            ",
  "I have always been interested in",
  "computer since I was a middle school",
  "student. I always wanted to be a developer",
  "It was always my dream to make an app to",
  "make people happy and to make their lives",
  "easier.",
  "                                     ",
  "As I approach my final year of ",
  "highschool, I'm eager to explore job ",
  "opportunities and dive deeper into", 
  "research projects. It is now my" ,
  "time to be a full time Full Stack ",
  "Engineer. 🚀",,
  "<br>"
];



SOCIAL = [
  "<br>",
  'linkedin       <a href="' + LINKEDIN + '" target="_blank">linkedin/' + USERNAME + "</a>",
  'instagram      <a href="' + INSTAGRAM + '" target="_blank">instagram/' + USERNAME + '</a>',
  'github         <a href="' + GITHUB + '" target="_blank">github/' + USERNAME + "</a>",
  "<br>"
];


PROJECTS = [
  "<br>",
  "Here are some of my projects:",
  "<br>",
  "<strong> - Officia App <strong>",
  "A web-based marketplace connecting",
  "independent professionals with clients",
  "seeking high-quality services in",
  "Costa Rica",
  "<a href=https://github.com/ealpizarp/officia-app/tree/db_branch> GitHub link",
  "Tech stack: PHP, Laravel, Tailwind, JS",
  "<br>",
  "<strong> - Extended Triangle Compiler <strong>",
  "An extension of the Triangle compiler",
  "originally developed in the book",
  "Programming Language Processors in",
  "Java (Watt & Brown, 2000)",
  "Tech stack: Java",
  "<a href=https://github.com/ealpizarp/Extended-Triangle-Compiler> GitHub link",
  "<br>",
  "<strong> - Climate Crawler <strong>",
  "Hadoop-based data processing solution",
  "for web crawler data with a", 
  "web interface",
  "Tech stack: Hadoop, Python, React",
  "<a href=https://github.com/ealpizarp/Climate-Crawler> GitHub link",
  "<br>",
  "<strong> - Angular Weather app <strong>",
  "Angular weather app that uses an",
  "API for real-time weather data.",
  "Tech stack: Angular, CSS, Typescript",
  "<a href=https://github.com/ealpizarp/angular-weather-app> GitHub link",
  "<br>",
  "<strong>Check out some of my other projects",
  "<strong> in my </strong> <a class=\"command\" href=https://github.com/ealpizarp/> GitHub profile</a> <strong>",
  "<br>"

];

COMMAND_LIST = [
  "<br>",
  '<span class="command">about</span>          Learn more about me',
  '<span class="command">social</span>         Display social networks',
  '<span class="command">education</span>      Show my education',
  '<span class="command">resume</span>         Open my web curriculum',
  '<span class="command">projects</span>       View some of my projects',
  '<span class="command">history</span>        Show command history',
  '<span class="command">email</span>          Feel free to reach out',
  '<span class="command">banner</span>         Display the header',
  '<span class="command">clear</span>          Clear terminal',
  '<span class="command">echo</span>           Print any give string',
  '<span class="command">ls</span>             List directory content',
  '<span class="command">cd &lt;directory&gt</span> Change directory',
  '<span class="command">help</span>           Display all commands',
  "<br>",
];

BANNER = [
  "                                  ® 2023   ",
  "░██████╗ ██╗░░██╗ ██╗ ███╗░░██╗██╗░██████╗ ",
  "██╔════╝ ██║░░██║ ██║ ████╗░██║╚█║██╔════╝ ",
  "╚█████╗░ ███████║ ██║ ██╔██╗██║░╚╝╚█████╗░ ",
  "░╚═══██╗ ██╔══██║ ██║ ██║╚████║░░░░╚═══██╗ ",
  "██████╔╝ ██║░░██║ ██║ ██║░╚███║░░░██████╔╝ ",
  "╚═════╝░ ╚═╝░░╚═╝ ╚═╝ ╚═╝░░╚══╝░░░╚═════╝░ ",
  "      ▀█▀ █▀▀ █▀▄ █▄█ ▀█▀ █▀█ █▀█ █        ",
  "       █  █▀▀ █▀▄ █ █  █  █ █ █▀█ █        ",
  "       ▀  ▀▀▀ ▀ ▀ ▀ ▀ ▀▀▀ ▀ ▀ ▀ ▀ ▀▀▀      ",
  ]

DIRECTORIES = [ 
"github/",
"web portfolio/",
"mystery/"
]



EMAIL_INFO = [
  "<a href=mailto:" + EMAIL + ">" + EMAIL +"</a>",
]

TOUCH = [
  "You are not an administrator."
]

SUDO = [
  "You are not an administrator."
]

VI = [
  "You are not an administrator."
]

CAT = [
  "You are not an administrator."
]

RM = [
  "You are not an administrator."
]

EMPTY = []

EDUCATION_INFO = [
  "<br><strong>Stella Maris Academy of Davao</strong>",
  "2011. 6 - 2015. 5",
  "                                                  ",
  "<strong>St. Paul College of Davao</strong>",
  "2015. 6 - 2017. 5",
  "Graduated (졸업)",
  "                                                  ",
  "<strong>부산다문화국제학교</strong> (Busan Multicultural International School)",
  "2017. 7 - 2018. 2",
  "                                                  ",
  "<strong>영도제일중학교</strong> (Yeongdo Jeil Middle School)",
  "2018. 3 - 2021. 2",
  "Graduated (졸업)",
  "                                                  ",
  "<strong>대양고등학교</strong> (Daeyang High School)",
  "2021. 3 - 2024. 2",
  "To be Graduated (졸업 예정)",
  "                                                  ",

]

MOBILE_EDUCATION_INFO = [
  "<strong>Stella Maris Academy of Davao</strong>",
  "2011. 6 - 2015. 5",
  "<strong>St. Paul College of Davao</strong>",
  "2015. 6 - 2017. 5",
  "Graduated (졸업)",
  "<strong>부산다문화국제학교</strong> (Busan Multicultural International School)",
  "2017. 7 - 2018. 2",
  "<strong>영도제일중학교</strong> (Yeongdo Jeil Middle School)",
  "2018. 3 - 2021. 2",
  "Graduated (졸업)",
  "<strong>대양고등학교</strong> (Daeyang High School)",
  "2021. 3 - 2024. 2",
  "To be Graduated (졸업 예정)",
]


TERMINAL_INFO = [
"                            ",
'Hi! Welcome to my Terminal!',
"--------",
"                            ",
"I'm Studying to be a...",
"--------",
" * Cloud Engineer ",
" * DevOps Engineer ",
" * Full-Stack Engineer ",
"                            ",
"For a list of available commands, type <span class=\"command\">'help'</span>.",
"                            ",
]

TERMINAL_INFO_MOBILE = [
  'Hi! Welcome to my Terminal!',
  "--------",
  "I'm Studying to be a...",
  "--------",
  " * Cloud Engineer ",
  " * DevOps Engineer ",
  " * Full-Stack Engineer ",
  "---------",
  "For a list of available commands, type <span class=\"command\">'help'</span>.",
  "                            ",
  ]

MOBILE_BANNER = [
"                                  ® 2023   ",
"░██████╗ ██╗░░██╗ ██╗ ███╗░░██╗██╗░██████╗ ",
"██╔════╝ ██║░░██║ ██║ ████╗░██║╚█║██╔════╝ ",
"╚█████╗░ ███████║ ██║ ██╔██╗██║░╚╝╚█████╗░ ",
"░╚═══██╗ ██╔══██║ ██║ ██║╚████║░░░░╚═══██╗ ",
"██████╔╝ ██║░░██║ ██║ ██║░╚███║░░░██████╔╝ ",
"╚═════╝░ ╚═╝░░╚═╝ ╚═╝ ╚═╝░░╚══╝░░░╚═════╝░ ",
"     ░▀█▀░█▀▀░█▀▄░█▄█░▀█▀░█▀█░█▀█░█░░      ",
"     ░░█░░█▀▀░█▀▄░█░█░░█░░█░█░█▀█░█░░      ",
"     ░░▀░░▀▀▀░▀░▀░▀░▀░▀▀▀░▀░▀░▀░▀░▀▀▀      ",
]
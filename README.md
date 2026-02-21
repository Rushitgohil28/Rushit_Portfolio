# Rushit_Portfolio
These is Detailed portfolio of Rushit Gohil



Index.html 
<!DOCTYPE html>
<html lang="en">
<head>
    <meta name="description" content="Rushit Gohil - BCA Student, Web Developer from Gujarat">
    <meta name="keywords" content="Rushit Gohil Portfolio, Web Developer">
    <meta name="author" content="Rushit Gohil">

    <meta charset="UTF-8">
    <title>Rushit Gohil | Portfolio</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <link rel="icon" type="image/png" href="icon.png">

    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet">

</head>

<body>
    <!-- ================= ADVANCED CHATBOT ================= -->

<div class="chat-toggle" onclick="toggleChat()">💬</div>

<div class="chat-container" id="chatContainer">
    <div class="chat-header">
        <span>Rushit Assistant 🤖</span>
        <span onclick="toggleChat()" class="close-btn">✖</span>
    </div>

    <div class="chat-messages" id="chatMessages">
        <div class="bot-message">
            Hi 👋 I'm Rushit's assistant.  
            Ask me about skills, education, contact, resume or location.
        </div>

        <div class="quick-buttons">
            <button onclick="quickAsk('skills')">Skills</button>
            <button onclick="quickAsk('education')">Education</button>
            <button onclick="quickAsk('contact')">Contact</button>
            <button onclick="quickAsk('resume')">Resume</button>
        </div>
    </div>

    <div class="chat-input">
        <input type="text" id="userInput" placeholder="Ask something..." onkeypress="handleKey(event)">
        <button onclick="sendMessage()">➤</button>
    </div>
</div>


<!-- ================= NAVBAR ================= -->

<nav>
    <div class="nav-container">
        <div class="logo">Rushit Gohil</div>

        <ul class="nav-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#education">Education</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>
    </div>
</nav>


<!-- ================= HOME ================= -->

<section id="home" class="section hero" data-aos="fade-up">
    <div class="container hero-container">

        <div class="hero-text">
            <h1>Hi, I'm <span class="highlight">Rushit Gohil</span></h1>
            <h2 class="typing"></h2>
            <h3>Fresher | BCA Student</h3>

            <p>
                Final-year BCA student with knowledge of HTML, CSS, JavaScript, and Python.
                Passionate about web development and eager to start my career in IT industry.
            </p>

            <div class="hero-buttons">
                <a href="resume.pdf" download class="btn">Download Resume</a>
                <a href="#contact" class="btn outline">Contact Me</a>
            </div>
        </div>

        <div class="hero-image">
            <img src="photo.jpg" alt="Rushit photo">
        </div>

    </div>
</section>


<!-- ================= ABOUT ================= -->

<section id="about" class="section" data-aos="fade-right">
    <div class="container">
        <h2>About Me</h2>

        <div class="grid">
            <div class="glass card">
                <h3>Profile</h3>
                <p>
                    Quick learner with strong problem-solving ability and academic
                    experience in web and application development.
                    Looking to start my career in the IT industry.
                </p>
            </div>

            <div class="glass card">
                <h3>Career Objective</h3>
                <p>
                    To become a skilled software developer and contribute to innovative
                    projects while continuously improving my technical skills.
                </p>
            </div>
        </div>
    </div>
</section>

<!-- ================= EDUCATION ================= -->

<section id="education" class="section" data-aos="fade-left">
    <div class="container">
        <h2>Education</h2>

        <div class="grid">
            <div class="glass card">
                <h3>BCA (Bachelor of Computer Administration)</h3>
                <p><strong>Silver Oak University</strong></p>
                <p>2023 – 2026</p>
                <p>Currently Pursuing 3rd Year (6th Semester)</p>
            </div>
        </div>
    </div>
</section>

<!-- ================= SKILLS ================= -->

<section id="skills" class="section" data-aos="fade-up">
    <div class="container">
        <h2>Professional Skills</h2>

        <div class="grid">
            <div class="glass card">
                <h3>HTML, CSS & JavaScript</h3>
                <p>Basic knowledge of front-end development and website structure creation.</p>
            </div>

            <div class="glass card">
                <h3>Python Programming</h3>
                <p>Familiar with programming fundamentals and logical problem-solving.</p>
            </div>

            <div class="glass card">
                <h3>MS Office</h3>
                <p>Word, Excel, PowerPoint documentation and presentation skills.</p>
            </div>

            <div class="glass card">
                <h3>Git & Version Control</h3>
                <p>Basic understanding of version tracking and collaboration tools.</p>
            </div>

            <div class="glass card">
                <h3>Web Development Fundamentals</h3>
                <p>Understanding of responsive design and development workflow.</p>
            </div>

            <div class="glass card">
                <h3>Problem-Solving Ability</h3>
                <p>Strong analytical thinking and logical approach to challenges.</p>
            </div>
        </div>

        <h2 style="margin-top:70px;">Personal Skills</h2>

        <div class="grid">
            <div class="glass card">Quick learner and adaptable</div>
            <div class="glass card">Good communication skills</div>
            <div class="glass card">Time management skills</div>
            <div class="glass card">Hardworking and responsible</div>
            <div class="glass card">Ability to work under guidance</div>
            <div class="glass card">Eagerness to learn new technologies</div>
            <div class="glass card">Stress Management</div>
            <div class="glass card">Flexibility</div>
        </div>
    </div>
</section>

<!-- ================= CONTACT ================= -->

<section id="contact" class="section" data-aos="fade-down">
    <div class="container">
        <h2>Contact Information</h2>

        <div class="grid">
            <div class="glass card">
                <h3>Phone</h3>
                <p>
                    <a href="tel:+919726489466" class="contact-link">
                      📞 +91 97264 89466
                    </a>
                  </p>
                  
            </div>

            <div class="glass card">
                <h3>Email</h3>
                <p>
                    <a href="mailto:rushit28gohil@gmail.com" class="contact-link">
                      ✉ rushit28gohil@gmail.com
                    </a>
                  </p>
                  
            </div>

            <div class="glass card">
                <h3>Location</h3>
                <p>📍Navrangpura, Ahmedabad – 380009</p>
            </div>
        </div>

        <h2 style="margin-top:70px;">Languages Known</h2>

        <div class="grid">
            <div class="glass card">English</div>
            <div class="glass card">Hindi</div>
            <div class="glass card">Gujarati</div>
        </div>
    </div>
</section>
<!-- ================= FOOTER ================= -->

<footer class="footer">
    <p>© 2026 Rushit Gohil. All Rights Reserved.</p>
  </footer>
  
  <script>
    AOS.init({
      duration: 1200,              // slower = smoother
      easing: "cubic-bezier(.25,.8,.25,1)",  // premium easing
      once: false,
      mirror: true,
      offset: 150,
      anchorPlacement: "top-bottom"
    });

  </script> 
  <script src="chatbot.js"></script>
  <script src="script.js"></script>
</body>
<script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
<script>
    AOS.init({
      duration: 1200,              // slower = smoother
      easing: "cubic-bezier(.25,.8,.25,1)",  // premium easing
      once: false,
      mirror: true,
      offset: 150,
      anchorPlacement: "top-bottom"
    });

  </script>
</html>



style.css/////



/* ================= GLOBAL ================= */

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

/* Animated gradient background */
body {
    margin: 0;
    padding-top: 120px;
    font-family: Arial, sans-serif;
    background: linear-gradient(270deg, #0f2027, #203a43, #2c5364, #0f2027);
    background-size: 800% 800%;
    animation: gradientBG 20s ease infinite;
    color: white;
}

@keyframes gradientBG {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
}
body::before {
    content: "";
    position: fixed;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: radial-gradient(circle at 20% 30%, rgba(56,189,248,0.2), transparent 30%),
                radial-gradient(circle at 80% 70%, rgba(236,72,153,0.2), transparent 50%);
    animation: floatLights 30s linear infinite;

    pointer-events: none;
    z-index: 0;
}

@keyframes floatLights {
    0% { transform: translate(0,0) rotate(0deg); }
    50% { transform: translate(20px, -30px) rotate(180deg); }
    100% { transform: translate(0,0) rotate(360deg); }
}


html, body {
    overflow-x: hidden;
    width: 100%;
}

  

/* ================= SECTION ================= */

.section {
    padding: 100px 20px;
}

.container {
    max-width: 1200px;
    margin: auto;
}

h1, h2, h3 {
    margin-bottom: 20px;
}

p {
    line-height: 1.6;
    opacity: 0.9;
}

/* ================= NAVBAR ================= */

/* ================= iPHONE GLASS NAVBAR ================= */

nav {
    position: fixed;
    top: 20px;
    left: 50%;
    transform: translateX(-50%);
    width: 92%;
    max-width: 1200px;
    z-index: 2000;

    background: rgba(255, 255, 255, 0.08);
    backdrop-filter: blur(25px);
    -webkit-backdrop-filter: blur(25px);

    border-radius: 25px;
    border: 1px solid rgba(255, 255, 255, 0.18);

    box-shadow: 
        0 8px 32px rgba(0, 0, 0, 0.4),
        inset 0 0 15px rgba(255,255,255,0.05);

    transition: all 0.4s ease;
}

/* Navbar Container */
.nav-container {
    padding: 15px 30px;
}

/* Logo */
.logo {
    font-size: 20px;
    font-weight: 600;
    letter-spacing: 1px;
}

/* Links */
.nav-links li a {
    position: relative;
    font-size: 15px;
    transition: all 0.3s ease;
}

/* Smooth Hover Glow */
.nav-links li a:hover {
    color: #38bdf8;
    text-shadow: 0 0 10px #38bdf8;
}

/* Animated Underline */
.nav-links li a::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: -6px;
    width: 0%;
    height: 2px;
    background: linear-gradient(90deg, #38bdf8, #0ea5e9);
    transition: 0.4s ease;
}

.nav-links li a:hover::after {
    width: 100%;
}

.nav-container {
    max-width: 1200px;
    margin: auto;
    padding: 15px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.logo {
    font-size: 20px;
    font-weight: 600;
    color: white;
}

.nav-links {
    display: flex;
    gap: 25px;
    list-style: none;
}

.nav-links li a {
    text-decoration: none;
    color: white;
    font-size: 15px;
    transition: 0.3s ease;
}

.nav-links li a:hover {
    color: #38bdf8;
}

/* ================= HERO ================= */

.hero {
    text-align: center;
}

/* ================= GRID ================= */

.grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 25px;
    margin-top: 40px;
}

/* ================= GLASS CARD ================= */

.glass {
    background: rgba(255,255,255,0.05);
    backdrop-filter: blur(15px);
    border: 1px solid rgba(255,255,255,0.1);
    border-radius: 15px;
    padding: 25px;
    transition: 0.3s ease;
}

.glass:hover {
    transform: translateY(-10px) scale(1.03);
    background: linear-gradient(135deg, #38bdf8, #0ea5e9);
    color: black;
    box-shadow: 0 0 25px #38bdf8;
}


/* ================= CARD ================= */

.card {
    text-align: center;
}

/* ================= RESPONSIVE ================= */

@media (max-width: 768px) {

    .nav-links {
        gap: 15px;
    }

    .nav-links li a {
        font-size: 13px;
    }

    .section {
        padding: 80px 15px;
    }

    .grid {
        grid-template-columns: 1fr;
    }
}
/* ================= HERO LAYOUT ================= */

.hero-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 50px;
    flex-wrap: wrap;
}

.hero-text {
    flex: 1;
}

.hero-buttons {
    margin-top: 25px;
    display: flex;
    gap: 15px;
}

.hero-image {
    flex: 1;
    display: flex;
    justify-content: center;
}

.hero-image img {
    animation: floatImage 4s ease-in-out infinite;
    width: 300px;
    border-radius: 20px;
    border: 3px solid rgba(255,255,255,0.2);
    transition: 0.4s ease;
    
}
@keyframes floatImage {
    0% { transform: translateY(0px); }
    50% { transform: translateY(-15px); }
    100% { transform: translateY(0px); }
}

.hero-image img:hover {
    transform: scale(1.05);
    box-shadow: 0 20px 40px rgba(56,189,248,0.4);
}

/* ================= BUTTONS ================= */

.btn {
    padding: 12px 25px;
    border-radius: 30px;
    text-decoration: none;
    background: #38bdf8;
    color: black;
    font-weight: 500;
    transition: 0.3s ease;
    animation: pulse 2s infinite;
}

@keyframes pulse {
    0% { box-shadow: 0 0 0 0 rgba(56,189,248,0.7); }
    70% { box-shadow: 0 0 0 15px rgba(56,189,248,0); }
    100% { box-shadow: 0 0 0 0 rgba(56,189,248,0); }
}

.btn:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 25px rgba(56,189,248,0.4);
}

.btn.outline {
    background: transparent;
    border: 1px solid #38bdf8;
    color: #38bdf8;
}

.btn.outline:hover {
    background: #38bdf8;
    color: black;
}

/* ================= ADVANCED CHATBOT ================= */

/* ================= iPHONE GLASS CHATBOT ================= */

.chat-toggle {
    position: fixed;
    bottom: 25px;
    right: 25px;
    width: 65px;
    height: 65px;
    border-radius: 50%;
    background: linear-gradient(135deg, #38bdf8, #0ea5e9);
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 28px;
    cursor: pointer;
    box-shadow: 0 10px 30px rgba(56,189,248,0.6);
    transition: 0.3s ease;
    z-index: 3000;
}

.chat-toggle:hover {
    transform: scale(1.1);
}

/* Glass Container */

.chat-container {
    position: fixed;
    bottom: 110px;
    right: 25px;
    width: 360px;
    max-width: 92%;
    height: 520px;
    border-radius: 25px;
    backdrop-filter: blur(30px);
    background: rgba(255,255,255,0.08);
    border: 1px solid rgba(255,255,255,0.2);
    box-shadow: 0 25px 60px rgba(0,0,0,0.5);
    overflow: hidden;
    display: none;
    flex-direction: column;
    animation: popup 0.4s ease forwards;
    z-index: 3000;
}

/* Opening animation */

@keyframes popup {
    from {
        opacity: 0;
        transform: translateY(30px) scale(0.9);
    }
    to {
        opacity: 1;
        transform: translateY(0) scale(1);
    }
}

.chat-container.active {
    display: flex;
}

/* Header */

.chat-header {
    padding: 15px;
    font-weight: 600;
    font-size: 16px;
    background: linear-gradient(135deg, #38bdf8, #0ea5e9);
    color: black;
    display: flex;
    justify-content: space-between;
}

/* Messages */

.chat-messages {
    flex: 1;
    padding: 15px;
    overflow-y: auto;
    scroll-behavior: smooth;
}

/* Bot Bubble */

.bot-message {
    background: rgba(255,255,255,0.15);
    backdrop-filter: blur(10px);
    padding: 10px 15px;
    margin-bottom: 10px;
    border-radius: 18px 18px 18px 5px;
    font-size: 14px;
    animation: messageIn 0.3s ease;
}

/* User Bubble */

.user-message {
    background: linear-gradient(135deg, #38bdf8, #0ea5e9);
    color: black;
    padding: 10px 15px;
    margin-bottom: 10px;
    border-radius: 18px 18px 5px 18px;
    text-align: right;
    font-size: 14px;
    animation: messageIn 0.3s ease;
}

@keyframes messageIn {
    from {
        opacity: 0;
        transform: translateY(10px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

/* Input */

.chat-input {
    display: flex;
    padding: 10px;
    backdrop-filter: blur(10px);
    background: rgba(245, 235, 235, 0.05);
}

.chat-input input {
    flex: 1;
    padding: 12px;
    border-radius: 20px;
    border: none;
    outline: none;
    background: rgba(255,255,255,0.1);
    color: white;
}

.chat-input button {
    margin-left: 10px;
    padding: 12px 18px;
    border-radius: 20px;
    border: none;
    background: linear-gradient(135deg, #38bdf8, #0ea5e9);
    cursor: pointer;
}

/* Typing dots */

.typing {
    display: flex;
    gap: 5px;
}

.typing span {
    width: 6px;
    height: 6px;
    background: white;
    border-radius: 50%;
    animation: blink 1.2s infinite ease-in-out;
}

.typing span:nth-child(2) {
    animation-delay: 0.2s;
}

.typing span:nth-child(3) {
    animation-delay: 0.4s;
}

@keyframes blink {
    0%, 80%, 100% { opacity: 0; }
    40% { opacity: 1; }
}

/* Mobile */

@media (max-width: 480px) {
    .chat-container {
        width: 95%;
        right: 2.5%;
        bottom: 90px;
        height: 80vh;
    }
}
/* ===== CRAZY GLASS QUICK BUTTONS ===== */

.quick-buttons {
    margin-top: 15px;
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
}

.quick-buttons button {
    padding: 8px 14px;
    border-radius: 20px;
    border: 1px solid rgba(255,255,255,0.2);
    background: rgba(255,255,255,0.08);
    backdrop-filter: blur(15px);
    color: white;
    font-size: 13px;
    cursor: pointer;
    transition: all 0.3s ease;
    position: relative;
    overflow: hidden;
}

/* Hover Glow Effect */

.quick-buttons button:hover {
    background: linear-gradient(135deg, #38bdf8, #0ea5e9);
    color: black;
    box-shadow: 0 0 15px #38bdf8;
    transform: translateY(-3px) scale(1.05);
}

/* Touch / Click Press Effect */

.quick-buttons button:active {
    transform: scale(0.95);
    box-shadow: 0 0 8px #38bdf8;
}

/* Smooth Shine Effect */

.quick-buttons button::before {
    content: "";
    position: absolute;
    top: 0;
    left: -100%;
    width: 50%;
    height: 100%;
    background: rgba(255,255,255,0.4);
    transform: skewX(-25deg);
    transition: 0.5s;
}

.quick-buttons button:hover::before {
    left: 130%;
}


/* ================= CONTACT LINKS ================= */

.contact-link {
    color: #ffffff;
    text-decoration: none;
    font-weight: 500;
    transition: 0.3s ease;
}

.contact-link:hover {
    color: white;
}

/* ================= FOOTER ================= */

.footer {
    background: rgba(0,0,0,0.6);
    text-align: center;
    padding: 20px;
    margin-top: 50px;
    font-size: 14px;
    border-top: 1px solid rgba(255,255,255,0.1);
}
.reveal {
    opacity: 0;
    transform: translateY(60px);
    transition: all 0.8s ease;
}

.reveal.active {
    opacity: 1;
    transform: translateY(0);
}
/* Floating glass animation for resume thumbnail */
.bot-message img {
    animation: floatGlass 4s ease-in-out infinite alternate;
    box-shadow: 0 15px 30px rgba(56,189,248,0.3);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

@keyframes floatGlass {
    0% { transform: translateY(0px) rotate(0deg) scale(1); }
    50% { transform: translateY(-10px) rotate(2deg) scale(1.02); }
    100% { transform: translateY(0px) rotate(-2deg) scale(1); }
}

.bot-message img:hover {
    transform: scale(1.05);
    box-shadow: 0 20px 40px rgba(56,189,248,0.5);
}


script.js/////////





// Mobile Menu
const toggle = document.getElementById("menu-toggle");
const nav = document.getElementById("nav");

toggle.addEventListener("click", () => {
    nav.classList.toggle("active");
});

// Animate Skills When Visible
window.addEventListener("scroll", () => {
    const skillsSection = document.getElementById("skills");
    const position = skillsSection.getBoundingClientRect().top;
    const screenPosition = window.innerHeight;

    if(position < screenPosition - 100) {
        document.querySelectorAll(".progress-bar").forEach(bar => {
            bar.style.width = bar.getAttribute("data-width");
        });
    }
});
document.addEventListener("mousemove", function(e) {
    const moveX = (e.clientX / window.innerWidth - 0.5) * 20;
    const moveY = (e.clientY / window.innerHeight - 0.5) * 20;

    document.querySelector(".hero-image").style.transform =
        `translate(${moveX}px, ${moveY}px)`;
});
function showTyping() {
    const chatMessages = document.querySelector(".chat-messages");

    const typingDiv = document.createElement("div");
    typingDiv.classList.add("bot-message");
    typingDiv.innerHTML = `
        <div class="typing">
            <span></span><span></span><span></span>
        </div>
    `;

    chatMessages.appendChild(typingDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;

    setTimeout(() => {
        typingDiv.remove();
        addBotMessage("Hello 👋 Rushit Bhai! I am your AI assistant.");
    }, 1500);
}

function addBotMessage(text) {
    const chatMessages = document.querySelector(".chat-messages");

    const message = document.createElement("div");
    message.classList.add("bot-message");
    message.innerText = text;

    chatMessages.appendChild(message);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

document.querySelector(".chat-toggle").addEventListener("click", () => {
    const chat = document.querySelector(".chat-container");
    chat.classList.toggle("active");

    if (chat.classList.contains("active")) {
        showTyping();
    }
});
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (scrollY >= sectionTop - 150) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href").includes(current)) {
            link.classList.add("active");
        }
    });
});




chatbot.js/////


const responses = [
  {
      keywords: ["hello", "hi", "hey", "hii", "good morning", "good evening", "good afternoon"],
      reply: "Hello 👋 Welcome to Rushit's Portfolio! How can I help you today?",
      section: null
  },
  {
      keywords: ["skill", "technology", "tech stack"],
      reply: "Rushit knows HTML, CSS, JavaScript, Python, Git and Web Development fundamentals.",
      section: "skills"
  },
  {
      keywords: ["education", "study", "college", "degree"],
      reply: "Rushit is pursuing BCA at Silver Oak University (2023–2026). Currently in final year.",
      section: "education"
  },
  {
      keywords: ["contact", "phone", "email", "reach"],
      reply: "You can contact Rushit at rushit28gohil@gmail.com or +91 97264 89466.",
      section: "contact"
  },
  {
      keywords: ["resume", "cv"],
      reply: "Here's Rushit's resume:",
      section: "home"
  },
  {
      keywords: ["location", "address", "where"],
      reply: "Rushit is located in Navrangpura, Ahmedabad, Gujarat.",
      section: "contact"
  }
];

function toggleChat() {
  const chat = document.getElementById("chatContainer");

  const isOpen = chat.classList.contains("active");

  if (isOpen) {
      // If closing → go to homepage
      const homeSection = document.getElementById("home");
      if (homeSection) {
          homeSection.scrollIntoView({ behavior: "smooth" });
      }
  }

  chat.classList.toggle("active");
}

function handleKey(e) {
  if (e.key === "Enter") sendMessage();
}

function quickAsk(text) {
  document.getElementById("userInput").value = text;
  sendMessage();
}

function sendMessage() {
  const input = document.getElementById("userInput");
  const message = input.value.trim().toLowerCase();
  if (!message) return;

  addMessage(message, "user");
  input.value = "";

  setTimeout(() => {
      let found = false;

      for (let item of responses) {
          for (let word of item.keywords) {
              if (message.includes(word)) {
                  botReply(item.reply, item.section, word);
                  found = true;
                  return;
              }
          }
      }

      if (!found) {
          botReply("Sorry, I didn't understand. Try asking about skills, education, contact, resume or location.");
      }
  }, 600);
}

function addMessage(text, type) {
  const chat = document.getElementById("chatMessages");
  const div = document.createElement("div");
  div.className = type === "user" ? "user-message" : "bot-message";
  div.innerText = text;
  chat.appendChild(div);
  chat.scrollTop = chat.scrollHeight;
}

// Updated botReply to handle resume
function botReply(text, sectionId = null, keyword = null) {
  const chat = document.getElementById("chatMessages");

  // Show typing animation
  const typing = document.createElement("div");
  typing.className = "bot-message";
  typing.innerText = "Typing...";
  chat.appendChild(typing);
  chat.scrollTop = chat.scrollHeight;

  setTimeout(() => {
      typing.remove();

      // Special logic for resume
      if(keyword === "resume" || keyword === "cv") {
          const resumeDiv = document.createElement("div");
          resumeDiv.className = "bot-message";
          resumeDiv.style.display = "flex";
          resumeDiv.style.flexDirection = "column";
          resumeDiv.style.gap = "10px";

          // Optional resume thumbnail
          const img = document.createElement("img");
          img.src = "resume.jpg"; // put your resume image here
          img.alt = "Resume Preview";
          img.style.width = "100%";
          img.style.borderRadius = "10px";
          img.style.border = "1px solid rgba(255,255,255,0.2)";

          // Download button
          const button = document.createElement("a");
          button.href = "resume.pdf"; // your resume PDF
          button.download = "Rushit_Gohil_Resume.pdf";
          button.innerText = "Download Resume 📄";
          button.style.padding = "10px";
          button.style.borderRadius = "15px";
          button.style.background = "linear-gradient(135deg, #38bdf8, #0ea5e9)";
          button.style.color = "black";
          button.style.fontWeight = "600";
          button.style.textAlign = "center";
          button.style.textDecoration = "none";
          button.style.transition = "0.3s ease";
          button.onmouseover = () => button.style.transform = "scale(1.05)";
          button.onmouseout = () => button.style.transform = "scale(1)";

          resumeDiv.appendChild(img);
          resumeDiv.appendChild(button);
          chat.appendChild(resumeDiv);
      } else {
          addMessage(text, "bot");
      }

      if (sectionId) {
          document.getElementById(sectionId).scrollIntoView({ behavior: "smooth" });
      }
      chat.scrollTop = chat.scrollHeight;
  }, 800);
}


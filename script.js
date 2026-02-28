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


// ================= NAVBAR ACTIVE FIX =================

document.addEventListener("DOMContentLoaded", function () {

    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".nav-links a");

    

    function setActiveLink() {

        let scrollPosition = window.scrollY + 200;

        sections.forEach(section => {

            if (
                scrollPosition >= section.offsetTop &&
                scrollPosition < section.offsetTop + section.offsetHeight
            ) {

                navLinks.forEach(link => {
                    link.classList.remove("active");

                    if (link.getAttribute("href") === "#" + section.id) {
                        link.classList.add("active");
                    }
                });

            }

        });
    }

    window.addEventListener("scroll", setActiveLink);

});
// ================= 3D TILT EFFECT =================

document.querySelectorAll(".project-card").forEach(card => {

    card.addEventListener("mousemove", e => {

        const x = e.offsetX;
        const y = e.offsetY;

        const rotateX = (y / card.offsetHeight - 0.5) * 15;
        const rotateY = (x / card.offsetWidth - 0.5) * -15;

        card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        card.style.transition = "0.1s";
    });

    card.addEventListener("mouseleave", () => {
        card.style.transform = "rotateX(0) rotateY(0)";
        card.style.transition = "0.5s";
    });

});
// ================= SMART AUTO GREETING =================

document.addEventListener("DOMContentLoaded", function () {

    const hour = new Date().getHours();
    let greeting = "";

    if (hour < 12) {
        greeting = "Good Morning ☀️";
    } 
    else if (hour < 18) {
        greeting = "Good Afternoon 🌤️";
    } 
    else if (hour < 22) {
        greeting = "Good Evening 🌆";
    } 
    else {
        greeting = "Working Late? Respect 🔥";
    }

    const heroTitle = document.querySelector(".hero-title");

    if (heroTitle) {
        heroTitle.innerText = greeting + ", I'm Rushit Gohil";
    }

});
const profileCards = document.querySelectorAll(".profile-card");

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
        }
    });
}, { threshold: 0.2 });

profileCards.forEach(card => {
    card.style.opacity = "0";
    card.style.transform = "translateY(40px)";
    card.style.transition = "0.6s ease";
    observer.observe(card);
});


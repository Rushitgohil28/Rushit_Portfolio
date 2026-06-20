// ================= INTERACTIVE MOBILE RESPONSIVE OVERLAY MENU =================

function toggleMobileMenu() {
    const toggleBtn = document.querySelector(".menu-toggle-btn");
    const wrapper = document.getElementById("menuWrapper");

    toggleBtn.classList.toggle("open");
    wrapper.classList.toggle("show");

    if (wrapper.classList.contains("show")) {
        document.body.style.overflow = "hidden";
    } else {
        document.body.style.overflow = "auto";
    }
}

function closeMobileMenu() {
    const toggleBtn = document.querySelector(".menu-toggle-btn");
    const wrapper = document.getElementById("menuWrapper");
    
    if (wrapper.classList.contains("show")) {
        toggleBtn.classList.remove("open");
        wrapper.classList.remove("show");
        document.body.style.overflow = "auto";
    }
}

// ================= NAVBAR SCROLL MARKER SYSTEM =================

document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".menu-wrapper .nav-links a");

    function updateActiveOnScroll() {
        let currentPos = window.scrollY + (window.innerHeight / 3);

        sections.forEach(section => {
            const top = section.offsetTop;
            const height = section.offsetHeight;
            const id = section.getAttribute("id");

            if (currentPos >= top && currentPos < top + height) {
                navLinks.forEach(link => {
                    link.classList.remove("active");
                    if (link.getAttribute("href") === "#" + id) {
                        link.classList.add("active");
                    }
                });
            }
        });
    }

    window.addEventListener("scroll", updateActiveOnScroll);
    updateActiveOnScroll();
});

// Animate Skills When Visible
window.addEventListener("scroll", () => {
    const skillsSection = document.getElementById("skills");
    if (!skillsSection) return;
    
    const position = skillsSection.getBoundingClientRect().top;
    const screenPosition = window.innerHeight;

    if (position < screenPosition - 100) {
        document.querySelectorAll(".progress-bar").forEach(bar => {
            bar.style.width = bar.getAttribute("data-width");
        });
    }
});

// ================= ADVANCED CHATBOT UI HANDLING =================

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

    if (chat.classList.contains("active") && document.getElementById("chatMessages").children.length <= 2) {
        showTyping();
    }
});

// ================= SMART AUTO GREETING =================

document.addEventListener("DOMContentLoaded", function () {
    const hour = new Date().getHours();
    let greeting = "";

    if (hour < 12) {
        greeting = "Good Morning ☀️";
    } else if (hour < 18) {
        greeting = "Good Afternoon 🌤️";
    } else if (hour < 22) {
        greeting = "Good Evening 🌆";
    } else {
        greeting = "Working Late? Respect 🔥";
    }

    const heroTitle = document.querySelector(".hero-title");
    if (heroTitle) {
        heroTitle.innerText = greeting + ", I'm Rushit Gohil";
    }
});

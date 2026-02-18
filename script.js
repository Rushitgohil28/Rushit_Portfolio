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

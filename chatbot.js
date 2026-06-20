const responses = [
  {
      keywords: ["hello", "hi", "hey", "hii", "good morning", "good evening", "good afternoon"],
      reply: "Hello 👋 I'm Rushit's virtual assistant. You can ask me about his skills, education, resume, or contact details.",
      section: null
  },
  {
      keywords: ["skill", "scale","technology", "tech stack"],
      reply: "Rushit knows HTML, CSS, JavaScript, Python, Git and Web Development fundamentals.",
      section: "skills"
  },
  {
      keywords: ["education", "study", "college", "degree", "bca", "hons"],
      /* Updated to perfectly sync with your 2026-2027 BCA Hons timeline */
      reply: "Rushit has completed his 3-year BCA degree and is currently pursuing his BCA Hons (7th Semester) at Silver Oak University (2026–2027).",
      section: "education"
  },
  {
    keywords: ["contact", "phone", "email", "reach"],
    reply: `
    <div class="contact-card">
        <h4>📬 Get In Touch</h4>
        <a href="https://mail.google.com/mail/?view=cm&fs=1&to=rushit28gohil@gmail.com" target="_blank" class="chat-link full">📧 rushit28gohil@gmail.com</a>
        <a href="tel:+919726489466" class="chat-link full">📱 +91 97264 89466</a>
    </div>
    `,
    section: null
  },
  {
      keywords: ["resume", "cv"],
      reply: "Here's Rushit's resume:",
      section: "home"
  },
  {
    keywords: ["language", "language known"],
    reply: "Rushit knows Gujarati, Hindi and English.",
    section: "contact"
  },
  {
      keywords: ["location", "address", "where"],
      reply: "Rushit is located in Navrangpura, Ahmedabad, Gujarat.",
      section: "contact"
  },
  {
    keywords: ["instagram", "insta"],
    reply: `Here is Rushit's Instagram 👇 <a href="https://instagram.com/rolexx_rushi" target="_blank" class="chat-link">🔗 Open Instagram</a>`,
    section: null
  },
  {
    keywords: ["fb", "facebook"],
    reply: `Here is Rushit's Facebook 👇 <a href="https://www.facebook.com/share/175DN594ou/" target="_blank" class="chat-link">🔗 Open Facebook</a>`,
    section: null
  },
  {
    keywords: ["github", "projects code"],
    reply: `Here is Rushit's GitHub 👇 <a href="https://github.com/Rushitgohil28" target="_blank" class="chat-link">🔗 Open GitHub</a>`,
    section: null
  },
  {
    keywords: ["linkedin", "professional profile"],
    reply: `Here is Rushit's LinkedIn 👇 <a href="https://linkedin.com/in/rushit-gohil-profile" target="_blank" class="chat-link">🔗 Open LinkedIn</a>`,
    section: null
  },

  /* ================= 🔥 SOCIAL MEDIA CHAT OPTION BLOCK ================= */
  {
    keywords: ["social media", "social", "profiles", "links"],
    reply: `
    <div class="contact-card" style="display: flex; flex-direction: column; gap: 8px; width: 100%;">
        <h4 style="margin-bottom: 4px;">🌐 Connect With Rushit</h4>
        <a href="https://linkedin.com/in/rushit-gohil-profile" target="_blank" class="chat-link full" style="display: block; text-decoration: none;">
            <i class="fab fa-linkedin" style="color: #0a66c2; margin-right: 4px;"></i> LinkedIn
        </a>
        <a href="https://github.com/Rushitgohil28" target="_blank" class="chat-link full" style="display: block; text-decoration: none;">
            <i class="fab fa-github" style="color: #ffffff; margin-right: 4px;"></i> GitHub
        </a>
        <a href="https://instagram.com/rolexx_rushi" target="_blank" class="chat-link full" style="display: block; text-decoration: none;">
            <i class="fab fa-instagram" style="color: #e1306c; margin-right: 4px;"></i> Instagram
        </a>
        <a href="https://www.facebook.com/share/175DN594ou/" target="_blank" class="chat-link full" style="display: block; text-decoration: none;">
            <i class="fab fa-facebook" style="color: #1877f2; margin-right: 4px;"></i> Facebook
        </a>
    </div>
    `,
    section: "profiles" 
  }
];

let voiceMode = false;

function toggleChat() {
  const chat = document.getElementById("chatContainer");
  const isOpen = chat.classList.contains("active");

  if (isOpen) {
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
    div.innerHTML = text;

    chat.appendChild(div);
    chat.scrollTop = chat.scrollHeight;

    if (type === "bot" && voiceMode === true) {
        speakText(text);
        voiceMode = false;  
    }
}

function speakText(text) {
    window.speechSynthesis.cancel(); 
    const speech = new SpeechSynthesisUtterance(text);
    speech.lang = "en-US";   
    speech.rate = 1.05;      
    speech.pitch = 0.95;     
    speech.volume = 1;

    const voices = speechSynthesis.getVoices();
    const preferredVoice = voices.find(v =>
        v.name.includes("Google") ||
        v.name.includes("Microsoft") ||
        v.lang === "en-US"
    );

    if (preferredVoice) speech.voice = preferredVoice;
    window.speechSynthesis.speak(speech);
}

function botReply(text, sectionId = null, keyword = null) {
  const chat = document.getElementById("chatMessages");
  const typing = document.createElement("div");
  typing.className = "bot-message";
  typing.innerText = "Typing...";
  chat.appendChild(typing);
  chat.scrollTop = chat.scrollHeight;

  setTimeout(() => {
      typing.remove();

      if (keyword === "resume" || keyword === "cv") {
          addMessage("Here is your resume...", "bot");
          const resumeDiv = document.createElement("div");
          resumeDiv.className = "bot-message";
          resumeDiv.style.display = "flex";
          resumeDiv.style.flexDirection = "column";
          resumeDiv.style.gap = "10px";

          const img = document.createElement("img");
          img.src = "resume.jpg"; 
          img.alt = "Resume Preview";
          img.style.width = "100%";
          img.style.borderRadius = "10px";
          img.style.border = "1px solid rgba(255,255,255,0.2)";

          const button = document.createElement("a");
          button.href = "resume.pdf"; 
          button.download = "Rushit_Gohil_Resume.pdf";
          button.innerText = "Download Resume 📄";
          button.style.padding = "10px";
          button.style.borderRadius = "15px";
          button.style.background = "linear-gradient(135deg, #38bdf8, #0ea5e9)";
          button.style.color = "black";
          button.style.fontWeight = "600";
          button.style.textAlign = "center";
          button.style.textDecoration = "none";

          resumeDiv.appendChild(img);
          resumeDiv.appendChild(button);
          chat.appendChild(resumeDiv);
      } else {
          addMessage(text, "bot");
      }

      if (sectionId) {
          const sectionElement = document.getElementById(sectionId);
          if (sectionElement) sectionElement.scrollIntoView({ behavior: "smooth" });
      }
      chat.scrollTop = chat.scrollHeight;
  }, 800);
}

function startListening() {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) {
        alert("Use Google Chrome for voice feature.");
        return;
    }

    const recognition = new SpeechRecognition();
    const wave = document.getElementById("chatWave");
    recognition.lang = "en-IN";

    recognition.onstart = () => {
        voiceMode = true;
        window.speechSynthesis.cancel();
        if (wave) wave.style.display = "flex";
    };

    recognition.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        document.getElementById("userInput").value = transcript;
        sendMessage();
    };

    recognition.onend = () => { if (wave) wave.style.display = "none"; };
    recognition.onerror = () => { if (wave) wave.style.display = "none"; };
    recognition.start();
}

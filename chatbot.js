const startSound = new Audio("mic-start.mp3");
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
    keywords: ["done","ok","nice"],
    reply: "Thank You for your complement, Do you want to know about something...",
}
];
let voiceMode = false;
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

    // 🔥 Only speak if it came from mic
    if (type === "bot" && voiceMode === true) {
        speakText(text);
        voiceMode = false;  // reset after speaking
    }
}

function speakText(text) {

    window.speechSynthesis.cancel(); // stop previous voice

    const speech = new SpeechSynthesisUtterance(text);

    speech.lang = "en-US";   // US sounds smoother than en-IN
    speech.rate = 1.05;      // slightly faster (professional feel)
    speech.pitch = 0.95;     // little lower = more AI tone
    speech.volume = 1;

    const voices = speechSynthesis.getVoices();

    // Prefer Google or Microsoft voices
    const preferredVoice = voices.find(v =>
        v.name.includes("Google") ||
        v.name.includes("Microsoft") ||
        v.lang === "en-US"
    );

    if (preferredVoice) {
        speech.voice = preferredVoice;
    }

    window.speechSynthesis.speak(speech);
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
// Voice Recognition
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

        // ✅ STOP any ongoing bot speech immediately
        window.speechSynthesis.cancel();

        if (wave) wave.style.display = "flex";
    };

    recognition.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        document.getElementById("userInput").value = transcript;
        sendMessage();
    };

    recognition.onend = () => {
        if (wave) wave.style.display = "none";
    };

    recognition.onerror = () => {
        if (wave) wave.style.display = "none";
    };

    recognition.start();
}

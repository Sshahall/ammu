const startModal = document.getElementById("startModal");
const startYesBtn = document.getElementById("startYesBtn");
const startNoBtn = document.getElementById("startNoBtn");

// Function to play music
function playMusic() {
  const audio = new Audio("romantic.mp3"); // Replace with your music URL
  audio.loop = true; // Make the music loop
  audio.play();
}

window.onload = function () {
  startModal.style.display = "block"; // Show modal when the page loads
};

startYesBtn.onclick = function () {
  playMusic();
  startModal.style.display = "none"; // Hide the modal after "Yes"
};

startNoBtn.onclick = function () {
  alert("Please click Yes to start!");
  startModal.style.display = "block"; // Keep the modal visible
};

AOS.init({
  duration: 1000,
  once: true,
});

const swiper = new Swiper(".swiper", {
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
});

let yesBtn = document.getElementById("yesBtn");
let yesBtnSize = 16; // starting size in px

document.getElementById("noBtn").addEventListener("click", () => {
  yesBtnSize += 10;
  yesBtn.style.fontSize = yesBtnSize + "px";
});

yesBtn.addEventListener("click", () => {
  Swal.fire({
    title: "Awww 🥺❤️",
    text: "I love you more than words can say!",
    confirmButtonText: "Love you too 😘",
    confirmButtonColor: "#ff69b4",
    background: "#fff0f5",
    color: "#333",
  });
});

// Set the date you both got committed (e.g., "2025-04-18")
const commitmentDate = new Date("2025-04-18");

// Function to update the countdown timer
function updateCountdown() {
  const now = new Date();
  const diffTime = now - commitmentDate;
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

  // Display the commitment date
  document.getElementById("commitment-date").textContent =
    commitmentDate.toDateString();

  // Display the number of days
  document.getElementById("days-countdown").textContent = diffDays;
}

// Call the update function when the page loads
updateCountdown();

// Update the countdown every 24 hours (86400000 milliseconds)
setInterval(updateCountdown, 86400000);

setInterval(() => {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.style.left = `${Math.random() * 20}vw`;
  heart.style.animationDuration = `${Math.random() * 10 + 2}s`;
  heart.innerText = "❤️";
  document.body.appendChild(heart);
  setTimeout(() => heart.remove(), 5000);
}, 300);

const text = "You’re the reason my world feels so magical ✨";
let i = 0;
function typeWriter() {
  if (i < text.length) {
    document.getElementById("typeText").innerHTML += text.charAt(i);
    i++;
    setTimeout(typeWriter, 60);
  }
}
window.onload = typeWriter;

document.addEventListener("DOMContentLoaded", function () {
  const heart = document.getElementById("loveHeart");
  const message = document.getElementById("loveMessage");
  const popSound = document.getElementById("lovePopSound");

  document.getElementById("loveLockContainer").addEventListener("click", function () {
    heart.classList.add("pop-active");
    message.style.display = "block";

    popSound.currentTime = 0;
    popSound.play().catch((err) => {
      console.warn("Audio play failed:", err);
    });
  });
});

function showSurprisePopup() {
  Swal.fire({
    title: "Surprise! 🎁",
    text: "I love you more than words can say 💗",
    confirmButtonText: "Awww 🥺",
  });
}

function calculateLove() {
  const name1 = document.getElementById("name1").value.trim().toLowerCase();
  const name2 = document.getElementById("name2").value.trim().toLowerCase();

  if (name1 && name2) {
      let lovePercentage;

      // Check if the names are Anakha and Shahal (in any order)
      if (
          (name1 === "anakha" && name2 === "shahal") ||
          (name1 === "shahal" && name2 === "anakha")
      ) {
          lovePercentage = 100;
      } else {
          // Generate a random percentage less than 90
          lovePercentage = Math.floor(Math.random() * 90);
      }

      document.getElementById("percentage").textContent = lovePercentage + "%";
      document.getElementById("love-percentage").style.display = "block";
  } else {
      alert("Please enter both names.");
  }
}

function updateMood() {
  const mood = document.getElementById("moodSelect").value;
  const moodResult = document.getElementById("moodResult");

  let message = "";
  switch (mood) {
    case "happy":
      message =
        "😊 Aww Ammuseyyyy, thats how i want you to be!and find reasons to be happy always";
      break;
    case "excited":
      message = "😄 Uhummmmm tell meee why are u excited!";
      break;
    case "missing":
      message = "🥺 I miss you too bbg, my love! ill be here always for uhhh";
      break;
    case "love":
      message =
        "😍 Overflowing with love, just like me! ilysmmmmmmmmmmmm more than anyone";
      break;
    case "silly":
      message = "😝 Haha, even u calls me as silly boy hahaaaaa!";
      break;
    case "grateful":
      message = "🙏 I'm grateful for you toooo!";
      break;
    default:
      message = "";
  }

  moodResult.innerHTML = message;
}

// Update the rating value as the slider is moved
const ratingSlider = document.getElementById("ratingSlider");
const ratingValue = document.getElementById("ratingValue");

ratingSlider.oninput = function () {
  ratingValue.textContent = ratingSlider.value;
};

// Function to handle the rating submission
function submitRating() {
  const rating = ratingSlider.value;
  const ratingResult = document.getElementById("ratingResult");

  // Conditional responses based on the rating value
  if (rating >= 90) {
    ratingResult.innerHTML = `Wow! You love me a lot! 💖 I love you too mmaaww mmaww mmawww! 😘 (Rating: ${rating}%)`;
  } else if (rating >= 70) {
    ratingResult.innerHTML = `Aww! That's sweet! 💕 I'm happy! oru mmaw therattey (Rating: ${rating}%)`;
  } else if (rating >= 50) {
    ratingResult.innerHTML = `I see! There's always room for more love 😜ill improve (Rating: ${rating}%)`;
  } else if (rating >= 30) {
    ratingResult.innerHTML = `Hmm... I feel like I need to work harder! 😅 (Rating: ${rating}%)`;
  } else {
    ratingResult.innerHTML = `i think u dont love me? (Rating: ${rating}%)`;
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const text =
    "I'm so grateful for this world and for the moment you told me you love me. 💗";
  let i = 0;
  const speed = 50;

  function typeWriter() {
    if (i < text.length) {
      document.getElementById("typedText").innerHTML += text.charAt(i);
      i++;
      setTimeout(typeWriter, speed);
    }
  }

  typeWriter();
});


const quizData = [
  {
    question: "Who said 'I love you' first?",
    options: { a: "Shahal", b: "Anakha" },
    correct: "a",
  },
  {
    question: "Who's more likely to steal fries?",
    options: { a: "Anakha", b: "Shahal" },
    correct: "a",
  },
  {
    question: "Who plans the dates?",
    options: { a: "Shahal", b: "Anakha" },
    correct: "a",
  },
  {
    question: "Who is more clingy? 😅",
    options: { a: "Shahal", b: "Anakha" },
    correct: "a",
  },
  {
    question: "Who apologizes first after a fight?",
    options: { a: "Shahal", b: "Anakha" },
    correct: "a",
  },
  {
    question: "Who takes longer to reply? 😆",
    options: { a: "Anakha", b: "Shahal" },
    correct: "a",
  },
  {
    question: "Who is more romantic? 💐",
    options: { a: "Shahal", b: "Anakha" },
    correct: "a",
  },
  {
    question: "Who’s always says vulgar? 😜",
    options: { a: "Anakha", b: "Shahal"},
    correct: "a",
  },
  {
    question: "Who sensitive the most?",
    options: { a: "Anakha", b: "Shahal"},
    correct: "a",
  },
  {
    question: "Who sends more memes?",
    options: { a: "Shahal", b: "Anakha" },
    correct: "b",
  },
  {
    question: "Who plans surprises?",
    options: { a: "Shahal", b: "Anakha" },
    correct: "a",
  },
  {
    question: "Who said 'I miss you' first?",
    options: { a: "Anakha", b: "Shahal" },
    correct: "b",
  },
  {
    question: "Who would survive a zombie apocalypse? 🧟‍♀️",
    options: { a: "Shahal", b: "Anakha" },
    correct: "a",
  },
  {
    question: "Who takes more selfies?",
    options: { a: "Anakha", b: "Shahal" },
    correct: "a",
  },
  {
    question: "Who secretly stalks old messages? 🧐📱",
    options: { a: "Anakha", b: "Shahal" },
    correct: "a",
  },
  {
    question: "Who texts ‘I love you’ more? 💬❤️",
    options: { a: "Shahal", b: "Anakha" },
    correct: "b",
  },
  {
    question: "Who needs more cuddles? 🤗",
    options: { a: "Anakha", b: "Shahal" },
    correct: "b",
  },{
    question: "Who gets jealous easily? 😏",
    options: { a: "Anakha", b: "Shahal" },
    correct: "a",
  },
];

let currentQuestion = 0;

function loadQuestion() {
  const q = quizData[currentQuestion];
  document.getElementById("questionText").textContent = q.question;
  document.querySelectorAll(".optionBtn")[0].textContent = q.options.a;
  document.querySelectorAll(".optionBtn")[1].textContent = q.options.b;
  document.getElementById("result").textContent = "";
}

function checkAnswer(answer) {
  const correct = quizData[currentQuestion].correct;
  if (answer === correct) {
    document.getElementById("result").textContent = "Correct! ❤️";
  } else {
    document.getElementById("result").textContent = "Ayy wrong 🙈";
  }

  setTimeout(() => {
    currentQuestion++;
    if (currentQuestion < quizData.length) {
      loadQuestion();
    } else {
      document.getElementById("quiz").innerHTML = "<h3>Quiz Completed! 💕</h3>";
    }
  }, 1000);
}

// Load the first question on page load
loadQuestion();

function checkPassword() {
  const entered = document.getElementById('vaultPassword').value.toLowerCase();
  const secretDiv = document.getElementById('secretMessage');

  // Accepting 'shahal anakha' and 'anakha shahal'
  const valid1 = "worldofammus";
  const valid2 = "ammuandshahal";
  const valid3 = "iloveyousomuch";

  if (entered === valid1 || entered === valid2 || entered === valid3) {
    secretDiv.classList.remove("hidden");
  } else {
    alert("Wrong password 😢 Try again!");
  }
}


const gifts = [
  "I’ll give you a kiss when we meet!",
  "I'll buy you a Hot Wheels car!",
  "A surprise visit for you",
  "I’ll cook you your favorite meal!the next day of our marriage",
  "I’ll write you a sweet letter, dont ask when!",
  "film ticket,heheee ,lets go together!",
  "ill buy you mandhi and kunafa for your bday!"
];

// Check if there's a saved gift in localStorage
if (localStorage.getItem("savedGift")) {
  document.getElementById("dice-result").textContent = localStorage.getItem("savedGift");
  // Hide the roll button if a gift has already been rolled
  document.getElementById("roll-button").style.display = "none";
} else {
  document.getElementById("dice-result").textContent = "Your gift will appear here";
}

document.getElementById("roll-button").addEventListener("click", function() {
  const randomGift = gifts[Math.floor(Math.random() * gifts.length)];
  // Save the selected gift in localStorage
  localStorage.setItem("savedGift", randomGift);
  // Display the gift
  document.getElementById("dice-result").textContent = randomGift;
  // Hide the roll button after the first roll
  document.getElementById("roll-button").style.display = "none";
});


function updateHeartbeatCountdown() {
  const targetDate = new Date("2025-06-30");
  const today = new Date();
  const diff = targetDate - today;
  const daysLeft = Math.ceil(diff / (1000 * 60 * 60 * 24));
  document.getElementById('heartbeat-days-left').textContent = daysLeft;
}

updateHeartbeatCountdown();

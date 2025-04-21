const startModal = document.getElementById("startModal");
    const startYesBtn = document.getElementById("startYesBtn");
    const startNoBtn = document.getElementById("startNoBtn");

    // Function to play music
    function playMusic() {
      const audio = new Audio('romantic.mp3'); // Replace with your music URL
      audio.loop = true; // Make the music loop
      audio.play();
    }

    window.onload = function() {
      startModal.style.display = "block"; // Show modal when the page loads
    };

    startYesBtn.onclick = function() {
      playMusic();
      startModal.style.display = "none"; // Hide the modal after "Yes"
    };

    startNoBtn.onclick = function() {
      alert("Please click Yes to start!");
      startModal.style.display = "block"; // Keep the modal visible
    };

AOS.init({
    duration: 1000,
    once: true
  });

  const swiper = new Swiper('.swiper', {
    loop: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },
  });

  let noBtn = document.getElementById('noBtn');
let noBtnSize = 16;

noBtn.addEventListener('click', () => {
  noBtnSize += 10;
  noBtn.style.fontSize = noBtnSize + 'px';
});
document.getElementById('yesBtn').addEventListener('click', () => {
  Swal.fire({
    title: 'Awww 🥺❤️',
    text: 'I love you more than words can say!',
    confirmButtonText: 'Love you too 😘',
    confirmButtonColor: '#ff69b4',
    background: '#fff0f5',
    color: '#333',
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
  document.getElementById("commitment-date").textContent = commitmentDate.toDateString();

  // Display the number of days
  document.getElementById("days-countdown").textContent = diffDays;
}

// Call the update function when the page loads
updateCountdown();

// Update the countdown every 24 hours (86400000 milliseconds)
setInterval(updateCountdown, 86400000);


setInterval(() => {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.style.left = `${Math.random() * 20}vw`;
    heart.style.animationDuration = `${Math.random() * 10 + 2}s`;
    heart.innerText = '❤️';
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


  function revealMessage() {
    const lock = document.getElementById('heartLock');
    const msg = document.getElementById('secretMessage');
    const pop = document.getElementById('popSound');
    lock.classList.add('unlocked');
    msg.style.display = 'block';

    pop.currentTime = 0; // Reset sound if played before
  pop.play();
  }



//   detect the shake

let lastX, lastY, lastZ;
let moveThreshold = 15; // adjust sensitivity
let lastTime = new Date();

window.addEventListener("devicemotion", function(e) {
  const current = new Date();
  const deltaTime = current - lastTime;
  if (deltaTime < 500) return; // limit how often surprise shows

  let acc = e.accelerationIncludingGravity;
  if (!acc) return;

  let { x, y, z } = acc;

  if (lastX !== null) {
    let deltaX = Math.abs(x - lastX);
    let deltaY = Math.abs(y - lastY);
    let deltaZ = Math.abs(z - lastZ);

    if (deltaX + deltaY + deltaZ > moveThreshold) {
      lastTime = new Date();
      showSurprisePopup(); // show your cute surprise
    }
  }

  lastX = x;
  lastY = y;
  lastZ = z;
}, true);


// shake ends

function showSurprisePopup() {
    Swal.fire({
      title: 'Surprise! 🎁',
      text: 'I love you more than words can say 💗',
      confirmButtonText: 'Awww 🥺'
    });
  }
  

  function calculateLove() {
    const name1 = document.getElementById("name1").value;
    const name2 = document.getElementById("name2").value;

    if (name1 && name2) {
      // Always show 100%
      const lovePercentage = 100;
      document.getElementById("percentage").textContent = lovePercentage;
      document.getElementById("love-percentage").style.display = "block";
    } else {
      alert("Please enter both names.");
    }
  }

  function updateMood() {
    const mood = document.getElementById('moodSelect').value;
    const moodResult = document.getElementById('moodResult');
  
    let message = "";
    switch (mood) {
      case "happy":
        message = "😊 Aww Ammuseyyyy, thats how i want you to be!and find reasons to be happy always";
        break;
      case "excited":
        message = "😄 Uhummmmm tell meee why are u excited!";
        break;
      case "missing":
        message = "🥺 I miss you too bbg, my love! ill be here always for uhhh";
        break;
      case "love":
        message = "😍 Overflowing with love, just like me! ilysmmmmmmmmmmmm more than anyone";
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
const ratingSlider = document.getElementById('ratingSlider');
const ratingValue = document.getElementById('ratingValue');

ratingSlider.oninput = function() {
  ratingValue.textContent = ratingSlider.value;
};

// Function to handle the rating submission
function submitRating() {
  const rating = ratingSlider.value;
  const ratingResult = document.getElementById('ratingResult');

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
    const text = "I'm so grateful for this world and for the moment you told me you love me. 💗";
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
  
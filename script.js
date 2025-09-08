function showBirthdayMessage() {
  const birthdayCard = document.getElementById("birthdayCard");
  const celebrationSound = document.getElementById("celebrationSound");
  const btn = document.getElementById("celebrateBtn");
  const reply = document.getElementById("replySection");

  birthdayCard.classList.add("show-message");
  btn.classList.add("btn-moved");

  // show reply box 🎁
  reply.style.display = "block";

  // play sound
  celebrationSound.play().catch(() => {
    document.body.addEventListener("touchstart", () => {
      celebrationSound.play();
    }, { once: true });
  });
}

function sendReply() {
  const input = document.getElementById("replyInput").value;
  if (input.trim() !== "") {
    const phoneNumber = "233303980391"; // Replace with your WhatsApp number
    const message = encodeURIComponent(input);
    window.open("https://wa.me/" + phoneNumber + "?text=" + message, "_blank");
  } else {
    alert("⚠️ Please type a message first.");
  }
}

const btn = document.getElementById("celebrateBtn");
btn.addEventListener("touchend", showBirthdayMessage, { passive: true });
btn.addEventListener("click", showBirthdayMessage);

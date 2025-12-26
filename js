/* PAGE 1 */
function tapNo() {
  document.getElementById("msg").innerText = "Muskoni Yes Nokku 😌💖";
}
function tapYes() {
  location.href = "page2.html";
}

/* PAGE 2 – CAKE + 7 QUOTES */
let cakeQuotes = [
  "On your birthday, I thank God not just for your birth, but for bringing you into my life 🎂💖",
  "You are the most beautiful gift God has ever given to my heart 🙏💝",
  "Every year of your life makes this world more beautiful, because you are in it 😍💓",
  "Calling you my wife is my heart’s greatest pride 💍❤️",
  "Your smile is my favorite celebration, today and always 🎉😘",
  "May God protect your heart, your dreams, and our love forever 🙏♾️",
  "This cake will finish, but my love for you never will ♾️💓"
];

function blowCandle() {
  document.getElementById("candle").innerText = "💨";
  document.getElementById("knife").style.display = "block";
}

function cutCake() {
  const cake = document.getElementById("cake");
  cake.classList.add("shake");
  setTimeout(() => {
    cake.classList.remove("shake");
    document.getElementById("knife").style.display = "none";
    document.getElementById("pieces").style.display = "block";
  }, 600);
}

function showCakeQuote(i) {
  document.getElementById("cakeQuote").innerText = cakeQuotes[i];
}

/* PAGE 3 PASSWORD */
function checkPassword() {
  if (document.getElementById("pass").value === "724") {
    location.href = "page4.html";
  } else {
    alert("This love needs the right key 💔");
  }
}

/* PAGE 4 HEART AGENT */
let q = 0;
const correct = ["Mamatha","Yes","Yes","Yes","Yes","Yes","Yes"];
function answer(val) {
  if (val !== correct[q]) {
    alert("Not eligible ❌ Please try again");
    location.reload();
    return;
  }
  q++;
  if (q === correct.length) {
    location.href = "page5.html";
  } else {
    document.getElementById("q"+q).style.display = "block";
  }
}

/* PAGE 6 – 24 LOVE QUOTES */
let quotes = [
  "I love you more than words, more than distance, more than time 💓🫂",
  "You are not just my love, you are my safe place 😘💖",
  "Every heartbeat of mine whispers your name 💓🫂",
  "I choose you, again and again, without hesitation ❣️😍",
  "Loving you is the easiest and best decision of my life 💋💝",
  "You live in my heart like a beautiful prayer 🙏💓",
  "Even silence feels romantic when my heart thinks of you 😘🫂",
  "You are my today, my tomorrow, and my forever ♾️💖",
  "I don’t need the world, as long as I have you 💓🌍",
  "Your love healed parts of me I didn’t know were broken 🫂❣️",
  "I see my future every time I look at you 😍💫",
  "You are my answered prayer, my blessing, my love 🙏💝",
  "Distance never scared me, because my heart is already with you 💓🫂",
  "I love you deeply, purely, faithfully ❣️💋",
  "You are the calm in all my chaos 😘💓",
  "My heart recognized you before my mind understood 😍🫂",
  "You are my favorite thought every single day 💖🌸",
  "I don’t promise perfection, I promise forever ♾️❣️",
  "With you, love feels easy and life feels beautiful 💓💋",
  "You are not a part of my life, you are my life 🫂💖",
  "My heart smiles every time it thinks of you 😍💓",
  "I love you with my soul, not just my heart ❣️🫂",
  "You are God’s gift to me, and I protect you with my love 🙏💝",
  "This button may stop, but my love for you never will ♾️💓🫂"
];

let qi = 0;
function takeLove() {
  document.getElementById("quoteBox").innerText = quotes[qi];
  qi = (qi + 1) % quotes.length;
}

/* PAGE 7 EMOJI SHOWER */
const emojis = ["😘","🫂","💋","❣️","😍","💓"];
function showerLove() {
  for (let i = 0; i < 30; i++) {
    let e = document.createElement("div");
    e.className = "emoji";
    e.innerText = emojis[Math.floor(Math.random()*emojis.length)];
    e.style.left = Math.random()*window.innerWidth + "px";
    e.style.top = Math.random()*window.innerHeight + "px";
    document.body.appendChild(e);
    setTimeout(() => e.remove(), 3000);
  }
  }

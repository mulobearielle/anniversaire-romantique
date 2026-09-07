/* =========================================================
   PERSONNALISATION RAPIDE
   Modifie surtout ce bloc.
   ========================================================= */
  const CONFIG = {
  hisName: "Mv",
  herName: "Ta chérie",

  galleryUrl:
    "https://drive.google.com/drive/folders/1vY4PANP_RHbhT6ihi3Oh5e9Y-KNwGlNl",

  // Fichier audio local
  musicUrl: "assets/music/music.mp3",

  heroMessage:
    "Aujourd’hui, je célèbre la personne qui rend mon monde plus doux, mes journées plus belles et mon cœur plus heureux.",

  letter:
    "Mon amour, aujourd’hui n’est pas seulement le jour où tu es né. C’est aussi un jour qui me rappelle à quel point je suis heureuse que la vie t’ait placé sur mon chemin. Merci pour tes sourires, ta présence, ta patience, tes encouragements et tous ces petits moments qui deviennent immenses quand je les partage avec toi. Je te souhaite une année remplie de paix, de réussite, de santé et de rêves accomplis. Et si je peux formuler un souhait égoïste, c’est de continuer à écrire encore beaucoup de chapitres de notre histoire à tes côtés.",

  finalTitle:
    "Je t’aime plus que ces quelques lignes ne pourront jamais le dire.",

  finalMessage:
    "Que cette nouvelle année de ta vie t’apporte la paix, la réussite, la santé, de beaux projets… et encore beaucoup de souvenirs avec moi.",

  modalText:
    "Joyeux anniversaire mon amour. Merci d’exister, merci d’être toi, et merci pour chaque petit morceau de bonheur que nous construisons ensemble.",

  // Mets ici les chemins de vos photos.
  // Ajoute autant de photos que tu veux.
 images: [
  {
    src: "assets/images/WhatsApp Image 2026-09-06 at 07.56.23.jpeg",
    caption: "Un sourire que je ne me lasse jamais de regarder"
  },
  {
    src: "assets/images/WhatsApp Image 2026-09-06 at 07.57.19.jpeg",
    caption: "Un de ces moments que je veux garder pour toujours"
  },
  {
    src: "assets/images/WhatsApp Image 2026-09-06 at 07.57.36.jpeg",
    caption: "Toi + moi, et tous nos petits souvenirs"
  }
]
};

/* =========================================================
   INITIALISATION
   ========================================================= */
document.addEventListener("DOMContentLoaded", () => {
  applyConfig();
  buildMemories();
  setupRevealAnimation();
  setupMusic();
  setupModal();
  startHearts();
});

function applyConfig() {
  document.title = `Joyeux anniversaire ${CONFIG.hisName} ❤️`;

  setText("heroName", CONFIG.hisName);
  setText("heroMessage", CONFIG.heroMessage);
  setText("letterText", CONFIG.letter);
  setText("signatureName", CONFIG.herName);
  setText("footerName", CONFIG.herName);
  setText("finalTitle", CONFIG.finalTitle);
  setText("finalMessage", CONFIG.finalMessage);
  setText("modalText", CONFIG.modalText);

  const galleryLink = document.getElementById("galleryLink");
  galleryLink.href = CONFIG.galleryUrl;

  const musicSource = document.getElementById("musicSource");
  musicSource.src = CONFIG.musicUrl;
  document.getElementById("bgMusic").load();
}

function setText(id, value) {
  const element = document.getElementById(id);
  if (element) element.textContent = value;
}

/* =========================================================
   GALERIE / SOUVENIRS
   ========================================================= */
function buildMemories() {
  const grid = document.getElementById("memoryGrid");
  grid.innerHTML = "";

  CONFIG.images.slice(0, 4).forEach((image, index) => {
    const card = document.createElement("article");
    card.className = "memory-card reveal";

    const img = document.createElement("img");
    img.src = image.src;
    img.alt = `Souvenir ${index + 1}`;
    img.loading = "lazy";

    // Si la photo n'existe pas encore, on affiche un joli placeholder
    img.addEventListener("error", () => {
      img.style.display = "none";
      card.style.background = `
        radial-gradient(circle at 25% 20%, rgba(255,135,165,.28), transparent 35%),
        linear-gradient(135deg, #2a1124, #130b18)
      `;
    });

    const caption = document.createElement("div");
    caption.className = "memory-caption";
    caption.textContent = image.caption || `Souvenir ${index + 1}`;

    card.append(img, caption);
    grid.appendChild(card);
  });
}

/* =========================================================
   ANIMATIONS AU SCROLL
   ========================================================= */
function setupRevealAnimation() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );

  document.querySelectorAll(".reveal").forEach((element) => {
    observer.observe(element);
  });
}

/* =========================================================
   MUSIQUE
   Les navigateurs empêchent souvent l'autoplay.
   Le bouton permet donc d'activer la musique proprement.
   ========================================================= */
function setupMusic() {
  const music = document.getElementById("bgMusic");
  const button = document.getElementById("musicBtn");

  let isPlaying = false;
  music.volume = 0.55;

  button.addEventListener("click", async () => {
    try {
      if (!isPlaying) {
        await music.play();
        isPlaying = true;
        button.classList.add("is-playing");
        button.querySelector(".music-text").textContent = "Pause";
      } else {
        music.pause();
        isPlaying = false;
        button.classList.remove("is-playing");
        button.querySelector(".music-text").textContent = "Musique";
      }
    } catch (error) {
      console.warn("Lecture audio bloquée par le navigateur.", error);
    }
  });
}

/* =========================================================
   MODALE SURPRISE
   ========================================================= */
function setupModal() {
  const modal = document.getElementById("surpriseModal");
  const openButtons = [
    document.getElementById("surpriseBtn"),
    document.getElementById("finalSurpriseBtn")
  ];

  const openModal = () => {
    modal.classList.add("open");
    modal.setAttribute("aria-hidden", "false");
    burstHearts(26);
  };

  const closeModal = () => {
    modal.classList.remove("open");
    modal.setAttribute("aria-hidden", "true");
  };

  openButtons.forEach((button) => {
    button?.addEventListener("click", openModal);
  });

  modal.querySelectorAll("[data-close-modal]").forEach((element) => {
    element.addEventListener("click", closeModal);
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeModal();
  });
}

/* =========================================================
   CŒURS FLOTTANTS
   ========================================================= */
function startHearts() {
  setInterval(() => createHeart(false), 900);
}

function burstHearts(amount = 18) {
  for (let i = 0; i < amount; i++) {
    setTimeout(() => createHeart(true), i * 45);
  }
}

function createHeart(burst = false) {
  const layer = document.getElementById("heartsLayer");
  const heart = document.createElement("span");

  heart.className = "floating-heart";
  heart.textContent = Math.random() > 0.35 ? "♥" : "♡";

  const size = burst
    ? randomBetween(16, 34)
    : randomBetween(10, 21);

  heart.style.left = `${randomBetween(2, 96)}vw`;
  heart.style.setProperty("--size", `${size}px`);
  heart.style.setProperty("--duration", `${randomBetween(6, 11)}s`);
  heart.style.setProperty("--drift", `${randomBetween(-90, 90)}px`);

  if (burst) {
    heart.style.bottom = `${randomBetween(0, 20)}vh`;
  }

  layer.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 12000);
}

function randomBetween(min, max) {
  return Math.random() * (max - min) + min;
}

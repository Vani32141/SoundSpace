const moodData = {
  happiness: {
    title: "Music for your happiness",
    text: "Keep the positive energy going with bright, upbeat and joyful music.",
    musicTitle: "Feel-Good & Upbeat",
    musicDescription: "Upbeat pop, dance, Afrobeats and feel-good music.",
    spotifySearch: "happy upbeat feel good music"
  },

  sadness: {
    title: "Music for your sadness",
    text: "Give yourself a gentle musical space with comforting and peaceful sounds.",
    musicTitle: "Comfort & Warmth",
    musicDescription: "Gentle acoustic music, soft piano and comforting songs.",
    spotifySearch: "comfort relaxing sad music"
  },

  anger: {
    title: "Music for your anger",
    text: "Let the intensity settle with music that helps you slow down and release tension.",
    musicTitle: "Cool Down",
    musicDescription: "Calm instrumentals, mellow beats and slower music.",
    spotifySearch: "calm music to cool down"
  },

  anxiety: {
    title: "Music for your anxiety",
    text: "Slow things down with peaceful sounds and gentle musical patterns.",
    musicTitle: "Peace & Calm",
    musicDescription: "Ambient music, soft piano, nature sounds and relaxing instrumentals.",
    spotifySearch: "calm relaxing music anxiety"
  },

  irritation: {
    title: "Music for your irritation",
    text: "Take a moment to reset with gentle music and relaxed rhythms.",
    musicTitle: "Chill & Reset",
    musicDescription: "Lo-fi, mellow beats and relaxed instrumental music.",
    spotifySearch: "chill relaxing music"
  }
};

const cards = document.querySelectorAll(".emotion-card");

const recommendation = document.querySelector("#recommendation");
const title = document.querySelector("#recommendation-title");
const text = document.querySelector("#recommendation-text");

const musicTitle = document.querySelector("#music-title");
const musicDescription = document.querySelector("#music-description");

const spotifyButton = document.querySelector("#spotify-button");
const changeButton = document.querySelector("#change-button");

cards.forEach((card) => {
  card.addEventListener("click", () => {
    const emotion = card.dataset.emotion;
    const data = moodData[emotion];

    if (!data) return;

    title.textContent = data.title;
    text.textContent = data.text;

    musicTitle.textContent = data.musicTitle;
    musicDescription.textContent = data.musicDescription;

    const spotifyBase = ["https:", "", "open.spotify.com", "search"].join("/");
    spotifyButton.href =
      spotifyBase + "/" + encodeURIComponent(data.spotifySearch);

    recommendation.hidden = false;

    recommendation.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  });
});

changeButton.addEventListener("click", () => {
  recommendation.hidden = true;

  document.querySelector("#session").scrollIntoView({
    behavior: "smooth",
    block: "start"
  });
});

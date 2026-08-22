
// ==========================================
// SOUNDSPACE — MUSIC WEBSITE
// ==========================================

const moodData = {
  happiness: {
    title: "😊 Happiness",
    description: "Keep the good feeling going with upbeat and energetic music.",
    songs: [
      ["Happy", "Pharrell Williams"],
      ["Can't Stop the Feeling!", "Justin Timberlake"],
      ["Levitating", "Dua Lipa"],
      ["Uptown Funk", "Mark Ronson ft. Bruno Mars"],
      ["Good as Hell", "Lizzo"],
      ["Lush Life", "Zara Larsson"],
      ["APT.", "ROSÉ & Bruno Mars"],
      ["Golden", "HUNTR/X, EJAE, Audrey Nuna & REI AMI"],
      ["Flowers", "Miley Cyrus"],
      ["Roar", "Katy Perry"]
    ]
  },

  sadness: {
    title: "😢 Sadness",
    description: "Find comfort, emotional connection and gentle warmth through music.",
    songs: [
      ["Beautiful Things", "Benson Boone"],
      ["Someone You Loved", "Lewis Capaldi"],
      ["The Night We Met", "Lord Huron"],
      ["When We Were Young", "Adele"],
      ["Iris", "Goo Goo Dolls"],
      ["Lovely", "Billie Eilish & Khalid"],
      ["What Was I Made For?", "Billie Eilish"],
      ["Ocean Eyes", "Billie Eilish"],
      ["Die With A Smile", "Lady Gaga & Bruno Mars"],
      ["Back To Friends", "sombr"]
    ]
  },

  anger: {
    title: "😡 Anger",
    description: "Use powerful music as a way to release energy and shift your mood.",
    songs: [
      ["Believer", "Imagine Dragons"],
      ["Stronger", "Kelly Clarkson"],
      ["Titanium", "David Guetta ft. Sia"],
      ["Unstoppable", "Sia"],
      ["Roar", "Katy Perry"],
      ["Shake It Off", "Taylor Swift"],
      ["Flowers", "Miley Cyrus"],
      ["I Will Survive", "Gloria Gaynor"],
      ["Since U Been Gone", "Kelly Clarkson"],
      ["The Man", "The Killers"]
    ]
  },

  anxiety: {
    title: "😟 Anxiety",
    description: "Explore slower, familiar and soothing songs that may help create a calmer atmosphere.",
    songs: [
      ["A Thousand Years", "Christina Perri"],
      ["Perfect", "Ed Sheeran"],
      ["Photograph", "Ed Sheeran"],
      ["Yellow", "Coldplay"],
      ["Ocean Eyes", "Billie Eilish"],
      ["Lovely", "Billie Eilish & Khalid"],
      ["Until I Found You", "Stephen Sanchez"],
      ["Adore You", "Harry Styles"],
      ["Sunflower", "Post Malone & Swae Lee"],
      ["What Was I Made For?", "Billie Eilish"]
    ]
  },

  irritation: {
    title: "😤 Irritation",
    description: "Take a musical reset with songs that have a lighter and more relaxed feel.",
    songs: [
      ["Sunday Best", "Surfaces"],
      ["Put Your Records On", "Corinne Bailey Rae"],
      ["Lovely Day", "Bill Withers"],
      ["Sunflower", "Post Malone & Swae Lee"],
      ["Adore You", "Harry Styles"],
      ["Best Part", "Daniel Caesar ft. H.E.R."],
      ["Location", "Khalid"],
      ["Golden Hour", "JVKE"],
      ["Sweet Creature", "Harry Styles"],
      ["So Easy (To Fall in Love)", "Olivia Dean"]
    ]
  }
};


// ==========================================
// YOUTUBE VIDEO IDs
// ==========================================

const youtubeTracks = {

  // HAPPINESS

  "Happy|Pharrell Williams": "ZbZSe6N_BXs",
  "Can't Stop the Feeling!|Justin Timberlake": "ru0K8uYEZWw",
  "Levitating|Dua Lipa": "TUVcZfQe-Kw",
  "Uptown Funk|Mark Ronson ft. Bruno Mars": "OPf0YbXqDm0",
  "Good as Hell|Lizzo": "vuq-VAiW9kw",
  "Lush Life|Zara Larsson": "MysKegBRtaA",
  "APT.|ROSÉ & Bruno Mars": "ekr2nIex040",
  "Golden|HUNTR/X, EJAE, Audrey Nuna & REI AMI": "4OxcN1TcUDdLxRNW0JCULh",
  "Flowers|Miley Cyrus": "G7KNmW9a75Y",
  "Roar|Katy Perry": "CevxZvSJLk",

  // SADNESS

  "Beautiful Things|Benson Boone": "Oa_RSwwpPaA",
  "Someone You Loved|Lewis Capaldi": "zABLecsR5UE",
  "The Night We Met|Lord Huron": "KtlgYxa6BMU",
  "When We Were Young|Adele": "DDWKuo3gXMQ",
  "Iris|Goo Goo Dolls": "NdYWuo9OFAw",
  "Lovely|Billie Eilish & Khalid": "V1Pl8CzNzCw",
  "What Was I Made For?|Billie Eilish": "cW8VLC9nnU0",
  "Ocean Eyes|Billie Eilish": "viimfQi_pUw",
  "Die With A Smile|Lady Gaga & Bruno Mars": "kPa7bsKwL-c",
  "Back To Friends|sombr": "6lYn2RzqvVo",

  // ANGER — FIRST FIVE NEW SONGS

  "Believer|Imagine Dragons": "7wtfhZwyrcc",
  "Stronger|Kelly Clarkson": "Xn676-fLq7I",
  "Titanium|David Guetta ft. Sia": "JRfuAukYTKg",
  "Unstoppable|Sia": "YaEG2aWJnZ8",
  "Shake It Off|Taylor Swift": "nfWlot6h_JM"
};


// ==========================================
// PAGE ELEMENTS
// ==========================================

const emotionCards = document.querySelectorAll(".emotion-card");
const recommendation = document.querySelector("#recommendation");
const recommendationTitle = document.querySelector("#recommendation-title");
const recommendationText = document.querySelector("#recommendation-text");
const songList = document.querySelector("#song-list");
const changeButton = document.querySelector("#change-button");
const surpriseButton = document.querySelector("#surprise-button");
const nowPlaying = document.querySelector("#now-playing");

let currentEmotion = "";


// ==========================================
// DISPLAY SONGS
// ==========================================

function displaySongs() {

  songList.innerHTML = "";

  const songs = moodData[currentEmotion].songs;

  songs.forEach(function(song, index) {

    const songTitle = song[0];
    const artist = song[1];

    const songCard = document.createElement("div");

    songCard.className = "song-card";

    songCard.innerHTML = `
      <div class="song-info">

        <p class="song-number">${index + 1}</p>

        <div>
          <h3 class="song-title">${songTitle}</h3>
          <p class="artist">${artist}</p>
        </div>

      </div>

      <button class="listen-button">
        🎵 Listen
      </button>
    `;

    const listenButton =
      songCard.querySelector(".listen-button");

    listenButton.addEventListener("click", function() {

      playSong(songTitle, artist);

    });

    songList.appendChild(songCard);

  });

}


// ==========================================
// PLAY SONG
// ==========================================

function playSong(songTitle, artist) {

  const songKey = songTitle + "|" + artist;

  const videoId = youtubeTracks[songKey];

  if (!videoId) {

    nowPlaying.innerHTML = `
      <h3>🎵 ${songTitle}</h3>
      <p>${artist}</p>
      <p>This track has not been connected yet.</p>
    `;

    return;

  }

  nowPlaying.innerHTML = `
    <div class="music-choice">

      <h3>🎧 Now Playing</h3>

      <h2>🎵 ${songTitle}</h2>

      <p>${artist}</p>

      <iframe
        width="100%"
        height="315"
        src="https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0"
        title="${songTitle}"
        frameborder="0"
        allow="autoplay; encrypted-media; picture-in-picture"
        allowfullscreen>
      </iframe>

    </div>
  `;

  nowPlaying.scrollIntoView({
    behavior: "smooth",
    block: "center"
  });

}


// ==========================================
// SHOW EMOTION
// ==========================================

function showEmotion(emotion) {

  currentEmotion = emotion;

  const data = moodData[emotion];

  recommendationTitle.textContent = data.title;
  recommendationText.textContent = data.description;

  displaySongs();

  recommendation.hidden = false;

  recommendation.scrollIntoView({
    behavior: "smooth",
    block: "start"
  });

}


// ==========================================
// EMOTION BUTTONS
// ==========================================

emotionCards.forEach(function(card) {

  card.addEventListener("click", function() {

    showEmotion(card.dataset.emotion);

  });

});


// ==========================================
// SURPRISE ME
// ==========================================

if (surpriseButton) {

  surpriseButton.addEventListener("click", function() {

    if (!currentEmotion) return;

    const songs = moodData[currentEmotion].songs;

    const randomNumber =
      Math.floor(Math.random() * songs.length);

    const selectedSong = songs[randomNumber];

    playSong(
      selectedSong[0],
      selectedSong[1]
    );

  });

}


// ==========================================
// CHOOSE ANOTHER EMOTION
// ==========================================

if (changeButton) {

  changeButton.addEventListener("click", function() {

    recommendation.hidden = true;

    document
      .querySelector("#session")
      .scrollIntoView({
        behavior: "smooth"
      });

  });

}


console.log(
  "SoundSpace loaded successfully!"
);

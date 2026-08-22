// SOUNDSPACE — 50 SONG VERSION
// 5 emotions × 10 songs each

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


// --------------------------------------------------
// FIND ELEMENTS ON THE PAGE
// --------------------------------------------------

const emotionCards = document.querySelectorAll(".emotion-card");

const recommendation = document.querySelector("#recommendation");

const recommendationTitle =
  document.querySelector("#recommendation-title");

const recommendationText =
  document.querySelector("#recommendation-text");

const songList =
  document.querySelector("#song-list");

const changeButton =
  document.querySelector("#change-button");

const surpriseButton =
  document.querySelector("#surprise-button");

let currentEmotion = "";


// --------------------------------------------------
// CREATE A LISTENING LINK
// --------------------------------------------------

function playSong(song, artist) {

  const player = document.getElementById("spotify-player");

  if (!player) {
    console.log("Spotify player container not found.");
    return;
  }

  const spotifyTracks = {
    "Happy": "60nZcImufyMA1MKQY3dcCH"
  };

  const trackId = spotifyTracks[song];

  if (!trackId) {
    alert("This song has not been connected to Spotify yet.");
    return;
  }

  player.innerHTML = `
    <iframe
      style="border-radius:12px"
      src="https://open.spotify.com/embed/track/${trackId}?utm_source=generator"
      width="100%"
      height="152"
      frameborder="0"
      allowfullscreen
      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
      loading="lazy">
    </iframe>
  `;

  player.scrollIntoView({
    behavior: "smooth",
    block: "center"
  });
}


// --------------------------------------------------
// DISPLAY THE 10 SONGS
// --------------------------------------------------

function displaySongs() {

  songList.innerHTML = "";

  const songs =
    moodData[currentEmotion].songs;

  songs.forEach(function(song, index) {

    const songCard =
      document.createElement("div");

    songCard.className = "song-card";

    songCard.innerHTML = `

      <div class="song-info">

        <p class="song-number">
          ${index + 1}
        </p>

        <div>

          <h3 class="song-title">
            ${song[0]}
          </h3>

          <p class="artist">
            ${song[1]}
          </p>

        </div>

      </div>

  <button class="listen-button" data-index="${index}">
  🎵 Listen
</button>

    `;

    const listenButton = songCard.querySelector(".listen-button");

listenButton.addEventListener("click", function () {
  playSong(song[0], song[1]);
});

songList.appendChild(songCard);

  });

}


// --------------------------------------------------
// SHOW AN EMOTION
// --------------------------------------------------

function showEmotion(emotion) {

  currentEmotion = emotion;

  const data =
    moodData[emotion];

  recommendationTitle.textContent =
    data.title;

  recommendationText.textContent =
    data.description;

  displaySongs();

  recommendation.hidden = false;

  recommendation.scrollIntoView({
    behavior: "smooth"
  });

}


// --------------------------------------------------
// EMOTION BUTTONS
// --------------------------------------------------

emotionCards.forEach(function(card) {

  card.addEventListener("click", function() {

    const emotion =
      card.dataset.emotion;

    showEmotion(emotion);

  });

});


// --------------------------------------------------
// SURPRISE ME
// --------------------------------------------------

if (surpriseButton) {

  surpriseButton.addEventListener("click", function() {

    if (!currentEmotion) {
      return;
    }

    const songs =
      moodData[currentEmotion].songs;

    const randomNumber =
      Math.floor(Math.random() * songs.length);

    const selectedSong =
      songs[randomNumber];

    recommendationTitle.textContent =
      "🎲 Surprise Pick: " + selectedSong[0];

    recommendationText.textContent =
      "Here is a random song from your " +
      moodData[currentEmotion].title +
      " playlist.";

    displaySongs();

    const selectedCard =
      songList.children[randomNumber];

    if (selectedCard) {

      selectedCard.scrollIntoView({
        behavior: "smooth",
        block: "center"
      });

    }

  });

}


// --------------------------------------------------
// CHOOSE ANOTHER EMOTION
// --------------------------------------------------

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


// --------------------------------------------------
// FINISHED
// --------------------------------------------------

console.log(
  "SoundSpace loaded successfully — 50 songs ready!"
);
// ----------------------------------------
// SOUNDSPACE MUSIC PLAYER
// ----------------------------------------

const spotifyTracks = {
  "Happy": "60nZcImufyMA1MKQY3dcCH"
};

const youtubeSearch = (song, artist) => {
  return `https://www.youtube.com/results?search_query=${encodeURIComponent(song + " " + artist + " official audio")}`;
};

function playSong(songTitle, artist) {

  const player = document.getElementById("spotify-player");

  if (!player) {
    console.log("Music player container not found.");
    return;
  }

  const spotifyTrackId = spotifyTracks[songTitle];

  player.innerHTML = `
    <div class="music-choice">

      <h3>🎵 ${songTitle}</h3>
      <p>${artist}</p>

      <a
        href="${youtubeSearch(songTitle, artist)}"
        target="_blank"
        rel="noopener noreferrer"
        class="youtube-button"
      >
        ▶️ Play on YouTube
      </a>

      ${
        spotifyTrackId
          ? `
            <iframe
              style="border-radius:12px; margin-top:15px;"
              src="https://open.spotify.com/embed/track/${spotifyTrackId}?utm_source=generator"
              width="100%"
              height="152"
              frameborder="0"
              allowfullscreen=""
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy">
            </iframe>
          `
          : ""
      }

    </div>
  `;
}

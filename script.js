
// ==========================================
// SOUNDSPACE — MUSIC DATA
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
// PAGE ELEMENTS
// ==========================================

const emotionCards =
  document.querySelectorAll(".emotion-card");

const recommendation =
  document.querySelector("#recommendation");

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

const nowPlaying =
  document.querySelector("#now-playing");

let currentEmotion = "";


// ==========================================
// DISPLAY SONGS
// ==========================================

function displaySongs() {

  songList.innerHTML = "";

  const songs =
    moodData[currentEmotion].songs;

  songs.forEach(function(song, index) {

    const songTitle = song[0];
    const artist = song[1];

    const songCard =
      document.createElement("div");

    songCard.className =
      "song-card";

    songCard.innerHTML = `

      <div class="song-info">

        <p class="song-number">
          ${index + 1}
        </p>

        <div>

          <h3 class="song-title">
            ${songTitle}
          </h3>

          <p class="artist">
            ${artist}
          </p>

        </div>

      </div>

      <button class="listen-button">
        🎵 Listen
      </button>

    `;

    const listenButton =
      songCard.querySelector(
        ".listen-button"
      );

    listenButton.addEventListener(
      "click",
      function() {

        playSong(
          songTitle,
          artist
        );

      }
    );

    songList.appendChild(songCard);

  });

}


// ==========================================
// PLAY SONG — OFFICIAL MUSIC SERVICES
// ==========================================

function playSong(songTitle, artist) {

  if (!nowPlaying) {

    console.log(
      "Now playing section not found."
    );

    return;

  }

  const searchQuery =
    encodeURIComponent(
      songTitle + " " + artist
    );


  nowPlaying.innerHTML = `

    <div class="music-choice">

      <h3>
        🎧 Now Playing
      </h3>

      <h2>
        🎵 ${songTitle}
      </h2>

      <p>
        ${artist}
      </p>

      <p class="listen-message">
        Choose a music service to play the full track.
      </p>


      <div class="music-buttons">

        <a
          href="https://open.spotify.com/search/${searchQuery}"
          target="_blank"
          rel="noopener noreferrer"
          class="listen-service-button spotify-button"
        >
          🎵 Play Full Track on Spotify
        </a>


        <a
          href="https://music.youtube.com/search?q=${searchQuery}"
          target="_blank"
          rel="noopener noreferrer"
          class="listen-service-button youtube-button"
        >
          ▶ Play Full Track on YouTube Music
        </a>

      </div>

    </div>

  `;


  nowPlaying.scrollIntoView({

    behavior: "smooth",

    block: "center"

  });

}


// ==========================================
// SHOW SELECTED EMOTION
// ==========================================

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

    behavior: "smooth",

    block: "start"

  });

}


// ==========================================
// EMOTION CARD BUTTONS
// ==========================================

emotionCards.forEach(function(card) {

  card.addEventListener(
    "click",
    function() {

      const emotion =
        card.dataset.emotion;

      showEmotion(emotion);

    }
  );

});


// ==========================================
// SURPRISE ME
// ==========================================

if (surpriseButton) {

  surpriseButton.addEventListener(
    "click",
    function() {

      if (!currentEmotion) {

        return;

      }


      const songs =
        moodData[currentEmotion].songs;


      const randomNumber =
        Math.floor(
          Math.random() *
          songs.length
        );


      const selectedSong =
        songs[randomNumber];


      playSong(
        selectedSong[0],
        selectedSong[1]
      );

    }
  );

}


// ==========================================
// CHOOSE ANOTHER EMOTION
// ==========================================

if (changeButton) {

  changeButton.addEventListener(
    "click",
    function() {

      recommendation.hidden = true;


      document
        .querySelector("#session")
        .scrollIntoView({

          behavior: "smooth"

        });

    }
  );

}


// ==========================================
// SUCCESS MESSAGE
// ==========================================

console.log(
  "SoundSpace loaded successfully!"
);

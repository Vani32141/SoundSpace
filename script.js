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


/* =========================================
   PAGE ELEMENTS
========================================= */

const emotionCards = document.querySelectorAll(".emotion-card");

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


/* =========================================
   SHUFFLE SESSION VARIABLES
========================================= */

let currentEmotion = "";

let shuffleQueue = [];

let currentSongIndex = -1;


/* =========================================
   DISPLAY SONGS
========================================= */

function displaySongs() {

  songList.innerHTML = "";

  const songs =
    moodData[currentEmotion].songs;


  songs.forEach(function(song, index) {

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
            ${song[0]}
          </h3>

          <p class="artist">
            ${song[1]}
          </p>

        </div>

      </div>


      <button class="listen-button">

        🎵 Play

      </button>

    `;


    const listenButton =
      songCard.querySelector(".listen-button");


    listenButton.addEventListener(
      "click",
      function() {

        startShuffleFromSong(song);

      }
    );


    songList.appendChild(songCard);

  });

}


/* =========================================
   SHUFFLE FUNCTION
========================================= */

function shuffleSongs(array) {

  const shuffled =
    [...array];


  for (
    let i = shuffled.length - 1;
    i > 0;
    i--
  ) {

    const randomIndex =
      Math.floor(
        Math.random() * (i + 1)
      );


    const temporary =
      shuffled[i];


    shuffled[i] =
      shuffled[randomIndex];


    shuffled[randomIndex] =
      temporary;

  }


  return shuffled;

}


/* =========================================
   START SHUFFLE FROM SELECTED SONG
========================================= */

function startShuffleFromSong(selectedSong) {

  const songs =
    moodData[currentEmotion].songs;


  const otherSongs =
    songs.filter(function(song) {

      return !(
        song[0] === selectedSong[0] &&
        song[1] === selectedSong[1]
      );

    });


  const shuffledOthers =
    shuffleSongs(otherSongs);


  /*
    Selected song plays first.
    The remaining 9 songs are shuffled.
  */

  shuffleQueue = [

    selectedSong,

    ...shuffledOthers

  ];


  currentSongIndex = 0;


  playCurrentSong();

}


/* =========================================
   PLAY CURRENT SONG
========================================= */

function playCurrentSong() {

  if (
    currentSongIndex < 0 ||
    currentSongIndex >= shuffleQueue.length
  ) {

    return;

  }


  const song =
    shuffleQueue[currentSongIndex];


  showMusicPlayer(
    song[0],
    song[1]
  );

}


/* =========================================
   MUSIC PLAYER
========================================= */

function showMusicPlayer(
  songTitle,
  artist
) {

  const player =
    document.querySelector("#now-playing");


  if (!player) {

    console.log(
      "Now playing section not found."
    );

    return;

  }


  const searchQuery =
    encodeURIComponent(
      songTitle + " " + artist
    );


  const nextSong =
    shuffleQueue[
      currentSongIndex + 1
    ];


  player.innerHTML = `

    <div class="soundspace-player">


      <p class="now-playing-label">

        🎧 NOW PLAYING

      </p>


      <h2 class="current-song">

        ${songTitle}

      </h2>


      <p class="current-artist">

        ${artist}

      </p>


      <div class="shuffle-status">

        🔀 Shuffle session
        • Song ${currentSongIndex + 1}
        of ${shuffleQueue.length}

      </div>


      <div class="music-buttons">


        <a

          href="https://open.spotify.com/search/${searchQuery}"

          target="_blank"

          rel="noopener noreferrer"

          class="listen-service-button"

        >

          🎵 Play Full Song

        </a>


        <a

          href="https://music.youtube.com/search?q=${searchQuery}"

          target="_blank"

          rel="noopener noreferrer"

          class="listen-service-button"

        >

          ▶ YouTube Music

        </a>


      </div>


      <div class="queue-controls">


        <button
          id="next-song-button"
          class="next-song-button"
        >

          ⏭ Next Song

        </button>


        <button
          id="reshuffle-button"
          class="reshuffle-button"
        >

          🔀 Reshuffle

        </button>


      </div>


      <div class="up-next">


        <h3>

          📋 Up Next

        </h3>


        <div id="queue-list">

          ${createQueueHTML()}

        </div>


      </div>


    </div>

  `;


  const nextButton =
    document.querySelector(
      "#next-song-button"
    );


  if (nextButton) {

    if (!nextSong) {

      nextButton.textContent =
        "✓ Shuffle Complete";


      nextButton.disabled =
        true;

    }


    nextButton.addEventListener(
      "click",
      function() {

        playNextSong();

      }
    );

  }


  const reshuffleButton =
    document.querySelector(
      "#reshuffle-button"
    );


  if (reshuffleButton) {

    reshuffleButton.addEventListener(
      "click",
      function() {

        reshuffleRemainingSongs();

      }
    );

  }


  player.scrollIntoView({

    behavior: "smooth",

    block: "center"

  });

}


/* =========================================
   CREATE QUEUE DISPLAY
========================================= */

function createQueueHTML() {

  const remainingSongs =
    shuffleQueue.slice(
      currentSongIndex + 1
    );


  if (
    remainingSongs.length === 0
  ) {

    return `

      <p class="queue-empty">

        🎉 You've reached the end
        of this shuffle session!

      </p>

    `;

  }


  return remainingSongs
    .map(
      function(song, index) {

        return `

          <div class="queue-song">

            <span class="queue-number">

              ${index + 1}

            </span>


            <div>

              <strong>

                ${song[0]}

              </strong>


              <p>

                ${song[1]}

              </p>

            </div>

          </div>

        `;

      }
    )
    .join("");

}


/* =========================================
   NEXT SONG
========================================= */

function playNextSong() {

  if (
    currentSongIndex <
    shuffleQueue.length - 1
  ) {

    currentSongIndex++;

    playCurrentSong();

  }

}


/* =========================================
   RESHUFFLE REMAINING SONGS
========================================= */

function reshuffleRemainingSongs() {

  const currentSong =
    shuffleQueue[currentSongIndex];


  const remainingSongs =
    shuffleQueue.slice(
      currentSongIndex + 1
    );


  const reshuffledSongs =
    shuffleSongs(
      remainingSongs
    );


  shuffleQueue = [

    ...shuffleQueue.slice(
      0,
      currentSongIndex + 1
    ),

    ...reshuffledSongs

  ];


  playCurrentSong();

}


/* =========================================
   SHOW EMOTION
========================================= */

function showEmotion(emotion) {

  currentEmotion =
    emotion;


  const data =
    moodData[emotion];


  recommendationTitle.textContent =
    data.title;


  recommendationText.textContent =
    data.description;


  /*
    Reset shuffle session
  */

  shuffleQueue = [];

  currentSongIndex = -1;


  displaySongs();


  recommendation.hidden =
    false;


  recommendation.scrollIntoView({

    behavior: "smooth",

    block: "start"

  });

}


/* =========================================
   EMOTION CARD CLICKS
========================================= */

emotionCards.forEach(
  function(card) {

    card.addEventListener(
      "click",
      function() {

        const emotion =
          card.dataset.emotion;


        showEmotion(
          emotion
        );

      }
    );

  }
);


/* =========================================
   SURPRISE ME
========================================= */

if (surpriseButton) {

  surpriseButton.addEventListener(
    "click",
    function() {

      if (
        !currentEmotion
      ) {

        return;

      }


      const songs =
        moodData[
          currentEmotion
        ].songs;


      const randomNumber =
        Math.floor(
          Math.random() *
          songs.length
        );


      const selectedSong =
        songs[randomNumber];


      startShuffleFromSong(
        selectedSong
      );

    }
  );

}


/* =========================================
   CHANGE EMOTION
========================================= */

if (changeButton) {

  changeButton.addEventListener(
    "click",
    function() {

      recommendation.hidden =
        true;


      shuffleQueue = [];


      currentSongIndex =
        -1;


      document
        .querySelector("#session")
        .scrollIntoView({

          behavior: "smooth"

        });

    }
  );

}


console.log(
  "SoundSpace loaded successfully! 🎵"
);

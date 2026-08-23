/* =========================================
   SOUNDSPACE — 50 SONGS + WHY THEY FIT
========================================= */

const moodData = {
  happiness: {
    title: "😊 Happiness",
    description:
      "Keep the good feeling going with upbeat and energetic music.",

    songs: [
      {
        title: "Happy",
        artist: "Pharrell Williams",
        reason:
          "Its upbeat rhythm, bright production and explicitly positive lyrics make it a strong fit for maintaining an energetic and positive mood."
      },

      {
        title: "Can't Stop the Feeling!",
        artist: "Justin Timberlake",
        reason:
          "The fast, dance-oriented groove, bright melody and joyful lyrical message create a highly energetic and celebratory listening experience."
      },

      {
        title: "Levitating",
        artist: "Dua Lipa",
        reason:
          "Its disco-inspired rhythm, danceable beat and playful energy make it suitable for an upbeat, lively mood."
      },

      {
        title: "Uptown Funk",
        artist: "Mark Ronson ft. Bruno Mars",
        reason:
          "Its strong funk groove, energetic tempo and confident vocal delivery create a high-energy listening experience often associated with movement and excitement."
      },

      {
        title: "Good as Hell",
        artist: "Lizzo",
        reason:
          "Its empowering message, energetic rhythm and confident vocal style support a positive and self-affirming emotional direction."
      },

      {
        title: "Lush Life",
        artist: "Zara Larsson",
        reason:
          "Its upbeat pop production, rhythmic drive and carefree lyrical tone make it suitable for a light and energetic mood."
      },

      {
        title: "APT.",
        artist: "ROSÉ & Bruno Mars",
        reason:
          "Its lively rhythm, catchy hook and playful energy make it well suited to an exciting and upbeat listening session."
      },

      {
        title: "Golden",
        artist: "HUNTR/X, EJAE, Audrey Nuna & REI AMI",
        reason:
          "Its energetic production and confident, uplifting atmosphere give it a bright and motivating emotional direction."
      },

      {
        title: "Flowers",
        artist: "Miley Cyrus",
        reason:
          "Its upbeat production and message of independence and self-confidence can support an empowering and positive listening experience."
      },

      {
        title: "Roar",
        artist: "Katy Perry",
        reason:
          "Its anthemic chorus, energetic pop production and themes of confidence and resilience make it suitable for an uplifting mood."
      }
    ]
  },


  sadness: {
    title: "😢 Sadness",
    description:
      "Find comfort, emotional connection and gentle warmth through music.",

    songs: [
      {
        title: "Beautiful Things",
        artist: "Benson Boone",
        reason:
          "Its emotional vocal delivery and themes of love, fear and vulnerability make it suitable for reflective listening."
      },

      {
        title: "Someone You Loved",
        artist: "Lewis Capaldi",
        reason:
          "Its slower pacing, emotional vocal performance and themes of loss and longing strongly support a reflective and sadness-focused listening experience."
      },

      {
        title: "The Night We Met",
        artist: "Lord Huron",
        reason:
          "Its nostalgic atmosphere and lyrics centered on regret and longing make it well suited to moments of emotional reflection."
      },

      {
        title: "When We Were Young",
        artist: "Adele",
        reason:
          "Its themes of memory, nostalgia and reconnecting with the past create a reflective emotional atmosphere."
      },

      {
        title: "Iris",
        artist: "Goo Goo Dolls",
        reason:
          "Its emotionally intense lyrics and expressive vocal delivery explore vulnerability and the desire to be understood."
      },

      {
        title: "Lovely",
        artist: "Billie Eilish & Khalid",
        reason:
          "Its restrained production, somber atmosphere and themes of emotional struggle make it suitable for introspective listening."
      },

      {
        title: "What Was I Made For?",
        artist: "Billie Eilish",
        reason:
          "Its gentle pacing, sparse arrangement and themes of uncertainty and self-reflection create a deeply introspective atmosphere."
      },

      {
        title: "Ocean Eyes",
        artist: "Billie Eilish",
        reason:
          "Its soft vocals, atmospheric production and dreamy tone create a calm and emotionally reflective listening experience."
      },

      {
        title: "Die With A Smile",
        artist: "Lady Gaga & Bruno Mars",
        reason:
          "Its emotional delivery and themes of love, connection and appreciating someone deeply can encourage reflection and emotional connection."
      },

      {
        title: "Back To Friends",
        artist: "sombr",
        reason:
          "Its reflective emotional tone and relationship-centered themes make it suitable for listeners experiencing longing or emotional uncertainty."
      }
    ]
  },


  anger: {
    title: "😡 Anger",
    description:
      "Use powerful music as a way to release energy and shift your mood.",

    songs: [
      {
        title: "Believer",
        artist: "Imagine Dragons",
        reason:
          "Its intense percussion, powerful vocals and themes of turning pain into strength can provide an energetic outlet for strong emotions."
      },

      {
        title: "Stronger",
        artist: "Kelly Clarkson",
        reason:
          "Its powerful vocal delivery and resilience-focused message can help redirect frustration toward confidence and determination."
      },

      {
        title: "Titanium",
        artist: "David Guetta ft. Sia",
        reason:
          "Its strong electronic production and lyrics about resilience create a powerful, high-energy emotional release."
      },

      {
        title: "Unstoppable",
        artist: "Sia",
        reason:
          "Its dramatic production and themes of strength and determination make it suitable for channeling intense emotions into empowerment."
      },

      {
        title: "Roar",
        artist: "Katy Perry",
        reason:
          "Its energetic build and confidence-focused lyrics can help shift feelings of frustration toward self-expression and empowerment."
      },

      {
        title: "Shake It Off",
        artist: "Taylor Swift",
        reason:
          "Its upbeat rhythm and message of letting go of criticism provide a lighter way to move away from frustration."
      },

      {
        title: "Flowers",
        artist: "Miley Cyrus",
        reason:
          "Its confident tone and themes of independence can help redirect negative energy toward self-confidence."
      },

      {
        title: "I Will Survive",
        artist: "Gloria Gaynor",
        reason:
          "Its strong rhythm and message of resilience make it a classic example of transforming emotional difficulty into confidence."
      },

      {
        title: "Since U Been Gone",
        artist: "Kelly Clarkson",
        reason:
          "Its powerful vocals and intense pop-rock production can provide an energetic outlet while its lyrics focus on moving forward."
      },

      {
        title: "The Man",
        artist: "The Killers",
        reason:
          "Its bold rock energy and confident vocal style make it suitable for listeners who want a more forceful and energetic musical atmosphere."
      }
    ]
  },


  anxiety: {
    title: "😟 Anxiety",
    description:
      "Explore slower, familiar and soothing songs that may help create a calmer atmosphere.",

    songs: [
      {
        title: "A Thousand Years",
        artist: "Christina Perri",
        reason:
          "Its slow tempo, gentle arrangement and predictable melodic structure can create a calm and emotionally warm listening environment."
      },

      {
        title: "Perfect",
        artist: "Ed Sheeran",
        reason:
          "Its gentle pacing, acoustic elements and smooth vocal delivery give it a relaxed and comforting atmosphere."
      },

      {
        title: "Photograph",
        artist: "Ed Sheeran",
        reason:
          "Its soft acoustic production and nostalgic tone encourage slower, more reflective listening."
      },

      {
        title: "Yellow",
        artist: "Coldplay",
        reason:
          "Its warm melody, familiar structure and emotionally gentle atmosphere can provide a sense of comfort and familiarity."
      },

      {
        title: "Ocean Eyes",
        artist: "Billie Eilish",
        reason:
          "Its soft vocal delivery and atmospheric production create a gentle soundscape that may suit quieter moments."
      },

      {
        title: "Lovely",
        artist: "Billie Eilish & Khalid",
        reason:
          "Its restrained production and slower emotional atmosphere may appeal to listeners looking for music that feels introspective rather than overstimulating."
      },

      {
        title: "Until I Found You",
        artist: "Stephen Sanchez",
        reason:
          "Its slower tempo, vintage-inspired production and smooth melody create a warm and gentle listening experience."
      },

      {
        title: "Adore You",
        artist: "Harry Styles",
        reason:
          "Its warm production, smooth rhythm and affectionate lyrical tone create a relaxed and positive atmosphere."
      },

      {
        title: "Sunflower",
        artist: "Post Malone & Swae Lee",
        reason:
          "Its laid-back rhythm, melodic vocals and familiar pop structure give it an easygoing listening quality."
      },

      {
        title: "What Was I Made For?",
        artist: "Billie Eilish",
        reason:
          "Its slow pace, quiet instrumentation and introspective lyrics make it suitable for calm and reflective moments."
      }
    ]
  },


  irritation: {
    title: "😤 Irritation",
    description:
      "Take a musical reset with songs that have a lighter and more relaxed feel.",

    songs: [
      {
        title: "Sunday Best",
        artist: "Surfaces",
        reason:
          "Its relaxed groove, bright production and optimistic tone can help create a lighter emotional atmosphere."
      },

      {
        title: "Put Your Records On",
        artist: "Corinne Bailey Rae",
        reason:
          "Its warm vocals, relaxed rhythm and encouraging message create an easygoing and comforting listening experience."
      },

      {
        title: "Lovely Day",
        artist: "Bill Withers",
        reason:
          "Its smooth groove, warm vocal style and optimistic tone make it suitable for shifting toward a lighter mood."
      },

      {
        title: "Sunflower",
        artist: "Post Malone & Swae Lee",
        reason:
          "Its laid-back rhythm and smooth melodic style create a relaxed atmosphere that may feel less intense during moments of irritation."
      },

      {
        title: "Adore You",
        artist: "Harry Styles",
        reason:
          "Its smooth rhythm and warm, melodic production create an easygoing atmosphere."
      },

      {
        title: "Best Part",
        artist: "Daniel Caesar ft. H.E.R.",
        reason:
          "Its slow groove, soft vocals and gentle production create a calm and intimate listening experience."
      },

      {
        title: "Location",
        artist: "Khalid",
        reason:
          "Its relaxed production and smooth vocal style make it suitable for a slower, less intense musical reset."
      },

      {
        title: "Golden Hour",
        artist: "JVKE",
        reason:
          "Its warm melodic progression and atmospheric production create a bright and emotionally gentle sound."
      },

      {
        title: "Sweet Creature",
        artist: "Harry Styles",
        reason:
          "Its acoustic arrangement and gentle vocal delivery create a soft, intimate and low-intensity atmosphere."
      },

      {
        title: "So Easy (To Fall in Love)",
        artist: "Olivia Dean",
        reason:
          "Its warm vocals, smooth groove and light melodic energy create a relaxed and pleasant listening atmosphere."
      }
    ]
  }
};


/* =========================================
   PAGE ELEMENTS
========================================= */

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


        <div class="song-details">

          <h3 class="song-title">
            ${song.title}
          </h3>

          <p class="artist">
            ${song.artist}
          </p>


          <div class="song-reason">

            <h4>
              ✨ Why this song fits
            </h4>

            <p>
              ${song.reason}
            </p>

          </div>

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
   START SHUFFLE SESSION
========================================= */

function startShuffleFromSong(selectedSong) {

  const songs =
    moodData[currentEmotion].songs;


  const otherSongs =
    songs.filter(function(song) {

      return !(
        song.title === selectedSong.title &&
        song.artist === selectedSong.artist
      );

    });


  const shuffledOthers =
    shuffleSongs(otherSongs);


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


  showMusicPlayer(song);

}


/* =========================================
   SHOW MUSIC PLAYER
========================================= */

function showMusicPlayer(song) {

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
      song.title + " " + song.artist
    );


  const nextSong =
    shuffleQueue[currentSongIndex + 1];


  player.innerHTML = `

    <div class="soundspace-player">


      <p class="now-playing-label">

        🎧 NOW PLAYING

      </p>


      <h2 class="current-song">

        ${song.title}

      </h2>


      <p class="current-artist">

        ${song.artist}

      </p>


      <div class="current-song-reason">

        <h4>
          ✨ Why this song fits
        </h4>

        <p>
          ${song.reason}
        </p>

      </div>


      <div class="shuffle-status">

        🔀 Shuffle session •
        Song ${currentSongIndex + 1}
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
   CREATE QUEUE
========================================= */

function createQueueHTML() {

  const remainingSongs =
    shuffleQueue.slice(
      currentSongIndex + 1
    );


  if (remainingSongs.length === 0) {

    return `

      <p class="queue-empty">

        🎉 You've reached the end
        of this shuffle session!

      </p>

    `;

  }


  return remainingSongs
    .map(function(song, index) {

      return `

        <div class="queue-song">

          <span class="queue-number">

            ${index + 1}

          </span>


          <div>

            <strong>

              ${song.title}

            </strong>


            <p>

              ${song.artist}

            </p>

          </div>

        </div>

      `;

    })
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

  const remainingSongs =
    shuffleQueue.slice(
      currentSongIndex + 1
    );


  const reshuffledSongs =
    shuffleSongs(remainingSongs);


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
   EMOTION BUTTONS
========================================= */

emotionCards.forEach(function(card) {

  card.addEventListener(
    "click",
    function() {

      showEmotion(
        card.dataset.emotion
      );

    }
  );

});


/* =========================================
   SURPRISE ME
========================================= */

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
          Math.random() * songs.length
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

      recommendation.hidden = true;

      shuffleQueue = [];

      currentSongIndex = -1;


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

# SoundSpace — Complete Replacement `script.js`


/* =========================================================
   SOUNDSPACE — COMPLETE SCRIPT
   FIXED NAVIGATION + EMOTION CLICKS + SUPABASE ANALYTICS
   ========================================================= */


/* =========================================================
   1. SUPABASE CONNECTION
   ========================================================= */

const SUPABASE_URL =
  "https://bjfmlknorxlztxkxlebd.supabase.co";

const SUPABASE_KEY =
  "sb_publishable_NDHWFaIHfs6IqvmbZiHrCg_0H2ZXZbU";


/* =========================================================
   2. DEVELOPER MODE
   ========================================================= */

const DEVELOPER_MODE_KEY =
  "soundspace_developer_mode";

const urlParameters =
  new URLSearchParams(
    window.location.search
  );


if (
  urlParameters.get("developer") === "on"
) {

  localStorage.setItem(
    DEVELOPER_MODE_KEY,
    "true"
  );

  window.history.replaceState(
    {},
    document.title,
    window.location.pathname
  );

}


const IS_DEVELOPER =
  localStorage.getItem(
    DEVELOPER_MODE_KEY
  ) === "true";


/* =========================================================
   3. SESSION ID
   ========================================================= */

const SOUNDSPACE_SESSION_ID =
  sessionStorage.getItem(
    "soundspace_session_id"
  ) ||
  (() => {

    const id =
      "ss_" +
      Date.now() +
      "_" +
      Math.random()
        .toString(36)
        .substring(2, 10);

    sessionStorage.setItem(
      "soundspace_session_id",
      id
    );

    return id;

  })();


/* =========================================================
   4. SUPABASE EVENT TRACKING
   ========================================================= */

async function trackSoundSpaceEvent(
  eventType,
  mood = null,
  song = null,
  helpful = null,
  feedbackText = null
) {

  if (IS_DEVELOPER) {
    return;
  }


  try {

    const response =
      await fetch(
        `${SUPABASE_URL}/rest/v1/usage_events`,
        {
          method: "POST",

          headers: {
            "Content-Type":
              "application/json",

            "apikey":
              SUPABASE_KEY,

            "Authorization":
              `Bearer ${SUPABASE_KEY}`,

            "Prefer":
              "return=minimal"
          },

          body:
            JSON.stringify({

              event_type:
                eventType,

              session_id:
                SOUNDSPACE_SESSION_ID,

              page:
                window.location.pathname,

              mood:
                mood,

              song:
                song,

              helpful:
                helpful,

              feedback_text:
                feedbackText

            })

        }
      );


    if (!response.ok) {

      console.error(
        "Supabase tracking failed:",
        await response.text()
      );

    }

  } catch (error) {

    console.error(
      "SoundSpace analytics error:",
      error
    );

  }

}


/* =========================================================
   5. SONG DATA
   ========================================================= */

const moodData = {

  happiness: {

    title: "😊 Happiness",
    emoji: "😊",

    description:
      "Keep the good feeling going with upbeat, energetic and positive music.",

    songs: [

      {
        title: "Happy",
        artist: "Pharrell Williams",
        why: "Its upbeat rhythm and positive message make it suitable for maintaining a positive mood."
      },

      {
        title: "Can't Stop the Feeling!",
        artist: "Justin Timberlake",
        why: "Its lively tempo and danceable rhythm create an energetic and joyful listening experience."
      },

      {
        title: "Levitating",
        artist: "Dua Lipa",
        why: "Its energetic disco-inspired production gives the song a playful and uplifting character."
      },

      {
        title: "Uptown Funk",
        artist: "Mark Ronson ft. Bruno Mars",
        why: "Its strong funk groove and energetic rhythm make it highly danceable and stimulating."
      },

      {
        title: "Good as Hell",
        artist: "Lizzo",
        why: "Its encouraging message and upbeat production support confidence and positivity."
      },

      {
        title: "Lush Life",
        artist: "Zara Larsson",
        why: "Its bright pop production and carefree tone create a lively atmosphere."
      },

      {
        title: "APT.",
        artist: "ROSÉ & Bruno Mars",
        why: "Its catchy rhythm and playful high-energy production make it suitable for an upbeat mood."
      },

      {
        title: "Golden",
        artist: "HUNTR/X, EJAE, Audrey Nuna & REI AMI",
        why: "Its energetic production and confident vocal delivery create an uplifting direction."
      },

      {
        title: "Flowers",
        artist: "Miley Cyrus",
        why: "Its confident message can reinforce feelings of empowerment and self-assurance."
      },

      {
        title: "Roar",
        artist: "Katy Perry",
        why: "Its energetic chorus and motivating message make it uplifting."
      }

    ]

  },


  sadness: {

    title: "😢 Sadness",
    emoji: "😢",

    description:
      "Find comfort, emotional connection and gentle warmth through reflective music.",

    songs: [

      {
        title: "Beautiful Things",
        artist: "Benson Boone",
        why: "Its emotional delivery creates space for reflection and emotional connection."
      },

      {
        title: "Someone You Loved",
        artist: "Lewis Capaldi",
        why: "Its emotional vocals and slow pace can support reflective listening."
      },

      {
        title: "The Night We Met",
        artist: "Lord Huron",
        why: "Its atmospheric sound and nostalgic tone create a reflective environment."
      },

      {
        title: "When We Were Young",
        artist: "Adele",
        why: "Its nostalgic themes and expressive vocals encourage emotional connection."
      },

      {
        title: "Iris",
        artist: "Goo Goo Dolls",
        why: "Its emotional melody and vulnerable lyrics can resonate with feelings of longing."
      },

      {
        title: "Lovely",
        artist: "Billie Eilish & Khalid",
        why: "Its restrained production creates a reflective listening experience."
      },

      {
        title: "What Was I Made For?",
        artist: "Billie Eilish",
        why: "Its soft arrangement encourages quiet reflection and emotional awareness."
      },

      {
        title: "Ocean Eyes",
        artist: "Billie Eilish",
        why: "Its gentle production creates a calm and introspective atmosphere."
      },

      {
        title: "Die With A Smile",
        artist: "Lady Gaga & Bruno Mars",
        why: "Its emotional ballad style encourages heartfelt reflection."
      },

      {
        title: "Back To Friends",
        artist: "sombr",
        why: "Its reflective themes make it suitable for feelings of longing or distance."
      }

    ]

  },


  anger: {

    title: "😡 Anger",
    emoji: "😡",

    description:
      "Use powerful music as a structured way to release energy and shift your emotional direction.",

    songs: [

      {
        title: "Believer",
        artist: "Imagine Dragons",
        why: "Its intense percussion and powerful vocals provide an energetic outlet."
      },

      {
        title: "Stronger",
        artist: "Kelly Clarkson",
        why: "Its message of overcoming difficulty can redirect frustration toward confidence."
      },

      {
        title: "Titanium",
        artist: "David Guetta ft. Sia",
        why: "Its powerful production creates an intense but empowering experience."
      },

      {
        title: "Unstoppable",
        artist: "Sia",
        why: "Its dramatic build can shift frustration toward determination."
      },

      {
        title: "Roar",
        artist: "Katy Perry",
        why: "Its energetic message provides a constructive direction for intense emotions."
      },

      {
        title: "Shake It Off",
        artist: "Taylor Swift",
        why: "Its upbeat rhythm encourages emotional release and letting go."
      },

      {
        title: "Flowers",
        artist: "Miley Cyrus",
        why: "Its confident message can redirect frustration toward self-reliance."
      },

      {
        title: "I Will Survive",
        artist: "Gloria Gaynor",
        why: "Its strong message transforms difficult experiences into resilience."
      },

      {
        title: "Since U Been Gone",
        artist: "Kelly Clarkson",
        why: "Its high-energy sound provides an expressive outlet for intense feelings."
      },

      {
        title: "The Man",
        artist: "The Killers",
        why: "Its energetic rock sound matches high-energy emotional states."
      }

    ]

  },


  anxiety: {

    title: "😟 Anxiety",
    emoji: "😟",

    description:
      "Explore slower, familiar and emotionally gentle songs that may help create a calmer atmosphere.",

    songs: [

      {
        title: "A Thousand Years",
        artist: "Christina Perri",
        why: "Its slow tempo and gentle arrangement create a softer listening environment."
      },

      {
        title: "Perfect",
        artist: "Ed Sheeran",
        why: "Its smooth melody provides a gentle and emotionally warm experience."
      },

      {
        title: "Photograph",
        artist: "Ed Sheeran",
        why: "Its reflective pacing creates a quieter atmosphere."
      },

      {
        title: "Yellow",
        artist: "Coldplay",
        why: "Its warm melody can create a comforting atmosphere."
      },

      {
        title: "Ocean Eyes",
        artist: "Billie Eilish",
        why: "Its soft vocals and spacious production create a calm environment."
      },

      {
        title: "Lovely",
        artist: "Billie Eilish & Khalid",
        why: "Its slower pacing allows for gentle reflective listening."
      },

      {
        title: "Until I Found You",
        artist: "Stephen Sanchez",
        why: "Its nostalgic style and slower rhythm create a gentle atmosphere."
      },

      {
        title: "Adore You",
        artist: "Harry Styles",
        why: "Its warm production creates a comfortable listening experience."
      },

      {
        title: "Sunflower",
        artist: "Post Malone & Swae Lee",
        why: "Its relaxed groove gives it an easy-going quality."
      },

      {
        title: "What Was I Made For?",
        artist: "Billie Eilish",
        why: "Its quiet arrangement encourages stillness and reflection."
      }

    ]

  },


  irritation: {

    title: "😤 Irritation",
    emoji: "😤",

    description:
      "Take a musical reset with lighter, warmer and more relaxed songs.",

    songs: [

      {
        title: "Sunday Best",
        artist: "Surfaces",
        why: "Its relaxed rhythm and optimistic tone create an easy-going atmosphere."
      },

      {
        title: "Put Your Records On",
        artist: "Corinne Bailey Rae",
        why: "Its warm vocals and relaxed groove create a comforting experience."
      },

      {
        title: "Lovely Day",
        artist: "Bill Withers",
        why: "Its smooth groove creates a warm and positive atmosphere."
      },

      {
        title: "Sunflower",
        artist: "Post Malone & Swae Lee",
        why: "Its laid-back rhythm suits a low-pressure listening experience."
      },

      {
        title: "Adore You",
        artist: "Harry Styles",
        why: "Its warm production can help create a lighter emotional atmosphere."
      },

      {
        title: "Best Part",
        artist: "Daniel Caesar ft. H.E.R.",
        why: "Its soft instrumentation creates a calm atmosphere."
      },

      {
        title: "Location",
        artist: "Khalid",
        why: "Its mellow production suits relaxed listening."
      },

      {
        title: "Golden Hour",
        artist: "JVKE",
        why: "Its warm melody creates a soothing emotional tone."
      },

      {
        title: "Sweet Creature",
        artist: "Harry Styles",
        why: "Its acoustic sound creates a quiet, low-intensity experience."
      },

      {
        title: "So Easy (To Fall in Love)",
        artist: "Olivia Dean",
        why: "Its smooth vocals and warm production create an easy-going atmosphere."
      }

    ]

  }

};


/* =========================================================
   6. APP STATE
   ========================================================= */

let currentEmotion = "";
let currentSong = null;
let shuffleQueue = [];
let currentSongIndex = 0;


/* =========================================================
   7. FIXED PAGE NAVIGATION
   ========================================================= */

function showPage(pageId) {

  const pages =
    document.querySelectorAll(".page");

  pages.forEach(function(page) {

    page.classList.remove(
      "active-page"
    );

  });


  const possiblePageIds = [

    pageId,

    `${pageId}-page`,

    pageId.replace(
      "-page",
      ""
    )

  ];


  let targetPage = null;


  possiblePageIds.forEach(
    function(id) {

      if (!targetPage) {

        targetPage =
          document.getElementById(
            id
          );

      }

    }
  );


  if (!targetPage) {

    console.error(
      "Page not found:",
      pageId
    );

    return;

  }


  targetPage.classList.add(
    "active-page"
  );


  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });

}


/* =========================================================
   8. DISPLAY EMOTION
   ========================================================= */

function displayEmotion(emotion) {

  if (!moodData[emotion]) {
    return;
  }


  currentEmotion =
    emotion;


  const data =
    moodData[emotion];


  const emotionTitle =
    document.querySelector(
      "#emotion-title"
    );

  const emotionDescription =
    document.querySelector(
      "#emotion-description"
    );

  const emotionEmoji =
    document.querySelector(
      "#emotion-emoji"
    );


  if (emotionTitle) {

    emotionTitle.textContent =
      data.title;

  }


  if (emotionDescription) {

    emotionDescription.textContent =
      data.description;

  }


  if (emotionEmoji) {

    emotionEmoji.textContent =
      data.emoji;

  }


  displaySongs();

}


/* =========================================================
   9. DISPLAY SONGS
   ========================================================= */

function displaySongs() {

  const songList =
    document.querySelector(
      "#song-list"
    );


  if (
    !songList ||
    !currentEmotion ||
    !moodData[currentEmotion]
  ) {
    return;
  }


  songList.innerHTML = "";


  moodData[currentEmotion]
    .songs
    .forEach(
      function(song, index) {

        const songCard =
          document.createElement(
            "button"
          );


        songCard.type =
          "button";


        songCard.className =
          "song-card";


        songCard.innerHTML = `

          <span class="song-number">
            ${String(index + 1).padStart(2, "0")}
          </span>

          <span class="song-details">

            <strong>
              ${song.title}
            </strong>

            <small>
              ${song.artist}
            </small>

            <span class="song-why">

              <b>
                ✨ Why this song fits:
              </b>

              ${song.why}

            </span>

          </span>

          <span class="song-arrow">
            →
          </span>

        `;


        songCard.addEventListener(
          "click",
          function(event) {

            event.preventDefault();

            startSongSession(
              song
            );

          }
        );


        songList.appendChild(
          songCard
        );

      }
    );

}


/* =========================================================
   10. SHUFFLE
   ========================================================= */

function shuffleSongs(array) {

  const shuffled =
    [...array];


  for (
    let i =
      shuffled.length - 1;
    i > 0;
    i--
  ) {

    const j =
      Math.floor(
        Math.random() *
        (i + 1)
      );


    [
      shuffled[i],
      shuffled[j]
    ] =
    [
      shuffled[j],
      shuffled[i]
    ];

  }


  return shuffled;

}


/* =========================================================
   11. START SONG SESSION
   ========================================================= */

function startSongSession(song) {

  if (
    !currentEmotion ||
    !moodData[currentEmotion]
  ) {
    return;
  }


  currentSong =
    song;


  trackSoundSpaceEvent(
    "song_selected",
    currentEmotion,
    `${song.title} — ${song.artist}`
  );


  const otherSongs =
    moodData[currentEmotion]
      .songs
      .filter(
        function(item) {

          return !(
            item.title === song.title &&
            item.artist === song.artist
          );

        }
      );


  shuffleQueue = [

    song,

    ...shuffleSongs(
      otherSongs
    )

  ];


  currentSongIndex = 0;


  displayPlayer();


  showPage(
    "player-page"
  );

}


/* =========================================================
   12. DISPLAY PLAYER
   ========================================================= */

function displayPlayer() {

  if (!shuffleQueue.length) {
    return;
  }


  currentSong =
    shuffleQueue[
      currentSongIndex
    ];


  const playerTitle =
    document.querySelector(
      "#player-title"
    );

  const playerArtist =
    document.querySelector(
      "#player-artist"
    );

  const playerReason =
    document.querySelector(
      "#player-reason"
    );

  const playerEmoji =
    document.querySelector(
      "#player-emoji"
    );

  const songPosition =
    document.querySelector(
      "#song-position"
    );


  if (playerTitle) {

    playerTitle.textContent =
      currentSong.title;

  }


  if (playerArtist) {

    playerArtist.textContent =
      currentSong.artist;

  }


  if (playerReason) {

    playerReason.textContent =
      currentSong.why;

  }


  if (
    playerEmoji &&
    currentEmotion
  ) {

    playerEmoji.textContent =
      moodData[
        currentEmotion
      ].emoji;

  }


  if (songPosition) {

    songPosition.textContent =
      `${currentSongIndex + 1} / ${shuffleQueue.length}`;

  }


  displayQueue();

}


/* =========================================================
   13. DISPLAY QUEUE
   ========================================================= */

function displayQueue() {

  const queueList =
    document.querySelector(
      "#queue-list"
    );


  if (!queueList) {
    return;
  }


  queueList.innerHTML = "";


  shuffleQueue.forEach(
    function(song, index) {

      const queueItem =
        document.createElement(
          "button"
        );


      queueItem.type =
        "button";


      queueItem.className =
        "queue-item";


      if (
        index ===
        currentSongIndex
      ) {

        queueItem.classList.add(
          "current-song"
        );

      }


      queueItem.innerHTML = `

        <span class="queue-number">
          ${String(index + 1).padStart(2, "0")}
        </span>

        <span class="queue-info">

          <strong>
            ${song.title}
          </strong>

          <small>
            ${song.artist}
          </small>

        </span>

      `;


      queueItem.addEventListener(
        "click",
        function() {

          currentSongIndex =
            index;

          displayPlayer();

        }
      );


      queueList.appendChild(
        queueItem
      );

    }
  );

}


/* =========================================================
   14. NEXT SONG
   ========================================================= */

function nextSong() {

  if (!shuffleQueue.length) {
    return;
  }


  currentSongIndex++;


  if (
    currentSongIndex >=
    shuffleQueue.length
  ) {

    currentSongIndex = 0;

    shuffleQueue =
      shuffleSongs(
        shuffleQueue
      );

  }


  displayPlayer();

}


/* =========================================================
   15. RESHUFFLE
   ========================================================= */

function reshuffleSongs() {

  if (
    !currentEmotion ||
    !moodData[currentEmotion]
  ) {
    return;
  }


  shuffleQueue =
    shuffleSongs(
      moodData[currentEmotion]
        .songs
    );


  currentSongIndex = 0;


  displayPlayer();

}


/* =========================================================
   16. LOAD INSIGHTS
   ========================================================= */

async function getSharedInsights() {

  try {

    const response =
      await fetch(
        `${SUPABASE_URL}/rest/v1/usage_events?select=*`,
        {
          headers: {

            "apikey":
              SUPABASE_KEY,

            "Authorization":
              `Bearer ${SUPABASE_KEY}`

          }
        }
      );


    if (!response.ok) {

      console.error(
        "Could not load insights:",
        await response.text()
      );

      return [];

    }


    return await response.json();

  } catch (error) {

    console.error(
      "Insights error:",
      error
    );

    return [];

  }

}


/* =========================================================
   17. DISPLAY INSIGHTS
   ========================================================= */

async function displayInsights() {

  const events =
    await getSharedInsights();


  const sessions =
    new Set();


  events.forEach(
    function(event) {

      if (event.session_id) {

        sessions.add(
          event.session_id
        );

      }

    }
  );


  const totalElement =
    document.querySelector(
      "#insight-total"
    );


  if (totalElement) {

    totalElement.textContent =
      sessions.size;

  }


  const emotionCounts = {

    happiness: 0,
    sadness: 0,
    anger: 0,
    anxiety: 0,
    irritation: 0

  };


  events.forEach(
    function(event) {

      if (
        event.event_type ===
          "emotion_selected" &&
        event.mood in
          emotionCounts
      ) {

        emotionCounts[
          event.mood
        ]++;

      }

    }
  );


  Object.keys(
    emotionCounts
  ).forEach(
    function(emotion) {

      const element =
        document.querySelector(
          "#stat-" + emotion
        );


      if (element) {

        element.textContent =
          emotionCounts[
            emotion
          ];

      }

    }
  );


  const helpfulCounts = {

    Yes: 0,
    "A little": 0,
    No: 0

  };


  events.forEach(
    function(event) {

      if (
        event.event_type ===
          "feedback" &&
        event.helpful in
          helpfulCounts
      ) {

        helpfulCounts[
          event.helpful
        ]++;

      }

    }
  );


  const yesElement =
    document.querySelector(
      "#insight-yes"
    );

  const littleElement =
    document.querySelector(
      "#insight-little"
    );

  const noElement =
    document.querySelector(
      "#insight-no"
    );


  if (yesElement) {

    yesElement.textContent =
      helpfulCounts.Yes;

  }


  if (littleElement) {

    littleElement.textContent =
      helpfulCounts["A little"];

  }


  if (noElement) {

    noElement.textContent =
      helpfulCounts.No;

  }

}


/* =========================================================
   18. SET UP PAGE BUTTONS
   ========================================================= */

function setupPageButtons() {

  const pageButtons =
    document.querySelectorAll(
      "[data-page]"
    );


  console.log(
    "Page buttons found:",
    pageButtons.length
  );


  pageButtons.forEach(
    function(button) {

      if (
        button.tagName ===
        "BUTTON"
      ) {

        button.type =
          "button";

      }


      button.addEventListener(
        "click",
        function(event) {

          event.preventDefault();


          const page =
            button.dataset.page;


          console.log(
            "Opening page:",
            page
          );


          if (!page) {
            return;
          }


          showPage(
            page
          );


          if (
            page ===
              "insights" ||
            page ===
              "insights-page"
          ) {

            displayInsights();

          }

        }
      );

    }
  );

}


/* =========================================================
   19. SET UP EMOTION CARDS
   ========================================================= */

function setupEmotionCards() {

  const emotionCards =
    document.querySelectorAll(
      ".emotion-card"
    );


  console.log(
    "Emotion cards found:",
    emotionCards.length
  );


  emotionCards.forEach(
    function(card) {

      if (
        card.tagName ===
        "BUTTON"
      ) {

        card.type =
          "button";

      }


      card.addEventListener(
        "click",
        function(event) {

          event.preventDefault();


          const emotion =
            card.dataset.emotion;


          console.log(
            "Emotion clicked:",
            emotion
          );


          if (
            !emotion ||
            !moodData[emotion]
          ) {

            console.error(
              "Invalid emotion:",
              emotion
            );

            return;

          }


          currentEmotion =
            emotion;


          trackSoundSpaceEvent(
            "emotion_selected",
            emotion
          );


          displayEmotion(
            emotion
          );


          showPage(
            "emotion-page"
          );

        }
      );

    }
  );

}


/* =========================================================
   20. FEEDBACK
   ========================================================= */

function setupFeedback() {

  const feedbackForm =
    document.querySelector(
      "#feedback-form"
    );


  if (!feedbackForm) {
    return;
  }


  feedbackForm.addEventListener(
    "submit",
    async function(event) {

      event.preventDefault();


      const feedbackEmotion =
        document.querySelector(
          "#feedback-emotion"
        );

      const calmerAnswer =
        document.querySelector(
          'input[name="calmer"]:checked'
        );

      const liked =
        document.querySelector(
          "#liked"
        );

      const disliked =
        document.querySelector(
          "#disliked"
        );

      const additional =
        document.querySelector(
          "#additional-feedback"
        );


      const emotion =
        feedbackEmotion
          ? feedbackEmotion.value
          : currentEmotion;


      const helpful =
        calmerAnswer
          ? calmerAnswer.value
          : null;


      const feedbackText = [

        liked
          ? liked.value.trim()
          : "",

        disliked
          ? disliked.value.trim()
          : "",

        additional
          ? additional.value.trim()
          : ""

      ]
        .filter(Boolean)
        .join("\n");


      await trackSoundSpaceEvent(
        "feedback",
        emotion || null,
        currentSong
          ? `${currentSong.title} — ${currentSong.artist}`
          : null,
        helpful,
        feedbackText || null
      );


      const successMessage =
        document.querySelector(
          "#feedback-success"
        );


      if (successMessage) {

        successMessage.textContent =
          IS_DEVELOPER
            ? "Developer mode is on. Test feedback was not saved."
            : "✨ Thank you! Your feedback has been saved.";

        successMessage.hidden =
          false;

      }


      feedbackForm.reset();

    }
  );

}


/* =========================================================
   21. PLAYER BUTTONS
   ========================================================= */

function setupNextButton() {

  const button =
    document.querySelector(
      "#next-button"
    );


  if (button) {

    button.type =
      "button";


    button.addEventListener(
      "click",
      nextSong
    );

  }

}


function setupReshuffleButton() {

  const button =
    document.querySelector(
      "#reshuffle-button"
    );


  if (button) {

    button.type =
      "button";


    button.addEventListener(
      "click",
      reshuffleSongs
    );

  }

}


/* =========================================================
   22. BACK BUTTONS
   ========================================================= */

function setupBackButtons() {

  const backHome =
    document.querySelector(
      "#back-home"
    );


  if (backHome) {

    backHome.type =
      "button";


    backHome.addEventListener(
      "click",
      function() {

        showPage(
          "home"
        );

      }
    );

  }


  const backToEmotion =
    document.querySelector(
      "#back-to-emotion"
    );


  if (backToEmotion) {

    backToEmotion.type =
      "button";


    backToEmotion.addEventListener(
      "click",
      function() {

        if (
          currentEmotion
        ) {

          displayEmotion(
            currentEmotion
          );

        }


        showPage(
          "emotion-page"
        );

      }
    );

  }

}


/* =========================================================
   23. START SOUNDSPACE
   ========================================================= */

document.addEventListener(
  "DOMContentLoaded",
  function() {

    console.log(
      "🎵 SoundSpace loaded successfully!"
    );


    setupPageButtons();

    setupEmotionCards();

    setupFeedback();

    setupNextButton();

    setupReshuffleButton();

    setupBackButtons();


    window.showPage =
      showPage;


    window.displayEmotion =
      function(emotion) {

        if (
          !moodData[emotion]
        ) {

          return;

        }


        currentEmotion =
          emotion;


        trackSoundSpaceEvent(
          "emotion_selected",
          emotion
        );


        displayEmotion(
          emotion
        );


        showPage(
          "emotion-page"
        );

      };


    if (!IS_DEVELOPER) {

      trackSoundSpaceEvent(
        "page_view"
      );

    }

  }
);


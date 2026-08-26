# SoundSpace — Replacement `script.js`


/* =========================================================
   SOUNDSPACE — COMPLETE SCRIPT
   SHARED SUPABASE ANALYTICS
   DEVELOPER ACTIVITY EXCLUSION
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

/*
   IMPORTANT:

   Your activity will NOT be tracked when developer mode
   is enabled on your browser.

   To enable developer mode, add:

   ?developer=on

   to the end of your SoundSpace website URL once.

   Example:

   https://vani32141.github.io/SoundSpace/?developer=on

   After opening that link, developer mode is saved in
   your browser using localStorage.

   You can then use your normal SoundSpace URL afterwards.
*/


const DEVELOPER_MODE_KEY =
  "soundspace_developer_mode";


const urlParameters =
  new URLSearchParams(
    window.location.search
  );


if (
  urlParameters.get("developer") ===
  "on"
) {

  localStorage.setItem(
    DEVELOPER_MODE_KEY,
    "true"
  );


  /*
     Remove ?developer=on from the address bar
     after developer mode has been activated.
  */

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


if (IS_DEVELOPER) {

  console.log(
    "SoundSpace Developer Mode is ON. Your activity will not be tracked."
  );

}


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
  helpful = null
) {

  /*
     DO NOT TRACK THE DEVELOPER
  */

  if (IS_DEVELOPER) {

    console.log(
      "Developer activity ignored:",
      eventType
    );

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
                helpful

            })

        }
      );


    if (!response.ok) {

      const errorText =
        await response.text();


      console.error(
        "Supabase tracking failed:",
        errorText
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
   5. ALL 50 SONGS
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
        why:
          "Its fast, upbeat rhythm, bright production and strongly positive message make it well suited to maintaining an already positive emotional state."
      },

      {
        title: "Can't Stop the Feeling!",
        artist: "Justin Timberlake",
        why:
          "The lively tempo, danceable rhythm and joyful lyrics create an energetic listening experience associated with positive and high-energy emotions."
      },

      {
        title: "Levitating",
        artist: "Dua Lipa",
        why:
          "Its disco-inspired beat, steady rhythm and energetic production give the song a playful and uplifting character."
      },

      {
        title: "Uptown Funk",
        artist: "Mark Ronson ft. Bruno Mars",
        why:
          "The strong funk groove, energetic tempo and confident delivery make it highly danceable and stimulating."
      },

      {
        title: "Good as Hell",
        artist: "Lizzo",
        why:
          "Its upbeat production and encouraging, self-affirming message support feelings of confidence and positivity."
      },

      {
        title: "Lush Life",
        artist: "Zara Larsson",
        why:
          "The bright pop production, energetic rhythm and carefree tone create a lively and enjoyable atmosphere."
      },

      {
        title: "APT.",
        artist: "ROSÉ & Bruno Mars",
        why:
          "Its catchy rhythm, playful structure and high-energy pop-rock production make it suitable for an energetic and upbeat mood."
      },

      {
        title: "Golden",
        artist: "HUNTR/X, EJAE, Audrey Nuna & REI AMI",
        why:
          "The energetic production and confident vocal delivery give the song a bold, uplifting and celebratory emotional direction."
      },

      {
        title: "Flowers",
        artist: "Miley Cyrus",
        why:
          "Its confident message of independence and bright pop production can reinforce feelings of empowerment and self-assurance."
      },

      {
        title: "Roar",
        artist: "Katy Perry",
        why:
          "The powerful build-up, energetic chorus and message of finding one's voice make it an uplifting and motivating song."
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
        why:
          "Its emotional vocal delivery and themes of appreciating meaningful relationships create space for reflection and emotional connection."
      },

      {
        title: "Someone You Loved",
        artist: "Lewis Capaldi",
        why:
          "The slow pace, emotional vocals and lyrics about loss and longing can help listeners connect with and process feelings of sadness."
      },

      {
        title: "The Night We Met",
        artist: "Lord Huron",
        why:
          "Its slow, atmospheric sound and nostalgic lyrics create a reflective environment suited to quiet emotional processing."
      },

      {
        title: "When We Were Young",
        artist: "Adele",
        why:
          "Its nostalgic themes, expressive vocals and gradual musical build create a strong sense of reflection and emotional connection."
      },

      {
        title: "Iris",
        artist: "Goo Goo Dolls",
        why:
          "The emotional melody and vulnerable lyrics give the song an expressive quality that can resonate with feelings of longing and sadness."
      },

      {
        title: "Lovely",
        artist: "Billie Eilish & Khalid",
        why:
          "Its restrained production, darker atmosphere and emotionally vulnerable lyrics make it suitable for reflective listening."
      },

      {
        title: "What Was I Made For?",
        artist: "Billie Eilish",
        why:
          "Its soft arrangement and introspective lyrics encourage quiet reflection and emotional awareness."
      },

      {
        title: "Ocean Eyes",
        artist: "Billie Eilish",
        why:
          "The gentle production, slow pacing and dreamy atmosphere create a calm and introspective listening experience."
      },

      {
        title: "Die With A Smile",
        artist: "Lady Gaga & Bruno Mars",
        why:
          "Its emotional ballad structure and themes of love and appreciating important relationships encourage heartfelt reflection."
      },

      {
        title: "Back To Friends",
        artist: "sombr",
        why:
          "Its reflective relationship themes and emotional delivery make it suitable for listeners exploring feelings of loss, distance or longing."
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
        why:
          "Its intense percussion, powerful vocals and message of turning pain into strength provide an energetic outlet for strong emotions."
      },

      {
        title: "Stronger",
        artist: "Kelly Clarkson",
        why:
          "The powerful vocals and message of overcoming difficulty can help redirect frustration toward resilience and confidence."
      },

      {
        title: "Titanium",
        artist: "David Guetta ft. Sia",
        why:
          "Its strong electronic production and resilient message create an intense but empowering emotional experience."
      },

      {
        title: "Unstoppable",
        artist: "Sia",
        why:
          "The dramatic build and confident lyrics can help shift feelings of frustration toward determination and personal strength."
      },

      {
        title: "Roar",
        artist: "Katy Perry",
        why:
          "Its energetic chorus and message of standing up for oneself provide a more constructive direction for intense emotions."
      },

      {
        title: "Shake It Off",
        artist: "Taylor Swift",
        why:
          "Its upbeat rhythm and message of letting go of criticism can encourage emotional release and a shift away from irritation."
      },

      {
        title: "Flowers",
        artist: "Miley Cyrus",
        why:
          "Its confident and independent message can help redirect frustration toward self-reliance and emotional strength."
      },

      {
        title: "I Will Survive",
        artist: "Gloria Gaynor",
        why:
          "Its strong rhythm and message of overcoming hardship make it a classic example of transforming negative experiences into resilience."
      },

      {
        title: "Since U Been Gone",
        artist: "Kelly Clarkson",
        why:
          "Its high-energy pop-rock sound and themes of release provide an expressive outlet for intense feelings."
      },

      {
        title: "The Man",
        artist: "The Killers",
        why:
          "Its energetic rock sound and confident delivery provide a strong musical outlet that matches high-arousal emotional states."
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
        why:
          "Its slow tempo, flowing melody and gentle arrangement create a softer listening environment that may support relaxation."
      },

      {
        title: "Perfect",
        artist: "Ed Sheeran",
        why:
          "The smooth melody, moderate pace and familiar structure provide a gentle and emotionally warm listening experience."
      },

      {
        title: "Photograph",
        artist: "Ed Sheeran",
        why:
          "Its acoustic-led sound and reflective pacing create a quieter atmosphere suited to slowing down and focusing."
      },

      {
        title: "Yellow",
        artist: "Coldplay",
        why:
          "Its warm melodic structure and familiar, steady progression can create a comforting and emotionally reassuring atmosphere."
      },

      {
        title: "Ocean Eyes",
        artist: "Billie Eilish",
        why:
          "Its soft vocals, gentle production and spacious sound create a calm, dreamy listening environment."
      },

      {
        title: "Lovely",
        artist: "Billie Eilish & Khalid",
        why:
          "Its restrained instrumentation and slower pacing allow for reflective listening without an overly intense musical build."
      },

      {
        title: "Until I Found You",
        artist: "Stephen Sanchez",
        why:
          "Its nostalgic style, smooth vocals and slower rhythm create a gentle and familiar atmosphere."
      },

      {
        title: "Adore You",
        artist: "Harry Styles",
        why:
          "Its warm production, smooth melody and positive emotional tone can provide a comfortable and reassuring listening experience."
      },

      {
        title: "Sunflower",
        artist: "Post Malone & Swae Lee",
        why:
          "Its relaxed groove and melodic vocals give it an easy-going quality that may help create a less tense atmosphere."
      },

      {
        title: "What Was I Made For?",
        artist: "Billie Eilish",
        why:
          "Its quiet arrangement and slow pace encourage stillness and reflection, making it suitable for calm, low-stimulation listening."
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
        why:
          "Its relaxed rhythm, bright production and optimistic tone create an easy-going atmosphere that can help support a mental reset."
      },

      {
        title: "Put Your Records On",
        artist: "Corinne Bailey Rae",
        why:
          "Its warm vocals, relaxed groove and encouraging tone create a gentle, comforting listening experience."
      },

      {
        title: "Lovely Day",
        artist: "Bill Withers",
        why:
          "The smooth groove and optimistic vocal delivery create a warm and positive atmosphere without overwhelming intensity."
      },

      {
        title: "Sunflower",
        artist: "Post Malone & Swae Lee",
        why:
          "Its laid-back rhythm and melodic flow give the song a relaxed quality that suits a low-pressure listening experience."
      },

      {
        title: "Adore You",
        artist: "Harry Styles",
        why:
          "Its warm production and smooth rhythm create a lighter emotional atmosphere that can help move attention away from frustration."
      },

      {
        title: "Best Part",
        artist: "Daniel Caesar ft. H.E.R.",
        why:
          "Its soft instrumentation, slow groove and gentle vocal delivery create a calm and intimate atmosphere."
      },

      {
        title: "Location",
        artist: "Khalid",
        why:
          "Its mellow production and unhurried rhythm make it suitable for relaxed listening and stepping away from overstimulation."
      },

      {
        title: "Golden Hour",
        artist: "JVKE",
        why:
          "Its warm piano-led melody and uplifting atmosphere create a soothing and pleasant emotional tone."
      },

      {
        title: "Sweet Creature",
        artist: "Harry Styles",
        why:
          "Its acoustic sound and gentle vocal delivery create a quiet and low-intensity listening experience."
      },

      {
        title: "So Easy (To Fall in Love)",
        artist: "Olivia Dean",
        why:
          "Its smooth vocals and light, warm production create an easy-going atmosphere suited to relaxing and resetting emotionally."
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
   7. PAGE NAVIGATION
   ========================================================= */

function showPage(pageId) {

  const pages =
    document.querySelectorAll(".page");


  pages.forEach(function(page) {

    page.classList.remove(
      "active-page"
    );

  });


  const targetPage =
    document.querySelector(
      "#" + pageId
    );


  if (targetPage) {

    targetPage.classList.add(
      "active-page"
    );


    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });

  }

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


  if (!songList) {
    return;
  }


  songList.innerHTML = "";


  if (
    !currentEmotion ||
    !moodData[currentEmotion]
  ) {

    return;

  }


  const songs =
    moodData[currentEmotion].songs;


  songs.forEach(
    function(song, index) {

      const songCard =
        document.createElement(
          "button"
        );


      songCard.type = "button";

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
        function() {

          startSongSession(song);

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
    let i = shuffled.length - 1;
    i > 0;
    i--
  ) {

    const j =
      Math.floor(
        Math.random() * (i + 1)
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
   11. START SONG
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
      .filter(function(item) {

        return !(
          item.title === song.title &&
          item.artist === song.artist
        );

      });


  shuffleQueue = [
    song,
    ...shuffleSongs(otherSongs)
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
    shuffleQueue[currentSongIndex];


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


  const spotifyLink =
    document.querySelector(
      "#spotify-link"
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
    currentEmotion &&
    moodData[currentEmotion]
  ) {

    playerEmoji.textContent =
      moodData[currentEmotion].emoji;

  }


  if (songPosition) {

    songPosition.textContent =
      `${currentSongIndex + 1} / ${shuffleQueue.length}`;

  }


  if (spotifyLink) {

    const searchQuery =
      encodeURIComponent(
        currentSong.title +
        " " +
        currentSong.artist
      );


    spotifyLink.href =
      "https://open.spotify.com/search/" +
      searchQuery;

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


      queueItem.type = "button";

      queueItem.className =
        "queue-item";


      if (
        index === currentSongIndex
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

          currentSong =
            shuffleQueue[index];

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


  currentSong =
    shuffleQueue[
      currentSongIndex
    ];


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
      moodData[currentEmotion].songs
    );


  currentSongIndex = 0;


  currentSong =
    shuffleQueue[0];


  displayPlayer();

}


/* =========================================================
   16. GET SHARED INSIGHTS
   ========================================================= */

async function getSharedInsights() {

  try {

    const response =
      await fetch(
        `${SUPABASE_URL}/rest/v1/usage_events?select=*`,
        {
          method: "GET",

          headers: {
            "apikey":
              SUPABASE_KEY,

            "Authorization":
              `Bearer ${SUPABASE_KEY}`
          }
        }
      );


    if (!response.ok) {

      const errorText =
        await response.text();


      console.error(
        "Could not load Supabase insights:",
        errorText
      );


      return [];

    }


    return await response.json();

  } catch (error) {

    console.error(
      "Insights loading error:",
      error
    );


    return [];

  }

}


/* =========================================================
   17. DISPLAY SHARED INSIGHTS
   ========================================================= */

async function displayInsights() {

  const events =
    await getSharedInsights();


  const sessions =
    new Set();


  events.forEach(function(event) {

    if (event.session_id) {

      sessions.add(
        event.session_id
      );

    }

  });


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


  events.forEach(function(event) {

    if (
      event.event_type ===
        "emotion_selected" &&
      event.mood &&
      emotionCounts[event.mood]
        !== undefined
    ) {

      emotionCounts[event.mood]++;

    }

  });


  [
    "happiness",
    "sadness",
    "anger",
    "anxiety",
    "irritation"
  ].forEach(function(emotion) {

    const element =
      document.querySelector(
        "#stat-" + emotion
      );


    if (element) {

      element.textContent =
        emotionCounts[emotion];

    }

  });


  let yes = 0;
  let little = 0;
  let no = 0;


  events.forEach(function(event) {

    if (
      event.event_type !==
      "feedback"
    ) {

      return;

    }


    if (event.helpful === "Yes") {
      yes++;
    }

    if (event.helpful === "A little") {
      little++;
    }

    if (event.helpful === "No") {
      no++;
    }

  });


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
    yesElement.textContent = yes;
  }


  if (littleElement) {
    littleElement.textContent = little;
  }


  if (noElement) {
    noElement.textContent = no;
  }


  const dates =
    document.querySelector(
      "#insight-dates"
    );


  if (dates) {

    const pageViews =
      events
        .filter(function(event) {

          return (
            event.event_type ===
            "page_view"
          );

        })
        .reverse();


    if (!pageViews.length) {

      dates.innerHTML = `
        <p class="empty-insights">
          No activity recorded yet.
        </p>
      `;

    } else {

      dates.innerHTML =
        pageViews
          .map(function(event) {

            const date =
              event.created_at
                ? new Date(
                    event.created_at
                  )
                : new Date();


            return `

              <div class="date-row">

                <span>
                  📅
                  ${date.toLocaleDateString()}
                </span>

                <strong>
                  ${date.toLocaleTimeString(
                    [],
                    {
                      hour: "2-digit",
                      minute: "2-digit"
                    }
                  )}
                </strong>

              </div>

            `;

          })
          .join("");

    }

  }


  const feedbackContainer =
    document.querySelector(
      "#insight-feedback"
    );


  if (feedbackContainer) {

    const feedback =
      events
        .filter(function(event) {

          return (
            event.event_type ===
            "feedback"
          );

        })
        .reverse();


    if (!feedback.length) {

      feedbackContainer.innerHTML = `
        <p class="empty-insights">
          No feedback submitted yet.
        </p>
      `;

    } else {

      feedbackContainer.innerHTML =
        feedback
          .map(function(item) {

            return `

              <article class="feedback-result">

                <div class="feedback-result-top">

                  <strong>
                    ${
                      escapeHTML(
                        item.mood ||
                        "No emotion selected"
                      )
                    }
                  </strong>

                  <span>
                    ${
                      escapeHTML(
                        item.helpful ||
                        "No answer"
                      )
                    }
                  </span>

                </div>

                ${
                  item.song
                    ? `
                      <p>
                        <b>Song:</b><br>
                        ${escapeHTML(item.song)}
                      </p>
                    `
                    : ""
                }

                ${
                  item.feedback_text
                    ? `
                      <p>
                        <b>Feedback:</b><br>
                        ${escapeHTML(
                          item.feedback_text
                        )}
                      </p>
                    `
                    : ""
                }

                <small>
                  ${
                    item.created_at
                      ? new Date(
                          item.created_at
                        ).toLocaleString()
                      : ""
                  }
                </small>

              </article>

            `;

          })
          .join("");

    }

  }

}


/* =========================================================
   18. ESCAPE HTML
   ========================================================= */

function escapeHTML(value) {

  return String(value)

    .replaceAll(
      "&",
      "&amp;"
    )

    .replaceAll(
      "<",
      "&lt;"
    )

    .replaceAll(
      ">",
      "&gt;"
    )

    .replaceAll(
      '"',
      "&quot;"
    )

    .replaceAll(
      "'",
      "&#039;"
    );

}


/* =========================================================
   19. PAGE BUTTONS
   ========================================================= */

function setupPageButtons() {

  const pageButtons =
    document.querySelectorAll(
      "[data-page]"
    );


  pageButtons.forEach(
    function(button) {

      button.addEventListener(
        "click",
        function() {

          const page =
            button.dataset.page;


          showPage(page);


          if (
            page === "insights"
          ) {

            displayInsights();

          }

        }
      );

    }
  );

}


/* =========================================================
   20. EMOTION CARDS
   ========================================================= */

function setupEmotionCards() {

  const emotionCards =
    document.querySelectorAll(
      ".emotion-card"
    );


  emotionCards.forEach(
    function(card) {

      card.addEventListener(
        "click",
        function() {

          const emotion =
            card.dataset.emotion;


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

        }
      );

    }
  );

}


/* =========================================================
   21. FEEDBACK
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
          : "";


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


      /*
         DO NOT SAVE DEVELOPER FEEDBACK
      */

      if (IS_DEVELOPER) {

        const successMessage =
          document.querySelector(
            "#feedback-success"
          );


        if (successMessage) {

          successMessage.textContent =
            "Developer mode is on. This test feedback was not saved.";

          successMessage.hidden =
            false;

        }


        feedbackForm.reset();

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
                    "feedback",

                  session_id:
                    SOUNDSPACE_SESSION_ID,

                  page:
                    window.location.pathname,

                  mood:
                    emotion || null,

                  song:
                    currentSong
                      ? `${currentSong.title} — ${currentSong.artist}`
                      : null,

                  helpful:
                    helpful || null,

                  feedback_text:
                    feedbackText || null

                })

            }
          );


        if (!response.ok) {

          const errorText =
            await response.text();


          console.error(
            "Feedback could not be saved:",
            errorText
          );


          return;

        }


        const successMessage =
          document.querySelector(
            "#feedback-success"
          );


        if (successMessage) {

          successMessage.textContent =
            "✨ Thank you! Your feedback has been saved.";

          successMessage.hidden =
            false;

        }


        feedbackForm.reset();

      } catch (error) {

        console.error(
          "Feedback error:",
          error
        );

      }

    }
  );

}


/* =========================================================
   22. NEXT BUTTON
   ========================================================= */

function setupNextButton() {

  const button =
    document.querySelector(
      "#next-button"
    );


  if (button) {

    button.addEventListener(
      "click",
      nextSong
    );

  }

}


/* =========================================================
   23. RESHUFFLE BUTTON
   ========================================================= */

function setupReshuffleButton() {

  const button =
    document.querySelector(
      "#reshuffle-button"
    );


  if (button) {

    button.addEventListener(
      "click",
      reshuffleSongs
    );

  }

}


/* =========================================================
   24. BACK BUTTONS
   ========================================================= */

function setupBackButtons() {

  const backHome =
    document.querySelector(
      "#back-home"
    );


  if (backHome) {

    backHome.addEventListener(
      "click",
      function() {

        showPage("home");

      }
    );

  }


  const backToEmotion =
    document.querySelector(
      "#back-to-emotion"
    );


  if (backToEmotion) {

    backToEmotion.addEventListener(
      "click",
      function() {

        if (currentEmotion) {

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
   25. START SOUNDSPACE
   ========================================================= */

document.addEventListener(
  "DOMContentLoaded",
  function() {

    console.log(
      "SoundSpace loaded successfully!"
    );


    setupPageButtons();

    setupEmotionCards();

    setupFeedback();

    setupNextButton();

    setupReshuffleButton();

    setupBackButtons();


    /*
       Count this visit only if the visitor
       is NOT the developer.
    */

    if (!IS_DEVELOPER) {

      trackSoundSpaceEvent(
        "page_view"
      );

    }

  }
);

/* =========================================================
   SOUNDSPACE
   50 SONG VERSION
   5 EMOTIONS × 10 SONGS
   ========================================================= */


/* =========================================================
   SUPABASE
   ========================================================= */

const SUPABASE_URL =
    "https://bjfmlknorxlztxkxlebd.supabase.co";

const SUPABASE_KEY =
    "sb_publishable_NDHWFaIHfs6IqvmbZiHrCg_0H2ZXZbU";


/*
   If your previous Supabase URL and publishable key are already
   in your old script, KEEP THOSE TWO VALUES.

   Do NOT use the placeholder values above if you already have
   your real Supabase details.
*/


async function sendAnalytics(eventType, emotion = null, feedback = null) {

    try {

        if (
            SUPABASE_URL.includes("https://bjfmlknorxlztxkxlebd.supabase.co") ||
            SUPABASE_KEY.includes("sb_publishable_NDHWFaIHfs6IqvmbZiHrCg_0H2ZXZbU")
        ) {
            return;
        }

        await fetch(
            `${SUPABASE_URL}/rest/v1/usage_events`,
            {
                method: "POST",

                headers: {
                    "Content-Type": "application/json",
                    "apikey": SUPABASE_KEY,
                    "Authorization": `Bearer ${SUPABASE_KEY}`,
                    "Prefer": "return=minimal"
                },

                body: JSON.stringify({
                    event_type: eventType,
                    emotion: emotion,
                    feedback: feedback
                })
            }
        );

    } catch (error) {

        console.log(
            "Analytics error:",
            error
        );

    }
}


/* =========================================================
   SOUND DATA
   ========================================================= */

const moodData = {

    Happiness: {

        icon: "😊",

        description:
            "Bright, energetic and joyful music for moments when you feel happy.",

        songs: [

            {
                title: "Happy",
                artist: "Pharrell Williams",
                reason:
                    "Its upbeat tempo, major-key sound and positive lyrical message create a strong feeling of joy and celebration."
            },

            {
                title: "Can't Stop the Feeling!",
                artist: "Justin Timberlake",
                reason:
                    "Its energetic rhythm, dance-focused production and positive tone make it strongly associated with excitement and happiness."
            },

            {
                title: "Levitating",
                artist: "Dua Lipa",
                reason:
                    "The song uses a highly danceable groove and bright pop production that can support an energetic, positive mood."
            },

            {
                title: "Uptown Funk",
                artist: "Mark Ronson ft. Bruno Mars",
                reason:
                    "Its strong rhythmic groove, energetic vocals and playful production make it well suited to an upbeat mood."
            },

            {
                title: "Good as Hell",
                artist: "Lizzo",
                reason:
                    "The confident lyrics and energetic production encourage a positive, self-affirming feeling."
            },

            {
                title: "Lush Life",
                artist: "Zara Larsson",
                reason:
                    "Its lively beat and bright pop production give it an energetic and carefree character."
            },

            {
                title: "APT.",
                artist: "ROSÉ & Bruno Mars",
                reason:
                    "Its catchy rhythm, playful vocals and energetic pop-rock production create an exciting atmosphere."
            },

            {
                title: "Golden",
                artist: "HUNTR/X, EJAE, Audrey Nuna & REI AMI",
                reason:
                    "Its energetic pop sound and uplifting vocal performance make it suitable for an energized, positive mood."
            },

            {
                title: "Flowers",
                artist: "Miley Cyrus",
                reason:
                    "Its empowering message and accessible pop production can support feelings of confidence and positivity."
            },

            {
                title: "Roar",
                artist: "Katy Perry",
                reason:
                    "Its powerful vocals and motivational lyrics create an energetic, confident and uplifting feeling."
            }

        ]

    },


    Sadness: {

        icon: "😔",

        description:
            "Reflective, emotional and comforting music for difficult moments.",

        songs: [

            {
                title: "Someone Like You",
                artist: "Adele",
                reason:
                    "Its slow tempo, restrained arrangement and emotional vocal delivery create a reflective atmosphere."
            },

            {
                title: "When I Was Your Man",
                artist: "Bruno Mars",
                reason:
                    "The piano-led arrangement and regretful lyrics give the song a strongly reflective emotional character."
            },

            {
                title: "drivers license",
                artist: "Olivia Rodrigo",
                reason:
                    "Its intimate vocals, slower pacing and themes of heartbreak make it particularly suited to reflective moods."
            },

            {
                title: "Lovely",
                artist: "Billie Eilish & Khalid",
                reason:
                    "Its subdued production and melancholic vocal performance create a quiet, introspective atmosphere."
            },

            {
                title: "All I Want",
                artist: "Kodaline",
                reason:
                    "The emotional vocals and gradual musical build support feelings of longing and reflection."
            },

            {
                title: "The Night We Met",
                artist: "Lord Huron",
                reason:
                    "Its atmospheric arrangement and nostalgic lyrics create a strong sense of longing and remembrance."
            },

            {
                title: "Fix You",
                artist: "Coldplay",
                reason:
                    "The restrained beginning and gradual emotional build create a reflective and comforting musical experience."
            },

            {
                title: "Let Her Go",
                artist: "Passenger",
                reason:
                    "Its acoustic sound and reflective lyrics focus on loss, memory and realizing someone's importance."
            },

            {
                title: "traitor",
                artist: "Olivia Rodrigo",
                reason:
                    "Its intimate delivery and emotionally heavy subject matter make it suited to a reflective mood."
            },

            {
                title: "Before You Go",
                artist: "Lewis Capaldi",
                reason:
                    "The emotional vocal performance and slow-building arrangement create a deeply reflective atmosphere."
            }

        ]

    },


    Anger: {

        icon: "😡",

        description:
            "Intense, powerful music that matches high-energy emotions.",

        songs: [

            {
                title: "Believer",
                artist: "Imagine Dragons",
                reason:
                    "Its heavy percussion, forceful vocals and intense dynamic build create a powerful high-energy sound."
            },

            {
                title: "Centuries",
                artist: "Fall Out Boy",
                reason:
                    "The strong drums and dramatic arrangement create an intense, powerful atmosphere."
            },

            {
                title: "Natural",
                artist: "Imagine Dragons",
                reason:
                    "Its aggressive percussion and forceful vocal delivery give the song a high-intensity character."
            },

            {
                title: "Numb",
                artist: "Linkin Park",
                reason:
                    "Its powerful rock instrumentation and emotionally intense vocals make it suitable for expressing frustration."
            },

            {
                title: "Warriors",
                artist: "Imagine Dragons",
                reason:
                    "Its dramatic percussion and escalating arrangement create a feeling of strength and intensity."
            },

            {
                title: "Radioactive",
                artist: "Imagine Dragons",
                reason:
                    "The heavy electronic-rock production and dramatic rhythm create an intense atmosphere."
            },

            {
                title: "Monster",
                artist: "Skillet",
                reason:
                    "Its heavy rock instrumentation and forceful vocal delivery produce a strongly energetic sound."
            },

            {
                title: "My Songs Know What You Did in the Dark",
                artist: "Fall Out Boy",
                reason:
                    "Its driving drums and energetic rock production create a fast-moving, high-intensity mood."
            },

            {
                title: "Whatever It Takes",
                artist: "Imagine Dragons",
                reason:
                    "Its energetic percussion and determined vocal performance create a strong sense of intensity and drive."
            },

            {
                title: "In the End",
                artist: "Linkin Park",
                reason:
                    "Its contrast between restrained sections and powerful choruses creates an emotionally intense listening experience."
            }

        ]

    },


    Anxiety: {

        icon: "😰",

        description:
            "Calming and grounding music for moments when your thoughts feel overwhelming.",

        songs: [

            {
                title: "Weightless",
                artist: "Marconi Union",
                reason:
                    "This track was specifically created with relaxation in mind and has been associated with reduced subjective stress in research."
            },

            {
                title: "Lovely",
                artist: "Billie Eilish & Khalid",
                reason:
                    "Its slower pace and restrained production create a quiet atmosphere that can work well for reflective listening."
            },

            {
                title: "ocean eyes",
                artist: "Billie Eilish",
                reason:
                    "Its soft vocals and spacious production create a gentle, low-intensity listening experience."
            },

            {
                title: "Until I Found You",
                artist: "Stephen Sanchez",
                reason:
                    "Its slower tempo and warm acoustic arrangement create a calmer, nostalgic atmosphere."
            },

            {
                title: "Yellow",
                artist: "Coldplay",
                reason:
                    "Its steady pacing and gradual arrangement can provide a predictable and soothing listening experience."
            },

            {
                title: "Perfect",
                artist: "Ed Sheeran",
                reason:
                    "Its gentle acoustic instrumentation and steady rhythm create a relaxed musical environment."
            },

            {
                title: "Photograph",
                artist: "Ed Sheeran",
                reason:
                    "Its acoustic arrangement and moderate pace give it a calm, intimate quality."
            },

            {
                title: "All of Me",
                artist: "John Legend",
                reason:
                    "The piano-led arrangement and smooth vocal delivery create a relatively gentle listening atmosphere."
            },

            {
                title: "A Thousand Years",
                artist: "Christina Perri",
                reason:
                    "Its slow pacing and soft orchestral arrangement create a peaceful and reflective sound."
            },

            {
                title: "Someone You Loved",
                artist: "Lewis Capaldi",
                reason:
                    "Its piano-centered arrangement starts relatively quietly and gives space for emotional reflection."
            }

        ]

    },


    Irritation: {

        icon: "😤",

        description:
            "Energetic music to help acknowledge tension and shift your mood.",

        songs: [

            {
                title: "Shake It Off",
                artist: "Taylor Swift",
                reason:
                    "Its upbeat rhythm and message about moving past negativity make it a natural choice for shifting an irritated mood."
            },

            {
                title: "Stronger",
                artist: "Kelly Clarkson",
                reason:
                    "Its energetic production and resilience-focused lyrics create a sense of confidence and forward movement."
            },

            {
                title: "Since U Been Gone",
                artist: "Kelly Clarkson",
                reason:
                    "Its energetic pop-rock production provides a strong musical outlet for frustration."
            },

            {
                title: "Don't Start Now",
                artist: "Dua Lipa",
                reason:
                    "Its steady dance groove provides energetic movement that can help redirect attention."
            },

            {
                title: "Good 4 U",
                artist: "Olivia Rodrigo",
                reason:
                    "Its energetic pop-rock production strongly expresses frustration and emotional intensity."
            },

            {
                title: "So What",
                artist: "P!nk",
                reason:
                    "Its energetic arrangement and assertive vocal delivery create a powerful outlet for irritation."
            },

            {
                title: "Confident",
                artist: "Demi Lovato",
                reason:
                    "Its strong beat and assertive lyrics create an energetic and self-assured atmosphere."
            },

            {
                title: "Break My Soul",
                artist: "Beyoncé",
                reason:
                    "Its dance-oriented rhythm and theme of releasing pressure can support a transition away from frustration."
            },

            {
                title: "Unstoppable",
                artist: "Sia",
                reason:
                    "Its strong beat and empowering vocal performance create an energetic sense of determination."
            },

            {
                title: "Firework",
                artist: "Katy Perry",
                reason:
                    "Its uplifting build and powerful chorus create an energetic shift toward confidence and positivity."
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
   7. SAFE PAGE NAVIGATION
   ========================================================= */

function showPage(pageId) {

  const pages = document.querySelectorAll(".page");

  pages.forEach(function(page) {
    page.classList.remove("active-page");
  });

  const targetPage = document.getElementById(pageId);

  if (!targetPage) {
    console.error("Page not found:", pageId);
    return;
  }

  targetPage.classList.add("active-page");

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
    console.error("Emotion not found:", emotion);
    return;
  }

  currentEmotion = emotion;

  const data = moodData[emotion];

  const emotionTitle =
    document.getElementById("emotion-title");

  const emotionDescription =
    document.getElementById("emotion-description");

  const emotionEmoji =
    document.getElementById("emotion-emoji");


  if (emotionTitle) {
    emotionTitle.textContent = data.title;
  }

  if (emotionDescription) {
    emotionDescription.textContent =
      data.description;
  }

  if (emotionEmoji) {
    emotionEmoji.textContent = data.emoji;
  }

  displaySongs();

}


/* =========================================================
   9. DISPLAY SONGS
   ========================================================= */

function displaySongs() {

  const songList =
    document.getElementById("song-list");

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


  songs.forEach(function(song, index) {

    const songCard =
      document.createElement("button");

    songCard.type = "button";

    songCard.className = "song-card";

    songCard.innerHTML = `
      <span class="song-number">
        ${String(index + 1).padStart(2, "0")}
      </span>

      <span class="song-details">

        <strong>${escapeHTML(song.title)}</strong>

        <small>${escapeHTML(song.artist)}</small>

        <span class="song-why">

          <b>✨ Why this song fits:</b>

          ${escapeHTML(song.why)}

        </span>

      </span>

      <span class="song-arrow">→</span>
    `;


    songCard.addEventListener(
      "click",
      function() {

        startSongSession(song);

      }
    );


    songList.appendChild(songCard);

  });

}


/* =========================================================
   10. SHUFFLE
   ========================================================= */

function shuffleSongs(array) {

  const shuffled = [...array];

  for (
    let i = shuffled.length - 1;
    i > 0;
    i--
  ) {

    const j =
      Math.floor(Math.random() * (i + 1));

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

  currentSong = song;


  /* Analytics should NEVER stop the website */

  try {

    trackSoundSpaceEvent(
      "song_selected",
      currentEmotion,
      `${song.title} — ${song.artist}`
    );

  } catch (error) {

    console.error(
      "Analytics error ignored:",
      error
    );

  }


  const otherSongs =
    moodData[currentEmotion].songs.filter(
      function(item) {

        return !(
          item.title === song.title &&
          item.artist === song.artist
        );

      }
    );


  shuffleQueue = [
    song,
    ...shuffleSongs(otherSongs)
  ];


  currentSongIndex = 0;

  displayPlayer();

  showPage("player-page");

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
    document.getElementById("player-title");

  const playerArtist =
    document.getElementById("player-artist");

  const playerReason =
    document.getElementById("player-reason");

  const playerEmoji =
    document.getElementById("player-emoji");

  const songPosition =
    document.getElementById("song-position");

  const spotifyLink =
    document.getElementById("spotify-link");


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
    document.getElementById("queue-list");

  if (!queueList) {
    return;
  }

  queueList.innerHTML = "";


  shuffleQueue.forEach(
    function(song, index) {

      const queueItem =
        document.createElement("button");

      queueItem.type = "button";

      queueItem.className = "queue-item";


      if (index === currentSongIndex) {

        queueItem.classList.add(
          "current-song"
        );

      }


      queueItem.innerHTML = `
        <span class="queue-number">
          ${String(index + 1).padStart(2, "0")}
        </span>

        <span class="queue-info">
          <strong>${escapeHTML(song.title)}</strong>
          <small>${escapeHTML(song.artist)}</small>
        </span>
      `;


      queueItem.addEventListener(
        "click",
        function() {

          currentSongIndex = index;

          currentSong =
            shuffleQueue[index];

          displayPlayer();

        }
      );


      queueList.appendChild(queueItem);

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
      shuffleSongs(shuffleQueue);

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
      moodData[currentEmotion].songs
    );

  currentSongIndex = 0;

  currentSong = shuffleQueue[0];

  displayPlayer();

}


/* =========================================================
   16. SAFE INSIGHTS
   ========================================================= */

async function getSharedInsights() {

  try {

    const response =
      await fetch(
        `${SUPABASE_URL}/rest/v1/usage_events?select=*`,
        {
          method: "GET",

          headers: {
            "apikey": SUPABASE_KEY,
            "Authorization":
              `Bearer ${SUPABASE_KEY}`
          }
        }
      );


    if (!response.ok) {

      console.error(
        "Could not load insights"
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


  const sessions = new Set();

  events.forEach(function(event) {

    if (event.session_id) {
      sessions.add(event.session_id);
    }

  });


  const totalElement =
    document.getElementById("insight-total");

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
      "emotion_selected"
    ) {

      const mood =
        String(event.mood || "")
          .toLowerCase();

      if (
        emotionCounts[mood] !== undefined
      ) {

        emotionCounts[mood]++;

      }

    }

  });


  Object.keys(emotionCounts).forEach(
    function(emotion) {

      const element =
        document.getElementById(
          "stat-" + emotion
        );

      if (element) {
        element.textContent =
          emotionCounts[emotion];
      }

    }
  );


  let yes = 0;
  let no = 0;


  events.forEach(function(event) {

    if (
      event.event_type === "feedback"
    ) {

      if (event.helpful === "Yes") {
        yes++;
      }

      if (event.helpful === "No") {
        no++;
      }

    }

  });


  const yesElement =
    document.getElementById("insight-yes");

  const noElement =
    document.getElementById("insight-no");


  if (yesElement) {
    yesElement.textContent = yes;
  }

  if (noElement) {
    noElement.textContent = no;
  }


  const dates =
    document.getElementById(
      "insight-dates"
    );


  if (dates) {

    const pageViews =
      events
        .filter(function(event) {

          return event.event_type ===
            "page_view";

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
        pageViews.map(function(event) {

          const date =
            event.created_at
              ? new Date(event.created_at)
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

        }).join("");

    }

  }


  const feedbackContainer =
    document.getElementById(
      "insight-feedback"
    );


  if (feedbackContainer) {

    const feedback =
      events
        .filter(function(event) {

          return event.event_type ===
            "feedback";

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
        feedback.map(function(item) {

          return `
            <article class="feedback-result">

              <div class="feedback-result-top">

                <strong>
                  ${escapeHTML(
                    item.mood ||
                    "No emotion selected"
                  )}
                </strong>

                <span>
                  ${escapeHTML(
                    item.helpful ||
                    "No answer"
                  )}
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

            </article>
          `;

        }).join("");

    }

  }

}


/* =========================================================
   18. ESCAPE HTML
   ========================================================= */

function escapeHTML(value) {

  return String(value ?? "")

    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");

}


/* =========================================================
   19. NAVIGATION
   ========================================================= */

function setupPageButtons() {

  document.addEventListener(
    "click",
    function(event) {

      const button =
        event.target.closest("[data-page]");

      if (!button) {
        return;
      }

      event.preventDefault();

      const page =
        button.dataset.page;

      if (!page) {
        return;
      }

      showPage(page);


      if (page === "insights") {

        displayInsights();

      }

    }
  );

}


/* =========================================================
   20. EMOTION CARDS
   ========================================================= */

function setupEmotionCards() {

  document.addEventListener(
    "click",
    function(event) {

      const card =
        event.target.closest(
          ".emotion-card"
        );

      if (!card) {
        return;
      }


      event.preventDefault();

      const emotion =
        card.dataset.emotion;


      if (!moodData[emotion]) {
        return;
      }


      currentEmotion = emotion;


      /* Analytics cannot stop emotion clicks */

      try {

        trackSoundSpaceEvent(
          "emotion_selected",
          emotion
        );

      } catch (error) {

        console.error(
          "Tracking error ignored:",
          error
        );

      }


      displayEmotion(emotion);

      showPage("emotion-page");

    }
  );

}


/* =========================================================
   21. FEEDBACK
   ========================================================= */

function setupFeedback() {

  const feedbackForm =
    document.getElementById(
      "feedback-form"
    );

  if (!feedbackForm) {
    return;
  }


  feedbackForm.addEventListener(
    "submit",
    async function(event) {

      event.preventDefault();


      const feedbackEmotion =
        document.getElementById(
          "feedback-emotion"
        );

      const calmerAnswer =
        document.querySelector(
          'input[name="calmer"]:checked'
        );

      const liked =
        document.getElementById("liked");

      const disliked =
        document.getElementById("disliked");

      const additional =
        document.getElementById(
          "additional-feedback"
        );


      const emotion =
        feedbackEmotion?.value ||
        currentEmotion ||
        "";


      const helpful =
        calmerAnswer?.value || "";


      const feedbackText = [
        liked?.value.trim() || "",
        disliked?.value.trim() || "",
        additional?.value.trim() || ""
      ]
        .filter(Boolean)
        .join("\n");


      const successMessage =
        document.getElementById(
          "feedback-success"
        );


      if (IS_DEVELOPER) {

        if (successMessage) {

          successMessage.textContent =
            "Developer mode is on. This test feedback was not saved.";

          successMessage.hidden = false;

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

              body: JSON.stringify({

                event_type: "feedback",

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

          throw new Error(
            "Feedback could not be saved"
          );

        }


        if (successMessage) {

          successMessage.textContent =
            "✨ Thank you! Your feedback has been saved.";

          successMessage.hidden = false;

        }


        feedbackForm.reset();

      } catch (error) {

        console.error(
          "Feedback error:",
          error
        );


        if (successMessage) {

          successMessage.textContent =
            "Your feedback could not be saved. Please try again.";

          successMessage.hidden = false;

        }

      }

    }
  );

}


/* =========================================================
   22. PLAYER BUTTONS
   ========================================================= */

function setupPlayerButtons() {

  const nextButton =
    document.getElementById(
      "next-button"
    );

  const reshuffleButton =
    document.getElementById(
      "reshuffle-button"
    );


  if (nextButton) {

    nextButton.addEventListener(
      "click",
      nextSong
    );

  }


  if (reshuffleButton) {

    reshuffleButton.addEventListener(
      "click",
      reshuffleSongs
    );

  }

}


/* =========================================================
   23. BACK BUTTONS
   ========================================================= */

function setupBackButtons() {

  const backHome =
    document.getElementById(
      "back-home"
    );

  const backToEmotion =
    document.getElementById(
      "back-to-emotion"
    );


  if (backHome) {

    backHome.addEventListener(
      "click",
      function() {

        showPage("home");

      }
    );

  }


  if (backToEmotion) {

    backToEmotion.addEventListener(
      "click",
      function() {

        if (currentEmotion) {

          displayEmotion(
            currentEmotion
          );

        }

        showPage("emotion-page");

      }
    );

  }

}


/* =========================================================
   24. START SOUNDSPACE
   ========================================================= */

document.addEventListener(
  "DOMContentLoaded",
  function() {

    console.log(
      "SoundSpace loaded successfully!"
    );


    /*
       Set up the website FIRST.
       Analytics cannot interfere with clicking.
    */

    setupPageButtons();

    setupEmotionCards();

    setupFeedback();

    setupPlayerButtons();

    setupBackButtons();


    /*
       Track the visit separately.
    */

    if (!IS_DEVELOPER) {

      try {

        trackSoundSpaceEvent(
          "page_view"
        );

      } catch (error) {

        console.error(
          "Page tracking error ignored:",
          error
        );

      }

    }

  }
);

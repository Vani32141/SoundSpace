# script.js

/* =========================================
   SOUNDSPACE — COMPLETE MULTI-PAGE SCRIPT
   ========================================= */


/* =========================================
   1. ALL 50 SONGS + WHY THEY FIT
   ========================================= */

const moodData = {

  happiness: {
    title: "😊 Happiness",
    description:
      "Keep the good feeling going with upbeat, energetic and positive music.",

    songs: [

      {
        title: "Happy",
        artist: "Pharrell Williams",
        why: "Its fast, upbeat rhythm, bright production and strongly positive message make it well suited to maintaining an already positive emotional state."
      },

      {
        title: "Can't Stop the Feeling!",
        artist: "Justin Timberlake",
        why: "The lively tempo, danceable rhythm and joyful lyrics create an energetic listening experience associated with positive and high-energy emotions."
      },

      {
        title: "Levitating",
        artist: "Dua Lipa",
        why: "Its disco-inspired beat, steady rhythm and energetic production give the song a playful and uplifting character."
      },

      {
        title: "Uptown Funk",
        artist: "Mark Ronson ft. Bruno Mars",
        why: "The strong funk groove, energetic tempo and confident delivery make it highly danceable and stimulating."
      },

      {
        title: "Good as Hell",
        artist: "Lizzo",
        why: "Its upbeat production and encouraging, self-affirming message support feelings of confidence and positivity."
      },

      {
        title: "Lush Life",
        artist: "Zara Larsson",
        why: "The bright pop production, energetic rhythm and carefree tone create a lively and enjoyable atmosphere."
      },

      {
        title: "APT.",
        artist: "ROSÉ & Bruno Mars",
        why: "Its catchy rhythm, playful structure and high-energy pop-rock production make it suitable for an energetic and upbeat mood."
      },

      {
        title: "Golden",
        artist: "HUNTR/X, EJAE, Audrey Nuna & REI AMI",
        why: "The energetic production and confident vocal delivery give the song a bold, uplifting and celebratory emotional direction."
      },

      {
        title: "Flowers",
        artist: "Miley Cyrus",
        why: "Its confident message of independence and its bright, steady pop production can reinforce feelings of empowerment and self-assurance."
      },

      {
        title: "Roar",
        artist: "Katy Perry",
        why: "The powerful build-up, energetic chorus and message of finding one's voice make it an uplifting and motivating song."
      }

    ]
  },


  sadness: {
    title: "😢 Sadness",
    description:
      "Find comfort, emotional connection and gentle warmth through reflective music.",

    songs: [

      {
        title: "Beautiful Things",
        artist: "Benson Boone",
        why: "Its emotional vocal delivery and themes of appreciating meaningful relationships create space for reflection and emotional connection."
      },

      {
        title: "Someone You Loved",
        artist: "Lewis Capaldi",
        why: "The slow pace, emotional vocals and lyrics about loss and longing can help listeners connect with and process feelings of sadness."
      },

      {
        title: "The Night We Met",
        artist: "Lord Huron",
        why: "Its slow, atmospheric sound and nostalgic lyrics create a reflective environment suited to quiet emotional processing."
      },

      {
        title: "When We Were Young",
        artist: "Adele",
        why: "Its nostalgic themes, expressive vocals and gradual musical build create a strong sense of reflection and emotional connection."
      },

      {
        title: "Iris",
        artist: "Goo Goo Dolls",
        why: "The emotional melody and vulnerable lyrics give the song an expressive quality that can resonate with feelings of longing and sadness."
      },

      {
        title: "Lovely",
        artist: "Billie Eilish & Khalid",
        why: "Its restrained production, darker atmosphere and emotionally vulnerable lyrics make it suitable for reflective listening."
      },

      {
        title: "What Was I Made For?",
        artist: "Billie Eilish",
        why: "Its soft arrangement and introspective lyrics encourage quiet reflection and emotional awareness."
      },

      {
        title: "Ocean Eyes",
        artist: "Billie Eilish",
        why: "The gentle production, slow pacing and dreamy atmosphere create a calm and introspective listening experience."
      },

      {
        title: "Die With A Smile",
        artist: "Lady Gaga & Bruno Mars",
        why: "Its emotional ballad structure and themes of love and appreciating important relationships encourage heartfelt reflection."
      },

      {
        title: "Back To Friends",
        artist: "sombr",
        why: "Its reflective relationship themes and emotional delivery make it suitable for listeners exploring feelings of loss, distance or longing."
      }

    ]
  },


  anger: {
    title: "😡 Anger",
    description:
      "Use powerful music as a structured way to release energy and shift your emotional direction.",

    songs: [

      {
        title: "Believer",
        artist: "Imagine Dragons",
        why: "Its intense percussion, powerful vocals and message of turning pain into strength provide an energetic outlet for strong emotions."
      },

      {
        title: "Stronger",
        artist: "Kelly Clarkson",
        why: "The powerful vocals and message of overcoming difficulty can help redirect frustration toward resilience and confidence."
      },

      {
        title: "Titanium",
        artist: "David Guetta ft. Sia",
        why: "Its strong electronic production and resilient message create an intense but empowering emotional experience."
      },

      {
        title: "Unstoppable",
        artist: "Sia",
        why: "The dramatic build and confident lyrics can help shift feelings of frustration toward determination and personal strength."
      },

      {
        title: "Roar",
        artist: "Katy Perry",
        why: "Its energetic chorus and message of standing up for oneself provide a more constructive direction for intense emotions."
      },

      {
        title: "Shake It Off",
        artist: "Taylor Swift",
        why: "Its upbeat rhythm and message of letting go of criticism can encourage emotional release and a shift away from irritation."
      },

      {
        title: "Flowers",
        artist: "Miley Cyrus",
        why: "Its confident and independent message can help redirect frustration toward self-reliance and emotional strength."
      },

      {
        title: "I Will Survive",
        artist: "Gloria Gaynor",
        why: "Its strong rhythm and message of overcoming hardship make it a classic example of transforming negative experiences into resilience."
      },

      {
        title: "Since U Been Gone",
        artist: "Kelly Clarkson",
        why: "Its high-energy pop-rock sound and themes of release provide an expressive outlet for intense feelings."
      },

      {
        title: "The Man",
        artist: "The Killers",
        why: "Its energetic rock sound and confident delivery provide a strong musical outlet that matches high-arousal emotional states."
      }

    ]
  },


  anxiety: {
    title: "😟 Anxiety",
    description:
      "Explore slower, familiar and emotionally gentle songs that may help create a calmer atmosphere.",

    songs: [

      {
        title: "A Thousand Years",
        artist: "Christina Perri",
        why: "Its slow tempo, flowing melody and gentle arrangement create a softer listening environment that may support relaxation."
      },

      {
        title: "Perfect",
        artist: "Ed Sheeran",
        why: "The smooth melody, moderate pace and familiar structure provide a gentle and emotionally warm listening experience."
      },

      {
        title: "Photograph",
        artist: "Ed Sheeran",
        why: "Its acoustic-led sound and reflective pacing create a quieter atmosphere suited to slowing down and focusing."
      },

      {
        title: "Yellow",
        artist: "Coldplay",
        why: "Its warm melodic structure and familiar, steady progression can create a comforting and emotionally reassuring atmosphere."
      },

      {
        title: "Ocean Eyes",
        artist: "Billie Eilish",
        why: "Its soft vocals, gentle production and spacious sound create a calm, dreamy listening environment."
      },

      {
        title: "Lovely",
        artist: "Billie Eilish & Khalid",
        why: "Its restrained instrumentation and slower pacing allow for reflective listening without an overly intense musical build."
      },

      {
        title: "Until I Found You",
        artist: "Stephen Sanchez",
        why: "Its nostalgic style, smooth vocals and slower rhythm create a gentle and familiar atmosphere."
      },

      {
        title: "Adore You",
        artist: "Harry Styles",
        why: "Its warm production, smooth melody and positive emotional tone can provide a comfortable and reassuring listening experience."
      },

      {
        title: "Sunflower",
        artist: "Post Malone & Swae Lee",
        why: "Its relaxed groove and melodic vocals give it an easy-going quality that may help create a less tense atmosphere."
      },

      {
        title: "What Was I Made For?",
        artist: "Billie Eilish",
        why: "Its quiet arrangement and slow pace encourage stillness and reflection, making it suitable for calm, low-stimulation listening."
      }

    ]
  },


  irritation: {
    title: "😤 Irritation",
    description:
      "Take a musical reset with lighter, warmer and more relaxed songs.",

    songs: [

      {
        title: "Sunday Best",
        artist: "Surfaces",
        why: "Its relaxed rhythm, bright production and optimistic tone create an easy-going atmosphere that can help support a mental reset."
      },

      {
        title: "Put Your Records On",
        artist: "Corinne Bailey Rae",
        why: "Its warm vocals, relaxed groove and encouraging tone create a gentle, comforting listening experience."
      },

      {
        title: "Lovely Day",
        artist: "Bill Withers",
        why: "The smooth groove and optimistic vocal delivery create a warm and positive atmosphere without overwhelming intensity."
      },

      {
        title: "Sunflower",
        artist: "Post Malone & Swae Lee",
        why: "Its laid-back rhythm and melodic flow give the song a relaxed quality that suits a low-pressure listening experience."
      },

      {
        title: "Adore You",
        artist: "Harry Styles",
        why: "Its warm production and smooth rhythm create a lighter emotional atmosphere that can help move attention away from frustration."
      },

      {
        title: "Best Part",
        artist: "Daniel Caesar ft. H.E.R.",
        why: "Its soft instrumentation, slow groove and gentle vocal delivery create a calm and intimate atmosphere."
      },

      {
        title: "Location",
        artist: "Khalid",
        why: "Its mellow production and unhurried rhythm make it suitable for relaxed listening and stepping away from overstimulation."
      },

      {
        title: "Golden Hour",
        artist: "JVKE",
        why: "Its warm piano-led melody and uplifting atmosphere create a soothing and pleasant emotional tone."
      },

      {
        title: "Sweet Creature",
        artist: "Harry Styles",
        why: "Its acoustic sound and gentle vocal delivery create a quiet and low-intensity listening experience."
      },

      {
        title: "So Easy (To Fall in Love)",
        artist: "Olivia Dean",
        why: "Its smooth vocals and light, warm production create an easy-going atmosphere suited to relaxing and resetting emotionally."
      }

    ]
  }

};


/* =========================================
   2. VISITOR TRACKING
   ========================================= */

function trackVisitor() {

  const alreadyVisited = localStorage.getItem(
    "soundspace-visitor"
  );

  if (!alreadyVisited) {

    const currentCount = Number(
      localStorage.getItem(
        "soundspace-visitor-count"
      ) || 0
    );

    localStorage.setItem(
      "soundspace-visitor-count",
      currentCount + 1
    );

    localStorage.setItem(
      "soundspace-visitor",
      "true"
    );

  }

}

trackVisitor();


/* =========================================
   3. EMOTION TRACKING
   ========================================= */

function trackEmotion(emotion) {

  const emotionData = JSON.parse(
    localStorage.getItem(
      "soundspace-emotion-data"
    ) || "{}"
  );

  emotionData[emotion] =
    (emotionData[emotion] || 0) + 1;

  localStorage.setItem(
    "soundspace-emotion-data",
    JSON.stringify(emotionData)
  );

}


/* =========================================
   4. HOME PAGE — EMOTION CLICKS
   ========================================= */

const emotionCards =
  document.querySelectorAll(".emotion-card");

emotionCards.forEach(function(card) {

  card.addEventListener("click", function() {

    const emotion = card.dataset.emotion;

    trackEmotion(emotion);

    localStorage.setItem(
      "soundspace-selected-emotion",
      emotion
    );

    window.location.href = "emotion.html";

  });

});


/* =========================================
   5. EMOTION PAGE — DISPLAY SONGS + WHY
   ========================================= */

const selectedEmotion =
  localStorage.getItem(
    "soundspace-selected-emotion"
  );

const emotionTitle =
  document.querySelector("#emotion-title");

const emotionDescription =
  document.querySelector("#emotion-description");

const songList =
  document.querySelector("#song-list");


if (
  selectedEmotion &&
  moodData[selectedEmotion] &&
  emotionTitle &&
  songList
) {

  const emotionData =
    moodData[selectedEmotion];

  emotionTitle.textContent =
    emotionData.title;

  if (emotionDescription) {

    emotionDescription.textContent =
      emotionData.description;

  }


  emotionData.songs.forEach(
    function(song, index) {

      const songCard =
        document.createElement("button");

      songCard.type = "button";

      songCard.className =
        "song-card";


      songCard.innerHTML = `

        <span class="song-number">
          ${index + 1}
        </span>

        <span class="song-details">

          <strong>
            ${song.title}
          </strong>

          <small>
            ${song.artist}
          </small>

          <span class="song-why">

            <b>Why this song fits:</b>

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

          localStorage.setItem(
            "soundspace-selected-song",
            JSON.stringify(song)
          );

          window.location.href =
            "player.html";

        }
      );


      songList.appendChild(songCard);

    }
  );

}


/* =========================================
   6. PLAYER PAGE
   ========================================= */

const selectedSong = JSON.parse(
  localStorage.getItem(
    "soundspace-selected-song"
  ) || "null"
);

const nowPlayingTitle =
  document.querySelector(
    "#now-playing-title"
  );

const nowPlayingArtist =
  document.querySelector(
    "#now-playing-artist"
  );

const nowPlayingWhy =
  document.querySelector(
    "#now-playing-why"
  );


if (selectedSong) {

  if (nowPlayingTitle) {
    nowPlayingTitle.textContent =
      selectedSong.title;
  }

  if (nowPlayingArtist) {
    nowPlayingArtist.textContent =
      selectedSong.artist;
  }

  if (nowPlayingWhy) {
    nowPlayingWhy.textContent =
      selectedSong.why ||
      "A song selected for your SoundSpace session.";
  }

}


/* =========================================
   7. SHUFFLE QUEUE
   ========================================= */

function shuffleSongs(array) {

  const shuffled = [...array];

  for (
    let i = shuffled.length - 1;
    i > 0;
    i--
  ) {

    const j = Math.floor(
      Math.random() * (i + 1)
    );

    [shuffled[i], shuffled[j]] =
      [shuffled[j], shuffled[i]];

  }

  return shuffled;

}


const shuffleButton =
  document.querySelector("#shuffle-button");

const queueList =
  document.querySelector("#queue-list");


if (
  shuffleButton &&
  selectedEmotion &&
  moodData[selectedEmotion]
) {

  shuffleButton.addEventListener(
    "click",
    function() {

      const shuffledSongs =
        shuffleSongs(
          moodData[selectedEmotion].songs
        );

      localStorage.setItem(
        "soundspace-shuffle-queue",
        JSON.stringify(shuffledSongs)
      );

      if (queueList) {

        queueList.innerHTML = "";

        shuffledSongs.forEach(
          function(song, index) {

            const queueItem =
              document.createElement("div");

            queueItem.className =
              "queue-item";

            queueItem.innerHTML = `

              <span>${index + 1}</span>

              <div>

                <strong>
                  ${song.title}
                </strong>

                <small>
                  ${song.artist}
                </small>

              </div>

            `;

            queueItem.addEventListener(
              "click",
              function() {

                localStorage.setItem(
                  "soundspace-selected-song",
                  JSON.stringify(song)
                );

                window.location.href =
                  "player.html";

              }
            );

            queueList.appendChild(
              queueItem
            );

          }
        );

      }

    }
  );

}


/* =========================================
   8. SURPRISE SONG
   ========================================= */

const surpriseButton =
  document.querySelector("#surprise-button");

if (
  surpriseButton &&
  selectedEmotion &&
  moodData[selectedEmotion]
) {

  surpriseButton.addEventListener(
    "click",
    function() {

      const songs =
        moodData[selectedEmotion].songs;

      const randomSong =
        songs[
          Math.floor(
            Math.random() * songs.length
          )
        ];

      localStorage.setItem(
        "soundspace-selected-song",
        JSON.stringify(randomSong)
      );

      window.location.href =
        "player.html";

    }
  );

}


/* =========================================
   9. FEEDBACK SYSTEM
   ========================================= */

const feedbackForm =
  document.querySelector("#feedback-form");

if (feedbackForm) {

  feedbackForm.addEventListener(
    "submit",
    function(event) {

      event.preventDefault();

      const selectedFeedbackEmotion =
        document.querySelector(
          "#feedback-emotion"
        );

      const calmerAnswer =
        document.querySelector(
          'input[name="calmer"]:checked'
        );

      const likedInput =
        document.querySelector("#liked");

      const dislikedInput =
        document.querySelector("#disliked");

      const additionalInput =
        document.querySelector(
          "#additional-feedback"
        );


      const feedbackEntry = {

        emotion:
          selectedFeedbackEmotion
            ? selectedFeedbackEmotion.value
            : "",

        feltCalmer:
          calmerAnswer
            ? calmerAnswer.value
            : "",

        liked:
          likedInput
            ? likedInput.value.trim()
            : "",

        disliked:
          dislikedInput
            ? dislikedInput.value.trim()
            : "",

        additionalFeedback:
          additionalInput
            ? additionalInput.value.trim()
            : "",

        date:
          new Date().toISOString()

      };


      const allFeedback = JSON.parse(
        localStorage.getItem(
          "soundspace-all-feedback"
        ) || "[]"
      );

      allFeedback.push(feedbackEntry);

      localStorage.setItem(
        "soundspace-all-feedback",
        JSON.stringify(allFeedback)
      );


      const successMessage =
        document.querySelector(
          "#feedback-success"
        );

      if (successMessage) {

        successMessage.textContent =
          "✨ Thank you! Your feedback has been saved.";

        successMessage.hidden = false;

      }

      feedbackForm.reset();

    }
  );

}


/* =========================================
   10. INSIGHTS
   ========================================= */

function getSoundSpaceInsights() {

  return {

    visitors: Number(
      localStorage.getItem(
        "soundspace-visitor-count"
      ) || 0
    ),

    emotions: JSON.parse(
      localStorage.getItem(
        "soundspace-emotion-data"
      ) || "{}"
    ),

    feedback: JSON.parse(
      localStorage.getItem(
        "soundspace-all-feedback"
      ) || "[]"
    )

  };

}


console.log(
  "SoundSpace loaded successfully!"
);

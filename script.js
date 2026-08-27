/* =========================================================
   SOUNDSPACE
   COMPLETE REPLACEMENT SCRIPT
   Keeps existing SoundSpace HTML + design
   ========================================================= */


/* =========================================================
   SUPABASE SETTINGS
   ========================================================= */

const SUPABASE_URL =
    "https://bjfmlknorxlztxkxlebd.supabase.co";

const SUPABASE_KEY =
    "sb_publishable_NDHWFaIHfs6IqvmbZiHrCg_0H2ZXZbU";


/* =========================================================
   DEVELOPER MODE
   ========================================================= */

const DEVELOPER_MODE_KEY =
    "soundspace_developer_mode";

const urlParams =
    new URLSearchParams(window.location.search);

if (urlParams.get("developer") === "on") {

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

if (urlParams.get("developer") === "off") {

    localStorage.removeItem(
        DEVELOPER_MODE_KEY
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
   SESSION
   ========================================================= */

let SOUNDSPACE_SESSION_ID =
    sessionStorage.getItem(
        "soundspace_session_id"
    );

if (!SOUNDSPACE_SESSION_ID) {

    SOUNDSPACE_SESSION_ID =
        "ss_" +
        Date.now() +
        "_" +
        Math.random()
            .toString(36)
            .substring(2, 10);

    sessionStorage.setItem(
        "soundspace_session_id",
        SOUNDSPACE_SESSION_ID
    );
}


/* =========================================================
   ANALYTICS
   ========================================================= */

async function trackSoundSpaceEvent(
    eventType,
    mood = null,
    song = null,
    helpful = null,
    feedbackText = null
) {

    if (IS_DEVELOPER) {

        console.log(
            "[Developer Mode] Analytics:",
            eventType,
            mood,
            song
        );

        return false;
    }


    try {

        const payload = {
            event_type: eventType,
            session_id: SOUNDSPACE_SESSION_ID,
            page: window.location.pathname || "/",
            mood: mood,
            song: song,
            helpful: helpful,
            feedback_text: feedbackText
        };


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
                        JSON.stringify(payload)
                }
            );


        if (!response.ok) {

            const errorText =
                await response.text();

            console.error(
                "SoundSpace analytics error:",
                response.status,
                errorText
            );

            return false;
        }


        return true;

    } catch (error) {

        console.error(
            "SoundSpace analytics connection failed:",
            error
        );

        return false;
    }
}


/* =========================================================
   SONG DATA
   ========================================================= */

const moodData = {

    happiness: {

        title: "Happiness",

        emoji: "😊",

        description:
            "Keep the good feeling going with upbeat, energetic and positive music.",

        songs: [

            {
                title: "Happy",
                artist: "Pharrell Williams",
                why:
                    "Sometimes you are already having a good day and just need a song that matches your energy. Its bright beat and simple, joyful sound make it easy to smile, move around and stay in that positive moment."
            },

            {
                title: "Can't Stop the Feeling!",
                artist: "Justin Timberlake",
                why:
                    "This is the kind of song that can make you want to get up and move without even thinking about it. Its bouncy rhythm and playful energy help keep a happy moment feeling lively."
            },

            {
                title: "Levitating",
                artist: "Dua Lipa",
                why:
                    "Its smooth disco-inspired beat feels light, fun and energetic. It works well when you want music that makes an ordinary moment feel a little more exciting."
            },

            {
                title: "Uptown Funk",
                artist: "Mark Ronson ft. Bruno Mars",
                why:
                    "The strong beat and confident energy make this song feel like a celebration. It is great for moments when you want to feel bold, playful and completely in the mood to have fun."
            },

            {
                title: "Good as Hell",
                artist: "Lizzo",
                why:
                    "When you need a reminder to feel good about yourself, this song brings confident and positive energy. It feels like putting yourself first and enjoying the moment without overthinking everything."
            },

            {
                title: "Lush Life",
                artist: "Zara Larsson",
                why:
                    "Its bright pop sound and carefree feeling make it easy to listen to when you just want to relax and enjoy yourself. It has the kind of energy that can make a simple day feel more fun."
            },

            {
                title: "APT.",
                artist: "ROSÉ & Bruno Mars",
                why:
                    "The catchy rhythm gives this song an instantly playful feeling. It works well when you are in a good mood and want something energetic enough to keep that excitement going."
            },

            {
                title: "Golden",
                artist: "HUNTR/X, EJAE, Audrey Nuna & REI AMI",
                why:
                    "Its energetic sound and confident delivery make it feel exciting and powerful. This is the kind of song for when you want to feel like you can walk into a room with your head held high."
            },

            {
                title: "Flowers",
                artist: "Miley Cyrus",
                why:
                    "This song has a confident, independent feeling that can make you appreciate yourself a little more. It fits moments when happiness comes from realizing that you can enjoy your own company too."
            },

            {
                title: "Roar",
                artist: "Katy Perry",
                why:
                    "Its big chorus and encouraging message make it feel like a confidence boost. It is perfect for those moments when you are feeling strong and want a song that matches that energy."
            },

            {
                title: "Walking on a Dream",
                artist: "Empire of the Sun",
                why:
                    "The dreamy production gives the song a feeling of freedom and possibility. It fits those moments when life feels exciting and you just want to enjoy where you are."
            },

            {
                title: "Tongue Tied",
                artist: "Grouplove",
                why:
                    "Its fast, colourful energy feels spontaneous and carefree. It sounds like the kind of song you would play during a fun memory with friends."
            },

            {
                title: "Electric Love",
                artist: "BØRNS",
                why:
                    "The bright production and soaring melody give the song an exciting, almost magical feeling. It works when you want your playlist to feel lively and full of energy."
            },

            {
                title: "Young Folks",
                artist: "Peter Bjorn and John",
                why:
                    "Its distinctive whistle and simple rhythm make the song feel playful and memorable. It has an easy-going happiness that does not feel forced."
            },

            {
                title: "Anna Sun",
                artist: "Walk the Moon",
                why:
                    "This song feels youthful, energetic and full of movement. It fits moments when you are enjoying life and do not want the good mood to end yet."
            },

            {
                title: "Good Time",
                artist: "Owl City & Carly Rae Jepsen",
                why:
                    "The song is built around the feeling of simply having fun. It is easy to put on when you are with people you enjoy being around or when you want to make your own day feel more cheerful."
            },

            {
                title: "Sweet Disposition",
                artist: "The Temper Trap",
                why:
                    "Its uplifting build creates a feeling of openness and freedom. It works beautifully when you are happy but also want something that feels a little bigger and more emotional."
            },

            {
                title: "Dog Days Are Over",
                artist: "Florence + The Machine",
                why:
                    "The growing energy makes the song feel like letting go and moving forward. It fits moments when something good has finally happened and you want to celebrate that feeling."
            },

            {
                title: "Riptide",
                artist: "Vance Joy",
                why:
                    "Its relaxed rhythm and catchy melody give it a warm, carefree personality. It is the kind of song that works for a calm kind of happiness."
            },

            {
                title: "Shut Up and Dance",
                artist: "Walk the Moon",
                why:
                    "Sometimes happiness does not need to be complicated—you just want to move. The fast beat and energetic chorus make this a great song for letting yourself have fun."
            },

            {
                title: "Home",
                artist: "Edward Sharpe & The Magnetic Zeros",
                why:
                    "The warm, communal feeling of this song can make happiness feel connected and comfortable. It fits moments when being around people you care about is part of what makes you feel good."
            },

            {
                title: "On Top of the World",
                artist: "Imagine Dragons",
                why:
                    "Its upbeat rhythm and optimistic sound match the feeling of accomplishing something or simply having a really good day. It feels like celebrating a small or big win."
            },

            {
                title: "Send Me On My Way",
                artist: "Rusted Root",
                why:
                    "The playful rhythm gives this song a sense of adventure. It works when you feel curious, free and ready to see where the day takes you."
            },

            {
                title: "This Must Be the Place",
                artist: "Talking Heads",
                why:
                    "Its warm, relaxed sound creates a quieter kind of happiness. It is for those peaceful moments when nothing dramatic is happening, but you still feel content."
            },

            {
                title: "Island in the Sun",
                artist: "Weezer",
                why:
                    "The laid-back melody makes the song feel like taking a break from everything. It fits a calm, sunny mood when you just want to breathe and enjoy the moment."
            }

        ]
    },


    sadness: {

        title: "Sadness",

        emoji: "😢",

        description:
            "Find comfort, emotional connection and gentle warmth through reflective music.",

        songs: [

            {
                title: "Beautiful Things",
                artist: "Benson Boone",
                why:
                    "This song can fit those moments when you care deeply about something or someone and are afraid of losing it. Its emotional intensity makes it easy to sit with complicated feelings instead of pretending everything is fine."
            },

            {
                title: "Someone You Loved",
                artist: "Lewis Capaldi",
                why:
                    "It fits when you are trying to adjust to life without someone or something you depended on. The song captures that empty feeling of wishing you could go back to when things felt familiar."
            },

            {
                title: "The Night We Met",
                artist: "Lord Huron",
                why:
                    "This song feels like looking back at a memory and wondering how things could have turned out differently. It can connect with moments when you miss a person, a friendship or even an earlier version of your life."
            },

            {
                title: "When We Were Young",
                artist: "Adele",
                why:
                    "It fits those moments when seeing someone or remembering something suddenly brings back feelings you thought were gone. The song has that bittersweet feeling of missing the past while knowing you cannot completely return to it."
            },

            {
                title: "Iris",
                artist: "Goo Goo Dolls",
                why:
                    "This song can connect with the feeling of wanting someone to truly understand what is happening inside your head. It works for moments when you feel emotionally distant from people, even when they are physically close."
            },

            {
                title: "Lovely",
                artist: "Billie Eilish & Khalid",
                why:
                    "It fits when you feel stuck in a difficult mood and wish you could simply step away from everything for a while. The quiet, heavy atmosphere makes it feel like the song understands those moments when words are hard to find."
            },

            {
                title: "What Was I Made For?",
                artist: "Billie Eilish",
                why:
                    "This song can fit moments when you are questioning yourself, your direction or where you belong. Its gentle sound gives you space to slow down and reflect without needing to have every answer immediately."
            },

            {
                title: "Ocean Eyes",
                artist: "Billie Eilish",
                why:
                    "It works well for quieter, more emotional moments when your mind keeps returning to a particular person or memory. The dreamy sound can feel comforting when you just want to sit with your feelings for a while."
            },

            {
                title: "Die With A Smile",
                artist: "Lady Gaga & Bruno Mars",
                why:
                    "This song can make you think about the people who matter most to you and how much their presence means. It fits emotional moments when you realise that relationships and memories can feel more important than everything else going on."
            },

            {
                title: "Back To Friends",
                artist: "sombr",
                why:
                    "It fits the awkward and painful feeling of trying to act normal with someone when your relationship with them has changed. Sometimes you miss what you had but know that going back is not as simple as you wish it were."
            },

            {
                title: "Liability",
                artist: "Lorde",
                why:
                    "This song can connect with moments when you feel like you are too much for other people or worry that they do not fully understand you. It creates space for those insecurities without making you feel like you have to hide them."
            },

            {
                title: "Scott Street",
                artist: "Phoebe Bridgers",
                why:
                    "It fits that strange feeling of running into someone from your past and realising that life has moved on, even though some memories still stay with you. The song feels like quietly thinking about people you no longer know in the same way."
            },

            {
                title: "Moon Song",
                artist: "Phoebe Bridgers",
                why:
                    "This song can fit when you care deeply about someone, even when the relationship leaves you feeling hurt or uncertain. It captures the complicated feeling of loving someone while also wondering whether the situation is good for you."
            },

            {
                title: "Fourth of July",
                artist: "Sufjan Stevens",
                why:
                    "Its quiet and emotional atmosphere fits moments when you are thinking deeply about someone, a relationship or a memory that feels especially important. It is the kind of song for when you need something gentle while processing heavy emotions."
            },

            {
                title: "I Know the End",
                artist: "Phoebe Bridgers",
                why:
                    "This song fits when your emotions feel like they have been building up for a long time and you finally need a release. It starts reflectively but grows more intense, which can feel relatable when a small problem turns into a lot of emotions at once."
            },

            {
                title: "Motion Sickness",
                artist: "Phoebe Bridgers",
                why:
                    "It can fit when you are frustrated or hurt by someone but are slowly beginning to see the situation more clearly. The song gives the feeling of moving forward while still carrying some of the emotions from what happened."
            },

            {
                title: "Lua",
                artist: "Bright Eyes",
                why:
                    "This song has a quiet, distant feeling that fits nights when everything feels a little lonely or emotionally exhausting. It can work when you do not necessarily want to fix your mood immediately and just want music that matches it."
            },

            {
                title: "The Only Thing",
                artist: "Sufjan Stevens",
                why:
                    "It fits deeply reflective moments when your thoughts feel complicated and you are trying to understand yourself. The song creates space to pause and think rather than forcing you into a happier mood."
            },

            {
                title: "Youth",
                artist: "Daughter",
                why:
                    "This song can connect with the feeling of growing up and realising that some experiences change you. It fits moments when you are thinking about mistakes, memories or situations that made you see life differently."
            },

            {
                title: "Smother",
                artist: "Daughter",
                why:
                    "It works for moments when emotions feel difficult to explain and you would rather sit quietly with them. The soft, restrained sound can feel comforting when you are emotionally overwhelmed but do not want something loud."
            },

            {
                title: "Funeral",
                artist: "Phoebe Bridgers",
                why:
                    "This song fits moments when you are surrounded by people but still feel disconnected inside. Its reflective mood can make you feel less alone when you are trying to understand emotions that do not have one simple explanation."
            },

            {
                title: "No Surprises",
                artist: "Radiohead",
                why:
                    "It can fit when life feels repetitive or emotionally tiring and you just want a moment of peace and quiet. The gentle melody creates a calm contrast to the heavier feelings underneath."
            },

            {
                title: "To Build a Home",
                artist: "The Cinematic Orchestra ft. Patrick Watson",
                why:
                    "This song can connect with memories of people, places or moments that once felt like home. It fits when you are looking back at something meaningful and feeling both grateful for it and sad that things have changed."
            },

            {
                title: "Holocene",
                artist: "Bon Iver",
                why:
                    "It fits quiet moments when you are stepping back and thinking about your life from a bigger perspective. The song can feel comforting when you realise that you do not have to understand everything about yourself or your future right now."
            },

            {
                title: "Re: Stacks",
                artist: "Bon Iver",
                why:
                    "This song works for slow, private moments when you are processing change or trying to let go of something. Its gentle atmosphere can make it easier to simply sit with your thoughts without rushing yourself to feel better."
            }

        ]
    },


    anger: {

        title: "Anger",

        emoji: "😡",

        description:
            "Use powerful music as a structured way to release energy and shift your emotional direction.",

        songs: [

            {
                title: "Believer",
                artist: "Imagine Dragons",
                why:
                    "This fits when you are frustrated but do not want to just sit quietly with all that energy. The powerful beat can feel like turning pressure and frustration into determination."
            },

            {
                title: "Stronger",
                artist: "Kelly Clarkson",
                why:
                    "It fits after something has hurt or annoyed you and you want to remind yourself that the situation does not get to define you."
            },

            {
                title: "Titanium",
                artist: "David Guetta ft. Sia",
                why:
                    "This song can feel powerful when criticism, pressure or someone's words have gotten under your skin. Its message creates a feeling of becoming harder to shake."
            },

            {
                title: "Unstoppable",
                artist: "Sia",
                why:
                    "It fits when you are tired of feeling underestimated and want music that helps you channel that frustration into confidence."
            },

            {
                title: "Roar",
                artist: "Katy Perry",
                why:
                    "This works when you feel like you have been silent for too long and want to feel more confident about speaking up."
            },

            {
                title: "Shake It Off",
                artist: "Taylor Swift",
                why:
                    "It fits when someone or something has been bothering you and you need a reminder that not every opinion deserves space in your head."
            },

            {
                title: "Flowers",
                artist: "Miley Cyrus",
                why:
                    "This song can fit when disappointment is slowly turning into independence and you begin to realise that you can still move forward."
            },

            {
                title: "I Will Survive",
                artist: "Gloria Gaynor",
                why:
                    "It fits when you have gone through something difficult and want to replace the feeling of being defeated with the feeling that you can handle what comes next."
            },

            {
                title: "Since U Been Gone",
                artist: "Kelly Clarkson",
                why:
                    "The loud, energetic release can fit when you have been holding in frustration and just need music that matches the intensity of how you feel."
            },

            {
                title: "The Man",
                artist: "The Killers",
                why:
                    "Its energetic sound fits moments when you are feeling fired up and need something with enough intensity to match your mood."
            },

            {
                title: "Misery Business",
                artist: "Paramore",
                why:
                    "This song can fit when you are irritated and want something fast and energetic that lets you mentally release some of that tension."
            },

            {
                title: "You Oughta Know",
                artist: "Alanis Morissette",
                why:
                    "It fits moments when you are upset with someone and keep replaying what happened in your head. The strong emotion can make the song feel like a place to let those thoughts out."
            },

            {
                title: "Barracuda",
                artist: "Heart",
                why:
                    "The driving guitars and powerful vocals work well when you need something intense enough to match a high-energy mood."
            },

            {
                title: "Take Me Out",
                artist: "Franz Ferdinand",
                why:
                    "Its sharp rhythm and sudden bursts of energy can fit when you feel restless and need music that gives your attention somewhere to go."
            },

            {
                title: "The Pretender",
                artist: "Foo Fighters",
                why:
                    "This song can fit when you are frustrated with someone being dishonest or pretending to be something they are not."
            },

            {
                title: "Killing in the Name",
                artist: "Rage Against the Machine",
                why:
                    "Its intense energy can fit when you are feeling strongly resistant or frustrated and want music that reflects that level of emotion."
            },

            {
                title: "Heads Will Roll",
                artist: "Yeah Yeah Yeahs",
                why:
                    "The strong beat can help redirect restless energy into movement, making it useful when you feel like you need to get some tension out."
            },

            {
                title: "Dog Days Are Over",
                artist: "Florence + The Machine",
                why:
                    "It fits when you are ready to leave a frustrating period behind and want music that feels like finally moving forward."
            },

            {
                title: "Hard Times",
                artist: "Paramore",
                why:
                    "This can fit when you are annoyed by everything going wrong but can also recognise how absurd the situation has become."
            },

            {
                title: "Brutal",
                artist: "Olivia Rodrigo",
                why:
                    "It fits those moments when you are simply fed up and everything feels more irritating than it normally would."
            },

            {
                title: "Good 4 U",
                artist: "Olivia Rodrigo",
                why:
                    "The fast pace and strong emotion can fit when you are upset with someone but are also trying to move past what happened."
            },

            {
                title: "Survivor",
                artist: "Destiny's Child",
                why:
                    "It can help shift anger into resilience when you want to stop focusing on what hurt you and start focusing on getting through it."
            },

            {
                title: "Confident",
                artist: "Demi Lovato",
                why:
                    "This fits when frustration comes from feeling underestimated and you want music that reminds you to take up space and believe in yourself."
            },

            {
                title: "Therefore I Am",
                artist: "Billie Eilish",
                why:
                    "It works when you are tired of worrying about what other people think and want to mentally separate yourself from their opinions."
            },

            {
                title: "Army of Me",
                artist: "Björk",
                why:
                    "Its unusual, forceful energy can fit when you need something bold and intense rather than calm or comforting."
            }

        ]
    },


    anxiety: {

        title: "Anxiety",

        emoji: "😟",

        description:
            "Explore slower, familiar and emotionally gentle songs that may help create a calmer atmosphere.",

        songs: [

            {
                title: "A Thousand Years",
                artist: "Christina Perri",
                why:
                    "Its slow pace can fit moments when everything around you feels rushed and you just want something that encourages you to slow down for a while."
            },

            {
                title: "Perfect",
                artist: "Ed Sheeran",
                why:
                    "The smooth melody can create a warm and familiar atmosphere when you want something gentle instead of more noise."
            },

            {
                title: "Photograph",
                artist: "Ed Sheeran",
                why:
                    "This song can fit when your mind is busy and you want to focus on something softer, slower and more reflective."
            },

            {
                title: "Yellow",
                artist: "Coldplay",
                why:
                    "Its warm sound can feel reassuring when you are overwhelmed and want music that feels emotionally familiar."
            },

            {
                title: "Ocean Eyes",
                artist: "Billie Eilish",
                why:
                    "The dreamy atmosphere fits quiet moments when you want to step back from everything and give your mind something gentle to focus on."
            },

            {
                title: "Lovely",
                artist: "Billie Eilish & Khalid",
                why:
                    "It can fit when you are struggling to explain how you feel. Sometimes having a song that reflects a difficult mood can feel less lonely."
            },

            {
                title: "Until I Found You",
                artist: "Stephen Sanchez",
                why:
                    "Its slower style and nostalgic sound can create a softer atmosphere when your thoughts feel too fast."
            },

            {
                title: "Adore You",
                artist: "Harry Styles",
                why:
                    "The warm production and steady rhythm make it easy to listen to when you want something light without being overly intense."
            },

            {
                title: "Sunflower",
                artist: "Post Malone & Swae Lee",
                why:
                    "Its relaxed rhythm can work when you want music that feels easy-going and does not demand too much attention."
            },

            {
                title: "What Was I Made For?",
                artist: "Billie Eilish",
                why:
                    "This can fit moments when you are questioning a lot of things and need permission to pause rather than immediately figure everything out."
            },

            {
                title: "Bloom",
                artist: "The Paper Kites",
                why:
                    "Its gentle sound can feel like taking a quiet break from a busy day when you just need something soft in the background."
            },

            {
                title: "Anchor",
                artist: "Novo Amor",
                why:
                    "The calm atmosphere makes it suitable for moments when you want to slow down and give yourself space to breathe and think."
            },

            {
                title: "Mystery of Love",
                artist: "Sufjan Stevens",
                why:
                    "Its delicate sound works well when you are emotionally overwhelmed and want something gentle rather than dramatic."
            },

            {
                title: "Cherry Wine",
                artist: "Hozier",
                why:
                    "The soft acoustic sound can create a quieter listening space when your surroundings or thoughts feel too intense."
            },

            {
                title: "The Night We Met",
                artist: "Lord Huron",
                why:
                    "Its slow, atmospheric sound can help create a reflective pause when your mind keeps jumping from one thought to another."
            },

            {
                title: "Fallingforyou",
                artist: "The 1975",
                why:
                    "The dreamy production can feel like stepping into a quieter space when you need a break from the intensity of the moment."
            },

            {
                title: "My Love Mine All Mine",
                artist: "Mitski",
                why:
                    "Its gentle melody can work when you want something emotional but still soft enough to listen to without adding more intensity."
            },

            {
                title: "Pink + White",
                artist: "Frank Ocean",
                why:
                    "The relaxed production creates an easy-going atmosphere that can feel comforting during a mentally busy day."
            },

            {
                title: "Space Song",
                artist: "Beach House",
                why:
                    "Its dreamy sound can give your attention somewhere else to rest when your thoughts feel like they are moving too quickly."
            },

            {
                title: "Apocalypse",
                artist: "Cigarettes After Sex",
                why:
                    "The slow, atmospheric production fits moments when you want to reduce stimulation and listen to something calm and steady."
            },

            {
                title: "Nothing's Gonna Hurt You Baby",
                artist: "Cigarettes After Sex",
                why:
                    "Its soft and repetitive atmosphere can feel reassuring when you want music that stays gentle and predictable."
            },

            {
                title: "K.",
                artist: "Cigarettes After Sex",
                why:
                    "This works for quiet moments when you want something soft enough to sit in the background while you collect your thoughts."
            },

            {
                title: "Mystery",
                artist: "Turnover",
                why:
                    "Its mellow sound can help create a slower atmosphere when you feel mentally overstimulated."
            },

            {
                title: "Heavenly",
                artist: "Cigarettes After Sex",
                why:
                    "The gentle pace and soft sound make it suitable for moments when you want to settle into something calm and familiar."
            },

            {
                title: "First Love / Late Spring",
                artist: "Mitski",
                why:
                    "It can fit complicated emotional moments when you need music that understands intensity without necessarily being loud or overwhelming."
            }

        ]
    },


    irritation: {

        title: "Irritation",

        emoji: "😤",

        description:
            "Take a musical reset with lighter, warmer and more relaxed songs.",

        songs: [

            {
                title: "Sunday Best",
                artist: "Surfaces",
                why:
                    "This fits when your day has been annoying and you need something light enough to help you mentally reset."
            },

            {
                title: "Put Your Records On",
                artist: "Corinne Bailey Rae",
                why:
                    "Its relaxed feeling can remind you to step back from whatever is bothering you and give yourself a moment."
            },

            {
                title: "Lovely Day",
                artist: "Bill Withers",
                why:
                    "This song can provide a simple change of atmosphere when small problems have started to affect your whole mood."
            },

            {
                title: "Sunflower",
                artist: "Post Malone & Swae Lee",
                why:
                    "The easy-going rhythm works when you are irritated but do not want music that makes you even more worked up."
            },

            {
                title: "Adore You",
                artist: "Harry Styles",
                why:
                    "Its warm, upbeat sound can help shift the atmosphere when you are ready to move away from an annoying situation."
            },

            {
                title: "Best Part",
                artist: "Daniel Caesar ft. H.E.R.",
                why:
                    "The soft and relaxed sound fits when you want to lower the intensity of your surroundings and simply take a breather."
            },

            {
                title: "Location",
                artist: "Khalid",
                why:
                    "Its mellow production can fit moments when you need something uncomplicated and easy to listen to."
            },

            {
                title: "Golden Hour",
                artist: "JVKE",
                why:
                    "The warm melody can feel like a small mental escape when your day has been full of little things getting on your nerves."
            },

            {
                title: "Sweet Creature",
                artist: "Harry Styles",
                why:
                    "Its gentle acoustic sound can help create a quieter atmosphere when you need a break from noise and irritation."
            },

            {
                title: "So Easy (To Fall in Love)",
                artist: "Olivia Dean",
                why:
                    "Its smooth, easy-going feeling can help you move from being annoyed toward a lighter mood."
            },

            {
                title: "Electric Feel",
                artist: "MGMT",
                why:
                    "The steady groove can give your mind something enjoyable to focus on when you need a distraction from whatever is irritating you."
            },

            {
                title: "Walking on a Dream",
                artist: "Empire of the Sun",
                why:
                    "Its bright, floating sound can make a frustrating moment feel a little less serious and help create a mental change of scenery."
            },

            {
                title: "Young Folks",
                artist: "Peter Bjorn and John",
                why:
                    "The playful rhythm works well when you need something simple and catchy to interrupt an annoyed train of thought."
            },

            {
                title: "Tadow",
                artist: "Masego & FKJ",
                why:
                    "Its smooth groove is useful when you want music that feels relaxed but still interesting enough to hold your attention."
            },

            {
                title: "Them Changes",
                artist: "Thundercat",
                why:
                    "The relaxed groove can help shift your focus when you are stuck thinking about something frustrating."
            },

            {
                title: "Coffee",
                artist: "beabadoobee",
                why:
                    "Its soft sound fits small, quiet moments when you just want to step away from everything that has been bothering you."
            },

            {
                title: "Warm on a Cold Night",
                artist: "HONNE",
                why:
                    "The smooth production creates a comfortable atmosphere when you want your environment to feel calmer and less tense."
            },

            {
                title: "Show Me How",
                artist: "Men I Trust",
                why:
                    "Its slow, gentle sound can help when irritation is coming from feeling overstimulated and you want something much quieter."
            },

            {
                title: "Loving Is Easy",
                artist: "Rex Orange County ft. Benny Sings",
                why:
                    "Its playful sound can help interrupt a bad mood by giving you something lighter and more cheerful to listen to."
            },

            {
                title: "Dancing in the Moonlight",
                artist: "Toploader",
                why:
                    "The bright rhythm can help you mentally step away from a frustrating moment and focus on something more positive."
            },

            {
                title: "Sweet Disposition",
                artist: "The Temper Trap",
                why:
                    "Its uplifting atmosphere can make it easier to let go of small frustrations that have been building throughout the day."
            },

            {
                title: "Island in the Sun",
                artist: "Weezer",
                why:
                    "This song feels like taking a short mental break from everything that is bothering you."
            },

            {
                title: "Breezeblocks",
                artist: "alt-J",
                why:
                    "Its unusual rhythm can grab your attention and pull your mind away from the repetitive thoughts causing your irritation."
            },

            {
                title: "Goodie Bag",
                artist: "Still Woozy",
                why:
                    "The relaxed, playful production can help lighten the mood when you are annoyed but ready to move on."
            },

            {
                title: "Lover Is a Day",
                artist: "Cuco",
                why:
                    "Its dreamy sound creates a softer space when you want to disconnect from a frustrating situation for a while."
            }

        ]
    }

};


/* =========================================================
   APP STATE
   ========================================================= */

let currentEmotion = "";
let currentSongIndex = -1;

let originalSongs = [];
let queueSongs = [];

let isShuffleOn = false;

let selectedFit = "";
let selectedHelpful = "";

let soundSpaceInitialized = false;


/* =========================================================
   PAGE HELPERS
   ========================================================= */

function getPage(id) {

    return document.getElementById(id);

}


/* =========================================================
   SHOW PAGE
   ========================================================= */

function showPage(pageName) {

    const pageIds = [

        "home-page",
        "emotion-page",
        "why-page",
        "about-page",
        "feedback-page",
        "insights-page"

    ];


    pageIds.forEach(
        id => {

            const page =
                document.getElementById(id);


            if (page) {

                page.style.display =
                    "none";

            }

        }
    );


    const pageMap = {

        home: "home-page",
        emotion: "emotion-page",
        why: "why-page",
        about: "about-page",
        feedback: "feedback-page",
        insights: "insights-page"

    };


    const selectedPage =
        document.getElementById(
            pageMap[pageName]
        );


    if (selectedPage) {

        selectedPage.style.display =
            "block";

    }


    document
        .querySelectorAll(".nav-btn")
        .forEach(
            button => {

                button.classList.remove(
                    "active"
                );

            }
        );


    const navButton =
        document.getElementById(
            `${pageName}-nav`
        );


    if (navButton) {

        navButton.classList.add(
            "active"
        );

    }


    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}


/* =========================================================
   NAVIGATION
   ========================================================= */

function showHomePage() {

    showPage("home");

}


function showWhyPage() {

    showPage("why");

}


function showAboutPage() {

    showPage("about");

}


function showFeedbackPage() {

    showPage("feedback");

}


async function showInsightsPage() {

    showPage("insights");

    await displayInsights();

}


/* =========================================================
   QUEUE RESET
   ========================================================= */

function resetQueue(emotion) {

    if (!moodData[emotion]) {

        return;

    }


    currentEmotion =
        emotion;


    originalSongs =
        moodData[emotion].songs.map(
            song => ({
                ...song
            })
        );


    queueSongs =
        moodData[emotion].songs.map(
            song => ({
                ...song
            })
        );


    currentSongIndex =
        -1;


    isShuffleOn =
        false;


    updateQueueButton();

}


/* =========================================================
   DISPLAY EMOTION
   ========================================================= */

function displayEmotion(emotion) {

    const data =
        moodData[emotion];


    if (!data) {

        return;

    }


    resetQueue(
        emotion
    );


    const icon =
        document.getElementById(
            "selected-emotion-icon"
        );


    const title =
        document.getElementById(
            "selected-emotion-title"
        );


    const description =
        document.getElementById(
            "selected-emotion-description"
        );


    const player =
        document.getElementById(
            "player-section"
        );


    if (icon) {

        icon.textContent =
            data.emoji;

    }


    if (title) {

        title.textContent =
            data.title;

    }


    if (description) {

        description.textContent =
            data.description;

    }


    if (player) {

        player.style.display =
            "none";

    }


    displaySongs();

    showPage("emotion");

}


/* =========================================================
   ESCAPE HTML
   ========================================================= */

function escapeHTML(value) {

    return String(value ?? "")
        .replace(
            /&/g,
            "&amp;"
        )
        .replace(
            /</g,
            "&lt;"
        )
        .replace(
            />/g,
            "&gt;"
        )
        .replace(
            /"/g,
            "&quot;"
        )
        .replace(
            /'/g,
            "&#039;"
        );

}


/* =========================================================
   DISPLAY SONGS
   ========================================================= */

function displaySongs() {

    const songList =
        document.getElementById(
            "song-list"
        );


    if (!songList) {

        return;

    }


    songList.innerHTML =
        "";


    queueSongs.forEach(
        (song, index) => {

            const card =
                document.createElement(
                    "div"
                );


            card.className =
                "song-card";


            card.innerHTML = `

                <div class="song-number">
                    ${String(index + 1).padStart(2, "0")}
                </div>

                <div class="song-details">

                    <strong>
                        ${escapeHTML(song.title)}
                    </strong>

                    <small>
                        ${escapeHTML(song.artist)}
                    </small>

                    <p class="song-why">
                        <b>✨ Why this song fits:</b>
                        ${escapeHTML(song.why)}
                    </p>

                </div>

                <button
                    type="button"
                    class="listen-song-button"
                >
                    Listen
                </button>

            `;


            const listenButton =
                card.querySelector(
                    ".listen-song-button"
                );


            if (listenButton) {

                listenButton.addEventListener(
                    "click",
                    function(event) {

                        event.stopPropagation();


                        currentSongIndex =
                            index;


                        playCurrentSong();

                    }
                );

            }


            card.addEventListener(
                "click",
                function() {

                    currentSongIndex =
                        index;


                    playCurrentSong();

                }
            );


            songList.appendChild(
                card
            );

        }
    );


    highlightCurrentSong();

}


/* =========================================================
   HIGHLIGHT CURRENT SONG
   ========================================================= */

function highlightCurrentSong() {

    const cards =
        document.querySelectorAll(
            ".song-card"
        );


    cards.forEach(
        (card, index) => {

            card.classList.toggle(
                "current-song",
                index === currentSongIndex
            );

        }
    );

}


/* =========================================================
   SPOTIFY SEARCH
   ========================================================= */

function createSpotifySearchURL(song) {

    const searchQuery =
        encodeURIComponent(
            `${song.title} ${song.artist}`
        );


    return (
        "https://open.spotify.com/search/" +
        searchQuery
    );

}


/* =========================================================
   SPOTIFY EMBED URL
   ========================================================= */

function createSpotifyEmbedURL(song) {

    const searchQuery =
        encodeURIComponent(
            `${song.title} ${song.artist}`
        );


    return (
        "https://open.spotify.com/embed/search/" +
        searchQuery
    );

}


/* =========================================================
   UPDATE PLAYER
   ========================================================= */

function updatePlayer(song) {

    if (!song) {

        return;

    }


    const player =
        document.getElementById(
            "player-section"
        );


    const title =
        document.getElementById(
            "player-song-title"
        );


    const artist =
        document.getElementById(
            "player-song-artist"
        );


    const reason =
        document.getElementById(
            "player-song-reason"
        );


    const listenLink =
        document.getElementById(
            "listen-link"
        );


    if (title) {

        title.textContent =
            song.title;

    }


    if (artist) {

        artist.textContent =
            song.artist;

    }


    if (reason) {

        reason.textContent =
            "✨ Why this song fits: " +
            song.why;

    }


    if (listenLink) {

        listenLink.href =
            createSpotifySearchURL(song);

        listenLink.target =
            "_blank";

        listenLink.rel =
            "noopener noreferrer";

    }


    /* =========================================
       OPTIONAL SPOTIFY PLAYER
    ========================================= */

    const spotifyPlayer =
        document.getElementById(
            "spotify-player"
        );


    if (spotifyPlayer) {

        spotifyPlayer.innerHTML = `

            <iframe
                src="${createSpotifyEmbedURL(song)}"
                width="100%"
                height="152"
                frameborder="0"
                allowtransparency="true"
                allow="
                    autoplay;
                    clipboard-write;
                    encrypted-media;
                    fullscreen;
                    picture-in-picture
                "
                loading="lazy"
                style="
                    border-radius:12px;
                    border:0;
                "
            ></iframe>

        `;

    }


    if (player) {

        player.style.display =
            "block";

    }

}


/* =========================================================
   PLAY CURRENT SONG
   ========================================================= */

function playCurrentSong() {

    if (!queueSongs.length) {

        return;

    }


    if (
        currentSongIndex < 0 ||
        currentSongIndex >= queueSongs.length
    ) {

        currentSongIndex =
            0;

    }


    const song =
        queueSongs[currentSongIndex];


    if (!song) {

        return;

    }


    trackSoundSpaceEvent(
        "song_selected",
        currentEmotion,
        `${song.title} — ${song.artist}`
    );


    updatePlayer(
        song
    );


    highlightCurrentSong();


    const player =
        document.getElementById(
            "player-section"
        );


    if (player) {

        player.scrollIntoView({
            behavior: "smooth",
            block: "center"
        });

    }

}


/* =========================================================
   NEXT SONG
   ========================================================= */

function nextSong() {

    if (!queueSongs.length) {

        return;

    }


    if (currentSongIndex === -1) {

        currentSongIndex =
            0;

    } else {

        currentSongIndex++;


        if (
            currentSongIndex >=
            queueSongs.length
        ) {

            currentSongIndex =
                0;

        }

    }


    trackSoundSpaceEvent(
        "next_song",
        currentEmotion,
        queueSongs[currentSongIndex]
            ? `${queueSongs[currentSongIndex].title} — ${queueSongs[currentSongIndex].artist}`
            : null
    );


    playCurrentSong();

}


/* =========================================================
   PREVIOUS SONG
   ========================================================= */

function previousSong() {

    if (!queueSongs.length) {

        return;

    }


    if (currentSongIndex === -1) {

        currentSongIndex =
            queueSongs.length - 1;

    } else {

        currentSongIndex--;


        if (currentSongIndex < 0) {

            currentSongIndex =
                queueSongs.length - 1;

        }

    }


    trackSoundSpaceEvent(
        "previous_song",
        currentEmotion,
        queueSongs[currentSongIndex]
            ? `${queueSongs[currentSongIndex].title} — ${queueSongs[currentSongIndex].artist}`
            : null
    );


    playCurrentSong();

}


/* =========================================================
   SHUFFLE ARRAY
   ========================================================= */

function shuffleArray(array) {

    const result =
        [...array];


    for (
        let i = result.length - 1;
        i > 0;
        i--
    ) {

        const randomIndex =
            Math.floor(
                Math.random() *
                (i + 1)
            );


        [
            result[i],
            result[randomIndex]
        ] =
        [
            result[randomIndex],
            result[i]
        ];

    }


    return result;

}


/* =========================================================
   SHUFFLE SONGS
   ========================================================= */

function shuffleSongs() {

    if (!queueSongs.length) {

        return;

    }


    const currentSong =
        currentSongIndex >= 0
            ? queueSongs[currentSongIndex]
            : null;


    queueSongs =
        shuffleArray(
            queueSongs
        );


    if (currentSong) {

        currentSongIndex =
            queueSongs.findIndex(
                song =>
                    song.title ===
                        currentSong.title &&
                    song.artist ===
                        currentSong.artist
            );

    } else {

        currentSongIndex =
            -1;

    }


    isShuffleOn =
        true;


    displaySongs();

    updateQueueButton();


    trackSoundSpaceEvent(
        "shuffle",
        currentEmotion
    );

}


/* =========================================================
   RESHUFFLE
   ========================================================= */

function reshuffleSongs() {

    if (!currentEmotion) {

        return;

    }


    queueSongs =
        shuffleArray(
            originalSongs
        );


    currentSongIndex =
        -1;


    isShuffleOn =
        true;


    displaySongs();

    updateQueueButton();


    trackSoundSpaceEvent(
        "reshuffle",
        currentEmotion
    );

}


/* =========================================================
   SHUFFLE BUTTON
   ========================================================= */

function updateQueueButton() {

    const button =
        document.getElementById(
            "shuffle-button"
        );


    if (!button) {

        return;

    }


    button.textContent =
        isShuffleOn
            ? "🔀 Shuffled"
            : "🔀 Shuffle";

}


/* =========================================================
   SURPRISE ME
   ========================================================= */

function surpriseMe() {

    if (!queueSongs.length) {

        return;

    }


    let randomIndex =
        Math.floor(
            Math.random() *
            queueSongs.length
        );


    if (
        queueSongs.length > 1 &&
        randomIndex === currentSongIndex
    ) {

        randomIndex =
            (
                randomIndex + 1
            ) %
            queueSongs.length;

    }


    currentSongIndex =
        randomIndex;


    const song =
        queueSongs[randomIndex];


    trackSoundSpaceEvent(
        "surprise_me",
        currentEmotion,
        `${song.title} — ${song.artist}`
    );


    playCurrentSong();

}


/* =========================================================
   FEEDBACK
   ========================================================= */

function setupFeedback() {

    const choiceButtons =
        document.querySelectorAll(
            ".choice-button"
        );


    choiceButtons.forEach(
        button => {

            button.addEventListener(
                "click",
                function() {

                    choiceButtons.forEach(
                        otherButton => {

                            otherButton.classList.remove(
                                "selected"
                            );

                        }
                    );


                    button.classList.add(
                        "selected"
                    );


                    selectedFit =
                        button.dataset.value ||
                        "";


                    const hiddenInput =
                        document.getElementById(
                            "feedback-fit"
                        );


                    if (hiddenInput) {

                        hiddenInput.value =
                            selectedFit;

                    }

                }
            );

        }
    );


    const helpfulButtons =
        document.querySelectorAll(
            ".helpful-choice"
        );


    helpfulButtons.forEach(
        button => {

            button.addEventListener(
                "click",
                function() {

                    helpfulButtons.forEach(
                        otherButton => {

                            otherButton.classList.remove(
                                "selected"
                            );

                        }
                    );


                    button.classList.add(
                        "selected"
                    );


                    selectedHelpful =
                        button.dataset.value ||
                        "";


                    const hiddenInput =
                        document.getElementById(
                            "feedback-helpful"
                        );


                    if (hiddenInput) {

                        hiddenInput.value =
                            selectedHelpful;

                    }

                }
            );

        }
    );


    const form =
        document.getElementById(
            "feedback-form"
        );


    if (!form) {

        return;

    }


    form.addEventListener(
        "submit",
        async function(event) {

            event.preventDefault();


            const emotionElement =
                document.getElementById(
                    "feedback-emotion"
                );


            const improvementElement =
                document.getElementById(
                    "feedback-improvement"
                );


            const likedElement =
                document.getElementById(
                    "feedback-liked"
                );


            const message =
                document.getElementById(
                    "full-feedback-message"
                );


            const emotion =
                emotionElement
                    ? emotionElement.value
                    : "";


            const improvement =
                improvementElement
                    ? improvementElement.value.trim()
                    : "";


            const liked =
                likedElement
                    ? likedElement.value.trim()
                    : "";


            if (
                !emotion ||
                !selectedFit ||
                !selectedHelpful
            ) {

                if (message) {

                    message.textContent =
                        "Please answer the required questions first.";

                }

                return;

            }


            const feedbackText =
                `Fit: ${selectedFit}. ` +
                `Helpful: ${selectedHelpful}. ` +
                `Improvement: ${improvement}. ` +
                `Liked: ${liked}`;


            if (message) {

                message.textContent =
                    "Sending feedback...";

            }


            const saved =
                await trackSoundSpaceEvent(
                    "feedback",
                    emotion,
                    null,
                    selectedHelpful,
                    feedbackText
                );


            if (saved) {

                if (message) {

                    message.textContent =
                        "✨ Thank you! Your feedback has been sent.";

                }

            } else {

                if (message) {

                    message.textContent =
                        "Your feedback could not be connected to the analytics system right now.";

                }

            }


            form.reset();


            selectedFit =
                "";

            selectedHelpful =
                "";


            choiceButtons.forEach(
                button => {

                    button.classList.remove(
                        "selected"
                    );

                }
            );


            helpfulButtons.forEach(
                button => {

                    button.classList.remove(
                        "selected"
                    );

                }
            );

        }
    );

}


/* =========================================================
   INSIGHTS
   ========================================================= */

async function displayInsights() {

    const totalUses =
        document.getElementById(
            "total-uses"
        );


    const helpfulCount =
        document.getElementById(
            "helpful-count"
        );


    const mostUsedEmotion =
        document.getElementById(
            "most-used-emotion"
        );


    const emotionList =
        document.getElementById(
            "emotion-statistics-list"
        );


    const historyList =
        document.getElementById(
            "usage-history-list"
        );


    if (IS_DEVELOPER) {

        if (totalUses) {

            totalUses.textContent =
                "—";

        }


        if (helpfulCount) {

            helpfulCount.textContent =
                "—";

        }


        if (mostUsedEmotion) {

            mostUsedEmotion.textContent =
                "Developer Mode";

        }


        if (emotionList) {

            emotionList.innerHTML =
                "<p>Analytics disabled in Developer Mode.</p>";

        }


        if (historyList) {

            historyList.innerHTML =
                "";

        }


        return;

    }


    if (totalUses) {

        totalUses.textContent =
            "Loading...";

    }


    if (helpfulCount) {

        helpfulCount.textContent =
            "Loading...";

    }


    if (mostUsedEmotion) {

        mostUsedEmotion.textContent =
            "Loading...";

    }


    try {

        const response =
            await fetch(
                `${SUPABASE_URL}/rest/v1/usage_events?select=*&order=created_at.asc`,
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

            throw new Error(
                `Supabase returned ${response.status}: ${errorText}`
            );

        }


        const events =
            await response.json();


        console.log(
            "SoundSpace Insights:",
            events
        );


        /* =========================================
           TOTAL UNIQUE SESSIONS
        ========================================= */

        const sessions =
            new Set();


        events.forEach(
            event => {

                if (event.session_id) {

                    sessions.add(
                        event.session_id
                    );

                }

            }
        );


        if (totalUses) {

            totalUses.textContent =
                sessions.size;

        }


        /* =========================================
           HELPFUL FEEDBACK
        ========================================= */

        const helpfulResponses =
            events.filter(
                event => {

                    if (
                        event.event_type !==
                        "feedback"
                    ) {

                        return false;

                    }


                    return [
                        "yes",
                        "true",
                        "helpful"
                    ].includes(
                        String(
                            event.helpful || ""
                        )
                            .toLowerCase()
                            .trim()
                    );

                }
            );


        if (helpfulCount) {

            helpfulCount.textContent =
                helpfulResponses.length;

        }


        /* =========================================
           EMOTION COUNTS
        ========================================= */

        const counts = {

            happiness: 0,
            sadness: 0,
            anger: 0,
            anxiety: 0,
            irritation: 0

        };


        events.forEach(
            event => {

                if (
                    event.event_type !==
                    "emotion_selected"
                ) {

                    return;

                }


                const emotion =
                    String(
                        event.mood || ""
                    )
                        .toLowerCase()
                        .trim();


                if (
                    Object.prototype.hasOwnProperty.call(
                        counts,
                        emotion
                    )
                ) {

                    counts[emotion]++;

                }

            }
        );


        /* =========================================
           MOST USED EMOTION
        ========================================= */

        let mostUsed =
            null;


        let highestCount =
            0;


        Object.keys(counts).forEach(
            emotion => {

                if (
                    counts[emotion] >
                    highestCount
                ) {

                    highestCount =
                        counts[emotion];

                    mostUsed =
                        emotion;

                }

            }
        );


        if (mostUsedEmotion) {

            if (
                mostUsed &&
                moodData[mostUsed]
            ) {

                mostUsedEmotion.textContent =
                    `${moodData[mostUsed].emoji} ${moodData[mostUsed].title}`;

            } else {

                mostUsedEmotion.textContent =
                    "No data yet";

            }

        }


        /* =========================================
           EMOTION STATISTICS
        ========================================= */

        if (emotionList) {

            emotionList.innerHTML =
                "";


            Object.keys(counts).forEach(
                emotion => {

                    const row =
                        document.createElement(
                            "div"
                        );


                    row.className =
                        "emotion-stat-row";


                    const label =
                        document.createElement(
                            "strong"
                        );


                    label.textContent =
                        `${moodData[emotion].emoji} ${moodData[emotion].title}`;


                    const count =
                        document.createElement(
                            "span"
                        );


                    count.textContent =
                        counts[emotion];


                    row.appendChild(
                        label
                    );


                    row.appendChild(
                        count
                    );


                    emotionList.appendChild(
                        row
                    );

                }
            );

        }


        /* =========================================
           USAGE HISTORY
        ========================================= */

        if (historyList) {

            historyList.innerHTML =
                "";


            const pageViews =
                events.filter(
                    event =>
                        event.event_type ===
                        "page_view"
                );


            if (!pageViews.length) {

                historyList.innerHTML =
                    "<p>No visitor activity yet.</p>";

            } else {

                pageViews
                    .slice()
                    .reverse()
                    .slice(
                        0,
                        20
                    )
                    .forEach(
                        event => {

                            const row =
                                document.createElement(
                                    "div"
                                );


                            row.className =
                                "usage-history-row";


                            let date =
                                "Unknown date";


                            if (
                                event.created_at
                            ) {

                                const parsedDate =
                                    new Date(
                                        event.created_at
                                    );


                                if (
                                    !Number.isNaN(
                                        parsedDate.getTime()
                                    )
                                ) {

                                    date =
                                        parsedDate.toLocaleString();

                                }

                            }


                            row.textContent =
                                date;


                            historyList.appendChild(
                                row
                            );

                        }
                    );

            }

        }

    } catch (error) {

        console.error(
            "SoundSpace Insights failed:",
            error
        );


        if (totalUses) {

            totalUses.textContent =
                "0";

        }


        if (helpfulCount) {

            helpfulCount.textContent =
                "0";

        }


        if (mostUsedEmotion) {

            mostUsedEmotion.textContent =
                "No data yet";

        }


        if (emotionList) {

            emotionList.innerHTML =
                "<p>Analytics data could not be loaded.</p>";

        }


        if (historyList) {

            historyList.innerHTML =
                "<p>Analytics history could not be loaded.</p>";

        }

    }

}


/* =========================================================
   SAFE CLICK HANDLER
   ========================================================= */

function onClick(
    id,
    handler
) {

    const element =
        document.getElementById(
            id
        );


    if (!element) {

        console.warn(
            `SoundSpace: #${id} was not found.`
        );

        return;

    }


    element.addEventListener(
        "click",
        function(event) {

            try {

                handler(event);

            } catch (error) {

                console.error(
                    `SoundSpace error in #${id}:`,
                    error
                );

            }

        }
    );

}


/* =========================================================
   EMOTION CARD INITIALIZATION
   ========================================================= */

function initializeEmotionCards() {

    const cards =
        document.querySelectorAll(
            ".emotion-card"
        );


    cards.forEach(
        card => {

            if (
                card.dataset.soundspaceBound ===
                "true"
            ) {

                return;

            }


            card.dataset.soundspaceBound =
                "true";


            card.addEventListener(
                "click",
                function() {

                    const emotion =
                        String(
                            card.dataset.emotion ||
                            ""
                        )
                            .toLowerCase()
                            .trim();


                    if (
                        !moodData[emotion]
                    ) {

                        console.error(
                            "Unknown SoundSpace emotion:",
                            emotion
                        );

                        return;

                    }


                    trackSoundSpaceEvent(
                        "emotion_selected",
                        emotion
                    );


                    displayEmotion(
                        emotion
                    );

                }
            );

        }
    );

}


/* =========================================================
   INITIALIZE
   ========================================================= */

function initializeSoundSpace() {

    if (soundSpaceInitialized) {

        return;

    }


    soundSpaceInitialized =
        true;


    console.log(
        "SoundSpace JavaScript loaded."
    );


    /* =========================================
       EMOTION CARDS
    ========================================= */

    initializeEmotionCards();


    /* =========================================
       NAVIGATION
    ========================================= */

    onClick(
        "home-nav",
        showHomePage
    );


    onClick(
        "why-nav",
        showWhyPage
    );


    onClick(
        "about-nav",
        showAboutPage
    );


    onClick(
        "feedback-nav",
        showFeedbackPage
    );


    onClick(
        "insights-nav",
        showInsightsPage
    );


    /* =========================================
       BACK
    ========================================= */

    onClick(
        "back-button",
        showHomePage
    );


    /* =========================================
       SURPRISE ME
    ========================================= */

    onClick(
        "surprise-button",
        surpriseMe
    );


    /* =========================================
       QUEUE CONTROLS
    ========================================= */

    onClick(
        "previous-song",
        previousSong
    );


    onClick(
        "next-song",
        nextSong
    );


    onClick(
        "shuffle-button",
        shuffleSongs
    );


    onClick(
        "reshuffle-button",
        reshuffleSongs
    );


    /* =========================================
       PLAYER CONTROLS
    ========================================= */

    onClick(
        "player-previous",
        previousSong
    );


    onClick(
        "player-next",
        nextSong
    );


    /* =========================================
       FEEDBACK
    ========================================= */

    setupFeedback();


    /* =========================================
       PAGE VIEW
    ========================================= */

    if (!IS_DEVELOPER) {

        trackSoundSpaceEvent(
            "page_view"
        );

    }


    console.log(
        "SoundSpace initialized successfully."
    );

}


/* =========================================================
   DOM READY
   ========================================================= */

if (
    document.readyState ===
    "loading"
) {

    document.addEventListener(
        "DOMContentLoaded",
        initializeSoundSpace
    );

} else {

    initializeSoundSpace();

}


/* =========================================================
   GLOBAL ERROR PROTECTION
   ========================================================= */

window.addEventListener(
    "error",
    function(event) {

        console.error(
            "SoundSpace JavaScript error:",
            event.error ||
            event.message
        );

    }
);


/* =========================================================
   UNHANDLED PROMISE PROTECTION
   ========================================================= */

window.addEventListener(
    "unhandledrejection",
    function(event) {

        console.error(
            "SoundSpace promise error:",
            event.reason
        );

    }
);

const moodData={happiness:{title:"Music for your happiness",text:"Let's keep the positive energy going with bright, feel-good sounds.",music:"Feel-Good & Uplifting",description:"Upbeat pop, cheerful acoustic music and positive playlists.",search:"feel good happy upbeat music"},sadness:{title:"Music for your sadness",text:"You don't have to force the feeling away. Try gentle music that creates comfort and warmth.",music:"Comfort & Gentle Uplift",description:"Soft piano, acoustic sounds and comforting music.",search:"comforting peaceful acoustic music"},anger:{title:"Music to cool down",text:"Let's create some space between you and the tension with slower, calmer sounds.",music:"Calm & Release",description:"Chill instrumentals, ambient sounds and slow relaxing music.",search:"calm chill instrumental relaxation"},anxiety:{title:"Music for a calmer moment",text:"Slow, steady sounds can create a quieter atmosphere around you.",music:"Calm & Grounding",description:"Ambient music, soft piano and peaceful instrumental playlists.",search:"calm ambient relaxing instrumental music"},irritation:{title:"Music to help you reset",text:"Take a moment to step back from the irritation and settle into something gentler.",music:"Chill & Reset",description:"Lo-fi, mellow beats and relaxed instrumental music.",search:"lofi chill mellow relaxing music"}};

const cards=document.querySelectorAll(".emotion-card");
const recommendation=document.querySelector("#recommendation");
const title=document.querySelector("#recommendation-title");
const text=document.querySelector("#recommendation-text");
const musicTitle=document.querySelector("#music-title");
const musicDescription=document.querySelector("#music-description");
const spotifyButton=document.querySelector("#spotify-button");
const changeButton=document.querySelector("#change-button");

cards.forEach(card=>{card.addEventListener("click",()=>{const data=moodData[card.dataset.emotion];title.textContent=data.title;text.textContent=data.text;musicTitle.textContent=data.music;musicDescription.textContent=data.description;spotifyButton.href="https://open.spotify.com/search/"+encodeURIComponent(data.search);recommendation.hidden=false;recommendation.scrollIntoView({behavior:"smooth",block:"center"});});});
changeButton.addEventListener("click",()=>{recommendation.hidden=true;document.querySelector("#session").scrollIntoView({behavior:"smooth"});});

const moodData = {
  calm: { title:"Stay in your calm", desc:"Soft, spacious sounds to preserve a peaceful atmosphere.", keywords:"calm relaxing instrumental" },
  anxious: { title:"A gentle reset", desc:"Slower, less intense sounds designed to create a quieter atmosphere.", keywords:"calm anxiety relaxation instrumental" },
  angry: { title:"Cool the moment", desc:"Start with steady, low-intensity sounds and let the energy come down gradually.", keywords:"calm down relaxing music" },
  sad: { title:"A little comfort", desc:"Warm, gentle music that gives you space to feel without overwhelming you.", keywords:"comforting acoustic relaxing music" },
  stressed: { title:"Take a breath", desc:"Minimal and peaceful sounds for a quieter break from a busy moment.", keywords:"stress relief relaxing music" },
  tired: { title:"Slow the world down", desc:"Soft, unhurried sounds for winding down and resting.", keywords:"sleep ambient relaxing music" },
  happy: { title:"Keep the good energy", desc:"Light, positive sounds that help you enjoy the moment.", keywords:"happy chill music" },
  energetic: { title:"Chill your energy", desc:"Smooth, rhythmic sounds that keep your energy positive without making things hectic.", keywords:"chill upbeat music" }
};

const styleKeywords = {
  instrumental:"instrumental",
  lofi:"lofi",
  acoustic:"acoustic",
  classical:"classical",
  afrobeats:"afrobeat",
  nature:"nature sounds"
};

let selectedMood = null;
let selectedGoal = "calm";
let selectedStyle = "instrumental";

const moodGrid = document.getElementById("moodGrid");
const preferences = document.getElementById("preferences");
const result = document.getElementById("result");
const checkin = document.getElementById("checkin");

moodGrid.addEventListener("click", e => {
  const card = e.target.closest(".mood-card");
  if (!card) return;
  selectedMood = card.dataset.mood;
  document.querySelectorAll(".mood-card").forEach(c => c.classList.remove("selected"));
  card.classList.add("selected");
  preferences.classList.remove("hidden");
  preferences.scrollIntoView({behavior:"smooth", block:"start"});
});

document.querySelectorAll(".choice").forEach(btn => {
  btn.addEventListener("click", () => {
    selectedGoal = btn.dataset.goal;
    document.querySelectorAll(".choice").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
  });
});

document.querySelectorAll(".style-choice").forEach(btn => {
  btn.addEventListener("click", () => {
    selectedStyle = btn.dataset.style;
    document.querySelectorAll(".style-choice").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
  });
});

document.getElementById("recommend").addEventListener("click", () => {
  const m = moodData[selectedMood];
  let title = m.title;
  if (selectedGoal === "match") title = "Music that meets you there";
  if (selectedGoal === "lift") title = "A brighter direction";

  document.getElementById("resultTitle").textContent = title;
  document.getElementById("resultDescription").textContent = m.desc;
  document.getElementById("moodChip").textContent = selectedMood[0].toUpperCase() + selectedMood.slice(1);
  document.getElementById("styleChip").textContent = styleKeywords[selectedStyle];

  const query = encodeURIComponent(`${m.keywords} ${styleKeywords[selectedStyle]}`);
  document.getElementById("spotifyButton").href = `https://open.spotify.com/search/${query}`;

  result.classList.remove("hidden");
  checkin.classList.remove("hidden");
  result.scrollIntoView({behavior:"smooth", block:"start"});
});

document.getElementById("again").addEventListener("click", () => {
  result.classList.add("hidden");
  checkin.classList.add("hidden");
  preferences.scrollIntoView({behavior:"smooth"});
});

document.querySelectorAll(".checkin-buttons button").forEach(btn => {
  btn.addEventListener("click", () => {
    document.getElementById("thanks").classList.remove("hidden");
  });
});

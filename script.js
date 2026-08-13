const moods={
calm:{label:"Calm",emoji:"😌",desc:"You're already in a peaceful place.",calm:"stay calm",match:"peaceful",lift:"light upbeat"},
anxious:{label:"Anxious",emoji:"😟",desc:"Let's give your mind a quieter musical space.",calm:"deep relaxation",match:"gentle ambient",lift:"warm uplifting"},
angry:{label:"Angry",emoji:"😡",desc:"Let's bring the intensity down gradually.",calm:"calm down",match:"steady instrumental",lift:"positive chill"},
sad:{label:"Sad",emoji:"😢",desc:"Let's choose something gentle and comforting.",calm:"comforting relaxation",match:"soft emotional",lift:"hopeful uplifting"},
stressed:{label:"Stressed",emoji:"😣",desc:"Let's create a little breathing room.",calm:"stress relief",match:"minimal ambient",lift:"light positive"},
tired:{label:"Tired",emoji:"😴",desc:"Let's slow things down and make the moment softer.",calm:"sleep ambient",match:"slow relaxing",lift:"gentle acoustic"},
happy:{label:"Happy",emoji:"😊",desc:"Let's keep the good feeling going.",calm:"chill happy",match:"feel good",lift:"upbeat happy"},
energetic:{label:"Energetic",emoji:"🤩",desc:"Let's shape that energy without overwhelming the moment.",calm:"chill energetic",match:"rhythmic chill",lift:"upbeat energetic"}};
const styles={instrumental:"instrumental",lofi:"lo-fi",acoustic:"acoustic",classical:"classical",afrobeats:"Afrobeat",nature:"nature sounds"};
const goals={calm:"Calm me",match:"Match my mood",lift:"Lift my mood"};
let selectedMood=null,selectedGoal="calm",selectedStyle="instrumental";
const $=id=>document.getElementById(id);

document.querySelectorAll(".mood-card").forEach(card=>card.addEventListener("click",()=>{
selectedMood=card.dataset.mood;document.querySelectorAll(".mood-card").forEach(c=>c.classList.remove("selected"));card.classList.add("selected");
const m=moods[selectedMood];$("moodSummary").textContent=`You're feeling ${m.label.toLowerCase()} ${m.emoji}. Choose where you'd like the music to take you.`;$("preferences").classList.remove("hidden");$("preferences").scrollIntoView({behavior:"smooth",block:"start"});
}));
document.querySelectorAll(".goal-card").forEach(card=>card.addEventListener("click",()=>{selectedGoal=card.dataset.goal;document.querySelectorAll(".goal-card").forEach(c=>c.classList.remove("active"));card.classList.add("active")}));
document.querySelectorAll(".style-choice").forEach(card=>card.addEventListener("click",()=>{selectedStyle=card.dataset.style;document.querySelectorAll(".style-choice").forEach(c=>c.classList.remove("active"));card.classList.add("active")}));

$("recommend").addEventListener("click",()=>{
if(!selectedMood)return;const m=moods[selectedMood],energy=Number($("energy").value),energyWords=["very gentle","gentle","balanced","lively","high-energy"];
const titleMap={calm:{calm:"Stay in your calm",match:"Peaceful flow",lift:"A little brighter"},anxious:{calm:"A gentle reset",match:"Soft space",lift:"A warmer direction"},angry:{calm:"Cool the moment",match:"Steady release",lift:"Positive energy"},sad:{calm:"A little comfort",match:"Meet the feeling",lift:"A brighter direction"},stressed:{calm:"Take a breath",match:"Quiet focus",lift:"Lighten the load"},tired:{calm:"Slow the world down",match:"Soft landing",lift:"Gentle recharge"},happy:{calm:"Keep it easy",match:"Stay in the good",lift:"Keep the energy going"},energetic:{calm:"Chill your energy",match:"Smooth momentum",lift:"Ride the energy"}};
$("route").textContent=`${m.emoji} → ${selectedGoal==="calm"?"😌":selectedGoal==="lift"?"😊":m.emoji}`;$("resultTitle").textContent=titleMap[selectedMood][selectedGoal];
$("resultDescription").textContent=`${m.desc} Your ${styles[selectedStyle]} direction is set to a ${energyWords[energy-1]} energy level.`;
$("moodChip").textContent=m.label;$("goalChip").textContent=goals[selectedGoal];$("styleChip").textContent=styles[selectedStyle];
const query=encodeURIComponent(`${m[selectedGoal]} ${styles[selectedStyle]} ${energyWords[energy-1]} music`);$("spotifyButton").href=`https://open.spotify.com/search/${query}`;
$("session").classList.remove("hidden");$("session").scrollIntoView({behavior:"smooth",block:"start"});
});
$("again").addEventListener("click",()=>{$("session").classList.add("hidden");$("preferences").scrollIntoView({behavior:"smooth",block:"start"})});
document.querySelectorAll(".checkin-buttons button").forEach(button=>button.addEventListener("click",()=>{$("thanks").classList.remove("hidden");document.querySelectorAll(".checkin-buttons button").forEach(b=>b.disabled=true)}));

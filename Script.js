function generate() {
const mood = document.getElementById("mood").value;
const message = document.getElementById("message");
const music = document.getElementById("music");
const challenge = document.getElementById("challenge");
if (!mood) {
alert("Select a mood!");
return;
}
let bg, msg, song, task;
if (mood === "happy") {
bg = "linear-gradient(to right, #f7971e, #ffd200)";
msg = "Keep smiling — you're spreading positive energy! ";
song = " Music: Upbeat pop or dance playlist";
task = " Challenge: Compliment 3 people today";
}
if (mood === "sad") {
bg = "linear-gradient(to right, #2c3e50, #4ca1af)";
msg = "It's okay to slow down. You're stronger than you think ";
song = " Music: Calm instrumental or lo-fi";
task = " Challenge: Write 3 things you're grateful for";
}
if (mood === "focus") {
bg = "linear-gradient(to right, #00c6ff, #0072ff)";
msg = "Deep work mode activated. Let's build greatness ";
song = " Music: Coding or concentration beats";
task = " Challenge: Work for 25 minutes without distractions";
}
if (mood === "stress") {
bg = "linear-gradient(to right, #c31432, #240b36)";
msg = "Pause. Breathe. Reset. You’ve got this ";
song = " Music: Nature or meditation sounds";
task = " Challenge: Take 5 deep breaths";
}
if (mood === "excited") {
bg = "linear-gradient(to right, #fc4a1a, #f7b733)";
msg = "Your energy is contagious — go create something amazing ";
song = " Music: High-energy motivation playlist";
task = " Challenge: Start a new mini project today";
}
document.body.style.background = bg;
message.innerText = msg;
music.innerText = song;
challenge.innerText = task;
}

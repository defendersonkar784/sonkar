const music = document.getElementById("bgMusic");
const btn = document.getElementById("musicBtn");
const cakeBtn = document.getElementById("cakeBtn");

let confettiInterval;

btn.onclick = toggleMusic;
cakeBtn.onclick = cutCake;

function toggleMusic(){
  if(music.paused){
    music.play();
    btn.innerText="⏸ Pause Music";
    startConfetti();
  }else{
    music.pause();
    btn.innerText="🎶 Play Music";
    stopConfetti();
  }
}

function startConfetti(){
  confettiInterval=setInterval(()=>{
    const c=document.createElement("div");
    c.className="confetti";
    c.style.left=Math.random()*100+"vw";
    c.style.background=`hsl(${Math.random()*360},100%,50%)`;
    c.style.animationDuration=(Math.random()*3+2)+"s";
    document.body.appendChild(c);
    setTimeout(()=>c.remove(),5000);
  },200);
}

function stopConfetti(){
  clearInterval(confettiInterval);
}

// Countdown
const birthday = new Date("January 14, 2026 00:00:00").getTime();
setInterval(()=>{
  const d=birthday-new Date().getTime();
  if(d>0){
    days.innerText=Math.floor(d/86400000);
    hours.innerText=Math.floor(d%86400000/3600000);
    minutes.innerText=Math.floor(d%3600000/60000);
    seconds.innerText=Math.floor(d%60000/1000);
  }
},1000);

function cutCake(){
  document.querySelector(".top").style.transform="translateX(-25px) rotate(-8deg)";
  document.querySelector(".middle").style.transform="translateX(25px) rotate(8deg)";
  document.getElementById("cakeMsg").innerText="🎉 Happy Birthday Muskan 🎉";
  startConfetti();
}

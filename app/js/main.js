const player = document.querySelector(".player");
const next = document.querySelector(".next");
const prev = document.querySelector(".prev");
const play = document.querySelector(".play");
const audio = document.querySelector(".audio");
const progressContainer = document.querySelector(".progress-container");
const progress = document.querySelector(".progress");
const title = document.querySelector(".title");
const coverImg = document.querySelector(".cover__img");
const imgSrc = document.querySelector(".img__src");
const songName = document.querySelector(".song-name");
let songDuration = document.querySelector(".song-duration");
let songCurrentTime = document.querySelector(".song-current-time");
let timeLeft = document.querySelector(".time-left");

const songsRandom = [];

const songs = [
  "Луч - Алые сердца",
  "Луч - Апрель",
  "Луч - Излучение",
  "Луч - Каникулы",
  "Луч - Летние грозы",
  "Луч - Лыжня",
  "Луч - Ночной старт",
  "Луч - Отблески зари",
  "Луч - Первый снег",
  "Луч - Рассвет",
  "Луч - Романтика",
  "Луч - Символ",
  "Луч - Спутник",
  "Луч - Свидание",
  "Луч - Туманность Андромеды",
  "Луч - Юность",
  "Луч - В кольцах Сатурна",
  "Луч - Восток-1",
  "Луч - Вьюга",
  "Луч - Взморье",
];

let randomSongs = Math.floor(Math.random() * songs.length);
let songIndex = songs[randomSongs];

let defSong = 0; //отвечает за начальный выбор песни
onSong = 0;

// function defaultSong() {//рандомный выбор первой песни
//   audio.setAttribute('src', `audio/${songIndex}.mp3`);
//   onSong = 1;
// }

function defaultSong() {
  //первая песня - первая в списке
  audio.setAttribute("src", `audio/${songs[defSong]}.mp3`);
  onSong = 1;
}

//полоса прогресса
function updateProgress(e) {
  setTimeout(() => {
    songCurrentTime.innerHTML = `${Math.floor(audio.currentTime / 60)}:${
      Math.floor(audio.currentTime) % 60
    }`;
    songDuration.innerHTML = `${Math.floor(audio.duration / 60)}:${
      Math.floor(audio.duration) % 60
    }`;

    timeLeft.innerHTML = `${Math.floor(
      (audio.duration - audio.currentTime) / 60
    )}:${Math.floor((audio.duration - audio.currentTime) % 60)}`;

    let persent = (audio.currentTime / audio.duration) * 100;
    progress.style.width = `${persent}%`;

    if (audio.currentTime == audio.duration) {
      nextSong();
    }
  }, 200);
}

function timeSong() {
  //запуск функции полосы прогресса по событию timeupdate
  audio.addEventListener("timeupdate", updateProgress);
}
timeSong();

function autoPlay() {
  //начало новой песни, когда время проигрывания песни = продолжительности песни
  if (audio.currentTime == audio.duration) {
    nextSong();
  }
}
autoPlay();

//запуск воспроизведения
let onPlay = 0;
function playStart() {
  onPlay = 1;
  audio.play();
  imgSrc.setAttribute("src", `img/stop.svg`);
  audio.addEventListener("ended", next);
  if (defSong < 9 && defSong != 0) {
    songName.innerHTML = `0${defSong + 1} ${songs[defSong]}`;
  } else if (defSong == 0) {
    songName.innerHTML = `01 ${songs[defSong]}`;
  } else {
    songName.innerHTML = `${defSong + 1} ${songs[defSong]}`;
  }

  function addLight() {
    //подсветка кнопками
    let listItem = document.querySelectorAll(".list-item");
    listItem.forEach((elem, id) => {
      elem.classList.remove("active"); //убирает активный класс со всех строк
    });
    listItem[defSong].classList.add("active"); //добавляет активный класс к проигрываемой строке
  }
  addLight();
}

function playStop() {
  onPlay = 0;
  audio.pause();
  imgSrc.setAttribute("src", `img/play.svg`);
}

play.addEventListener("click", () => {
  if (onSong == 0) {
    defaultSong();
  }
  if (onPlay == 0) {
    playStart();
  } else {
    playStop(); //ставит песню на паузу
  }
});

function nextSong() {
  if (defSong < songs.length - 1) {
    defSong = defSong + 1;
  } else {
    defSong = 0;
  }
  defaultSong();
  playStart();
}

next.addEventListener("click", nextSong);

function prevSong() {
  if (defSong > 0) {
    defSong = defSong - 1;
  } else {
    defSong = songs.length - 1;
  }
  defaultSong();
  playStart();
}

prev.addEventListener("click", prevSong);

//input
function checkSongs() {
  const checkSong = document.querySelector(".check-song");
  const inputBtn = document.querySelector(".input-btn");

  // checkSong.addEventListener()
  inputBtn.addEventListener("click", () => {
    let massage = document.querySelector(".massage");
    let value = checkSong.value;
    value = value.toLowerCase();

    console.log(value);

    songs.forEach((elem, id) => {
      if (elem.toLowerCase() == value) {
        massage.innerHTML = `такая песня уже есть под номером ${id + 1}`;
        console.log(elem);
      }
    });
    console.log(songsRandom)
  });
}
checkSongs();

// volume=========================
function volumeAudio() {
  let volumeRange = document.querySelector('.volume');

  volumeRange.addEventListener('change', () => {
    audio.volume = volumeRange.value;
    console.log(audio.volume)
    console.log(volumeRange.value)
  })
}
volumeAudio();
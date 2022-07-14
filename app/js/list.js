function playlist() {
  const list = document.querySelector(".list");
  // let listItem;

  function createListElem() {
    for (let i = 0; i < songs.length; i++) {
      let listItem = document.createElement("li");
      listItem.classList.add("list-item");
      list.appendChild(listItem);

      let count = i + 1;
      if (count < 10) {
        count = '0' + count;
      }

      listItem.innerHTML = `${count} ${songs[i]}`;
    }
  }
  createListElem();
  
  function songHighlite() {
    let listItem = document.querySelectorAll(".list-item");
    if (listItem[defSong].innerHTML == songName.innerHTML) {
    console.log(listItem)
    }

    listItem.forEach((elem, id) => {

      function removeLight() {
        listItem.forEach((elem) => {
          elem.classList.remove("active");//убирает активный класс со всех строк
        })
      }

      function currentSong() {//выделяет и проигрывает строку по нажатию на строку в плейлисте
        audio.setAttribute("src", `audio/${songs[id]}.mp3`);//замена номера песни
        elem.classList.add("active");
        console.log(elem)
        audio.play();

        if (id < 9 && id != 0) {
          songName.innerHTML = `0${id + 1} ${songs[id]}`;
        } else if (id == 0) {
          songName.innerHTML = `01 ${songs[id]}`;
        } else {
          songName.innerHTML = `${id + 1} ${songs[id]}`;
        }
        defSong = id;//по переключению кнопками начальная песня будет та, которая была выбрана последней
      }
      elem.addEventListener('click', removeLight)
      elem.addEventListener('click', currentSong)

    });
    // listItem[defSong].classList.add("active");//добавляет активный класс к проигрываемой строке
  }
  songHighlite()
}
playlist();

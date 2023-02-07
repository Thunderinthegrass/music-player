function playlist() {
  const list = document.querySelector(".list");
  // let listItem;

  function createListElem() {
    for (let i = 0; i < songs.length; i++) {//запускается цикл добавления элементов в список
      let listItem = document.createElement("li");//создается элемент li
      listItem.classList.add("list-item");//элементу li добавляется класс
      list.appendChild(listItem);//'элемент li добавляется в список

      let count = i + 1;//номер песни
      if (count < 10) {
        count = '0' + count;
      }

      listItem.innerHTML = `${count} ${songs[i]}`;//внутрь li добавляется номер и название песни
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
        audio.setAttribute("src", `audio/${songs[id]}`);//замена номера песни
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

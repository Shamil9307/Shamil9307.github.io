const input = document.querySelector(".input");
const buttonAdd = document.querySelector(".button");
const containerRU = document.querySelector(".containerRU");
const containerTR = document.querySelector(".containerTR");

input.addEventListener('keydown', event => {
  if (event.key == 'Enter') {
    addNewWord();
  };
});

buttonAdd.addEventListener('click', addNewWord);

function addNewWord () {
  const indexes = document.querySelectorAll('.index');
  const newRussian = document.createElement('div');
  const newTranslit = document.createElement('div');
  const newTranslitImg = document.createElement("img");
  const newIndex = document.createElement('span');
  newTranslitImg.className = "deleteString";
  newTranslitImg.src = "./img/Group_1.png";
    
  newRussian.className = "russian";
  newTranslit.className = "translit";

  newIndex.className = "index";
  newRussian.innerText = input.value;
     
  newTranslit.innerText = translit(input.value);  
     
  newIndex.innerText = indexes.length + 1;
  newTranslit.append(newTranslitImg);

  if (input.value.length > 7) {
    const newFullRu = document.createElement('div');
    const newFullTr = document.createElement('div');

    newFullRu.className = "fullRu";
    newFullRu.innerText = input.value;
    newFullTr.className = "fullTr";
    newFullTr.innerText = translit(input.value);

    newRussian.innerText = input.value.slice(0,7) + '...';
    newTranslit.innerText = translit(input.value).slice(0,7) + '...';
    newTranslit.append(newTranslitImg);
      
    newRussian.addEventListener("mouseenter", event => {
      newFullRu.style.display = "block";
    })
    newRussian.addEventListener("mouseleave", event => {
      newFullRu.style.display = "none";
    })
    newTranslit.addEventListener("mouseenter", event => {
      newFullTr.style.display = "block";
    })
    newTranslit.addEventListener("mouseleave", event => {
      newFullTr.style.display = "none";
    })

    newRussian.append(newFullRu);      
    newTranslit.append(newFullTr);
  };
    
  newRussian.prepend(newIndex);
  containerRU.append(newRussian);  
  containerTR.append(newTranslit);
  
  input.value = '';

  const deleteStr = document.querySelectorAll('.deleteString');
  const russianForDelete = document.querySelectorAll('.russian');
  const translitForDelete = document.querySelectorAll('.translit');

  for (let i = 1; i < deleteStr.length; i++) {
    deleteStr[i].addEventListener("click", event => {
      translitForDelete[i].remove();
      russianForDelete[i].remove();

      const indexes = document.querySelectorAll('.index');
      indexes.forEach ((elem, index) => {
      elem.innerText = index + 1;
      });
    });
  };
};
 
function translit(word){
  let answer = '';
  let converter = {
      'а': 'a',    'б': 'b',    'в': 'v',    'г': 'g',    'д': 'd',
      'е': 'e',    'ё': 'e',    'ж': 'zh',   'з': 'z',    'и': 'i',
      'й': 'y',    'к': 'k',    'л': 'l',    'м': 'm',    'н': 'n',
      'о': 'o',    'п': 'p',    'р': 'r',    'с': 's',    'т': 't',
      'у': 'u',    'ф': 'f',    'х': 'h',    'ц': 'c',    'ч': 'ch',
      'ш': 'sh',   'щ': 'sch',  'ь': '',     'ы': 'y',    'ъ': '',
      'э': 'e',    'ю': 'yu',   'я': 'ya',
   
      'А': 'A',    'Б': 'B',    'В': 'V',    'Г': 'G',    'Д': 'D',
      'Е': 'E',    'Ё': 'E',    'Ж': 'Zh',   'З': 'Z',    'И': 'I',
      'Й': 'Y',    'К': 'K',    'Л': 'L',    'М': 'M',    'Н': 'N',
      'О': 'O',    'П': 'P',    'Р': 'R',    'С': 'S',    'Т': 'T',
      'У': 'U',    'Ф': 'F',    'Х': 'H',    'Ц': 'C',    'Ч': 'Ch',
      'Ш': 'Sh',   'Щ': 'Sch',  'Ь': '',     'Ы': 'Y',    'Ъ': '',
      'Э': 'E',    'Ю': 'Yu',   'Я': 'Ya'
  };
   
  for (let i = 0; i < word.length; ++i ) {
    if (converter[word[i]] == undefined){
      answer += word[i];
    } else {
      answer += converter[word[i]];
    };
  };   
  return answer;
};

const clearAll = document.querySelector(".clearAll");
clearAll.addEventListener("click", event => {  
  window.location.reload();
});
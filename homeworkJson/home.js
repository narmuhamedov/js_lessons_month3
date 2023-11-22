const defaultUserPhoto = 'https://images.freeimages.com/365/images/previews/85b/psd-universal-blue-web-user-icon-53242.jpg';
const personsBlock = document.querySelector('.persons');

// Загрузка данных из файла
fetch('persons.json')
  .then(response => response.json())
  .then(data => {
    data.forEach((item, personIndex) => {
      const personBlock = document.createElement('div');
      personBlock.setAttribute('class', 'personCard');
      personBlock.innerHTML = `
        <div class="userPhoto">
          <img src="${item.photo ? item.photo : defaultUserPhoto}" alt="">
        </div>
        <span>ID: ${personIndex}</span>
        <p>Name: ${item.name}</p>
        <p>Surname: ${item.surname}</p>
        <span>Age: ${item.age}</span>
        <span>Bio: ${item.bio}</span>
        
      `;
      personsBlock.append(personBlock);
    });
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });

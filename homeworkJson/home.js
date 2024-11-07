const defaultUserPhoto = 'https://images.freeimages.com/365/images/previews/85b/psd-universal-blue-web-user-icon-53242.jpg';
const personsBlock = document.querySelector('.persons');

const xhr = new XMLHttpRequest();
xhr.open('GET', 'persons.json', true);

xhr.onreadystatechange = function () {
  if (xhr.readyState === XMLHttpRequest.DONE) {
    if (xhr.status === 200) {
      const data = JSON.parse(xhr.responseText);
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
    } else {
      console.error('Error fetching data:', xhr.status);
    }
  }
};

xhr.onerror = function () {
  console.error('Request failed');
};

xhr.send();

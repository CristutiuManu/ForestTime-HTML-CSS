var counter = 1;
setInterval(function() {
    document.getElementById('radio' + counter).checked=true;
    counter ++;
    if (counter > 3)
        counter = 1;
    
},3000);


// Using axios

let usersData;
      axios
        .get('https://jsonplaceholder.typicode.com/users')
        .then((response) => {
          usersData = response.data;
          document.getElementById(
            'app'
          ).innerHTML = `<h1 class="app-title"> Users (${
            usersData.length
          } results) </h1>
          ${usersData
            .map(function (user) {
              return `
              <div class="user">
                <h2 class="user-name"> ${user.name}</h2>
                <p class="details">${user.username} </p>
                <p class="species">${user.phone} </p>
                <p class="species">${user.email} </p>
              </div>`
            })
            .join('')}`;

          console.log(usersData);
        })
        .catch((error) => console.error(error));





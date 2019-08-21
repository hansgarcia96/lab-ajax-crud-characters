const charactersAPI = new APIHandler("http://localhost:8000");

$(document).ready(() => {
  document.getElementById("fetch-all").onclick = function() {
    axios.get("https://ih-crud-api.herokuapp.com/characters").then(result => {
      let allChar = result.data;
      console.log(allChar);

      let allCharDiv = $(`.characters-container`);
      allCharDiv.html("");

      for (let i = 0; i < allChar.length; i++) {
        allCharDiv.append(
          `<div class="character-info">
          <div class="name">${allChar[i].name}</div>
          <div class="occupation">${allChar[i].occupation}</div>
          <div class="cartoon">${allChar[i].debt}</div>
          <div class="weapon">${allChar[i].weapon}</div>
        </div>`
        );
      }
    });
  };

  let theInput = $("character-id");

  theInput.submit(function(e) {
    e.preventDefault();

    document.getElementById("fetch-one").onclick = function() {
      allCharDiv.html("");
      let characterSearch = $("character-id").val();

      axios
        .get("https://ih-crud-api.herokuapp.com/characters/" + characterSearch)
        .then(result => {
          let singleChar = result.data[0];
          console.log(singleChar);
        });
    };
  });

  document.getElementById("delete-one").onclick = function() {};

  document.getElementById("edit-character-form").onsubmit = function() {};

  document.getElementById("new-character-form").onsubmit = function() {};
});

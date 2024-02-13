setCharacterStyle = (color) => {
  document.documentElement.style.setProperty("--main-color", `#${color}`);
  document.querySelector(".right-side").style.color = `#${color}`;
  document.querySelectorAll(".ability").style = `#${color}`;
};

setNewCharacter = (character) => {
  setCharacterStyle(character.backgroundGradientColors[0]);
  const leftSideInside = ` 
        <img class="character-image animate__animated animate__fadeInLeftBig" src="${character.fullPortrait}" />
        <img src="${character.background}" class="left-side-text animate__animated animate__flash" />
    `;

  const rigtSideInside = `
            <span class="character-role animate__animated animate__fadeInDownBig">${character.role.displayName}</span>
            <h3 class="character-name animate__animated animate__fadeInDownBig">${character.displayName}</h3>
            <div class="abilities animate__animated  animate__fadeInUpBig" >
            <div class="ability">
                <img
                src="${character.abilities[0].displayIcon}"
                class="ability-image"
                />
                <span class="ability-letter">Q</span>
            </div>
            <div class="ability">
                <img
                src="${character.abilities[1].displayIcon}"
                class="ability-image"
                />
                <span class="ability-letter">E</span>
            </div>
            <div class="ability">
                <img
                src="${character.abilities[2].displayIcon}"
                class="ability-image"
                />
                <span class="ability-letter">C</span>
            </div>
            <div class="ability">
                <img
                src="${character.abilities[3].displayIcon}"
                class="ability-image"
                />
                <span class="ability-letter">X</span>
            </div>
            </div>
           
          
        </div>
    `;
  document.getElementById("left-side").innerHTML = leftSideInside;
  document.getElementById("right-side").innerHTML = rigtSideInside;
};

getRandomCharacter = async (id) => {
  console.log(id);
  const response = await fetch("https://valorant-api.com/v1/agents/");
  const data = await response.json();
  setNewCharacter(data.data[id]);
};

getRandomCharacter(Math.floor(Math.random() * 24));

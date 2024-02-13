uuidList = [
  "e370fa57-4757-3604-3648-499e1f642d3f",
  "dade69b4-4f5a-8528-247b-219e5a1facd6",
  "f94c3b30-42be-e959-889c-5aa313dba261",
  "117ed9e3-49f3-6512-3ccf-0cada7e3823b",
];

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
                src="https://media.valorant-api.com/agents/8e253930-4c05-31dd-1b6c-968525494517/abilities/ability1/displayicon.png"
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
  const response = await fetch("https://valorant-api.com/v1/agents/" + id);
  const data = await response.json();
  setNewCharacter(data.data);
};

getRandomCharacter(uuidList[0]);

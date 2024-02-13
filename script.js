uuidList = [
  "5f8d3a7f-467b-97f3-062c-13acf203c006",
  "f94c3b30-42be-e959-889c-5aa313dba261",
  "6f2a04ca-43e0-be17-7f36-b3908627744d",
  "117ed9e3-49f3-6512-3ccf-0cada7e3823b",
  "320b2a48-4d9b-a075-30f1-1f93a9b638fa",
  "1e58de9c-4950-5125-93e9-a0aee9f98746",
  "707eab51-4836-f488-046a-cda6bf494859",
  "eb93336a-449b-9c1b-0a54-a891f7921d69",
  "9f0d8ba9-4140-b941-57d3-a7ad57c6b417",
  "7f94d92c-4234-0a36-9646-3a87eb8b5c89",
  "569fdd95-4d10-43ab-ca70-79becc718b46",
  "a3bfb853-43b2-7238-a4f1-ad90e9e46bcc",
  "8e253930-4c05-31dd-1b6c-968525494517",
  "add6443a-41bd-e414-f6ad-e58d267f4e95",
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

getRandomCharacter(uuidList[Math.floor(Math.random() * uuidList.length)]);

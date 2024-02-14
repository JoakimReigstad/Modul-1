updateView();

function updateView() {
  app.innerHTML = /*html*/ `
    <div id="frame">
      <div id="mirror"><img src="${mirror}" class="image"/></div>
      <div id="door"><img src="${door}" class="image"/></div>
      <div id="window"><img src="${vindu}" class="image"/></div>
    </div>
    
    <div class="buttons">
      <button onclick="stopKiller1()">Killer 1</button>
      <button onclick="stopKiller2()">Killer 2</button>
      <button onclick="stopKiller3()">Killer 3</button>
    </div>

    <div class="score">You have saved Timmy: ${score} times</div> 

    <div id="timmy"><img src="img/timmy.png" class="image"/></div>
  `;
}

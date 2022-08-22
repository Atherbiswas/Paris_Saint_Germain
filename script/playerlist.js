// declare arry for get player list
const arryPlayerList = [];
function display(selectPlayer){
    const playerAllList = document.getElementById('player-list');
    playerAllList.innerHTML = '';
    for(let i = 0; i <arryPlayerList.length; i++){
       const pName = arryPlayerList[i].playerName;
       //create tr part...
       const tr = document.createElement('tr');
       tr.innerHTML = `
        <th>${i + 1}.</th>
        <td>${pName}</td>
    `;
    // to add tr into tbody by append child 
    playerAllList.appendChild(tr);
    
    }
}
//common function for player select..
function playerSelect(element){
    const playerName = element.parentNode.children[0].innerText;
    const playerObj ={
        playerName : playerName
    }
    arryPlayerList.push(playerObj);
    document.getElementById('player-number').innerText = arryPlayerList.length;
    display(arryPlayerList);
    
}
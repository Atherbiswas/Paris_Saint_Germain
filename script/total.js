//to add even listner for calculate button ...
document.getElementById('btn-calc').addEventListener('click', function(){
    
    const playerNumber = getTextElementValueById('player-number');
    const perPlayerCost = getInputFieldValueById('per-playercost');
    const playerExpenses = getTextElementValueById('player-expenses');
    //calculate total playerexpenses
    const playerTotalExpenses = perPlayerCost * playerNumber;
    setTextElementValueById('player-expenses', playerTotalExpenses);  
})
//to add even listner for total calculate button...
document.getElementById('btn-total-calc').addEventListener('click', function(){
    const playerExpenses = getTextElementValueById('player-expenses');
    const managerCost = getInputFieldValueById('manager-cost');
    const coachCost = getInputFieldValueById('coach-cost');
    const totalExpenses = getTextElementValueById('total-expenses');
    //calculate total income 
    const totalExpensesAmount = playerExpenses + managerCost + coachCost;
    setTextElementValueById('total-expenses', totalExpensesAmount); 
})
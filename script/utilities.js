//common function for input field...
function getInputFieldValueById (inputId){
    const inputField = document.getElementById(inputId);
    const inputFieldAmountString = inputField.value;
    const inputFieldAmount = parseFloat(inputFieldAmountString);
    return inputFieldAmount;
}

//common function for text field...
function getTextElementValueById(elementId){
    const textElement = document.getElementById(elementId);
    const textElementAmountString = textElement.innerText;
    const textElementAmount = parseFloat(textElementAmountString);
    return textElementAmount;
}

//common function for set value...
function setTextElementValueById(elementId,newValue){
    const textElement = document.getElementById(elementId);
    textElement.innerText = newValue;
}
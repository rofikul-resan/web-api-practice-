let counterValue = getValueFromLocaleStorage();
function counter(){
    const counterP = document.getElementById("count-value");
    counterValue++;
    counterP.innerText = counterValue;
    setValueINLocaleStorage(counterValue);
}

function setValueINLocaleStorage(value){
    localStorage.setItem("count-value", value)
}
function getValueFromLocaleStorage(){
    return localStorage.getItem("count-value");
}

function updateVAlueOnload(){
    const counterP = document.getElementById("count-value");
    counterP.innerText = counterValue;
}
updateVAlueOnload();

function clearStorage(){
    localStorage.removeItem("count-value");
    counterValue = 0;
    updateVAlueOnload()
}
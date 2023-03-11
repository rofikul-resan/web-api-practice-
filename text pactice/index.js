function showPrompt() {
    const promptValue =  prompt("input a number");
    const promptNumber = parseFloat(promptValue)
    if (!isNaN(promptNumber)) {
        alert(promptNumber + 200);
    }
}

function showLocation(){
    const isShow = confirm("show page location");
    if (isShow) {
        console.log(location.href);
    }
}
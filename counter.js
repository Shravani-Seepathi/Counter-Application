let clickCount = document.getElementById("counterValue");

function incrementBtn() {
    let counterValue = parseInt(clickCount.textContent);
    counterValue += 1;
    clickCount.textContent = counterValue;
    localStorage.setItem("clickCount", counterValue);
}

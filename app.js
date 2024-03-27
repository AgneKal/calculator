const weightInput = document.getElementById("weight");
const heightInput = document.getElementById("height");
const btn = document.getElementById("btn");
const resetbtn = document.getElementById("reset");
const rez = document.getElementById("rez");

const skaiciuoti = () => {
    const w = weight.valueAsNumber;
    const h = height.valueAsNumber;
    const kmi = (w / ((h / 100) ** 2)).toFixed(1);
    rez.innerHTML = `KMI: ${kmi}`;
    if (w < 0 || h < 30 || isNaN(w) || isNaN(h)) {
        document.body.style.backgroundColor = "#faebd7"
        rez.innerHTML = 'Netinkamai įvesti duomenys';
        rez.style.color = "#d3d3d3";
        return
    }
    if (kmi < 18.5) {
        document.body.style.backgroundColor = "#AED8D0";
        rez.style.color = "#AED8D0";
    } else if (kmi >= 18.5 && kmi <= 24.9) {
        document.body.style.backgroundColor = "#9BE756";
        rez.style.color = "#9BE756";
    } else if (kmi >= 25 && kmi <= 29.9) {
        document.body.style.backgroundColor = "#FDD805";
        rez.style.color = "#FDD805";
    } else if (kmi >= 30 && kmi <= 34.9) {
        document.body.style.backgroundColor = "#F68C31";
        rez.style.color = "#F68C31";
    } else if (kmi >= 35) {
        document.body.style.backgroundColor = "#F95353";
        rez.style.color = "#F95353";
    } else {
        document.body.style.backgroundColor = "#faebd7";
        rez.style.color = "#d3d3d3";
        rez.innerHTML = 'KMI: ???';
    }
}

const reset = () => {
    weightInput.value = '';
    heightInput.value = '';
    skaiciuoti();
}

btn.onclick = skaiciuoti;
resetbtn.onclick = reset;
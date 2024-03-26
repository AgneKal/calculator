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
    if (kmi < 18.5) {
        document.body.style.backgroundColor = "#AED9D1";
        rez.style.color = "#54949C";
    } else if (kmi >= 18.5 && kmi <= 24.9) {
        document.body.style.backgroundColor = "#9BE756";
        rez.style.color = "#84C047";
    } else if (kmi >= 25 && kmi <= 29.9) {
        document.body.style.backgroundColor = "#FEFCA5";
        rez.style.color = "#B4B05A";
    } else if (kmi >= 30 && kmi <= 34.9) {
        document.body.style.backgroundColor = "#FDD805";
        rez.style.color = "#B39009";
    } else if (kmi >= 35 && kmi <= 39.9) {
        document.body.style.backgroundColor = "#F68C31";
        rez.style.color = "#AF4F0A";
    } else if (kmi >= 40) {
        document.body.style.backgroundColor = "#F17882";
        rez.style.color = "#AC4045";
    } else {
        document.body.style.backgroundColor = "#faebd7";
        rez.style.color = "#d3d3d3";
        rez.innerHTML = '???';
    }
}

const reset = () => {
    weightInput.value = '';
    heightInput.value = '';
    skaiciuoti();
}


btn.onclick = skaiciuoti;
resetbtn.onclick = reset;
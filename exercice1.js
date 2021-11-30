let user_name = document.getElementById("user_name");
let array = [];
let div = document.getElementById("div");
let number = document.getElementById("number");
let entirety = document.getElementById("entirety");

document.getElementById("click").addEventListener("click",function () {
    //create array
    array.push(user_name.value);
    if (array.length === 10 ) {
        div.innerHTML = array[Math.trunc(Math.random() * array.length)];
    }
    else {
        div.innerHTML = "Entrer au moins 10 valeurs";
    }
    if (array.length === 5) {
        let val = document.getElementById("val");
        val.innerHTML = array[4];
    }
})
//number random
document.getElementById("random").addEventListener("click", function () {
    number.innerHTML = array[Math.trunc(Math.random() * array.length)];
})

//integrality array
document.getElementById("integrality").addEventListener("click", function () {
    let number = 0;
    for (let i of array) {
        entirety.innerHTML += "[" + number + "]" + "-" + i + "<br>";
        number++;
    }
})

// remove last element
document.getElementById("remove-last").addEventListener("click", function () {
    array.pop();
})

// delete all
document.getElementById("delete-all").addEventListener("click", function () {
    array.splice(0, array.length);
})

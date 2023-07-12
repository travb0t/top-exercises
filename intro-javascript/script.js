// let hello = "Waddles wuz h3re";

// let message = "Yo, ";

// let message2 = "... and also Scronk.";

// alert(message + hello + message2);



// let x = 1;

// let result = "";

// while (x != 10000000) {
//     x = x * 10;
//     result = result + x + "<br>";
// }

// document.getElementById("numbers").innerHTML = result;



// let y = 22 / 7;

// let z = y.toFixed(2);

// document.getElementById("numbers").innerHTML = "Pi =" + " " + z;



// let myNumber = "66";

// myNumber = Number(myNumber) + 3;

// document.getElementById("numbers").innerHTML = myNumber;



// let q = (4 + 6 + 9) / 77;

// document.getElementById("numbers").innerHTML = q.toFixed(5);



// const btn = document.querySelector("button");
// const txt = document.querySelector("p");

// btn.addEventListener("click", updateBtn);

// function updateBtn() {
//     if (btn.textContent === "Start") {
//         btn.textContent = "Stop";
//         txt.textContent = "Started!";
//     } else {
//         btn.textContent = "Start";
//         txt.textContent = "Stopped.";
//     }
// }



// const max = 57;

// let actual = max - 13;

// let percentage = actual / max;

// document.getElementById("numbers").innerHTML = percentage.toFixed(4);



const button = document.querySelector("button");

function greet() {
    const firstName = prompt("What is your first name?", "");
    const lastName = prompt("What is your last name?", "");
    let name;

    if (firstName == 0 || firstName == null) {
        name = lastName;
    } else if (lastName == 0 || lastName == null) {
        name = firstName;
    } else {
        name = `${firstName} ${lastName}`;
    }

    if (name == 0 || name == null) {
        alert("Please enter at least one name.");
        greet()
    } else if (!/^[a-zA-Z\s]+$/.test(name)) { 
        alert("Please only use letters.");
        greet()
    } else {
        alert(`Hello ${name}, it's nice to meet you!`);
    }
}

button.addEventListener("click", greet);
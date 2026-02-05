// loop 
// for loop

// let a = [1, 2, 3, 4, 5];

// for (let i=0; i<a.length; i++) {

//   console.log(a[i]);

// }

// print even number (1-20)
// print odd number (1-20)


// DOM manipulation (Document Object Model)
const welcome = document.getElementById("welcome");
welcome.innerText = `Welcome to JavaScript Online Class`;


const topic = document.getElementById("topic");
topic.innerText = `DOM Manipulation`;


const loopDOM = document.getElementById("loopDOM");
for (let i = 0; i < 3; i++) {
  loopDOM.innerHTML += `<h1 style="color: red">JavaScript</h1>`;
}
// loopDOM.innerText += ` text `;
console.log(loopDOM);



const test = document.getElementById("test");
for (let i = 0; i < 4; i++) {
  test.innerHTML += `<h2>Test 1</h2>`;
}



// JavaScript Object Notation
const name = ["Priyansu", "John", "Max"];
const phone = [1234567890, 9987654321, 5643746322];
const email = ["spriyansu@gmail.com", "john@gmail.com", "max@gmail.com"];

const user = { 
  name: {firstName: "Salam", middleName: "Priyansu", lastName: "Meitei"}, 
  phone: {call: 1234567890, whatsapp: 8723452873}, 
  email: ["spriyansu@gmail.com", "example@gmail.com"]
} // json

// console.log(user.name.firstName + " " + user.name.middleName + " " + user.name.lastName);
// console.log(user.phone.whatsapp);
// console.log(user.email[1]);



const usersData = [
  { name: "Priyansu", phone: 1234567890, email: "spriyansu@gmail.com" },
  { name: "John", phone: 9987654321, email: "john@gmail.com" },
  { name: "Max", phone: 5643746322, email: "max@gmail.com" },
]

const users = [
  { 
    name: "Priyansu", 
    phone: 1234567890, 
    email: "spriyansu@gmail.com",
  },
  { 
    name: "John", 
    phone: 9987654321, 
    email: "john@gmail.com" 
  },
  { 
    name: "Max", 
    phone: 5643746322, 
    email: "max@gmail.com" 
  },
]

// const text = ["A", 5, true, {name: "John"}]

const container = document.getElementById("container");
for (let i = 0; i < users.length; i++) {
  container.innerHTML += `<h1>Welcome ${users[i].name}, phone ${users[i].phone}</h1>`;
  
}

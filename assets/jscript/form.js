const lastname = document.getElementById("lastname");
const firstname = document.getElementById("firstname");
const email = document.getElementById("email");
const textarea = document.getElementById("textarea");
const btn = document.getElementById("btn");
const form = document.querySelector("form");
function postala() {
  fetch("https://northwind.vercel.app/api/categories", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      lastname: lastname.value,
      firstname: firstname.value,
      email: email.value,
      description: textarea.value,
    }),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log("data gonderildi" + data);
    });
}
// postala()
// form.addEventListener("submit", postala);
form.addEventListener("submit", (e) => {
    e.preventDefault(), postala();
  });
  

const form = document.getElementById("form");
const submit = document.getElementById("submit");
const input = document.getElementById("input-image");
const image = document.getElementById("image");

input.onchange = function () {
  image.src = URL.createObjectURL(input.files[0]);
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.getElementById("name");
  const username = document.getElementById("username");
  const email = document.getElementById("email");
  const phone = document.getElementById("phone");
  const password = document.getElementById("password");
  const field = document.getElementById("field");

  const namevalue = name.value;
  const usernamevalue = username.value;
  const emailvalue = email.value;
  const phonevalue = phone.value;
  const passwordvalue = password.value;
  const fieldvalue = field.value;

  expandElement(
    namevalue,
    usernamevalue,
    emailvalue,
    phonevalue,
    passwordvalue,
    fieldvalue
  );

  field.value = "";
  password.value = "";
  phone.value = "";
  email.value = "";
  username.value = "";
  name.value = "";
  image.src = "./Assets/images/user-icon-3d-render-png.png";
});

function expandElement(
  nameValue,
  usernamevalue,
  emailvalue,
  phonevalue,
  passwordvalue,
  fieldvalue
) {
  // craete td Element

  const nametd = document.createElement("td");
  nametd.classList.add(
    "border-collapse",
    "border",
    "border-white",
    "text-center",
    "min-w-20"
  );

  const usernametd = document.createElement("td");
  usernametd.classList.add(
    "border-collapse",
    "border",
    "border-white",
    "text-center",
    "min-w-20"
  );

  const emailtd = document.createElement("td");
  emailtd.classList.add(
    "border-collapse",
    "border",
    "border-white",
    "text-center",
    "min-w-20"
  );

  const phonetd = document.createElement("td");
  phonetd.classList.add(
    "border-collapse",
    "border",
    "border-white",
    "text-center",
    "min-w-20"
  );
  const passwordtd = document.createElement("td");
  passwordtd.classList.add(
    "border-collapse",
    "border",
    "border-white",
    "text-center",
    "min-w-20"
  );
  const fieldtd = document.createElement("td");
  fieldtd.classList.add(
    "border-collapse",
    "border",
    "border-white",
    "text-center",
    "min-w-20"
  );

  // create div

  const outimagediv = document.createElement("div");
  outimagediv.classList.add(
    "border",
    "border-black",
    "border-solid",
    "w-40",
    "bg-slate-200"
  );

  const outImage = document.createElement("img");
  outImage.src = image.src;
  outimagediv.appendChild(outImage);

  nametd.textContent = nameValue;
  usernametd.textContent = usernamevalue;
  emailtd.textContent = emailvalue;
  phonetd.textContent = phonevalue;
  passwordtd.textContent = passwordvalue;
  fieldtd.textContent = fieldvalue;
  // craete tr Element
  const tr = document.createElement("tr");
  tr.classList.add("text-center", "odd:bg-green-700", "even:bg-slate-600");

  tr.appendChild(outimagediv);
  tr.appendChild(nametd);
  tr.appendChild(usernametd);
  tr.appendChild(emailtd);
  tr.appendChild(phonetd);
  tr.appendChild(passwordtd);
  tr.appendChild(fieldtd);

  const tbody = document.getElementById("tbody");

  tbody.appendChild(tr);
}

// function tdCreator(elementType) {
//   const customElement = document.createElement(elementType);
//   customElement.classList.add(
//     "border-collapse",
//     "border",
//     "border-white",
//     "text-center",
//     "min-w-20"
//   );
//   return customElement;
// }

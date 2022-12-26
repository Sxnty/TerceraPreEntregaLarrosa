const AdminLogin = {
  user: "admin",
  password: "admin",
};
var prestamos = [];
const loginAdmin = () => {
  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;
  if (password == AdminLogin.password && username == AdminLogin.user) {
    menuAdministrador();
  } else {
    if (!form.querySelector("p")) {
      let form = document.getElementById("form");
      let p = document.createElement("p");
      p.innerText = "Los datos ingresados no son correctos.";
      form.append(p);
    }
  }
};
const loanHistory = () => {
  let prestamosJSON = localStorage.getItem("prestamos");
  let prestamosHistory = JSON.parse(prestamosJSON);
  console.log(prestamosHistory.length);

  document.querySelector("main").innerHTML = `
    <h2>Actualmente hay un total de ${prestamosHistory.length} prestamos cargados.</h2>
    <section id="loanContainer"></section>
    <button type="button" id="goBack" class="goBack">Atras</button>
    `;
  let container = document.getElementById("loanContainer");
  for (i = 0; i < prestamosHistory.length; i++) {
    let loanCard = document.createElement("div");
    loanCard.classList.add("loan__card")
    loanCard.innerHTML = `
    <h3>Nombre: ${prestamosHistory[i].nombre}</h3>
    <p>Cantidad del prestamo: ${prestamosHistory[i].cantidad}</p>
    <p>Cantidad de cuotas: ${prestamosHistory[i].cuotas}</p>
    <p>Pago mensual: ${prestamosHistory[i].mensual}</p>
    `;
    container.append(loanCard)
  }
  document.getElementById("goBack").addEventListener("click", menuAdministrador)
};
const addLoan = () => {
  document.querySelector("main").innerHTML = `
    <form action="" id="form">
    <h2>Nombre del cliente</h2>
    <input type="text" id="loanName">
    <h2>Numero del cliente</h2>
    <input type="number" name="loanNumber" id="loanNumber">
    <h2>Cantidad del prestamo</h2>
    <input type="number" name="loanValue" id="loanValue">
    <h2>Cantidad de cuotas</h2>
    <input type="number" name="loanMonths" id="loanMonths">
    <button type="button" id="addLoan">Añadir prestamo</button>
    <button type="button" id="goBack">Atras</button>
    <h3 id="loanInfo"></h3>
    </form>
    `;
  document.getElementById("addLoan").addEventListener("click", () => {
    let loanName = document.getElementById("loanName").value;
    let loanNumber = document.getElementById("loanNumber").value;
    let loanValue = document.getElementById("loanValue").value;
    let loanMonths = document.getElementById("loanMonths").value;
  });
  document.getElementById("loanMonths").addEventListener("input", () => {
    let loanMonthly = loanValue.value / loanMonths.value;
    document.getElementById("loanInfo").innerHTML = `
    Usted pagara durante ${loanMonths.value} meses  $${loanMonthly.toFixed(2)}
    `;
  });
  document.getElementById("addLoan").addEventListener("click", () => {
    let loanMonthly = loanValue.value / loanMonths.value;
    function Prestamo(nombre, cantidad, cuotas, mensual) {
      this.nombre = nombre;
      this.cantidad = cantidad;
      this.cuotas = cuotas;
      this.mensual = mensual;
    }
    let prestamo1 = new Prestamo(
      loanName.value,
      loanValue.value,
      loanMonths.value,
      loanMonthly
    );
    prestamos.push(prestamo1);
    let prestamosLS = JSON.stringify(prestamos);
    localStorage.setItem("prestamos", prestamosLS);
    alert("Prestamo cargado exitosamente");
  });
  document
    .getElementById("goBack")
    .addEventListener("click", menuAdministrador);
};
const menuAdministrador = () => {
  document.querySelector("main").innerHTML = `
    <button type="button" id="addLoan">Añadir Prestamo</button>
    <button type="button" id="loanHistory">Historial de prestamos</button>
    <button type="button" id="logOut">Cerrar sesion</button>
    `;
  document.getElementById("addLoan").addEventListener("click", addLoan);
  document.getElementById("loanHistory").addEventListener("click", loanHistory);
};
let button = document.getElementById("submit__button");
button.addEventListener("click", loginAdmin);

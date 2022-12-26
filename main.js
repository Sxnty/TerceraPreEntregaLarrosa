const AdminLogin = {
    user: "admin",
    password: "admin",
  };

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
</form>
    `
}
const menuAdministrador = () => {
    document.querySelector("main").innerHTML = `
    <button type="button" id="addLoan">Añadir Prestamo</button>
    <button type="button" id="loanHistory">Historial de prestamos</button>
    <button type="button" id="logOut">Cerrar sesion</button>
    `
    document.getElementById("addLoan").addEventListener("click", addLoan)
}
  let button = document.getElementById("submit__button");
button.addEventListener("click", loginAdmin);


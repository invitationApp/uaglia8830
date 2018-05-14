import * as React from "react";
import "../assets/css/register.css";
// import "../assets/css/board.css";

class SignIn extends React.Component {
  signIn = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
  };
  render() {
    return (
      <div className="wrapper">
        <form action="/signup" method="POST" id="registerForm">
          <legend>Registro</legend>
          <br />
          <div className="row">
            <div className="column">
              <label htmlFor="firstName">
                Nombre:
                <span>*</span>
              </label>
              <input
                type="text"
                name="firstName"
                id="firstName"
                placeholder="Ingrese su nombre"
                required={true}
              />
              <br />

              <label htmlFor="apellido">
                Apellido:
                <span>*</span>
              </label>
              <input
                type="text"
                name="lastName"
                id="lastName"
                placeholder="Ingrese su apellido"
                required={true}
              />
              <br />

              <label htmlFor="username">Nombre de Usuario:</label>
              <input
                type="text"
                name="username"
                id="username"
                placeholder="Ingrese un nombre de usuario"
              />
              <br />

              <label htmlFor="phone">Celular:</label>
              <input
                type="text"
                name="phone"
                id="phone"
                placeholder="Ingrese su celular"
              />
              <br />

              <label htmlFor="confirmation">Confirmacion al evento:</label>
              <select name="confirmation" id="confirmation">
                <option value="0">Confirmado</option>
                <option value="1" selected={true}>
                  Pendiente
                </option>
                <option value="2">Rechazado</option>
              </select>
              <br />
            </div>

            <div className="column">
              <label htmlFor="email">
                Email:
                <span>*</span>
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Ingrese un email"
                required={true}
              />
              <br />

              <label htmlFor="emailConfirm">
                Confirmar Email:
                <span>*</span>
              </label>
              <input
                type="email"
                name="emailConfirm"
                id="emailConfirm"
                placeholder="Repita su email"
                required={true}
              />
              <br />

              <label htmlFor="password">
                Password:
                <span>*</span>
              </label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Ingrese una contraseña"
                required={true}
              />
              <br />

              <label htmlFor="passwordconfirm">
                Confirmar Password:
                <span>*</span>
              </label>
              <input
                type="password"
                name="passwordconfirm"
                id="passwordconfirm"
                placeholder="Repita su contraseña"
                required={true}
              />
              <br />
            </div>
          </div>

          <br />
          <div className="links">
            <input
              type="submit"
              value="Registrar"
              id="register"
              className="button"
            />
            <a href="/signin">Regresar al Log in</a>
          </div>

          <input type="hidden" name="role" value={1} />
        </form>
        <br />
      </div>
    );
  }
}

export default SignIn;

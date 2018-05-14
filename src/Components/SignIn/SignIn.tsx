import * as React from "react";
import "../../assets/css/register.css";
import "../../assets/css/board.css";
import { RouteComponentProps } from "react-router";
import { ConnectedProps } from './SignIn.Container'; 

export interface OwnProps extends RouteComponentProps<{}> {};
export interface SignInState {};
export default class SignIn extends React.Component <ConnectedProps, SignInState> {
  signIn = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log('signin button');
    this.props.signIn('gg', 'wp');
  }
  render() {
    console.log(this.props.signedIn);
    return (
      <div className="wrapper">
        <div className="login" id="login">
          <legend>Login</legend>
          <br />
          <input
            type="text"
            name="username"
            id="username"
            placeholder="Ingrese su nombre de usuario registrado"
            required={true}
          />
          <label htmlFor="username">Nombre de usuario</label>
          <br />
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Ingrese su password"
            required={true}
          />
          <label htmlFor="password">Password</label>
          <br />

          <button onClick={this.signIn}>Ingresar</button>
          <br />
          <a href="/signup">Registar</a>
        </div>
        <a href="/forgotPass">Olvido su contraseña?</a>
      </div>
    );
  }
}
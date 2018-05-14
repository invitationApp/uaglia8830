import { connect } from "react-redux";
import SignInComponent, { OwnProps } from './SignIn';
import { signIn } from '../../store/Actions/UserActions';

type S2P = { signedIn: boolean };
type D2P = { signIn(user: string, password: string): void };
export type ConnectedProps = S2P & D2P & OwnProps;
export default connect<S2P, D2P, OwnProps>(
    (store: any) => ({ signedIn: store.user.signedIn }),
    { signIn }
)(SignInComponent);
import { auth } from "../../firebase";
import { signInWithPopup } from "firebase/auth";
import * as actions from "./actions";
export function signInAPI() {
  signInWithPopup(auth, provider)
    .then((payload) => {
      dispatch(actions.setUser(payload.user));
    })
    .catch((error) => alert(error.message));
}

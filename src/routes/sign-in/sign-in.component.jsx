import { useEffect } from "react";
import { getRedirectResult } from "firebase/auth";

import {
  auth,
  signInWithGooglePopup,
  signInWithGoogleRedirect,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";

import SignUpForm from "../../components/sign-up-form/sign-up-form.component";

const SignIn = () => {
  useEffect(() => {
    const abc = async () => {
        const response = await getRedirectResult(auth);
        
        if (response) {
          const userDocRef = await createUserDocumentFromAuth(response.user);
        }
    
        return null;
      }

      abc();
  }, []);

  const logGoogleUserPopup = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  };

  return (
    <div>
      <h1>Sign In Page</h1>
      <button onClick={logGoogleUserPopup}>Sign in with Google Popup</button>
      <button onClick={signInWithGoogleRedirect}>
        Sign in with Google Redirect
      </button>
      <SignUpForm />
    </div>
  );
};

export default SignIn;

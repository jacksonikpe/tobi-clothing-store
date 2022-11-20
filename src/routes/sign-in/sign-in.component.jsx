import SignUpForm from '../../components/sign-up-form/sign-up-form.componet';
import { createUserDocumentFromAuth, signInWithGooglePopup } from '../../utils/firebase/firebase.utils'

const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  };

  return (
    <div>
      <div>SignIn</div>
      <button onClick={logGoogleUser}>sign in with Google popup</button>
      <SignUpForm />
    </div>
  )
}

export default SignIn
import { signInWithGooglePopup } from '../../utils/firebase/firebase.utils'

const SignIn = () => {
  const logGoogleUser = async () => {
    const response = await signInWithGooglePopup();
    console.log(response);
  };

  return (
    <div>
      <div>SignIn</div>
      <button onClick={logGoogleUser}>sign in with Google popup</button>
    </div>
  )
}

export default SignIn
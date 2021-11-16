import React,{useState} from "react";
import SignIn from "../components/SignIn";
import SignUp from "../components/Signup";

export default function Auth() {

	const [showSignIn, setShowSignIn] = useState(true)
	return (
		<>
			{showSignIn ? <SignIn setShowSignIn={setShowSignIn}/> : <SignUp setShowSignIn={setShowSignIn}/>}
		</>
	)
};

import React, { useRef } from 'react';
import { Box, Input, Text, Center, HStack } from "@chakra-ui/react";
import { signUp } from "../services/essentials";
import CircleIcon from "./filledIcon";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

function errorpopup() {
	const MySwal = withReactContent(Swal);
	MySwal.fire({
		icon: 'error',
		title: 'Oops...',
		text: 'Something went wrong!'
	})
}
function successpopup() {
	const MySwal = withReactContent(Swal);
	MySwal.fire({
		icon: 'success',
		title: 'Account Ragistered successfully'
	})
}
export default function Signup(props) {
	const name = useRef("");
	const email = useRef("");
	const password = useRef("");
	const password_confirmation = useRef("");

	const signUpHandler = (e) => {
		e.preventDefault();


		const payload = {
			name: `${name.current.value}`,
			email: `${email.current.value}`,
			password: `${password.current.value}`,
			password_confirmation: `${password_confirmation.current.value}`,
		};
		signUp(payload)
			.then(() => { successpopup() })
			.then((res) => console.log("res: ", res))
			.catch(() => { errorpopup() });
	}
	return (
		<>
			<Center>
				<CircleIcon mt="2rem" h="2.6rem" w="2.6em" color="lblack" />
			</Center>
			<Text align="center" mb="3rem" color="black" fontSize="0.6rem">RITZY</Text>
			<Text align="center" mb="1.5rem" color="lblack" fontSize="0.9rem" letterSpacing="0.2rem">BECAUSE TIME MATTERS</Text>
			<Center >
				<Box h="19.2rem" w="16rem" p="1rem" bg="white" style={{ borderRadius: "0.2rem", boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }}>
					<form>
						<Input size="md" variant="flushed" type="text" ref={name} placeholder="Name" />
						<Input size="md" variant="flushed" type="email" ref={email} placeholder="Email" />
						<Input size="md" variant="flushed" type="password" ref={password} placeholder="Password" />
						<Input size="md" mb="3.4rem" variant="flushed" type="password" ref={password_confirmation} placeholder="Confirm Password" />
						<Box w="14rem" h="1.8rem" as="button" bg="red" color="white" style={{ borderRadius: "0.2rem" }} onClick={signUpHandler}>SignUp</Box>
					</form>
					<HStack h="1.8rem" w="16rem" mt="0.6rem">
						<Box fontSize="0.8rem" pl="0.3rem" color="lblack">Already have an account?</Box>
						<Box fontSize="0.8rem" color="#0645AD" onClick={() => props.setShowSignIn(true)}>SignIn</Box>
					</HStack>
				</Box>
			</Center>

		</>
	);
};

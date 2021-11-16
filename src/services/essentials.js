import user from "../helpers/current-user"
import api from "../helpers/api";

export const signUp = async (payload) => {
	return await api().post("/auth/signup", payload).then(res=>{
		const userData={token:res.token,userInfo:res.message}
		user.set(userData)
	});
};

export const signInHandler = async (payload) =>
	await api().post("/auth/signin", payload )
	.then(res=>{
		const userData={token:res.token,userInfo:res.message}
		user.set(userData)
	});

export const getData = async (name) =>
	await api().get(`/products/${name}`)

export const searchAll = async(payload)=>{
	return await api().post("/products/search",payload)
}	


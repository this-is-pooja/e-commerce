import axios from "axios";
import CurrentUser from "./current-user";

const api = () => {
	const instance = axios.create({
		baseURL: "https://ritzy-backend.vercel.app",
		headers: { "content-Type": "application/json" },
	});
	if (CurrentUser.loggedin()) {
		instance.defaults.headers.common[
			"Authorization"
		] = `bearer ${CurrentUser.token()}`;
	}
	instance.interceptors.response.use(
		(response) => {
			return response.data;
		},
		(error) => {
			if (error.response.status === 403) {
				CurrentUser.logout(true);
			}
			return Promise.reject(error.response);
		}
	);
	return instance;
};

export default api;

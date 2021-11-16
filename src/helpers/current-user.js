class User {
	set = (data) => {
		const { token, userInfo } = data;
		userInfo.token = token;
		const encoded = Buffer(JSON.stringify(userInfo)).toString("hex");
		window.localStorage.setItem("USER", encoded);
	};

	get = () => {
		const user = window.localStorage.getItem("USER");
		if (user != null) {
			const decoded = Buffer.from(user, "hex");
			return JSON.parse(decoded);
		} else {
			return {};
		}
	};

	update = (data) => {
		const userInfo = this.get();
		data.token = userInfo.token;
		const encoded = Buffer(JSON.stringify(data)).toString("hex");
		window.localStorage.setItem("USER", encoded);
	};

	token = () => {
		const userInfo = this.get();
		return userInfo && userInfo.token;
	};

	loggedin() {
		return this.token() != null;
	}

	logout() {
		window.localStorage.clear();
	}
}

export default new User();

export const axiosRequest = (method, urlPath, data) => {
	const userJson = localStorage?.getItem(CURRENT_USER_LOCAL_STORAGE_KEY);
	const user = userJson && JSON?.parse(userJson);

	const axiosInstance = axios.create({
		baseURL: APIEndpoint,
		timeout: 50000,

		headers: {
			accept: `application/json`,
			"Content-Type": "multipart/form-data",
			Authorization: user?.token ? `Bearer ${user.token}` : "",
		},
	});

	return axiosInstance({
		method,
		url: urlPath,
		data,
	})
		.then((res) => {
			return res.data;
		})
		.catch((err) => {
			if (err.response) {
				throw err.response.data;
			} else if (err.request) {
				throw err.request;
			} else {
				throw new Error(`Error: ${err.message}`);
			}
		});
};
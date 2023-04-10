import { AxiosResponse } from 'axios';
import Api from '../'

const responseBody = (response: AxiosResponse) => response.data;

const requests = {
	get: (url: string) => Api.get(url).then(responseBody),
	post: (url: string, body: {}) => {
		return Api.post(url, body).then(responseBody)
	},
	put: (url: string, body: {}) => Api.put(url, body).then(responseBody),
	delete: (url: string) => Api.delete(url).then(responseBody),
};

export { requests as default, responseBody }


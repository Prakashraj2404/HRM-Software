/* eslint-disable @typescript-eslint/no-explicit-any */
import httpClient from './httpclient';
import { API_ENDPOINTS } from './endpoints';

class Client {
	auth = {
		login: (data: any) =>
			httpClient.post(API_ENDPOINTS.auth.login, data),
		verify_otp: (data: any) =>
			httpClient.post(API_ENDPOINTS.auth.verify_otp, data),
		register: (data: any) =>
			httpClient.post(API_ENDPOINTS.auth.register, data),
	};
	
}

export default new Client();

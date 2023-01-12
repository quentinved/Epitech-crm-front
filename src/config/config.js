export default {
	apiGateway: {
		REGION: 'eu-west-3',
		URL: 'https://8d9r6mzn0j.execute-api.eu-west-3.amazonaws.com/Stage/'
	},
	cognito: {
		REGION: 'eu-west-3',
		USER_POOL_ID: import.meta.env.VITE_USER_POOL_ID,
		APP_CLIENT_ID: import.meta.env.VITE_APP_CLIENT_ID,
		DOMAIN: 'epitech-openid.auth.eu-west-3.amazoncognito.com',
		SCOPE: ['email', 'openid'],
		REDIRECT_SIGN_IN:'http://localhost:5173/callback/',
		REDIRECT_SIGN_OUT: 'http://localhost:5173/',
		RESPONSE_TYPE: 'code'
	}
};
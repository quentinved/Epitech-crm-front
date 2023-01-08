export default {
	apiGateway: {
		REGION: 'eu-west-3',
		URL: ''
	},
	cognito: {
		REGION: 'eu-west-3',
		USER_POOL_ID: '',
		APP_CLIENT_ID: '',
		DOMAIN: '',
		SCOPE: ['email', 'openid'],
		REDIRECT_SIGN_IN: 'http://localhost:5173/callback/',
		REDIRECT_SIGN_OUT: 'http://localhost:5173/',
		RESPONSE_TYPE: 'code'
	}
};
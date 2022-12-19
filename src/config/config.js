export default {
	apiGateway: {
		REGION: 'eu-west-3',
		URL: 'https://lgza4xtw7h.execute-api.eu-west-3.amazonaws.com/Stage/'
	},
	cognito: {
		REGION: 'eu-west-3',
		USER_POOL_ID: 'eu-west-3_GZqditPh6',
		APP_CLIENT_ID: '1v6ulfhi705l3mlfgv4o7htdgb',
		DOMAIN: 'epitech-crm.auth.eu-west-3.amazoncognito.com',
		SCOPE: ['email', 'openid'],
		REDIRECT_SIGN_IN: 'http://localhost:5173/callback/',
		REDIRECT_SIGN_OUT: 'http://localhost:5173/',
		RESPONSE_TYPE: 'code'
	}
};
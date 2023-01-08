export default {
	apiGateway: {
		REGION: 'eu-west-3',
		URL: 'https://8d9r6mzn0j.execute-api.eu-west-3.amazonaws.com/Stage/'
	},
	cognito: {
		REGION: 'eu-west-3',
		USER_POOL_ID: 'eu-west-3_uGAFHQkLs',
		APP_CLIENT_ID: '726drblr85sqsjg7u1f452ohvh',
		DOMAIN: 'epitech-openid.auth.eu-west-3.amazoncognito.com',
		SCOPE: ['email', 'openid'],
		REDIRECT_SIGN_IN: 'http://localhost:5173/callback/',
		REDIRECT_SIGN_OUT: 'http://localhost:5173/',
		RESPONSE_TYPE: 'code'
	}
};
// REDIRECT_SIGN_IN: 'https://d215p6754l2htr.cloudfront.net/callback/',
// REDIRECT_SIGN_OUT: 'https://d215p6754l2htr.cloudfront.net/',
// REDIRECT_SIGN_IN: 'http://localhost:5173/callback/',
// REDIRECT_SIGN_OUT: 'http://localhost:5173/',
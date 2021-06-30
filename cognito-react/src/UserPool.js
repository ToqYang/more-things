import { CognitoUserPool } from 'amazon-cognito-identity-js';

const poolData = {
	UserPoolId: "us-west-1_AqSTndBLu",
	ClientId: "5g9t5v9o4clt52hqq45lldmfab"
}

export default new CognitoUserPool(poolData);

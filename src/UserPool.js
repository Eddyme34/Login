import {CognitoUserPool} from 'amazon-cognito-identity-js';

const UserpoolData = {//get user data
    UserPoolId: 'us-west-1_2TZ4JYvmj',
    ClientId: '7cmp80akplbscjfsgqmohu1rvu'
  };
  
  export default new CognitoUserPool(UserpoolData);
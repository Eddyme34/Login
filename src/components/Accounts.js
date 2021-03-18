import React, {createContext} from 'react';
import {CognitoUser, AuthenticationDetails} from 'amazon-cognito-identity-js';
import Pool from '../UserPool';

const AccountContext = createContext();

const authenticate = async (Username, Password) => 
    await new Promise((resolve, reject) => {
        const user = new CognitoUser({Username, Pool});
        const authentication = new AuthenticationDetails({Username, Password});
        
        user.authenticateUser(authentication, {
            onSuccess: data => {
                console.log('onSuccess:', data);
                resolve(data);
            },
    
            onFailure: err => {
                console.error('onFailure:', err);
                reject(err);
            },
    
            newPasswordRequired: data => {
                console.log('newPasswordRequired:', data);
                resolve(data);
            }
        });
    })

const Account = props => {
    const getSession = async () =>
        await new Promise((resolve, reject) => {
            const user = Pool.getCurrentUser();
            if (user){
                user.getSession(async (err, session) => {
                    if (err){
                        reject();
                    }
                    else{
                        resolve(session);
            }
        })
    }
            else{
                reject();
            }
        });

    const logout = () => {
        const user = Pool.getCurrentUser();
        if(user){
            user.signOut();
        }
    }

    return(
        <AccountContext.Provider value={{
            authenticate,
            getSession,
            logout
        }}>
            {props.children}
        </AccountContext.Provider>
    );
}


export {Account, AccountContext};
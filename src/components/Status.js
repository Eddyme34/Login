import React, {useState, useContext, useEffect} from 'react';
import {AccountContext} from './Accounts';

const Status = () => {
    const [status, setStatus] = useState(false);
    
    const {getSession} = useContext(AccountContext);
    const {logout} = useContext(AccountContext);

    useEffect(() => {
        getSession().then(session => {
                console.log('Session:', session);
                setStatus(true);
            })
    }, [])

    return(
        <div>
            {status ? (
                <div>
                    Thanks for logging in.
                    <button onClick={logout}>Log Out</button>
                </div>
            ):'Please login below. Reload to complete login process'}
        </div>
    )
}

export default Status;
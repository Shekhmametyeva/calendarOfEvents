import React, {useContext, useEffect, useState} from 'react';
import {useFetching} from "hooks/useFetching";
import UserApi from "API/services";
import {AuthContext} from "context";

const PersonalAccount = () => {
    const {userId} = useContext(AuthContext);
    const [user, setUser] = useState({});
    const [fetchUser, isLoading, error] = useFetching(async (...args)=> {
        // const user = await getUser(userId);
        const user = await UserApi.getUser(...args);
        setUser(user);
    });

    useEffect(() => {
        fetchUser(userId);
    }, []);

    return (
        <div>
            <h1>Личный кабинет</h1>
            {
                error
                    ? <p>Произошла ошибка ({error})</p>
                    : (!isLoading
                        ? (<div>
                            <h3>{user.getFullName()}</h3>
                            <p>birthDate {user.getBirthDate()}</p>
                            <p>email: {user.email}</p>
                            <p>tel: {user.getPhoneNumber()}</p>
                        </div>)
                        : (<div>Ожидание...</div>))
            }
        </div>
    );
};

export default PersonalAccount;
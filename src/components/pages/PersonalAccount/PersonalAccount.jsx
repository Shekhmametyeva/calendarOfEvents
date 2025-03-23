import React, {useContext, useEffect, useState} from 'react';
import {useFetching} from "../../../hooks/useFetching";
import {getUser} from "../../../API/services";
import {AuthContext} from "../../../context";

const PersonalAccount = () => {
    const {userId} = useContext(AuthContext);
    const [user, setUser] = useState({});
    const [fetchUser, isLoading, error] = useFetching(userId,async (userId)=> {
        const user = await getUser(userId);
        setUser(user);
    }, );

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
                            <h3>{[user.surname, user.name, user.patronymic].join(' ')}</h3>
                            <p>birth date {user.birthDate.split('-').reverse().join('.')}</p>
                            <p>email: {user.email}</p>
                            <p>tel: {user.phoneNumber}</p>
                        </div>)
                        : (<div>Ожидание...</div>))
            }
        </div>
    );
};

export default PersonalAccount;
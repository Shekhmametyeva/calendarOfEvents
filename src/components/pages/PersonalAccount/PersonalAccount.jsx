import React, {useEffect, useState} from 'react';
import {useFetching} from "../../../hooks/useFetching";
import {getUser} from "../../../API/Services";

const PersonalAccount = () => {
    const [user, setUser] = useState({});
    const [fetchUser, isLoading, error] = useFetching(async ()=> {
        const user = await getUser();
        setUser(user);
    }, );

    useEffect(() => {
        fetchUser()
    }, []);

    return (
        <div>
            <h1>Личный кабинет</h1>
            {
                error
                    ? <p>Произошла ошибка ({error})</p>
                    : (!isLoading
                        ? (<div>
                            <p>ФИО {[user.surname, user.name, user.patronymic].join(' ')}</p>
                            <p>email {user.email}</p>
                            <p>tel {user.phoneNumber}</p>
                            <p>bd {user.birthDate}</p>
                        </div>)
                        : (<div>Ожидание...</div>))

            }
        </div>
    );
};

export default PersonalAccount;
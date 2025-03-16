import React, {useEffect, useState} from "react";
import cl from './Main.module.css';
import {fetchUser} from '../../API/Services';

const Main = () => {
    const [user, setUser] = useState({});

    const [isLoading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const getUser = async () => {
        try {
            setLoading(true);
            const user = await fetchUser();
            setUser(user);
        } catch (err) {
            setError(err.message)
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        getUser();
    }, []);

    return (
        <main className={cl.main}>
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

        </main>
    )
}

export default Main;
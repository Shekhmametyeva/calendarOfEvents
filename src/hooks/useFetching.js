import {useState} from "react";

export const useFetching = (userId, callback) => {
    const [isLoading, setLoading] = useState(true);
    const [error, setError] = useState('');

    const fetching = async () => {
        try {
            setLoading(true);
            await callback(userId);
        } catch (err) {
            console.log(err);
            if (err.response && err.response.data && err.response.data.message) {
                setError(err.response.data.message);
            } else {
                setError(err.message)
            }
        } finally {
            setLoading(false);
        }
    }
    return [fetching, isLoading, error];
}
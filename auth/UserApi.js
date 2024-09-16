import ApiManager from "./ApiManager";

export const user_login = async data => {
    try {
        const result = await ApiManager('/auths/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: 'Bearer ${5fd4ff2756dfcfc2b0bdfab39478898e318d52fc}',
            },
            data: data,
        })
        return result;

    } catch (error) {
        return error.response.data;
    }
};
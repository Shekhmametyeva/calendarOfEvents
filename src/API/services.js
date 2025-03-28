import axios from 'axios';
import {parsePhoneNumber} from "libphonenumber-js";

export default class UserApi {
    static async getUser(userId) {
        const url = `${process.env.REACT_APP_API_URL}${process.env.REACT_APP_API_USER}`;
        const response = await axios.get(`${url}/${userId}`);
        return new UserDto(response.data);
    }
}

class UserDto {
    name;
    surname;
    patronymic;
    birthDate;
    email;
    phoneNumber;

    constructor(dataApiUser) {
        Object.assign(this, dataApiUser);
    }

    getFullName() {
        return `${this.surname} ${this.name} ${this.patronymic}`.toUpperCase();
    }
    getBirthDate() {
        return this.birthDate.split('-').reverse().join('.');
    }
    getPhoneNumber() {
        const phoneNumber = parsePhoneNumber(String(this.phoneNumber), 'RU');
        return phoneNumber.formatNational();
    }
}
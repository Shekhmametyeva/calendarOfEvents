import axios from 'axios';

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
    fullName;
    birthDate;
    email;
    phoneNumber;

    constructor(dataApiUser) {
        Object.assign(this, dataApiUser);
        this.birthDate = this.birthDate.split('-').reverse().join('.');
        this.fullName = `${this.surname} ${this.name} ${this.patronymic}`.toUpperCase();
        this.phoneNumber = `+7 ${this.phoneNumber.toString().slice(0,3)} ${this.phoneNumber.toString().slice(3,6)} ${this.phoneNumber.toString().slice(6,8)} ${this.phoneNumber.toString().slice(8, 10)}`;
    }
}
import bcrypt from 'bcryptjs';
import db from '../models/index';

const salt = bcrypt.genSaltSync(10);

let creatNewUser = async (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            let hashpasswordformCRUD = await hashUserPassword(data.password);
            await db.User.create({
                firstName: data.firstname,
                lastName: data.lastname,
                email: data.email,
                password: hashpasswordformCRUD,
                address: data.address,
                phoneNumber: data.phoneNumber,
                gender: data.gender === '1' ? true : false,
                roleId: data.roleId,

            })
            resolve('create user succeed');

        } catch (e) {
            reject(e);
        }
    })

}

let hashUserPassword = (password) => {
    return new Promise(async (resolve, reject) => {
        try {
            let hashpassword = await bcrypt.hashSync(password, salt);
            resolve(hashpassword);
        } catch (e) {
            reject(e);
        }

    })
}

module.exports = {
    creatNewUser: creatNewUser
}
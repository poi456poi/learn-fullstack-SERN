import db from '../models/index';
import CRUDservices from '../services/CRUDservices';



let getHomePage = async (req, res) => {
    try {
        let data = await db.User.findAll();
        return res.render('homepage.ejs', {
            data: JSON.stringify(data)
        });
    } catch (e) {
        console.log(e)
    }

}
let getCRUD = (req, res) => {
    return res.render('datausers.ejs')
}


let getpostCRUD = async (req, res) => {
    let mess = await CRUDservices.creatNewUser(req.body);
    console.log(req.body);
    return res.send('crud now')
}

// object: {
//     key: '',
//     value: ''
// }
module.exports = {
    getHomePage: getHomePage,
    getCRUD: getCRUD,
    getpostCRUD: getpostCRUD
}

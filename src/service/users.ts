const userDAO = require('../DAL/users');

class UserService {
    createUser(userDTO) {
        const { name, username, email, street, suite, city, zipcode, lat, lng, phone, website } = userDTO
        return userDAO.createUser(
            name,
            username,
            email,
            street,
            suite,
            city,
            zipcode,
            lat,
            lng,
            phone,
            website,
        );
    }
}

module.exports = new UserService();
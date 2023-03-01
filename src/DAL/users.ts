const db = require('../db/db')

class UserDAO {
    async createUser(name, username, email, street, suite, city, zipcode, lat, lng, phone, website) {
        const [id] = await db('users').insert({
            name: name,
            username: username,
            email: email,
            street: street,
            suite: suite,
            city: city,
            zipcode: zipcode,
            lat: lat,
            lng: lng,
            phone: phone,
            website: website
        })
        .returning('id');

        return id
    }
}

module.exports = new UserDAO()
const db = require('../db/db');

class UserDAO {
  private offset: number;
  private limit: number;

  constructor() {
    this.offset = 0;
    this.limit = 50;
  }

  async createUser(name, username, email, street, suite, city, zipcode, lat, lng, phone, website) {
    const [id] = await db('users')
      .insert({
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
        website: website,
      })
      .returning('id');

    return id;
  }

  async readAllUsers() {
    const userData = await db('users').select('*').offset(this.offset).limit(this.limit);
    if (userData.length === this.limit) {
      this.offset += this.limit;
    }
    return userData;
  }

  clearOffset() {
    this.offset = 0;
    return null;
  }

  async readUserById(userId) {
    const userData = await db('users').where('id', userId).first();
    return userData;
  }

  async updateUserById(id, userDTO) {
    const updatedUserData = await db('users').where('id', id).update(userDTO, 'id');
    return updatedUserData;
  }

  async deleteUserById(id) {
    const deletedUserId = await db('users').where('id', id).del('id');
    return deletedUserId;
  }
}

module.exports = new UserDAO();

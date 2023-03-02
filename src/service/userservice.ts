const userDAO = require('../DAL/userDAO');

class UserService {
  async createUser(userDTO) {
    const { name, username, email, street, suite, city, zipcode, lat, lng, phone, website } = userDTO;
    return await userDAO.createUser(name, username, email, street, suite, city, zipcode, lat, lng, phone, website);
  }

  async readAllUsers() {
    return await userDAO.readAllUsers();
  }

  clearOffset() {
    return userDAO.clearOffset();
  }

  async readUserById(id) {
    return await userDAO.readUserById(id)
  }
}

module.exports = new UserService();

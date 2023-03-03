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

  async updateUserById(id, userDTO) {
    return await userDAO.updateUserById(id, userDTO);
  }

  async deleteUserById(id) {
    return await userDAO.deleteUserById(id);
  }
}

module.exports = new UserService();

import { db as userdb } from '@/db';

class UserDAO {
  private offset: number;
  private limit: number;
  private dbName: string;

  constructor() {
    this.offset = 0;
    this.limit = 50;
    this.dbName = 'users';
  }

  async createUser(name, username, email, street, suite, city, zipcode, lat, lng, phone, website) {
    const [id] = await userdb(this.dbName)
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
    const userData = await userdb(this.dbName).select('*').offset(this.offset).limit(this.limit);
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
    const userData = await userdb(this.dbName).where('id', userId).first();
    return userData;
  }

  async updateUserById(id, userDTO) {
    const updatedUserData = await userdb(this.dbName).where('id', id).update(userDTO, 'id');
    return updatedUserData;
  }

  async deleteUserById(id) {
    const deletedUserId = await userdb(this.dbName).where('id', id).del('id');
    return deletedUserId;
  }
}

export const userDAO = new UserDAO();

import { devDB as userdb } from '@/db';

class UserDAO {
  private offset: number;
  private limit: number;
  private tableName: string;

  constructor() {
    this.offset = 0;
    this.limit = 50;
    this.tableName = 'users';
  }

  async createUser(name, username, email, street, suite, city, zipcode, lat, lng, phone, website) {
    const [id] = await userdb(this.tableName)
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
    const userData = await userdb(this.tableName).select('*').offset(this.offset).limit(this.limit);
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
    const userData = await userdb(this.tableName).where('id', userId).first();
    return userData;
  }

  async updateUserById(id, userDTO) {
    const updatedUserData = await userdb(this.tableName).where('id', id).update(userDTO, 'id');
    return updatedUserData;
  }

  async deleteUserById(id) {
    const deletedUserId = await userdb(this.tableName).where('id', id).del('id');
    return deletedUserId;
  }
}

export const userDAO = new UserDAO();

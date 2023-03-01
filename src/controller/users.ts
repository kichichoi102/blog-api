import Logger from "@/loaders/logger";

const userService = require('../service/users')

class UserController {
    async createUser(req, res) {
        try {
            const id = await userService.createUser(req.body)
            res.status(201).json(id);
        } catch (err) {
            Logger.error(err);
        }
    }
}

module.exports = new UserController();
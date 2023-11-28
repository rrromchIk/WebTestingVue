import axios from 'axios'

class UserDao {
    async createUser(userName) {
        console.log("Create user with userName: " + userName);
        try {
            const response =
                await axios.post(process.env.VUE_APP_API_ENDPOINT + "/users", {name: userName});
            return response.data.id;
        } catch (error) {
            console.error("Error creating user:", error.toString());
        }
    }
}

export default new UserDao();
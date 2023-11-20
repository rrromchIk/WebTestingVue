import axios from 'axios'

class UserDao {
    async createUser(userName) {
        try {
            const response =
                await axios.post("https://localhost:7003/api/users", {name: userName});

            // Check if the status is created (HTTP status code 201)
            if (response.status === 201) {
                const createdUserId = response.data.id;
                return createdUserId;
            } else {
                console.error("Unexpected status code:", response.status);
            }
        } catch (error) {
            console.error("Error creating user:", error.toString());
        }

    }

    async getUserById(userId) {
        try {
            return await axios.get("https://localhost:7003/api/users/" + userId);
        } catch (error) {
            console.error("Error fetching user:", error.toString());
        }
    }
}

export default new UserDao();
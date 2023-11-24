import axios from 'axios'

class UserTestDao {
    async createUserTest(userId, testId) {
        try {
            const response =
                await axios.post("https://localhost:7003/api/users/tests", {userId: userId, testId: testId});

            // Check if the status is created (HTTP status code 201)
            if (response.status === 201) {
                return true;
            } else {
                console.error("Unexpected status code:", response.status);
            }
        } catch (error) {
            console.error("Error creating user:", error.toString());
        }
    }

    async getUserTest(userId, testId) {
        try {
            return await axios.get("https://localhost:7003/api/users/tests/" + userId + "/" + testId);
        } catch (error) {
            console.error("Error fetching user tests:", error.toString());
        }
    }

    async getUserTests(userId) {
        try {
            return await axios.get("https://localhost:7003/api/users/tests/" + userId);
        } catch (error) {
            console.error("Error fetching user tests:", error.toString());
        }
    }
}

export default new UserTestDao();
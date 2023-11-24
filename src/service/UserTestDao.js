import axios from 'axios'

class UserTestDao {
    async createUserTest(userId, testId) {
        console.log("Create user test: {userId:" + userId + ", testId:" + testId + "}" )
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
            console.error("Error creating user test:", error.toString());
        }
    }

    async getUserTest(userId, testId) {
        console.log("Get user test: {userId:" + userId + ", testId:" + testId + "}")
        try {
            return await axios.get("https://localhost:7003/api/users/tests/" + userId + "/" + testId);
        } catch (error) {
            console.error("Error fetching user tests:", error.toString());
        }
    }

    async getUserTests(userId) {
        console.log("Get tests for userId: " + userId)
        try {
            return await axios.get("https://localhost:7003/api/users/tests/" + userId);
        } catch (error) {
            console.error("Error fetching user tests:", error.toString());
        }
    }
}

export default new UserTestDao();
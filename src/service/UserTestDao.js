import axios from 'axios'

class UserTestDao {
    async createUserTest(userId, testId) {
        console.log("Create user test: {userId:" + userId + ", testId:" + testId + "}")
        try {
            const response =
                await axios.post("https://localhost:7003/api/users/tests", {userId: userId, testId: testId});
            if (response.status === 201) {
                return true;
            }
        } catch (error) {
            console.error("Error creating user test:", error.toString());
        }
        return false;
    }

    async getUserTest(userId, testId) {
        console.log("Get user test: {userId:" + userId + ", testId:" + testId + "}")
        try {
            const response = await axios.get(process.env.VUE_APP_API_ENDPOINT + "/users/tests/" + userId + "/" + testId);
            return response.data;
        } catch (error) {
            console.error("Error fetching user tests:", error.toString());
        }
    }

    async getUserTests(userId) {
        console.log("Get tests for userId: " + userId)
        try {
            const response = await axios.get(process.env.VUE_APP_API_ENDPOINT + "/users/tests/" + userId);
            return response.data;
        } catch (error) {
            console.error("Error fetching user tests:", error.toString());
        }
        return [];
    }

    async completeTest(userId, testId) {
        console.log("Complete user test: {userId:" + userId + ", testId:" + testId + "}")
        try {
            const response =
                await axios.patch(process.env.VUE_APP_API_ENDPOINT + "/users/tests/complete/" + userId + "/" + testId);
            // Check if the status is created (HTTP status code 201)
            if (response.status === 200) {
                return true;
            } else {
                console.error("Unexpected status code:", response.status);
            }
        } catch (error) {
            console.error("Error completing user test:", error.toString());
        }
        return false;
    }
}

export default new UserTestDao();
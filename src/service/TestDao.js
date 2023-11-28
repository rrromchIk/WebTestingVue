import axios from 'axios'

class TestDao {
    async getAllTests() {
        console.log("Get all tests");
        try {
            const response = await axios.get(process.env.VUE_APP_API_ENDPOINT + "/tests");
            return response.data;
        } catch (error) {
            console.error("Error fetching tests:", error.toString());
        }
        return [];
    }

    async getTestById(testId) {
        console.log("Get test by id: " + testId);
        try {
            const response = await axios.get(process.env.VUE_APP_API_ENDPOINT + "/tests/" + testId);
            return response.data;
        } catch (error) {
            console.error("Error fetching test:", error.toString());
        }
        return {};
    }
}

export default new TestDao();
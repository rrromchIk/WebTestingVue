import axios from 'axios'

class TestDao {
    async getAllTests() {
        console.log("Get all tests");
        try {
            return await axios.get("https://localhost:7003/api/tests");
        } catch (error) {
            console.error("Error fetching tests:", error.toString());
        }
    }

    async getTestById(testId) {
        console.log("Get test by id: " + testId);
        try {
            return await axios.get("https://localhost:7003/api/tests/" + testId);
        } catch (error) {
            console.error("Error fetching tests:", error.toString());
        }
    }
}

export default new TestDao();
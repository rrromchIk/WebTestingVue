import axios from 'axios'

class QuestionDao {
    async getAnswersByQuestionId(questionId) {
        console.log("Get answers by question id: " + questionId)
        try {
            const response = await axios.get(process.env.VUE_APP_API_ENDPOINT + "/questions/" + questionId + "/answers");
            return response.data;
        } catch (error) {
            console.error("Error fetching answers:", error.toString());
        }
        return [];
    }
}

export default new QuestionDao();
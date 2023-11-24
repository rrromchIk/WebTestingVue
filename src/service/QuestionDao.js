import axios from 'axios'

class QuestionDao {
    async getAnswersByQuestionId(questionId) {
        console.log("Get answers by question id: " + questionId)
        try {
            return await axios.get("https://localhost:7003/api/questions/" + questionId + "/answers");
        } catch (error) {
            console.error("Error fetching answers:", error.toString());
        }
    }
}

export default new QuestionDao();
import axios from 'axios'

class UserAnswerDao {
    async createUserAnswer(userId, questionId, answerId) {
        try {
            console.log("Saving user answer: " + userId + " " + questionId + " " + answerId)
            const response =
                await axios.post(process.env.VUE_APP_API_ENDPOINT + "/users/answers", {
                    userId: userId,
                    questionId: questionId,
                    selectedAnswerId: answerId
                });
            if (response.status === 201) {
                return true;
            }
        } catch (error) {
            console.error("Error saving user answer:", error.toString());
        }
        return false;
    }

    async getUserAnswers(userId, questionId) {
        console.log("Get user answers: " + "{userId:" + userId + ", questionId:" + questionId + "}")
        try {
            const response = await axios.get(process.env.VUE_APP_API_ENDPOINT + "/users/answers/" + userId + "/" + questionId);
            return response.data;
        } catch (error) {
            console.error("Error fetching user answers:", error.toString());
        }
        return [];
    }
}

export default new UserAnswerDao();
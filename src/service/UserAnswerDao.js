import axios from 'axios'

class UserAnswerDao {
    async createUserAnswer(userId, questionId, answerId) {
        try {
            console.log("Saving user answer: " + userId + " " + questionId + " " + answerId)
            const response =
                await axios.post("https://localhost:7003/api/users/answers", {
                    userId: userId,
                    questionId: questionId,
                    selectedAnswerId: answerId
                });

            // Check if the status is created (HTTP status code 201)
            if (response.status === 201) {
                console.log("User answer saved with status code 201");
                return true;
            } else {
                console.error("Unexpected status code while saving user answer:", response.status);
            }
        } catch (error) {
            console.error("Error saving user answer:", error.toString());
        }
        return false;
    }

    async getUserAnswers(userId, questionId) {
        console.log("Get user answers: " + "{userId:" + userId + ", questionId:" + questionId + "}")
        try {
            return await axios.get("https://localhost:7003/api/users/answers/" + userId + "/" + questionId);
        } catch (error) {
            console.error("Error fetching user answers:", error.toString());
            return [];
        }
    }
}

export default new UserAnswerDao();
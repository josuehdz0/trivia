import { appState } from "../AppState.js";
import { Question } from "../Models/Question.js";
import { trivia_api } from "./AxiosService.js"

class QuestionsService{
  
  async getQuestions(){
      const res = await trivia_api('api.php?amount=10')
      console.log('what is the ',res.data);
      appState.questions = res.data.results.map(q => new Question(q))
      console.log(appState.questions);

  }




}

export const questionsService = new QuestionsService()
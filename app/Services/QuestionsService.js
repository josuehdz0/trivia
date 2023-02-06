import { trivia_api } from "./AxiosService.js"

class QuestionsService{
  
  async getQuestions(){
      const res = await trivia_api('api.php?amount=10')
      console.log('what is the ',res.data);

  }




}

export const questionsService = new QuestionsService()
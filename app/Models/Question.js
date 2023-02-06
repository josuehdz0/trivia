export class Question{
  constructor(data){
    this.category = data.category
    this.type = data.type
    this.difficulty = data.difficulty
    this.question = data.question
    this.correct_answer= data.correct_answer
    this.incorrect_answer = data.incorrect_answer
  }


  get QuestionCard(){
    return`
    <div class="row">
              <h2> ${this.question} </h2>
    </div>
    <div class="row">
              <div class="col-6">
                <h6>A.${this.correct_answer}</h6>
              </div>
              <div class="col-6">
                <h6>B.</h6>
              </div>
              <div class="col-6">
                <h6>C.</h6>
              </div>
              <div class="col-6">
                <h6>D.</h6>
              </div>
    </div>
    
    `


  }
}

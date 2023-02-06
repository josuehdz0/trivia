export class Question{
  constructor(data){
    this.category = data.category
    this.type = data.type
    this.difficulty = data.difficulty
    this.question = data.question
    this.correct_answer = data.correct_answer
    this.incorrect_answers = data.incorrect_answers
    this.incorrect_answers.push(this.correct_answer)
    this.incorrect_answers.sort((a, b) => 0.5 - Math.random())
    this.incorrect_answers.sort((a, b) => 0.5 - Math.random())
    this.incorrect_answers.sort((a, b) => 0.5 - Math.random())
    console.log(this.correct_answer);
  }


  get QuestionCard(){
    return`
    <div class="row pb-2">
              <h2> ${this.question} </h2>
    </div>
    <div class="row justify-content-evenly">
              ${this.answers}
              
    </div>
    
    `


  }

  get answers(){
    let letters = ['A', 'B', 'C', 'D']
    let template =''
    this.incorrect_answers.forEach((a, index) => {
      template += `
      <div class="col-5 p-1">
                <h6>${letters[index]}. ${a}</h6>
              </div>
      `
    });
    return template
  }


}

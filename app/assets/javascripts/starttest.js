$(document).ready(function(){
    

   quizContainer = document.getElementById("quiz");
   submitButton = document.getElementById("submit");
   myQuestions = [
    {
      question: "Do Other People Think Your Product is Cool",
      answers: {
        1: "Yes- we are growing at a fantastic rate!",
        // 2: "",
        // 3: "",
        // 4: "",
        5: "We are having mild growth",
        // 6: "",
        7: "People like the idea but no one has seen it yet",
        // 8: "",
        // 9: "",
        // 10: "",
        // 11: "",
        12: "We know people will like it, but we haven't tested it yet."
      }
    //   correctAnswer: "2"
    },
    {
      question: "Which buzzword do you use?",
      answers: {
        1: "Blockchain",
        2: "Machine Learning",
        3: "Augmented Reality",
        4: "Artificial Intelligence",
        5: "Drones and Automation",
        6: "Virtual Reality",
        7: "StartUp",
        // 8: "",
        // 9: "",
        // 10: "",
        // 11: "",
        12: "None"
      }
    //   correctAnswer: "2"
    },
    {
      question: "How many people are on your team?",
      answers: {
        1: "Growing everyday and everyone is on payroll.",
        // 2: "",
        3: "We have managers and they have people too",
        // 4: "",
        // 5: "",
        6: "We have some people, but I can't pay them yet",
        // 7: "",
        // 8: "",
        // 9: "",
        10: "Looking for a Co-Founder",
        // 11: "",
        12: "Me, Myself, and I"
      }
    //   correctAnswer: "2"
    },
    {
      question: "How long have you been in operation?",
      answers: {
        1: "3-5 years",
        // 2: "",
        3: "We launched recently",
        // 4: "",
        5: "1 year",
        // 6: "",
        // 7: "",
        // 8: "",
        9: "Almost 10 years",
        // 10: "",
        // 11: "",
        12: "20+ years"
      }
    //   correctAnswer: "2"
    },
    {
      question: "Do you have any competitors",
      answers: {
        1: "We invented something and own the patent",
        // 2: "",
        // 3: "",
        4: "We find a new one every day!",
        // 5: "",
        // 6: "",
        7: "Yes, but they don't do what we do! We have a competitive advantage.",
        // 8: "",
        9: "No Competitors",
        // 10: "",
        // 11: "",
        12: "What's a competitor?"
      }
    //   correctAnswer: "2"
    },
    {
      question: "How much money have you generated thus far?",
      answers: {
        1: "Millions and more, I tell you!",
        // 2: "",
        // 3: "",
        4: "We haven't yet figured how to turn a profit",
        // 5: "",
        // 6: "",
        7: "It pays the bills.",
        // 8: "",
        9: "None yet",
        // 10: "",
        // 11: "",
        12: "We're going to be huge!"
      }
    //   correctAnswer: "2"
    },
    {
      question: "How old is your technology stack?",
      answers: {
        1: "We are on the bleeding edge! Yesterday is too old.",
        // 2: "",
        // 3: "",
        4: "It's updated regularly",
        5: "Maybe a version or two old",
        6: "If it's not broken, no need to fix it...",
        7: "I don't need a stack.",
        // 8: "",
        9: "We need a Tech person.",
        // 10: "",
        // 11: "",
        12: "What's a stack?"
      }
    //   correctAnswer: "2"
    },
    {
      question: "What's your industry?",
      answers: {
        1: "Medicine or Biotech",
        2: "Gaming AR or FinTech",
        3: "Travel, Parenting, Families, Lifestyles",
        4: "Digital Marketing",
        5: "Education",
        6: "Green Tech",
        // 7: "",
        // 8: "",
        9: "Other"
        // 10: "",
        // 11: "",
        // 12: ""
      }
    //   correctAnswer: "2"
    },
    {
      question: "How are you currently funding your business?",
      answers: {
        1: "Pitch Competitions and Hackathon Winnings",
        2: "Venture Capital Funds",
        3: "Revenue Reinvestment",
        4: "Grant Money",
        5: "Angel Investment",
        // 6: "",
        // 7: "",
        // 8: "",
        9: "Personal Funds",
        // 10: "",
        // 11: "",
        12: "Debt Financing"
      }
    //   correctAnswer: "2"
    },
    {
      question: "What kind of revenue model do you focus on?",
      answers: {
        1: "Recurring revenue w/ membership",
        2: "High margins per unit",
        // 3: "",
        4: "Product licensing",
        5: "Fee per transaction",
        // 6: "",
        7: "High purchase value per customer due to sale cycle",
        // 8: "",
        // 9: "",
        // 10: "",
        // 11: "",
        12: "We need a business person"
      }
    //   correctAnswer: "2"
    }
  ];


  function buildQuiz() {
    // we'll need a place to store the HTML output
    const output = [];

    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => {
      // we'll want to store the list of answer choices
      const answers = [];

      // and for each available answer...
      for (letter in currentQuestion.answers) {
        // ...add an HTML radio button
        answers.push(
        `<label class="circle btn ">
            <input type="radio" name="question${questionNumber}" value="${letter}">
            ${currentQuestion.answers[letter]}
          </label>`    
        //   `<input value="${letter}" name="question${questionNumber}" class='circle'>${currentQuestion.answers[letter]}</>`
        );
      }

      // add this question and its answers to the output
      output.push(
        `<div class="question" style="margin-bottom:3%; width:100%;border-bottom:black 2px solid;"> ${currentQuestion.question} </div>
        <div class="answers btn-justified" style="margin-bottom:10%; width:100%;"> ${answers.join("")} </div>`
      );
    });

    // finally combine our output list into one string of HTML and put it on the page
    quizContainer.innerHTML = output.join("");
  }

  function showResults() {
    // gather answer containers from our quiz
    const answerContainers = quizContainer.querySelectorAll(".answers");

    
    // keep track of user's answers
    // let numCorrect = 0;
    let points = myQuestions.length * 12
    
    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => {
      // find selected answer
      const answerContainer = answerContainers[questionNumber];
      const selector = `input[name=question${questionNumber}]:checked`;
      const userAnswer = (answerContainer.querySelector(selector) || {} ).value || 12;
       points = points  - (12 - userAnswer);
      // if answer is correct
      
    });

    // show number of correct answers out of total
    phScore = points / myQuestions.length;
    $(".points").show();
    $.ajaxSetup({
        cache: true
    });
    $.getScript("/companies/new");  
    // $(".form").html("<%#= escape_javascript(render('home/company_form')).html_safe %>");
    $("#submit").hide();
    if (phScore == 1) {
        $(".points").html("your product has a 100% chance of being really cool");
        $("#quiz").hide();
    }else if(phScore < 7){
        $(".points").html("your product has a " + (1 - (phScore/12)).toFixed(2) *100 + "% chance of being pretty cool");
        $("#quiz").hide();
    }else if(phScore == 7){
        $(".points").html("your product has a 50% chance of being cool");
        $("#quiz").hide();
    }else if(phScore > 7){
        $(".points").html("your product has a " + (phScore/12).toFixed(2) *100 +"% chance of being too basic");
        $("#quiz").hide();
    };
  }

  

  // display quiz right away
  $(".start").click(function(){
    $(".start").fadeOut();
    buildQuiz();
    $("#submit").removeClass("hidden");
    // startQuiz();
    // phAssessment();
    // $(".question").show();
    // $(".scale").show();

    })
  
  

  // on submit, show results
  submitButton.addEventListener("click", showResults);
// })();

    // $(".scale").("")
})    
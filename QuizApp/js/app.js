const questions = [
    {
        'que': 'Which of the following is a markup language?',
        'a': 'HTML',
        'b': 'CSS',
        'c': 'JavaScript',
        'd': 'PHP',
        'correct': 'a',
    },
    {
        'que': 'What year was JavaScript launched?',
        'a': '1996',
        'b': '1995',
        'c': '1994',
        'd': 'none of the above',
        'correct': 'b',
    },
    {
        'que': 'What does CSS stands for?',
        'a': 'Computer Style Sheet',
        'b': 'Cascading Style Sheet',
        'c': 'Cascading Style Sheets',
        'd': 'Cascading Styles Sheet',
        'correct': 'b',
    },
    {
        'que': 'What is the primary purpose of a constructor function in JavaScript?',
        'a': 'To initialize the object',
        'b': 'To define methods for the object',
        'c': 'To destroy the object',
        'd': 'To manipulate the object',
        'correct': 'a',
    },
    {
        'que': 'What is th epurpose of git clone?',
        'a': 'Create a new Git repository',
        'b': 'Clone a remote repository to the local machine',
        'c': 'Push changes tp a remote repository',
        'd': 'Delete a git repository',
        'correct': 'b',
    },
    {
    'que': 'In JavaScript, what keyword is used to declare a variable?',
        'a': 'var',
        'b': 'int',
        'c': 'string',
        'd': 'declare',
        'correct': 'c',
    },
    {
        'que': 'What is the primary purpose of SQL?',
        'a': 'Style queries in databases',
        'b': 'Structure and manipulate databases',
        'c': 'Scripting in server-side apllications',
        'd': 'Specify layout for web pages',
        'correct':'b',
    },  
    {
        'que': 'Which data type is used for True/False values in Python?',
        'a': 'Bool',
        'b': 'Boolean',
        'c': 'TrueFalse',
        'd': 'TF',
        'correct':'a',
    },
    {
        'que': 'What is the role of "else" statement in an if-else condition?',
        'a': 'It executes when the condition is true',
        'b': 'It executes when the condition is false',
        'c': 'It always executes, regardless of the condition',
        'd': 'It defines a new condition',
        'correct':'b',
    },
    {
        'que': 'What is the purpose of "npm" command in Node.js?',
        'a': 'Node Package Manager',
        'b': 'New Project Manager',
        'c': 'New Package Module',
        'd': 'Null Pakage Module',
        'correct':'a',
    },
    {
        'que': 'In Java, which keyword is used for the inheritance of a class?',
        'a': 'super',
        'b': 'this',
        'c': 'extends',
        'd': 'inherit',
        'correct':'c',
    },
    {
        'que': 'What is the significance of the keyword "self" in Python classes?',
        'a': 'Refers too the current instance of the class',
        'b': 'Denotes a static variable',
        'c': 'Indicates a private method',
        'd': 'Represents a reserved keyword',
        'correct':'a',
    },
    {
        'que': 'Which of the following is not a valid data type in C++?',
        'a': 'long double',
        'b': 'short long',
        'c': 'unsigned int',
        'd': 'float',
        'correct':'b',
    },
    {
        'que': 'What is the purpose of the "else if" statement in programming?',
        'a': 'To handle multiple conditions',
        'b': 'To indicate the end of a loop',
        'c': 'To To declare a new variable',
        'd': 'To print output',
        'correct':'a',
    },
    {
        'que': 'Which sorting algorithm has the best average time complexity?',
        'a': 'QuickSort',
        'b': 'BubbleSort',
        'c': 'MergeSort',
        'd': 'InsertionSort',
        'correct':'c',
    },
    {
        'que': 'What does MVC stand for in the context of web development?',
        'a': 'Model View Control',
        'b': 'Multiple View Control',
        'c': 'Modular View Component',
        'd': 'Model View Component',
        'correct':'a',
    },
    {
        'que': 'In Python, what is the purpose of the "lambda" function?',
        'a': 'To declare a constant variable',
        'b': 'To create anonymous function',
        'c': 'To define a class',
        'd': 'To import external modules',
        'correct':'b',
    },
    {
        'que': 'Which opeartor is used for exponentiation in most programming languages??',
        'a': '^',
        'b': '**',
        'c': '//',
        'd': '%',
        'correct':'b',
    },
    {
        'que': 'What is th epurpose of the "docker-compose" tool?',
        'a': 'Container orcestration',
        'b': 'Version control',
        'c': 'Database Management',
        'd': 'Network configuration',
        'correct':'a',
    },
    {
        'que': 'In object-oriented programming, what is encapsulation?',
        'a': 'Combining multiple classes into one',
        'b': 'Hiding the internal implementation of an object',
        'c': 'Exposing all internal details of an object',
        'd': 'Inheriting from multiple classes',
        'correct':'b',
    }
]
// Declare a variable 'index' and initialize it with the value 0.
let index = 0;
let total = questions.length;
let right = 0, wrong = 0;
// Get the HTML element with the id "quesBox" and assign it to the constant variable 'quesBox'.
const quesBox = document.getElementById("quesBox")
// Select all elements with the class 'options' and store them in the variable 'optionInputs'.
const optionInputs = document.querySelectorAll('.options')
// Declare a function named 'loadQuestion'.
const loadQuestion = () => {
    if(index === total){
        return endQuiz()
    }
    reset();
      // Access the 'questions' array at the current index and assign it to the variable 'data'.
      const data = questions[index]
      // Log (display) the value of 'data' to the console.
      //   console.log(data)
      // Set the text content of the HTML element with id "quesBox" to the 'questions' property of the 'data' object.
      quesBox.innerText = `${index + 1}) - ${data.que}`;
      optionInputs[0].nextElementSibling.innerText = data.a;
      optionInputs[1].nextElementSibling.innerText = data.b;
      optionInputs[2].nextElementSibling.innerText = data.c;
      optionInputs[3].nextElementSibling.innerText = data.d;
    }

const submitQuiz = () => {
    const data = questions[index];
    const ans = getAnswer()

    // Check if an answer has benn selected
    if (!ans) {

        // Create a message element
        const messageElement = document.createElement('p');
        messageElement.textContent = "Please select an answer before proceeding to the next question.";
        messageElement.style.color = 'red'; 
        messageElement.style.backgroundColor = '#f8d7da'; 
        messageElement.style.border = '1px solid #f5c6cb'; 
        messageElement.style.padding = '10px'; 
        messageElement.style.borderRadius = '5px'; 
        messageElement.style.marginBottom = '10px'; 
        messageElement.style.marginTop = '10px'; 


        // Append the message element to a container (e.g., the 'box' div)
        document.getElementById('box').appendChild(messageElement);

        // Wait for a few seconds and then remove the message
        setTimeout(() => {
            messageElement.remove();
        }, 3000); // Remove the message after 3 seconds (3000 milliseconds)
        return;
    }

    console.log(ans, data.correct)
    if (ans === data.correct) {
       right++;
    }else{
       wrong++;
    }
    index++;
    loadQuestion();
    return;
} 

const getAnswer = () => {
    let answer;
    optionInputs.forEach(
        (input) => {
            if(input.checked){
                answer =  input.value;
                // console.log(input.value)
            //     console.log("yes")
            // } else {
            //     console.log("no")
            }
        }
    )
    return answer;
}

const reset = () => {
    optionInputs.forEach(
        (input) => {
            input.checked = false
        }
    )
}

const endQuiz = () => {
    document.getElementById("box").innerHTML = `
    <div style = "text-align: center">
    <h1>Thank you for playing the quiz</h1>
    <h2> ${right} / ${total} are correct </h2>
    </div>
    `
}

    
// Call the 'loadQuestion' function initially to load the first question.
loadQuestion();         
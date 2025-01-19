document.querySelectorAll('input, select').forEach(input => {
    input.addEventListener('input', function() {
        if (this.value) {
            this.classList.add('input-success'); // Ku dar fasalka
        } else {
            this.classList.remove('input-success'); // Ka saar fasalka
        }
    });
});

document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();
    let hasError = false;

    // Clear previous error messages
    document.querySelectorAll('.error').forEach(error => {
        error.textContent = '';
    });

    // Validation
    const nameValue = document.getElementById('name').value.trim();
    const emailValue = document.getElementById('email').value.trim();
    const landSizeValue = document.getElementById('landSize').value.trim();
    const phoneValue = document.getElementById('phone').value.trim();
    const addressValue = document.getElementById('address').value.trim();
    const regionValue = document.getElementById('region').value;
    const registrationDateValue = document.getElementById('registrationDate').value;

    // Check name (letters and spaces only)
    if (!/^[a-zA-Z\s]+$/.test(nameValue)) {
        document.getElementById('nameError').textContent = 'Magacaaga waa inuu ka kooban yahay xarfo iyo meel / Your name must contain letters and spaces only';
        hasError = true;
    }

    // Check email format
    if (!/\S+@\S+\.\S+/.test(emailValue)) {
        document.getElementById('emailError').textContent = 'Fadlan geli email sax ah / Please enter a valid email';
        hasError = true;
    }

    // Check land size (must be a number and positive)
    if (!/^\d+(\.\d+)?$/.test(landSizeValue) || landSizeValue <= 0) {
        document.getElementById('landSizeError').textContent = 'Cabbirka dhulka waa inuu noqdaa tiro togan / Land size must be a positive number';
        hasError = true;
    }

    // Check phone number (must be 4 digits)
    if (!/^\d{4}$/.test(phoneValue)) {
        document.getElementById('phoneError').textContent = 'Lambarka taleefanka waa inuu ka koobnaadaa afar nambar / Phone number must be exactly 4 digits';
        hasError = true;
    }

    // Check address
    if (!addressValue) {
        document.getElementById('addressError').textContent = 'Cinwaanka waa lagama maarmaan / Address is required';
        hasError = true;
    }

    // Check region
    if (!regionValue) {
        document.getElementById('regionError').textContent = 'Gobolka waa lagama maarmaan / Region is required';
        hasError = true;
    }

    // Check registration date (must be in the past or today)
    if (!registrationDateValue) {
        document.getElementById('registrationDateError').textContent = 'Fadlan geli taariikhda diiwaangelinta / Please enter the registration date';
        hasError = true;
    } else {
        const registrationDate = new Date(registrationDateValue);
        const today = new Date();
        if (registrationDate > today) {
            document.getElementById('registrationDateError').textContent = 'Taariikhda ayaa ka badnaan karta maanta / Date cannot be in the future';
            hasError = true;
        }
    }

    // Check terms
    if (!document.getElementById('terms').checked) {
        document.getElementById('termsError').textContent = 'Fadlan aqbal shuruudaha / Please accept the terms';
        hasError = true;
    }

    if (!hasError) {
        document.getElementById('successMessage').style.display = 'block';
        document.querySelector('.container').style.transform = 'scale(1.05)';
        setTimeout(() => {
            document.querySelector('.container').style.transform = 'scale(1)';
        }, 300);
        this.reset();
        // Ka saar fasalka guusha
        document.querySelectorAll('input, select').forEach(input => {
            input.classList.remove('input-success');
        });
    }
});

//menu

//scroll
        function scrollToTop() {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
//chapetrs of abdibaasid
function showExamples(chapterId) {
    const exampleSections = document.querySelectorAll('.example-buttons');
    exampleSections.forEach(section => section.style.display = 'none');
    document.getElementById(chapterId).style.display = 'block';
}


    function salaan() {
    alert("Hello java!");
}

function add() {
    let result = 5 + 3;  
    alert(result);
}

function isEqual() {
    let isEqual = 2 === 3; 
    alert(isEqual);
}

function bolean() {
    let isTrue = true && false;  
    alert(isTrue);
}

function type() {
    alert(typeof 4.5);
}

function implict() {
    let num = 10;
    let strNum = "5";
    alert(num > strNum);
}

function age() {
    let age = 25;
    alert("I am " + age + " years old.");
}

function string() {
    alert(typeof "John");
}

function functionname() {
    alert("Function called!");
}

function greet(name) {
    alert(`Hello, ${name}!`);
}

function sayHello() {
    alert("Hello!");
}

function xisaab() {
    let a = 5;
let b = 10;
let temp = a;
a = b;
b = temp;
alert("after swapping: a =" + a + ", b =" + b);
}

function hadi() {
    let age = 18;
if (age >= 18){
alert("you are junior");
} else {
alert("you are adult")
}
}

function grade() {
    let grade = 85;
if (grade >= 90){
alert("A");
} else if (grade >= 80){
alert("B");
} else {
alert("C");
}
}
function true_false() {
    let isadult = age >= 18 ? true : false;
alert(isadult);
}

function day() {
    let day = "jimco";
switch (day) {
case "sabti":
    alert("it's the start of the week.");
break;
case "sabti":
    alert("it's the end of the week.");
    break;
    default:
        alert("it's regular day.");
}
}

function search() {
    for (let i = 1; i <= 5; i++){
alert(i)
}
}

function shaqoo() {
    let i = 1;
do {
alert(i);
i++;
} while (i <= 5);
}

function well() {
    for (let i =0; i < 5; i++){
if (i === 3) {
    break;
}
alert(i);
}
}

function loop() {
    for (let i = 0; i < 5; i++){
if (i === 2){
    continue;
}
alert(i)
}
}
//CHAPTER FOUR
function functionName1() {
    alert("Hello, world!");
}
function functionName2() {
    alert("Hllo,world!");
}
function fun(a, b) {
    let result = a + b;
    alert(result);
}

function exampl() {
    var globalVariable = "I'm in global scope";
    alert(globalVariable);
}

function sayhello() {
    var localVariable = "I'm in local scope";
    alert(localVariable);
}

function block() {
    if (true) {
        let blockVariable = "I'm in block scope";
        alert(blockVariable);
    }
}

function doublenumber() {
    const doubleNumber = (number) => number * 2;
    alert(doubleNumber(3));
}

function famy() {
    const add = (a, b) => a + b;
    alert(add(3, 5));
}

function call() {
    function doSomething(callback) {
        alert("Doing something...");
        callback();
    }
    function onComplete() {
        alert("Operation complete!");
    }
    doSomething(onComplete);
}

function anonymous() {
    setTimeout(function() {
        alert("This is a callback executed after 2 seconds.");
    }, 2000);
}


// Chapter Seven Examples
  // Button click alert
  const button = document.getElementById("myButton");
  button.addEventListener("click", function() {
      alert("Button clicked");
  });

  // Hover effect for the element
  const element1 = document.getElementById("myelment1");
  element1.addEventListener("mouseover", function () {
      element1.style.backgroundColor = "green";
  });

  element1.addEventListener("mouseout", function () {
      element1.style.backgroundColor = "blue";
  });

  // Text input event listeners
  const textInput = document.getElementById("textInput");
  const outputDiv = document.getElementById("output");

  textInput.addEventListener("input", function (event) {
      outputDiv.innerText = `Input: ${event.target.value}`;
  });

  // Form validation and submission
  const textInput2 = document.getElementById("textInput2");
  const outputDiv2 = document.getElementById("output2");
  const form2 = document.getElementById("myForm2");

  form2.addEventListener("submit", function(event) {
      event.preventDefault(); // Prevents the default form submission
      if (textInput2.value.trim() === "") {
          updateOutput2("Input cannot be empty!", "invalid");
      } else {
          updateOutput2("Form submitted!", "valid");
      }
  });

  function updateOutput2(text, className) {
      outputDiv2.innerText = text;
      outputDiv2.className = className;
  }

  // List item click alert
  const parentList = document.getElementById("parentList");
  parentList.addEventListener("click", function(event) {
      if (event.target.tagName === "LI") {
          alert("Clicked on: " + event.target.innerText);
      }
  });
//login cbasid
function validateForm() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    let emailError = '';
    let passwordError = '';

    if (!email) {
        emailError = 'Email required';
    }
    if (password.length < 5) {
        passwordError = 'Password must be at least 5 characters';
    }

    document.getElementById('emailError').innerText = emailError;
    document.getElementById('passwordError').innerText = passwordError;

    if (!emailError && !passwordError) {
        alert('Form submitted successfully!');
        // Here you can add form submission logic
    }
}

//axmed chpters

//chapters
function showExample(example) {
    let output = "";

    switch (example) {
        case 'nestedLoop':
            output += "<strong>Nested Loop Example (Multiplication Table):</strong><br>";
            for (let i = 1; i <= 5; i++) {
                for (let j = 1; j <= 5; j++) {
                    output += `${i} x ${j} = ${i * j}<br>`;
                }
                output += "<br>";
            }
            break;
        case 'checkWeather':
            let temperature = 32;
            output += "<strong>If-Else Example (Weather Check):</strong><br>";
            if (temperature >= 30) {
                output += "It's a hot day! Stay hydrated.<br>";
            } else if (temperature >= 20) {
                output += "It's a nice day! Enjoy the weather.<br>";
            } else {
                output += "It's a cold day! Wear warm clothes.<br>";
            }
            break;
        case 'vehicleType':
            let vehicle = "Bike";
            output += "<strong>Switch-Case Example (Vehicle Type):</strong><br>";
            switch (vehicle) {
                case "Car":
                    output += "You selected a Car.<br>";
                    break;
                case "Bike":
                    output += "You selected a Bike.<br>";
                    break;
                case "Bus":
                    output += "You selected a Bus.<br>";
                    break;
                default:
                    output += "Unknown vehicle type.<br>";
            }
            break;
        case 'checkAge':
            let age = 16;
            output += "<strong>Ternary Example (Age Check):</strong><br>";
            let result = (age >= 18) ? "You are an adult." : "You are a minor.";
            output += result + "<br>";
            break;
        case 'reverseNumbers':
            output += "<strong>For Loop Example (Reverse Numbers):</strong><br>";
            for (let i = 10; i >= 1; i--) {
                output += i + "<br>";
            }
            break;
        case 'evenNumbers':
            let num = 2;
            output += "<strong>While Loop Example (Even Numbers):</strong><br>";
            while (num <= 20) {
                output += num + "<br>";
                num += 2;
            }
            break;
        case 'countdown':
            let count = 5;
            output += "<strong>Do-While Loop Example (Countdown):</strong><br>";
            do {
                output += `Counting down: ${count}<br>`;
                count--;
            } while (count > 0);
            output += "Blast off!<br>";
            break;
        case 'findAdults':
            const ages = [15, 18, 21, 12, 30];
            const adults = ages.filter(age => age >= 18);
            output += "<strong>Filter Example (Find Adults):</strong><br>";
            output += `Original Array: ${ages.join(", ")}<br>`;
            output += `Adults: ${adults.join(", ")}<br>`;
            break;
        case 'calculateProduct':
            const nums = [2, 3, 4];
            const product = nums.reduce((acc, curr) => acc * curr, 1);
            output += "<strong>Reduce Example (Calculate Product):</strong><br>";
            output += `Array: ${nums.join(", ")}<br>`;
            output += `Product: ${product}<br>`;
            break;
        case 'checkForNegative':
            const numbers = [3, 5, -1, 7];
            const hasNegative = numbers.some(num => num < 0);
            output += "<strong>Some Example (Check for Negative):</strong><br>";
            output += `Array: ${numbers.join(", ")}<br>`;
            output += `Contains Negative: ${hasNegative}<br>`;
            break;
        case 'allPositive':
            const positiveNumbers = [3, 5, 1, 7];
            const allPositive = positiveNumbers.every(num => num > 0);
            output += "<strong>Every Example (Check if All Positive):</strong><br>";
            output += `Array: ${positiveNumbers.join(", ")}<br>`;
            output += `All Positive: ${allPositive}<br>`;
            break;
    }

    document.getElementById('output').innerHTML = output; // Natiijada la muujiyo
}
function chapter1() {
    document.getElementById('output').innerHTML = "Hello, World!";
}
// Example 1
function example1() {
    let result = 5 + 3;  
    document.getElementById('output1').innerHTML = "Result of 5 + 3 is: " + result;
}

// Example 2
function example2() {
    let isEqual = 2 === 3; 
    document.getElementById('output2').innerHTML = "Is 2 equal to 3? " + isEqual;
}

// Example 3
function example3() {
    let count = 10;
    count += 5;  
    document.getElementById('output3').innerHTML = "Count after incrementing by 5 is: " + count;
}

// Example 4
function example4() {
    let num = 10;
    let strNum = "5";
    document.getElementById('output4').innerHTML = "Is 10 greater than 5? " + (num > Number(strNum));
}  

// Example 1: Swap Numbers
function waw() {
    let a = 5;
    let b = 8;
    let temp = a;
    a = b;
    b = temp;
    document.getElementById('output1').innerHTML = "After swapping: a = " + a + ", b = " + b;
}

// Example 2: Adult Check
function zuu() {
    let age = 18;
    let message = (age >= 18) ? 'You are an adult' : '';
    document.getElementById('output2').innerHTML = message;
}

// Example 3: Adult or Not
function wuu() {
    let age = 20;
    let message = (age >= 18) ? 'You are an adult' : 'You are not an adult';
    document.getElementById('output3').innerHTML = message;
}

// Example 4: Grade Evaluation
function saa() {
    let grade = 90;
    let result;
    if (grade >= 90) {
        result = 'A+';
    } else if (grade >= 80) {
        result = 'B+';
    } else if (grade >= 70) {
        result = 'B-';
    } else if (grade >= 65) {
        result = 'C+';
    } else {
        result = 'C';
    }
    document.getElementById('output4').innerHTML = "Grade: " + result;
}

// Example 5: Day of the Week
function qaa() {
    let day = 'saturday';
    let message;
    switch (day) {
        case "saturday":
            message = 'It\'s the first day of the week';
            break;
        case "wednesday":
            message = 'It\'s the fourth day of the week';
            break;
        default:
            message = 'It\'s another day';
    }
    document.getElementById('output5').innerHTML = message;
}

// Example 6: For Loop
function dxx() {
    let output = '';
    for (let i = 1; i <= 5; i++) {
        output += i + '<br>';
    }
    document.getElementById('output6').innerHTML = output;
}

// Example 7: While Loop with Break
function dff() {
    let output = '';
    let i = 1;
    while (i <= 10) {
        output += i + '<br>';
        if (i === 6) {
            break;
        }
        i++;
    }
    document.getElementById('output7').innerHTML = output;
}

// Example 8: Do-While Loop
function dee() {
    let output = '';
    let i = 1;
    do {
        output += i + '<br>';
        i++;
    } while (i <= 10);
    document.getElementById('output8').innerHTML = output;
}

// Example 9: While Loop with Break
function dqq() {
    let output = '';
    let i = 1;
    while (i <= 10) {
        output += i + '<br>';
        if (i === 6) {
            break;
        }
        i++;
    }
    document.getElementById('output9').innerHTML = output;
}

// Example 10: While Loop with Continue
function sqq() {
    let output = '';
    let i = 1;
    while (i <= 10) {
        i++;
        if (i === 6) {
            continue;
        }
        output += i + '<br>';
    }
    document.getElementById('output10').innerHTML = output;
}

// Example 11: Nested For Loop
function dww() {
    let output = '';
    for (let i = 0; i < 5; i++) {
        for (let j = 0; j < 5; j++) {
            output += `(${i},${j})<br>`;
        }
    }
    document.getElementById('output11').innerHTML = output;
}
// Example 1: Function Declaration
function kii() {
    function functionName() {
        console.log("Hello World");
    }
    functionName(); // Call the function to see the output
    document.getElementById('output1').innerHTML = "Function declared and called: Check console.";
}

// Example 2: Greeting Function
function kll() {
    function greet(name) {
        console.log(`Hello, ${name}!`);
    }
    greet("FAIZA");
    document.getElementById('output2').innerHTML = "Greeting function executed: Check console.";
}

// Example 3: Function with Parameter
function lpp() {
    function functionName(par) {
        return par; // Assuming you want to return the parameter
    }
    let value = functionName("Parameter Value");
    document.getElementById('output3').innerHTML = "Function with parameter executed: " + value;
}

// Example 4: Addition Function
function loo() {
    function add(a, b) {
        return a + b;
    }
    const result = add(3, 4);
    document.getElementById('output4').innerHTML = "Result of addition: " + result;
}

// Example 5: Block Scope
function yuu() {
    if (true) {
        let blockVariable = "I'm in block scope";
        console.log(blockVariable);
        document.getElementById('output5').innerHTML = blockVariable;
    }
}

// Example 6: Arrow Function for Doubling
function mmm() {
    const doubleNumber = (number) => {
        return number * 2;
    }
    let result = doubleNumber(3);
    document.getElementById('output6').innerHTML = "Double of 3 is: " + result;
}

// Example 7: Arrow Function Addition
function fff() {
    const add = (a, b) => a + b;
    let result = add(3, 5);
    document.getElementById('output7').innerHTML = "Result of addition: " + result;
}

// Example 8: Callback Function
function hhh() {
    function doSomething(callback) {
        console.log("Doing something...");
        callback();
    }
    function onComplete() {
        console.log("Operation complete!");
    }
    doSomething(onComplete);
    document.getElementById('output8').innerHTML = "Callback function executed: Check console.";
}

// Example 9: Arrow Function with setTimeout
function sss() {
    setTimeout(() => {
        console.log("This is an arrow function callback executed after 2 seconds");
    }, 2000);
    document.getElementById('output9').innerHTML = "Arrow function scheduled: Check console after 2 seconds.";
}

// Example 10: Function Declaration with Parameters
function fai() {
    function functionName(parameters) {
        return parameters; // Assuming you want to return the parameter
    }
    let value = functionName("Parameter Value");
    document.getElementById('output10').innerHTML = "Function with parameters executed: " + value;
}
// Example 1: Array Literal
function fzo() {
    const names = ['ahmed', " " + 'mohammed', " " + 'ali'];
    console.log(names);
    document.getElementById('output1').innerHTML = `Names: ${names.join(', ')}`;
}

// Example 2: Empty Array
function ccc() {
    const myArray = [];
    myArray[0] = "first";
    myArray[1] = "second";
    console.log(myArray);
    document.getElementById('output2').innerHTML = `Array: ${myArray.join(', ')}`;
}

// Example 3: Array.from()
function sss() {
    const arrayFromStr = Array.from("hello"); 
    console.log(arrayFromStr);
    document.getElementById('output3').innerHTML = `Array from string: ${arrayFromStr.join(', ')}`;
}

// Example 4: Spread Operator
function aaa() {
    const sourceArray = [1, 2, 3];
    const newArray = [...sourceArray];
    console.log(sourceArray);
    console.log(newArray);
    document.getElementById('output4').innerHTML = `Source Array: ${sourceArray.join(', ')}; New Array: ${newArray.join(', ')}`;
}

// Example 5: Array Initializer
function www() {
    const newArray = new Array(3);
    console.log(newArray);
    document.getElementById('output5').innerHTML = `Array Initialized: ${newArray}`;
}

// Example 6: Array.of()
function ttt() {
    const myArray = Array.of(1, 2, 3); 
    console.log(myArray);
    document.getElementById('output6').innerHTML = `Array.of(): ${myArray.join(', ')}`;
}

// Example 7: Adding Element
function ppp() {
    const fruits = ["banana", "mango"];
    fruits.unshift("apple");
    console.log(fruits);
    document.getElementById('output7').innerHTML = `Fruits after adding: ${fruits.join(', ')}`;
}

// Example 8: Removing Element
function rrr() {
    const qudaar = ["banana", "mango", "cherry"];
    qudaar.pop();
    console.log(qudaar);
    document.getElementById('output8').innerHTML = `Fruits after removing: ${qudaar.join(', ')}`;
}

// Example 9: For Loop
function uuu() {
    const rwww = ["banana", "mango", "cherry"];
    let output = rwww.map(fruit => fruit).join(', ');
    console.log(output);
    document.getElementById('output9').innerHTML = `Fruits in For Loop: ${output}`;
}

// Example 10: Map Method
function qaa() {
    const numbers = [1, 2, 3];
    const squaredNumbers = numbers.map((num) => num * num); 
    console.log(squaredNumbers);
    document.getElementById('output10').innerHTML = `Squared Numbers: ${squaredNumbers.join(', ')}`;
}

// Example 11: ForEach Method
function eee() {
    const fruits = ["banana", "mango", "cherry"];
    fruits.forEach(function (fruit) {
        console.log(fruit);
    });
    document.getElementById('output11').innerHTML = `Fruits logged in ForEach: Check console.`;
}

// Example 12: For...of Loop
function ytt() {
    const fruits = ["banana", "mango", "cherry"];
    let output = '';
    for (const fruit of fruits) {
        output += fruit + ' ';
    }
    console.log(output);
    document.getElementById('output12').innerHTML = `Fruits in For...of Loop: ${output}`;
}

// Example 13: Accessing Index with ForEach
function juu() {
    const fruits = ["banana", "mango", "cherry"];
    fruits.forEach((fruit, index) => {
        console.log(`fruit at index ${index} is ${fruit}`);
    });
    document.getElementById('output13').innerHTML = `Fruits indexed: Check console.`;
}

// Example 14: Object Constructor
function ilhan() {
    function Baniaadam(firstName, lastName, age) { 
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    const baniaadam = new Baniaadam("mohamed", "ali", 30);
    console.log(baniaadam);
    document.getElementById('output14').innerHTML = `Object created: ${JSON.stringify(baniaadam)}`;
}

// Example 15: Object Literal
function qrr() {
    const qof = {
        firstName: "mohamed",
        lastName: "ali",
        age: 30
    };
    console.log(qof);
    document.getElementById('output15').innerHTML = `Object Literal: ${JSON.stringify(qof)}`;
}

// Example 16: Class Example
function haan() {
    class Dad {
        constructor(firstName, lastName, age) {
            this.firstName = firstName;
            this.lastName = lastName;
            this.age = age;
        }
    }
    const dad = new Dad("mohamed", "ali", 30);
    console.log(dad);
    document.getElementById('output16').innerHTML = `Class Object: ${JSON.stringify(dad)}`;
}

// Example 17: For...in Loop
function sawd() {
    const sus = {
        name: 'faiza',
        education_level: 'bachelor',
        gra_status: 'active'
    };
    for (let index in sus) {
        console.log(`${index}: ${sus[index]}`);
    }
    document.getElementById('output17').innerHTML = `Object properties logged: Check console.`;
}

// Example 18: Object Properties
function naw() {
    const dad = {
        firstName: "mohamed",
        lastName: "ali",
        age: 30,
        email: "mohamed.ali@email.com"
    };
    console.log(dad.firstName);
    console.log(dad["lastName"]);
    dad.age = 31;
    console.log(dad);
    document.getElementById('output18').innerHTML = `Updated Object: ${JSON.stringify(dad)}`;
}

// Example 19: Object Method
function waal() {
    const fai = {
        firstName: "mohamed",
        lastName: "ali",
        getFullName: function () {
            return this.firstName + " " + this.lastName;
        },
    };
    console.log(fai.getFullName());
    document.getElementById('output19').innerHTML = `Full Name: ${fai.getFullName()}`;
}

// Example 20: JSON Object
function poop() {
    const test = {
        "name": "Jonson",
        "city": "New York",
        "age": 30
    };
    console.log(test);
    document.getElementById('output20').innerHTML = `JSON Object: ${JSON.stringify(test)}`;
}

// Example 21: JSON with Arrays
function jiij() {
    const wew = {
        "name": "mohamed",
        "age": 30,
        "hobbies": ["reciting quran", "praying", "reading", "swimming"]
    };
    console.log(wew);
    document.getElementById('output21').innerHTML = `JSON with Arrays: ${JSON.stringify(wew)}`;
}

// Example 22: Parsing JSON
function huuuh() {
    const jsonString2 = '{"name": "mohammed ali", "age": 30}'; 
    const jsonObject2 = JSON.parse(jsonString2);
    console.log(jsonObject2.name); 
    document.getElementById('output22').innerHTML = `Parsed JSON: ${JSON.stringify(jsonObject2)}`;
}

// Example 23: Stringifying JSON
function uuui() {
    const person = {name: "mohammed ali", age: 30};
    const jsonString3 = JSON.stringify(person);
    console.log(jsonString3);
    document.getElementById('output23').innerHTML = `Stringified JSON: ${jsonString3}`;
}
    // Example 1
    function jjj() {
        const outputDiv = document.getElementById('output');
        outputDiv.innerText = "nawaal\nmohammed\nnour";
    }

    // Example 2
    function ggg() {
        let time = new Date().getHours();
        let message;

        switch (time) {
            case 5:
                message = "5:00 AM";
                break;
            case 6:
                message = "6:00 AM";
                break;
            case 7:
                message = "7:00 AM";
                break;
            case 8:
                message = "8:00 AM";
                break;
            case 9:
                message = "9:00 AM";
                break;
            case 10:
                message = "10:00 AM";
                break;
            case 11:
                message = "11:00 AM";
                break;
            case 12:
                message = "12:00 PM";
                break;
            case 13:
                message = "1:00 PM";
                break;
            case 14:
                message = "2:00 PM";
                break;
            case 15:
                message = "3:00 PM";
                break;
            case 16:
                message = "4:00 PM";
                break;
            case 17:
                message = "5:00 PM";
                break;
            default:
                message = "Time is outside of the range 5:00 AM to 5:00 PM.";
                break;
        }
        document.getElementById('output').innerText = message;
    }

    // Example 3
    function uuu() {
        let num1 = parseFloat(prompt("Enter first number: "));
        let num2 = parseFloat(prompt("Enter second number: "));
        let operator = prompt("Enter operator (+, -, *, /): ");

        let result;

        switch (operator) {
            case "+":
                result = num1 + num2;
                break;
            case "-":
                result = num1 - num2;
                break;
            case "*":
                result = num1 * num2;
                break;
            case "/":
                if (num2 !== 0) {
                    result = num1 / num2;
                } else {
                    result = "Cannot divide by zero!";
                }
                break;
            default:
                result = "Invalid operator!";
                break;
        }

        document.getElementById('output').innerText = "Result: " + result;
    }
// lap
 // Lap 1
 function nows() {
    const outputDiv = document.getElementById("output");
    outputDiv.innerHTML = "Ali<br>Jamac<br>Ali";
}

// Lap 2
function hi() {
    const currentHour = new Date().getHours();
    const currentMinute = new Date().getMinutes();
    const outputDiv = document.getElementById("output");

    let timeMessage = '';
    switch (true) {
        case (currentHour < 5):
            timeMessage = "It's before 5:00 AM.";
            break;
        case (currentHour === 5 && currentMinute === 0):
            timeMessage = "It's 5:00 AM.";
            break;
        case (currentHour < 12):
            timeMessage = `It's ${currentHour}:${currentMinute < 10 ? '0' + currentMinute : currentMinute} AM.`;
            break;
        case (currentHour === 12):
            timeMessage = `It's 12:${currentMinute < 10 ? '0' + currentMinute : currentMinute} PM.`;
            break;
        default:
            timeMessage = `It's ${currentHour - 12}:${currentMinute < 10 ? '0' + currentMinute : currentMinute} PM.`;
    }

    outputDiv.innerHTML = timeMessage;
}

// Lap 3: Calculator

function showCalculator() {
    const calculator = document.getElementById('calculator');
    calculator.style.display = calculator.style.display === 'none' || calculator.style.display === '' ? 'block' : 'none';
}

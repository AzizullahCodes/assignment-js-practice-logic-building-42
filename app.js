// js problem solving assignment no 42 
/*_______________________ Question no 1 ______________________
 Save and Display a Username
Objective:
Ask the user for their name using prompt() and save it in local storage. Then 
display a greeting message like "Welcome back, [name]" if they visit the page again.

Hint: Use localStorage.getItem() to check if the name already exists.
_________________________ Answer ____________________________*/ 
// let name = prompt('enter your name');
// localStorage.setItem('info',name);
// let get = localStorage.getItem('info');
// console.log(get)
/*_______________________ Question no 2 ______________________
save data by input local storage and show on dom
_________________________ Answer ____________________________*/
// let form = document.getElementById('studentForm');
// let output = document.getElementById('output');
// function submit(){let form = document.getElementById('studentForm');
//     let getid = document.getElementById('id').value; 
//     let getName = document.getElementById('name').value;
//     let getClass = document.getElementById('class').value;
//     console.log(getid);
//     console.log(getName);
//     console.log(getClass)

// let obj = {id : document.getElementById('id').value,
//     name : document.getElementById('name').value,
//     class : document.getElementById('class').value,
// }

// console.log(obj)


// let output = document.getElementById('output');
// output = obj;}
// function submit(){let getid = document.getElementById('id').value;
//     let getName = document.getElementById('name').value;
//     let getClass = document.getElementById('class').value;

//     let obj = {id : getid,
//         name : getName,
//         class : getClass
//     }
//     console.log(obj,typeof obj);
//     let string = JSON.stringify(obj);
//     localStorage.setItem('Mian',string)
//     console.log(string,typeof string);
//     let origional = JSON.parse(string);
//     console.log(origional, typeof origional);
//     let getFromLocalStorage = localStorage.getItem('Mian');
//     console.log(getFromLocalStorage);
//     let output = document.getElementById('display');
//     output.innerHTML = `<p>ID: ${obj.id}</p>
//     <p>Name: ${obj.name}</p>
//     <p>Class: ${obj.class}</p>`

// }

/*_______________________ Question no 3 ______________________
Math.pow()
_________________________ Answer ____________________________*/
// let a = 5;
// let ans = Math.pow(a,2);
// console.log(ans)
// let a = 5;
// let ans = a ** 2;
// console.log(ans)
// let number = 3;
//        let ans = number ** 2;
//        console.log(ans);
/*_______________________ Question no 4 ______________________
template literals 
_________________________ Answer ____________________________*/
// let firstName = 'Muhammad';
// let lastName = 'Ikram';
// let fullName = `My full Name is <br>
// ${firstName} ${lastName}`;
// document.getElementById('display').innerHTML = fullName

/*_______________________ Question no 5 ______________________
create obj by input  and save data to local storage and get data by dom
_________________________ Answer ____________________________*/
// let obj = [{id:1,
//     name : 'Aziz'
// },
// {id : 2,
//     name : 'Hadi'
// },{id:3,
//     name :'karim'
// }]
// console.log(obj);
// let data = [];
// let enter = Number(prompt('enter id'));
// for(let i = 0;i < obj.length;i++){
//     if(obj[i].id === enter){data = obj[i];
//     break;
// }}
// console.log(data);

// let getDiv = document.getElementById('display');
// getDiv.innerHTML = `<p>Id: ${data.id}</p>
// <p>Name: ${data.name}</p>`


/*_______________________ Question no 6 ______________________
push data to array
_________________________ Answer ____________________________*/
//  let array = [];
// function submitting(){let getInupt = document.getElementById('userinput').value;
   
//     if(array !== ' '){array.push(getInupt);
//          document.getElementById('display').innerHTML = array + '<br>'
//     }
   
// }

/*_______________________ Question no 7 ______________________
Lucky Bidding Game
_________________________ Answer ____________________________*/
// function biding(){let getCoin = Number(document.getElementById('heading').innerHTML);

//     let getGuessNumber = Number(document.getElementById('userinput').value);

//     document.getElementById('display1').innerHTML = getGuessNumber;

//     let getbidingAmount = Number(document.getElementById('amountforbidding').value);

    

//     let random = Math.floor(Math.random()*2)+1;

//     document.getElementById('display2').innerHTML = random;
//     // call function inside here 
//     ans(getCoin,getGuessNumber,getbidingAmount,random);
//     // reload 
//     setTimeout(function() {
//     location.reload();
//   }, 4000);
// }
// // function 2 we create here 
// function ans(getCoin,getGuessNumber,getbidingAmount,random){let result;
//     if(getGuessNumber === random){result = getCoin + getbidingAmount;}
//     else{result = getCoin - getbidingAmount;}
//     document.getElementById('p3').innerHTML = result;
// }
/*_______________________ Question no 8 ______________________
biding game
_________________________ Answer ____________________________*/


// now we create biding function 
// function biding(){let coin = Number(document.getElementById('heading').innerText);
    
//     var getbidingNumber = Number(document.getElementById('bidding').value);
//     var getbidingAmount = Number(document.getElementById('bidding-amount').value);
//     let random = Math.floor(Math.random()*3)+1;
//     let getp1 = document.getElementById('p1');
//     let getp2 = document.getElementById('p2');
//     let getp3 = document.getElementById('p3');
//     getp1.innerHTML = 'Bidding Number' + ' ' + getbidingNumber;
//     getp2.innerHTML = 'Bidding Amount' + ' ' + getbidingAmount;
//     getp3.innerHTML = 'random' + ' ' + random; 
//     // now apply condition 
    
// b(getbidingAmount,getbidingNumber,random,coin);

// }

// // second function
// function b(getbidingAmount,getbidingNumber,random,coin){let result;
//     if(getbidingNumber === random){ result = getbidingAmount + coin;
//         console.log(result)
        
//     }
//     else{result = coin - getbidingAmount;
//         console.log(result)
//     }

//     }

/*_______________________ Question no 9 ______________________
Highlight Next Element
Objective:
When you click a button, the next sibling element of a paragraph should change its background color.

HTML Sample:

<p>This is a paragraph.</p>
<div>This is a next sibling.</div>
<button onclick="highlightNext()">Highlight Next</button>
JS Task:
Write a function highlightNext() that changes the background of the next sibling to yellow.

_________________________ Answer ____________________________*/ 
// function highlightNext(){let get = document.getElementById('p1');
//     let getnext = get.nextElementSibling;
//     getnext.style.color = 'yellow'
// }

/*_______________________ Question no 10 ______________________
 Get Text of Previous Sibling
Objective:
When you click a button, get the text content of the previous sibling of a heading and show it in an alert.

HTML Sample:

<p>This is the previous paragraph.</p>
<h3>This is a heading</h3>
<button onclick="showPreviousText()">Show Previous Text</button>
JS Task:
Write showPreviousText() that alerts the text of the paragraph.
_________________________ Answer ____________________________*/
// function showPreviousText(){let get = document.getElementById('center');
//     let needed = get.previousElementSibling.innerHTML;
//     alert(needed)
// }

/*_______________________ Question no 11 ______________________
previousElementSibling and nextElementSiblings
_________________________ Answer ____________________________*/
// let get = document.getElementById('center');
// console.log(get);
// // let getprevious = get.previousElementSibling.previousElementSibling.previousElementSibling;
// let getprevious = get.previousElementSibling.innerHTML;

// console.log(getprevious);
// let next = get.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling;
// console.log(next)
/*_______________________ Question no 12 ______________________
previousElementSibling and nextElementSiblings
_________________________ Answer ____________________________*/
// let get = document.getElementById('center');
//  let getprevious = get.previousElementSibling; output = contact
//  let getprevious = get.previousElementSibling.previousElementSibling; output = Help
//  let getprevious = get.previousElementSibling.previousElementSibling.previousElementSibling; output = null;
//  console.log(getprevious)
// let getNext = get.nextElementSibling; 
// console.log(getNext)


/*_______________________ Question no 13 ______________________
variable scope
_________________________ Answer ____________________________*/
// let name = 'aziz';
// function greeting(){console.log('1',name)}
// greeting()
// console.log('2',name)
// function test(){var name = 'aziz';
//     console.log(name)
// }
// test()
// console.log(name)
// if(true){var x = 20;
//     console.log(x)
// }
// console.log(x)

/*_______________________ Question no 14 ______________________
: Block Scope with let
📝 Objective: Understand that let is block-scoped.

{
  let x = 10;
  console.log(x); // What will this print?
}
console.log(x); // What will happen here?
❓Question:

What do you expect to see in both console.log() lines?

Try changing let to var and see the difference.
_________________________ Answer ____________________________*/
// {let x = 10;
//     console.log(x)
// }
// console.log(x)


/*_______________________ Question no 15 ______________________
Function Scope with var
📝 Objective: Learn that var is function-scoped.

function showVar() {
  if (true) {
    var a = 20;
  }
  console.log(a); // Will this work?
}
showVar();
console.log(a); // Will this work?
❓Try this:

Replace var with let. What happens?


_________________________ Answer ____________________________*/
// function showVar(){if(true){var a = 20;}
// console.log(a)}
// showVar();
// console.log(a)

/*_______________________ Question no 16 ______________________
Global vs Local Scope
📝 Objective: Understand the difference between global and local variables.
let message = "Hello, World!";
function greet() {
  let message = "Hello from function!";
  console.log(message); // What will this show?
}

greet();
console.log(message); // What will this show?
❓Question:

Why are the two outputs different?

What happens if you remove let inside the function?

_________________________ Answer ____________________________*/
// let message = 'Hello, world';
// function greet(){
//     console.log(message)
// }
// greet();
// console.log(message)
/*_______________________ Question no 17 ______________________
simple img slider
_________________________ Answer ____________________________*/ 
// let current = 0;
// const images = document.querySelectorAll('#slider img');
// console.log(images);

// function showImages(index){for(let i = 0;i<images.length;i++){images[i].classList.remove('active');}
// images[index].classList.add('active')}

// function nextImage(){current = (current + 1)% images.length;
//   showImages(current);
// }

// function prevImage(){current = (current - 1 + images.length)%images.length;
//   showImages(current)
// }

/*_______________________ Question no 18 ______________________
img slider
_________________________ Answer ____________________________*/
// let currentImg = 0;
// let Images = document.querySelectorAll('img');
// console.log(Images);
// function showImages(index){for(let i = 0; i<Images.length;i++){Images[i].classList.remove('visib')}
// Images[index].classList.add('visib')}
// // second function 
// function previous(){currentImg = (currentImg+1)% Images.length;
//   showImages(currentImg)
// }
// // third function
// function next(){currentImg = (currentImg - 1 + Images.length)% Images.length;
//   showImages(currentImg)
// }

/*_______________________ Question no 19 ______________________
local storage
_________________________ Answer ____________________________*/

// now create function 
// function save(){let getName = document.getElementById('name').value;
// let getAge = Number(document.getElementById('age').value);
// let getClass = document.getElementById('class').value;
// document.getElementById('name').value = '';
// document.getElementById('age').value = '';
// document.getElementById('class').value = '';
// // we create an object 
// let studentDetails = {Name : getName,
//   Age : getAge,
//   Class: getClass,
// }
// let convetString = JSON.stringify(studentDetails);

// localStorage.setItem('info',convetString);

// let convertOrigional = JSON.parse(convetString);
// let getObj = localStorage.getItem('info');
// let  origional = JSON.parse(getObj);
// console.log(origional);
// document.getElementById('display').innerHTML = `Name : ${origional.Name} <br>
// Class : ${origional.Class}<br>
// Age : ${origional.Age}`

// }

/*_______________________ Question no 20 ______________________
local storage related
_________________________ Answer ____________________________*/
// function addStudent() {
//       var name = document.getElementById("name").value;
//       var age = document.getElementById("age").value;
//       var className = document.getElementById("class").value;

//       if (name === "" || age === "" || className === "") {
//         alert("Please fill all fields");
//         return;
//       }

//       var student = {
//         name: name,
//         age: age,
//         class: className
//       };

//       var allStudents = localStorage.getItem("students");

//       if (allStudents === null) {
//         allStudents = [];
//       } else {
//         allStudents = JSON.parse(allStudents);
//       }

//       allStudents.push(student);
//       localStorage.setItem("students", JSON.stringify(allStudents));

//       document.getElementById("name").value = "";
//       document.getElementById("age").value = "";
//       document.getElementById("class").value = "";

//       showStudents();
//     }

//     function showStudents() {
//       var output = document.getElementById("output");
//       output.innerHTML = "";

//       var allStudents = localStorage.getItem("students");

//       if (allStudents !== null) {
//         allStudents = JSON.parse(allStudents);

//         for (var i = 0; i < allStudents.length; i++) {
//           output.innerHTML +=
//             "Name: " + allStudents[i].name + " | Age: " + allStudents[i].age + " | Class: " + allStudents[i].class + "<br><br>";
//         }
//       }
//     }

//     // Call when page loads
//     showStudents();




/*_______________________ Question no 21 ______________________
todo list
_________________________ Answer ____________________________*/
// function addTask() {
//       var task = document.getElementById("taskInput").value;

//       if (task === "") {
//         alert("Please enter a task");
//         return;
//       }

//       var tasks = localStorage.getItem("todoList");

//       if (tasks === null) {
//         tasks = [];
//       } else {
//         tasks = JSON.parse(tasks);
//       }

//       tasks.push(task);
//       localStorage.setItem("todoList", JSON.stringify(tasks));

//       document.getElementById("taskInput").value = "";
//       showTasks();
//     }

//     function showTasks() {
//       var list = document.getElementById("taskList");
//       list.innerHTML = "";

//       var tasks = localStorage.getItem("todoList");

//       if (tasks !== null) {
//         tasks = JSON.parse(tasks);

//         for (var i = 0; i < tasks.length; i++) {
//           list.innerHTML += `
//             <div class="task">
//               <input id="editInput${i}" value="${tasks[i]}" readonly>
//               <button onclick="editTask(${i})">Edit</button>
//               <button onclick="deleteTask(${i})">Delete</button>
//             </div>
//           `;
//         }
//       }
//     }

//     function deleteTask(index) {
//       var tasks = JSON.parse(localStorage.getItem("todoList"));
//       tasks.splice(index, 1);
//       localStorage.setItem("todoList", JSON.stringify(tasks));
//       showTasks();
//     }

//     function editTask(index) {
//       var input = document.getElementById("editInput" + index);
//       if (input.readOnly) {
//         input.readOnly = false;
//         input.focus();
//       } else {
//         var tasks = JSON.parse(localStorage.getItem("todoList"));
//         tasks[index] = input.value;
//         localStorage.setItem("todoList", JSON.stringify(tasks));
//         input.readOnly = true;
//         showTasks();
//       }
//     }

//     // Show tasks on page load
//     showTasks();



/*_______________________ Question no 22 ______________________
todos list
_________________________ Answer ____________________________*/
// first function
// function addTask(){let getTask = document.getElementById('userinput').value;
//   if(getTask === ''){alert('plz enter task');
//     return;
//   }
//   let checkInStore = localStorage.getItem('work');
//   if(checkInStore === null){checkInStore = []}
//   else{checkInStore = JSON.parse(checkInStore)}

//   checkInStore.push(getTask);
//   checkInStore = JSON.stringify(checkInStore)
//   localStorage.setItem('work',checkInStore);
//   document.getElementById('userinput').value = '';
//   show();
// }
// // funtion show task 
// function show(){let list = JSON.parse(localStorage.getItem('work'));
//   let result = document.getElementById('display');
//   result.innerHTML = '';
//   if(list !== null){for(let i = 0; i<list.length; i++){let li = document.createElement('li');
//     let liContent = document.createTextNode(list[i]);
//     li.appendChild(liContent);
//     let btn = document.createElement('button');
//     let btnContent = document.createTextNode('Delete');
//     btn.appendChild(btnContent);
//    btn.setAttribute('onclick',`deleteItem(${i})`)
//     result.appendChild(li);
//     result.appendChild(btn);

//   }}
//   else{result.innerHTML = "<li>No item found</li>"}
  
// }


// function deleteItem(index){
//    let checkInStore = localStorage.getItem('work');
//     checkInStore = JSON.parse(checkInStore);
//    checkInStore.splice(index,1);
//   localStorage.setItem('work', JSON.stringify(checkInStore));
// show();}

/*_______________________ Question no 23 ______________________
todo list practice
_________________________ Answer ____________________________*/
// first funciton for creating local storage and save data
// function adding(){let getInputValue = document.getElementById('userinput').value;
//   if(getInputValue === ''){alert('plz enter valu');
//     return;
//   }
//   var getFromLocalStorage = localStorage.getItem('saved');
//   if(getFromLocalStorage === null){getFromLocalStorage = []}
//   else{getFromLocalStorage = JSON.parse(getFromLocalStorage)}
//   getFromLocalStorage.push(getInputValue);
//  getFromLocalStorage = JSON.stringify(getFromLocalStorage);
//  localStorage.setItem('saved',getFromLocalStorage);
// //  make input empty
// document.getElementById('userinput').value = '';
// document.getElementById('userinput').focus();
// showing();

// }
// // now we show our saved data on dom from localstorage 
// function showing(){var getFromLocalStorage = localStorage.getItem('saved');
//   getFromLocalStorage = JSON.parse(getFromLocalStorage);
//   if(getFromLocalStorage){
//     let list = document.getElementById('display');
//     list.innerHTML = '';
//     for(let i = 0; i <getFromLocalStorage.length; i++){
//       let li = document.createElement('li');
//       let liContent = document.createTextNode(getFromLocalStorage[i]);
//       li.appendChild(liContent);
//       li.style.listStyle = 'none';
//       let btn = document.createElement('button');
//       let btnContent = document.createTextNode('Delete');
//       btn.appendChild(btnContent);
//       // btn.setAttribute('onclcik',`deleting(${i})`);
//       btn.setAttribute('onclick', `deleting(${i})`);
//       let  div = document.createElement('div');
//       div.appendChild(li);
//       div.appendChild(btn);
//       list.appendChild(li);
//       list.appendChild(btn);
      
//     }
//   }
//   else{list.innerHTML = "<li>No item found</li>"}

//  }

// //  now we create function for delete
// function deleting(index){var getFromLocalStorage = localStorage.getItem('saved');
//   getFromLocalStorage = JSON.parse(getFromLocalStorage);
//   getFromLocalStorage.splice(index,1);
//   getFromLocalStorage = JSON.stringify(getFromLocalStorage);
//   localStorage.setItem('saved',getFromLocalStorage);
//   showing();
//  }

/*_______________________ Question no 24 ______________________
 Task 1: Sum of Array Elements
Question:
Given an array of numbers, use a for...of loop to calculate the sum of all numbers.

Input Example:
[10, 20, 30, 40]

Expected Output:
Sum: 100
_________________________ Answer ____________________________*/
// let array = [10,20,30,40];
// var sum = 0;
// for(let key of array){
//   sum = sum + key
// }
// console.log(sum)
// var sum = 0;
// for(let i = 0;i<array.length;i++){
//   sum = sum + array[i]
// }
// console.log(sum)
/*_______________________ Question no 25 ______________________
Task 2: Count Vowels in a String
Question:
Given a string, use a for...of loop to count how many vowels (a, e, i, o, u) are in the string.

Input Example:
"JavaScript is fun"

Expected Output:
Vowel Count: 5
_________________________ Answer ____________________________*/ 
// let str = 'JAvaScript is fun';
//    str = str.toLowerCase();
// let vowels = 0;
// for(let i = 0; i < str.length; i++){if(str[i] === 'a' || str[i] === 'e' || str[i] === 'i' || str[i] === 'o' || str[i] === 'u'){
//   vowels++;
// }
// }
// console.log(vowels)
// let str = "JavaScript is fun";
//     str = str.toLowerCase();
//     let vowels = 0;
//     for(let key of str){if(key === 'a' || key === 'e' || key === 'i' || key === 'o' || key === 'u'){
//       vowels++;
//     }}
// console.log(vowels)
/*_______________________ Question no 26 ______________________
 Find All Even Numbers
Question:
Given an array of integers, use a for...of loop to filter and collect all even numbers.

Input Example:
[3, 8, 15, 24, 42]

Expected Output:
Even Numbers: [8, 24, 42]


_________________________ Answer ____________________________*/
// let array = [3,8,15,24,42];
// let even = [];
// for(let key of array){if(key % 2 === 0){even.push(key)}}
// console.log(even)

/*_______________________ Question no 27 ______________________
 Uppercase First Letter
Question:
Given an array of lowercase names, use a for...of loop to convert the first letter of each name to uppercase.

Input Example:
["alice", "bob", "charlie"]

Expected Output:
["Alice", "Bob", "Charlie"]
_________________________ Answer ____________________________*/
// let array = ['alice','bob','charlie'];
// let newArray = [];
// for(let key of array){let a = key.slice(0,1);
//   a = a.toUpperCase();
 
//   let b = key.slice(1);
//   let result = a + b;
//   console.log(result);
// newArray.push(result);
  
// }
// console.log(newArray)



/*_______________________ Question no 1 ______________________

_________________________ Answer ____________________________*/





/*_______________________ Question no 1 ______________________

_________________________ Answer ____________________________*/





/*_______________________ Question no 1 ______________________

_________________________ Answer ____________________________*/




/*_______________________ Question no 1 ______________________

_________________________ Answer ____________________________*/




/*_______________________ Question no 1 ______________________

_________________________ Answer ____________________________*/


/*_______________________ Question no 1 ______________________

_________________________ Answer ____________________________*/ 



/*_______________________ Question no 1 ______________________

_________________________ Answer ____________________________*/



/*_______________________ Question no 1 ______________________

_________________________ Answer ____________________________*/





/*_______________________ Question no 1 ______________________

_________________________ Answer ____________________________*/





/*_______________________ Question no 1 ______________________

_________________________ Answer ____________________________*/





/*_______________________ Question no 1 ______________________

_________________________ Answer ____________________________*/




/*_______________________ Question no 1 ______________________

_________________________ Answer ____________________________*/




/*_______________________ Question no 1 ______________________

_________________________ Answer ____________________________*/


/*_______________________ Question no 1 ______________________

_________________________ Answer ____________________________*/ 



/*_______________________ Question no 1 ______________________

_________________________ Answer ____________________________*/



/*_______________________ Question no 1 ______________________

_________________________ Answer ____________________________*/





/*_______________________ Question no 1 ______________________

_________________________ Answer ____________________________*/





/*_______________________ Question no 1 ______________________

_________________________ Answer ____________________________*/





/*_______________________ Question no 1 ______________________

_________________________ Answer ____________________________*/




/*_______________________ Question no 1 ______________________

_________________________ Answer ____________________________*/




/*_______________________ Question no 1 ______________________

_________________________ Answer ____________________________*/


/*_______________________ Question no 1 ______________________

_________________________ Answer ____________________________*/ 



/*_______________________ Question no 1 ______________________

_________________________ Answer ____________________________*/



/*_______________________ Question no 1 ______________________

_________________________ Answer ____________________________*/





/*_______________________ Question no 1 ______________________

_________________________ Answer ____________________________*/





/*_______________________ Question no 1 ______________________

_________________________ Answer ____________________________*/





/*_______________________ Question no 1 ______________________

_________________________ Answer ____________________________*/




/*_______________________ Question no 1 ______________________

_________________________ Answer ____________________________*/




/*_______________________ Question no 1 ______________________

_________________________ Answer ____________________________*/


/*_______________________ Question no 1 ______________________

_________________________ Answer ____________________________*/ 



/*_______________________ Question no 1 ______________________

_________________________ Answer ____________________________*/



/*_______________________ Question no 1 ______________________

_________________________ Answer ____________________________*/





/*_______________________ Question no 1 ______________________

_________________________ Answer ____________________________*/





/*_______________________ Question no 1 ______________________

_________________________ Answer ____________________________*/





/*_______________________ Question no 1 ______________________

_________________________ Answer ____________________________*/




/*_______________________ Question no 1 ______________________

_________________________ Answer ____________________________*/




/*_______________________ Question no 1 ______________________

_________________________ Answer ____________________________*/


/*_______________________ Question no 1 ______________________

_________________________ Answer ____________________________*/ 



/*_______________________ Question no 1 ______________________

_________________________ Answer ____________________________*/



/*_______________________ Question no 1 ______________________

_________________________ Answer ____________________________*/





/*_______________________ Question no 1 ______________________

_________________________ Answer ____________________________*/





/*_______________________ Question no 1 ______________________

_________________________ Answer ____________________________*/





/*_______________________ Question no 1 ______________________

_________________________ Answer ____________________________*/




/*_______________________ Question no 1 ______________________

_________________________ Answer ____________________________*/




/*_______________________ Question no 1 ______________________

_________________________ Answer ____________________________*/



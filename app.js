//========================= CH # 21 ========================
//----------------Assignment No # 1 -----------------
// var userFirstName= prompt("Enter Your First Name");
// var userSecondName= prompt("Enter Your Second Name");
// var fullName=userFirstName+" "+userSecondName;
// alert("Welcome Dear "+fullName+". Have a nice day");


//----------------Assignment No # 2 -----------------
// var favMob=prompt("Please Enter Your Favourite Mobile Phone Model");
// alert("Length of string: "+favMob.length);

//----------------Assignment No # 3 -----------------

// var name1="Pakistani";
// var position=name1.indexOf('n');
// document.write("Index of 'n': "+position);

//----------------Assignment No # 4 -----------------
// var hello="Hello World";
// var find= hello.lastIndexOf('l');
// document.write("String: "+hello+"<br>Last index of 'l': "+find);

//----------------Assignment No # 5 -----------------
// var word="Pakistani";
// var charcter=word.charAt(3);
// document.write("String: "+word+"<br>Character at index 3:"+charcter);
//----------------Assignment No # 6 -----------------

// var userFirstName= prompt("Enter Your First Name");
// var userSecondName= prompt("Enter Your Second Name");
// var fullName=userFirstName.concat(userSecondName);
// alert("Welcome Dear "+fullName+". Have a nice day");

//----------------Assignment No # 7 -----------------
// var city="Hyderabad";
// var newCity=city.replace("Hyder", "Islam");
// document.write("City: "+city+"<br>After resplacement: "+newCity);

//----------------Assignment No # 8 -----------------

// var message = "Ali and Sami are best friends. They play cricket and football together.";
// var newMessage=message.replace(/and/g, "&");
// document.write(newMessage);


//----------------Assignment No # 9 -----------------

// var num2="472";
// var num3=parseInt(num2);
// document.write("Value: "+num2+"<br>Type: String<br>Value: "+num3+"<br>Type: number");


//----------------Assignment No # 10 -----------------

// var input1=prompt("Kindly Enter Input");
// var upInput=input1.toLocaleUpperCase();
// document.write("User input: "+input1+"<br>Upper case: "+upInput);


//----------------Assignment No # 11 -----------------


// var input1=prompt("Kindly Enter Input");
// var upInput=input1.charAt(0).toUpperCase()+input1.slice(1);
// document.write("User input: "+input1+"<br>Title case: "+upInput);


//----------------Assignment No # 12 -----------------

// var num=35.36;
// var str1=num.toString();
// str1=str1.replace(".", "");
// document.write("Number: "+num+"<br>Result: "+str1);

//----------------Assignment No # 13 -----------------
// var username=prompt("Please enter a username");
// if (username.indexOf("@")!==-1 || username.indexOf("!")!==-1 || username.indexOf(",")!==-1 || username.indexOf(".")!==-1){
// alert("Please enter a valid username");
// }
// else {

//     document.write("Success! You have entered a valid username");
// }

//----------------Assignment No # 14 -----------------



// var items= ["cake", "apple pie", "cookie", "chips", "patties"];
// var order= prompt("Welcome to ABC Bakery. What do you want to order sir/ma'am?");
// order=order.toLowerCase();
// if (items.indexOf(order)!==-1){
// var place=items.indexOf(order);
//     document.write(order+" is <b>available</b> at index "+place+" in our bakery.");
// }
// else if (order===""){
//     document.write("Your entry is invalid!");  
// }
// else{
//     document.write("We are sorry. "+order+" is <b> not available</b> in our bakery.");
// }



//----------------Assignment No # 15 -----------------



// var passWords = prompt ("Enter a-z, A-Z or a number");
// var lengthPass=passWords.length;

// var number=passWords.charCodeAt(passWords);
// var charcter=passWords.charAt(0);


// if (number<58 && number > 47){
//     alert("Passwords can not begin with a number");
// }
// else if (lengthPass<6){

//     alert("Passwords should be at lease 6 digit long");

// }
// else {

//     alert("Passwords are valid");

// }

//----------------Assignment No # 16 -----------------


// var str="University of Karachi";
// var newStrArray=str.split("");
// for (let index = 0; index < str.length; index++) {
//     document.write(newStrArray[index]+"<br>");
//     }


//----------------Assignment No # 17 -----------------


// var userinPut=prompt("Please Enter something");
// lastNum=(userinPut.length)-1;

// var inputAry=userinPut.split("");
// document.write("User input: "+userinPut+"<br>Last character of input: "+inputAry[lastNum]);



//----------------Assignment No # 18 -----------------

// var sentence="The quick brown fox jumps over the lazy dog";
// var countOccurance=(sentence.match(/the/gi) || []).length;
// document.write("Text: "+sentence+"<br>There are "+countOccurance+" occurence(s) of the word 'the'");


//===================CHAPTER 26 - 30==================

//----------------Assignment No # 1 -----------------

// var number=prompt("Please enter a number");
// var roundOff=Math.round(number);
// var floorValue=Math.floor(number);
// var ceilValue=Math.ceil(number);
// document.write("Number: "+number+"<br>round off value: "+roundOff+"<br>floor value: "+floorValue+"<br>ceil value: "+ceilValue);



//----------------Assignment No # 2 -----------------


// number=prompt("Please enter a negative number");
// var roundOff=Math.round(number);
// var floorValue=Math.floor(number);
// var ceilValue=Math.ceil(number);
// document.write("Number: "+number+"<br>round off value: "+roundOff+"<br>floor value: "+floorValue+"<br>ceil value: "+ceilValue);



//----------------Assignment No # 3 -----------------




// number=prompt("Please enter a number");
// var roundOff=Math.abs(number);
// document.write("The absolute value of "+number+" is "+roundOff);





//----------------Assignment No # 4 -----------------


// var dice=(Math.floor((Math.random()*6)+1));
// document.write("random dice value: "+dice);


//----------------Assignment No # 5 -----------------

// var dice=(Math.floor((Math.random()*2)+1));
// if(dice===2){
//     coin="Heads";
// }
// else{
//     coin="Tails";
// }
//  document.write(dice+"<br>random coin value: "+coin);


//----------------Assignment No # 6 -----------------

// var dice=(Math.floor((Math.random()*100)+1));
// document.write("random number between 1 and 100: "+dice);



//----------------Assignment No # 7 -----------------

// var userValues=prompt("Enter your weight in Kilograms");
// var userValuesReplaced = userValues.replace("kg", " Kilograms");

// document.write("The weight of the user is "+userValuesReplaced);





//----------------Assignment No # 8 -----------------

// var secretNumber=(Math.floor((Math.random()*10)+1));
// var userNumber=prompt("Guess a number between 1 - 10");
// if (secretNumber===userNumber)
// {
// alert("You have guessed the secret number successfully, CONGRATULATIONS!");
// }
// else{
//     alert("Try Again!");
// }



//==================CHAPTERS 31 - 34 ============

//----------------Assignment No # 1 -----------------


// var mydate = Date();
// document.write(mydate);



//----------------Assignment No # 2 -----------------

// var mydate = new Date();

// var mon=mydate.getMonth();
// var months=["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
// document.write("Current Month: "+months[mon]);

//----------------Assignment No # 3 -----------------


// var mydate = new Date();

// var day=mydate.getDay();
// var months=["Sun","Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
// document.write("Today is "+months[day]);


//----------------Assignment No # 4 -----------------


// var mydate = new Date();

// var day=mydate.getDay();
// var months=["Sun","Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]


// if(day===6 || day===7){

//     document.write("It's a Fun day");

// }
// else{

//     document.write("Today is "+months[day]);

// }





//----------------Assignment No # 5 -----------------



// var mydate = new Date();

// var dateNew=mydate.getDate();

// if(mydate<16){

//     document.write("First fifteen days of the month");

// }
// else{
//     document.write("Last days of the month");

// }

//----------------Assignment No # 6 -----------------


// document.write("Current Date: "+new Date);

// var minutes = 1000*60;
// var hours = minutes*60;
// var days = hours*24;
// var years = days*365;
// var d = new Date();
// var t= d.getTime();
// var y = Math.round (t/days);
// document.write(y);

//----------------Assignment No # 7 -----------------
// var d = new Date();
// var t= d.getHours();
// if (t<12) {
// document.write("Its AM");
// }
// else
// {
//     document.write("Its PM");
// }


//----------------Assignment No # 8 -----------------

// tmp_date = new Date(2020, 12, 1)
// last_day = new Date(tmp_date - 1)
// document.write(last_day);






//----------------Assignment No # 9 -----------------

// var date0 = new Date(2020, 3, 25); // 1st Ramazan
// var date1 = new Date();
// var numberOfDays = Math.ceil((date1 - date0) / 8.64e7); // 31
// document.write(numberOfDays+" days have passed since 1st Ramazan, 2020");

//----------------Assignment No # 10 -----------------


// var date0 = new Date(2015, 11, 15); // Reference date
// var date1 = new Date();
// var numberOfDays = Math.ceil((date1 - date0) / 8.64e7); // 31
// var seconds=86400*numberOfDays;
// document.write("On reference date "+date0+" "+seconds+" seconds had passed since beginning of 2015");



//----------------Assignment No # 11 -----------------



// var curDate = new Date();
// var hours= curDate.getHours();
// var newHours=hours-1;
// var ONE_HOUR = 60 * 60 * 1000; /* ms */

// var hourAgo=new Date(curDate.getTime() - ONE_HOUR) 
// document.write("Current date: "+curDate+"<br>1 hour ago, it was "+hourAgo);

//----------------Assignment No # 12 -----------------

// var yearsAgo=new Date(new Date().setFullYear(new Date().getFullYear() - 100))

// var curDate = new Date();
// document.write("Current date: "+curDate+"<br>100 years back, it was "+yearsAgo);




//----------------Assignment No # 13 -----------------


// birthday = prompt("Enter Your date of birth as YYYY-MM-DD");

// var birthday = new Date(birthday);

// var fullBirthYear = birthday.getFullYear();
//   var ageNow=((Date.now() - birthday) / (31557600000));
//   ageNow=Math.floor(ageNow);
// document.write("Your age is "+ageNow+"<br>Your birth year is "+fullBirthYear);


//----------------Assignment No # 14 -----------------
// var unitsConsumed=410;
// var cusName="ABC Customer";
// var chargesPerUnit=16;
// var toTalBill=unitsConsumed*chargesPerUnit;
// var lateCharges=350;
// var grossAmount = toTalBill+lateCharges;
// document.write("<h1> K-Electric Bill</h1> <br> Customer Name: <b>"+cusName+"</b><br>Month: <b>February </b><br>Number of Units: <b>"+unitsConsumed+" </b><br>Charges per unit: <b>"+chargesPerUnit+" </b><br><br>Net Amount Payable (Within Due Date): <b>"+toTalBill+" </b><br>Late payment surcharge: <b>"+lateCharges+" </b><br>Gross Amount Payable (after Due Date): : <b>"+grossAmount+" </b>");
// document.write("<hr> ");



//==================Chapter 35-38 ==================

//----------------Assignment No # 1 ---??--------------
// function showDate() {
//     var d;
//     d=new Date();
//     document.write(d);
// }

// showDate();

//----------------Assignment No # 2 -----------------
// var fname;
// var sname;
// var fullName;

// function great(fname, sname) {
//     fname=prompt("Enter your First Name");
//     sname=prompt("Enter your Second Name");
//     fullName=fname.concat(" "+sname);
// alert("Welcome Dear "+fullName+", Have a nice day.");
// }

// great();


//----------------Assignment No # 3 -----------------
// adding();

// function adding(num1, num2) {
//     var num1 = prompt("Please enter First Number");
//     var num2 = prompt("Please enter Second Number");
//     num1=parseInt(num1);
//     num2=parseInt(num2);

//     var total= num1+num2;
// alert("Sum of both numbers is: "+total);
// }


//----------------Assignment No # 4 -----------------




// function calc (num2, num1, op){
//     var num1 = prompt("Enter first number");
// var op = prompt("Enter Operator");

// var num2 = prompt ("Enter second number");
//     num2=parseInt(num2);
//     num1=parseInt(num1);

// if (op==="+"){
//     alert (num1+num2);
    
// }
// else if (op==="-"){
//     alert (num1-num2);
// }
// else if (op==="/"){
//     alert (num1/num2);
// }
// else if (op==="*"){
//     alert (num1*num2);
// }
// else if (op==="%"){
//     alert (num1%num2);
// }
// else {
//     alert("Your entery/s were incorrect!");
// }
// }
// calc();




//----------------Assignment No # 5 -----------------

// function square(num) {
//     var num= prompt("Please enter a numer");
//         num=parseInt(num);
// var getSquare= (num*num);
// alert("Square of "+num+" is: "+getSquare);

// }

// square();

//----------------Assignment No # 6 -----------------

// function factorial(numFact) {
//     var numFact=prompt("Please provide a number to calculate its factorial");
//     numFact=parseInt(numFact);

//     var inFact=numFact;
// var starValue=numFact-1;
//     for (let index = starValue; index >=1; index--) {
// inFact =  inFact * index;       
//     }
//     alert("Factorial of "+numFact+" is: "+inFact);
// }

// factorial();

//----------------Assignment No # 7 -----------------



// function countings(start, end) {
//     var start = prompt("Please enter starting number");
//     var end = prompt("Please enter ending number");
//     for (let index = start; index <= end; index++) {
// document.write(index+"<br>");        
//     }

// }

// countings();




//----------------Assignment No # 8 -----------------

// function calculateHypotenuse(base, perpendicular) {
    
//     var base=prompt("Enter value of BASE");
//     var perpendicular=prompt("Enter value of Perpendicular");
//     var Hypotenuse=Math.sqrt(base*base + perpendicular*perpendicular);
    
    
    
    
//     document.write(Hypotenuse);
// }
// calculateHypotenuse();






//----------------Assignment No # 9 -----------------


// function calArea(width, height) {
//     var width=prompt("Please enter width");
//     var height=prompt("Please enter height");
//     width=parseInt(width);
//     height=parseInt(height);

//     var area=width*height;
//     alert("Area of the triangle is: "+area);
// }

// calArea();


//----------------Assignment No # 10 -----------------

// function Palindrome(string) {
//     var string=prompt("Please enter a word");
//     if (string == string.split('').reverse().join('')) {
//         alert(string + ' is palindrome.');
//     }
//     else {
//         alert(string + ' is not palindrome.');
//     }  
// }


// Palindrome ();




//----------------Assignment No # 11 -----------------
// function toTitleCase(str) {
//     var str=prompt("Please enter text");
    
//     str = str.toLowerCase()
//     .split(' ')
//     .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
//     .join(' ');
//     alert(str);
// }
// toTitleCase();

//----------------Assignment No # 12 -----------------


// function longestWord(string) {
//     var string = prompt("Please enter a sentence to find longest word in it.");
//     var str = string.split(" ");
//     var longest = 0;
//     var word = null;
//     for (var i = 0; i < str.length - 1; i++) {
//         if (longest < str[i].length) {
//             longest = str[i].length;
//             word = str[i];
//         }
//     }
//     alert(word);
// }


// longestWord();
//----------------Assignment No # 13 -----------------


// function findOccurance(str, chr) {
//     var str=prompt("Please enter a string");
//     var chr=prompt("Please enter the character");

//     var countOccurance=(str.match(new RegExp(chr, "g")) || []).length;

//     document.write("Text: "+str+"<br>There are "+countOccurance+" occurence(s) of the word "+chr);
    
// }

// findOccurance();



//----------------Assignment No # 14 -----------------

// function calcCircumference(radius) {
// var radius=prompt("Enter Radius");
// radius=parseInt(radius);

// var cir=2*3.14*radius;
// cir=Math.floor(cir);
    
//  alert("The circumference is: "+cir);   
// }


// function calcArea(radius) {
//     var radius=prompt("Enter Radius");
//     radius=parseInt(radius);
    
//     var area1=radius*3.14*radius;
//     area1=Math.floor(area1);
        
//      alert("The Area is: "+area1);   
//     }


// calcCircumference();
// calcArea();
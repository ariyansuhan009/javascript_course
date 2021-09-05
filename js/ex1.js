
/*  #1 */

console.log("This is Ex1.js");


/*  #2 */

var firstName = "Ariyan";
var lastName = "Sohan";
var yearOfBirth = 1999;
var currentYear = 2021;

var age = currentYear-yearOfBirth;

var message = "Hi, my name is "+ firstName+ " " + lastName + ", I'm " + age.toString() + " years old and I'm learning JavaScript";

document.getElementById("student_message").innerHTML = message;



/*  #3 */

var num1 = parseInt( document.getElementById("num_1").innerHTML );
var num2 = parseInt( document.getElementById("num_2").innerHTML);
var avg = (num1+num2) / 2;

avg = avg.toFixed(2);
document.getElementById("result").innerHTML = avg;


/* #4 */

var phone1 = "988866552";
var phone2 = "99087612366";
var phone3 = 876543123;
phone3 = phone3.toString();

console.log(phone1.length == 9);
console.log(phone2.length == 9);
console.log(phone3.length == 9);

/* #5 */

console.log(Math.pow(32,6));


/* #6 */



/* #7 */

    var quantity = "25";
    var number = 6;
    var pressure;
    var temperature = null;

    console.log(quantity += quantity);
    console.log( (7+5) / number + 2 );
    console.log(pressure); 
    console.log(temperature);
    console.log(typeof pressure); 
    console.log(typeof temperature);


/* #8 */

var url1 = "https://" + document.getElementById("url_1").innerHTML;
document.getElementById("url_2").innerHTML = url1;

var url2 = ( document.getElementById("url_3").innerHTML).replace("https://", "");
document.getElementById("url_4").innerHTML = url2;
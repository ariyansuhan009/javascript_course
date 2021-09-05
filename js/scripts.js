

//alert("testing the alert");

//this is a one line comment

/* console.log("statement 1");

console.log("statement 2"); */

//lesson 4 working with dom

/* console.log(document.getElementById("blue_box").innerHTML);

document.getElementById("blue_box").innerHTML = "<h1>Testing</h1>"; */



/*********************************
            Variables
**********************************/

/* var user_name = "Ariyan";

document.getElementById("user_greeting_message").innerHTML = "Hello "+ user_name + "!"; */

//document.getElementById("inst").innerHTML = "Instructor: Ariyan Sohan";

/* *****************************
    Lesson 8 data types Boolean
*********************************/

/* var orderValue = 2800;

if(orderValue >= 3000){
    console.log("your are eligable to your finance");
}else{
    console.log("Finance option are not eligable fot orders below USD$1000");
} */


/* *************************
Lesson 11 - Function
****************************/

/* function sum_numbers(){


    var num1 = 5;
    var num2 = 2;
    sum = num1 + num2;

    console.log(sum);
}
sum_numbers();

function sum_args(num1, num2){
    sum = num1 + num2;
    return sum;
}
var result = sum_args(-27,55) ;

document.getElementById("sum_result").innerHTML = result; */


/************************
 * Lesson - 12
 ********************** */

/* var students = ["Jhon", "mary", "paul"];

console.log(students); */

/**************************
 Lesson 14 
***********************  */

/* var student = {
    'firstName': "Ariyan",
    'lastName': "Sohan",
    'fullName': function(){
        return this.firstName + " " + this.lastName;
    }
}; */

/* *************************
Lesson-  16
*****************************/

/* document.getElementById("click-me").onclick = function(){
    alert("You clicked the button");
}; */

/* document.getElementById("hover-me").onmouseover = function() {
    alert('You moved the cursor over the button');
};
 */
/* document.getElementById("leave-me").onmouseout = function() {
    alert('You moved the cursor out of the button');
}; */


/* document.onkeydown = function(event) {
    if(event.keyCode == '65') {
        alert("Do something if letter 'a' is pressed.");
    }else{
        console.log("You just pressed a different key!!");
    }
};

function show_alert() {
    alert('You clicked the button');
}
 */

/***********************
 Lesson - 17
 **********************/

/* document.getElementById("color_button").onclick = function() {
    document.getElementById("color_button").style.backgroundColor = "purple";
    document.getElementById("color_button").style.transform = "translateX(100px)";
}; */

/* document.getElementById("color_button").onclick = function() {
    this.style.backgroundColor = "purple";
    this.style.transform = "translateX(100px)";
}; */

/* var button = document.getElementById("color_button");

    button.onclick = function() {
        button.style.backgroundColor = "purple";
        button.style.transform = "translateX(100px)";
}; */


/* ***********************
Lesson-  18
**********************/

/* var element = document.getElementsByClassName("example");
console.log(element); 

var paragraph = document.getElementsByTagName("p");
console.log(paragraph);
*/

/* *******************
Lesson- 19
************************/

/* for(var a=0; a<5; a+=1 ){
    console.log(a);
}

var students = ['Peter', 'Mary', 'Joseph', 'John', 'Charles'];

    for (var a = 0; a < students.length ; a++) {
        console.log(students[a]);
}

var car = {
    'Year': 2018,
    'Model': 'Evoke',
    'Manufacturer': 'Land Rover',
    'FuelType': 'Diesel'

}

for (var prop in car) {
    console.log( prop + ': ' + car[prop] );
}

var elements = document.getElementsByClassName("example");   

for (var a = 0; a < elements.length ; a++) {
    elements[a].style.color = "orange";
    elements[a].style['font-weight'] = "bold";
} */



/* ************************
Lesson - 20
*********************** */

/* var count = 0;

    while (count < 5) {
        console.log(count);
        count++;
}

var count = 10;

do{
    console.log(count);
    count++;
}while(count<6); */



/* *****************
Lesson- 21
****************** */

/* var age = 17;
if(age<18){
    console.log("Underage");
}else{
    console.log("Overage");
}
  
var age = 70;

    if (age < 18) {

        console.log('Underage');

    } else if (age >= 65) {

        console.log('Senior');

    } else {

        console.log('Adult');

    }

    grade = 7;
    absences = 3;

    // Solving the problem with && (and): 

    if (grade >= 7 && absences <= 5) {
        console.log( 'The student has been approved' );
    } else {
        console.log( 'The student has failed' );
    }

    // Solving the problem with || (or):

    if (grade < 7 || absences > 5) {
        console.log( 'The student has failed' );
    } else {
        console.log( 'The student has been approved' );
    }


    var name = "";

    if (name) {
        
        console.log("The name is " + name);
    
    } else {

        console.log("The name has not been informed");

    }


    var name = "";
        
    console.log( name ? "The name is " + name : "The name has not been informed" );

    var age = 70;
        
    console.log( age < 18 ? 'Underage' : age >= 65 ? 'Senior' : 'Adult' ); */


    /* *******************
    Lesson - 22
    ******************* */

    /* var isMember = false;
    var age = 25;
    
    if (isMember == true || age >= 65) {
        console.log('Free');
    } else {

        if (age < 18) {
            console.log('$ 6.00');
        } else {
            console.log('$ 12.00');
        }
    }


    var employees = [
        
        {
            'name': 'Charles Silva',
            'age': 45,
            'children': ['Andrew Silva', 'Maria Silva']
            
        },

        {
            'name': 'Elizabeth Green',
            'age': 32,
            'children': ['Peter Green']
            
        },

        {
            'name': 'George Banks',
            'age': 39,
            'children': ['Philipp Banks', 'Rose Banks', 'Tara Banks']
            
        }
    
    ];

    document.getElementById("children").innerHTML = "";

    for (var a = 0; a < employees.length; a++) {
        var childrenList = employees[a].children;
    
        for (var b = 0; b < childrenList.length; b++) {
            var child = childrenList[b];
            document.getElementById("children").innerHTML += "<li> " + child + "</li> ";
        }
    } 

*/

    /* *****************************
    Lesson - 23 
    *******************************/
/* 
    function create_name() {
        var name = 'Mary';
        console.log(name);
    }

    create_name(); // The console will show 'Mary'

    console.log(name);

    var name = 'Helen';
                        
    function show_name() {
        console.log(name); 
    }

    show_name();

    var a = 0;

    if (true) {
        let a = 20;
    }

    console.log();

    console.log(a);


    for (var a = 0; a < 3 ; a++) {
        console.log('Parent loop count: ', a);
    
        for (var a = 0; a < 3 ; a++) {
            console.log('Child loop count: ', a);
        }
    }


    for (let a = 0; a < 3 ; a++) {
        console.log('Parent loop count: ', a);
    
        for (let a = 0; a < 3 ; a++) {
            console.log('Child loop count: ', a);
        }
    }

    const PI = 3.14159;
    PI = 0; */



/* ***********************
Lesson- 25
******************** */
/* window.onmousemove = function(e){
    if (e.pageY < 5) {
        alert("Don't miss our flash sale. Go to the the products section for exclusive discounts.");
    }
};
 */

/* *************************
Lesson- 26
******************** */

/* var dateObj = new Date();

console.log(dateObj);

var dateObj = new Date();

    console.log(dateObj.getTime());


    var dateObj = new Date();

    dateObj = dateObj.getTime();

    var hours = dateObj / 3600000;

    console.log(Math.floor(hours)); 

    var orderDate = new Date("2020,2,26").getTime();
    var delivaryDate = new Date("2020-04-02").getTime();

    var leadTime = Math.floor(delivaryDate - orderDate) / 86400000;

    document.getElementById("delivary_time").innerHTML = leadTime;

*/

    /* *******************
    Lesson- 27
    ********************** */

    //window.setTimeout(callback function,time in milliseconds);

    /* console.log("Message 1");

    window.setTimeout(function() {
        console.log("Message 2");
    },3000)


    document.getElementById("show-loader").onclick = function () {

        document.getElementById("spinner-loader").style.display = "block";
        window.setTimeout(function(){
            document.getElementById("spinner-loader").style.display = "none";
        }, 5000);

    };

    var count = 0;
    window.setInterval(function(){
        console.log(count);
        count++;
    }, 1000);

    var count = 0;

    var timeInterval = window.setInterval(function(){
        console.log(count);
        count++;
        if (count > 5) {
            window.clearInterval(timeInterval);
        }
    }, 1000); */

    // Creating Clock

    /* function add_leading_zero(number){
        if(number < 10){
            return "0" + number.toString();
        }else{
            return number.toString();
        }
    }

    window.setInterval(function(){

        var currentTime = new Date();

    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();

    document.getElementById("hours").innerHTML = add_leading_zero(hours);
    document.getElementById("minutes").innerHTML = add_leading_zero(minutes);
    document.getElementById("seconds").innerHTML = add_leading_zero(seconds);

    },1000) */

    

    /* *****************
    Lesson - 28 
    ******************* */

    /* var x = 0;
    
    while (x < 10) {
        console.log(x);
        x++;

        if (x == 5) {
            break;
        }


    }


    var num = 0;
    
    
    num++;

    while (num < 20) {
        
        if (num % 2 != 0) {
            continue;
        }

        console.log(num);
       
    } */


    /* *******************
    Lesson - 29
    ***************** */

    /* document.getElementById("show_option").onclick = function () {

        var selectField = document.getElementById("options");
        var selectedOption = selectField.options.selectedIndex;
        var selectedValue = selectField.options[selectedOption].innerHTML;
        document.getElementById("selected_option").innerHTML = selectedValue;

    };


    document.getElementById("show_radio").onclick = function () {

        var radio = document.getElementsByName("gender");
        
        var radio_selected;
        
        for (var a = 0;  a < radio.length; a++) {
            if (radio[a].checked) {
                radio_selected = radio[a].value;
            }
        }
        
        document.getElementById("selected_radio").innerHTML = radio_selected;

    }; 

    document.getElementById("show_check").onclick = function () {


        var check = document.getElementsByName("interest");

        document.getElementById("selected_check").innerHTML = "";

        for (var b = 0;  b < check.length; b++) {
            if (check[b].checked) {
                document.getElementById("selected_check").innerHTML += '<li>' + check[b].value + '</li>';
            }
        }
    

    };
*/


/* *****************
Lesson - 30
************** */

/* document.getElementById("education_level").onchange = function () {

    var selectField = document.getElementById("education_level");
    var selectedOption = selectField.options.selectedIndex;
    var selectedValue = selectField.options[selectedOption].innerHTML;
    document.getElementById("selected_level").innerHTML = selectedValue;

};

var check = document.getElementsByName("meal");

    for (var a = 0;  a < check.length; a++) {

        check[a].onchange = function () {

            document.getElementById("selected_check").innerHTML = "";
            
            for (var b = 0;  b < check.length; b++) {
                
                if (check[b].checked) {
                    document.getElementById("selected_check").innerHTML += '<li>' + check[b].value + '</li>';
                }
            }
        }  
    }

 */

    /* ***********************
    Lesson -  32
    ***********************/

    /* $("#hide").click(function(){

        $(".example").hide();
    }); */



    /* ***************
    Lesson - 33
    *************** */

    /* var content = $("#sample_text").html();
    console.log(content);

    $("#sample_text").html("New Content");

    var text_content = $("#sample-text-only").text();
    console.log(text_content);

    $("#link-element").attr("href", "https://www.udemy.com");
    url_link = $("#link-element").attr("href");
    console.log(url_link);

 */
    //change-image

    /* $("#change_image").click(function(){

        $("#imagem_js").attr("src", "https://cdn.tutsplus.com/net/uploads/2013/12/managing-async-nodejs-retina-preview.png");
        $("#change_image").hide();
    });

    $("#empty_paragraph").empty();
    $("#empty_paragraph").remove();

    // Keep content but hide the element:
    $("#empty_paragraph").hide(); */


    /* ***************
    Lesson - 35
    ************** */

    /* $("#name_field").val("Peter Green");
    contentInput = $("#name_field").val();
    console.log(contentInput);

    $("#options").change(function(){
        var newValue = $("#options option:selected").text();
        console.log(newValue);
    });

    $("input[name='gender']").change(function() {

        var newRadioValue = $("input[name='gender']:checked").parent('span').text();;
        console.log(newRadioValue);

    });

    $("input[name='interest']").change(function() {

        var selectedCheckboxes = $("input[name='interest']:checked");
        var texts = [];
        
        $.each(selectedCheckboxes, function( index, value ) {
            
            texts.push($(value).parent("span").text());
        
        });
        
        console.log(texts);
        
    }); */



    /* ******************
    Lesson - 36
    ****************** */

/* $("#add_class").click(function(){
        $("#example-paragraph").addClass("styling");
    });

    // remove class:
    $("#remove_class").click(function(){
        $("#example-paragraph").removeClass("styling");
    });

    // toggle class:
    $("#toggle_class").click(function(){
        $("#example-paragraph").toggleClass("styling");
    }); */

    /* *****************
    Lesson - 37
    ******************** */

    /* $("#example").click(function(){

    });

    $(document).ready(function(){

        // Code to be executed
        
    });

    $(function(){

        // Código JS / jQuery


        
    }); 

    $("element").on("event", function(){

        // code to be executed when the event is detected

    });
    $("element").on({
        
        click: function(){
            // code to be executed on click
        }, 

        mouseenter: function(){
            // code to be executed on mouseenter
        }, 

        mouseleave: function(){
            // code to be executed on mouseleave
        } 

    });

    // Event Challenge

    $("#fullName").keyup(function(){

        if($("#fullName").val() == ""){
            $("#submit").hide();
        }else{
            $("#submit").show();
        }

        //$("#fullName").val() == "" ? $("#submit").hide() : $("#submit").show();
    })

    */


    /* ****************
    Lesson - 38
    ****************** */

    /* $( "#hide-button" ).click(function() {
        $(this).hide(2000);
        $("#hidden-text").show();
        
    });
 
    $("#toggle-tab").click(function() {

        $("#tab-content").slideToggle(500);
        $("#toggle-tab").toggleClass("flip");
        
    });
    */

    /* ********************
    Lesson - 39
    ********************* */
    /* $("#animate").click(function(){

        $("#square").animate({
            width: '+=20px'
        },500);

        $("#square").animate({
            height: '+=20px'
        }),500;

    });

    $("#animate1").click(function(){

        $("#square").animate({
            width: '-=20px'
        },500);

        $("#square").animate({
            height: '-=20px'
        }),500;

    }); */
    


    /* *********************
    Lesson - 40 
    ************************* */

    /* function get_user(){
        
        window.setTimeout(function(){
            var u = {
                'name': 'John'
            };
            return u;
        }, 1000);
        
    }
            
    function greet_user(user) {
        console.log('Hi ' + user.name + ', how are you?');
    }
            
    var user = get_user();
    greet_user(user); 

    function get_user(callback){

        window.setTimeout(function(){
            var u = {
                'name': 'John'
            };
            callback(u);
        }, 1000);

    }
            
    function greet_user(user) {
        console.log('Hi ' + user.name + ', how are you?');
    }
            
    get_user(greet_user);

    $( "#hide" ).click(function() {
        $(".exemplo").hide();
    });

    */

    /* ****************
    Lesson - 41
    ****************/

    /* function get_user(){

        window.setTimeout(function(){
            var u = {
                'name': 'John'
            };
            return u;
        }, 1000);
        
    }
            
    function greet_user(user) {
        console.log('Hi ' + user.name + ', how are you?');
    }
            
    var user = {
        'name': ""
    }

    try {
        
        if (!user.name) {
            throw 'Name is empty';
        } 
        
        greet_user(user);
        
    } catch (err) {
        console.log(err);
        console.log('Hi guest user, how are you?');
    } */


    /* *****************
    Lesson - 42
    ********************* */

   /*  var bestSellersSlider = {};
    
    bestSellersSlider.products = ['product 1', 'product 2', 'product 3'];
    bestSellersSlider.interval = 3000;
    bestSellersSlider.infinite = true;
    
    bestSellersSlider.get_products = function() {
        console.log(this.products);
    };

    bestSellersSlider.get_products(); 

    var bestSellersSlider = {
        
        products: ['product 1', 'product 2', 'product 3'],
        
        interval: 3000,
        
        infinite: true,
    
        get_products: function() {
            console.log(this.products);
        }

    };

    bestSellersSlider.get_products(); */



    /* **************************
    Lesson - 43
    ************************ */

    /* var employee = {
        'name': "Maria Silva",
        'birth_date': '1988-10-01'
    };

    var employee_json = JSON.stringify(employee);
    console.log(employee_json);
    typeof employee_json;

    var employee_obj = JSON.parse(employee_json);
    console.log(employee_obj);
    typeof employee_obj;
    console.log(employee_obj.name);

    var group_A = ['Real Madrid', 'Porto', 'Liverpool', 'Manchester United'];

    console.log( JSON.stringify(group_A) );

    console.log( typeof JSON.stringify(group_A) ); */



    /* **********************
    Lesson - 44
    *********************** */

   /*  window.localStorage.setItem("name", "ivan");
    // As we already learned, the window object can be ommited for simplicity
    
    // Getting data stored in localStorage is as easy as getting values from objects:
    console.log( localStorage['name'] );
    // or
    console.log( localStorage.name ); */

    //Practice

    

    /* $("#submit-name").click( function(){
        var name = $("#name-user").val();

        if(!name){
            alert("Please type your name")
        }else{
            localStorage.setItem("name", name);
            greet_user();
        }

        $("#name-user").val("");
    });

    $("#not-me").click( function(){

        localStorage.removeItem("name");

        $("#welcome-area").hide();

        $("#name-field").show();


      
    });

    function greet_user(){
        $("#name-field").hide();

        $("#welcome-text").text("Hi " + localStorage.name + ", how are you ?");
        $("#not-me").text("No " + localStorage.name + "?");

        $("#welcome-area").show();
    } */


    /* *******************
    Lesson - 46
    ******************** */

    /* var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            console.log(this.responseText);
        }
    };

    xhttp.open("GET", "https://opentdb.com/api.php?amount=1");
    xhttp.send(); */

    /* ******************
    Lesson - 47
    *********************  */

    /* function get_question() {
        var xhttp = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");
                        
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                console.log(this.responseText);
                
            } 
        };

        xhttp.open("GET", "https://opentdb.com/api.php?amount=1");
        xhttp.send();
    }

    get_question();
 

    function show_question(data) {
        var questionObj = JSON.parse(data);
        console.log('The question is: ' + questionObj.results[0].question)
    }

    function get_question(callback) {
        var xhttp = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");
                        
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                callback(this.responseText);
                
            } 
        };

        xhttp.open("GET", "https://opentdb.com/api.php?amount=1");
        xhttp.send();
    }

    get_question(show_question);
    */

    /* *********************
    Lesson - 48
    ********************* */

    /* $.ajax({
        url : "https://opentdb.com/api.php?amount=1",
        type: "GET",
        dataType: "json",
        success: function(data){
            console.log(data);
        },
        error: function(){
            console.log("Error in the request");
        }  
    });


    $.ajax({
        url : "https://opentdb.com/api.php?amount=1",
        type: "GET",
        dataType: "json"
    }).done(function(data){
        console.log(data);
    }).fail(function(){
        console.log("Error in the request");
    }); */
    





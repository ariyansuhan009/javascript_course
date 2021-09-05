/* #1 */

function celsiusToFahrenheit(celsius){
    var fahrenheit = (9 * celsius / 5) + 32;
    return fahrenheit;
}

document.getElementById("convert").onclick = function(){
    var temperatureCelsius = document.getElementById("temp_celsius").value;

    if(temperatureCelsius == ""){
        alert("The temperature informed is invalid");
    }else{


        document.getElementById("temp_fahr").innerHTML =  celsiusToFahrenheit(temperatureCelsius);
    }
}



/* #2 */

var startYear = 2022;

document.getElementById("anos_copa").innerHTML = "";
while(startYear <= 2050){
    document.getElementById("anos_copa").innerHTML += "<li>" + startYear + "</li>";

    startYear += 4;
}


/* #3 */

document.getElementById("calculate").onclick = function(){
        var grade1 = parseFloat( document.getElementById("grade1").value );
        var grade1 = parseFloat( document.getElementById("grade2").value);
        var absences = document.getElementById("absences").value;

        var totalClasses = 20;


        if(grade1 == "" || grade2 == "" || absences == ""){
            alert("All fields must be filled");
        }else{
            var average = (grade1 + grade2) / 2;
            var presence = (totalClasses - absences) / totalClasses;

            var result;

            if(average < 6.5 && presence < 0.7){
                result = "The students has failed bcz of insuffocent grade and too many avcense";
            }else if(average < 6.5){
                result = "The students has failed bcz of insuffocent grade ";
            }else if(presence < 0.7){
                result = "The students has failed bcz of  too many avcense";
            }else{
                result = "The student has benn approved"
            }

            document.getElementById("result").innerHTML = result;
        }
    }


    /* #4 */


    var sales = [

        {
            'student': 'Jason Gomes',
            'date': '10/06/2018',
            'amount': 34.99,
            'refundRequested': null
            
        },

        {
            'student': 'Carlos Blue',
            'date': '10/06/2018',
            'amount': 29.99,
            'refundRequested': null
            
        },

        {
            'student': 'Martin Heyes',
            'date': '11/06/2018',
            'amount': 39.99,
            'refundRequested': '13/06/2018'
            
        },

        {
            'student': 'Isabella Hopkins',
            'date': '11/06/2018',
            'amount': 29.99,
            'refundRequested': null
            
        },

        {
            'student': 'Andrew Walt',
            'date': '12/06/2018',
            'amount': 34.99,
            'refundRequested': null
            
        }
    
    ];

    document.getElementById("course_sales").innerHTML = "";

    for(var a=0; a<sales.length; a++){
        var sale = sales[a];
        var totalSales = 0;

        if(!sale.refundRequested){

            var line = "<tr>";
            line += "<td>" + sale.student + "</td>";
            line += "<td>" + sale.date + "</td>";
            line += "<td>" + sale.amount.toString() + "</td>";

            line += "</tr>";

            document.getElementById("course_sales").innerHTML += line;

            totalSales += sale.amount;
        }
    }

    document.getElementById("total_sold").innerHTML = totalSales;
/* #1 */

 var shipments = 
 {
     'standard': {
         'leadTime': 7,
         'fee': 2
     },
     'express': {
         'leadTime': 3,
         'fee': 4.5
     }
 };


 document.getElementById("shipments").onchange = function(){

    var selectedOption = document.getElementById("shipments").value;

    var leadTime = shipments[selectedOption].leadTime;
    var fee = shipments[selectedOption].fee;

    var orderDate = new Date();
    var deliveryDate = new Date(orderDate.getTime()+ (86400000 * leadTime));

    document.getElementById("order_date").innerHTML = orderDate.toISOString().slice(0,10);

    document.getElementById("delivery_date").innerHTML = deliveryDate.toISOString().slice(0,10);
    document.getElementById("delivery_fee").innerHTML = fee.toFixed(2);
 }


 /* #2 */

 var phones = 
 {
     'iphone_se_red': {
         'name': 'iPhone SE 64GB Red',
         'price': '450',
         'currency': 'US$',
         'imageUrl': "https://www.mhr.pt/232729-large_default/apple-iphone-se-64gb-red.jpg"
     },
     'iphone_11_black': {
         'name': 'iPhone 11 128GB Black',
         'price': '869',
         'currency': 'EUR',
         'imageUrl': "https://assets.swappie.com/iphon11musta1-300x300.jpg"
     },
     'iphone_8_plus_silver': {
         'name': 'iPhone 8 Plus 64GB Silver',
         'price': '519',
         'currency': 'US$',
         'imageUrl': "https://www.mhr.pt/196170/apple-iphone-8-plus-64gb-silver.jpg"
     }
 };
 
 var radioItems = document.getElementById("productInfo");
 
 for(var i=0; i<radioItems.length; i++){

    radioItems[i].onchange = function(){

        for(var j=0; i<radioItems.length; j++){

            if(radioItems[j].checked){
                var selectedRadio = radioItems[j].value;

                document.getElementById("phone_name").innerHTML = phones[selectedRadio].name;
                document.getElementById("phone_price").innerHTML = phones[selectedRadio].currency + (phones[selectedRadio].price.toFixed(2));
                document.getElementById("phone_image").src = phones[selectedRadio].currency;
                
            }
        }
    }
 }


 /* #3 */


var isRunning = false, 
startTime,
currentTime,
elapsedTime = 0,
clockInterval,
hours,
minutes,
seconds,
remainder,
formattedTime;

function add_leading_zero(number){
    if(number < 10){
        return "0" + number.toString();
    }else{
        return number.toString();
    }
}

 document.getElementById("start_stop").onclick = function(){

    if(!isRunning){

        //start the clock
        isRunning = true;

        if(elapsedTime == 0){
            startTime = new Date().getTime();
        }else{
            startTime = new Date().getTime() - elapsedTime;
        }
        
        clockInterval = window.setInterval(function(){
            
            currentTime = new Date().getTime();

            elapsedTime = currentTime - startTime;

            //hour 3600000
            //minute 60000
            //second 1000

            hours = Math.floor( elapsedTime / 3600000 );
            remainder = elapsedTime - (hours * 3600000);

            minutes = Math.floor( remainder / 60000 );
            remainder -= (minutes * 60000);

            seconds = Math.floor( remainder / 1000 );
            remainder -= (seconds * 1000);

            formattedTime = add_leading_zero(hours)  + ":" + add_leading_zero(minutes) + ":" + add_leading_zero(seconds) + ":" + add_leading_zero(remainder);

            document.getElementById("stopwatch").innerHTML = formattedTime;

        },10)

    }else{
        //stop the clock

        window.clearInterval(clockInterval);
        isRunning = false;


    }
 }

 document.getElementById("reset").onclick = function(){

    startTime = new Date().getTime();

    if(!isRunning){
        elapsedTime = 0;
        document.getElementById("stopwatch").innerHTML = "00:00:00:000";
    }

 }
// -----------------------------------chapter 17-20 ---------------------------------------

// Qustion:03----------------------------------

// for(var i = 1; i<=10;i++){
//     console.log(i);
    

// }

// Question:04-----------------------Table--------------

// var num =+prompt("Enter a number to show its multiplication table");
// var range =+prompt("Enter lenght of table");
// document.write("Multiplication table ",num,"<br>" );
// document.write("lenght of table is ",range,"<br><br>");

// for(i = 1; i<=range; i++){
//     document.write(num," x ",i," = ",range*i,"<br>");

// }

// Question:05------------------Fruit item----------------------

// var fruits =["apple","banana","orange","strawberry"];

// document.write("Element of index 0 is: ",fruits[0],".<br>");
// document.write("Element of index 1 is: ",fruits[1],".<br>");
// document.write("Element of index 2 is: ",fruits[2],".<br>");
// document.write("Element of index 3 is: ",fruits[3],".<br>");

// Question:6--------------Counting----------------------------------

// var counting = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];

// document.write("<h2>Counting:</h2>",counting," . <br>");

// var reverse = counting.slice().reverse();
// document.write("<h2>Reverse counting:</h2>",reverse," . <br>");
// document.write("<h2>Even:</h2>  ");

// for (var i = 0; i <  counting.length;  i++){
//     if(counting[i]%2===0){
        
//         document.write(counting[i]," ");
//     }

// }

// document.write("<h2> Odd:</h2>  ");
// var odd = counting.slice();

// for (var i = 0; i <  odd.length;  i++){
//     if(odd[i] % 2 ==!0){
        
//         document.write(odd[i]," ");
//     }

// }

// document.write("<h2> Series:</h2> ")
// var series = counting.slice();

// for (var i = 0; i < series.length; i++){
//     if(series[i] % 2 == 0){
//         document.write(series[i],"K"," ")

//     }

// }

// Question:07-----------------Bakery------------------------

var bakeryItems = ["Cake","applepie","cookies","chips","patties"];

var UserInput = prompt("Welcome to Khan's Bakery.What do you want to order sir/ma'am?");

for(var i = 0; i < bakeryItems.length;i++){
    if(UserInput==bakeryItems[i]){
        alert(bakeryItems[i],"is avaliable in our bakery")

    }

}

// console.log(bakeryItems.indexOf("chips"));




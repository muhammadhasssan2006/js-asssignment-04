// -----------------------------------chapter 17-20 ---------------------------------------
// Question:1-------------------empty multidimensional array----------------------------------
// var emtArray = Array (3);
// console.log(emtArray);

// Question:2-------------------- multidimensional array------------------------------------

// var multiArry = Array(3);
// multiArry[0] = Array(0 , 1 , 2 , 3)
// multiArry[1] = Array(1 , 0 , 1 , 2)
// multiArry[2] = Array(2 , 1 , 0 , 1)

// // console.log(multiArry);
// document.write(multiArry[0].join( " "),"<br>")
// document.write(multiArry[1].join( " "),"<br>")
// document.write(multiArry[2].join( " "),"<br>")




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

// var bakeryItems = ["cake","applepie","cookies","chips","patties"];

// var UserInput = prompt("Welcome to Khan's Bakery. What do you want to order sir/ma'am?");

// var matchFound = "no";

// for (var i = 0; i < bakeryItems.length; i++) {
//     if (UserInput.toLowerCase() === bakeryItems[i].toLowerCase()) { 
//         matchFound = "yes";
//         console.log(bakeryItems[i], "is available at index", i, "in our bakery");
//         break; 
//     }
// }

// if (matchFound === "no") {
//     console.log(UserInput, "is not available in our bakery");
// }




// Question:08---------------largest number-----------------------------

// var Number1 = [24,53,78,91,12]

// document.write("Array items: ",Number1 ,"<br><br>");

// nUm = Number1.slice()

// var largestnum = Math.max(...nUm);
// document.write("largest number :",largestnum,"<br><br>");

// Question:09-----------------Smallest number------------------------------

// var number2 = Number1.slice();

// var smallestNumber = Math.min(...number2);
// document.write("Array item",smallestNumber,"<br><br>");

// document.write("smallest number :",smallestNumber,"<br>");

// Question:10---------------------Table of 5 to 100----------------------------------

// var tableOf5 = 5;

// for(i = 1; i<=100; i++){
//     document.write(tableOf5," x ",i," = ",tableOf5*i,"<br>");

// }









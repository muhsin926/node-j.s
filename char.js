// let mp=window.prompt("Enter your name ");
// console.log(mp);


// function submition(){
//     let output=document.getElementById("name").value
//     console.log(output);
// }



// function submition(){
//    let number1=parseInt(document.getElementById('num1').value);
//    let number2=parseFloat(document.getElementById('num2').value)

//    let sum=number1+number2;
//    console.log(sum)


// }

// function submition(){
//    let p=parseInt(document.getElementById('num1').value);
//    let r=parseFloat(document.getElementById('num2').value)
//    let n=parseFloat(document.getElementById('num3').value)

//    let si=(p*r*n)/100
//    document.getElementById("h1").innerHTML='Simple interest is: '+si


// }

// function submition(){
//    let mark=document.getElementById('num1').value
//    if(mark>=50 && mark<=100){
//       document.getElementById("h1").innerHTML= 'Passed'
//       document.getElementById("h1").style.color="green";

//    }
//    else if(mark<50 && mark>=0){
//       document.getElementById("h1").innerHTML='Failed'
//       document.getElementById("h1").style.color="red";
//    }
//    else{
//       document.getElementById("h1").innerHTML='Your mark is invalid'
//       document.getElementById("h1").style.color="yellow" 

//    }
//}

//question 5

// function submition(){
//    let totalMark=document.getElementById('num1').value
//    if(totalMark>=90 && totalMark<=100){
//       document.getElementById("h1").innerHTML='Grade is: A'
//    }
//    else if(totalMark<90 && totalMark>=80){
//       document.getElementById("h1").innerHTML='Grade is: B'
//    }
//    else if(totalMark<80 && totalMark>=70){
//       document.getElementById("h1").innerHTML='Grade is: C'
//    }
//    else if(totalMark<70 && totalMark>=60){
//       document.getElementById("h1").innerHTML='Grade is: D'
//    }
//    else if(totalMark<60 && totalMark>=50){
//       document.getElementById("h1").innerHTML='Grade is: E'
//    }
//    else if(totalMark<50 && totalMark>0){
//       document.getElementById("h1").innerHTML='FAILED'
//    }
//    else{
//       document.getElementById("h1").innerHTML='Your mark is invalid'
//    }
// }

//question 6
// var text;
// function submition() {
//    var choice =parseInt( document.getElementById('num1').value)
//    console.log(choice)
//    switch (choice) {
//       case 1:
//          text = 'Sunday'
//          break;
//       case 2:
//          text = 'Monday'
//          break;
//       case 3:
//          text = 'Tuesday'
//          break;
//       case 4:
//          text = 'Wednesday'
//          break;
//       case 5:
//          text = 'Thursday'
//          break;
//       case 6:
//          text = 'Friday'
//          break;
//       case 7:
//          text = 'Saturday'
//          break;
//       default:
//          text = 'Invalid'
//          break;
//    }
//    document.getElementById('h1').innerHTML = text
// }


   //quwstion 7


// function submition(){
//    let num=parseInt(document.getElementById('num1').value)
//    for( let i=1; i<=10; i++){
//       let ans=i*num
//        document.write(i+' x '+num+' = '+ans +'<br>')
     
//    }
// }

    //question 8

// function submition(){
//    let sum=0
//       let num=parseInt(document.getElementById('num1').value)
//       for( let i=1; i<=num; i++){
//          if ( i%2==1){
           
//              sum=sum+i
//          document.getElementById('h1').innerHTML='sum of odd number is: '+sum
//          }
        
//     }
//  }

   //question 9



   // function submition(){
   //       let num=parseInt(document.getElementById('num1').value)
   //       for( let i=1; i<=num; i++){
   //           for(var j=1; j<=i; j++){
   //          document.write(j)
   //          }
   //          document.write('<br>')
       
            
           
   //       }
   //  }

   //question 10

   // function submition(){
   //    let limit1=document.getElementById('limit1').value
                                        
   // }

//    let limit = parseInt(window.prompt('Enter array limit'));

// let myArray1 = []; 
// let myArray2 = [];
// let myArray3 = [];


// for (var i = 0; i < limit; i++) { 
//    myArray1[i]= prompt('First array element');

// }

// for(var i = 0; i < limit; i++) {
//     myArray2[i] = prompt('Second array element ');
// }

//  console.log("First array: ");
//   for (var i = 0; i < limit; i++) {
//       console.log(myArray1[i]); 
//    }



// console.log("Second array:");
//    for (var i = 0; i < limit; i++) {
//          console.log(myArray2[i]);
// }


// myArray3= myArray1;
// myArray1= myArray2;
// myArray2 = myArray3;

// console.log("After swapping: ");

// console.log("First array: ");
//  for (let element of myArray1) {
//     console.log(element)
//  }
//  console.log("Second array: ");
//  for (let element of myArray2) {
//     console.log(element)
//  }

 //qustion 11

//  let limit = parseInt(window.prompt('Enter array limit'));
//  console.log('limit is '+limit)

//  let myarray=[];
//  var count=0;

//  for ( let i=0; i<limit; i++){
//    myarray[i]=prompt('Enter the aray values')
//    if(myarray[i]%2==0){
//       count++;
//    }
//  }

//  for(let i=0; i<limit; i++){
//    console.log(myarray[i]);
//  }
//  console.log('Number of even numbers in the given array is  '+count)

//question 12

// let limit = parseInt(window.prompt('Enter array limit'));
// console.log('limit is '+limit)

// let myarray=[];
// var temp;


// for ( let i=0; i<limit; i++){
//   myarray[i]=prompt('Enter the aray values')
 
// }
// for(let i=0; i<limit; i++){
//    console.log(myarray[i]);
//  }
 

// for(let i=0; i<limit-1; i++){
//    for(let j=i+1; j<limit; j++){
//       if(myarray[i]< myarray[j]){
//          temp=myarray[i];
//          myarray[i]=myarray[j];
//          myarray[j]=temp;
//       }
//    }
// }
// console.log('Affer sorting array ')

// for(let i=0; i<limit; i++){
//   console.log(myarray[i]);
// }


// question 13

// function submition(){
//    let words=document.getElementById('string').value
//    var lenght=words.length
//    var flag=0
 

//    for(let i=0; i<length/2; i++){
//          if(words[i]!=words[words.length-i-1]){
//             console.log('string is not palindrom')
//             flag=11
//             break;
//          }

//    }
//    if(flag==0){
//       console.log('String is palindrome')
//    }

// }

// console.log(b)


// var b=100
// let  a=90



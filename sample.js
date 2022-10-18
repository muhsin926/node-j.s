
// var read=require("readline-sync")
// let word=read.question("enter a word: ")
// len=word.length;
// flag=0;
// for(i=0;i<len;i++)
// {
//     if(word[i]!=word[len-i-1])
//     {
//         flag=1;
//         break;

//     }
// }
// if(flag==0){
//     console.log("is palindrom ")
// }
// else{
//     console.log("not palindrom")
// }

// ans 14

// var read=require("readline-sync")
// let size=parseInt(read.question("enter the size: "))
// let array=Array(size);
// let array1=Array(size);
// let sum=Array(size);
// for(let i=0;i<size;i++)
// {
//     array[i]=Array(size);
//     array1[i]=Array(size); 
//     sum[i]=Array(size);
// }
// console.log("enter the 1st array values: ");
// for(let i=0;i<size;i++)
// {
//     for(let j=0;j<size;j++){

 
//     array[i][j]=parseInt(read.question("value: "))
//     }
// }
// console.log("enter the values of second array: ")
// for(i=0;i<size;i++)
// {
//     for(j=0;j<size;j++)
//     {
//         array1[i][j]=parseInt(read.question("value: "))
//     }
// }
// for(i=0;i<size;i++)
// {
//     for(j=0;j<size;j++)
//     {
//         sum[i][j]=array[i][j]+array1[i][j];
//     }
// }

//  for(let x of sum){
//     console.log(x);
// }

//ans 15


// var read=require("readline-sync")
// let s=parseInt(read.question("enter the size"))
// let array=[]
// function getArray(){
//   for(let i=0;i<s;i++)
//   {
//     array[i]=parseInt(read.question("value: "))
//   }
// }
// function displayArray(){
//     for(i=0;i<s;i++)
//     {
//         process.stdout.write(array[i]+" ")
//     }
// }
// getArray()
// displayArray()

//ans 16


// var read=require("readline-sync")
// let num=parseInt(read.question("enter the num: "))
// let flag=0;
// for(let i=2;i<=num/2;i++)
// {
//     if(num%i==0)
//     {
//         flag=1;
//     }
// }
// if(flag==0)
// {
//     console.log("prime")
// }
// else{
//     console.log("not prime")
// }


//ans 17

// var read=require("readline-sync")
// let num1=parseInt(read.question("enter the 1st number: "))
// let num2=parseInt(read.question("enter the 2nd number: "))
// let op=parseInt(read.question("enter the option 1-add 2-sub 3-multiply 4-divide: "))
// let ans=0
// function add()
// {
//   ans=num1+num2
//   console.log("sum is: "+ans)
// }
// function sub()
// {
//   ans=num1-num2
//   console.log("sum is: "+ans)
// }
// function mul()
// {
//   ans=num1*num2
//   console.log("sum is: "+ans)
// }
// function div()
// {
//   ans=num1/num2
//   console.log("sum is: "+ans)
// }
// switch(op){
//             case 1:add();
//             break;
//             case 2:sub();
//             break;
//             case 3:mul();
//             break;
//             case 4:div();
//             break;
// }

//ans 18

// var read=require("readline-sync")
// let written=parseInt(read.question("enter written test score: "))
// let lab=parseInt(read.question("enter lab test score: "))
// let assignment=parseInt(read.question("enter assignment mark: "))
// let grade=((written*70)/100)+((lab*20)/100)+((assignment*10)/100)
// console.log("grade: "+grade)


//ans 19
 
// var read=require("readline-sync")
// let income=parseInt(read.question("enter the annual income: "))
// let tax=0;
// if(income>=1000000||income<=5000000)
// {
//     tax=income*30/100
// }
// else if(income>=500000)
// {
//     tax=((income*20)/100)
// }
// else if(income>=250000)
// {
//     tax=(income*5)/100
// }
// console.log("tax: "+tax)
// console.log(income)


// ans 20

// var read=require("readline-sync")
// let count=0
// for(let i=0;i<5;i++)
// {
//     for(let j=0;j<i;j++)
//     {
//         count++
//         process.stdout.write(count+" ")
//     }
//     console.log(" ")
// }


//ans 21

// var read=require("readline-sync")
// let array=[]
// let array2=[]
// let lim=parseInt(read.question("enter the limit: "))
// for(let i=0;i<lim;i++)
// {
//     array[i]=parseInt(read.question("value: "))
// }
// for(i=0;i<lim;i++)
// {
//     array2[i]=(array[i])*(array[i+1])
// }
// for(i=0;i<lim;i++)
// {
//     console.log(array2[i])
// }

//ans22


// var read=require("readline-sync")
// let size=parseInt(read.question("enter the size: "))
// let array1=Array(size)
// let array2=Array(size)
// let sum=Array(size)
// for(let i=0;i<size;i++)
// {
//     array1[i]=Array(size)
//     array2[i]=Array(size)
//     sum[i]=Array(size)

// }
// function getArray(){
//     console.log("enter the values to 1st array: ")
//     for(i=0;i<size;i++)
//     {
//         for(let j=0;j<size;j++)
//         {
//             array1[i][j]=parseInt(read.question(" "))
//         }
//     }
//     console.log("enter the values to 2nd array: ")
//     for(i=0;i<size;i++)
//     {
//         for(let j=0;j<size;j++)
//         {
//             array2[i][j]=parseInt(read.question(" "))
//         }
//     }
// }
// function addArray(){
//     for(i=0;i<size;i++)
//     {
//         for(let j=0;j<size;j++)
//         {
//             sum[i][j]=array1[i][j]+array2[i][j]
//         }
//     }
// }
// getArray()
// addArray()

// for (let x of sum ){
//     console.log ( x )
// }


//ans 23

// var read=require("readline-sync")
// class arrays{
//      getArray(num) {
//         console.log("enter the values to the array")
//         let array1=Array(num)
//         for(let i=0;i<num;i++)
//         {
//             array1[i]=Array(num)
//         }

//         for(let i=0;i<num;i++)
//         {
//             for(let j=0;j<num;j++){
//             array1[i][j]=parseInt(read.question("enter value: "))
//             }
//         }

//        return array1;
//     }
//     displayArray(array)
//     {
//         console.log("array: ")
//         for(let i=0;i<array.length;i++)
//         {
//             for(let j=0;j<array.length;j++)
//             {
//                 process.stdout.write(" "+array[i][j])
//             }
//             console.log(" ")
//         }
     
           
//         }
   

// }
// const size=parseInt(read.question("enter the size: "))
// let obj=new arrays
// let val=obj.getArray(size)
// obj.displayArray()


//ans 24

// var r=require("readline-sync")
// class area{
//     circle(){
//         let rad=parseInt(r.question("enter the radious: "))
//         console.log("area of circle: "+ 3.14*rad*rad)
//     }
//     square(){
//         let a=parseInt(r.question("enter the length: "))
//         console.log("area of square: "+ (a*a))
//     }
//     rectangle(){
//         let l = parseInt(r.question("Enter the Length :"));
//         let b = parseInt(r.question("Enter the Breadth :"));
//         console.log("Area of the Rectangle is :" + (b * l));
//     }
//     triangle(){
     
//         let b = parseInt(r.question("Enter the base :"));
//         let h = parseInt(r.question("Enter the height :"));
//         console.log("Area of the Rectangle is :" + (b * h) /2);

//     }
// }

// class myclass extends area{
//     constructor() {
//         super();
//         console.log(
//         "Enter Your choice\n 1.Circle \n 2.Square \n3.Rectangle \n 4.Triangle"
//         );
//         var r = require("readline-sync");
//         let o = new area();

//         var c = parseInt(r.question(""));
//         switch (c) {
//             case 1:o.circle()
//             break;
//             case 2:o.square()
//             break;
//             case 3: o.rectangle()
//             break;
//             case 4: o.triangle()
//             break; 
//             default:console.log('invalid')
//             break;
//         }
//     }
// } 

//ans 25

// var library = [
//     {
//     title: "Bill Gates",
//     author: "The Road Ahead",
//     readingStatus: true,
//     },
//     {
//     title: "Steve Jobs",
//     author: "Walter lsaacson",
//     readingStatus: true,
//     },
//     {
//     title: "Mockingjay: The Final Book of The Hunger Games",
//     author: "Suzanne Collins",
//     readingStatus: false,
//     },
//     ];
//     for(elements in library){
//     if (library[elements].readingStatus) {
//     console.log(`Already read
//     ${library[elements].title} by
//     ${library[elements].author}`);
//     }else{{
//         console.log(`You still need to read
//         ${library[elements].title} by
//         ${library[elements].author}`);
//         }
//         }
//     }


//ans 26
// try{
// var read =require('readline-sync')
// let use= read.question('Enter here')
// let use1 = use.split('').reverse('').join('');
// console.log(' reverse : '+use1)
// }
// catch(err){
//     console.log( 'Error': +err.massage)
// }
// finally{
//     console.log ('type is : '+ typeof use)

// }

//ans 27


// try{
//     let read=require('readline-sync')
//     let userHeight=read.question('Enter your Height')
//     userHeight=Number(userHeight);
//     if (isNaN(userHeight)) throw "notANumberError";
//     if (userHeight > 200) throw "HugeHeightError";
//     if (userHeight < 40) throw "TinyHeightError";
//      console.log( `Your height is ${userHeight}.valid`);
// }
// catch(error){
//     console.log(error)
// }

//ans 28

// class car{
//     constructor(name,milage, max_speed){
//         this.name =name
//         this.milage=milage
//         this.max_speed=max_speed
//     }
// }

//ans 29


// const read = require('readline-sync')
// const myArray = []
// const limit = 5;
// console.log("Enter array elements");
// for (let i = 0; i < limit; i++) {
// myArray[i] = Number(read.question())
// }
// let sum = myFilter(myArray,callback);
// console.log("The sum of the elements :"+sum);
// function myFilter(myArray,callback){
// let res = 0;
// for (let i = 0; i < limit; i++) {
// res = eval(res) + eval(myArray[i])
// }
// console.log("The sum of the elements in the array iseven :"+callback());
// return res;
// }
// function callback(sum){
// let bool = sum%2==0;
// return bool;
// }

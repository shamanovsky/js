// write a function that takes the input string and reverses it
// example
// argument: Hello
// return: olleH

function reverseThisString(string)
{
    var newString = "";
    for (var i = string.length - 1; i >= 0; i--) { 
        newString += string[i]; 
    }
 
    return newString;
}
console.log(reverseThisString('Hello'));



// write a function that takes the input string and switches all uppercase characters to lowercase and lowercase charcaters to uppercase
// example:
// argument: Hello World
// return: hELLO wORLD


function swapCase(string)
{
    var newString = "";
    for (var i = 0; i < string.length; i++) 
    { 
        character = string[i];
        
        if (character == character.toUpperCase()) 
        {
            newString += character.toLowerCase();;
        }
        if (character == character.toLowerCase()){
            newString += character.toUpperCase();
        }
    }
    return newString;
}
console.log(swapCase('Hello World'));



//convert array of numbers from Fahrenheit to Celsius
// example:
// argument: [23, 32, 41, 50, 59]
// return: [-5, 0, 5, 10, 15]
// hint: use Array.map


function toCelcius(array){
    var n = array.length;
    var celcius = new Array(n);
    
    for (var i = 0; i < n; i++)
    {
        celcius[i] = (array[i] - 32)/1.8;
    }
    
    return (celcius);
}

console.log(toCelcius([23, 32, 41, 50, 59]));


//write a function that takes an input array and returns an array of booleans (>=75) or fail (<75)
// example:
// argument: [20, 30, 50, 80, 90, 100]
// return: [false, false, false, true, true, true]
// hint: use Array.map

function passOrFail(array){
    var n = array.length;
    var newArray = new Array(n);
    
    for (var i = 0; i < n; i++)
    {
        if(array[i] >= 75)
            newArray[I] = true;
        else
            newArray[I] = false;
    }
    
    return (newArray);
}
console.log(passOrFail([20, 30, 50, 80, 90, 100]));



//write code that loops through the two variables returns an array ['2 is zwei', '3 is drei', '4 is vier', '5 is fünf', '6 is sechs']
// example:
// return: ['2 is zwei', '3 is drei', '4 is vier', '5 is fünf', '6 is sechs']
// hint: use Array.forEach, Array.map or a for loop
function germanNumbers(){
    const cardinalNumbers = [2,3,4,5,6];
    const germanNumbers = ['zwei', 'drei', 'vier', 'fünf', 'sechs'];
    
    var n = cardinalNumbers.length;
    var newArr = new Array(n);
    for (var i = 0; i < n; i++)
    {
        newArr[i] = cardinalNumbers[i] + " is " + germanNumbers[i];
    }
    
    return (newArr);
}
console.log(germanNumbers());


// write code that returns an array of ONLY prime numbers that are in the array numbers
// example: 
// return [2, 3, 5, 7, 11, 13]
// hint use: Array.filter
function returnPrimeNumbers(){
    const numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
    
    var n = numbers.length;
    var newArr = new Array(n);
    var k = 0;
    for (var i = 0; i < n; i++)
    {
        var flag = 0;
        for (var j = 2; j < numbers[i]; j++)
        {
            if(numbers[i]%j == 0)
                flag = 1;
        }
        
        if(flag == 0 && numbers[i] != 1)
        {
            newArr[k] = numbers[i];
            k = k + 1;
        }
    }
    
    var prime = new Array(k);
    for (var i = 0; i < k; i++)
    {
        prime[i] = newArr[i];
    }
    
    return(prime);
}
console.log(returnPrimeNumbers());




//Write a function that loops through and console.log's the numbers from 1 to 100, except multiples of three, log (without quotes) "CSC225 RULES" instead of the number, for the multiples of five, log (without quotes) "I LOVE JAVASCRIPT". For numbers which are multiples of both three and five, log (without quotes) "CSC225 RULES I LOVE JAVASCRIPT" Console log out:

using System;
class HelloWorld {
    static void numLoop()
        {
            for (int i = 1; i < 100; i++)
            {
                if (i % 3 == 0 && i % 5 == 0)
                {
                    Console.WriteLine("CSC225 RULES I LOVE JAVASCRIPT");
                }
                else if (i % 3 == 0)
                {
                    Console.WriteLine("CSC225 RULES");
                }
                else if (i % 5 == 0)
                {
                    Console.WriteLine("I LOVE JAVASCRIPT");
                }
                else
                {
                    Console.WriteLine(i);
                }
            }
        }
  static void Main() {
    numLoop();
  }
}
// Exercise 1
const maxOfTwoNumbers = (x, y) => {
    if (x >= y) {
      return x;
    } else {
      return y;
    }
  }
  console.log('------------------------')
  console.log('Exercise 1 Result:', maxOfTwoNumbers(3, 9));

// Exercise 2
  const isAdult = (age) =>{
    if(age>=18){
        return 'Adult'
    }
    else{
        return "Minor"
    }
  }
  console.log('------------------------')
  console.log('Exercise 2 Result:', isAdult(21));

// Exercise 3
  const isCharAVowel = singleChar =>{
    if(singleChar == 'a' || singleChar == 'e' || singleChar == 'i' || singleChar == 'o' ||singleChar == 'u'){
        return true;
    }
    else{
        return false;
    }
  }
  console.log('------------------------')
  console.log('Exercise 3 Result:', isCharAVowel("a"));

// Exercise 4
  const generateEmail = (name,domain) =>{
    return `${name}@${domain}`
  }
  console.log('------------------------')
  console.log('Exercise 4 Result:', generateEmail("johnsmith", "example.com"));

// Exercise 5
  const greetUser= (name,time)=>{
    if(time ==="morning"){
        return `Good Morning , ${name}!`
    }
    else if(time ==="afternoon"){
        return `Good afternoon , ${name}!`
    }
    else if(time ==="night"){
        return `Good night , ${name}!`
    }
    else{
        return 'invalid time value'
    }
  }
  console.log('------------------------')
  console.log('Exercise 5 Result:', greetUser("Sam", "night"));

  // Exercise 6
  const maxOfThree = (x,y,z) =>{
    if(x > y && x > z){
        return x;
    }
    else if(y > x && y > z){
        return y;
    }
    else if(z > x && z > y){
        return z;
    }
    else{
        return `Two or more numbers has the same value`
    }
}
console.log('------------------------')
console.log('Exercise 6 Result:', maxOfThree(17, 3, 8));

// Exercise 7
const calculateTip = (amount , tip)=>{
    return amount*(tip/100);
}
console.log('------------------------')
console.log('Exercise 7 Result:', calculateTip(70, 20));

// Exercise 8
const convertTemperature = (temp,t)=>{
    if(t ==="c" || t==="C"){
        return (temp *9/5)+32
    }
    else if(t==='f' || t==='F'){
        return (temp - 32)*5/9
    }
    else{
        return 'Please Enter a right value , Fahrenheit (F), Celsius(C)'
    }
}
    console.log('------------------------')
    console.log('Exercise 8 Result:', convertTemperature(32, "c"));

// Exercise 9
    const basicCalculator = (x,y,str)=>{
        if(str ==='add'){
            return x+y
        }
        else if(str==='subtract'){
            return x-y
        }
        else if(str ==='multiply'){
            return x*y
        }
        else if(str === 'divide'){
            return x/y
        }
        else{
            return 'Enter a valid operation to execute'
        }
    }
    console.log('------------------------')
    console.log('Exercise 9 Result:', basicCalculator(10, 5, "divide"));

    // -----------------Levle Up - one Exercise---------------------

    // Exercise 10
   const calculateGrade= (grade) =>{
    if(grade >= 90 && grade<=100)// so invalide numbers will show a result
        return 'A'
    else if(grade >=80 && grade <=89){
        return 'B'
    }
    else if(grade >=70 && grade <=79){
        return 'C'
    }
    else if(grade >=60 && grade <=69){
        return 'D'
    }
    else if(grade<60 && grade>=0) { // so no one can enter negative values
        return 'F'
    }
    else{
        return 'Wrong Value!'
    }
   }
   console.log("-----------Level Up------------")
   console.log('Exercise 10 Result:', calculateGrade());

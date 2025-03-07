let shoppinglist=['milk', 'eggs', 'bread' , ['apples', 'bananas', 'orange'], ['potatoes', 'tomatoes', 'onion']];

//fetch the first item in the grocery items list
console.log(shoppinglist[0]);

//add "Carrots" to the end of the grocery items list
shoppinglist.push('carrots');
console.log(shoppinglist);

//remove the last item from the grocery items list
shoppinglist.pop();
console.log(shoppinglist);

//remove "Tomatoes" and "Onions" from the grocery items list, and add "Cucumbers" and "Bell Peppers" in their place.
shoppinglist.splice(0,2, 'Tomatoes','Onions' );
console.log(shoppinglist);


let student = {
    name: "Amit",
    age: 20,
    grade: "A",
    address: {
        street: "123 Main St",
        city: "Anytown",
        country: "India"
    }
};

//fetch the student's name.
console.log(student.name);

//add a new property phone with the value "123-456-7890" to the student object.
student.phone='123-456-7890';
console.log(student);

//remove the grade property from the student object.
delete student.grade;
console.log(student);

//modify the student's age to 21
student.age='21';
console.log(student);

//a number as input and returns "Positive" if the number is greater than 0, "Negative" if it's less than 0, and "Zero" if it's equal to 0.
let number=0;
if(number>0){
    console.log('Positive');
}
else if (number<0) { 
    console.log('Negative');
    
} else {
    console.log('Zero');
}


//The program should output "A" if the score is between 90 and 100, "B" if it's between 80 and 89, 
// "C" if it's between 70 and 79, "D" if it's between 60 and 69, and "F" if it's below 60.
let score=101;
if(score>=90 && score<=100){
    console.log('Grade : A');
}
else if (score>=80 && score<=89){
    console.log('Grade : B');
}
else if (score>=70 && score<=79){
    console.log('Grade : C');
}
else if (score>=60 && score<=69){
    console.log('Grade : D');
}
else if(score<60){
    console.log('Grade : F');
}
else if(score>=101){
    console.log('Grade : Not correct score');
}


//a string as input and returns "Truthy" if the string is not empty, "Falsy" otherwise.
let value='hai';
value? console.log('Truthy'):console.log('Falsy');



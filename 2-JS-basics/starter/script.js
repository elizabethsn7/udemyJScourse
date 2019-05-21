
/*
var firstName = 'Liz';
console.log(firstName);
var lastName = 'Kipp';
var age = 42;

var fullAge = true;
console.log(fullAge);


console.log(job);
*/
/****************
* Variable Mutation and type coercion

Type coercion

console.log(firstName + ' ' + age);
var job, isMarried;
job = 'Photographer & Web Developer';
isMarried = true;
console.log(firstName + ' is a ' + age + ' year old' + job + '. Is she married? ' + isMarried);
*/

//Variable mutation
/*
age = 'fourty two';
job = ' driver';
alert(firstName + ' is a ' + age + ' year old' + job + '. Is she married? ' + isMarried);

var lastName = prompt('What is her last name? ');
console.log(firstName + ' ' + lastName);
*/

/**********************
* Basic Operators
*/

/*
var now, yearLiz, yearJustin;
now = 2019;
ageLiz = 42;
ageJustin = 41;
*/
//Math Operators
/*
yearLiz = now - 42;
yearJustin = now - 41;

console.log(yearJustin);
console.log(now +2);
console.log(now * 2);
*/

//Logical Operators
/*
var lizOlder = ageLiz < ageJustin;
console.log(lizOlder);
*/

// typeof Operator
/*
console.log(typeof lizOlder);
console.log(typeof ageJustin);
console.log(typeof 'I am older than Justin');
var x;
console.log(typeof x);
*/


/************
* Operator Precedence
*/
/*var now, yearJohn, fullAge;
now = 2019;
yearJohn = 1989;
fullAge = 18;
*/

//Multiple Operators
/*var isFullAge = now - yearJohn >= fullAge;
console.log(isFullAge);
*/
//Grouping
/*var ageJohn = now - yearJohn;
var ageMark = 35;
var average = (ageJohn + ageMark) / 2;
console.log(average);
*/
//Multiple assignments
/*var x, y;
x = y = (3 + 5) * 4-6; // 8 * 4 - 6 // 32 - 6 // 26
console.log(x, y);
*/

//More Operators
/*x = x * 2;
same as saying \|/

x *= 2;
console.log(x);
x += 10;
console.log(x);
x++;
console.log(x);
*/

/**********************
* Coding Challenge
*/

/*
Mark & John are comparing their BMI, calculated using
the formula BMI = mass/height^2 = mass / (height * height).
(mass in kg and height in meter).

1. Store M & J's mass and height in variables
2. Calculate both BMI's
3. Create a boolean variable containing information about whether
M has a higher BMI than John.
4. Print a string to the console containing information
the variable from step 3 (Something like "Is Mark's
BMI higher than John's true")
*/

// Step 1
/*
var johnsMass = 25;
var johnsHeight = 45;
var marksMass = 35;
var marksHeight = 45;
*/
//Step 2
/*
var johnsBmi = johnsMass / (johnsHeight * johnsHeight);
var marksBmi = marksMass / (marksHeight * marksHeight);
console.log(johnsBmi, marksBmi);
*/
//Step 3
/*var biggerBmi = marksBmi > johnsBmi;
console.log(biggerBmi);
*/
//Step 4
//console.log('Is Mark\'s BMI higher than Johns? ' + biggerBmi);


/*
var firstName = 'Liz';
var civilStatus = 'single';

if(civilStatus === 'married') {
	console.log(firstName + ' is married');
} else {
	console.log(firstName + ' will hopefully marry soon :')
}

var isMarried = true;
if(isMarried) {
	console.log(firstName + ' is married');
} else {
	console.log(firstName + ' will hopefully marry soon :')
}
*/

/*
var johnsMass = 25;
var johnsHeight = 45;

var marksMass = 35;
var marksHeight = 45;

var johnsBmi = johnsMass / (johnsHeight * johnsHeight);
var marksBmi = marksMass / (marksHeight * marksHeight);

if(johnsBmi > marksBmi) {
	console.log('Mark\'s BMI is higher than John\'s');
} else{
	console.log('John\'s BMI is higher than Mark\'s')
}
*/


/****************
* Boolean Logic
*/
/*
var firstName = 'John';
var age = 30;

if (age < 13) {
	console.log(firstName + ' is a boy.');
} else if (age >= 13 && age <= 20) {
	console.log(firstName + ' is a teenager.')
} else {
	console.log('John is a man!')
}
*/

/****************
* The Ternary Operator & Switch Statements
*/

var firstName = 'John';
var age = 16;

//Ternary Operator
age >= 18 ? console.log(firstName + ' drinks beer.')
: console.log(firstName + ' drinks juice.')

var drink = age >= 18 ? 'beer' : 'juice';
console.log(drink);

//Switch Statement
/*
var job = 'instructor';
switch(job) {
	case 'teacher':
	case 'instructor':
		console.log(firstName + ' teaches kids how to code.');
		break;
	case 'driver':
		console.log(firstName + ' is a driver.');
		break;
	case 'designer':
		console.log(firstName + ' makes beautiful websites');
		break;
	default:
		console.log(firstName + ' does something else');
}

switch(true) {
	case age < 13:
		console.log(firstName + ' is a boy.');
		break;
	case age >= 13 && age < 20:
		console.log(firstName + ' is a teenager.')
		break;
	default:
	console.log('John is a man!')
}

var firstName = 'John';
var age = 17;

if (age < 13) {
	console.log(firstName + ' is a boy.');
} else if (age >= 13 && age <= 20) {
	console.log(firstName + ' is a teenager.')
} else {
	console.log('John is a man.')
}
*/

/*******************
* Truthy and Falsy values and equality operators
*/
//falsy values: undefined, null, 0, '', NaN
//truthy values: Not falsy values
/*
var height = 23;
if (height || height === 0) {
	console.log('variable is defined');
} else {
	console.log('variable has NOT defined');
}

// Equality operators
if(height == '23') {
	console.log('The == Operator does type coercion!');
}
*/


/*John and Mike both play basketball but on different teams.
And in the latest three games, John's team has scored
89, 120 and 103 points. And Mike's team has scored
116, 94 and 123 points.

1. Calculate the average score for each team.
2. Decide which team wins in average (heighest avg score),
and print the winner to the console.
Also include the average score in the output.
3. The change the scores to show different winners
Don't forget that there may be a draw (same average score)

4. EXTRA: Mary also plays basketball & her team scored
97, 134 & 105 points. Like before, log the average winner
to the console. HINT: You will need the && operator to make
the decision.

5. Change the scores to generate different winners.


var johnsAverage = (10 + 10 + 103) / 3;
var mikesAverage = (10 + 10 + 103) / 3;
var marysAverage = (97 + 34 + 105) / 3;
console.log(johnsAverage, mikesAverage, marysAverage);

if(johnsAverage > mikesAverage) {
	console.log('John\'s team\'s average score is higher than Mike\'s');
} else if (johnsAverage < mikesAverage) {
	console.log('Mike\'s team\'s average score is higher than John\'s');
} else {
	console.log('There is a draw');
}

if (johnsAverage > mikesAverage && johnsAverage > marysAverage) {
	console.log('John\'s team\'s average score is higher than Mike & Mary\'s with' + johnsAverage + ' points');
} else if (mikesAverage > johnsAverage && mikesAverage > marysAverage) {
	console.log('Mike\'s team\'s average score is higher than John & Mary\'s with' + mikesAverage + ' points');
} else if (marysAverage > johnsAverage && marysAverage > mikesAverage) {
	console.log('Mary\'s team\'s average score is higher than Mike & John\'s with ' + marysAverage + ' points');
}
*/



/********************
* Functions
*/

/*
function calculateAge(birthYear) {
	return 2019 - birthYear;
}
var ageJohn = calculateAge(1990);
console.log(ageJohn);

function yearsUntilRetire(year, firstName) {
	var age = calculateAge(year);
	var retirement = 65 - age;
		if (retirement > 0) {
			console.log(firstName + ' retires in ' + retirement + ' years');
		} else {
			console.log(firstName + ' is already retired')
		}

}
yearsUntilRetire(1975, 'Mike');
yearsUntilRetire(1948, 'John');
yearsUntilRetire(1999, 'Jane');
*/



/********************
* Function Statement and Expressions
*/

// Function Declaration
// function whatDoYouDo(job, firstName) {}


// Function Expression
var whatDoYouDo = function(job, firstName) {
	switch(job) {
		case 'teacher':
			return firstName + ' teaches kids how to code';
		case 'driver':
			return firstName + ' is a Nascar driver';
		case 'designer':
			return firstName + ' designs beautiful websites';
		default:
			return firstName + ' does something else';
	}
}
console.log(whatDoYouDo('teacher', 'John'));
console.log(whatDoYouDo('designer', 'Jane'));
console.log(whatDoYouDo('retired', 'Mark'));

/* An JS expression always returns a value no longer how long it is
* A JS statement performs actions. They do things but do not produce
* an immediate value for example an if statement, for loop, while...
*/



/*******************
* Arrays
*/

//Initialize new array
var names = ['John', 'Mark', 'Jane'];

//can also write an array like this but not common
var years = new Array(1990, 1969, 1948);

console.log(names[2]); //will return Jane
console.log(names.length); // will return length of array

names[1] = 'Ben'; //replaces index 1 with 'Ben'
names[names.length] = 'Mary'; // adds 'Mary to the end of the array'
console.log(names);

// Different data types
var john = ['John', 'Smith', 1990, 'designer', false];

// Methods
john.push('blue');
john.unshift('Mr. ') // unshift adds to the beginning
console.log(john);

john.pop() // pop removes the last element
john.shift() // removes the first element
console.log(john);

console.log(john.indexOf(1990));


/* this is asking if 'designer' is found anywhere in the
* array and if it is not (then it is equal to -1) it will
* return 'John is NOT'
* the : acts as an else statement saying otherwise return
* 'John IS...'
*/
var isDesigner = john.indexOf('designer') === -1 ?
'John is NOT a designer' : 'John IS a designer';
console.log(isDesigner);


/******************************
* CODING CHALLENGE 2
*/

/*
John and his family went on vacay and went to
3 different restaurants. The bills were $124, $48 and
$268.

To tip the waiter a fair amount, he created a simple
tip calculator (as a function). He likes to tip 20% of
the bill when the bill is less than $50, 15% of the bill
when it is between $50 and $200, and 10% if the bill is
more than $200

In the end John would like to have 2 arrays:
1) Containing all 3 tips(one for each bill)
2) Containing all three final paid amounts(bill + tip)

*/


/*
function tipCalculator(bill) {
	var percentage;
	if(bill < 50) {
		percentage = .2;
	} else if (bill >= 50 && bill < 200) {
		percentage = .15;
	} else {
		percentage = .1;
	}
	return percentage * bill;
}

var bills = [124, 48, 268];
var tips = [tipCalculator(bills[0]),
						tipCalculator(bills[1]),
						tipCalculator(bills[2])];


var finalBill = [bills[0] + tips[0],
								bills[1] + tips [1],
								bills[2] + tips [2]];
console.log(finalBill);
*/


/*************************
* Objects and Properties
*/


//Object Literal
/*
var betty = {
	firstName: 'Betty',
	lastName: 'Rubble',
	birthYear: 1950,
	family: ['Barney', 'Bam Bam', 'the cat'],
	job: 'dino slayer',
	isMarried: true
};
console.log(betty.firstName);
console.log(betty['lastName']);
var x = 'birthYear';
console.log(betty[x]);

//mutate the data
betty.job = 'house wife';
betty['isMarried'] = false;
console.log(betty);

//New Object Syntax
var barney = new Object();
barney.firstName = 'Barney';
barney.birthYear = '1949';
barney.job = 'Rock thrower';
console.log(barney);
*/

/*********************
* Objects and Methods
*/

/*
var betty = {
	firstName: 'Betty',
	lastName: 'Rubble',
	birthYear: 1950,
	family: ['Barney', 'Bam Bam', 'the cat'],
	job: 'dino slayer',
	isMarried: true,
	calcAge: function() {
		//this refers to the betty Object!!!
		return 2018 - this.birthYear;
	}
};
console.log(betty.calcAge());
*/

/*
//same as above but using the this keyword
var betty = {
	firstName: 'Betty',
	lastName: 'Rubble',
	birthYear: 1950,
	family: ['Barney', 'Bam Bam', 'the cat'],
	job: 'dino slayer',
	isMarried: true,
	calcAge: function() {
		//this refers to the betty Object!!!
		this.age = 2018 - this.birthYear;
	}
};
//now need to call the function
betty.calcAge();
console.log(betty);
*/


/********************
* Coding Challenge 4
*/


/*
Remember the first coding challenge where Mark
and John compared their BMI's. Now implement the
same functionality with objects and methods.

1. For each of them, create an object with properties
for their full names, mass, and height.

2. Then, add a method to each object to calculate the
BMI. Save the BMI to the object and also return it from
the method.

3. Log to the console who has the highest BMI,
together with the full name and the respective BMI.
*They may have the same BMI.
REMEMBER that function you attach to objects are referred
to as methods!
BMI = mass/height^2
*/


var john = {
	firstName: 'John',
	lastName: 'Smith',
	mass: 25,
	height: 35,
	calcBmi: function() {
		this.bmi = this.mass / (this.height * this.height);
		return this.bmi;
	}
}

var mark = {
	firstName: 'Mark',
	lastName: 'Miller',
	mass: 35,
	height: 45,
	calcBmi: function() {
		this.bmi = this.mass / (this.height * this.height);
		return this.bmi;
	}
}

john.calcBmi();
mark.calcBmi();
console.log(john, mark);


var highestBmi = john.calcBmi > mark.calcBmi ?
john.firstName + ' ' + john.lastName + ' has the highest BMI at ' + john.calcBmi
: mark.firstName + ' ' + mark.lastName + ' ' +
			' has the highest BMI at ' + mark.calcBmi;
console.log(highestBmi);

if(john.bmi > mark.bmi) {
	console.log(john.firstName + ' ' + john.lastName + ' has the highest BMI at ' + john.calcBmi);
} else if (john.bmi > mark.bmi) {
	console.log(mark.firstName + ' ' + mark.lastName + ' has the highest BMI at ' + mark.calcBmi);
} else {
	console.log('They have the same BMI.');
}


/**************************
* Loops and Iteration
*/

//For Loop
var betty = ['Betty', 'Boop', 1939, 'Movie Star', false];
for (var i = 0; i > betty.length - 1; i--) {
	console.log(betty[i]);
}
// /\ & \/ these are the same

//While Loop
var i = 0;
while(i < betty.length) {
	console.log(betty[i]);
}

//Continue and Break Statements
var betty = ['Betty', 'Boop', 1939, 'Movie Star', false, 'red'];
for (var i = 0; i < betty.length; i++) {
	if(typeof betty[i] !== 'string') continue; //break will stop the loop and
	//not print anything else from there.
	console.log(betty[i]);
}

//Looping Backwards
var betty = ['Betty', 'Boop', 1939, 'Movie Star', false];
for (var i = betty.length - 1; i >= 0; i--) {
	console.log(betty[i])
}

/***************************
* CODING CHALLENGE 5
*/

/* Adding onto the tip Calculator
John and his family went to 5 different restaurants. The bills
were $124, $48, $268, $180 and $42.
He tips 20% when bill < $50, 15% when bill > 50 && <= 200
and 10% when bill > 200

Implement a tip calculator using objects and loops:
1. Create an object with an array for the bill values
2. Add a method to calculate the tip
3. This method should include a loop to iterate over
all of the bills and do the tip calculations
4. As an output, create:
	A) A new array containing all of the tips
	B) An array containing final paid amounts(bill + tips)

HINT: Start with 2 empty arrays [] as properties and then fill them
up in the loop - One for all the tips and one for the final amount
*/

var john = {
	fullName: 'John Smith',
	bills: [124, 48, 268, 180, 42],
	calcTip: function() {
		this.tips = [];
		this.finalValues = [];

		for(var i = 0; i <= this.bills.length; i ++) {
			//Determine the percentage based on the tipping rules
			var percentage;
			var bill = this.bills[i];
				if(bill < 50) {
					percentage = .2;
				} else if (bill >=50 && bill < 200) {
					percentage = .15;
				} else {
					percentage = .1;
				}
			// Add results to the corresponding arrays
				this.tips[i] = bill * percentage;
				this.finalValues[i] = bill + this.tips[i];

		}
	}
}
john.calcTip();
console.log(john);
/*
EXTRA AFTER FINISHING:
Mark's family also went on a vacay, going to 4 different restaurants. The bills
were $77, $375, $110, and $45
Mark tips 20% when the bill < $100, 10% when bill > 100 && bill < 300,
and 25% when bill > 300.

5. Implement the same functionality as before with Marks rules.
6. Create a function, not a method to calculate the average of a given
array of tips. HINT: Loop over the array, and in each iteration store
the current sum in a variable (starting from 0). After you have the
sum of the array, divide it by the number of elements in it(that's how you
calculate the average)
7. Calculate the average tip for each family
8. Log to the console which family paid the highest tips on average
*/

var mark = {
	fullName: 'Mark Miller',
	bills: [77, 375, 110, 45],
	calcTip: function() {
		this.tips = [];
		this.finalValues = [];

		for(var i = 0; i <= this.bills.length; i++) {
			var percentage;
			var bill = this.bills[i];
				if(bill < 100) {
					percentage = .2
				} else if (bill >=100 && bill < 300) {
					percentage = .1;
				} else {
					percentage = .25
				}
				this.tips[i] = bill * percentage;
				this.finalValues[i] = bill + this.tips[i];
			}
		}
}
mark.calcTip();
console.log(mark);


























































































































































































































































































































































































































































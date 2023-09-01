/* 
* This exercise asks you to write a program — any program! — that contains nested functions and block scopes, which satisfies these constraints: 
* If you color all the scopes (including the global scope!) different colors, you need at least six colors. Make sure to add a code comment labeling each scope with its color.
* BONUS: identify any implied scopes your code may have.

* Each scope has at least one identifier.

* Contains at least two function scopes and at least two block scopes.

* At least one variable from an outer scope must be shadowed by a nested scope variable (see Chapter 3).

* At least one variable reference must resolve to a variable declaration at least two levels higher in the scope chain.
*/

// RED(1), global
const students = ["Sara", "Frank", "John"];

const makeStudentsUppercase = (students) => {
	// BLUE(2), with shadowing
	students = students.map(
		// YELLOW(3)
		(student) => student.toUpperCase()
	);
	console.log(students);
};

const addStudent = (name) => {
	// GREEN(4)
	if (students.includes(name) || name == undefined) {
		// ORANGE(5)
		console.log(`Couldn't add ${name} to the list`);
	} else {
		// PURPLE(6), referencing a variable two levels higher (students)
		const length = students.push(name);
		console.log(`Added ${name} to students list. Now the length is ${length}`);
	}
};

makeStudentsUppercase(students);
makeStudentsUppercase(["Carlos", "Luiz"]);
addStudent("Luiz");
addStudent();
var name = 'Martin';
var lastname = 'Segovia';

var student = (name+ " " + lastname);
var studentMayus = student.toUpperCase();
var studentminus = student.toLowerCase();
var studentCant = student.length;
var nameFirst = name[0];
var surnameLast = lastname[6];
var studentdelete = name.concat(lastname); 
var studentbool = student.includes(name);


console.log(student, " / ",studentMayus," / ",studentminus);
console.log(studentCant," / ",nameFirst," / ",surnameLast);
console.log(studentdelete," / ", studentbool);
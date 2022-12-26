let factorial = 1;
// factorial con FOR
for(let i = 10; i > 0; i--)
{
    factorial *= i;
}
console.log(factorial);

//factorial con WHILE
let n=10, i=1, fact=1
while(i<=n)
{
  fact = fact*i; 
  i++;
}
console.log(fact);

//factorial con WHILE, IF, BREAK
let n1=10, i1=1, fact1=1
while(i1 <=n1)
{
    fact1 = fact1*i1; 
    i1++;
    if (n1 < 0)
    {
    console.log("-1");
    }
    else if (n1 == 0) 
    {
    console.log("1");
    }
}
console.log(fact1);

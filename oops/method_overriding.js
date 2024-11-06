/*  when we used same function pass with same  arguments that method is used method overriding
*/
/*  when we used same function pass with different arguments that method is used method overloading

*/

class A 
{
    constructor(a,b,c)
    {
        this.a=a;
        this.b=b;
        this.c=c;
        this.c=a+b;

    }
}
class B extends A 
{
    constructor(a,b,c)
    {
        super(a,b,c);
        this.c=c;
        this.c=a*b;

    }
}

const a=new B(10,20);
console.log(a);
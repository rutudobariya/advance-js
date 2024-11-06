class A 
{
    // constructor is same name of class if we called object of any class constructor autom atically called 
    constructor(a,b) 
    {

        this.a=a;
        this.b=b;
        this.c=a+b;

    }
}

const a=new A(20,30);
console.log(a);
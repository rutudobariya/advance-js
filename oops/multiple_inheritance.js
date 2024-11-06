/*
Note : multiple inheritance in not supported in javascript, php and java 
  
*/

class A 
{
    constructor(nm,age)
    {
        this.nm=nm;
        this.age=age;
    }
}

class B extends A 
{
    constructor(nm,age,address)
    {
        super(nm,age,address);
        this.address=address;
    }
}


class C extends A,B 
{
    constructor(nm,age,address,salary)
    {
        super(nm,age,address,salary);
        this.salary=salary;
    }
}

const tst=new C("brijesh","32","near and b/h alap green city raiya road rajkot 360005",89500);
console.log(tst);


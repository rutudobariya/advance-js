/*
 A Parent class property access by its child class there we used inheritance 
 or
 A class property access by its another class there we used inheritance
 Note : inheritance are used by extends keyword
  
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

const tst=new B("brijesh","32","near and b/h alap green city raiya road rajkot 360005");
console.log(tst);


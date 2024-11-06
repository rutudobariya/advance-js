/* super : super is an method i.e used to access parent class properties by its child class 
           super()  // super method access parent properties in child class         
*/ 

class Car 
{
  constructor(nm,model)
  {
    this.nm=nm;
    this.model=model;
  }

}
class Garage extends Car 
{
    constructor(nm,model,gragenm,mechanicsnm)
    {
        super(nm,model,gragenm,mechanicsnm)
        {
            this.gragenm=gragenm;
            this.mechanicsnm=mechanicsnm;
        }

    }
}

const a=new Garage('audi',1970,"Boch auto services","kanu bhai");
console.log(a);


/* when we create any class as abstract we never create an object of abstract class
        
        abstract class A 
        {
           constructor()
           {
            statments;
           }
        }

        class B extends A
        {
            constructor()
           {
            super();
            statments;
           }
        } 

        const a=new B();
        console.log(a);  
       
   Note : if user want to access abstract class properties then we used inheritances      

*/
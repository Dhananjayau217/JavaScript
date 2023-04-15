main();
        function main()
        {
            let a=Number(prompt("Enter Number_1"));
            let b=Number(prompt("Enter Number_2"));
            let res=add(a,b);
            console.log(`Addition of ${a} and ${b} is ${res}`);
          
        }
        function add(a,b)
        {
            return a+b;
        }
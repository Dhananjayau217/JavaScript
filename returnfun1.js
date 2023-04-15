function main()
        {
            let i=m1();
            console.log("i value is:"+i);
            let j=m1()*20;
            console.log(`j value is ${j}`);
            console.log(m1());
        }
        function m1()
        {
            console.log("m1() method execute");
            return 10;
        }
        main();
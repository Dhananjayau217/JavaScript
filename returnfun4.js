main();
        function main()
        {
           let i=0;
           let j=0;
           j=m1(++i);
           console.log(i);
           console.log(j);
        }
        function m1(a)
        {
             return a++;
            //  return a;
        }
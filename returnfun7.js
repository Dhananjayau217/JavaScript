main();
        function main()
        {   
            // add(10,20);
            // add(10,20,30);
            add(2,4,6,8);
          
        }
        function add(...a)
        {
            // console.log(a[0]);
            // console.log(a[2]);
            let size=a.length;
            for(let i=0;i<size;i++)
            {
                console.log(a[i]);
            }
        
        }
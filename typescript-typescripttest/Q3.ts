var array = [

    { FirstName: 'Rita', LastName: 'Sharma' },
    
    { FirstName: 'Meghna', LastName: 'patel' },
    
    { FirstName: 'Ritu', LastName: 'Patel' },
    
    { FirstName: 'Meghna', LastName: 'Patel' }
    
    ];

    function findDuplicateRecord()
    {
        for(let i = 0; i <array.length; i++){
          
            for(let j = i+1; j<array.length; j++)
            {
                if(array[i].FirstName.toLowerCase() === array[j].FirstName.toLowerCase() && array[i].LastName.toLowerCase() === array[j].LastName.toLowerCase())
                {
                    console.log(array[i]);
                }
            }
        }
    }

    findDuplicateRecord();
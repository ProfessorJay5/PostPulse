import {React, useState} from 'react' ;

function Counter() 
{
    const [count, setCount] = useState(0);
    const [updater, setUpdater] = useState(1);
    
    function increment()
    {
        setCount(count+updater)
    }
    
    function deincrement()
    {
        if(count !== 0 && count-updater > 0)
        {
            setCount(count-updater)
        }
        else
        {
            setCount(count-count)
        }
    }
    function plus()
    {
        setUpdater(updater+1)
    }
    
    function minus()
    {
        if(updater !== 0)
        {
            setUpdater(updater-1)
        }
    }
    return(
        <div id='counter'>
            <button onClick={minus}> -</button>
            <h1> {updater} </h1>
            <button onClick={plus}> + </button>
            <br></br>
            
            <button onClick={deincrement}>- </button>
            <h1>{count} </h1>
            <button onClick = {increment}> +</button>
        </div>
    );
}

export default Counter
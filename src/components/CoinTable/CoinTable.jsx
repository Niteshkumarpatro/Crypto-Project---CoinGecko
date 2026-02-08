import { useEffect } from "react";
import { useState } from "react";
function CoinTable() {

    const [count, setCount] = useState(0);

    const [flag, setFlag] = useState(false);



    async function download() {
        const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
        console.log(response);

        const result = await response.json();
        console.log(result);
    }

    useEffect(() => {
        // Beacause the dependency array is empty,this effect will only run once
        // When the component is mounted,and it will not run again when the component is updated  or unmounted.
        download();

    }, [count]
    );


    useEffect(() => {
        // Beacause the dependency array is empty,this effect will only run once
        // When the component is mounted,and it will not run again when the component is updated  or unmounted.
        console.log("Flag Changed");


    }, [flag]);

    useEffect(() => {
        // Beacause the dependency array is empty,this effect will only run once
        // When the component is mounted,and it will not run again when the component is updated  or unmounted.
        console.log("everytime changed");



    });
    useEffect(() => {
        // Beacause the dependency array is empty,this effect will only run once
        // When the component is mounted,and it will not run again when the component is updated  or unmounted.
        console.log("count or flag changed");



    }, [count, flag]);









    return (
        <>
            CoinTable

            <br />
            <button onClick={() => setCount(count + 1)}> Increment :{count}</button>
            <br />
            {flag && <div>Flag is true</div>}
            <br />
            <button onClick={() => setFlag(!flag)}>Toggle </button>
        </>

    );

}
export default CoinTable;
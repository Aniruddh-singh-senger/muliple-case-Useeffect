import React, { useEffect, useState } from 'react';

const Useeffect = () => {

    const [dependency1, setDependency1] = useState(0);
    const [dependency2, setDependency2] = useState(0);

    // componentDidMount
    useEffect(() => {
        // code here
    })

    // componentWillMount
    useEffect(() => {

        return () => {
            //code here
        }
    })

    // componentDidUpdate
    useEffect(() => {

        //code here
        // when userName state change it will call     
    }, [])

    useEffect(() => {
        console.log("only dependency1", dependency1, dependency2);
        if (dependency1 >= 1) { document.title = `chats (${dependency1})`}
        else { document.title = `chats`}
    }, [dependency1]);

    useEffect(() => {console.log("dependency1 and dependency2", dependency1, dependency2);
    },[dependency1, dependency2]);

    return (
        <div className="App">
            <button style={{ height:'50px', width:'150px',margin:'10px'}} onClick={() => setDependency1(prev => prev + 1)}>Positive dependency1</button>

            <button style={{ height:'50px', width:'250px',margin:'10px'}} onClick={() => setDependency1(prev => prev - 1)}>Negative dependency1</button>

            <button style={{ height:'50px', width:'150px',margin:'10px'}} onClick={() => setDependency2(prev => prev + 1)}>Change dependency2</button>

            <button style={{ height:'50px', width:'150px', margin:'10px'}} onClick={() => { setDependency1(prev => prev - 1); setDependency2(prev => prev - 1) }}>Change both</button>
        </div>
    );
}

export default Useeffect;

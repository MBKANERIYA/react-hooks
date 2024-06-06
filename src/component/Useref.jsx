import React, { useRef } from "react";

const UseRef = () => {
    let fname = useRef();
    let lname = useRef();
    let email = useRef();

    function addData() {
        let data = {
            fname: fname.current.value,
            lname: lname.current.value,
            email: email.current.value,
        };

        console.log(data);
    }
    return (
        <>
            <br /><br /><br /><br /><br />
            <input type="text" ref={fname} /><br /><br />
            <input type="text" ref={lname} /><br /><br />
            <input type="text" ref={email} /><br /><br />
            <button onClick={addData}>Submit</button>
        </>
    );
};

export default UseRef;
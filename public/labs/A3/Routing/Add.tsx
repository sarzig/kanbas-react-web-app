import React from "react";
import { useParams } from "react-router-dom"
function Add() {
    /*
    Hooks are a very popular way of encapsulating functionality. 
    */
    const { a, b } = useParams(); // hooks all start with "use" and a description on what they do
        return (
            <div>
                {" "}
                <h2>Add Path Parameters</h2>
                {a} + {b} = {parseInt(a as string) + parseInt(b as string)}
            </div>
        )
}
export default Add;
import { useParams } from "react-router-dom"
import {useState, useEffect } from 'react'
import data from '../utils/mockdata'
import BookDetail from "./BookDetail"
export default function ()
{
    const [pick, setPick] = useState([])
    const params=useParams()
    console.log(useParams().title)
    console.log('dta',data)
    useEffect(() => { 
        const Picked = data.find((p) => p.title.toLowerCase() === params.title.toLowerCase())
        setPick(Picked);
        }
    , [])
    console.log("pick",pick)
    return (<>
    <BookDetail detail={pick}></BookDetail></>)
}
// this current component will sort particular book of which detail has to render
// and make one more component to render the book detail of that single  book that has been picked here 

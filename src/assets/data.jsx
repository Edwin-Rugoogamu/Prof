import React from 'react';
import Gallery from '../components/HomePage.jsx/Gallery';

const images=[
{
    id:1,
    name:"yaa",
    img:""

},
{
    id:2,
    name:"home",
    img:""

},
{
    id:3,
    name:"school",
    img:""

},
{
    id:4,
    name:"",
    img:""

},
{
    id:5,
    name:"",
    img:""

},
{
    id:6,
    name:"",
    img:""

},
{
    id:7,
    name:"",
    img:""

},
{
    id:8,
    name:"",
    img:""

},
{
    id:9,
    name:"",
    img:""

},
]



function data(props) {
    return (
        <div>
            <Gallery data={images}/>
        </div>
    );
}

export default data;
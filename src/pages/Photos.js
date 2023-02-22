import React, {useContext} from "react";
import { Context } from "../Context";
import {getClass} from '../utils';
import Image from "../components/Image"; 


const Photos = ()=>  {

    const {allPhotos} = useContext(Context);

    const imageElements = allPhotos.map((img, i) => {
        return (
            <Image key={img.id} img={img} className={getClass(i)} />
        )
    })

    return (
        <main className="photos">
            {imageElements}
        </main>
    )
}

export default Photos;
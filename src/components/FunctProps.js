//1.import area

import { FattArrow } from "./FattArrow";

//2.functional definition area
export function FunctProps(props){

    //every function return something
    return(
        <>
            {props.name} {props.children} where are you going
            <div>
                <FattArrow surname='Agarwal'>
                    from which city you are. I am from banglore
                </FattArrow>
            </div>
        </>
    )
}

//3.export area
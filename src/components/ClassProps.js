//1.import area

import { Component } from "react";
import { FunctProps } from "./FunctProps";

//2.class definition area
export default class ClassProps extends Component{
    //1. properties
   name='Prajwal';


    //2.constructor

    //3.method
    render(){
        //every function return something
        return (
            <>
                {this.name} {this.props.surname}
                <div>
                    How are you <FunctProps name='Ravi' >
                        Khanna
                    </FunctProps>
                </div>
            </>
        )

    }

}


//3.export area
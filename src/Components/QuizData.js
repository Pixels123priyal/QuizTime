import React from 'react'
import { PropTypes } from 'prop-types'
import Button from './Button'


const QuizData = () => {

    const onClick=(e)=>{
        console.log("Click go brrrrr rr")
    }


    return (
        <div className="QuizSetting">
            <p>I am Creating Quiz Settings @ Harsh UWU</p>

            <div className="form-control">
                <label>
                    Name
                </label>
                <input type='text' placeholder='Enter Name'/>
            </div>

            <div className="form-control">
                <label>
                    Email Address
                </label>
                <input type='text' placeholder='Enter Name'/>
            </div>

            <Button color='green' text='Hello' onClick={onClick} />
            
        </div>
    )
}

export default QuizData

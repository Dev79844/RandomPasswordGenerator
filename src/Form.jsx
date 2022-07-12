import React, { useState } from 'react'

const Form = () => {
    
    const [length, setLength] = useState('')
    const [password, setPassword] = useState('')

    let isLength = false

    const handleChange = (e) => {
        setLength(e.target.value)
    }


    if(length > 1 && length < 8 || length >20){
        isLength = true
    }
    console.log(isLength)

    const handlePassword = (e) => {
        e.preventDefault()
        let alphabet = 'qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM'
        let num = '1234567890'
        let specialCharacter = '@!#$&*'
        let input = ''
        for(let i=0; i<length; i++){
            let generate = alphabet[Math.floor(Math.random() * 52)] + num[Math.floor(Math.random() * 10)] + specialCharacter[Math.floor(Math.random() * 6)]
            input += generate
        }
        setPassword(input.substr(0,length))
    }

  return (
    <div>
        <div className='border-4 m-8 w-[20rem] h-[14rem] mx-auto bg-lime-400'>
            <p className='text-center'>Password Generator</p>
            <form className='p-4 flex flex-col' onSubmit={handlePassword}>
                <p>Enter the desired length of password:</p>
                <input type='text' className='w-[1.5rem] border-4 mx-auto mt-4 mb-4' onChange={handleChange} value={length}/>
                <p>{isLength && 'Password must be between 8-20 characters'}</p>
                <button type="submit" className='border-4 w-[4rem] mx-auto bg-blue-400 text-white'>Submit</button>
            </form>
        </div>
        <p className='text-3xl text-center border-4 w-[24rem] mx-auto h-[3rem] border-blue-800'>{password}</p>
    </div>
  )
}

export default Form
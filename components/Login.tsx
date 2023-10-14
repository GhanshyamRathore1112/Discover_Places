"use client"
import React from 'react'
import { useRouter } from 'next/navigation'

type Props = {}

const Login = (props: Props) => {
    const router = useRouter()
    const handleSubmit = () => {
        router.push("/sign-in")
    }

    return (

        <button className='btn' onClick={handleSubmit}>Sign in</button>

    )
}

export default Login
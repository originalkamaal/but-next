import React, { useState } from 'react'
import Layout from '../layouts/Main';
import { signIn, signOut, useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import Link from 'next/link';

const Register = (d) => {
    const [userInfo, setUserInfo] = useState({ name: '', email: '', password: '' });
    const [confrimPassowrd, setConfirmPassword] = useState('');
    const [vError, setVError] = useState(null);
    const router = useRouter();
    const session = useSession();
    if (session.data) {
        console.log(session)
    }

    const validateStrength = (password) => {
        if (/(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})/.test(password)) {
            return (true)
        }
        return (false)

    }


    // console.log(d);
    const handleSignup = async (e) => {
        e.preventDefault();
        if (userInfo.email.includes('@')) {
            if (userInfo.password == confrimPassowrd) {

                if (validateStrength(userInfo.password)) {

                    setVError(null);
                    const res = await fetch('/api/auth/register', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({
                            email: userInfo.email,
                            password: userInfo.password,
                            name: userInfo.name,
                            mobile: 9819920341,
                        }),
                    });
                    if (res.status == 200) {
                        const data = await res.json();
                        console.log(data);
                        router.push('/');

                    } else {
                        setVError('Due to some technical problem we are unable to create your account please try after sometime.')
                    }
                } else {
                    setVError('Password is not matching with the minimum criteria');
                }


            } else {
                setVError("Password and Confirm Password are not same.");
            }
        } else {
            setVError("Please provide valid emaild address.")
        }
    }
    return (
        <Layout>
            <section className="h-full">
                {vError && <div>{vError}</div>}
                <div className="container p-6 h-full">
                    <div className="flex justify-center items-center flex-wrap h-full g-6 text-gray-800">
                        <div className="md:w-8/12 lg:w-6/12 mb-12 md:mb-0">
                            <img
                                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
                                className="w-full"
                                alt="Phone image"
                            />
                        </div>
                        <div className="md:w-8/12 lg:w-5/12 lg:ml-20 shadow-md p-12">
                            <form onSubmit={handleSignup}>
                                <div className="mb-6">
                                    <input
                                        type="text"
                                        className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                        placeholder="Name"
                                        value={userInfo.name}
                                        onChange={({ target }) => setUserInfo({ ...userInfo, name: target.value })}
                                    />
                                </div>
                                <div className="mb-6">
                                    <input
                                        type="text"
                                        className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                        placeholder="Email address"
                                        value={userInfo.email}
                                        onChange={({ target }) => setUserInfo({ ...userInfo, email: target.value })}
                                    />
                                </div>
                                <div className="mb-6">
                                    <input
                                        type="text"
                                        className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                        placeholder="10 Digit Mobile Number"
                                        value={userInfo.mobile}
                                        onChange={({ target }) => setUserInfo({ ...userInfo, mobile: target.value })}
                                    />
                                </div>

                                <div className="mb-6">
                                    <input
                                        type="password"
                                        className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                        placeholder="Password"
                                        value={userInfo.password}
                                        onChange={({ target }) => setUserInfo({ ...userInfo, password: target.value })}
                                    />
                                </div>

                                <div className="mb-6">
                                    <input
                                        type="password"
                                        className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                        placeholder="Confirm Password"
                                        value={confrimPassowrd}
                                        onChange={({ target }) => setConfirmPassword(target.value)}
                                    />
                                    <ul className='text-gray-500 text-xs p-2 px-4 list-decimal'>


                                        <li>Password must be at least 8 characters long.</li>
                                        <li>Password must have at least one uppercase letter.</li>
                                        <li>Password must have at least one lowercase letter.</li>
                                        <li>Password must have at least one number.</li>
                                        <li>Password must have at least one special character.</li>
                                        <li>Password and confirm password must be same.</li>

                                    </ul>
                                </div>

                                <div className="flex justify-between items-center mb-6">

                                    <a
                                        href="#!"
                                        className="text-blue-600 hover:text-blue-700 focus:text-blue-700 active:text-blue-800 duration-200 transition ease-in-out"
                                    >Forgot password?</a
                                    >
                                </div>

                                <button
                                    type="submit"
                                    className="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out w-full"
                                    data-mdb-ripple="true"
                                    data-mdb-ripple-color="light"

                                >
                                    Create Account
                                </button>



                                <Link href='/login' className='flex w-full items-center justify-center py-2 text-sm'>Already have an account? Login</Link>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    )
}



export default Register
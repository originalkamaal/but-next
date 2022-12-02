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
    console.log(session);
    if (session.data) {
        signOut();
    }

    const validateStrength = (password) => {
        if (/(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})/.test(myForm.emailAddr.value)) {
            return (true)
        }
        alert(`Please choose a Strong password \n 
             The password is at least 8 characters long. \n
             The password has at least one uppercase letter.\n
             The password has at least one lowercase letter.\n
             The password has at least one digit.\n
             The password has at least one special.`);
        return (false)
    
    }


    // console.log(d);
    const handleLogin = async (e) => {
        e.preventDefault();
        if (userInfo.password == confrimPassowrd && userInfo.email.includes('@') && userInfo.password.length > 7) {
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
            const data = await res.json();
            console.log(data);
            if (res.status == 200) {

            }

        } else {
            setVError("Password and Confirm Password are not same.");
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
                            <form onSubmit={handleLogin}>
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



                                <Link href='/login' className=''>Login</Link>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    )
}



export default Register
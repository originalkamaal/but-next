import React, { useState } from 'react'
import Layout from '../frontend/layouts/Main';
import { signIn, useSession, getSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import Link from 'next/link';

const Login = (d) => {
    const [userInfo, setUserInfo] = useState({ email: '', password: '' });
    const [loginError, setLoginError] = useState(null);
    const router = useRouter();
    const session = useSession();
    console.log(session);
    //signOut();
    const handleLogin = async (e) => {
        e.preventDefault();
        if (ValidateEmail(userInfo.email)) {
            const res = await signIn('credentials', {
                redirect: false,
                email: userInfo.email,
                password: userInfo.password
            })
            if (res.ok) {
                if (session.user && session.user.role === 'admin') {
                   // router.push('/admin');
                } else {
                 //   router.push('/');
                }
            } else {

                console.log(res);
                setLoginError(res.error)
            }
        }
    }

    const ValidateEmail = (mail) => {
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
            return (true)
        }
        alert("You have entered an invalid email address!");
        return (false)
    }

    //^(?=.*[A-Z].*[A-Z])(?=.*[!@#$&*])(?=.*[0-9].*[0-9])(?=.*[a-z].*[a-z].*[a-z]).{8}$


    return (
        <Layout>
            <section className="h-full">
                <div className="container p-6 h-full">
                    <div className="flex justify-center items-center flex-wrap h-full g-6 text-gray-800">
                        <div className="md:w-8/12 lg:w-6/12 mb-12 md:mb-0">
                            <img
                                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
                                className="w-full"
                                alt="Phone image"
                            />
                        </div>
                        <div className="w-full lg:w-5/12 lg:ml-20 rounded-xl overflow-hidden shadow-lg border-gray-100 border-4 p-5 lg:p-10 ">
                            <form onSubmit={handleLogin}>

                                {loginError &&
                                    <div className='mb-6 text-red-500 text-xs'>
                                        Username and/or password is incorrect.
                                    </div>
                                }

                                <div className="mb-6">
                                    <input
                                        type="text"
                                        className="form-control block w-full px-4 py-2 font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                        placeholder="Email address"
                                        value={userInfo.email}
                                        onChange={({ target }) => setUserInfo({ ...userInfo, email: target.value })}
                                    />
                                </div>

                                <div className="mb-6">
                                    <input
                                        type="password"
                                        className="form-control block w-full px-4 py-2 font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                        placeholder="Password"
                                        value={userInfo.password}
                                        onChange={({ target }) => setUserInfo({ ...userInfo, password: target.value })}
                                    />
                                </div>

                                <div className="flex justify-between items-center mb-6">
                                    <div className="form-group form-check">
                                        <input
                                            type="checkbox"
                                            className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                                            id="exampleCheck3"

                                        />
                                        <label className="form-check-label text-xs inline-block text-gray-800" htmlFor="exampleCheck2"
                                        >Remember me</label
                                        >
                                    </div>
                                    <a
                                        href="#!"
                                        className="text-blue-600 text-xs hover:text-blue-700 focus:text-blue-700 active:text-blue-800 duration-200 transition ease-in-out"
                                    >Forgot password?</a
                                    >
                                </div>

                                <div className='w-full flex justify-center py-2'>

                                    <button
                                        type='submit'
                                        className="inline-block text-center px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-800 active:shadow-lg transition duration-150 ease-in-out"
                                        data-mdb-ripple="true"
                                        data-mdb-ripple-color="light"
                                    >
                                        Login
                                    </button>
                                </div>
                                <div className='w-full flex justify-center py-2'>OR</div>
                                <div className='w-full flex justify-center pt-2'>

                                    <Link
                                        href='/register'
                                        className="inline-block text-center px-7 py-3 bg-green-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-800 active:shadow-lg transition duration-150 ease-in-out"
                                        data-mdb-ripple="true"
                                        data-mdb-ripple-color="light"
                                    >
                                        Create Account
                                    </Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    )
}

export async function getServerSideProps(context) {
    const session = await getSession(context)

    if (session) {
        return {
            redirect: {
                destination: '/',
                permanent: false,
            },
        }
    }

    return {
        props: {}
    }
}

export default Login
import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

const SignUpMain = () => {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setisLoading] = useState(false);
    const [error, setError] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        // console.log(email, password);

        try {
            setisLoading(true);
            const response = await fetch('http://localhost:5000/api/users/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name, email, password
                })
            });

            const responseData = await response.json();
            console.log(responseData);
        } catch (error) {
            console.log(error);
            setError(error.message || 'Something went wrong.')
        };
        setisLoading(false);
    }

    return (
        <>
            <div class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8  ">
                <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm border p-4">
                    <form class="space-y-6" action="#" method="POST" onSubmit={handleSubmit}>
                        <div className='grid grid-cols-2 gap-1'>
                            <div>
                                <label for="email" class="block text-sm font-medium leading-6 text-gray-900">First Name</label>
                                <div class="mt-2">
                                    <input id="firstname" name="firstname" value={name} onChange={(e) => setName(e.target.value)} type="firstname" autocomplete="firstname" required class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-100 sm:text-sm sm:leading-6" />
                                </div>
                            </div>
                            <div>
                                <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Last Name</label>
                                <div class="mt-2">
                                    <input id="lastname" name="lastname" type="lastname" autocomplete="lastname" required class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-100 sm:text-sm sm:leading-6" />
                                </div>
                            </div>
                        </div>
                        <div>
                            <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Email address</label>
                            <div class="mt-2">
                                <input id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} type="email" autocomplete="email" required class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-100 sm:text-sm sm:leading-6" />
                            </div>
                        </div>

                        <div>
                            <div class="flex items-center justify-between">
                                <label for="password" class="block text-sm font-medium leading-6 text-gray-900">Password</label>
                                <div class="text-sm">
                                    <a href="#" class="font-semibold p-1 rounded bg-gradient-to-r to-emerald-600 from-sky-400 hover:text-indigo-500 text-white">Forgot password?</a>
                                </div>
                            </div>
                            <div class="mt-2">
                                <input id="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} type="password" autocomplete="current-password" required class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                            </div>
                        </div>

                        <div>
                            <button type="submit" class="flex w-full justify-center rounded-md bg-gradient-to-r to-emerald-600 from-sky-400 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign in</button>
                        </div>
                        <p>Already Have an Account? &nbsp;
                            <NavLink to='/login' className="text-indigo-400 hover:underline" >
                                Login
                            </NavLink>
                        </p>
                    </form>
                </div>
            </div>
        </>
    )
}

export default SignUpMain
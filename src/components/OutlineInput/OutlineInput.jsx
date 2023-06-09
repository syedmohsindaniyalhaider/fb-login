import React from 'react'

export default function OutlineInput() {
    return (
        <div>
            <form class="max-w-sm mx-auto rounded-lg shadow-xl overflow-hidden p-6 space-y-10">
                <h2 class="text-2xl font-bold text-center">Login</h2>
                <div class="outline relative border-2 focus-within:border-blue-500">
                    <input type="text" name="username" placeholder=" " class="block p-4 w-full text-lg appearance-none focus:outline-none bg-transparent" />
                    <label for="username" class="absolute top-0 text-lg bg-white p-4 -z-1 duration-300 origin-0">Username</label>
                </div>
                <div class="outline relative border-2 focus-within:border-blue-500">
                    <input type="email" name="email" placeholder=" " class="block p-4 w-full text-lg appearance-none focus:outline-none bg-transparent" />
                    <label for="email" class="absolute top-0 text-lg bg-white p-4 -z-1 duration-300 origin-0">Email</label>
                </div>
                <div class="outline relative border-2 focus-within:border-blue-500">
                    <input type="password" name="password" placeholder=" " class="block p-4 w-full text-lg appearance-none focus:outline-none bg-transparent" />
                    <label for="password" class="absolute top-0 text-lg bg-white p-4 -z-1 duration-300 origin-0">Password</label>
                </div>
            </form>

        </div>
    )
}
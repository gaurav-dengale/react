import React from 'react';
import { useLoaderData } from 'react-router-dom';

function Github() {
    // This hook will receive the data returned by the githubInfoLoader function
    const data = useLoaderData();

    return (
        <div className='flex flex-col items-center justify-center p-5 bg-gray-600 text-white text-2xl'>
            Github Followers: {data.followers}
            <img className='mt-4 rounded-full' src={data.avatar_url} alt="github profile" width={300} />
        </div>
    );
}

export default Github;

// ADD THIS FUNCTION 👇
// This loader function is called by the router before the component renders.
export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/gaurav-dengale');
    if (!response.ok) {
        throw new Error('Could not fetch GitHub data');
    }
    return response.json();
};
import React from 'react';
// import { getSingleUsers } from '../../../api/auth';
// import { useQuery } from 'react-query';
import { FaStar } from 'react-icons/fa';

const Profile = () => {
  // Example number of stars the mentor has achieved
  const stars = 5;

  /* const { data: userProfile } = useQuery({
    queryKey: ['profile'],
    queryFn: async () => await getSingleUsers({ email: user?.email }),
  }); */

  return (
    <div className='flex justify-center items-center h-screen'>
      <title>Profile</title>
      
      <div className='bg-white shadow-lg rounded-md w-11/12 md:w-3/5'>
        <div className='bg-[#523521] w-full h-[150px] rounded-t-md'></div>
        <div className='flex flex-col items-center justify-center p-4 -mt-16'>
          <span className='relative block'>
            <img
              alt='profile'
              // src={userProfile?.image}
              className='mx-auto object-cover rounded-full h-24 w-24 border-t-white border-2 border-[#523521]'
            />
          </span>

          <p className='p-2 px-4 text-xs text-white bg-[#523521] rounded-full mt-4 uppercase'>
            {`Data Science`}
          </p>
          <p className='mt-2 text-xl font-medium text-gray-800 flex items-center'>
            <span className='inline-block text-base sm:text-lg'>Mentor Name: </span>
            <span className='inline-block text-base sm:text-lg ml-2'>
              {`Paula`}
            </span>
            <span className='ml-4 flex items-center'>
              {Array.from({ length: stars }, (_, index) => (
                <FaStar key={index} className='text-yellow-500 ml-1' />
              ))}
            </span>
          </p>
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"></link>
          <div className='w-full p-2 mt-4 rounded-lg'>
            <div className='flex flex-col sm:flex-row gap-4 sm:flex-wrap sm:items-center sm:justify-between text-sm text-gray-600'>
              <p className='flex flex-col'>
                Languages Known
                <span className='font-bold text-black'>
                  {`Marathi`}
                </span>
              </p>
              <p className='flex flex-col'>
                Email
                <span className='font-bold text-black'>
                  {`paula@gmail.com`}
                </span>
              </p>
              <p className='flex flex-col'>
                Region
                <span className='font-bold text-black'>
                  {`Goregaon East`}
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;

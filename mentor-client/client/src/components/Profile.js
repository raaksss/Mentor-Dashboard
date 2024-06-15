
//import { getSingleUsers } from '../../../api/auth';

const Profile = () => {


  /*const { data: userProfile } = useQuery({
    queryKey: ['profile'],
    queryFn: async () => await getSingleUsers({ email: user?.email }),
  });*/

  return (
    <div className='flex justify-center items-center h-screen'>
        <title>Profile</title>
      
      <div className='bg-white shadow-lg rounded-md w-11/12 md:w-3/5'>
        <div className='bg-[#523521] w-full h-[150px] rounded-t-md'></div>
        <div className='flex flex-col items-center justify-center p-4 -mt-16'>
          <span className='relative block'>
            <img
              alt='profile'
              //src={userProfile?.image}
              
              className='mx-auto object-cover runded-full h-24 w-24 border-t-white border-2 border-[#523521] '
            />
          </span>

          <p className='p-2 px-4 text-xs text-white bg-[#523521] rounded-full mt-4 uppercase'>
            {`Data Science`}
          </p>
          <p className='mt-2 text-xl font-medium text-gray-800 '>
            <span className='inline-block text-base sm:text-lg'>User Id:</span>
            <span className='inline-block text-base sm:text-lg'>
              {`Rakshita`}
            </span>
          </p>
          <div className='w-full p-2 mt-4 rounded-lg'>
            <div className='flex flex-col sm:flex-row gap-4 sm:flex-wrap sm:items-center sm:justify-between text-sm text-gray-600 '>
              <p className='flex flex-col'>
                Languages Known
                <span className='font-bold text-black '>
                  { `Marathi`}
                </span>
              </p>
              <p className='flex flex-col'>
                Email
                <span className='font-bold text-black '>
                  {`rakshitamanocha@gmail.com`}
                </span>
              </p>
              <p className='flex flex-col'>
                  Region
                <span className='font-bold text-black '>
                  { `Goregaon East`}
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
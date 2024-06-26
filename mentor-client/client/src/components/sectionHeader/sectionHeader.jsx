const SectionHeader = ({ heading, headingDescription, headingSpan }) => {
    return (
      <div className='max-w-[1200px] mx-auto text-center mb-4'>
        <h2 className='text-3xl mb-3 font-bold'>
          {heading}&nbsp;
          <span className='text-[#03b97c]'>{!!headingSpan && headingSpan}</span>
        </h2>
        <p className='w-5/6 md:w-2/4 mx-auto'>{headingDescription}</p>
      </div>
    );
  };
  
  export default SectionHeader;
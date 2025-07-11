import React from 'react'

type Props = {
    heading: string;
}
const SectionHeading = ({heading}: Props) => {
  return (
    <div className='w-[80%] mx-auto mb-8'>
        <h1 className='text-xl sm:text-2xl text-red-400 font-bold text-center'>{heading}</h1>
    </div>
  )
}

export default SectionHeading;
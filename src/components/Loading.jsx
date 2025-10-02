import React from 'react'

const Loading = () => {
  return (
    <div
      className='max-w-10 max-h-10 w-full h-full fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2'
    >
      <img src="/images/loading.svg" alt="loading" className='animate-spin'/>
    </div>
  )
}

export default Loading

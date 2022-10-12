import React from 'react'

const Searchbar = () => {
  return (
    <div className='container
                    flex 
                    flex-row 
                    justify-center 
                    items-center 
                    py-4 
                    m-auto'>
        <div className='flex 
                        flex-row 
                        m-auto 
                        justify-center 
                        items-center 
                        space-x-3'>
            {/* <label name='searchtxt'>Search</label> */}
            <input className='rounded w-80 h-8 pl-2 border border-green-500 text-sm' type="text" name='seachbox' placeholder='Search...'></input>
            <div className='bg-green-500
                            border-green-600
                            rounded-full
                            baseline
                            text-white
                            text-sm
                            font-semibold
                            py-2
                            px-4
                            hover:cursor-pointer
                            hover:bg-green-600'>
                Search
            </div>
        </div>
    </div>
  )
}

export default Searchbar
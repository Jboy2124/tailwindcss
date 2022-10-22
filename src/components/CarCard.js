import React from 'react'
import CarList from '../data/list';

const CarCard = () => {
  return (
    <div className='flex flex-row justify-center items-center space-x-2 bg-green-100 h-screen'>
        <div>
            <table className='border border-green-500'>
                <thead>
                    <tr>
                        <th className='border border-green-500 w-20'>ID</th>
                        <th className='border border-green-500 w-24'>Brand</th>
                        <th className='border border-green-500 w-24'>Model</th>
                        <th className='border border-green-500 w-32'>Type</th>
                        <th className='border border-green-500 w-24'>Color</th>
                        <th className='border border-green-500 w-24'>Year</th>
                    </tr>
                </thead>
                <tbody>
                {
                    CarList.map(items => {
                        return (
                            <tr key={items.ID}>
                                <td className='border border-green-500'>{items.ID}</td>
                                <td className='border border-green-500'>{items.Brand}</td>
                                <td className='border border-green-500'>{items.Model}</td>
                                <td className='border border-green-500'>{items.Type}</td>
                                <td className='border border-green-500'>{items.Color}</td>
                                <td className='border border-green-500'>{items.Year}</td>
                            </tr>
                        )
                    })
                }
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default CarCard
import MoviePreview from '@/components/MoviePreview'
import RecentlyAdded from '@/components/RecentlyAdded'
import React from 'react'

export default async function page() {

  return (
      <div className='p-5 lg:p-0'>

        <MoviePreview/>
        <h1 className='text-3xl font-bold text-white'>Recently Added</h1>
        <RecentlyAdded/>
      </div>

  )
}

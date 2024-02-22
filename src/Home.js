import React, { useContext } from 'react'
import Feed from './Feed'
import DataContext from './context/DataContext';

const Home = () => {

  const {searchResults,fetchError,isLoading}=useContext(DataContext);

  return (
    <main className="Home">
      {  isLoading && <p className='statusMsg'>Loading post...</p>}
      { !isLoading && fetchError && <p className='statusMsg' style={{color:'red'}}>{fetchError}</p>}

       { !isLoading && !fetchError && (
        searchResults.length ? ( <Feed posts={searchResults}/>) : (   <p style={{marginTop:'2rem'}}>
            NO posts to Display
          </p>)
       )
       
        }
    </main>
  )
}

export default Home
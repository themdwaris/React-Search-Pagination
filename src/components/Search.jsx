import React from 'react'
import styled from 'styled-components'
import { useYourContext } from '../context/context'

const Search = () => {

  const {setQuery,query} = useYourContext()
  return (
    <Wrapper>
        <div className='searchContainer'>
          <h1>Search Your News</h1>
          <form action='#' onSubmit={(e)=> e.preventDefault()}>
          <ion-icon name="search-outline"></ion-icon><input type="search" value={query} placeholder='Search' autoComplete='off' onChange={(e)=> setQuery(e.target.value)}/>
          </form>
        </div>
    </Wrapper>
  )
}


const Wrapper = styled.div`
  .searchContainer h1{
    color: #222222;
    text-align: center;
    padding-top: 8rem;
    margin-bottom: 3rem;
  }
  .searchContainer form{
    max-width: 600px;
    padding: 10px;
    margin:0 auto;
    margin-bottom: 50px;
  }
  form input{
    border: none;
    outline: none;
    width: 100%;
    padding: 1rem 1.5rem;
    padding-left: 3.3rem;
    border-radius: 20px;
    font-size: 1.5rem;
    border: 2px solid #eee;
  } 
  form input:focus{
    border: 1px solid #8c1c1c;
  }
  form ion-icon{
    position: relative;
    top: 33px;
    left: 10px;
    color: #757575;
    font-size: 1.8rem;
  }
`
export default Search
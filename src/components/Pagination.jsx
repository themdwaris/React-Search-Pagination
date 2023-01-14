import React from 'react'
import styled from 'styled-components'
import { useYourContext } from '../context/context'

const Pagination = () => {

  const {page,nbPages,getPrev,getNext} = useYourContext()
  return (
    <Wrapper>
      <button onClick={getPrev}>Prev</button>
      <p>{page +1 } of {nbPages}</p>
      <button onClick={getNext}>Next</button>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2.5rem;
  padding: 5rem 0;

  button{
    border: none;
    outline: none;
    padding: .8rem 1.6rem;
    background-color: #191919;
    color: white;
    border-radius: 6px;
    font-size: 1.4rem;
    cursor: pointer;
    transition: all .4s ease;
    user-select: none;
  }
  p{
    color: #393838;
    font-size: 1.4rem;
    user-select: none;
  }
  button:hover{
    background-color: #393838;
    transition: all .4s ease;
  }

`

export default Pagination
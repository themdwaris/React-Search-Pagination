import React, { createContext, useContext, useEffect, useReducer, useState } from "react";
import reducer from "./reducer";

const AppContext = createContext();
const apiUrl = `http://hn.algolia.com/api/v1/search?`;
const initialState = {
    hits:[],
    query:"react",
    page:0,
    nbPages:0,
    isLoading:true,
    remainNews:[]
}

const AppProvider = ({ children }) => {

    const [state,dispatch] = useReducer(reducer,initialState)
    const [query,setQuery] = useState("")

  const getNews = async (url) => {
    try {
      // setLoading(true)
      const res = await fetch(url);
      const data = await res.json();

      dispatch({type:"SET_LOADING"})
      dispatch({type:"LOAD_NEWS",payload:{
        hits:data.hits,
        nbPages:data.nbPages
      }})
      // setLoading(false)
    } catch (error) {
      console.log(error);
    }
  };

  const delPost = (id) =>{
    dispatch({type:"DEL_STORIES",payload:id})
  }

  const getPrev = () =>{
    dispatch({type:"GET_PREV"})
  }
  const getNext = () =>{
    dispatch({type:"GET_NEXT"})
  }
  if(query===""){
    useEffect(() => {
      getNews(`${apiUrl}query=${state.query}&page=${state.page}`);
    },[query,state.page]);
  }else{
    useEffect(() => {
      getNews(`${apiUrl}query=${query}&page=${state.page}`);
    },[query,state.page]);
  }
  

  return <AppContext.Provider value={{...state,delPost,setQuery,query,getPrev,getNext}}>{children}</AppContext.Provider>;
};

const useYourContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider, useYourContext };

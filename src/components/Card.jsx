import React from "react";
import styled from "styled-components";
import { useYourContext } from "../context/context";
import spinner from "../images/spinner.svg";

const Card = () => {
  const { isLoading, remainNews, delPost,query } = useYourContext();

  //   console.log(remainNews)

  if (isLoading) {
    return (
      <Loading className="loading">
        <img src={spinner} alt="loading" />
      </Loading>
    );
  }
  return (
    <Wrapper>
      <div className="cardContainer">
        <div className="cardGrid">
          {remainNews.map((currPost) => {
            const { author, num_comments, objectID, title, url } = currPost;
            return (
              <div className="card" key={objectID}>
                <a href={url}>
                  <h2>
                    {title.length >= 70 ? `${title.slice(0, 70)}...` : title}
                  </h2>
                </a>
                <div className="cardBtn">
                  <a className="readmore" href={url} target="_blank">
                    more...
                  </a>
                  <a href="#" onClick={() => delPost(objectID)}>
                    <ion-icon name="trash-outline"></ion-icon>
                    
                  </a>
                </div>

                <p className="comments">
                  By <span>{author}</span>,
                  <ion-icon name="chatbubble-outline"></ion-icon>{" "}
                  <span>{num_comments} comments</span>
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </Wrapper>
  );
};

const Loading = styled.div`
  display: flex;
  height: 70vh;
  justify-content: center;
  /* align-items: center; */

  img {
    width: 150px;
  }
`;
const Wrapper = styled.div`
  .cardGrid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 25px;
    justify-content: center;
    align-items: center;
  }
  .cardGrid .card {
    background-color: #c8eaec;
    height: auto;
    padding: 1.5rem 2rem;
    border-radius: 10px;
    user-select: none;
  }
  .card h2 {
    font-size: 2rem;
    margin-bottom: 1rem;
    color: #212121;
    user-select: none;
  }

  .comments span {
    font-weight: bold;
    color: #363636cc;
    font-size: 1.5rem;
  }
  .comments ion-icon {
    margin-left: 10px;
  }
  .cardBtn {
    margin-bottom: 1.2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .cardBtn a {
    font-size: 1.5rem;
    color: #212121;
  }
  .cardBtn .readmore:hover {
    border-bottom: 1px solid #212121;
  }
  .cardBtn ion-icon {
    color: #f96868;
    font-size: 2rem;
  }

  @media screen and (max-width: 768px) {
    .cardGrid {
      grid-template-columns: 1fr;
    }
  }
`;

export default Card;

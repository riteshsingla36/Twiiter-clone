import React from "react";
import styled from "styled-components";
import { BiMessageRounded } from "react-icons/bi";
import { BsThreeDots } from "react-icons/bs";
import { FaRetweet } from "react-icons/fa";
import { AiOutlineHeart } from "react-icons/ai";
import { FiShare } from "react-icons/fi";
import { GiMoebiusTriangle } from "react-icons/gi";

const Post = () => {
  const bodyImage =
    "https://pbs.twimg.com/media/FRw1tNIUYAYs03n?format=jpg&name=small";
  return (
    <Container>
      <div className="imageContainer">
        <img
          src="https://pbs.twimg.com/media/FRw1tNIUYAYs03n?format=jpg&name=small"
          alt="not found"
        />
        <div className="postContainer">
          <div className="userdetails">
            <div className="details">
              <div className="username">Ritesh Kumar</div>
              <div className="time">10:00am</div>
            </div>
            <div className="dots">
              <BsThreeDots />
            </div>
          </div>
          <div className="post-body">
            <span className="content">
              sdjfsldkafjdsolfjsdflksjdfkldsjfklsdjfsdklfjsdklfjsdklfjsdflkjsdflksdjfsdlkfjlk
              fjsdlkfjsdklfjsdlkdfj dklsfjsdklfjslkfjksd fjsdlkfsjdflksjflsd
              fjsdlkfjsdlkfj sdflsdjfsdlkfj sdlfjsdfsd fjsd lfjsadflasdjdf
              dslfjdslkfjamklsfjamoriluweofjmsfohjamsovlhdsnfiouarhjwoeialkfjsad
              jajsdiofjnsamfpdsjfio sfjewoijweoif dsljfmoeifjsdol asdf
            </span>
            {bodyImage ? <img src={bodyImage} alt="" /> : ""}
          </div>
          <div className="post-options">
            <div className="reply">
              <BiMessageRounded />2
            </div>
            <div className="retweet">
              <FaRetweet />
              234
            </div>

            <div className="like">
              <AiOutlineHeart />
              231
            </div>
            <div className="share">
              <FiShare />
            </div>
            <div className="tip">
              <GiMoebiusTriangle />
              Tip
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

const Container = styled.div`
  .imageContainer {
    display: flex;
    gap: 1rem;
    border: 1px solid blue;
    word-break: break-all;
    padding: 0.5rem 0.9rem;
    &:hover {
      background-color: #ededed;
    }
    img {
      width: 4rem;
      height: 4rem;
      border-radius: 50%;
    }

    .postContainer {
      .userdetails {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 1rem;
        .details {
          display: flex;
          align-items: center;
          gap: 1rem;
          .username {
            font-weight: 500;
          }
          .time {
            color: #7a8893;
          }
        }

        .dots {
          svg {
            color: #7a8893;
          }
        }
      }

      .post-body {
        img {
          width: 100%;
          height: 100%;
          border-radius: 1.2rem;
        }
      }

      .post-options {
        display: flex;
        align-items: center;
        gap: 2rem;
        color: #7a8893;
        font-size: small;
        svg {
          color: #7a8893;
          font-size: 1.2rem;
        }
        .reply,
        .like,
        .retweet,
        .tip,
        .share {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
        }

        .tip {
          svg {
            transform: rotate(15deg);
          }
        }
      }
    }
  }
`;

export default Post;

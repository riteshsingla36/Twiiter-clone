import React, { useState } from "react";
import styled from "styled-components";
import { IoImageOutline, IoLocationOutline } from "react-icons/io5";

import { MdOutlineGif } from "react-icons/md";
import { BiPoll } from "react-icons/bi";
import { BsEmojiSmile } from "react-icons/bs";
import { GrFormSchedule } from "react-icons/gr";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const CreatePost = () => {
  const [post, setPost] = useState("");

  return (
    <Container>
      <div className="image">
        <img
          src="https://www.pngitem.com/pimgs/m/150-1503945_transparent-user-png-default-user-image-png-png.png"
          alt=""
        />
      </div>
      <div className="post-content">
        <textarea
          placeholder="What's happening?"
          rows={"5"}
          style={{ resize: "none" }}
          value={post}
          onChange={(e) => setPost(e.target.value)}
        />
        <hr />
        <div className="options">
          <div className="upload">
            <div className="image">
              <IoImageOutline />
            </div>
            <div className="loaction">
              <IoLocationOutline />
            </div>
            <div className="gif">
              <MdOutlineGif />
            </div>
            <div className="poll">
              <BiPoll />
            </div>
            <div className="emoji">
              <BsEmojiSmile />
            </div>
            <div className="schedule">
              <GrFormSchedule />
            </div>
            {post.length > 0 && (
              <div className="progress">
                <CircularProgressbar maxValue={"300"} value={post.length} />
              </div>
            )}
          </div>
          <button>Tweet</button>
        </div>
      </div>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  border: 1px solid red;
  padding: 0.5rem;

  img {
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
  }

  .post-content {
    textarea {
      font-size: 1rem;
      border: none;
      width: 100%;
      &:focus {
        outline: none;
      }
    }
    .options {
      display: flex;
      align-items: center;
      justify-content: space-between;
      .upload {
        display: flex;
        align-items: center;

        div {
          padding: 0.7rem;

          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          &:hover {
            background-color: #dceefb;
          }
        }
        svg {
          color: #1c9af0 !important;
          font-size: 1.2rem;
        }
        .progress {
          svg {
            width: 1.2rem;
            height: 1.2rem;
          }
        }
      }
      button {
        background-color: #1c9af0;
        border: none;
        padding: 0.4rem 1rem;
        border-radius: 0.9rem;
        color: white;
        font-weight: bold;
        letter-spacing: 0.03rem;
        &:hover {
          background-color: #3297da;
        }
      }
    }
  }
`;

export default CreatePost;

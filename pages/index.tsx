import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import styles from '../styles/Home.module.css'
import {Post} from "../component/post";

const anotherGetPost = async () => {
  const response = await fetch("https://api.reddit.com");
  return response.json();
}

const getPosts = () => {
  return new Promise(resolve => {
    fetch(
      "https://api.reddit.com",
    ).then(res => res.json()).then(res => resolve(res));
  });
}

const Home: NextPage = () => {
  const [post, setPost] = useState([]);
  useEffect(() => {
    getPosts().then((res: any) => {
      console.log(res.data.children);
      setPost(res.data.children);
    });
  }, [])
  return (
    <>
      {
        post.map((item: any) => {
          return (
            <Post
              key={item.data.id}
              item={item}
            />
          )
        })
      }
    </>
  )
}

export default Home

'use client';

import axios from "axios";
import { useEffect, useState } from "react";
import Skeleton from '@mui/material/Skeleton';
import Link from "next/link";

export default function Home() {
  const [data, setData] = useState([]);
  const [client, setClient] = useState(false);

  useEffect(() => {
    setClient(true)
    fetchApi();

  }, []);
  const fetchApi = async () => {
    let url = 'https://next.spis.co.in/graphql'
    try {
      let res = await axios.post(
        url,
        {
          query: `
            query MyQuery {
              posts {
                nodes {
                  id
                  title
                  slug
                  date
                  featuredImage {
                    node {
                      altText
                      fileSize(size: LARGE)
                      link
                      mediaItemUrl
                    }
                  }
                  categories {
                    nodes {
                      name
                      slug
                      uri
                    }
                  }
                }
              }
            }
          `,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true, // Include credentials if needed (e.g., cookies)
        }
      );

      setData(res.data.data.posts.nodes); // Update state with fetched data
    } catch (error) {
      console.error("Error fetching data:", error); // Handle errors gracefully
    }
  };

  // if (!client) return null;

  return (
    <>
      <head>
        <title>Blog Sai Paramount</title>
      </head>
      {/* Brardcum  */}
      <div className="portfolio-banner">
        <div className="port-banner-text">
          <ul id="breadcrumb">
            <li><a href="index">Home</a></li>
            <li><a href="#"><span className=" fa fa-info-circle"> </span> Blog</a></li>
          </ul>
        </div>
      </div>
      {/* Brardcum end */}
      {/* recent blog  */}
      <section className="mt-60">
        <div className="container">
          <div class="sticky-news d-flex align-items-center card-h">
            <div class="news-img-box">
              <img src="https://www.phoneworld.com.pk/wp-content/uploads/2020/01/shutterstock_720876373.jpg" alt="News" />
            </div>
            <div class="news-content">
              <h1 class="section-subtitle">Recent Blog</h1>
              <h2 class="section-title">OpenAI launches new alignment division to tackle risks of
                superintelligent AI</h2>
              <p className="mb-0 pb-0 bm-none">The makers of AI have announced the company will be dedicating 20% of its compute processing
                power over the next four years</p>
            </div>
          </div>
        </div>
      </section>
      {/* recent blog end */}
      {/* blog loop  */}
      <section className="paramount-blog">
        <div className="container">
          <div className="row">
            {
              data.length ? <>
                {data.map((post) => (
                  <div className="col-lg-4 mb-4" key={post.id} title={post.title}>
                    <div class="news-item card-h">
                      <div class="news-img-box">
                        <Link href={post.slug}>
                          <img src={post.featuredImage.node.link} className="blog-img" alt={post.title} title={post.title} />
                        </Link>
                      </div>
                      <div class="news-item-body">
                        <span class="section-subtitle d-block"><a href="#" rel="category tag">{post.categories.nodes[0].name}</a></span>
                        <span class="section-title d-block">
                          <Link href={post.slug} className="one-line">{post.title}</Link>
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </> : Array.from({ length: 10 }).map((_, index) => (
                <div className="col-lg-4 mb-4" key={index}>
                  <Skeleton variant="rectangular" width="100%" height={250} />
                  <Skeleton variant="text" width="80%" />
                  <Skeleton variant="text" width="60%" />
                </div>
              ))
            }


          </div>
        </div>
      </section>
      {/* blog loop end */}
    </>
  );
}

"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import Skeleton from '@mui/material/Skeleton';



const SinglePost = ({ params }) => {
  const [postData, setPostData] = useState(null);
  const [seoData, setSeodata] = useState([]);
 

  useEffect(() => {
    fetchSinglePost();
    seo();
  }, []);

  const fetchSinglePost = async () => {
    const url = "https://next.spis.co.in/graphql";
    const postSlug = params.singlepost;

    try {
      const res = await axios.post(
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
                  content
                  featuredImage {
                    node {
                      altText
                      fileSize
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
        }
      );

      // Find the post by slug
      const posts = res.data.data.posts.nodes;
      const singlePost = posts.find((post) => post.slug === postSlug);


      if (singlePost) {
        setPostData(singlePost);
      } else {
        console.error("Post not found!");
      }
    } catch (error) {
      console.error("Error fetching post:", error.message);
    }
  };
  // fetch SEO 
  const seo = async () => {
    let slug = params.singlepost;
    let seoUrl = `https://next.spis.co.in/graphql`;
    try {
      const seoRes = await axios.post(seoUrl, {
        query: `
        query MyQuery {
          post(id: "${slug}", idType: SLUG) {
            seo {
              canonical
              focuskw
              metaDesc
              metaKeywords
              opengraphAuthor
              opengraphDescription
              opengraphSiteName
              opengraphTitle
              opengraphType
              opengraphUrl
              readingTime
              schema {
                raw
              }
              title
              twitterDescription
              twitterTitle
            }
            slug
            status
            title(format: RAW)
          }
        }
      `
      }, {
        headers: {
          'Content-Type': 'application/json'
        }
      })
      setSeodata(seoRes.data.data.post.seo)
    } catch (error) {
      console.log(error)
    }
  }
  if (!postData) {
    return <div className="container mt-4">{
      Array.from({ length: 2 }).map((_, index) => (
        <div className="col-lg-12 mb-4" key={index}>
          <Skeleton variant="rectangular" width="100%" height={350} />
          <Skeleton variant="text" width="90%" />
          <Skeleton variant="text" width="80%" />
          <Skeleton variant="text" width="70%" />
          <Skeleton variant="text" width="50%" />
        </div>
      ))
    }</div>;
  }

  return (
    <>

      <head>
        <link rel="canonical" href={seoData?.canonical || "http://localhost/wp-api/showcase-of-our-digital-marketing-work/"} />
        <meta property="og:type" content={seoData?.opengraphType || "article"} />
        <meta property="og:url" content={seoData?.opengraphUrl || "Default URL"} />
        <title>{seoData.title}</title>
        <meta name="description" content={seoData?.metaDesc || "Sai paramount Blog"} />
        <meta name="keyword" content={seoData?.focuskw || "Sai paramount Blog"} />
        <meta property="og:title" content={seoData?.opengraphTitle || "Default OG Title"} />
        <meta property="og:description" content={seoData?.opengraphDescription || "Default OG Description"} />
        <meta name="twitter:title" content={seoData?.twitterTitle || "Default Twitter Title"} />
        <meta name="twitter:description" content={seoData?.twitterDescription || "Default Twitter Description"} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{__html: seoData?.schema?.raw || "{}"}}>
        </script>
      </head>
      {/* Brardcum  */}
      <div className="portfolio-banner">
        <div className="port-banner-text">
          <ul id="breadcrumb">
            <li><a href="index">Home</a></li>
            <li><a href="#"><span className=" fa fa-info-circle"> </span> Blog</a></li>
            <li><a href="#"><span className=" fa fa-info-circle"> </span> {postData.title}</a></li>
          </ul>
        </div>
      </div>
      <section className="mt-60 single-post">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 mb-3">
              <h1 className="section-title text-capitalize">{postData.title}</h1>
            </div>
            <div className="col-lg-12 mb-3">
              <img className="img-fluid alok-f-img" src={postData.featuredImage.node.mediaItemUrl} alt={postData.featuredImage.node.altText || "Featured Image"} />
            </div>
            <div className="col-lg-12 mb-3">
              <div dangerouslySetInnerHTML={{ __html: postData.content }}></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SinglePost;

import Head from 'next/head'
import Layout, { siteTitle } from '../../components/layout'
import utilStyles from '../styles/utils.module.scss';
import Link from 'next/link'
import { getSortedPostsData } from '../../lib/posts'
import { generateText } from '../../lib/lorem-ipsum';
import Date from "../../components/date";

export default function Home({posts, bio}) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>{bio}</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
        {/* <p>
          See here{' '}
          <Link href="/posts/first-post">
            <a>my first post</a>
          </Link>
        </p> */}
      </section>
      {/* Add this <section> tag below the existing <section> tag */}
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {posts.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <small className={utilStyles.lightText}>
                <span>
                  <Date dateString={date} />
                </span>
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>    
  )  
}

export async function getStaticProps() {
  const bio = generateText({
    count: 1,
    units: "paragraphs",
  });
  const posts = await getSortedPostsData();
  return {
    props: {
      posts,
      bio
    }
  }
}
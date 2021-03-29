import Layout from '../../../components/layout'
import { getAllPostIds, getPostData, PostData } from '../../../lib/posts'
import Head from 'next/head'
import Date from '../../../components/date'
import utilStyles from "../../styles/utils.module.scss"

interface PostPageProps{
  postData: PostData;
}

export default function Post({ postData }: PostPageProps) {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <h1 className={utilStyles.headingXl}>{postData.title}</h1>
      <div className={utilStyles.lightText}>
        <Date dateString={postData.date} />
      </div>

      <div dangerouslySetInnerHTML={{ __html: postData.content }} ></div>
    </Layout>
  )
}

export async function getStaticPaths() {
  const paths = getAllPostIds()
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.slug)
  return {
    props: {
      postData
    }
  }
}
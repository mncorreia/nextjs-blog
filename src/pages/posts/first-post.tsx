import Link from "next/link";
import Head from "next/head";
import { MyImage } from "../../../components/image";
import Layout from '../../../components/layout';
import { generateText } from "../../../lib/lorem-ipsum";

export default function FirstPost({content}) {
    return (
        <Layout>
            <Head>
                <title>First post</title>
            </Head>
            <h1>This is the way...</h1>
            <p>
                {content}
            </p>
        </Layout>
    )   
}

export async function getStaticProps() {
    const content = generateText({
        count: 3,
        units: "paragraphs",
    });
    return {
      props: {
        content
      }
    }
  }
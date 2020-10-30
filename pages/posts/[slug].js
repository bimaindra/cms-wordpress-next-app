import { useRouter } from 'next/router';
import ErrorPage from 'next/error';
import Container from '../../components/layout/container';
import PostBody from '../../components/post/post-body';
import MoreStories from '../../components/post/more-stories';
import Header from '../../components/layout/header';
import PostHeader from '../../components/post/post-header';
import SectionSeparator from '../../components/general/section-separator';
import Layout from '../../components/layout/layout';
import { getAllPostsWithSlug, getPostAndMorePosts } from '../../lib/api';
import PostTitle from '../../components/post/post-title';
import Head from 'next/head';
import { CMS_NAME } from '../../lib/constants';
import Tags from '../../components/post/tags';

export default function Post({ post, posts, preview }) {
  const router = useRouter();
  const morePosts = posts?.edges;

  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />
  }

  return (
    <Layout preview={preview}>
      <Container>
        <Header />
        {router.isFallback ? (
          <PostTitle>Loading…</PostTitle>
        ) : (
          <>
            <article>
              <Head>
                <title>
                  {post.title} | Bima Indra | Front End Engineer
                </title>
                <meta
                  property="og:image"
                  content={post.featuredImage?.node?.sourceUrl}
                />
              </Head>
              <PostHeader
                title={post.title}
                coverImage={post.featuredImage.node}
                date={post.date}
                author={post.author.node}
                categories={post.categories}
              />
              <PostBody content={post.content} />
              <footer>
                {post.tags.edges.length > 0 && <Tags tags={post.tags} />}
              </footer>
            </article>

            <SectionSeparator />
            {morePosts.length > 0 && <MoreStories posts={morePosts} />}
          </>
        )}
      </Container>
    </Layout>
  )
}

export async function getStaticProps({ params, preview = false, previewData }) {
  const data = await getPostAndMorePosts(params.slug, preview, previewData)

  return {
    props: {
      preview,
      post: data.post,
      posts: data.posts,
    },
  }
}

export async function getStaticPaths() {
  const allPosts = await getAllPostsWithSlug()

  return {
    paths: allPosts.edges.map(({ node }) => `/posts/${node.slug}`) || [],
    fallback: true,
  }
}

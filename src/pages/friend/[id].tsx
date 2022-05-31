import { NextPage } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'

const Friend: NextPage = () => {
  const router = useRouter()
  return (
    <div>
      <Head>
        <title>Friend&apos;s Details</title>
        <meta name="description" content="Friend's Details" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <p>
        Friend&apos;s ID
        {router.query.id}
      </p>
    </div>
  )
}

export default Friend

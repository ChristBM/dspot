import { NextPage } from 'next'
import Head from 'next/head'
// import avatar from '@public/vercel.svg'
// import { Avatar } from '@components/index'
// import { Name } from '@components/index'
// import { Available } from '@components/Available/Available'
// import { Status } from '@components/Status/Status'
// import { Icon } from '@components/Icon/Icon'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <Avatar mode="list" img={avatar} /> */}
      {/* <Name mode="list" name="Pepe Pepe" /> */}
      {/* <Available available={false} /> */}
      {/* <Status text="At Work..." /> */}
      {/* <div style={{ backgroundColor: '#000' }}>
        <Icon iconType="arrow_back" />
      </div> */}
    </div>
  )
}

export default Home

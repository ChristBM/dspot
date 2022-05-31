import { NextPage } from 'next'
import Head from 'next/head'
// import avatar from '@public/vercel.svg'
// import { Avatar } from '@components/index'
// import { Name } from '@components/index'
// import { Available } from '@components/Available/Available'
// import { Status } from '@components/Status/Status'
// import { Icon } from '@components/Icon/Icon'
// import { MainBtn } from '@components/index'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>List of Friends</title>
        <meta name="description" content="List of Friends" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <Avatar mode="list" img={avatar} /> */}
      {/* <Name mode="list" name="Pepe Pepe" /> */}
      {/* <Available available={false} /> */}
      {/* <Status text="At Work..." /> */}
      {/* <div style={{ backgroundColor: '#000' }}>
        <Icon iconType="arrow_back" />
      </div> */}
      {/* <MainBtn text="details" id="2" disable={false} /> */}
    </div>
  )
}

export default Home

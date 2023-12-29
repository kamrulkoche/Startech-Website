import dynamic from 'next/dynamic';

const Layout = dynamic(() => import('./home_layout/layout'), { ssr: false, })
const Title = dynamic(() => import('./home_layout/title'), { ssr: false, })

export default function Home() {
  return (
    <>
      <Title page="Home Page"></Title>
      <Layout>
      <h1>fdhfhdhjhgjkkhjkghdf</h1>

      
      </Layout>
    </>
  );
}



//Components
import { Layout } from "@/components/layouts/Layout"
import Head from "@/components/welcome/Head"
import HomeBody from "@/components/homeBody/body"
import Footer from "@/components/footer/Footer"


export default function Home() {
  return (
    <>
      <Layout title="Dinamic CV">
        <Head />
        <HomeBody />
        <Footer />
      </Layout>
    </>
  )
}

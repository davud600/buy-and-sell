import NavBar from '../comps/NavBar'
import Footer from '../comps/Footer'
import Head from 'next/head'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Buy and Sell</title>
      </Head>
      <NavBar />
      <main className="w-full h-screen">
        <div className="popular-items-section">
          <div className="section-title-container">
            <span>Popular Items</span>
            <span>See all</span>
          </div>
          <div className="popular-items-container"></div>
        </div>
        <div className="categories-section">
          <h1 className="text">Browse Categories</h1>
          <div className="categories-container"></div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

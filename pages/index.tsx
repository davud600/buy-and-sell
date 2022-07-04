import NavBar from '../comps/NavBar'
import Footer from '../comps/Footer'
import Head from 'next/head'
import PopularItems from '../comps/PopularItems'
import styles from '../styles/Home.module.css'

const cities: string[] = [
  'city1',
  'city2',
  'city3',
  'city4',
  'city5',
  'city6',
  'city7',
  'city8',
]

export default function Home() {
  return (
    <div>
      <Head>
        <title>Buy and Sell</title>
      </Head>
      <NavBar />
      <main className="flex justify-center h-screen bg-gray-50">
        <div className="w-11/12 mt-24">
          {/* Popular items section */}
          <div className="mt-4">
            <div className="flex justify-between mb-12">
              <span className="text-lg font-bold sm:text-2xl">
                Popular items
              </span>
              <span className="font-semibold text-gray-500  text-md sm:text-lg font-small">
                See all &gt;
              </span>
            </div>
            <PopularItems />
          </div>

          {/* Browse by city section */}
          <div className="mt-8">
            <div className="flex justify-between mb-12">
              <span className="text-2xl font-bold">Browse by city</span>
            </div>
            <div className={styles.citiesContainer}>
              {cities.map((city, index) => (
                <div key={index}>
                  <button className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700 focus:bg-blue-800">
                    {city}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

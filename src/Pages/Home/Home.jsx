import Ads from "./Ads"
import Product from "./Product"


const Home = () => {
  return (
    <div className="px-5 py-[100px] w-full h-screen overflow-y-scroll">
      <Ads/>
      <Product title="pending product" rowsCount={1} slidesPerView={3}/>
    </div>
  )
}

export default Home

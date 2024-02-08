import { 
  CustomersReviews, 
  HeroSection, 
  ProductsPreview, 
  TopSellingProducts, 
  ValueSection 
} from "./components"

export const Home = () => {






  return (
    <main>

      <section className="pt-8 sm:h-[calc(100vh-60px)] max-w-7xl m-auto grid grid-cols-12 gap-6 pb-6">
        <HeroSection />
      </section>

      <section className="sm:h-[450px] bg-[color:var(--bg-secondary)] grid grid-cols-1 p-6 py-16 items-center ">
        <ValueSection/>
      </section>

      <section className="sm:h-[calc(100vh)] max-w-7xl m-auto grid grid-cols-12 items-center sm:gap-10 p-6 py-16 sm:pb-0">
        <ProductsPreview />
      </section>
      
      <section className="sm:h-[450px] bg-[color:var(--bg-secondary)] p-6 py-16">
        <CustomersReviews/>
      </section>

      <section className="sm:max-h-[calc(100vh+100px)] max-w-7xl m-auto p-6 py-16">
        <TopSellingProducts />
      </section>

    </main>
  )
}

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

      <section className="h-[calc(100vh)] max-w-7xl m-auto grid grid-cols-12 gap-6 pb-6">
        <HeroSection />
      </section>

      <section className="h-[100vh] sm:h-[450px] bg-[color:var(--bg-secondary)] grid grid-cols-1 items-center ">
        <ValueSection/>
      </section>

      <section className="sm:h-[calc(100vh)] max-w-7xl m-auto grid grid-cols-12 items-center sm:gap-10 pb-6 sm:pb-0">
        <ProductsPreview />
      </section>
      
      <section className="h-[450px] bg-[color:var(--bg-secondary)]">
        <CustomersReviews/>
      </section>

      <section className="max-h-[calc(100vh+100px)] max-w-7xl m-auto">
        <TopSellingProducts />
      </section>

    </main>
  )
}

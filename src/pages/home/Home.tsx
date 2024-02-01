import { HeroSection, ValueSection } from "./components"
import { ProductsPreview } from "./components/ProductsPreview"

export const Home = () => {






  return (
    <main>

      <section className="h-[calc(100vh-110px)] max-w-7xl m-auto grid grid-cols-12 gap-6 pb-6">
        <HeroSection />
      </section>

      <section className="h-[350px] bg-[color:var(--bg-secondary)]">
        <ValueSection/>
      </section>

      <section className="h-[calc(100vh)] max-w-7xl m-auto grid grid-cols-12 gap-10 ">
        <ProductsPreview />
      </section>
      
      <section className="h-[350px] bg-[color:var(--bg-secondary)]">
        <ValueSection/>
      </section>

    </main>
  )
}

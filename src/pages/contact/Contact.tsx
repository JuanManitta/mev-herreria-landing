import { ContactInfo, FormContact } from "./components"




export const Contact = () => {
  return (
    <main className="max-w-7xl min-h-screen m-auto p-6 py-12 sm:py-6  grid grid-cols-2 gap-6 ">

      <section className="col-span-2 sm:col-span-1 flex flex-col justify-center pt-6 sm:pt-0 order-1">
        <ContactInfo/>
      </section>

      <section className="col-span-2 sm:col-span-1 flex items-center justify-center p-0 sm:p-12">
       <FormContact/>
      </section>

    </main>
  )
}

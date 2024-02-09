import { ContactInfo, FormContact } from "./components"




export const Contact = () => {
  return (
    <main className="max-w-7xl m-auto p-6 py-12 grid grid-cols-2 gap-4 ">

      <section className="col-span-2 sm:col-span-1 flex flex-col justify-center">
        <ContactInfo/>
      </section>

      <section className="col-span-2 sm:col-span-1 flex items-center justify-center p-16">
       <FormContact/>
      </section>

    </main>
  )
}

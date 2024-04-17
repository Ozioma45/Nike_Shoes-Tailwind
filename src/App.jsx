import {
  Hero,
  Service,
  SpecialOffer,
  footer,
  Subcribe,
  SuperOffer,
  PopularProduct,
  CustomerReview,
} from "./sections";
import Nav from "./Component/Nav";

const App = () => (
  <main className="relative">
    <Nav />
    <section className="xl:padding-1 wide:padding-r padding-b">
      <Hero />
    </section>
    <section className="padding">
      <PopularProduct />
    </section>
    <section className="padding">
      <SuperOffer />
    </section>
    <section className="padding-x py-10">
      <Service />
    </section>
    <section className="padding">
      <SpecialOffer />
    </section>
    <section className="padding bg-pale-blue">
      <CustomerReview />
    </section>
    <section className="padding-x sm:py-32 py-16 w-full">
      <Subcribe />
    </section>
    <section className="padding-x bg-black padding-x padding-t pb-8">
      <footer />
    </section>
  </main>
);

export default App;

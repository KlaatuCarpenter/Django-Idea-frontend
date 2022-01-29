import { RouteComponentProps } from "@reach/router"
import Pricing from "./modules/views/Pricing"
import ProductHero from "./modules/views/ProductHero"
import ProductHowItWorks from "./modules/views/ProductHowItWorks"

const Home = (props: RouteComponentProps) => (
  <>
    <ProductHero />
    <section id="how-it-works">
      <ProductHowItWorks />
    </section>
    <section id="pricing">
      <Pricing />
    </section>
  </>
)
export default Home

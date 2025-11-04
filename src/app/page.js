import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Button from "@/components/Button";

export default function Home() {
  return (
    <>
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-dark text-white">
        <div className="container-custom py-32 text-center md:text-left">
          <div className="max-w-[400px] mx-auto md:mx-0">
            <p className="text-overline text-white/50 mb-6">NEW PRODUCT</p>
            <h1 className="mb-6">XX99 MARK II HEADPHONES</h1>
            <p className="text-white/75 mb-10">
              Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.
            </p>
            <Button variant="primary">SEE PRODUCT</Button>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
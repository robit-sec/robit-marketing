import "../styles/index.css";
import Layout from "../components/layout.js";
import PhotoTextSectionRight from "../components/photo-text-section-right.js";
import PhotoTextSectionLeft from "../components/photo-text-section-left.js";
import TitleText from "../components/title-text-section.js";
import ContactForm from "../components/contact-form.js";

const WordPress = () => (
  <Layout>
    <div>
      <div className="min-w-screen home-hero">
        <div className="container mx-auto">
          <h1 className="lg:px-16 px-6 text-5xl text-white font-bold mb-8">
            Schedule your consultation today for only $250
          </h1>
        </div>
      </div>

      <div className="my-32"></div>

      <TitleText
        title="How Are the Websites We Build Different?"
        subtitle="Security is not an afterthought"
        text="lorem ipsum be the remote hemisphere Different ipsum lorem ipsum be the remote lorem."
      />

      <div className="my-32"></div>
    </div>
  </Layout>
);

export default WordPress;

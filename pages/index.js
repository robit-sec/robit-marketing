import "../styles/index.css";
import Layout from "../components/layout.js";
import HomeHero from "../components/home-hero.js";
import Padlock from "../public/padlock.svg";
import FastForward from "../public/fast-forward.svg";
import CrossedArrows from "../public/crossed-arrows.svg";
import PhotoTextSectionRight from "../components/photo-text-section-right.js";
import PhotoTextSectionLeft from "../components/photo-text-section-left.js";
import TitleText from "../components/title-text-section.js";
import ContactForm from "../components/contact-form.js";

export default () => (
  <Layout>
    <HomeHero />
    <div>
      <div className="my-32"></div>

      <PhotoTextSectionLeft
        imageSource="/map.png"
        alt="A map of the northern hemisphere with a couple of pins"
        title="What is RoBit?"
        text="RoBit is an entirely remote, distributed group of security professionals that are dedicated to the protection of your applications and network."
      />

      <div className="my-32"></div>

      <PhotoTextSectionRight
        imageSource="/image-1.png"
        alt="robit on a rocket"
        title="What makes RoBit Security different?"
        text="lorem ipsum dolor sit amet, consectetur adipisicing elit in reprehenderit in voluptate velit esse cillum dolore e  ullamcorper consequat in voluptate vel it"
      />

      <div className="my-32"></div>

      <section className="w-full py-32 lg:px-0 px-4 bg-robitBlue">
        <div className="max-w-5xl bg-white rounded-lg mx-auto lg:p-16 p-8">
          <div className="mb-12">
            <h1 className="text-3xl">Robit Specialities</h1>
          </div>
          <div className="mb-12">
            <h3 className="font-medium text-sm mb-4 uppercase tracking-wide text-robitBlue">
              Security training for your developers
            </h3>
            <p className="lg:border-l-2 lg:pl-8 mt-4 leading-loose">
              lorem ipsum dolor sit amet, consectetur adipisicing elit lora
              ipsum dolor sit amet, consectetur adipisicing elit lorem
              adipisicing elit, sed do eiusmod tempor incididunt ut labore et.
            </p>
          </div>
          <div className="mb-12">
            <h3 className="font-medium text-sm mb-4 uppercase tracking-wide text-robitBlue">
              Security that everyone can afford
            </h3>
            <p className="lg:border-l-2 lg:pl-8 mt-4 leading-loose">
              lorem ipsum dolor sit amet, consectetur adipisicing elit lora
              lorem ipsum dolor sit amet, consectetur adipisicing elit lora
              lorem ipsum dolor sit amet, consectetur adipisicing elit lora
              lorem ipsum dolor sit amet, consectetur adipisicing elit lora
              lorem ipsum dolor sit amet, consectetur adipisicing elit lora
            </p>
          </div>
          <div className="mb-12">
            <h3 className="font-medium text-sm mb-4 uppercase tracking-wide text-robitBlue">
              Keeping yourself protected from bad actors
            </h3>
            <p className="lg:border-l-2 lg:pl-8 mt-4 leading-loose">
              lorem ipsum dolor sit amet, consectetur adipis elit lora lorem
              ipsum dolor sit amet, consectetur adipis elit lora
            </p>
          </div>
        </div>
      </section>

      <div className="my-32"></div>

      <TitleText
        title="How do we protect your applications?"
        subtitle="Security is not an afterthought"
        text="lorem ipsum be the remote hemisphere with a coupl be pins eiusmod tempor incididunt ut labore"
      />

      <div className="my-32"></div>

      <section className="w-full px-4">
        <div className="max-w-5xl rounded-lg mx-auto flex lg:flex-row flex-col-reverse bg-white lg:p-16 p-8">
          <div className="flex-1 p-4">
            <h2 className="text-2xl font-medium mb-12 text-center">
              But what about security by optimism and prayer?
            </h2>
            <div className="flex flex-between mb-12 lg:flex-row flex-col">
              <div className="flex flex-1 items-center justify-center lg:mb-0 mb-6">
                <div className="rounded-full w-32 h-32 bg-robitBlue flex items-center justify-center text-white">
                  <Padlock />
                  &nbsp; Security
                </div>
              </div>
              <div className="flex flex-1 items-center justify-center lg:mb-0 mb-6">
                <div className="rounded-full w-32 h-32 bg-robitBlue flex items-center justify-center text-white">
                  <FastForward />
                  &nbsp; Speed
                </div>
              </div>
              <div className="flex flex-1 items-center justify-center lg:mb-0 mb-6">
                <div className="rounded-full w-32 h-32 bg-robitBlue flex items-center justify-center text-white">
                  <CrossedArrows />
                  &nbsp; Flexibility
                </div>
              </div>
            </div>
            <p className="leading-loose">
              lorem ipum dolor sit amet, consectetur adipisicing elit lorem ipum
              dolor sit amet, consectetur adipisicing elit
            </p>
          </div>
        </div>
      </section>

      <div className="my-32"></div>

      <div className="my-32"></div>
    </div>
  </Layout>
);

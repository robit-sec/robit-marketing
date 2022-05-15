import '../styles/index.css';

const PhotoTextLeft = props => (
    <section className="w-full">
    <div className="max-w-5xl rounded-lg mx-auto flex lg:flex-row flex-col">
      <div className="flex flex-1 p-4 mt-4">
        <img
          className="h-64 w-64 w-full object-cover object-center shadow-2xl"
          src={props.imageSource} alt={props.alt}
        />
      </div>
      <div className="flex-1 p-4">
        <h2 className="text-2xl font-medium mb-2">{props.title}</h2>
        <p className="leading-loose">
          {props.text}
        </p>
      </div>
    </div>
    </section>
);

export default PhotoTextLeft;

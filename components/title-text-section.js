import '../styles/index.css';

const TitleText = props => (
    <div className="px-4">
    <div className="max-w-5xl bg-white rounded-lg mx-auto lg:p-16 p-8">
      <h2 className="text-2xl font-medium mb-2">{props.title}</h2>
      <h3 className="font-medium text-sm mb-4 uppercase tracking-wide text-robitBlue">{props.subtitle}</h3>
      <p className="leading-loose">{props.text}</p>
    </div>
    </div>
);

export default TitleText;

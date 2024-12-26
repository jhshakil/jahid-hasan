type Props = {
  about: string;
};

const About = ({ about }: Props) => {
  return (
    <section id="about" className="py-12">
      <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8">
        About Me
      </h2>
      <div className="prose dark:prose-invert max-w-none">
        <p>{about}</p>
      </div>
    </section>
  );
};

export default About;

import CourseWork from '../components/CourseWork';
import Hero from '../components/Hero';
import Projects from '../components/Projects';
import Technologies from '../components/Technologies';
import Timeline from '../components/About';
import { Layout } from '../layout/Layout';
import { Section } from '../styles/GlobalComponents';

const Home = () => {
  return (
    <Layout>
      
      <Section grid>
        <Hero />
      </Section>
      <Projects />
      <Technologies />
      <CourseWork />
      <Timeline />

    </Layout>
  );
};

export default Home;

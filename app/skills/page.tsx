import AnimPresence from '../components/Animable/AnimPresence';
import PageFade from '../components/Animable/PageFade';
import Navbar from '../components/Navbar/Navbar';
import SkillSection from '../components/SkillSection/SkillSection';

const Page = () => {
  return (
    <main>
      <AnimPresence>
        <PageFade>
          <Navbar />
          <SkillSection />
        </PageFade>
      </AnimPresence>
    </main>
  );
};

export default Page;

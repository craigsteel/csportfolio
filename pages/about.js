import PageLayout from 'components/PageLayout';
import AboutBanner from 'components/AboutBanner';
import JourneyCard from 'components/JourneyCard';
import ToolsUsed from 'components/ToolsUsed';
import WorkFlow from 'components/WorkFlow';

function About() {
  return (
    <PageLayout className="blog-detail-page">
      <AboutBanner />
      <JourneyCard />
      <ToolsUsed />
      <WorkFlow />
    </PageLayout>
  )
}

export default About


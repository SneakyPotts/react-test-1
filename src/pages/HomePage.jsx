import {
  CostSection,
  HeroSection,
  MakeSection,
  QuestionSection,
  WorkSection
} from "../components";

function HomePage() {
  return (
    <div>
      <HeroSection />
      <MakeSection />
      <WorkSection />
      <CostSection />
      <QuestionSection />
    </div>
  )
}

export default HomePage;
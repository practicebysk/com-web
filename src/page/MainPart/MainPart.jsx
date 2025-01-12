
import SliderSection from './../Swiper/Swiper';
import ClientSection from './../clientSection/ClientSection';
import FeaturesSection from './../Features/FeaturesSection';
import ServiceSection from './../Services/ServiceSection';
import ProcessSection from './../Process/ProcessSection';
import PartnershipSection from './../Partnership/PartnershipSection';
import WorkWithSection from './../workWith/WorkWithSection';

function MainPart() {
  return (
    <div>
      <SliderSection />
      <ClientSection />
      <FeaturesSection />
      <ServiceSection />
      <ProcessSection />
      <PartnershipSection />
      <WorkWithSection />
    </div>
  );
}

export default MainPart;

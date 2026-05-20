import Container from "../components/Container";
import Heading from "../components/Heading";
import SubHeading from "../components/SubHeading";
import Image from "../components/Image";
import Marketing1 from '../assets/marketing1.png'
import Marketing2 from '../assets/marketing2.png'
import Marketing3 from '../assets/marketing3.png'
import Marketing4 from '../assets/marketing4.png'

const NewArrival = () => {
  return (
    <section className="pb-35">
      <Container>
        <SubHeading text="Featured" />
        <Heading className="pt-6 pb-15" text="New Arrival" />

        <div className="grid grid-cols-4 grid-rows-[300px_300px] gap-[30px]">
          <div className="col-start-1 col-end-3 row-start-1 row-end-3"><Image className="w-full h-full" src={Marketing1}/></div>
          <div className="col-start-3 col-end-5"><Image className="w-full h-full" src={Marketing2}/></div>
          <div><Image className="w-full h-full" src={Marketing3}/></div>
          <div><Image className="w-full h-full" src={Marketing4}/></div>
        </div>
      </Container>
    </section>
  );
};

export default NewArrival;

import Section1 from "./Section1";
import Section0 from "./Section0";
import Section2 from "./Section2";
import Section3 from "./Section3";
import { Tools } from "../utils/Data";
const Hero = () => {
  return (
    <div className="bg-gray-900 box-border text-white p-2 md:p-4">
      <Section0 />
      <Section1 />
      <Section2/>
      <Section3 key={Tools.id} tools={Tools}/>
    </div>
  );
};
export default Hero;

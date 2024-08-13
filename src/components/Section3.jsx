import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Divider from "../utils/Divider";
const Section3 = (props) => {
  const { tools } = props;
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 9,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 7,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 4,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <>
      <div className="m-2 shadow-xl p-10 rounded-md font-Roboto">
        <p className="md:text-2xl xl:text-3xl text-xl font-semibold my-2 text-center md:mb-10">
          Tools & Language I used
        </p>
        <Carousel
          responsive={responsive}
          className=""
        >
          {tools.map((tool) => (
            <div key={tool.id} className="ml-20 sm:ml-0">
              <p className="text-5xl text-primary">{tool.imgLink}</p>
              <p className="text-lg font-light text-start py-2">
                {tool.name}
              </p>
            </div>
          ))}
        </Carousel>
      </div>
    <Divider/>
    </>
  );
};
export default Section3;

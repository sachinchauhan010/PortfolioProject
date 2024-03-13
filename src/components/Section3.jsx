import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const Section3 = (props) => {
  const { tools } = props;
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 7,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <>
      <div className="m-10 shadow-xl p-10 rounded-md font-Roboto bg-blue-100">
        <p className="md:text-2xl xl:text-3xl text-xl font-bold text-blue-900 my-2 text-center md:mb-10">
          Tools & Language I used
        </p>
        <Carousel
          responsive={responsive}
          className=""
        >
          {tools.map((tool) => (
            <div className="h-32">
              <img src={tool.imgLink} alt="" className="w-1/3 h-20" />
              <p className="md:text-lg text-base lg:text-xl font-semibold flex flex-wrap text-center md:text-start px-10 md:p-0 m-3">
                {tool.name}
              </p>
            </div>
          ))}
        </Carousel>
      </div>
    </>
  );
};
export default Section3;

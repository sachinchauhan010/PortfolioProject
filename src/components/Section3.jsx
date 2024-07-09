import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
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
      <div className="m-2 shadow-xl p-10 rounded-md font-Roboto bg-blue-100">
        <p className="md:text-2xl xl:text-3xl text-xl font-bold text-blue-900 my-2 text-center md:mb-10">
          Tools & Language I used
        </p>
        <Carousel
          responsive={responsive}
          className=""
        >
          {tools.map((tool) => (
            <div key={tool.id} className="ml-20 sm:ml-0">
              {/* <img src={tool.imgLink} alt="" className="sm:w-1/3 w-2/5 h-20 mx-auto center" /> */}
              <p className="text-5xl text-blue-900">{tool.imgLink}</p>
              <p className="text-lg font-medium text-start py-2">
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

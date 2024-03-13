const Section3 = (props) => {
  const { tools } = props;
  return (
    <>
      <div className="m-10 shadow-2xl p-10 rounded-md">
      <p className="md:text-2xl xl:text-3xl text-xl font-bold text-blue-900 my-2 text-center md:mb-10">
            Tools & Language I used
          </p>
        <div className=" flex flex-wrap">
          {tools.map((tool) => (
            <div className="w-1/6 flex-col justify-center items-center">
              <img src={tool.imgLink} alt=""  className="w-1/2"/>
              <p  className="md:text-lg text-base lg:text-xl font-semibold flex flex-wrap text-center md:text-start px-10 md:p-0 text-center m-3">{tool.name}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
export default Section3;

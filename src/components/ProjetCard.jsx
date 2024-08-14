import { Link } from "react-router-dom"

function ProjetCard({ item }) {
  return (
    <div className="flex flex-col justify-start w-full md:w-[46%] lg:w-[30%] h-[300px] border-2 rounded mx-auto">
      <img
        src={item.imageLink}
        alt=""
        className="h-[200px]"
      />
      <div className="p-2">
        <p className="">{item.webName}</p>
        <div className="flex justify-start">
          {item.techStack.map((tech) => <p className="text-primary">{tech + " "} </p>)}
        </div>
        <div className="flex justify-between items-end mt-2">
            <Link target="_blank" to={item.liveLink} className="hover:text-primary relative group">Live Link
            <div class="absolute bottom-0 left-0 w-full h-[2px] bg-current scale-x-0 group-hover:scale-x-100 transform transition-transform duration-300 ease-in-out origin-left"></div>
            </Link>
            <Link target="_blank" to={item.gitLink} className="hover:text-primary relative group">Git Link
            <div class="absolute bottom-0 left-0 w-full h-[2px] bg-current scale-x-0 group-hover:scale-x-100 transform transition-transform duration-300 ease-in-out origin-left"></div>
            </Link>
        </div>
      </div>
    </div>
  )
}

export default ProjetCard

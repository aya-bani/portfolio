
const InterestCard = (props) => {
    return (
      <div className="flex flex-col sm:flex-row items-center bg-[#251C31] p-6 rounded-lg shadow-md transition-transform transform hover:scale-105 hover:shadow-lg w-full max-w-sm sm:max-w-xl">
        <div className="flex flex-col items-center justify-center">
            <img src={props.image} alt="" className="w-12 h-auto" />
            <h3 className="text-xl font-semibold text-white">{props.title}</h3>
            <p className="text-white">{props.description}</p>
        </div>
      </div>
    )
  }
  
  export default InterestCard
  
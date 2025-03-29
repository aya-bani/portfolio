import  {interests} from '../data';
import InterestCard from "./InterestCard";

const Interests = () => {
  return (
    <div className="w-full py-16 flex justify-center items-center flex-col">
      <h1 className="text-3xl font-bold text-white mb-4 font-preahvihear">Interests</h1>

      <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 gap-6 w-full max-w-4xl px-4">
        {interests.map((interest, key) => (
          <InterestCard 
            key={key}
            image={interest.image}
            title={interest.title}
            description={interest.description}
          />
        ))}
      </div>
    </div>
  )
}


export default Interests

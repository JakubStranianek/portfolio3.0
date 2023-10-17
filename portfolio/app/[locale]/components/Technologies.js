
import Image from "next/image"

function Technologies({sendData, usedTechnology}) {
  return (
    <div className="w-full">                
    <h2 className="text-center text-xl font-cal py-8">
        {usedTechnology}
    </h2>
                <div className="flex items-center justify-center flex-wrap gap-12">
                  {sendData.technologies.map((technology) => {
                    return (
                      <div key={technology.name}>                
                        <Image src={technology.svgImage} width={technology.width} height={technology.height} alt={technology.name} title={technology.name} className="hover:scale-125 transform transition duration-200"></Image>                                                
                      </div>
                    )
                  })}                
                </div>
              </div>
  )
}

export default Technologies
import data from "../../data.json";

export default function ProjectDetail({params}) {
  const filteredData = data.filter((item) => item.slug === params.slug);
  const noData = data.filter((item) => item.slug !== params.slug);

  return (
    <div>      
       {filteredData.map((item) => {
        return (
          <div key={item.id}>
            <h1>{item.name}</h1>
            <p>{item.description}</p>
          </div>
        );
       })}
    </div>
  )
}

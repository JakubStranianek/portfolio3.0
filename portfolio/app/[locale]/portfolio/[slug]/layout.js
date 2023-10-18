import data from "../../data.json";

export async function generateMetadata({ params }) {
    // read route params
    const portfolio = data.find((post) => post.slug === params.slug);
    if (!portfolio) {
        return;
      }
    
    return {
      title: "Jakub Stranianek | " + portfolio.name,
      description: portfolio.description,
    }
  }

function Layout({children}) {
  return (
    <div>
        {children}
    </div>
  )
}

export default Layout
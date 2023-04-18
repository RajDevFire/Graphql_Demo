import './App.css';
import { useQuery,gql } from "@apollo/client";

var humaData = gql `
      query getHumanList  {
          human{
            name
            age
            degree
            address{
              housename
            }
          }
        }
`;


function App() {

  const { loading, error, data } = useQuery(humaData);

  
  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;

  return (
    <div>
        {
          data.human.map(human => (
                       <div>
                          <h1>{human.name}</h1>
                          <h1>{human.age}</h1>
                          <h1>{human.degree}</h1>
                       </div>
                   )
            )
        }
    </div>  
  );
}

export default App;

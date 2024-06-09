import { useRouteError } from "react-router-dom";


const Error = () => {

 const err = useRouteError();
 console.log(err);
 return (<>
  <h1>Ooops Some error occured....</h1>
  <h3>{err.status} {err.statusText}</h3>

 </>


 )
}
export default Error;
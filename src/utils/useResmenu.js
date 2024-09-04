import { useEffect, useState } from "react"
import { resMenu } from "./constants";

const useResmenu = (resId) => {


 const [resInfo, setResInfo] = useState(null);

 const fetchMenu = async () => {
  const data = await fetch(resMenu + resId);
  const myData = await data.json();

  setResInfo(myData.data);
 }


 useEffect(() => {
  fetchMenu(resId);
 }, [])
 return resInfo;

}




export default useResmenu;




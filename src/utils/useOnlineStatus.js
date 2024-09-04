
import { useEffect, useState } from "react";

const useOnlineStatus = () => {
 const [status, setStatus] = useState(navigator.onLine);

 useEffect(() => {
  // Define the event handler functions
  const handleOnline = () => setStatus(true);
  const handleOffline = () => setStatus(false);

  // Attach event listeners
  window.addEventListener("online", handleOnline);
  window.addEventListener("offline", handleOffline);

  // Cleanup function to remove event listeners
  return () => {
   window.removeEventListener("online", handleOnline);
   window.removeEventListener("offline", handleOffline);
  };
 }, []);

 return status;
};

export default useOnlineStatus;

import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [message, setMessage] = useState("Currently Loaded Static data...");

  useEffect(() => {
    axios.get("http://localhost:5000").then((res) => setMessage(res.data));
  }, []);

  return <h1 className="text-2xl font-bold">{message}</h1>;
}

export default App;

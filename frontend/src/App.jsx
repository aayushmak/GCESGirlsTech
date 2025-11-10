import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("http://localhost:4000/api/hello")
      .then(res => res.json())
      .then(data => setData(data.message));
  }, []);

  return (
    <div className="h-screen flex justify-center items-center bg-gray-900 text-white text-3xl font-semibold">
      {data ? data : "Loading..."}
    </div>
  );
}

export default App;

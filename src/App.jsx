import "bootstrap/dist/css/bootstrap.min.css";
import useFetch from "./useFetch";

export default function App() {
  const { data, error, loading, fetchData } = useFetch(
    "https://api.adviceslip.com/advice",
  );
  return (
    <div className="text-center my-4">
      <h1>Advice Slip API</h1>
      <button onClick={fetchData} className="btn btn-primary my-2">
        Get Advice
      </button>
      <div>
        {error && <p>Something went wrong</p>}
        {loading
          ? "Loading..."
          : data && (
              <div className="my-4">
                <strong>{data.slip.advice}</strong>
              </div>
            )}
      </div>
    </div>
  );
}

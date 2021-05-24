import Thumbnail from "./Thumbnail";

function Results({ movies }) {
  return (
    <div>
      {movies.map((result) => (
        <Thumbnail key={result.id} result={result} />
      ))}
    </div>
  );
}

export default Results;

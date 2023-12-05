import "./SearchResult.css";

export const SearchResult = ({ result }) => {
  return (
    <div
      className="search-result"
      onClick={(e) => alert(`Voce selecionou ${result}!`)}
    >
      {result}
    </div>
  );
};
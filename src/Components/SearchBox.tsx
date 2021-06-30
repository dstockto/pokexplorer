import {useState} from "react";

interface SearchBoxProps {
  applyFilter: (filter: string) => void
}

function SearchBox({applyFilter}: SearchBoxProps) {
  const [filter, setFilter] = useState<string | null>(null);

  const doFilter = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilter(e.target.value);
    applyFilter(e.target.value);
  }

  return (
    <div>
    <input value={filter || ''} onChange={doFilter} data-testid={'filter'} />
    </div>
  )
}

export default SearchBox;

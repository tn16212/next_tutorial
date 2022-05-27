import { Dispatch, SetStateAction } from "react";

export default function SearchBar(
    {
        filterText, inStockOnly, onFilterTextChange, onInStockOnlyChange
    }: {
        filterText: string, inStockOnly: boolean, onFilterTextChange: Dispatch<SetStateAction<string>>, onInStockOnlyChange: Dispatch<SetStateAction<boolean>>
    }): JSX.Element {
    return (
        <form>
            <input type="text" value={filterText} placeholder="Search..." onChange={(e) => onFilterTextChange(e.target.value)} />
            <label>
                <input type="checkbox" checked={inStockOnly} onChange={(e) => onInStockOnlyChange(e.target.checked)} />
                {' '}
                Only show products in stock
            </label>
        </form>
    );
}
import { useState } from 'react';
//他のタブからimportしてる
import Product, { PRODUCTS } from './product';
import ProductCategoryRow from './ProductCategoryRow';
import ProductRow from './ProductRow';
import ProductTable from './ProductTable';
import SearchBar from './SearchBar';
import FilterableProductTable from './FilterableProductTable';

export default function App() {
    return <FilterableProductTable products={PRODUCTS} />;
}
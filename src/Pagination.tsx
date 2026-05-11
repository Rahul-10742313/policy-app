import { useState } from 'react';

const Pagination = ({ items, itemsPerPage, renderItem }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const lastIndex = currentPage * itemsPerPage;
  const firstIndex = lastIndex - itemsPerPage;
  const currentItems = items.slice(firstIndex, lastIndex);
  const totalPages = Math.ceil(items.length / itemsPerPage);

  return (
    <div>
      {/* 1. Render the container and items */}
      <div>
        {currentItems.map((item) => renderItem(item))}
      </div>

      {/* 2. Controls */}
      <div className="flex justify-center">
        <button 
          disabled={currentPage === 1} 
          onClick={() => setCurrentPage(p => p - 1)}
          className="m-1"
        > Prev </button>
        
        <span className="m-1"> {currentPage} / {totalPages} </span>

        <button 
          disabled={currentPage === totalPages} 
          onClick={() => setCurrentPage(p => p + 1)}
          className="m-1"
        > Next </button>
      </div>
    </div>
  );
}

export default Pagination;
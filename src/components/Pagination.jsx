import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import ReactPaginate from "react-paginate";
import Card from "./Card";

function Items({ currentItems }) {
  return (
    <div className="flex flex-wrap justify-between gap-y-10">
      {currentItems &&
        currentItems.map((item) => (
          <div>
            <Card
              id={item.id}
              title={item.title}
              image={item.thumbnail}
              regularprice={"300"}
              saleprice={item.price}
            />
          </div>
        ))}
    </div>
  );
}

function Pagination({ itemsPerPage }) {
  let [alldata, setAlldata] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => setAlldata(data.products));
  }, []);

  const [itemOffset, setItemOffset] = useState(0);
  const endOffset = itemOffset + itemsPerPage;

  console.log(`Loading items from ${itemOffset} to ${endOffset}`);

  const currentItems = alldata.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(alldata.length / itemsPerPage);
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % alldata.length;
    console.log(`User requested page number ${event.selected}, which is offset ${newOffset}`,);
    setItemOffset(newOffset);
  };

  return (
    <>
      <Items currentItems={currentItems} />
      <div className="flex items-center justify-between">
        <ReactPaginate
          breakLabel="..."
          nextLabel=""
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={pageCount}
          previousLabel=""
          containerClassName="flex cursor-pointer"
          pageLinkClassName="bg-black py-2 px-6 text-white mr-5 mt-20 inline-block"
          renderOnZeroPageCount={null}
        />
        <h2 className="pt-20">Start {itemOffset+1}: End {alldata.length>endOffset ? endOffset:alldata.length}: Total: {alldata.length}</h2>
      </div>
    </>
  );
}

export default Pagination;

import React, {useState, useEffect} from 'react';
import ReactPaginate from 'react-paginate';

const Pagination = ({info, pageNumber, setPageNumber}) => {
  
    let [width, setWidth] = useState(window.innerWidth);

    let updateDimension = () => {
      setWidth(window.innerWidth)
    }

    useEffect(() => {
      window.addEventListener('resize', updateDimension);
      return () => window.removeEventListener('resize', updateDimension);
    }, [])

  return (
    <>
    <style jsx="true">
      {`
        .prev a, .next a {
          color: #fff !important;
          text-decoration: none
        }
        @media (max-width: 768px) {
          .next, .prev {
            display: none
          }
          .pagination {
            font-size: 14px;
          }
        }
      `}
    </style>
      <ReactPaginate 
          onPageChange={(data) => {
              setPageNumber(data.selected + 1);
          }}
          className="pagination justify-content-center gap-2 my-4"
          forcePage={pageNumber === 1 ? 0 : pageNumber - 1}
          previousLabel="Prev"
          nextLabel="Next"
          previousClassName="btn btn-primary prev"
          nextClassName="btn btn-primary next"
          pageClassName="page-item"
          pageLinkClassName="page-link"
          activeclassname='active'
          pageCount={Math.ceil(info?.pages)} 
          marginPagesDisplayed={width < 576 ? 1 : 2}
          pageRangeDisplayed={width < 576 ? 1 : 2}
      />
    </>
    
  )
}

export default Pagination;
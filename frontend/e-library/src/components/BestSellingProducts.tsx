import React, { Fragment, Suspense } from "react";

const BestSellingProducts:React.FC = () => {


  const bestSellingProductsArr = [
    { title: 'The Alchemist', soldUnits: 134 },
    { title: 'Sapiens', soldUnits: 112 },
    { title: 'Atomic Habits', soldUnits: 95 },
    { title: 'Rich Dad Poor Dad', soldUnits: 87 },
    { title: 'Ikigai', soldUnits: 78 },
    { title: 'The Psychology of Money', soldUnits: 73 },
  ];

  return (
    <Fragment>
      <Suspense>
        <section className="flex flex-col w-full h-full">
          <div className="heading text-xl font-semibold py-3 text-cyan-950 border-b border-cyan-950 shadow-sm">
            <span>Best Selling Products</span>
          </div>
          <div className="bestSellingProductsContainer flex flex-col justify-ceter items-center overflow-y-auto h-[20vh] py-2">
            {bestSellingProductsArr.map((singleObje, index) => (
              <Fragment key={index}>
                <div
                  onClick={() => alert("we'll make this functionality")}
                  className="hover:text-black cursor-pointer flex justify-between items-center w-full text-lg text-cyan-950 ">
                  <span>{singleObje.title}</span>
                  <span className="mx-2">{singleObje.soldUnits}</span>
                </div>
              </Fragment>
            ))}          
          </div>
        </section>
      </Suspense>
    </Fragment>
  );
}

export default BestSellingProducts;

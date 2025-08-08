import { Suspense } from "react"
import { Fragment } from "react/jsx-runtime"

const LowStockBox:React.FC = () => {

  const lowStockProducts = [
    { name: "The Art of Minimalism", quantity: 5 },
    { name: "Deep Work", quantity: 3 },
    { name: "Sapiens: A Brief History of Humankind", quantity: 2 },
    { name: "The Subtle Art of Not Giving a F*ck", quantity: 4 },
    { name: "Atomic Habits", quantity: 1 },
  ];

  return (
    <Fragment>
      <Suspense>
        <section className="flex flex-col w-full h-full">
          <div className="heading text-xl font-semibold pb-3 text-cyan-950 border-b border-cyan-950 shadow-sm">
            <span>Low Stock Products</span>
          </div>
          <div className="bestSellingProductsContainer flex flex-col justify-ceter items-center overflow-y-auto h-[20vh] py-2">
            {lowStockProducts.map((singleObje, index) => (
              <Fragment key={index}>
                <div
                  onClick={() => alert("we'll make this functionality")}
                  className="hover:text-black cursor-pointer flex justify-between items-center w-full text-lg text-cyan-950 ">
                  <span>{singleObje.name}</span>
                  <span className="mx-3">{singleObje.quantity}</span>
                </div>
              </Fragment>
            ))}          
          </div>
        </section>
      </Suspense>
    </Fragment>
  );
}

export default LowStockBox;

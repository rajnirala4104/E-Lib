import { Suspense } from "react"
import { Fragment } from "react/jsx-runtime"
import { BestSellingProducts, LowStockBox, SalesLineChart, TotalsBox } from "."
import { TotalsBoxInterface } from "../types"
import { AiFillProduct } from "react-icons/ai";
import { PiUsersThreeFill } from "react-icons/pi";
import { IoBag } from "react-icons/io5";
import { RiMoneyRupeeCircleFill } from "react-icons/ri";

const Dashboard:React.FC = () => {


  const totalBoxArr:TotalsBoxInterface[] = [
    {
      icon: <AiFillProduct />,
      title: "Total Products",
      totalNumber: "255",
      navigato: "inventory"
    },{
      icon: <PiUsersThreeFill />,
      title: "Total Users",
      totalNumber: "1245",
      navigato: "customers"
    },{
      icon: <IoBag />,
      title: "Total Orders",
      totalNumber: "435",
      navigato: "orders"
    },{
      icon: <RiMoneyRupeeCircleFill />,
      title: "Total Profit",
      totalNumber: "442599",
      navigato: "finance"
    }
  ]

  return (
    <Fragment>
      <Suspense fallback={"loading.."}>
        <section className="w-full h-full flex flex-col">
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex flex-wrap justify-evenly items-center">
              {totalBoxArr.map((singleObj:TotalsBoxInterface, index) => (
                <Fragment key={index}>
                  <TotalsBox {...singleObj}/>
                </Fragment>
              ))}
            </div>
          </div>
          <div className="flex w-full justify-evenly items-start">
            <div className="bg-white rounded-lg shadow p-6 my-2 w-[50%]">
             <SalesLineChart />  
            </div>
            <div className="w-[50%] h-full">
              <div className="bg-white rounded-lg shadow p-6 m-2 h-[47%]">
                <BestSellingProducts /> 
              </div>
              <div className="bg-white rounded-lg shadow p-6 m-2 h-[47%]">
                <LowStockBox />  
              </div>
            </div>
          </div>
       </section>
      </Suspense>
    </Fragment>
  )
}

export default Dashboard;

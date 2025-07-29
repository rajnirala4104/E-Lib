import { Suspense } from "react"
import { Fragment } from "react/jsx-runtime"
import { TotalsBox } from "."
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
        <section className="w-full h-full">
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex justify-evenly items-center">
              {totalBoxArr.map((singleObj:TotalsBoxInterface, index) => (
                <Fragment key={index}>
                  <TotalsBox {...singleObj}/>
                </Fragment>
              ))}
            </div>
          </div>
        </section>
      </Suspense>
    </Fragment>
  )
}

export default Dashboard;

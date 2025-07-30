import { Suspense, useContext } from "react";
import { Fragment } from "react/jsx-runtime";
import { TotalsBoxInterface } from "../types";
import { useNavigate } from "react-router-dom";
import { AdminSideBarViewStateContext } from "../context";

const TotalsBox:React.FC<TotalsBoxInterface> = (props) => {
  
  const navigator = useNavigate();
  const {setView} = useContext(AdminSideBarViewStateContext);

  return (
    <Fragment>
      <Suspense fallback={"loading..."}>
        <div 
          onClick={() => {
            setView(props?.navigato as string)
            navigator(`/admin/${props.navigato}`)
          }}
          className="border border-gray-100 h-full cursor-pointer flex justify-evenly items-center py-2 px-2 m-1 rounded-md shadow-md hover:shadow-lg">
          <div className="icon flex flex-col justify-center items-center text-2xl bg-cyan-200 p-4 rounded-md text-cyan-900">
            {props.icon}
          </div>
          <div className="flex flex-col justify-center items-start px-3 text-cyan-900">
            <div className="title">
              {props.title}
            </div>
            <div className="totalNumber text-xl font-semibold">
              {props.totalNumber}
            </div>
          </div>
        </div>
      </Suspense>
    </Fragment>
  )
}


export default TotalsBox;

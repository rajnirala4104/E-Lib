import { Suspense } from "react"
import { Fragment } from "react/jsx-runtime"

const Inventory:React.FC = () => {

  return (
    <Fragment>
      <Suspense fallback={"loading.."}>
        <section>
          <div className="bg-white rounded-lg shadow p-6">
            <span>Inventory</span>
          </div>
        </section>
      </Suspense>
    </Fragment>
  )
}

export default Inventory;

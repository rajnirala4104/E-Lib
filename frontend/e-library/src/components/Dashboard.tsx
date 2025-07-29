import { Suspense } from "react"
import { Fragment } from "react/jsx-runtime"

const Dashboard:React.FC = () => {

  return (
    <Fragment>
      <Suspense fallback={"loading.."}>
        <section>
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-bold mb-4">Content Area</h2>
              <p className="text-2xl text-gray-600">
                Dashboard
              </p>
          </div>
        </section>
      </Suspense>
    </Fragment>
  )
}

export default Dashboard;

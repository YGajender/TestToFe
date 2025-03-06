import Link from "next/link"
import Layout from "../Layout"

const Page = () => {
  return (
    <Layout>
      <div className="title">
        <h4>Your profile</h4>
      </div>

      <div className="wrapper">
        <div className="all-info-timeline">
          <div className="all-info">
            <h5>Basic Details</h5>
            <div className="info-inner">
              <div className="label-outer">
                <p>Student Name</p>
                <h6>Sannvi Choudhary</h6>
              </div>
              <div className="label-outer">
                <p>DOB</p>
                <h6>15 Jan 2024</h6>
              </div>
            </div>
            <div className="info-inner">
              <div className="label-outer">
                <p>State</p>
                <h6>MBBS Abroad</h6>
              </div>
              <div className="label-outer">
                <p>Nationality</p>
                <h6>Abc</h6>
              </div>
            </div>
            <div className="info-inner">
              <div className="label-outer">
                <p>Domicile</p>
                <h6>Abc</h6>
              </div>
              <div className="label-outer">
                <p>Gender</p>
                <h6>Female</h6>
              </div>
            </div>
            <div className="info-inner">
              <div className="label-outer">
                <p>Are you only girl child of your parents?</p>
                <h6>Yes</h6>
              </div>
              <div className="label-outer">
                <p>Category</p>
                <h6>Central</h6>
              </div>
            </div>
            <div className="info-inner">
              <div className="label-outer">
                <p>Are You a Physically Disabled?</p>
                <h6>Yes</h6>
              </div>
              <div className="label-outer">
                <p>Your Father is army Person?  </p>
                <h6>Yes</h6>
              </div>
            </div>
            <div className="info-inner">
              <div className="label-outer">
                <p>Belongs to Minority</p>
                <h6>Yes</h6>
              </div>
              <div className="label-outer">
                <p>Christianism Minority</p>
                <h6>Christianism Minority</h6>
              </div>
            </div>

            <div className="button-wrapper type2">
              <button type="submit" className="btn default">
                Edit{" "}
              </button>
            </div>
          </div>

          <div className="all-info">
            <h5>NEET Details</h5>
          </div>

          <div className="all-info">
            <h5>Family Details</h5>
          </div>
          <div className="all-info">
            <h5>Contact Details</h5>
          </div>
          <div className="all-info">
            <h5>Education Details</h5>
          </div>
          <div className="all-info">
            <h5>Account Details</h5>
          </div>
          <div className="all-info">
            <h5>Other Details</h5>
          </div>
          <div className="all-info">
            <h5>Requirement Doc.</h5>
          </div>
        </div>

        <div className="button-wrapper">
          <Link
            href="/dashboard/documents"
            type="submit"
            className="btn default"
          >
            Previous
          </Link>
          <Link href="/dashboard" type="submit" className="btn btn-primary">
            Save
          </Link>
        </div>
      </div>
    </Layout>
  )
}

export default Page

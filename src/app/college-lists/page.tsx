import CollegeComparisons from "@/components/CollegeComparisons";
import Banner from "@/components/CollegeLists/Banner";
import CollegeListing from "@/components/CollegeLists/CollegeListing";
import Filters from "@/components/CollegeLists/Filters";
import IITList from "@/components/CollegeLists/IITList";
import Pagination from "@/components/CollegeLists/Pagination";
import SearchSort from "@/components/CollegeLists/SearchSort";
import CollegeComparison from "@/components/FeeDetails/CollegeComparison";
import Footer from "@/components/Footer";
import HeaderSecond from "@/components/HeaderSecond";

export default function page() {
  return (
    <>
      <HeaderSecond />

      <Banner />

      <div className="main-inner">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-xl-3">
              <Filters />
            </div>
            {/* <!-- right side --> */}
            <div className="col-lg-8 col-xl-9">
              <div className="right-side">
                <SearchSort />
                {/* <!-- iit deli html  --> */}

                <IITList />

                {/* <!-- Find Collage listing by States  --> */}
                <CollegeListing />

                <IITList />
                {/* <!-- Get Comparison on collage ranks, fees, placements etc --> */}
                <CollegeComparisons />

                <IITList />

                <Pagination />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

import Image from "next/image";
import hand from "../../assets/images/hand.png";
import handdown from "../../assets/images/hand-down.png";

const CollegeInnerInfo = () => {
  return (
    <div className="college-inner-info">
      {/* What Students Say? */}
      <div className="students-say">
        <h3>What Students Say?</h3>
        <div className="row">
          <div className="col-md-6">
            <div className="list">
              <div className="hand d-flex align-items-center">
                <Image src={hand} alt="Likes" width={30} height={30} />
                <p>Likes</p>
              </div>
              <ul>
                <li>
                  I like the exposure a person gets here by his/her seniors as
                  senior junior relationship here is what I must say the best I
                  have ever seen
                </li>
                <li>
                  The campus is one of the best in the nation so you have a lot
                  of space for everything
                </li>
                <li>
                  Marketing and Strategy Professor - one of the best professors
                  in India I swear
                </li>
                <li>The faculty to student ratio been one is to 6 is DMS</li>
              </ul>
              <li className="more">
                <a href="#">+5 More</a>
              </li>
            </div>
          </div>
          <div className="col-md-6">
            <div className="list red">
              <div className="hand d-flex align-items-center">
                <Image src={handdown} alt="Dislikes" width={30} height={30} />
                <p className="red">Dislikes</p>
              </div>
              <ul>
                <li>
                  I like the exposure a person gets here by his/her seniors as
                  senior junior relationship here is what I must say the best I
                  have ever seen
                </li>
                <li>
                  The campus is one of the best in the nation so you have a lot
                  of space for everything
                </li>
                <li>
                  Marketing and Strategy Professor - one of the best professors
                  in India I swear
                </li>
                <li>The faculty to student ratio been one is to 6 is DMS</li>
              </ul>
              <li className="more red">
                <a href="#">+5 More</a>
              </li>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollegeInnerInfo;

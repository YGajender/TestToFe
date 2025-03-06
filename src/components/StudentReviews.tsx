import Image from "next/image";
import Link from "next/link";

const StudentReviews = () => {
  return (
    <div className="college-inner-info">
      {/* What Students Say? */}
      <div className="students-say">
        <h3>What Students Say?</h3>
        <div className="row">
          <div className="col-md-6">
            <div className="list">
              <div className="hand d-flex align-items-center">
                <Image
                  src="/assets/images/hand.png"
                  alt="Likes"
                  width={50}
                  height={50}
                />
                <p>Likes</p>
              </div>
              <ul>
                <li>
                  I like the exposure a person gets here by his/her seniors as
                  senior-junior relationship here is what I must say the best I
                  have ever seen.
                </li>
                <li>
                  The campus is one of the best in the nation so you have a lot
                  of space for everything.
                </li>
                <li>
                  Marketing and Strategy Professor - one of the best professors
                  in India, I swear.
                </li>
                <li>The faculty-to-student ratio being 1:6 is DMS.</li>
              </ul>
              <li className="more">
                <Link href="">
                  <a>+5 More</a>
                </Link>
              </li>
            </div>
          </div>
          <div className="col-md-6">
            <div className="list red">
              <div className="hand d-flex align-items-center">
                <Image
                  src="/assets/images/hand-down.png"
                  alt="Dislikes"
                  width={50}
                  height={50}
                />
                <p className="red">Dislikes</p>
              </div>
              <ul>
                <li>
                  I like the exposure a person gets here by his/her seniors as
                  senior-junior relationship here is what I must say the best I
                  have ever seen.
                </li>
                <li>
                  The campus is one of the best in the nation so you have a lot
                  of space for everything.
                </li>
                <li>
                  Marketing and Strategy Professor - one of the best professors
                  in India, I swear.
                </li>
                <li>The faculty-to-student ratio being 1:6 is DMS.</li>
              </ul>
              <li className="more red">
                <Link href="">
                  <a>+5 More</a>
                </Link>
              </li>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentReviews;

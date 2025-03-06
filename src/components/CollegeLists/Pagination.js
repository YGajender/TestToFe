import Link from "next/link";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

const Pagination = () => {
  return (
    <div className="pagination">
      <ul>
        <li>
          <Link href="#">
            <FaAngleLeft />
          </Link>
        </li>
        <li>
          <Link href="#">01</Link>
        </li>
        <li>
          <Link href="#">02</Link>
        </li>
        <li>
          <Link href="#">03</Link>
        </li>
        <li>
          <Link href="#">04</Link>
        </li>
        <li>
          <Link href="#">
            <FaAngleRight />
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Pagination;

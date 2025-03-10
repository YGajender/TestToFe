import { logout } from "@/store/services/authSlice"
import React from "react"
import { useDispatch } from "react-redux"

const MobileMenu = ({ isOpen, toggleMenu }) => {

  const dispatch = useDispatch()
  return (
    <div className="mobile-menu">
      <div className="container">
        <div className="logged-in">
          <div className="user-img">N</div>
          <h6>Natalya</h6>
        </div>

        <ul>
          <li>
            <a href="#">
              <svg
                width="33"
                height="33"
                viewBox="0 0 33 33"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="33" height="33" rx="8" fill="currentColor" />
                <rect x="8" y="7" width="8" height="8" rx="2" fill="white" />
                <rect x="18" y="7" width="8" height="8" rx="2" fill="white" />
                <rect x="8" y="17" width="8" height="8" rx="2" fill="white" />
                <rect x="18" y="17" width="8" height="8" rx="2" fill="white" />
              </svg>
              Your Profile
            </a>
          </li>
          <li>
            <a href="#">
              <svg
                width="33"
                height="33"
                viewBox="0 0 33 33"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="33" height="33" rx="8" fill="currentColor" />
                <path
                  d="M24.1283 20.4295C23.6443 19.5928 23.0619 18.0014 23.0619 15.1877V14.6053C23.0619 10.9713 20.1416 7.99361 16.5486 7.969H16.4994C15.6373 7.96792 14.7835 8.13693 13.9868 8.46634C13.1901 8.79575 12.4662 9.2791 11.8566 9.8887C11.247 10.4983 10.7637 11.2222 10.4343 12.0189C10.1048 12.8155 9.93584 13.6694 9.93692 14.5315V15.1877C9.93692 18.0014 9.3545 19.5928 8.87052 20.4295C8.75089 20.6287 8.68702 20.8564 8.68557 21.0888C8.68413 21.3211 8.74517 21.5496 8.86231 21.7502C8.97717 21.9509 9.14327 22.1174 9.34363 22.2327C9.54398 22.348 9.77138 22.408 10.0025 22.4065H22.9963C23.2275 22.408 23.4549 22.348 23.6552 22.2327C23.8556 22.1174 24.0217 21.9509 24.1365 21.7502C24.2537 21.5496 24.3147 21.3211 24.3133 21.0888C24.3118 20.8564 24.248 20.6287 24.1283 20.4295V20.4295Z"
                  fill="white"
                />
                <path
                  d="M19.1172 23.7185H13.8672C13.6931 23.7185 13.5262 23.7876 13.4031 23.9107C13.2801 24.0338 13.2109 24.2007 13.2109 24.3748C13.2109 24.5488 13.2801 24.7157 13.4031 24.8388C13.5262 24.9619 13.6931 25.031 13.8672 25.031H19.1172C19.2912 25.031 19.4582 24.9619 19.5812 24.8388C19.7043 24.7157 19.7734 24.5488 19.7734 24.3748C19.7734 24.2007 19.7043 24.0338 19.5812 23.9107C19.4582 23.7876 19.2912 23.7185 19.1172 23.7185Z"
                  fill="white"
                />
              </svg>
              Applied Colleges
            </a>
          </li>
          <li>
            <a href="#">
              <svg
                width="33"
                height="33"
                viewBox="0 0 33 33"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="33" height="33" rx="8" fill="currentColor" />
                <path
                  d="M14.1132 21.4228L17.0007 19.6812L19.8882 21.4458L19.1319 18.1458L21.6757 15.9458L18.3298 15.6478L17.0007 12.5312L15.6715 15.6249L12.3257 15.9228L14.8694 18.1458L14.1132 21.4228ZM11.3402 25.2499L12.8298 18.8103L7.83398 14.4791L14.434 13.9062L17.0007 7.83325L19.5673 13.9062L26.1673 14.4791L21.1715 18.8103L22.6611 25.2499L17.0007 21.8353L11.3402 25.2499Z"
                  fill="white"
                />
              </svg>
              Your Reviews
            </a>
          </li>
          <li>
            <a href="#">
              <svg
                width="33"
                height="33"
                viewBox="0 0 33 33"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="33" height="33" rx="8" fill="currentColor" />
                <path
                  d="M25.7189 18.5506L24.1439 14.2276C24.0238 13.9016 23.7794 13.6364 23.4642 13.4904C23.1489 13.3443 22.7886 13.3291 22.4623 13.4483L17.5486 15.2366L18.451 10.085C18.482 9.91495 18.4791 9.74046 18.4425 9.57153C18.4059 9.40261 18.3363 9.24257 18.2377 9.10062C18.0376 8.81666 17.7343 8.62232 17.3927 8.55921L12.8646 7.76351C12.5223 7.70617 12.1711 7.78591 11.8871 7.98548C11.6031 8.18505 11.4091 8.4884 11.347 8.82992L9.36189 20.0846C9.2775 20.5669 9.28989 21.0611 9.39833 21.5385C9.50677 22.0159 9.7091 22.467 9.99353 22.8655C10.2677 23.2553 10.6173 23.5862 11.0217 23.8384C11.4262 24.0907 11.8771 24.2591 12.3478 24.3338C12.5299 24.3594 12.7135 24.3731 12.8974 24.3748H24.39C24.7381 24.3748 25.0719 24.2366 25.3181 23.9904C25.5642 23.7443 25.7001 23.4199 25.6907 23.0842C25.6813 22.7485 25.5169 22.4214 25.2679 22.1287C25.0189 21.836 24.7066 21.5092 24.4023 21.2858L25.7189 18.5506Z"
                  fill="white"
                />
              </svg>
              Settings
            </a>
          </li>
          <li>
            <a href="#" onClick={() => dispatch(logout())}>
              <svg
                width="33"
                height="33"
                viewBox="0 0 33 33"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="33" height="33" rx="8" fill="currentColor" />
                <path
                  d="M26.2791 21.7416L26.2791 11.2821C26.2791 10.9899 26.1486 10.7151 25.9287 10.4951C25.7087 10.2751 25.4348 10.1445 25.1425 10.1445C24.8503 10.1445 24.5764 10.2751 24.3564 10.4951L18.0034 16.8482C17.7844 17.0682 17.6538 17.3422 17.6538 17.6344C17.6538 17.9266 17.7844 18.2005 18.0034 18.4205L24.3564 24.7736C24.5764 24.9936 24.8503 25.1241 25.1425 25.1241C25.4348 25.1241 25.7087 24.9936 25.9287 24.7736C26.1486 24.5536 26.2791 24.2788 26.2791 23.9866V21.7416ZM6.85662 10.1445C6.56443 10.1445 6.29047 10.2751 6.07047 10.4951C5.85047 10.7151 5.71992 10.9899 5.71992 11.2821V21.7416C5.71992 22.0348 5.85047 22.3087 6.07047 22.5287C6.29047 22.7487 6.56443 22.8793 6.85662 22.8793C7.14882 22.8793 7.42278 22.7487 7.64278 22.5287L13.9958 16.1755C14.2148 15.9555 14.3453 15.6816 14.3453 15.3894C14.3453 15.0972 14.2148 14.8233 13.9958 14.6033L7.64278 8.2502C7.42278 8.0302 7.14882 7.89964 6.85662 7.89964C6.56443 7.89964 6.29047 8.0302 6.07047 8.2502C5.85047 8.4702 5.71992 8.74415 5.71992 9.03634L5.71992 10.1445H6.85662Z"
                  fill="white"
                />
              </svg>
              Logout
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default MobileMenu

import React from "react";

export default function Header() {
  return (
    <div>
      <header
        id="header"
        className="header d-flex align-items-center fixed-top"
      >
        <div className="container-fluid container-xl d-flex align-items-center justify-content-between">
          <a href="/" className="logo d-flex align-items-center">
            {/* <img src="assets/img/logo.png" alt="">  */}
            <h1>ZenBlog</h1>
          </a>

          <nav id="navbar" className="navbar">
            <ul>
              <li>
                <a href="/">Blog</a>
              </li>
              <li>
                <a href="/trending">Single Post</a>
              </li>
              <li className="dropdown">
                <a href="/categories">
                  <span>Categories</span>{" "}
                  <i className="bi bi-chevron-down dropdown-indicator"></i>
                </a>
                <ul>
                  <li>
                    <a href="search-result.html">Search Result</a>
                  </li>
                  <li>
                    <a href="#">Drop Down 1</a>
                  </li>
                  <li className="dropdown">
                    <a href="#">
                      <span>Deep Drop Down</span>{" "}
                      <i className="bi bi-chevron-down dropdown-indicator"></i>
                    </a>
                    <ul>
                      <li>
                        <a href="#">Deep Drop Down 1</a>
                      </li>
                      <li>
                        <a href="#">Deep Drop Down 2</a>
                      </li>
                      <li>
                        <a href="#">Deep Drop Down 3</a>
                      </li>
                      <li>
                        <a href="#">Deep Drop Down 4</a>
                      </li>
                      <li>
                        <a href="#">Deep Drop Down 5</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#">Drop Down 2</a>
                  </li>
                  <li>
                    <a href="#">Drop Down 3</a>
                  </li>
                  <li>
                    <a href="#">Drop Down 4</a>
                  </li>
                </ul>
              </li>

              <li>
                <a href="/about">About</a>
              </li>
              <li>
                <a href="/contact">Contact</a>
              </li>
            </ul>
          </nav>

          <div className="position-relative">
            <a href="#" className="mx-2">
              <span className="bi-facebook"></span>
            </a>
            <a href="#" className="mx-2">
              <span className="bi-twitter"></span>
            </a>
            <a href="#" className="mx-2">
              <span className="bi-instagram"></span>
            </a>

            <a href="#" className="mx-2 js-search-open">
              <span className="bi-search"></span>
            </a>
            <i className="bi bi-list mobile-nav-toggle"></i>

            <div className="search-form-wrap js-search-form-wrap">
              <form action="search-result.html" className="search-form">
                <span className="icon bi-search"></span>
                <input
                  type="text"
                  placeholder="Search"
                  className="form-control"
                />
                <button className="btn js-search-close">
                  <span className="bi-x"></span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

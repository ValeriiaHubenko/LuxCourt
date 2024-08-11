import 'bootstrap/dist/css/bootstrap.min.css';

const Blog = () => {
  return (
    <section id="blog">

    <div className="pt-lg-5 pb-lg-1 mt-lg-5 py-sm-5 mt-sm-2 bg-light component-container">
      <div className="container py-lg-4 my-lg-3">
        <div className="mx-auto">
          <div className="row">
            <div className="col-12 col-xl-4 mb-lg-5 mb-sm-4 mb-lg-0">
              <div className="d-flex flex-column h-100 mw-md mx-auto">
                <h1 className="mb-lg-5 mb-sm-3 mt-sm-3 mt-lg-0 fw-bold text-sm-center text-lg-start">Tennis Insights and News</h1>
                <p className="text-dark fw-medium mb-20">
                Discover how to play like a pro with our expert advice, tips, and tricks. Stay informed and up-to-date with the latest happenings in the tennis world through our comprehensive coverage and insights.
                </p>
                <a className="btn mt-auto fw-light p-0 d-flex align-items-center fs-5 link link-success" href="#">
                  <span className="me-2 text-dark fw-bold link link-success see-all">See all articles</span>
                  <svg width="17" height="13" viewBox="0 0 17 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      className="link arrow-icon"
                      d="M10 1.38501L15.25 6.63501M15.25 6.63501L10 11.885M15.25 6.63501L1.75 6.63501"
                      stroke="#000033"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
              </div>
            </div>

            <div className="blog-card col-12 col-md-6 col-xl-4 text-center mt-sm-1 mt-lg-0 mb-lg-5 mb-sm-4 mb-md-0">
              <a className="d-block text-decoration-none mw-md fw-medium text-start lh-base" href="#">
                <img
                  className="d-block mb-3 w-100 img-fluid rounded"
                  src="/src/images/braden-egli-l3sIOhf9R3U-unsplash.jpg"
                  alt=""/>

                <div className="mw-xs">
                  <span className="d-inline-block mb-lg-3 mb-sm-3 py-1 px-2 text-success border border-success rounded mt-2 mb-4">
                 News
                  </span>
                  <h4 className="mb-2 fw-bold text-dark link link-success">Breaking News: Major Changes in Tennis Tournament Rules</h4>
                  <p className="text-dark fw-medium mb-0">
                 This article covers the recent changes in tournament rules that every player and fan needs to know. From new scoring...
                  </p>
                  <a className="btn fw-light pt-2 ps-0" href="#">
                  <span className="text-dark fw-bold link link-success see-all">Read more</span>
                  </a>
                </div>
              </a>
            </div>
            <div className="blog-card col-12 col-md-6 col-xl-4 mt-sm-2 mt-md-1 mt-lg-0 text-center">
              <a className="d-block text-decoration-none mw-md fw-medium text-start lh-base" href="#">
                <img
                  className="d-block mb-3 w-100 img-fluid rounded "
                  src="/src/images/renith-r-MLU_X1d3ofQ-unsplash.jpg"
                  alt=""
                />
                <div className="mw-xs">
                  <span className="d-inline-block  mb-lg-3 mb-sm-3 py-1 px-2  text-success border border-success rounded rounded mt-2 mb-4">
                    Tricks
                  </span>
                  <h4 className="mb-2 fw-bold text-dark link link-success">Master the Perfect Serve: Tips from the Pros</h4>
                  <p className="text-dark fw-medium mb-0">
                  Mastering the perfect serve is a game-changer for any tennis player aiming to elevate their performance. In this article, we delve into the techniques and strategies used by top...
                  </p>
                  <a className="btn fw-light pt-2 ps-0" href="#">
                  <span className="text-dark fw-bold link link-success see-all">Read more</span>
                  </a>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    </section>
  );
};

export default Blog;

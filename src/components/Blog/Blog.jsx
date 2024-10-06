import React from "react";
import images from "../../constant/images";

function Blog() {
  return (
    <section id="latest-blog" className="pb-4">
      <div className="container-lg">
        <div className="row">
          <div className="section-header d-flex align-items-center justify-content-between my-4">
            <h2 className="section-title">Our Recent Blog</h2>
            <a href="#" className="btn btn-primary">
              View All
            </a>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <article className="post-item card border-0 shadow-sm p-3">
              <div className="image-holder zoom-effect">
                <a href="#">
                  <img
                    src={images.post_thumbnail_1}
                    alt="post"
                    className="card-img-top"
                  />
                </a>
              </div>
              <div className="card-body">
                <div className="post-meta d-flex text-uppercase gap-3 my-2 align-items-center">
                  <div className="meta-date">
                    <svg width="16" height="16">
                      <use xlinkHref="#calendar"></use>
                    </svg>
                    22 Aug 2021
                  </div>
                  <div className="meta-categories">
                    <svg width="16" height="16">
                      <use xlinkHref="#category"></use>
                    </svg>
                    tips & tricks
                  </div>
                </div>
                <div className="post-header">
                  <h3 className="post-title">
                    <a href="#" className="text-decoration-none">
                      Top 10 casual look ideas to dress up your kids
                    </a>
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipi elit. Aliquet
                    eleifend viverra enim tincidunt donec quam. A in arcu,
                    hendrerit neque dolor morbi...
                  </p>
                </div>
              </div>
            </article>
          </div>
          <div className="col-md-4">
            <article className="post-item card border-0 shadow-sm p-3">
              <div className="image-holder zoom-effect">
                <a href="#">
                  <img
                    src={images.post_thumbnail_1}
                    alt="post"
                    className="card-img-top"
                  />
                </a>
              </div>
              <div className="card-body">
                <div className="post-meta d-flex text-uppercase gap-3 my-2 align-items-center">
                  <div className="meta-date">
                    <svg width="16" height="16">
                      <use xlinkHref="#calendar"></use>
                    </svg>
                    25 Aug 2021
                  </div>
                  <div className="meta-categories">
                    <svg width="16" height="16">
                      <use xlinkHref="#category"></use>
                    </svg>
                    trending
                  </div>
                </div>
                <div className="post-header">
                  <h3 className="post-title">
                    <a href="#" className="text-decoration-none">
                      Latest trends of wearing street wears supremely
                    </a>
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipi elit. Aliquet
                    eleifend viverra enim tincidunt donec quam. A in arcu,
                    hendrerit neque dolor morbi...
                  </p>
                </div>
              </div>
            </article>
          </div>
          <div className="col-md-4">
            <article className="post-item card border-0 shadow-sm p-3">
              <div className="image-holder zoom-effect">
                <a href="#">
                  <img
                    src={images.post_thumbnail_1}
                    alt="post"
                    className="card-img-top"
                  />
                </a>
              </div>
              <div className="card-body">
                <div className="post-meta d-flex text-uppercase gap-3 my-2 align-items-center">
                  <div className="meta-date">
                    <svg width="16" height="16">
                      <use xlinkHref="#calendar"></use>
                    </svg>
                    28 Aug 2021
                  </div>
                  <div className="meta-categories">
                    <svg width="16" height="16">
                      <use xlinkHref="#category"></use>
                    </svg>
                    inspiration
                  </div>
                </div>
                <div className="post-header">
                  <h3 className="post-title">
                    <a href="#" className="text-decoration-none">
                      10 Different Types of comfortable clothes ideas for women
                    </a>
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipi elit. Aliquet
                    eleifend viverra enim tincidunt donec quam. A in arcu,
                    hendrerit neque dolor morbi...
                  </p>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Blog;

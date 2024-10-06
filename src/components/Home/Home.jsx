import React from "react";
import Category from "./Category/Category";
import images from "../../constant/images";
import Bestselling from "../Bestselling/Bestselling";
import Featuredproducts from "../Featuredproducts/Featuredproducts";
import Popularproducts from "../Popularproducts/Popularproducts";
import Latestproducts from "../Latestproducts/Latestproducts";
import Blog from "../Blog/Blog";
function Home() {
  return (
    <>
      <section
        style={{
          backgroundImage: `url(${images.banner1})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="container-lg">
          <div className="row">
            <div className="col-lg-6 pt-5 mt-5">
              <h2 className="display-1 ls-1">
                <span className="fw-bold text-primary">Organic</span> Foods at
                your <span className="fw-bold">Doorsteps</span>
              </h2>
              <p className="fs-4">Dignissim massa diam elementum.</p>
              <div className="d-flex gap-3">
                <a
                  href="#"
                  className="btn btn-primary text-uppercase fs-6 rounded-pill px-4 py-3 mt-3"
                >
                  Start Shopping
                </a>
                <a
                  href="#"
                  className="btn btn-dark text-uppercase fs-6 rounded-pill px-4 py-3 mt-3"
                >
                  Join Now
                </a>
              </div>
              <div className="row my-5">
                <div className="col">
                  <div className="row text-dark">
                    <div className="col-auto">
                      <p className="fs-1 fw-bold lh-sm mb-0">14k+</p>
                    </div>
                    <div className="col">
                      <p className="text-uppercase lh-sm mb-0">
                        Product Varieties
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="row text-dark">
                    <div className="col-auto">
                      <p className="fs-1 fw-bold lh-sm mb-0">50k+</p>
                    </div>
                    <div className="col">
                      <p className="text-uppercase lh-sm mb-0">
                        Happy Customers
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="row text-dark">
                    <div className="col-auto">
                      <p className="fs-1 fw-bold lh-sm mb-0">10+</p>
                    </div>
                    <div className="col">
                      <p className="text-uppercase lh-sm mb-0">
                        Store Locations
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row row-cols-1 row-cols-sm-3 row-cols-lg-3 g-0 justify-content-center">
            <div className="col">
              <div className="card border-0 bg-primary rounded-0 p-4 text-light">
                <div className="row">
                  <div className="col-md-3 text-center">
                    <svg width="60" height="60">
                      <use xlinkHref="#fresh"></use>
                    </svg>
                  </div>
                  <div className="col-md-9">
                    <div className="card-body p-0">
                      <h5 className="text-light">Fresh from farm</h5>
                      <p className="card-text">
                        Lorem ipsum dolor sit amet, consectetur adipi elit.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card border-0 bg-secondary rounded-0 p-4 text-light">
                <div className="row">
                  <div className="col-md-3 text-center">
                    <svg width="60" height="60">
                      <use xlinkHref="#organic"></use>
                    </svg>
                  </div>
                  <div className="col-md-9">
                    <div className="card-body p-0">
                      <h5 className="text-light">100% Organic</h5>
                      <p className="card-text">
                        Lorem ipsum dolor sit amet, consectetur adipi elit.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card border-0 bg-danger rounded-0 p-4 text-light">
                <div className="row">
                  <div className="col-md-3 text-center">
                    <svg width="60" height="60">
                      <use xlinkHref="#delivery"></use>
                    </svg>
                  </div>
                  <div className="col-md-9">
                    <div className="card-body p-0">
                      <h5 className="text-light">Free delivery</h5>
                      <p className="card-text">
                        Lorem ipsum dolor sit amet, consectetur adipi elit.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Category />
      <Bestselling />

      <section className="py-3">
        <div className="container-lg">
          <div className="row">
            <div className="col-md-12">
              <div className="banner-blocks">
                <div
                  className="banner-ad d-flex align-items-center large bg-info block-1"
                  style={{
                    backgroundImage: `url(${images.banner_ad_1})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                  }}
                >
                  <div className="banner-content p-5">
                    <div className="content-wrapper text-light">
                      <h3 className="banner-title text-light">Items on SALE</h3>
                      <p>Discounts up to 30%</p>
                      <a href="#" className="btn-link text-white">
                        Shop Now
                      </a>
                    </div>
                  </div>
                </div>

                <div
                  className="banner-ad bg-success-subtle block-2"
                  style={{
                    backgroundImage: `url(${images.banner_ad_2})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                  }}
                >
                  <div className="banner-content align-items-center p-5">
                    <div className="content-wrapper text-light">
                      <h3 className="banner-title text-light">Combo offers</h3>
                      <p>Discounts up to 50%</p>
                      <a href="#" className="btn-link text-white">
                        Shop Now
                      </a>
                    </div>
                  </div>
                </div>

                <div
                  className="banner-ad bg-danger block-3"
                  style={{
                    backgroundImage: `url(${images.banner_ad_3})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                  }}
                >
                  <div className="banner-content align-items-center p-5">
                    <div className="content-wrapper text-light">
                      <h3 className="banner-title text-light">
                        Discount Coupons
                      </h3>
                      <p>Discounts up to 40%</p>
                      <a href="#" className="btn-link text-white">
                        Shop Now
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Featuredproducts />
      <section>
        <div className="container-lg">
          <div
            className="bg-secondary text-light py-5 my-5"
            style={{
              backgroundImage: `url(${images.banner_newsletter})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
          >
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-md-5 p-3">
                  <div className="section-header">
                    <h2 className="section-title display-5 text-light">
                      Get 25% Discount on your first purchase
                    </h2>
                  </div>
                  <p>Just Sign Up & Register it now to become member.</p>
                </div>
                <div className="col-md-5 p-3">
                  <form>
                    <div className="mb-3">
                      <label className="form-label d-none">Name</label>
                      <input
                        type="text"
                        className="form-control form-control-md rounded-0"
                        name="name"
                        id="name"
                        placeholder="Name"
                      />
                    </div>
                    <div className="mb-3">
                      <label className="form-label d-none">Email</label>
                      <input
                        type="email"
                        className="form-control form-control-md rounded-0"
                        name="email"
                        id="email"
                        placeholder="Email Address"
                      />
                    </div>
                    <div className="d-grid gap-2">
                      <button
                        type="submit"
                        className="btn btn-dark btn-md rounded-0"
                      >
                        Submit
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Popularproducts />
      <Latestproducts />

      <Blog />
      <section className="pb-4 my-4">
        <div className="container-lg">
          <div className="bg-warning pt-5 rounded-5">
            <div className="container">
              <div className="row justify-content-center align-items-center">
                <div className="col-md-4">
                  <h2 className="mt-5">Download Organic App</h2>
                  <p>Online Orders made easy, fast and reliable</p>
                  <div className="d-flex gap-2 flex-wrap mb-5">
                    <a href="#" title="App store">
                      <img
                        src="./assets/images/img-app-store.png"
                        alt="app-store"
                      />
                    </a>
                    <a href="#" title="Google Play">
                      <img
                        src="./assets/images/img-google-play.png"
                        alt="google-play"
                      />
                    </a>
                  </div>
                </div>
                <div className="col-md-5">
                  <img
                    src="./assets/images/banner-onlineapp.png"
                    alt="phone"
                    className="img-fluid"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-4">
        <div className="container-lg">
          <h2 className="my-4">People are also looking for</h2>
          <a href="#" className="btn btn-warning me-2 mb-2">
            Blue diamon almonds
          </a>
          <a href="#" className="btn btn-warning me-2 mb-2">
            Angie’s Boomchickapop Corn
          </a>
          <a href="#" className="btn btn-warning me-2 mb-2">
            Salty kettle Corn
          </a>
          <a href="#" className="btn btn-warning me-2 mb-2">
            Chobani Greek Yogurt
          </a>
          <a href="#" className="btn btn-warning me-2 mb-2">
            Sweet Vanilla Yogurt
          </a>
          <a href="#" className="btn btn-warning me-2 mb-2">
            Foster Farms Takeout Crispy wings
          </a>
          <a href="#" className="btn btn-warning me-2 mb-2">
            Warrior Blend Organic
          </a>
          <a href="#" className="btn btn-warning me-2 mb-2">
            Chao Cheese Creamy
          </a>
          <a href="#" className="btn btn-warning me-2 mb-2">
            Chicken meatballs
          </a>
          <a href="#" className="btn btn-warning me-2 mb-2">
            Blue diamon almonds
          </a>
          <a href="#" className="btn btn-warning me-2 mb-2">
            Angie’s Boomchickapop Corn
          </a>
          <a href="#" className="btn btn-warning me-2 mb-2">
            Salty kettle Corn
          </a>
          <a href="#" className="btn btn-warning me-2 mb-2">
            Chobani Greek Yogurt
          </a>
          <a href="#" className="btn btn-warning me-2 mb-2">
            Sweet Vanilla Yogurt
          </a>
          <a href="#" className="btn btn-warning me-2 mb-2">
            Foster Farms Takeout Crispy wings
          </a>
          <a href="#" className="btn btn-warning me-2 mb-2">
            Warrior Blend Organic
          </a>
          <a href="#" className="btn btn-warning me-2 mb-2">
            Chao Cheese Creamy
          </a>
          <a href="#" className="btn btn-warning me-2 mb-2">
            Chicken meatballs
          </a>
        </div>
      </section>

      <section className="py-5">
        <div className="container-lg">
          <div className="row row-cols-1 row-cols-sm-3 row-cols-lg-5">
            <div className="col">
              <div className="card mb-3 border border-dark-subtle p-3">
                <div className="text-dark mb-3">
                  <svg width="32" height="32">
                    <use xlinkHref="#package"></use>
                  </svg>
                </div>
                <div className="card-body p-0">
                  <h5>Free delivery</h5>
                  <p className="card-text">
                    Lorem ipsum dolor sit amet, consectetur adipi elit.
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card mb-3 border border-dark-subtle p-3">
                <div className="text-dark mb-3">
                  <svg width="32" height="32">
                    <use xlinkHref="#secure"></use>
                  </svg>
                </div>
                <div className="card-body p-0">
                  <h5>100% secure payment</h5>
                  <p className="card-text">
                    Lorem ipsum dolor sit amet, consectetur adipi elit.
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card mb-3 border border-dark-subtle p-3">
                <div className="text-dark mb-3">
                  <svg width="32" height="32">
                    <use xlinkHref="#quality"></use>
                  </svg>
                </div>
                <div className="card-body p-0">
                  <h5>Quality guarantee</h5>
                  <p className="card-text">
                    Lorem ipsum dolor sit amet, consectetur adipi elit.
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card mb-3 border border-dark-subtle p-3">
                <div className="text-dark mb-3">
                  <svg width="32" height="32">
                    <use xlinkHref="#savings"></use>
                  </svg>
                </div>
                <div className="card-body p-0">
                  <h5>guaranteed savings</h5>
                  <p className="card-text">
                    Lorem ipsum dolor sit amet, consectetur adipi elit.
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card mb-3 border border-dark-subtle p-3">
                <div className="text-dark mb-3">
                  <svg width="32" height="32">
                    <use xlinkHref="#offers"></use>
                  </svg>
                </div>
                <div className="card-body p-0">
                  <h5>Daily offers</h5>
                  <p className="card-text">
                    Lorem ipsum dolor sit amet, consectetur adipi elit.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;

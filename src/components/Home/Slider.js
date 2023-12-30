import React from "react";

const data = [
  {
    title: "The Best Homemade Masks for Face (keep the Pimples Away)",
    image: "/assets/img/post-slide-1.jpg",
    link: "single-post.html",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem neque est mollitia! Beatae minima assumenda repellat harum vero, officiis ipsam magnam obcaecati cumque maxime inventore repudiandae quidem necessitatibus rem atque.",
  },
  {
    title:
      "17 Pictures of Medium Length Hair in Layers That Will Inspire Your New Haircut",
    image: "/assets/img/post-slide-2.jpg",
    link: "single-post.html",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem neque est mollitia! Beatae minima assumenda repellat harum vero, officiis ipsam magnam obcaecati cumque maxime inventore repudiandae quidem necessitatibus rem atque.",
  },
  {
    title: "13 Amazing Poems from Shel Silverstein with Valuable Life Lessons",
    image: "/assets/img/post-slide-3.jpg",
    link: "single-post.html",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem neque est mollitia! Beatae minima assumenda repellat harum vero, officiis ipsam magnam obcaecati cumque maxime inventore repudiandae quidem necessitatibus rem atque.",
  },
  {
    title: "9 Half-up/half-down Hairstyles for Long and Medium Hair",
    image: "/assets/img/post-slide-4.jpg",
    link: "single-post.html",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem neque est mollitia! Beatae minima assumenda repellat harum vero, officiis ipsam magnam obcaecati cumque maxime inventore repudiandae quidem necessitatibus rem atque.",
  },
];

export default function Slider() {
  return (
    <section id="hero-slider" className="hero-slider">
      <div className="container" data-aos="fade-in">
        <div className="row">
          <div className="col-12">
            <div
              id="carouselExampleIndicators"
              className="carousel slide"
              data-ride="carousel"
            >
              <ol className="carousel-indicators">
                {data.map((item, index) => (
                  <li
                    key={index}
                    data-target="#carouselExampleIndicators"
                    data-slide-to={index}
                    className={index === 0 ? "active" : ""}
                  ></li>
                ))}
              </ol>
              <div className="carousel-inner">
                {data.map((item, index) => (
                  <div
                    key={index}
                    className={`carousel-item ${index === 0 ? "active" : ""}`}
                  >
                    <img
                      className="d-block w-100"
                      src={item.image}
                      alt={item.title}
                    />
                  </div>
                ))}
              </div>
              <a
                className="carousel-control-prev"
                href="#carouselExampleIndicators"
                role="button"
                data-slide="prev"
                style={{
                  color: "black",
                }}
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                  style={{
                    color: "black",
                  }}
                ></span>
                <span className="sr-only">Previous</span>
              </a>
              <a
                className="carousel-control-next"
                href="#carouselExampleIndicators"
                role="button"
                data-slide="next"
                style={{
                  color: "black",
                }}
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                  style={{
                    color: "black",
                  }}
                ></span>
                <span className="sr-only">Next</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

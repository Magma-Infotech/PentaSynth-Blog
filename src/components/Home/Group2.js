import React from "react";

const data = {
  category: "Culture",
  posts: [
    {
      title:
        "What is the son of Football Coach John Gruden, Deuce Gruden doing Now?",
      image: "assets/img/post-landscape-6.jpg",
      date: "Jul 5th '22",
      author: {
        name: "Wade Warren",
        photo: "assets/img/person-2.jpg",
      },
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio placeat exercitationem magni voluptates dolore. Tenetur fugiat voluptates quas, nobis error deserunt aliquam temporibus sapiente, laudantium dolorum itaque libero eos deleniti?",
    },
    {
      title: "11 Work From Home Part-Time Jobs You Can Do Now",
      image: "assets/img/post-landscape-1.jpg",
      date: "Jul 5th '22",
      author: {
        name: "Jenny Wilson",
      },
      content:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero temporibus repudiandae, inventore pariatur numquam cumque possimus",
    },
    {
      title: "5 Great Startup Tips for Female Founders",
      image: "assets/img/post-landscape-2.jpg",
      date: "Jul 5th '22",
      author: {
        name: "Jenny Wilson",
      },
      content:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero temporibus repudiandae, inventore pariatur numquam cumque possimus",
    },
    {
      title: "How to Avoid Distraction and Stay Focused During Video Calls?",
      image: "assets/img/post-landscape-2.jpg",
      date: "Jul 5th '22",
      author: {
        name: "Jenny Wilson",
      },
      content:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero temporibus repudiandae, inventore pariatur numquam cumque possimus",
    },
    {
      title:
        "17 Pictures of Medium Length Hair in Layers That Will Inspire Your New Haircut",
      date: "Jul 5th '22",
      author: {
        name: "Jenny Wilson",
      },
    },
    {
      title: "9 Half-up/half-down Hairstyles for Long and Medium Hair",
      date: "Jul 5th '22",
      author: {
        name: "Jenny Wilson",
      },
    },
    {
      title: "Life Insurance And Pregnancy: A Working Mom’s Guide",
      date: "Jul 5th '22",
      author: {
        name: "Jenny Wilson",
      },
    },
    {
      title: "The Best Homemade Masks for Face (keep the Pimples Away)",
      date: "Jul 5th '22",
      author: {
        name: "Jenny Wilson",
      },
    },
    {
      title: "10 Life-Changing Hacks Every Working Mom Should Know",
      date: "Jul 5th '22",
      author: {
        name: "Jenny Wilson",
      },
    },
  ],
};

export default function Group2() {
  return (
    <div>
      <section className="category-section">
        <div className="container" data-aos="fade-up">
          <div className="section-header d-flex justify-content-between align-items-center mb-5">
            <h2>{data.category}</h2>
            <div>
              <a href="category.html" className="more">
                See All {data.category}
              </a>
            </div>
          </div>

          <div className="row">
            <div className="col-md-9">
              <div className="d-lg-flex post-entry-2">
                <a
                  href="single-post.html"
                  className="me-4 thumbnail mb-4 mb-lg-0 d-inline-block"
                >
                  <img src={data.posts[0].image} alt="" className="img-fluid" />
                </a>
                <div>
                  <div className="post-meta">
                    <span className="date">{data.posts[0].date}</span>
                    <span className="mx-1">&bullet;</span>{" "}
                    <span>{data.posts[0].author.name}</span>
                  </div>
                  <h3>
                    <a href="single-post.html">{data.posts[0].title}</a>
                  </h3>
                  <p>{data.posts[0].content}</p>
                  <div className="d-flex align-items-center author">
                    <div className="photo">
                      <img
                        src={data.posts[0].author.photo}
                        alt=""
                        className="img-fluid"
                      />
                    </div>
                    <div className="name">
                      <h3 className="m-0 p-0">{data.posts[0].author.name}</h3>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row">
                {data.posts.slice(1, 4).map((post, index) => (
                  <div className="col-lg-4" key={index}>
                    <div className="post-entry-1 border-bottom">
                      <a href="single-post.html">
                        <img src={post.image} alt="" className="img-fluid" />
                      </a>
                      <div className="post-meta">
                        <span className="date">{post.date}</span>
                        <span className="mx-1">&bullet;</span>
                        <span>{post.author.name}</span>
                      </div>
                      <h2 className="mb-2">
                        <a href="single-post.html">{post.title}</a>
                      </h2>
                      {post.content && (
                        <p className="mb-4 d-block">{post.content}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="col-md-3">
              {data.posts.slice(3).map((post, index) => (
                <div className="post-entry-1 border-bottom" key={index}>
                  <div className="post-meta">
                    <span className="date">{post.date}</span>
                    <span className="mx-1">&bullet;</span>{" "}
                    <span>{post.author.name}</span>
                  </div>
                  <h2 className="mb-2">
                    <a href="single-post.html">{post.title}</a>
                  </h2>
                  {post.content && (
                    <p className="mb-4 d-block">{post.content}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

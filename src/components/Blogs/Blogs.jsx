import React, { useEffect } from "react";
import Img1 from "../../assets/blog1.jpg";
import Img2 from "../../assets/blog2.jpg";
import Img3 from "../../assets/blog3.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
import { BLOGS } from "../../data/constants";

const Blogs = () => {
  const blogImages = [Img1, Img2, Img3];

  return (
    <main data-aos="fade-up" data-aos-offset="200">
      <section className="container mb-10 py-8">
        <h1 className="mb-8 border-l-8 py-2 pl-2 text-center text-3xl font-bold">
          Latest Insights & Articles
        </h1>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3">
          {BLOGS.map((blog, index) => (
            <div
              key={blog.id}
              id="card"
              className="p-4 shadow-lg transition-all duration-500 hover:shadow-xl dark:bg-slate-950"
            >
              <div className="overflow-hidden">
                <img
                  src={blogImages[index % blogImages.length]}
                  alt={blog.title}
                  className="mx-auto h-[250px] w-full object-cover transition duration-700 hover:skew-x-2 hover:scale-110"
                />
              </div>
              <div className="flex justify-between pt-2 text-slate-600">
                <p>{blog.date}</p>
                <p className="line-clamp-1"> By {blog.author}</p>
              </div>
              <div className="space-y-3 py-3">
                <h1 className="line-clamp-2 text-xl font-bold">
                  {blog.title}
                </h1>
                <p className="line-clamp-2">
                  {blog.content}
                </p>
                <a href="#" className="inline-block text-primary hover:underline font-semibold">
                  Read More →
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Blogs;

import React from "react";

const BlogCard = ({ Img1, title, content, date, author }) => {
  return (
    <div>
      <div
        id="card"
        className="mx-2 mb-7 rounded-lg p-4 shadow-lg transition-all duration-500 hover:scale-[1.01] hover:shadow-xl "
      >
        <div className="overflow-hidden rounded-lg ">
          <img
            src={Img1}
            alt={title}
            className="mx-auto h-[250px] w-full object-cover transition duration-700 hover:skew-x-2 hover:scale-110"
          />
        </div>
        <div className="space-y-3 py-3">
          <h1 className="line-clamp-2 text-xl font-bold">
            {title}
          </h1>
          <p className="line-clamp-2">
            {content}
          </p>
          <a href="#" className="inline-block text-primary hover:underline font-semibold">
            Read More →
          </a>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;

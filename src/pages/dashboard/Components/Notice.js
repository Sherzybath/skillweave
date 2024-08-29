import React from 'react'
const BlogPost = ({ title, experience, price, description, tags }) => {
  return (
    <div className="post">
      <h2>{title}</h2>
      <p><strong>Experience:</strong> {experience}</p>
      <p><strong>Price:</strong> {price}</p>
      <p className='description'>{description}</p>
      <div>

        <ul>
          {tags.map((tag, index) => (
            <li key={index}>{tag}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};
const NoticeBoard = ({list}) => {
  return (
    <div className='notices'>
      {list.map((blog, index) => (
        <BlogPost
          key={index}
          title={blog.title}
          experience={blog.experience}
          price={blog.price}
          description={blog.description}
          tags={blog.tags}
        />
      ))}
    </div>
  )
}

export default NoticeBoard
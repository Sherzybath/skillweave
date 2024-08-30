import React from 'react'
const BlogPost = ({ title, experience, price, description, tags, onClick}) => {
  return (
    <div className="post" onClick={onClick}>
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
const NoticeBoard = ({list, display}) => {
  return (
    <div className='notices'>
      {list.map((blog) => (
        <BlogPost
          key={blog.index}
          title={blog.title}
          experience={blog.experience}
          price={blog.price}
          description={blog.description}
          tags={blog.tags}
          onClick={() => display(blog)}
        />
      ))}
    </div>
  )
}

export default NoticeBoard
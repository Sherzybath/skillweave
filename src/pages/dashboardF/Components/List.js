import React from 'react'
import Filter from './Filter'
import Notice from './Notice'
const List = () => {
  const blogSchema = [
    {
      thumbnail: "/thumbnails/Raviel.png",
      title: "Web Development",
      daysDelivery: 7,
      pricing: "$500",
      logo: "path/to/logo1.png",
      username: "Sherzybath",
      numberOfStars: 5,
      numberOfReviews: 1203
    },
    {
      thumbnail: "/thumbnails/LeftArm.png",
      title: "Graphic Design",
      daysDelivery: 5,
      pricing: "$300",
      logo: "path/to/logo2.png",
      username: "freelancer2",
      numberOfStars: 4.8,
      numberOfReviews: 80
    },
    {
      thumbnail: "/thumbnails/Kotteri.png",
      title: "Content Writing",
      daysDelivery: 3,
      pricing: "$150",
      logo: "path/to/logo3.png",
      username: "freelancer3",
      numberOfStars: 4.2,
      numberOfReviews: 200
    },
    {
      thumbnail: "/thumbnails/Raviel2.png",
      title: "SEO Services",
      daysDelivery: 10,
      pricing: "$400",
      logo: "path/to/logo4.png",
      username: "freelancer4",
      numberOfStars: 4.7,
      numberOfReviews: 95
    },

  ]
  return (
    <div className='NoticeBoard'>
        <Notice list={blogSchema}/>
        <Filter />
    </div>
  )
}

export default List
import './SinglePost.css'

export const SinglePost = () => {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img
          className="singlePostImg"
          src="https://schoolforfreelancers.com/wp-content/uploads/2021/08/business-woman-do-the-video-call-conference.jpg"
          alt=""
        />
        <h1 className="singlePostTitle">
          How to Keep Your Freelance Clients: 7 Tips for Freelancers
          <div className="singlePostEdit">
            <i className="singlePostIcons far fa-edit"></i>
            <i className="singlePostIcons far fa-trash-alt"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span className="singPostAuthor">
            Author: <b>Sajjad Dev</b>
          </span>
          <span className="singPostDate"> 34 Minute Ago</span>
        </div>
        <p className="singlePostDesc">
          Did you know that 35% of the global workforce is made up of
          freelancers? If you ask us, that’s a whole lot of workforce proving
          that freelancing can be rewarding. It really doesn’t matter what type
          of freelancer you are, from graphic design to photography to
          copywriting and just about everything else, you need to not only find
          clients but learn to keep them coming back for more. You do this by
          ensuring you look after your freelance business first and foremost.
          This could be anything from health insurance for freelancers to how
          you track your time. Keep reading for seven vital tips that
          freelancers cannot live without, your clients will thank you for it!
        </p>
      </div>
    </div>
  );
};

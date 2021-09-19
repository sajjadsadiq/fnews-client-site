import "./Post.css";

export const Post = () => {
  return (
    <div className="post">
      <img
        className="PostImg"
        src="https://schoolforfreelancers.com/wp-content/uploads/2021/02/School-For-Freelancers-Freelancing-Blog.jpg"
        alt=""
      />
      <div className="postInfo">
        <div className="postTitle">Time Management Tips For Freelancers</div>
        <div className="postDesc">
          Do you feel like there are never enough hours in the day, but at the
          same time realize that so many hours just seem to disappear and you
          look back and realize how little you got done? As a freelancer time
          management is not just about managing your time, it is about ensuring
          that the time you do have is spent doing the things that matter. In
          this short video from the Daily Stoic (highly recommend this channel)
          by Ryan Holiday, he delves into Stoic philosophy and provides 8
          nuggets of wisdom, and the first of which is all about guarding your
          time. As he mentions in the video, Seneca’s commentary on the topic
          related to how even though time is the only non-renewable resource, we
          are more frivolous with it than so many other things that are in fact
          renewable. If someone were to steal something that belongs to you, say
          a phone, laptop, or car, you would be enraged and do whatever you
          could to get it back.
        </div>
        <div className="postDate">56 Minute age</div>
      </div>
    </div>
  );
};

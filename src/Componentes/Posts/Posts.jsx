import './Posts.css'
import { Post } from '../Post/Post'

const postsData = [
    {
        id: 1,
        img: "https://assets.entrepreneur.com/content/3x2/2000/1629996000-GettyImages-1215027906.jpg?auto=webp&quality=95&crop=2:1&width=400",
        title: '3 Reasons Your Small Business Needs Flexible Talent',
        description: 'Compared to large enterprises, small businesses often don’t have the resources to quickly pivot and hire whatever talent is needed at the time. In 2020, Paycor found that small business spending on labor can add up to almost 70 percent of total costs, meaning that small businesses that want to hire new talent often don’t have the funds to do it',
        time: 31
    },
    {
        id:2,
        img:"https://assets.entrepreneur.com/content/3x2/2000/1629732658-shutterstock-1389068438.jpg?auto=webp&quality=95&crop=2:1&width=400",
        title: "6 Steps to Becoming a Successful Freelancer",
        description:"Freelancing is not easy. In fact, for as many people who’ve found success in the field, there are just as many people who have failed tremendously. There are a lot of benefits to enjoy with freelancing. Not only does it allow you to work at your own pace, but it also exposes you to a lot of companies, businesses and professionals, widening your social connections.",
        time:57
    },
    {
        id:3,
        img:"https://assets.entrepreneur.com/content/3x2/2000/1628692166-GettyImages-1221798560.jpg?auto=webp&quality=95&crop=2:1&width=400",
        title: "How to Fairly Hire Freelancers From Developing Countries",
        description:"But think about it. If you would pay an expat living abroad three times more to do the same job as someone who was born in that country, you need to reevaluate your business practices, educate yourself on anti-racism and make major changes in how you hire and pay.",
        time:41
    },
    {
        id:4,
        img:"https://breezeblog.s3.amazonaws.com/7/project_automation.jpg",
        title: "Project acquisition is an annoying prospect for many freelancers",
        description:". Data from freelancermap’s Market Studies proves this, year after year. The search for new projects is one of the greatest challenges of self-employment which is why it is important to optimize the process. freelancermap offers the perfect solution for this: on our platform you can.",
        time:12
    },
    {
        id:5,
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHLpttwgvkGFPypNOVc5WT2JjK_ry7e1Wy7C6v0dbhF2Hz-6DOBPuIQ9flt6-mIKgNhpE&usqp=CAU",
        title: "Interview Questions To Expect As A Front-End Developer",
        description:"It’s that time of the year again - you’re back on the job market and are ready to begin your search for new opportunities. You’ve scoped out possibilities through your own personal networks and have scrolled through numerous job boards looking for front-end developer jobs. The phone rings and when you answer, you hear the voice of a recruitment...",
        time:29
    },
    {
        id:6,
        img:"https://cdn.shrm.org/image/upload/c_crop%2Ch_408%2Cw_724%2Cx_0%2Cy_47/c_fit%2Cf_auto%2Cq_auto%2Cw_767/v1/Talent%20Acquisition/iStock-1175128826_sl7g2s?databtoa=eyIxNng5Ijp7IngiOjAsInkiOjQ3LCJ4MiI6NzI0LCJ5MiI6NDU0LCJ3Ijo3MjQsImgiOjQwOH19",
        title: "Coronavirus Study – Facts & Feelings among IT Freelancers",
        description:"Covid-19 is hitting freelancers and the self-employed especially hard. Their financial situation is now more volatile than ever. How do freelancers feel about Coronavirus and how has their work been affected?",
        time:16
    }
]

export const Posts = () => {
    return (
        <div className="posts">
            {
                postsData.map(post => <Post post={post} />)
            }
        </div>
    )
}

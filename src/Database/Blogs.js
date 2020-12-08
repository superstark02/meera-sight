import React from 'react'
import blog1 from '../Images/Blog/blog1.jpg'
import blog2 from '../Images/Blog/blog2.jpg'
import blog3 from '../Images/Blog/blog3.jpg'
import blog4 from '../Images/Blog/blog4.jpg'
import blog5 from '../Images/Blog/blog5.jpg'
import Blog1 from '../Pages/Blogs/Blog1'
import Blog2 from '../Pages/Blogs/Blog2'
import Blog3 from '../Pages/Blogs/Blog3'
import Blog4 from '../Pages/Blogs/Blog4'
import Blog5 from '../Pages/Blogs/Blog5'
import Blog6 from '../Pages/Blogs/Blog6'
//import blog6 from '../Images/Blog/blog6.jpg'

export const blogs = [
    {
        title: "Refractive Services",
        img: blog1,
        link: "/0",
        des: "The process of vision begins when light rays that reflect off objects and travel through the eye's optical system are refracted and focus...",
        views: "54 views",
        content: <Blog1/>
    },
    {
        title: "Cataract Services",
        img: blog2,
        link: "/1",
        des: "What is Cataract? Cataract is the clouding of the eye's natural lens. It is the most common cause of vision loss in people over age 40 an... ",
        views: "54 views",
        content:<Blog2/>
    },
    {
        title: "Why Regular and Comprehensive Eye Checkups required?",
        img: blog3,
        link: "/2",
        des: "The eyes are among the most sensitive organs of the body and are considered to be one of the most important senses. Despite this, taking ... ",
        views: "54 views",
        content: <Blog3/>
    },
    {
        title: "Eye Myths vs Facts",
        img: blog4,
        link: "/3",
        des: "Everyone’s heard them one time or another: don’t sit too close to the TV, it will hurt your eyes or don’t stare at the sun, you’ll damage... ",
        views: "54 views",
        content: <Blog4/>
    },
    {
        title: "Even People With Great Vision Need Eye Exams",
        img: blog5,
        link: "/4",
        des: "Poor vision isn’t the only indicator of eye disease. In fact, it’s usually the last thing that happens. And, once you start to lose visio... ",
        views: "54 views",
        content: <Blog5/>
    },
    {
        title: "Are 3-D Movies Bad for Your Eyes?",
        img: blog1,
        link: "/5",
        des: "3-D movies have come a long way since the days of 1950’s classics like the House of Wax and the Creature from the Black Lagoon. With bloc... ",
        views: "54 views",
        content:<Blog6/>
    },

]
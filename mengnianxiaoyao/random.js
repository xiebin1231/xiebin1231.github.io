var posts=["2022/11/20/第三篇文章/","2022/11/20/第二篇文章/","2022/11/20/第一篇文章/"];function toRandomPost(){window.open('/'+posts[Math.floor(Math.random() * posts.length)],"_self");};
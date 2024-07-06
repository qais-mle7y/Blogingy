import React from 'react'
import PostAuthor from '../components/PostAuthor.jsx'
import { Link } from 'react-router-dom'
import Thumbnail from '../images/blog39.jpg'


const PostDetail = () => {
  return (
    <section className='post-detail'>
      <div className="container post-detail__container">
        <div className="post-detail__header">
          <PostAuthor/>
          <div className="post-detail__buttons">
            <Link to={'/posts/wfwwfw/edit'} className='btn sm primary'>Edit</Link>
            <Link to={'/posts/wfwwfw/delete'} className='btn sm danger'>Delete</Link>
          </div>
        </div>

        <h1>This is the post title!</h1>
        <div className="post-detail__thumbnail">
          <img src={Thumbnail} alt="" />
        </div>

        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus eum consectetur nemo. Doloremque at omnis atque illo. Obcaecati optio accusantium sequi exercitationem nisi! Temporibus accusantium, dolore explicabo consequatur illo voluptatibus. Animi eos cupiditate reiciendis quas deleniti praesentium eligendi porro blanditiis.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam in magnam modi molestias voluptas, itaque consequatur ipsa neque alias blanditiis ipsam eum accusamus eos fuga similique beatae mollitia ad illo. Earum nemo amet fuga ex illum totam tempora. Libero culpa aspernatur illum dicta, officia eligendi maxime consectetur et sit delectus, voluptatum rerum dolores dolor distinctio.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos facilis sapiente itaque magnam! Minus laborum, animi repellendus id iure perspiciatis temporibus, sapiente error quibusdam laudantium, aliquam debitis tenetur veniam ducimus aut nostrum! Dignissimos accusamus officia in. Autem quas itaque voluptas omnis temporibus neque vitae ex totam. Culpa ducimus quaerat recusandae tempore earum. In nostrum alias vitae, veniam necessitatibus inventore, assumenda ab facilis sunt doloribus, harum qui quis omnis praesentium dignissimos illo delectus eveniet! Veniam similique alias asperiores corporis vitae, fugiat, dolorem, voluptatum totam eaque suscipit odio. Assumenda ipsum, est quibusdam praesentium sequi quo optio, quasi nemo consectetur expedita nostrum ea itaque tenetur voluptatum nihil aliquam corrupti eius dolorem rerum fuga. Minus.</p>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione eum quas pariatur voluptatibus aut neque consequuntur sint ad ipsum optio!</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere veritatis ut corrupti deleniti ex dolorem, molestias ducimus sunt asperiores. Itaque, eveniet! Neque hic vel qui quod corrupti saepe quaerat labore repellendus placeat veritatis modi, ratione dignissimos dolor atque nulla! Perspiciatis fugit odio, nihil debitis in officia earum eveniet, voluptatum perferendis pariatur eos repudiandae praesentium omnis atque quasi sed modi! Natus impedit quod iure, reprehenderit quia et quis sapiente eveniet ex commodi voluptatem, aspernatur facilis doloremque labore omnis assumenda nihil doloribus praesentium alias? Illo iure porro eaque, error esse accusantium saepe perspiciatis. Obcaecati blanditiis autem nobis quod similique iure et incidunt minima maiores. Dolores dignissimos architecto laboriosam odit magni praesentium earum nostrum! Optio cum expedita maiores, inventore sit minima fugiat ipsam vitae sunt pariatur saepe quibusdam possimus id accusantium. Similique animi dicta exercitationem. Eligendi et, quas rem libero temporibus tenetur harum ut ipsa impedit magnam fugiat ea neque. A at cum sed culpa explicabo, dolore error maiores saepe nam laborum magni ad eius voluptatibus fugiat quos ea repudiandae veritatis, eaque quas iure et optio eligendi amet. Cupiditate magni molestias quisquam. Dolorem quasi nemo cumque, at, minus tempore ipsum eaque ut veniam sapiente, perspiciatis quae molestiae aut ex ad ab voluptas magni.</p>
      </div>
    </section>
  )
}

export default PostDetail

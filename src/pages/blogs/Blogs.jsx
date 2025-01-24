import bolgsdata from '../../data/blogs.json'

const Blogs = () => {
  return (
    <section className='section__container blog__container'>
            <h2 className='section__header'>Latest From Blog</h2>
            <p className='section__subheader'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa laborum, alias, tempore porro adipisci.</p>
            <div className='grid grid-col-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-12'>
                {
                    bolgsdata.map((blogdata,index)=>(
                        <div key={index} className='blog__card cursor-pointer hover:scale-105 transition-all duration-300'>
                            <img src={blogdata.imageUrl} alt="blog image"/>
                            <div className='blog__card__content'>
                                <h6>{blogdata.subtitle}</h6>
                                <h4>{blogdata.title}</h4>
                                <p>{blogdata.date}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
    </section>
  )
}

export default Blogs

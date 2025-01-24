import dealsimg from '../../assets/deals.png'

const DealsSection = () => {
  return (
   <section className='section__container deals__container'>
            <div className='deals__image'>
                <img src={dealsimg} alt="dealimg" />
            </div>

            <div className='deals__content'>
                <h5>Get Up To 25% Discount</h5>
                <h4>Deals Of This Month</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi cupiditate libero molestiae dolores optio corporis officia tenetur excepturi laboriosam. Voluptas ipsum eligendi, neque iusto et ipsam mollitia? Suscipit, vel reiciendis?</p>
                <div className='deals__countdown flex-wrap'>
                    <div className='deals__countdown__card'>
                            <h4>12</h4>
                            <p>Days</p>
                    </div>
                    <div className='deals__countdown__card'>
                            <h4>20</h4>
                            <p>Hours</p>
                    </div>
                    <div className='deals__countdown__card'>
                            <h4>16</h4>
                            <p>Mins</p>
                    </div>
                    <div className='deals__countdown__card'>
                            <h4>08</h4>
                            <p>Secs</p>
                    </div>
                </div>
            </div>
   </section>
  )
}

export default DealsSection;

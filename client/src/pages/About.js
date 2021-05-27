import React from 'react';

const About = () => {
  return (
    <div className='about container-fluid'>
      <div className='row '>
        <div className='col text-center about_banner'>
          <img
            src='https://www.the-bigger-picture.com/wp-content/uploads/2021/01/odeon-bluescreen1-crop.jpeg'
            alt=''
          />
          <h1>FilmVisarna</h1>
        </div>
      </div>
      <div className='row my-5'>
        <div className='col-12 text-center'>
          <h2>About Us</h2>
        </div>
      </div>
      <div className='row justify-content-center my-5'>
        <div className='col-8 text-center pt-5'>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
            inventore mollitia aperiam quam natus, quidem vitae soluta enim ad,
            temporibus voluptas. Obcaecati, sint. Quae odio debitis
            necessitatibus dolore ullam? Veniam. Lorem ipsum, dolor sit amet
            consectetur adipisicing elit. Inventore, aspernatur esse eos aut
            distinctio velit molestiae illum. Adipisci perspiciatis nulla aut
            minus mollitia iste, cupiditate, magni corrupti tenetur nesciunt
            vero.
          </p>
        </div>
      </div>
      <div className='row justify-content-center about_features'>
        <div className='col-6'>
          <img
            src='https://www.voodoofilm.org/images/upload/2019/10/imax-with-laser.jpg'
            alt=''
          />
        </div>
        <div className='col-6'>
          <img
            src='https://www.flatpanelshd.com/pictures/dolbyatmoslogo_small.jpg'
            alt=''
          />
        </div>
      </div>
      <div className='container mt-5'>
        <div className='about_info row justify-content-center'>
          <div className='col-12 col-md-5'>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
              animi eaque natus dicta porro modi at odit eveniet quos voluptas?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
              libero laboriosam, quas aspernatur consequuntur rem commodi quam
              deleniti quaerat quae dolore eaque? Animi itaque, eum enim dicta
              esse cupiditate inventore odio, magni accusamus soluta, maxime
              corporis labore provident ut minus.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
              libero laboriosam, quas aspernatur consequuntur rem commodi quam
              deleniti quaerat quae dolore eaque? Animi itaque, eum enim dicta
              esse cupiditate inventore odio, magni accusamus soluta, maxime
              corporis labore provident ut minus.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
              libero laboriosam, quas aspernatur consequuntur rem commodi quam
              deleniti quaerat quae dolore eaque? Animi itaque, eum enim dicta
              esse cupiditate inventore odio, magni accusamus soluta, maxime
              corporis labore provident ut minus.
            </p>
          </div>
          <div className='col-12 col-md-5'>
            <div className='about_img_list'>
              <div className='img_ctn'>
                <img
                  src='http://photos.cinematreasures.org/production/photos/310543/1594137658/large.png?1594137658'
                  alt=''
                />
              </div>
              <div className='img_ctn'>
                <img
                  src='https://www.timeoutdubai.com/public/styles/full_img/public/images/2019/02/18/novo_img16.jpg?itok=NhtXrNnp'
                  alt=''
                />
              </div>
              <div className='img_ctn'>
                <img
                  src='https://curlytales.com/wp-content/uploads/2020/06/novo-2-1280x720.jpg'
                  alt=''
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='container'>
        <div className='row about_contact justify-content-center'>
          <div className='col about_contact_info'>
            <h5>Address</h5>
            <span>FilmVisarna</span>
            <span>LeetStreet</span>
            <span>Leet, 01337</span>
          </div>
          <div className='col about_contact_info'>
            <h5>Socials</h5>
            <span>insta</span>
            <span>Twitter</span>
            <span>FB</span>
          </div>
          <div className='col about_contact_info'>
            <h5>Contact</h5>
            <span>FilmVisarna@film.com</span>
            <span>+1337 11 33 77</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

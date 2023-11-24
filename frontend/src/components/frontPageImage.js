function FrontPageImage(props) {
   return (
      <>
         <div
            id="carouselExampleSlidesOnly"
            className="carousel back slide"
            data-ride="carousel"
         >
            <div className="webContext">
               <div className="webTitle display-4">
                  <span className="e_text">E-</span>
                  <span className="liText">Library</span>
               </div>
               <div className="webTheme">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Ipsum voluptatum, iure ut nulla magni sint aperiam
                  necessitatibus, officiis nostrum voluptatem dolore, quidem
                  officia cumque molestias sed saepe? Ea, rerum inventore.
               </div>
               <div className="btns">
                  <a
                     className="exloreBtn btn btn-warning"
                     href="#booksContainer"
                  >
                     Exlore The Vast World
                  </a>
               </div>
            </div>
         </div>
      </>
   );
}

export default FrontPageImage;

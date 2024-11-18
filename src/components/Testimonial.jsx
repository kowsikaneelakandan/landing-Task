import "./Testimonial.css";
export default function Testimonial() {
  return (
    <div className="Test-container">
      <div className="T-container">
        <h4>What people are saying...</h4>
      </div>
      <div className="image">
        <div>
        <img src="./images/testimonials-1.jpg" className="img-1" alt="..." />
        <h6>Margaret E.</h6>
        <p>"This is fantastic! Thanks so much guys!"</p>
        </div>
        <div>
        <img src="./images/testimonials-2.jpg" className="img-2" alt="..." />
        <h6>Fred S.</h6>
        <p>
          "Bootstrap is amazing. I've been using it to create lots of super nice
          landing pages."
        </p>
        </div>
        <div>
        <img src="./images/testimonials-3.jpg" className="img-3" alt="..." />
        <h6>Sarah W.</h6>
        <p>"Thanks so much for making these free resources available to us!"</p>
        </div>
      </div>
    </div>
  );
}

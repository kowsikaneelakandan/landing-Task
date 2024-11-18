import "./Showcase.css";
export default function Showcase() {
  return (
    <div className="container">
      <div className="S-container">
        <img src="./images/bg-showcase-1.jpg" className="image-1" alt="..." />
        <div className="p-container">
          <h3>Fully Responsive Design</h3>
          <p>
            When you use a theme created by Start Bootstrap, you know that the
            theme will look great on any device, whether it's a phone, tablet,
            or desktop the page will behave responsively!
          </p>
        </div>
      </div>
      <div className="M-container">
        <img src="./images/bg-showcase-2.jpg" className="image-2" alt="..." />
        <div className="p-container">
        <h3>Updated For Bootstrap 5</h3>
        <p>
          Newly improved, and full of great utility classes, Bootstrap 5 is
          leading the way in mobile responsive web development! All of the
          themes on Start Bootstrap are now using Bootstrap 5!
        </p>
        </div>
      </div>
      <div className="L-container">
        <img src="./images/bg-showcase-3.jpg" className="image-3" alt="..." />
        <div className="p-container">
        <h3>Easy to Use & Customize</h3>
        <p>
          Landing Page is just HTML and CSS with a splash of SCSS for users who
          demand some deeper customization options. Out of the box, just add
          your content and images, and your new landing page will be ready to
          go!
        </p>
        </div>
      </div>
    </div>
  );
}

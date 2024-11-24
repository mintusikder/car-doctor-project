import img1 from "../../assets/images/banner/1.jpg";
import img2 from "../../assets/images/banner/2.jpg";
import img3 from "../../assets/images/banner/3.jpg";
import img4 from "../../assets/images/banner/4.jpg";
import img5 from "../../assets/images/banner/5.jpg";
import img6 from "../../assets/images/banner/6.jpg";

const slides = [
  { id: "slide1", img: img1 },
  { id: "slide2", img: img2 },
  { id: "slide3", img: img3 },
  { id: "slide4", img: img4 },
  { id: "slide5", img: img5 },
  { id: "slide6", img: img6 },
];

const Carousel = () => {
  return (
    <div className="carousel w-full">
      {slides.map((slide, index) => (
        <div id={slide.id} key={slide.id} className="carousel-item relative w-full">
          <img src={slide.img} className="w-full h-[627px]" alt="Car servicing" />
          <div className="absolute inset-0 flex items-center bg-gradient-to-r from-black/70 via-black-700/50 to-transparent">
            <div className="text-left md:ml-20 ml-5 space-y-6">
              <h3 className="text-5xl font-bold text-white">
                Affordable <br /> Price For Car <br /> Servicing
              </h3>
              <p className="text-white">
                There are many variations of passages available, but <br />
                the majority have suffered alteration in some form.
              </p>
              <div>
                <button className="btn btn-outline btn-warning mr-3">
                  Discover More
                </button>
                <button className="btn btn-outline btn-warning">
                  Latest Project
                </button>
              </div>
            </div>
          </div>
          <div className="absolute right-5 bottom-0 flex -translate-y-1/2 transform justify-between">
            <a
              href={`#${slides[(index - 1 + slides.length) % slides.length].id}`}
              className="btn btn-circle mr-3 hover:btn-warning"
            >
              ❮
            </a>
            <a
              href={`#${slides[(index + 1) % slides.length].id}`}
              className="btn btn-circle hover:btn-warning"
            >
              ❯
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Carousel;

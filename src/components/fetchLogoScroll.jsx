
import Image from "next/image";
export default  function FetchLogoScroll() {
    const images = [
        { image: "wordpress.png", title: "wordpress" },
        { image: "webflow.png", title: "webflow" },
        { image: "Systemio.png", title: "Systemio" },
        { image: "wordpress.png", title: "wordpress" },
        { image: "webflow.png", title: "webflow" },
        { image: "Systemio.png", title: "Systemio" },
        { image: "wordpress.png", title: "wordpress" },
        { image: "webflow.png", title: "webflow" },
        { image: "Systemio.png", title: "Systemio" }
       
    ];

  return (
    <div className=" flex space-x-16 overflow-hidden">
      <div className="flex animate-loop-scroll gap-10">
        {images.map((src, index) => (
          <div className=" " key={index}>
            <Image
              title={src.title}
              width={600}
              height={300}
              src={`/logoScroll/${src.image}`}
              className="max-w-none grayscale hover:grayscale-0 duration-700   h-12 w-auto   "
              alt={src.title}
            />
          </div>
        ))}
      </div>
      <div className="flex animate-loop-scroll gap-10" aria-hidden='true'>
        {images.map((src, index) => (
          <div className=" " key={index}>
            <Image
              title={src.title}
              width={600}
              height={300}
              src={`/logoScroll/${src.image}`}
              className="max-w-none grayscale hover:grayscale-0 duration-700   h-12 w-auto   "
              alt={src.title}
            />
          </div>
        ))}
      </div>

    </div>
    
  );
}
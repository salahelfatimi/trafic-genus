
import Image from "next/image";
export default  function FetchLogo() {
    const images = [
        { image: "logo.png", title: "trafic genius" },
        { image: "logo.png", title: "trafic genius" },
        { image: "logo.png", title: "trafic genius" },
        { image: "logo.png", title: "trafic genius" },
        { image: "logo.png", title: "trafic genius" },
        { image: "logo.png", title: "trafic genius" },
       
       
    ];

  return (
    <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)]">
      <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll">
        {images.map((src, index) => ( // Duplicate the images for smooth loop
          <li key={index} >
            <Image
                title={src.title}
                width={600}
                height={300}
                src={`/appel/${src.image}`}
                className="max-w-none h-40 w-auto"
                alt={src.title}
            />
          </li>
        ))}
      </ul>
      <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll" aria-hidden="true">
        {images.map((src, index) => ( 
          <li key={index} >
            <Image
                title={src.title}
                width={600}
                height={300}
                src={`/appel/${src.image}`}
                className="max-w-none h-40 w-auto"
                alt={src.title}
            />
        
          </li>
        ))}
      </ul>
    </div>
  );
}
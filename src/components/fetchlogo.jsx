
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
    <div className=" flex space-x-16 overflow-hidden">
      <div className="flex animate-loop-scroll gap-10">
        {images.map((src, index) => (
          <div className=" " key={index}>
            <Image
              title={src.title}
              width={600}
              height={300}
              src={`/appel/${src.image}`}
              className="max-w-none  h-28    w-auto   "
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
              src={`/appel/${src.image}`}
              className="max-w-none   h-28   w-auto   "
              alt={src.title}
            />
          </div>
        ))}
      </div>

    </div>
  );
}
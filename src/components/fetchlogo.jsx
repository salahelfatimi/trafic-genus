
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
    <>
      {images.map((src, index) => (
        <div className=" space-x-6  p-2" key={index}>
          <Image
            title={src.title}
            width={500}
            height={500}
            src={`/appel/${src.image}`}
            className="max-w-none duration-700    w-screen md:w-auto   "
            alt={src.title}
          />
        </div>
      ))}
    </>
  );
}
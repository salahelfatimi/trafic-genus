// app/components/FetchLogoScroll.js
import Image from "next/image";

export default function FetchLogoScroll() {
  const images = [
    { id: 1, title: 'puma madagascar', image: 'puma.png' },
    { id: 2, title: 'adidas madagascar', image: 'adidas.png' },
    { id: 3, title: 'puma madagascar', image: 'puma.png' },
    { id: 4, title: 'adidas madagascar', image: 'adidas.png' },
    { id: 5, title: 'puma madagascar', image: 'puma.png' },
    { id: 6, title: 'adidas madagascar', image: 'adidas.png' },
    { id: 7, title: 'puma madagascar', image: 'puma.png' },
    { id: 8, title: 'adidas madagascar', image: 'adidas.png' },
   
 
  ];

  return (
    <div class="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)]">
    <ul class="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll">
      {images.map((src, index) => ( // Duplicate the images for smooth loop
        <li key={index} >
          <Image
              title={src.title}
              width={600}
              height={300}
              src={`/partners/${src.image}`}
              className="max-w-none h-40 w-auto"
              alt={src.title}
          />
        </li>
      ))}
    </ul>
    <ul class="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll" aria-hidden="true">
      {images.map((src, index) => ( 
        <li key={index} >
          <Image
              title={src.title}
              width={600}
              height={300}
              src={`/partners/${src.image}`}
              className="max-w-none h-40 w-auto"
              alt={src.title}
          />
      
        </li>
      ))}
    </ul>
    </div>
  );
}

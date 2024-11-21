import Image from "next/image";

export default function FetchLogoScroll() {
  const images = [
    { id: 1, title: 'puma madagascar', image: 'puma.png' },
    { id: 2, title: 'adidas madagascar', image: 'adidas.png' },
    { id: 3, title: '3pe batiment', image: '3pe.png' },
    { id: 4, title: 'chahm couture', image: 'chahm.png' },
    { id: 5, title: 'dayaf & co', image: 'dayaf&co.png' },
    { id: 6, title: '3pebat ecoenergie', image: 'ecoEnergie.png' },
    { id: 7, title: 'leyane', image: 'leyane.png' },
    { id: 8, title: 'next level group', image: 'nextlevel.png' },
    { id: 9, title: 'skyline immo', image: 'skylineImmo.png' },
    { id: 10, title: 'click Funnels', image: 'clickFunnels.png' },
    { id: 11, title: 'nextjs', image: 'nextjs.png' },
    { id: 12, title: 'wordPress', image: 'wordPress.png' },
    { id: 13, title: 'webFlow', image: 'webFlow.png' },
    { id: 13, title: 'systeme.Io', image: 'systemeIo.png' },
   
 
  ];

  return (
    <div className="w-full  inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)]">
    <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll">
      {images.map((src, index) => ( 
        <li key={index} >
          <Image
              title={src.title}
              width={500}
              height={500}
              quality={50}
              src={`/partners/${src.image}`}
              className=" h-40 w-auto "
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
              width={500}
              quality={50}
              height={500}
              src={`/partners/${src.image}`}
              className=" h-40 w-auto "
              alt={src.title}
          />
      
        </li>
      ))}
    </ul>
    </div>
  );
}

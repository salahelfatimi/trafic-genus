export default function Testimonial(){
    const testimonial=[
        {id:1,src:'https://app.videas.fr/embed/media/d52914d5-7d3b-49dc-80f2-3d4d5c8c00a9/?title=false&logo=false&thumbnail_duration=false&controls=false&info=true'},
        {id:3,src:'https://app.videas.fr/embed/media/24f36334-5f55-4ac2-aa86-138500c112fc/?title=false&logo=false&thumbnail_duration=false&controls=false&info=true'},
        {id:2,src:'https://app.videas.fr/embed/media/e3c07587-4716-43ff-b28a-50d278fcc5b8/?title=false&logo=false&thumbnail_duration=false&controls=false&info=true'},
        {id:4,src:'https://app.videas.fr/embed/media/4b89432b-86b0-4c63-b098-1c75fd0e28cc/?title=false&logo=false&thumbnail_duration=false&controls=false&info=true'},
        {id:4,src:'https://app.videas.fr/embed/media/41de8f86-f3f5-4b7e-9096-c65a3512911d/?title=false&logo=false&thumbnail_duration=false&controls=false&info=true'},
        {id:4,src:'https://app.videas.fr/embed/media/8621dc73-a04d-4a50-b2f0-c306a28f105d/?title=false&logo=false&thumbnail_duration=false&controls=false&info=true'},
    ]
    return(
        <div className="grid md:grid-cols-2 grid-cols-1 lg:grid-cols-3 gap-8 justify-center container pb-10 bg-black">
        {testimonial.map((ele, index) => (

          <div key={index} style={{
            padding: '55% 0 0 0',
            position: 'relative',
            borderRadius: '15px', 
            border: '4px solid #F0FF01', 
            overflow: 'hidden', 
          }}>
            <iframe
              width="100%"
              height="100%"
              src={ele.src}
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              style={{ position: 'absolute', top: 0, left: 0 }}
              referrerPolicy="unsafe-url"
            ></iframe>

          </div>
        ))}
      </div>
      
    )
}
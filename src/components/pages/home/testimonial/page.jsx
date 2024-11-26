export default function Testimonial(){
    const testimonial=[
        {id:1,src:'https://app.videas.fr/embed/media/1abc7db9-ac05-40ad-81d9-77d7aea37e97/?title=false&logo=false&thumbnail_duration=false&controls=false&info=true'},
        {id:3,src:'https://app.videas.fr/embed/media/24f36334-5f55-4ac2-aa86-138500c112fc/?title=false&logo=false&thumbnail_duration=false&controls=false&info=true'},
        {id:2,src:'https://app.videas.fr/embed/media/e3c07587-4716-43ff-b28a-50d278fcc5b8/?title=false&logo=false&thumbnail_duration=false&controls=false&info=true'},
       
        {id:4,src:'https://app.videas.fr/embed/media/4b89432b-86b0-4c63-b098-1c75fd0e28cc/?title=false&logo=false&thumbnail_duration=false&controls=false&info=true'},
       
    ]
    return(
        <div className="grid md:grid-cols-2 grid-cols-1 lg:grid-cols-3 gap-8 justify-center container py-10 bg-black">
        {testimonial.map((ele, index) => (

          <div key={index} style={{
            padding: '55% 0 0 0',
            position: 'relative',
            borderRadius: '15px', // Adjust the value for more or less rounding
            border: '4px solid #F0FF01', // Adjust the width and color of the border
            overflow: 'hidden', // Ensures the content stays within the rounded border
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
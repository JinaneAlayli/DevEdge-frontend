const RequestConsultation = ({ consultation }) => {
    return (
      <section >
        <p>{consultation.description}</p>
        <a href={consultation.buttonLink} >
          {consultation.buttonText}
        </a>
      </section>
    );
  };
  
  export default RequestConsultation;
  
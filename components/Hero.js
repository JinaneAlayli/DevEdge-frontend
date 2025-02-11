export function Hero({ data }) {
  return (
    <section >
      <h2>{data.title}</h2>
      <p>{data.description}</p>
      <div>
        <button >{data.ctaTextLeft}</button>
        <button >{data.ctaTextRight}</button>
      </div>
    </section>
  );
}
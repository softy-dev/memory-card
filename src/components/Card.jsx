export default function Card({ title, image }) {
  return (
    <>
      <h2>{title}</h2>
      <img
        src={image}
        alt={'Character ' + title}
      ></img>
    </>
  );
}

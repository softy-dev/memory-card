export default function Card({ title, image }) {
  return (
    <>
      <p>{title}</p>
      <img
        src={image}
        alt={'Character ' + title}
      ></img>
    </>
  );
}

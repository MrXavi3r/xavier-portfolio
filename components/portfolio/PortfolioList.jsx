export default function PortfolioList({ title, active, setSelected, id }) {
  return (
    <li
      className={
        "text-md md:text-lg text-center mx-12 p-2 rounded cursor-pointer " +
        (active && "text-white py-2 px-4 bg-indigo-900 active")
      }
      onClick={() => setSelected(id)}
    >
      {title}
    </li>
  );
}

export default function PortfolioList({ title, active, setSelected, id }) {
  return (
    <li
      className={
        active
          ? "text-md text-white text-center mx-12 p-1 rounded cursor-pointer bg-indigo-900 active"
          : "text-md text-center mx-12 p-2 rounded cursor-pointer"
      }
      onClick={() => setSelected(id)}
    >
      {title}
    </li>
  );
}

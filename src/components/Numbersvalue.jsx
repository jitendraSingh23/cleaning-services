export function Numbersvalue({ title, description }) {
  return (
    <div className="h-28 w-56 bg-buttoncolor rounded-2xl flex flex-col justify-center items-center hover:scale-110 duration-300 hover:shadow-3xl">
      <div className="text-6xl font-medium text-txcolor text-center">
        {title}
      </div>
      <div className="text-2xl text-txcolor">{description}</div>
    </div>
  );
}

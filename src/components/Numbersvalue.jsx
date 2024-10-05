export function Numbersvalue({ title, description }) {
  return (
    <div className="h-28 w-56 bg-buttoncolor rounded-2xl flex flex-col justify-center items-center">
      <div className="text-6xl font-medium text-txcolor text-center">{title}</div>
      <div className="text-2xl text-txcolor">{description}</div>
    </div>
  );
}

export default function PositionItems({
  icon,
  job,
  position,
}: {
  icon: string;
  job: string;
  position: string;
}) {
  return (
    <div className="flex items-center gap-4 bg-[#FEF3F5] p-4 rounded-lg">
      <img src={icon} alt="icon" className="w-[40px]" />
      <div>
        <h2 className="text-black font-semibold">{job}</h2>

        <span className="text-sm text-secondaryColor">{position}</span>
      </div>
    </div>
  );
}

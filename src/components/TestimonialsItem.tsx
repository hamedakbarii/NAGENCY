import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function TestimonialsItem({
  icon,
  text,
  user,
}: {
  icon: string;
  text: string;
  user: string;
}) {
  return (
    <div className="md:w-[400px] bg-white flex justify-center items-center gap-2 shadow-lg rounded-3xl p-4">
      <div>
        <Avatar>
          <AvatarImage src={icon} />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>

      <div className="flex flex-col justify-center">
        <p className="text-secondaryColor text-xs">{text}</p>
        <span className="text-secondaryColor text-xs">{user}</span>
      </div>
    </div>
  );
}

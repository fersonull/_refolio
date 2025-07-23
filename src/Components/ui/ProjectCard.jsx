import TruncatedText from "./TruncatedText";
import Icons from "./Icons";

const ProjectCard = ({ img, title, desc, stacks }) => {
  return (
    <div className="rounded-xl p-4 font-outfit flex flex-col sm:flex-row lg:flex-col gap-5 lg:max-h-[30rem]">
      <div className="w-full sm:w-40 md:90 bg-gradient-to-tl from-zinc-900 lg:w-full overflow-hidden rounded-lg pt-4 flex items-center justify-center">
        <img
          src={img}
          alt="Project image"
          className="w-48 object-contain hover:scale-110 hover:-rotate-6 -rotate-3 scale-105 transition-all"
        />
      </div>

      <div className="flex-1 flex flex-col">
        <span className="lg:text-xl font-bold mb-2">{title}</span>
        <div className="lg:block hidden">
          <TruncatedText maxLength={140} className="text-white/70">
            {desc}
          </TruncatedText>
        </div>
        <div className="block sm:hidden md:hidden lg:hidden">
          <TruncatedText maxLength={80} className="">
            {desc}
          </TruncatedText>
        </div>
        <div className="hidden sm:block md:hidden">
          <TruncatedText maxLength={190} className="">
            {desc}
          </TruncatedText>
        </div>
        <div className="hidden md:block lg:hidden">
          <TruncatedText maxLength={120} className="">
            {desc}
          </TruncatedText>
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          {stacks.map(({ label, icon }, idx) => (
            <Icons key={idx} icon={icon} label={label} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;

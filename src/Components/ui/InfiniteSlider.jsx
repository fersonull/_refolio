import { techStacks } from "../../../constants/index";
import Icons from "./Icons";

const InfiniteSlider = () => {
  return (
    <div className="overflow-hidden whitespace-nowrap w-full bg-black py-4">
      <div className="animate-slide flex gap-8">
        {[...techStacks, ...techStacks].map(({ label, icon }, idx) => (
          <Icons key={idx} icon={icon} label={label} />
        ))}
      </div>
    </div>
  );
};

export default InfiniteSlider;

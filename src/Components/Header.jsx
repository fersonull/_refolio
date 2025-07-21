import { useEffect } from "react";
import GradientText from "./ui/GradientText";
import TextMotion from "./ui/TextMotion";
import GradientSubText from "./ui/GradientSubText";
import ImageCircle from "./ui/ImageCircle";
import { FaGithub } from "react-icons/fa";
import { MdOutlineArrowOutward } from "react-icons/md";
import Blob from "./ui/Blob";
import { techStacks } from "../../constants/index";
import Icons from "./ui/Icons";
import { useInView } from "react-intersection-observer";

const Header = ({ setActive }) => {
  const { ref, inView } = useInView({
    threshold: 0.5,
  });
  useEffect(() => {
    if (inView) {
      setActive("home");
    }
  }, [inView]);

  return (
    <section
      ref={ref}
      id="home"
      className="h-full flex items-center justify-center relative"
    >
      {/* <div className="relative"> */}
      <Blob top={-400} start={200} size={570} opacity={0.3} />
      <Blob top={100} start={1400} size={300} />
      <Blob top={460} start={400} size={700} opacity={0.3} />
      {/* </div> */}
      <div className="flex flex-col z-20 transition-all">
        <TextMotion>
          <ImageCircle src="/ako3.png" size={120} />
          <TextMotion
            delay={0.2}
            className="font-outfit font-medium leading-relaxed text-center md:mt-5 mt-2"
          >
            <GradientSubText className="md:text-2xl text-lg">
              Hello, I'm Jasfer Monton.
            </GradientSubText>
          </TextMotion>
        </TextMotion>
        <div className="font-outfit text-[60px] font-bold text-center ">
          <TextMotion delay={0.3} className="text-glow md:my-5 my-3">
            <GradientText className="text-3xl md:text-6xl">
              Ideas. Code. Impact.
            </GradientText>
          </TextMotion>
        </div>
        <TextMotion delay={0.4} className="md:text-nowrap">
          <GradientSubText className="md:text-lg text-sm lg:max-w-xl max-w-[90%] mx-auto text-center">
            From concept to deployment — building impactful web experiences.
          </GradientSubText>
        </TextMotion>
        <TextMotion
          delay={0.5}
          className="flex items-center justify-center mt-5 md:gap-8 gap-2"
        >
          <button className="primary-btn flex items-center justify-center gap-1 md:text-sm text-xs">
            Contact me <MdOutlineArrowOutward size={19} />
          </button>
          <a
            href="https://github.com/fersonull/"
            target="_blank"
            className="rounded-full px-4 py-2  font-outfit hover:underline text-sm flex items-center justify-center gap-2"
          >
            <FaGithub />
            Go to GitHub
          </a>
        </TextMotion>

        <TextMotion delay={0.6}>
          <div className="md:flex items-center justify-center gap-2 md:mt-10 mt-6 md:max-w-xl max-w-[90%] mx-auto flex-wrap hidden">
            {techStacks.map(({ icon, label }, idx) => (
              <Icons key={idx} icon={icon} label={label} />
            ))}
          </div>
        </TextMotion>
      </div>
    </section>
  );
};

export default Header;

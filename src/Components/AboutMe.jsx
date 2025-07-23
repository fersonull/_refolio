import { useEffect } from "react";
import GradientText from "./ui/GradientText";
import { useInView } from "react-intersection-observer";
import TextMotion from "./ui/TextMotion";

const AboutMe = ({ setActive }) => {
  const { ref, inView } = useInView({
    threshold: 0.5,
  });
  useEffect(() => {
    if (inView) {
      setActive("about");
    }
  }, [inView]);

  return (
    <section
      id="about"
      ref={ref}
      className="font-outfit h-full flex items-center justify-center"
    >
      <div className="flex justify-between w-full lg:px-[10rem] px-8">
        <div className="lg:max-w-xl">
          <h3 className="text-3xl">
            <TextMotion className="mb-2 text-sm font-normal dark:text-white/70 uppercase">
              About Me
            </TextMotion>
            <TextMotion className="title text-glow">
              I'm Jasfer, a full-stack
              <GradientText className="inline gradient-violet">
                {" "}
                developer
              </GradientText>
            </TextMotion>
          </h3>
          <div className="lg:text-xl flex flex-col gap-4 lg:mt-8 mt-4 text-white/70">
            <TextMotion>
              I'm Jasfer Monton, a proactive full-stack developer passionate
              about creating dynamic web experiences. From frontend to backend,
              I thrive on solving complex problems with clean, efficient code.
              My expertise spans React, Next.js, and Node.js, and I'm always
              eager to learn more.
            </TextMotion>
            <TextMotion>
              When I'm not immersed in work, I'm exploring new ideas and staying
              curious. Life's about balance, and I love embracing every part of
              it.
            </TextMotion>

            <TextMotion>
              I believe in waking up each day eager to make a difference!
            </TextMotion>
          </div>
        </div>

        {/* galleru */}
        <div className="flex-1 "></div>
      </div>
    </section>
  );
};

export default AboutMe;

import bgImg from "../../assets/bg.png";

const PrivacyPolicy = () => {
  return (
    <div className="relative w-full min-h-screen overflow-y-auto">
      {/* Background Image */}
      <img
        src={bgImg}
        alt="Background"
        className="fixed top-0 left-0 w-full h-full min-h-screen object-cover z-0"
        style={{ pointerEvents: "none", userSelect: "none" }}
      />
      {/* Overlay for opacity-50 */}
      <div className="absolute inset-0 bg-black opacity-50 z-10" />
      <div className="flex flex-col min-h-screen items-center justify-center px-4 md:px-12 lg:px-24 py-12 relative z-20">
        <div className="w-full max-w-6xl bg-white/80 rounded-[48px] shadow-[0px_25px_8px_-12px_rgba(0,0,0,0.25)] outline outline-8 outline-offset-[-8px] outline-white/50 p-8 md:p-16 lg:p-24 flex flex-col gap-8">
          <h1 className="text-center text-black text-3xl md:text-4xl font-bold font-['Nunito'] leading-tight mb-4">
            Privacy Policy
          </h1>

          <section className="flex flex-col gap-4">
            <p className="text-neutral-500 text-lg md:text-2xl font-normal font-['Nunito'] leading-9">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra
              condimentum eget purus in. Consectetur eget id morbi amet amet, in.
              Ipsum viverra pretium tellus neque. Ullamcorper suspendisse aenean
              leo pharetra in sit semper et. Amet quam placerat sem.
            </p>
          </section>

          <section className="flex flex-col gap-4">
            <div className="text-neutral-500 text-lg md:text-2xl font-normal font-['Nunito'] leading-9 space-y-8">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra
                condimentum eget purus in. Consectetur eget id morbi amet amet, in.
                Ipsum viverra pretium tellus neque. Ullamcorper suspendisse aenean
                leo pharetra in sit semper et. Amet quam placerat sem.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra
                condimentum eget purus in. Consectetur eget id morbi amet amet, in.
                Ipsum viverra pretium tellus neque. Ullamcorper suspendisse aenean
                leo pharetra in sit semper et. Amet quam placerat sem.
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;

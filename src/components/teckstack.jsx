export default function WaterAnimation() {
  const techStack = [
    {
      svg: (
        <svg
          aria-label="Next.js logotype"
          height="18"
          role="img"
          viewBox="0 0 394 79"
          fill="currentColor"
          className="w-16 h-16"
        >
          <path d="M261.919 0.0330722H330.547V12.7H303.323V79.339H289.71V12.7H261.919V0.0330722Z"></path>
          <path d="M149.052 0.0330722V12.7H94.0421V33.0772H138.281V45.7441H94.0421V66.6721H149.052V79.339H80.43V12.7H80.4243V0.0330722H149.052Z"></path>
          <path d="M183.32 0.0661486H165.506L229.312 79.3721H247.178L215.271 39.7464L247.127 0.126654L229.312 0.154184L206.352 28.6697L183.32 0.0661486Z"></path>
          <path d="M201.6 56.7148L192.679 45.6229L165.455 79.4326H183.32L201.6 56.7148Z"></path>
          <path
            clipRule="evenodd"
            d="M80.907 79.339L17.0151 0H0V79.3059H13.6121V16.9516L63.8067 79.339H80.907Z"
            fillRule="evenodd"
          ></path>
          <path d="M333.607 78.8546C332.61 78.8546 331.762 78.5093 331.052 77.8186C330.342 77.1279 329.991 76.2917 330 75.3011C329.991 74.3377 330.342 73.5106 331.052 72.8199C331.762 72.1292 332.61 71.7838 333.607 71.7838C334.566 71.7838 335.405 72.1292 336.115 72.8199C336.835 73.5106 337.194 74.3377 337.204 75.3011C337.194 75.9554 337.028 76.5552 336.696 77.0914C336.355 77.6368 335.922 78.064 335.377 78.373C334.842 78.6911 334.252 78.8546 333.607 78.8546Z"></path>
        </svg>
      ),
      alt: "Next.js",
    },
    { src: "./tech/react.png", alt: "React" },
    { src: "./tech/java-script.png", alt: "JavaScript" },
    { src: "./tech/github.png", alt: "Git" },
    { src: "./tech/html.png", alt: "HTML5" },
    { src: "./tech/css.png", alt: "CSS3" },
    { src: "./tech/bootstrap.png", alt: "Bootstrap" },
    {
      svg: (
        <svg
          viewBox="0 0 248 31"
          className="text-slate-900 dark:text-white w-16 h-16"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M25.517 0C18.712 0 14.46 3.382 12.758 10.146c2.552-3.382 5.529-4.65 8.931-3.805 1.941.482 3.329 1.882 4.864 3.432 2.502 2.524 5.398 5.445 11.722 5.445 6.804 0 11.057-3.382 12.758-10.145-2.551 3.382-5.528 4.65-8.93 3.804-1.942-.482-3.33-1.882-4.865-3.431C34.736 2.92 31.841 0 25.517 0zM12.758 15.218C5.954 15.218 1.701 18.6 0 25.364c2.552-3.382 5.529-4.65 8.93-3.805 1.942.482 3.33 1.882 4.865 3.432 2.502 2.524 5.397 5.445 11.722 5.445 6.804 0 11.057-3.381 12.758-10.145-2.552 3.382-5.529 4.65-8.931 3.805-1.941-.483-3.329-1.883-4.864-3.432-2.502-2.524-5.398-5.446-11.722-5.446z"
            fill="#38bdf8"
          ></path>
        </svg>
      ),
      alt: "Tailwind",
    },
    { src: "./tech/sql-server.png", alt: "SQLServer" },
  ];

  return (
    <div className="relative w-full h-[400px] mt-10 water-animation overflow-hidden">
      <div className="tech-stack relative w-full h-full flex items-center justify-center">
        {techStack.map((tech, index) => (
          <div
            key={tech.alt}
            className={`absolute w-16 h-16 animate-float-${index}`}
          >
            {tech.svg || <img src={tech.src} alt={tech.alt} />}
          </div>
        ))}
      </div>
    </div>
  );
}

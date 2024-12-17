import ali from "../images/Alih1.png";
import shahin from "../images/shahinh1.png";
import archie from "../images/Archiebal1.png";

export default function Testimonial() {
  const persons = [
    {
      logo: shahin,
      person: "Shahin Habibi",
      position: "Technical Leader at Cisco (ASIC and Network Processor Design)",
      text: "I have known Sophia for a long time, and I have seen her work. She has fantastic work ethics, great knowledge of software tools, and excellent understanding of customer requirements. Her work has always been of high quality, and delivered on time. Perhaps as importantly, she has great communication skills, is easy to work with, and is well regarded and liked by her colleagues. I highly recommend Sophia.",
    },
    {
      logo: ali,
      person: "Ali Heristchian",
      position: "Technical Lead at Conrad Electronic Česká republika, s.r.o.",
      text: "We have been working on several projects together, and Sophia is one of the best people I had as a colleague. She is full of energy, motivation, and perseverance when it comes to a complex topic. Sophia would be a valuable member of any team.",
    },
    {
      logo: archie,
      person: "Arshia Pasdar",
      position: "Digital Marketing Manager at J2 Sourcing",
      text: "Sophia is a joy to work with. She handled our Web page assignment with aplomb and diligence, displaying the ability to follow creative direction while adding her own creative input in a diplomatic and useful way. Her work led to an increase in click-throughs. I recommend her to anyone who needs design and Website work, She is amazing and you won't regret it.",
    },
  ];

  return (
    <div className="md:grid md:grid-cols-2 gap-4 mt-10 md:px-4 md:py-5 relative overflow-hidden">
      {persons.map((person, index) => (
        <div
          key={index}
          className={`p-4 ${
            index === 1 ? "md:mt-20" : ""
          } ${
            index === 2 ? "md:relative md:w-[90%] md:ml-auto md:mr-auto md:mt-10" : ""
          }`}
        >
          <div className="flex items-center gap-4">
            <img
              src={person.logo}
              alt={`${person.person} logo`}
              className="w-16 h-16 rounded-full"
            />
            <div>
              <h3 className="font-bold">{person.person}</h3>
              <p className="text-sm text-gray-500">{person.position}</p>
            </div>
          </div>
          <p className="mt-4 text-gray-700 text-justify">{person.text}</p>
        </div>
      ))}
    </div>
  );
}

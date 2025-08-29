import SectionHeading from "./SectionHeading";
import TeamCard from "./UI/TeamCard";
import jobsmith from '../assets/teamPic/jobSmith.png'
const Team = () => {
  const teamMembers = [
    {
      id: 1,
      name: "John Smith",
      role: "CEO, TechCorp",
      image: jobsmith,
      linkedIn: "https://linkedin.com/in/johndoe",
      description:
        "10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy",
    },
    {
      id: 2,
      name: "Sarah Smith",
      role: "Marketing Manager, BrandX",
      image: jobsmith,
      linkedIn: "https://linkedin.com/in/sarahsmith",
      description:
        "Sarah is a creative marketing strategist, ensuring campaigns are data-driven and highly effective.",
    },
    {
      id: 3,
      name: "Michael Johnson",
      role: "CTO, StartupHub",
      image: jobsmith,
      linkedIn: "https://linkedin.com/in/michaeljohnson",
      description:
        "Michael specializes in technology implementation, scaling startups with innovative solutions.",
    },
    {
      id: 6,
      name: "Michael Johnson",
      role: "CTO, StartupHub",
      image: jobsmith,
      linkedIn: "https://linkedin.com/in/michaeljohnson",
      description:
        "Michael specializes in technology implementation, scaling startups with innovative solutions.",
    },
    {
      id: 4,
      name: "Michael Johnson",
      role: "CTO, StartupHub",
      image: jobsmith,
      linkedIn: "https://linkedin.com/in/michaeljohnson",
      description:
        "Michael specializes in technology implementation, scaling startups with innovative solutions.",
    },
    {
      id: 5,
      name: "Michael Johnson",
      role: "CTO, StartupHub",
      image: jobsmith,
      linkedIn: "https://linkedin.com/in/michaeljohnson",
      description:
        "Michael specializes in technology implementation, scaling startups with innovative solutions.",
    },
   
  ];

  const title = "Team";
  const des =
    "Meet the skilled and experienced team behind our successful digital marketing strategies";
  return (
    <section>
      <SectionHeading title={title} des={des} />
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {teamMembers.map((member) => (
          <TeamCard
            key={member.id}
            image={member.image}
            name={member.name}
            role={member.role}
            linkedIn={member.linkedIn}
            description={member.description}
          />
        ))}
      </div>
    </section>
  );
};

export default Team;

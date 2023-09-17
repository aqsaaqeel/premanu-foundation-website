import "./Team.css";

export const Team = () => {
  const TeamMembers = [
    { name: "Abid Faheem", title: "Founder & CEO", image: "Abid.png" },
    { name: "Mehreena Manzoor", title: "Director", image: "Mehreena.png" },
    {
      name: "Shrilekha Gupta",
      title: "Senior Program Consultant",
      image: "Shrilekha.png",
    },
    {
      name: "Gorakhnath Singh",
      title: "Senior Program Consultant",
      image: "Gorakhnath.png",
    },
    {
      name: "Khushboo Dixit",
      title: "Senior Program Consultant",
      image: "Khushboo.png",
    },
    { name: "Pooja Joshi", title: "Program Consultant", image: "Pooja.png" },
    { name: "Jyoti Yadav", title: "Program Consultant", image: "Jyoti.png" },
    { name: "Shardool", title: "Program Consultant", image: "Shardool.png" },
    {
      name: "Khuloos Khan",
      title: "Senior Fellowship Consultant",
      image: "Khuloos.png",
    },
    {
      name: "Vivek Shahare",
      title: "Senior Fellowship Consultant",
      image: "Vivek.png",
    },
    { name: "Afreen Khan", title: "Legal Consultant", image: "Afreen.png" },
    { name: "Farzan Khan", title: "Financial Consultant", image: "Farzan.png" },
    { name: "Atif Azeez", title: "IT Consultant", image: "Atif.png" },
  ];
  return (
    <div className="team-area">
      {TeamMembers.map((member) => (
        <div className="team-card-container">
          <div className="team-card">
            <img
              className="team-image"
              src={`images/team/${member.image}`}
              alt="team-member"
            />
            <div className="team-content">
              <p className="team-name">{member.name}</p>
              <p className="team-title">{member.title}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

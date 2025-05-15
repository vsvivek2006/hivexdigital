import SectionTitle from '../common/SectionTitle';

const teamMembers = [
  {
    name: 'Alex Johnson',
    position: 'CEO & Founder',
    bio: '15+ years of experience in digital marketing with a focus on ROI-driven strategies.',
    image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    name: 'Maria Rodriguez',
    position: 'SEO Director',
    bio: 'Google-certified SEO expert with a track record of doubling organic traffic for clients.',
    image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    name: 'David Chen',
    position: 'Social Media Manager',
    bio: 'Former Facebook strategist who specializes in converting engagement into sales.',
    image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    name: 'Sarah Williams',
    position: 'Web Development Lead',
    bio: 'Creative developer with a background in UX/UI design and conversion optimization.',
    image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    name: 'Michael Thompson',
    position: 'Content Strategist',
    bio: 'Published author and content creator who drives organic growth through storytelling.',
    image: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    name: 'Jennifer Lee',
    position: 'PPC Specialist',
    bio: 'Data analyst who optimizes ad campaigns to maximize client ROI and conversion rates.',
    image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
];

const TeamSection = () => {
  return (
    <section className="section bg-white">
      <div className="container">
        <SectionTitle
          title="Meet Our Expert Team"
          subtitle="We're a group of passionate digital marketers dedicated to helping businesses grow."
          center
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="card overflow-hidden group"
            >
              <div className="relative overflow-hidden h-80">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                <p className="text-primary-600 mb-3">{member.position}</p>
                <p className="text-gray-600">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
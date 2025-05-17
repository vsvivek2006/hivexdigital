import SectionTitle from '../common/SectionTitle';

const teamMembers = [
  {
    name: 'Kritika Mehra',
    position: 'Logo Designer',
    bio: 'Specializes in creating memorable and brand-aligned logo designs for Indian startups.',
    image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    name: 'Ankit Yadav',
    position: 'Social Media Manager',
    bio: 'Manages Instagram and Facebook pages, building strong digital communities and engagement.',
    image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    name: 'Pooja Singh',
    position: 'Graphic Designer',
    bio: 'Delivers eye-catching creatives for ads, posts, and branding with a desi flair.',
    image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    name: 'Aarav Gupta',
    position: 'Content Marketing Lead',
    bio: 'Crafts compelling content and marketing strategies that resonate with Indian audiences.',
    image: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    name: 'Simran Kaur',
    position: 'Meta Ads Expert',
    bio: 'Runs high-performing Facebook and Instagram ad campaigns with sharp targeting.',
    image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    name: 'Rohan Desai',
    position: 'Google Ads Manager',
    bio: 'Certified Google Ads pro, known for scaling e-commerce and local business campaigns.',
    image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    name: 'Sneha Iyer',
    position: 'SEO Specialist',
    bio: 'Boosts organic rankings through technical SEO, link building, and local optimization.',
    image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    name: 'Deepak Nair',
    position: 'Blog Manager',
    bio: 'Publishes optimized blog content regularly to attract traffic and improve rankings.',
    image: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    name: 'Meenal Joshi',
    position: 'Web Designer & Developer',
    bio: 'Builds responsive, SEO-ready websites that are fast, secure, and elegant.',
    image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    name: 'Manish Kumar',
    position: 'App UI/UX Designer',
    bio: 'Designs smooth and functional app interfaces tailored for Indian user behavior.',
    image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    name: 'Neha Bhatia',
    position: 'Brand Strategist',
    bio: 'Delivers custom marketing & branding plans for businesses with niche requirements.',
    image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    name: 'Team Support',
    position: 'General Support & Services',
    bio: 'Our support team is always ready to assist you with any custom or miscellaneous needs.',
    image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
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
            <div key={index} className="card overflow-hidden group rounded-lg shadow-md">
              <div className="relative overflow-hidden h-80 rounded-t-lg">
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

import SectionTitle from '../common/SectionTitle';

const teamMembers = [
  {
    name: 'Kritika Mehra',
    position: 'Logo Designer',
    bio: 'Specializes in creating memorable and brand-aligned logo designs for Indian startups.',
    image: '/A1.webp',
  },
  {
    name: 'Saneha Gupta',
    position: 'Social Media Manager',
    bio: 'Manages Instagram and Facebook pages, building strong digital communities and engagement.',
    image: '/A2.avif',
  },
  {
    name: 'Aryan Mehta',
    position: 'Graphic Designer',
    bio: 'Delivers eye-catching creatives for ads, posts, and branding with a desi flair.',
    image: '/A3.avif',
  },
  {
    name: 'Aarav Gupta',
    position: 'Content Marketing Lead',
    bio: 'Crafts compelling content and marketing strategies that resonate with Indian audiences.',
    image: '/A4.avif',
  },
  {
    name: 'Himanshu Sharma',
    position: 'Meta Ads Expert',
    bio: 'Runs high-performing Facebook and Instagram ad campaigns with sharp targeting.',
    image: '/A5.jpg',
  },
  {
    name: 'Rohan Desai',
    position: 'Google Ads Manager',
    bio: 'Certified Google Ads pro, known for scaling e-commerce and local business campaigns.',
    image: '/A6.jpg',
  },
  {
    name: 'Saurabh Mathur',
    position: 'SEO Specialist',
    bio: 'Boosts organic rankings through technical SEO, link building, and local optimization.',
    image: '/A11.jpg',
  },
  {
    name: 'Deepak Nair',
    position: 'Blog Manager',
    bio: 'Publishes optimized blog content regularly to attract traffic and improve rankings.',
    image: '/A7.avif',
  },
  {
    name: 'Hemant Joshi',
    position: 'Web Designer & Developer',
    bio: 'Builds responsive, SEO-ready websites that are fast, secure, and elegant.',
    image: '/A8.jpg',
  },
  {
    name: 'Shankar Aryan',
    position: 'App UI/UX Designer',
    bio: 'Designs smooth and functional app interfaces tailored for Indian user behavior.',
    image: '/A9.jpg',
  },
  {
    name: 'Raunak Singh',
    position: 'Brand Strategist',
    bio: 'Delivers custom marketing & branding plans for businesses with niche requirements.',
    image: '/A10.jpg',
  },
  {
    name: 'Team Support',
    position: 'General Support & Services',
    bio: 'Our support team is always ready to assist you with any custom or miscellaneous needs.',
    image: '/A12.jpg',
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

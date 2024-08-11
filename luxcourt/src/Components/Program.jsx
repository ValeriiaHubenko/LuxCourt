import Card from "./Card";

const Program = () => {
  const cards = [
    {
      id: "1",
      title: "Private coaching",
      imgSrc: "/src/images/richard-unsplash 1.jpg",
      text: "Experience one-on-one coaching tailored to your personal needs. Perfect for those looking to improve their skills rapidly.",
      details: {
        price: "$50 per hour",
        ageGroup: "All ages",
        trainer: "John Doe",
        description:
          "Private coaching offers personalized training sessions tailored to your individual needs and skill level. Perfect for all ages. Whether you are a beginner looking to learn the basics or an advanced player aiming to refine your technique, our experienced coach, John Doe, will provide focused and effective training. Sessions include in-depth analysis of your game, customized drills, and strategic advice to help you reach your full potential.",
      },
    },
    {
      id: "2",
      title: "Group lessons",
      imgSrc: "/src/images/j-schiemann-Z4Sxy1_3wdY-unsplash.jpg",
      text: "Join a group of peers and enjoy learning tennis in a fun and social environment. Great for making new friends and improving together.",
      details: {
        price: "$30 per session",
        ageGroup: "Ages 10-18",
        trainer: "Jane Smith",
        description:
          "Group lessons provide a fun and interactive environment for learning tennis. Suitable for ages 10-18. These sessions are designed to foster teamwork and camaraderie while helping each participant improve their skills. Led by our skilled instructor, Jane Smith, the lessons include group drills, match play, and cooperative exercises. Group lessons are perfect for young players who want to enjoy the sport while developing their abilities and building lasting friendships.",
      },
    },
    {
      id: "3",
      title: "Tournaments",
      imgSrc: "/src/images/christian-tenguan-RNiK93wcz-U-unsplash.jpg",
      text: "Compete in our organized tournaments to test your skills against others and win exciting prizes. Open to all skill levels.",
      details: {
        price: "Varies",
        ageGroup: "All ages",
        trainer: "Various Coaches",
        description:
          "Participate in tournaments to test your skills against other players. Open to all ages with varying entry fees. Our tournaments offer a competitive yet friendly environment where players can showcase their talents and gain valuable match experience. With categories for different age groups and skill levels, everyone has a chance to compete and succeed. Our tournaments are overseen by a team of experienced coaches who ensure fair play and provide feedback to help participants improve. Join us for an exciting opportunity to challenge yourself and earn recognition.",
      },
    },
  ];

  return (
    <section id="programs">
      <section className="pb-lg-2 text-center bg-light pt-lg-4 pt-sm-3 component-container">
        <div className="row mt-5">
          <div>
            <h1 className="fw-bold">
              Our Programs
            </h1>
            <p className="text-dark mx-sm-5 fs-4 lh-sm">
              Discover tailored programs designed to enhance your tennis skills
              and elevate your game.
            </p>
          </div>
        </div>
      </section>

      <div className="album pb-5 mb-5 bg-light ">
        <div className="container">
          <div className="d-flex row row-cols-sm-1 row-cols-md-3 g-4 mb-lg-5 pt-lg-3 pt-sm-2 mb-sm-4">
            {cards.map((card) => (
              <div
                key={card.id}
                className="col"
                style={{ transitionDelay: `${card.id * 0.3}s` }}
              >
                <Card
                  title={card.title}
                  imgSrc={card.imgSrc}
                  text={card.text}
                  details={card.details}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Program;

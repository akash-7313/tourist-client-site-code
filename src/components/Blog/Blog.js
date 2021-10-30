import React from "react";
import img1 from "../../images/blog/beloon.jpg";
import img2 from "../../images/blog/kenya-warriors.jpg";
import img3 from "../../images/blog/buddhist-parade-cambodia.jpg";
import img4 from "../../images/blog/adventure.jpg";

const Blog = () => {
  return (
    <div className="container my-5">
      <div>
        <h1 className="text-danger fw-bold mb-4">
          7 Powerful Reasons Why People Love to Travel
        </h1>
        <h5 className="text-success">By: Betsy Goldberg</h5>
        <p className="text-secondary">April 4, 2016</p>
        <p className="fw-bold text-danger mb-4">
          <i className="fas fa-heart"></i> Love This
        </p>
        <button className="btn btn-sm btn-danger fw-bold rounded-0 px-3 mb-5 me-3">
          Real Travelers
        </button>
        <button className="btn btn-sm btn-danger fw-bold rounded-0 px-3 mb-5">
          Travel Tips
        </button>
        <img src={img1} className="img-fluid w-100" alt="" />
        <p className="mt-2">
          <small>Soaring above it all in Cappadocia, Turkey.</small>
        </p>
      </div>
      <div className="mt-5">
        <h4 className="fs-3 text-success">
          Which of these travel motivators rings true for you?
        </h4>
        <p className="mt-3">
          Why do people leave their homes and voyage all over the globe? The
          reasons why people love to travel are varied, and very personal.
        </p>
        <img src={img2} className="img-fluid w-100" alt="" />
        <p className="mt-3">
          One of the reasons why people love to travel: challenging themselves
          with new places, people, and experiences.
        </p>
      </div>
      <div>
        <h4 className="fs-3 text-success">1. Challenging yourself</h4>
        <p className="mt-3">
          You might feel like you’re stuck in a rut in your daily life. Or
          you’re yearning for something exciting and different. You’re craving
          new experiences and new challenges. Travel is the ideal place to test
          yourself. It pushes people to their limits and gets them outside their
          comfort zone. You’ll discover how resourceful you are when you’re
          exposed to new places, people and experiences.{" "}
        </p>
      </div>
      <div>
        <h4 className="fs-3 text-success">2. Learning</h4>
        <p className="mt-3">
          People may travel to learn something specific: a new language, a new
          cuisine, aspects of a different culture, or a deeper appreciation of
          faith or spirituality. As a bonus, they’ll take away more than their
          specific goal. They’ll discover totally different ways of doing
          things.
        </p>
        <img src={img3} className="img-fluid w-100" alt="" />
        <p className="mt-3">
          By being exposed to new places, people and cultures, you’ll develop a
          wider world view.
        </p>
      </div>
      <div>
        <h4 className="fs-3 text-success">3. Expanding your perspective</h4>
        <p className="mt-3">
          You can’t imagine how different life is in another place until you see
          for yourself. Everything from work to family to beliefs to interests
          is not what you might expect from your own experience. The different
          setting will also help you discover and consider fresh ideas you
          hadn’t thought of before. You’ll come home with different notions and
          possibilities.
        </p>
      </div>
      <div>
        <h4 className="fs-3 text-success">4. Getting in touch with yourself</h4>
        <p className="mt-3">
          Getting away from home gives you the opportunity to reflect on your
          life. You have the needed time and space to let your mind wander and
          take stock. Traveling is one of the best ways to learn more about
          yourself. Every day traveling brings a new set of issues and
          opportunities. The way you handle those also gives you insight into
          who you are. You’ll come home knowing yourself better, and with a
          fresh perspective on what you want out of life.{" "}
        </p>
      </div>
      <div>
        <h4 className="fs-3 text-success">5. Having an adventure</h4>
        <p className="mt-3">
          Conquering fresh territory is exhilarating - and one more reason why
          people love to travel. Humans crave new experiences and travel lets us
          tap into that craving. A trip is the perfect time to do something
          different and exciting, especially something you can’t do at home.{" "}
        </p>
        <img src={img4} className="img-fluid" alt="" />
      </div>
      <div className="mt-4">
        <h4 className="fs-3 text-success">6. Escaping</h4>
        <p className="mt-3">
          Travel is particularly helpful for workaholics who have trouble
          leaving their job behind. Stepping away from the workplace is good for
          you both mentally and physically. When you return to the job, you’ll
          have had the space to look at issues with fresh eyes. Travel has the
          power to let you not only escape but also heal. A new place with lots
          of fun distractions can work wonders. You’ll return home more at peace
          with yourself and your challenging situations.
        </p>
      </div>
      <div>
        <h4 className="fs-3 text-success">7. Relaxing and rejuvenating</h4>
        <p className="mt-3">
          You may not realize how much you need to disconnect from the
          ever-present pressure of being available by phone, email or social
          media. A restful vacation is just what you need to renew yourself. In
          this year’s Virtuoso Luxe Report, 44 percent of respondents named this
          as a reason why people love to travel. A relaxing natural setting and
          good weather are common ingredients for the R&R-focused trip.{" "}
        </p>
      </div>
      <div>
        <h3 className="fs-2 text-success">
          Want more reasons why people love to travel?
        </h3>
        <p className="mt-3">
          If you're searching for reasons to travel, now's the time to partner
          with an expert. Head to our interactive catalog to find a Virtuoso
          travel advisor. Any advisor you select will be happy to talk about the
          benefits of travel with you, help you discover your personal why, and
          design a trip that achieves everything you want. Which of these
          reasons why people love to travel resonates most with you? Or do you
          have another motivator? Please share your thoughts!
        </p>
      </div>
    </div>
  );
};

export default Blog;

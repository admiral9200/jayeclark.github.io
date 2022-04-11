<script setup lang="ts">
import { RouterLink } from "vue-router";
</script>

<template>
  <div class="about-wrapper">
    <div class="title">
      <h1 id="video">About Me</h1>
      <p>
        I'm a Harvard-educated software engineer with strong communication
        skills and experience in teaching & mentorship.
      </p>
    </div>

    <!-- VIDEO -->
    <div style="display: flex; justify-content: center; margin: 40px">
      <img src="@/assets/profile.jpg" style="max-width: 400px" />
    </div>

    <!-- ABOUT-CONTENT -->
    <div id="story">&nbsp;</div>
    <div class="about-content" style="margin: 0px 0px 70px 0px"></div>
    <div class="about-content">
      <span style="text-align: center">
        <hr style="width: 60%" />
        <h2 style="padding-bottom: 40px">My Story</h2>
      </span>
      <p></p>
      <p>
        I'm a career-transitioning full stack SWE focusing on React, Express &
        Node.js. I’ve contributed code to 80+ Open Source Software projects, and
        am completing professional certificates in Data Science and Machine
        Learning to round out my full-stack training.
      </p>
      <p>
        The small business I worked for closed three months into the pandemic. I
        reflected on my past roles and realized I'd gravitated toward software
        development projects in each, even though that hadn't been my primary
        role to begin with. I realized I'd felt most fulfilled (and most useful)
        applying technology to solve business problems.
      </p>

      <p>
        Seven years of being a self-taught, part-time solo developer left me
        with some serious knowledge gaps! I rented out my house, hit the road as
        a digital nomad (new experiences are the PERFECT backdrop for learning),
        and embarked on a 12-month training program of self-study and
        self-improvement accompanied by four professional certificates: Intro to
        Computer Science, Full-stack Web Development, Data Science, and Machine
        Learning.
      </p>

      <p>
        My previous experience includes co-founding and running a talent
        management business for gaming content creators, working in management
        consulting, teaching at Harvard & MIT, and internships at a nonprofit
        biotech and a software startup. I received my AB magna cum laude from
        Harvard, where my thesis on internet culture was nominated for a Hoopes
        Prize.
      </p>

      <p>
        In my spare time, I enjoy traveling, cooking, and amateur food
        photography. I spend a lot of my free time exercising - I'm working very
        hard at shedding weight gained after the one-two punch of a back injury
        and the the pandemic. I also volunteer for my neighborhood cat rescue
        organization both on the tech front (improving their website to raise
        more funds) and by fostering feral kittens to make them adopable (they
        and their adorable toebeans are frequent guest stars on my Zoom calls),
        and cultivating my amateur chef & photographer skills.
      </p>
    </div>

    <!-- CONTACT CARD -->
    <div
      id="bottom-contact-card"
      class="contact card-white"
      style="margin-bottom: 80px; margin-top: 60px"
    >
      <div class="card-container">
        <div class="card-content offset-small">
          <h2>Hire me</h2>
          <p>
            I'm looking for full-time W2 or 1099 employment. If you think I may
            be a good fit, let's talk about a possible role for me on your team.
          </p>
          <RouterLink to="/contact">
            <div class="btn btn-primary">Get in touch</div>
          </RouterLink>
        </div>
        <div class="card-image-bottom">
          <img
            src="@/assets/hireme.png"
            style="max-width: 100%"
            id="contact-img-1"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.about-wrapper {
  margin: 40px calc(9% - 16px);
}

.title h1,
.title p {
  text-align: center;
}
.video {
  max-width: 800px;
  margin: 40px auto;
}
</style>

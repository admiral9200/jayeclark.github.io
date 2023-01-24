<script setup lang="ts">
import { RouterLink } from "vue-router";
</script>
<script lang="ts">
export default {
  computed: {
    monthsOfTenure(): number {
      const eightMonthsTenure = new Date(2023, 2, 1);
      const sevenMonthsTenure = new Date(2023, 1, 1);
      const now = new Date(Date.now());
      if (now.getTime() > eightMonthsTenure.getTime()) {
        return 8;
      }
      if (now.getTime() > sevenMonthsTenure.getTime()) {
        return 7;
      }
      return 6;
    },
  },
};
</script>

<template>
  <div class="about-wrapper">
    <div class="title">
      <h1 id="video">About Me</h1>
      <p>
        I'm a Harvard-educated software engineer with strong verbal & written
        communication skills and experience in teaching & mentorship.
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
        I'm a full stack SWE working in Java & Kotlin on the backend and React
        on the frontend, with a strong DevOps skillset in CI/CD pipelines and
        infrastructure as code. I'm currently employed at Amazon, but my team's
        engineering resources were cut in half in the recent layoffs, and I'm
        searching for a new role. In {{ monthsOfTenure }} short months on my
        current team, I've:
      </p>
      <ul>
        <li>merged 136 pull requests (100,000 lines of code changed)</li>
        <li>resolved 471 issues</li>
        <li>
          upgraded & modernized the architecture of 14 microservices using AWS
          CDK
        </li>
        <li>
          written documentation and conducted training on handling critical
          customer-impacting on-call tickets
        </li>
        <li>reduced CI/CD blockage rates by 60%</li>
      </ul>
      <p>
        Outside of work, I’ve contributed code to 80+ Open Source Software
        projects and am a maintainer and volunteer mentor on one project.
      </p>
      <p>
        I didn't start off with software engineering as my goal. But in every
        job, from academia to real estate development to management consulting &
        entrepreneurship, software development work found and fascinated me. In
        grad school, while teaching at Harvard & MIT, I built a content
        management system. As a management consultant, I built & deployed a
        mission-critical real-time GPS tracking and dispatch app for an airport
        shuttle collective. As an executive and acting CTO at a startup, I
        became an individual contributor after-hours, and built a machine
        learning-driven talent management platform that resulted in my company
        being profiled in The New Yorker's 2017 tech issue. No matter what I
        did, I was constantly solving tough business problems through software
        engineering.
      </p>
      <p>
        From 2015 to 2020, I served as COO & acting CTO of a bootstrapped
        startup that provided talent management services for professional
        videogame content creators at Twitch, YouTube, Facebook, and Beam
        (Microsoft). I ran a small 3-person tech team, was the sole developer
        working on the systems that drove our business and processed our
        clients' sponsorship payments, and played a product management role on
        our data ingestion pipeline and viewership analytics platform.
      </p>
      <p>
        That startup unfortunately failed three months into the pandemic. When
        the dust settled, I realized I was no longer willing to have software
        development be just an 'after hours' project - mostly because the after
        hours project had grown into an entire second job! I needed software
        development to be my day to day.
      </p>
      <p>
        Being a self-taught developer without a mentor had left me with some
        knowledge gaps! While I was capable of complex tasks that bordered on
        'Senior Developer' territory (like productionizing a machine learning
        model to predict ideal rates to charge for sponsored content), my lack
        of formal training in CS was apparent. I packed up my belongings, hit
        the road as a digital nomad, and embarked on a 15-month training program
        of self-study and self-improvement accompanied by coursework for three
        professional certificates: Full-stack Web Development with MERN, Data
        Science, and Machine Learning, Modeling & Simulation.
      </p>
      <p>
        My plan worked, and in 2022 I landed a role on a machine learning and
        telemetry oriented data team in the Amazon Physical Stores org. Though
        my role was eliminated as part of a reduction in force, I'm grateful for
        the work I was able to do and the software & systems I was able to
        improve during my brief time on the team, and I'm looking forward to
        finding the next team where I can contribute my talents and enthusiasm.
      </p>
      <p>
        In my spare time, I enjoy traveling (mainly to Puerto Rico and Venice),
        cooking, and amateur food photography. I volunteer for a San Juan,
        Puerto Rico based cat rescue organization both on the tech front
        (improving their website to raise more funds) and by fostering feral
        kittens to make them adopable (they and their adorable toebeans are
        frequent guest stars on my conference calls). I'm based in San Diego but
        travel often to Seattle, San Franscisco, New York, and Boston.
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

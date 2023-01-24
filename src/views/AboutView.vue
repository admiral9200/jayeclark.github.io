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
      <hr />
      <p>
        I didn't start off with software engineering as my goal. But in every
        job - academia, real estate development, management consulting,
        entrepreneurship - software engineering work found and fascinated me.
        Whenever I faced a tough business problem, software engineering was how
        I solved it.
      </p>
      <br />
      <p>
        In grad school, while teaching at Harvard & MIT, I built a content
        management system. As a management consultant, I built & deployed a
        mission-critical real-time GPS tracking and dispatch app for an airport
        shuttle collective.
      </p>
      <br />
      <p>
        From 2015 to 2020, I served as COO & acting CTO of a bootstrapped
        startup that provided talent management services for professional
        videogame content creators. I ran a small tech team and served as a
        product manager for our data ingestion pieline and viewership analytics
        platform. I was also the sole developer working on building a machine
        learning-driven talent management system on top of our analytics
        platform. Our unique tech-driven approach to content creator talent
        management was profiled in The New Yorker's 2017 tech issue.
      </p>
      <br />
      <p>
        Unfortunately, that startup failed three months into the pandemic. When
        the dust settled, I realized I was no longer willing to have software
        development be just a neat 'after hours' project - mostly because the
        after hours project had grown into an entire second job! I needed
        software engineering to be my day to day.
      </p>
      <br />
      <p>
        I was a self-taught developer with no mentor. That had left me with some
        knowledge gaps that I needed to fill if I wanted to commit seriously to
        engineering excellence. I packed up my belongings, hit the road as a
        digital nomad, and embarked on a 15-month program of self-study and
        self-improvement, accompanied by coursework for three professional
        certificates: Full-stack Web Development with MERN, Data Science, and
        Machine Learning, Modeling & Simulation.
      </p>
      <br />
      <p>
        My plan worked, and in 2022 I landed a role on a machine learning and
        telemetry oriented data team in the Amazon Physical Stores org. Though
        my role was eliminated as part of a reduction in force, I'm grateful for
        the work I was able to do and the software & systems I was able to
        improve during my brief time on the team, and I'm looking forward to
        finding the next team where I can contribute my talents and enthusiasm.
      </p>
      <br />
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

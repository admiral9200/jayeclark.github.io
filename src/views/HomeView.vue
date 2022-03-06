<script setup lang="ts">
import LandingSection from "@/components/sections/LandingSection.vue";
import PrimaryStackSection from "@/components/sections/PrimaryStackSection.vue";
import CardWithShadowVue from "@/components/ui/CardWithShadow.vue";
import TransparentStripVue from "@/components/ui/TransparentStrip.vue";
import ProjectsOverviewVue from "@/components/sections/ProjectsOverview.vue";
</script>

<template>
  <main>
    <div>
      <LandingSection />
    </div>
    <div>
      <PrimaryStackSection />
    </div>
    <div style="margin-bottom: 60px">
      <CardWithShadowVue
        :title="`Get to know me`"
        :paragraphs="[
          `I'm a Harvard-educated professional with strong communication skills and
        experience in mentorship and teaching.`,
          `I learn quickly, accept constructive feedback gratefully, and share knowledge 
        freely with peers who need assistance.`,
          `I care deeply about diversity & inclusion, decolonization, and transgender rights.`,
        ]"
        :buttons="[
          {
            text: `Read my bio`,
            url: `about#story`,
            classList: `btn btn-primary`,
          },
          {
            text: `Watch my video intro`,
            url: `about#video`,
            classList: `btn btn-default`,
          },
        ]"
        :imageUrl="`/images/person.png`"
        :textLeft="true"
        :offsetUp="true"
      />
    </div>
    <div style="margin-bottom: 40px">
      <TransparentStripVue
        :title="`Github`"
        :subtitle="`Applying best practices`"
        :paragraphs="[
          `<p>I've used git and GitHub from the start of my training to build
        expertise in pull requests, resolving merge conflicts, and posting clean
        commits. I recently completed an
        <a
          href='https://github.com/jayeclark/jayeclark/blob/main/opensourcechallenge.md'
          target='_blank'
          >Open Source Challenge</a
        >
        to submit 100 open source software pull requests in 100 days, which
        significantly expanded my git and GitHub experience.</p>`,
        ]"
        :buttons="[
          {
            text: `Go to my GitHub`,
            url: `https://github.com/jayeclark/`,
            classList: `btn btn-primary`,
          },
        ]"
        :textLeft="false"
        :image-url="`/images/github.png`"
      />
    </div>
    <div style="margin-bottom: 120px; height: max-content">
      <TransparentStripVue
        :title="`Codewars`"
        :subtitle="`Coding Challenges`"
        :paragraphs="[
          `<p>I train regularly on Codewars, completing as many kata as possible in a
        1-2 hour time frame. I've achieved a rank of 3 kyu in Javascript, which
        reflects a 'highly competent' skill level, and I rank among the top 1.4%
        of developers on the site.</p>`,
        ]"
        :buttons="[
          {
            text: `Go to my profile`,
            url: `https://www.codewars.com/users/jayclark`,
            classList: `btn btn-primary`,
          },
        ]"
        :textLeft="true"
        :image-url="`/images/codewars.png`"
      />
    </div>

    <ProjectsOverviewVue />

    <!-- TRAINING PLAN-->
    <div class="training">
      <span style="text-align: center"><h6>My Training Plan</h6></span>
      <div class="imageline">
        <div class="logo card-white training-card">
          <h4 id="fullStackCert-title">
            MIT Full Stack Development Certificate
          </h4>
          <p class="project-description">
            I've completed the a Professional Certificate in Full Stack
            Development with MERN with MIT xPro. This 32-week program covers web
            development, javascript,front-end development with React, and
            back-end development with Express, MongoDB and Node.js.
          </p>
          &nbsp;
          <div class="progress" style="width: 100%">
            <div
              id="fullStackCert-progress"
              class="progress-bar"
              role="progressbar"
              aria-valuenow="1"
              aria-valuemin="0"
              aria-valuemax="100"
              style="width: 1%"
            >
              <span class="sr-only">1% Complete</span>
            </div>
          </div>
        </div>
        <div class="logo card-white training-card">
          <h4 id="cs50-title">Harvard CS50</h4>
          <p class="project-description">
            I'm completing Harvard's
            <a
              href="https://online-learning.harvard.edu/course/cs50-introduction-computer-science?delta=0"
              target="_blank"
              >CS50</a
            >
            - a course I regret not having taken as an undergrad. This 10-week
            course with paid certificate option covers more theoretical and
            foundational computer science concepts than those addressed by the
            MIT certificate. The primary languages are C and Python.
          </p>
          &nbsp;
          <div class="progress" style="width: 100%">
            <div
              id="cs50-progress"
              class="progress-bar"
              role="progressbar"
              aria-valuenow="1"
              aria-valuemin="0"
              aria-valuemax="100"
              style="width: 1%"
            >
              <span class="sr-only">1% Complete</span>
            </div>
          </div>
        </div>
        <div class="logo card-white training-card">
          <h4 id="dataScienceCert-title">Harvard Data Science Certificate</h4>
          <p class="project-description">
            I'm completing a nine-course, probability & statistics-focused
            <a
              href="https://www.edx.org/professional-certificate/harvardx-data-science"
              target="_blank"
              >Data Science Certificate</a
            >
            through Harvard's eduX program. The primary language used in this
            course is R.
          </p>
          &nbsp;
          <div class="progress" style="width: 100%">
            <div
              id="dataScienceCert-progress"
              class="progress-bar"
              role="progressbar"
              aria-valuenow="1"
              aria-valuemin="0"
              aria-valuemax="100"
              style="width: 1%"
            >
              <span class="sr-only">1% Complete</span>
            </div>
          </div>
        </div>
      </div>
      <div class="imageline">
        <div class="logo card-white training-card">
          <h4 id="machineLearningCert-title">
            MIT Machine Learning Certificate
          </h4>
          <p class="project-description">
            I'm completing a math-intensive machine learning certificate with
            MIT xPro. This 10-week program will help me brush up on linear
            algebra, multivariable calculus, and discrete mathematics while
            applying those skills to modern computational engineering problems.
          </p>
          &nbsp;
          <div class="progress" style="width: 100%">
            <div
              id="machineLearningCert-progress"
              class="progress-bar"
              role="progressbar"
              aria-valuenow="1"
              aria-valuemin="0"
              aria-valuemax="100"
              style="width: 1%"
            >
              <span class="sr-only">1% Complete</span>
            </div>
          </div>
        </div>
        <div class="logo card-white training-card">
          <h4 id="openSource-title">Open Source Courses</h4>
          <p class="project-description">
            To supplement my paid coursework, and cover education content
            similar to that involved in completing an undergraduate degree in
            CS, I'm taking Berkeley's
            <a
              href="https://inst.eecs.berkeley.edu/~cs61a/sp20/"
              target="_blank"
              >CS61A</a
            >,
            <a href="https://sp21.datastructur.es/" target="_blank">CS61B</a>,
            and
            <a
              href="https://inst.eecs.berkeley.edu/~cs61c/fa19/"
              target="_blank"
              >CS61C</a
            >, and Princeton's
            <a href="https://algs4.cs.princeton.edu/home/" target="_blank"
              >Algorithms</a
            >.
          </p>
          &nbsp;
          <div class="progress" style="width: 100%">
            <div
              id="openSource-progress"
              class="progress-bar"
              role="progressbar"
              aria-valuenow="1"
              aria-valuemin="0"
              aria-valuemax="100"
              style="width: 1%"
            >
              <span class="sr-only">1% Complete</span>
            </div>
          </div>
        </div>
        <div class="logo card-white training-card">
          <h4 id="leetCode-title">Competitive Programming</h4>
          <p class="project-description">
            I train regularly on Codewars, focusing on speed, simplicity, and
            readability. As I move into the active job search phase, I'll be
            shifting my focus to LeetCode and participating in LeetCode
            competitions.
          </p>
          &nbsp;
          <div class="progress" style="width: 100%">
            <div
              id="leetCode-progress"
              class="progress-bar"
              role="progressbar"
              aria-valuenow="1"
              aria-valuemin="0"
              aria-valuemax="100"
              style="width: 1%"
            >
              <span class="sr-only">1% Complete</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- CONTACT CARD -->
    <div id="bottom-contact-card" class="contact card-white">
      <div class="card-container">
        <div class="card-content offset-small">
          <h2>Hire me</h2>
          <p>
            I'm looking for full-time W2 or 1099 employment. I'm also available
            on a volunteer basis for Civic Tech and Open Source Software
            projects.
          </p>
          <p>Let's talk about a possible role for me on your team.</p>
          <a href="contact.html" class="btn btn-primary">Get in touch</a>
        </div>
        <div class="card-image-bottom">
          <img src="./images/hireme.png" width="100%" id="contact-img-1" />
        </div>
      </div>
    </div>
  </main>
</template>

<style>
main {
  margin: 0px 9%;
}

@media only screen and (max-width: 1000) {
  .open-source-projects > .card-white {
    flex-wrap: wrap;
  }

  .open-source-projects > .card-white > .card-content {
    min-width: 400px;
  }
}
</style>

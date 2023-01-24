<script setup lang="ts">
import { RouterLink } from "vue-router";
import LandingSection from "@/components/sections/LandingSection.vue";
import FullWidthLogoDisplayWithTitle from "@/components/ui/FullWidthLogoDisplayWithTitle.vue";
import SecondaryStackSection from "@/components/sections/secondarystack/SecondaryStackSection.vue";
import CardWithShadowVue from "@/components/ui/CardWithShadow.vue";
import TransparentStripVue from "@/components/ui/TransparentStrip.vue";
import ProjectsOverviewVue from "@/components/sections/ProjectsOverview.vue";
import { computed } from "vue";

const cardsToDisplay = computed(() =>
  Math.floor((window.innerWidth * 0.82 - 20) / 170)
);
</script>

<template>
  <main>
    <div>
      <LandingSection />
    </div>
    <div>
      <FullWidthLogoDisplayWithTitle
        :title="`Primary Languages`"
        :logos="[
          { fileName: 'java.png', alt: 'Java' },
          { fileName: 'typescript.png', alt: 'Typescript' },
          { fileName: 'kotlin.png', alt: 'Kotlin' },
          { fileName: 'python.png', alt: 'Python' },
        ]"
      />
    </div>
    <div style="margin-bottom: 60px">
      <CardWithShadowVue
        :title="`Get to know me`"
        :paragraphs="[
          `I'm a Harvard-educated professional with strong communication skills, top tier writing abilities, and
        experience in mentorship, teaching, and training.`,
          `I ramp up quickly on new projects, accept constructive feedback gratefully, adapt rapidly, and share knowledge 
        freely with peers. `,
          `I have a talent for CI/CD debugging, machine learning engineering, and orchestrating complex, interconnected tech stack upgrades. I have six years of professional software development experience, five in back-end and one in full-stack.`,
        ]"
        :buttons="[
          {
            text: `Read more`,
            url: `about#story`,
            classList: `btn btn-primary`,
          },
        ]"
        :imageUrl="`person.png`"
        :textLeft="true"
        :offsetUp="true"
      />
    </div>
    <div style="margin-bottom: 40px">
      <TransparentStripVue
        :title="`Github`"
        :subtitle="`Modeling best practices`"
        :paragraphs="[
          `<p>I've contributed to more than 80 open source software projects, including some of the main languages & libraries
        that I use in my personal projects. I'm a maintainer
        on an educationally-oriented OSS project developing a social media platform for software development training & self-improvement.
        I work to mentor a small group of volunteer developers as they learn best practices in writing clean code, raising & revising pull
        requests, and navigating the CI/CD approval process. In 2021 I completed an 
        <a
          href='https://github.com/jayeclark/jayeclark/blob/main/opensourcechallenge.md'
          target='_blank'
          >Open Source Challenge</a
        >
        to submit 100 non-trivial open source software pull requests in 100 days.</p>`,
        ]"
        :buttons="[
          {
            text: `Go to my GitHub`,
            url: `https://github.com/jayeclark/`,
            classList: `btn btn-primary`,
          },
        ]"
        :textLeft="false"
        :imageUrl="`github-hero.png`"
      />
    </div>
    <div style="margin-bottom: 120px; height: max-content">
      <TransparentStripVue
        :title="`Codewars`"
        :subtitle="`Code Dojo`"
        :paragraphs="[
          `<p>I train regularly on Codewars to keep my problem solving and language skills sharp. I've achieved a rank of 2 kyu in Javascript (proficient' skill level), and I rank in the top 1%
        of developers on the site. My favorite JS challenge has been building a regex that can determine if a binary number is divisible by seven. Deterministic finite automata FTW - it's a <a href='https://www.codewars.com/kata/56a73d2194505c29f600002d'>really fun problem</a> and I highly encourage taking a crack at it! I dabble
        a little in Leetcode as well, where a number of my solutions have beaten 100% of other submissions on speed (still working on getting
        that memory utilization down!)</p>`,
        ]"
        :buttons="[
          {
            text: `Go to my profile`,
            url: `https://www.codewars.com/users/jayclark`,
            classList: `btn btn-primary`,
          },
        ]"
        :textLeft="true"
        :imageUrl="`codewars.png`"
      />
    </div>

    <ProjectsOverviewVue />

    <div>
      <FullWidthLogoDisplayWithTitle
        :title="`Primary stack`"
        :logos="[
          { fileName: 'aws_small.png', alt: 'Amazon Web Services' },
          { fileName: 'mongodb.png', alt: 'Mongo DB' },
          { fileName: 'expressjs.png', alt: 'Express' },
          { fileName: 'react.png', alt: 'React' },
          { fileName: 'nodejs.png', alt: 'NodeJS' },
        ]"
      />
    </div>
    <div>
      <SecondaryStackSection :cardsToDisplay="cardsToDisplay" />
    </div>
    <div style="height: 82px"></div>
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
          <RouterLink to="/contact">
            <div class="btn btn-primary">Get in touch</div>
          </RouterLink>
        </div>
        <div class="card-image-bottom">
          <img
            src="@/assets/hireme.png"
            style="max-width: 100%"
            class="expanding-image"
          />
        </div>
      </div>
    </div>
  </main>
</template>

<style>
main {
  width: 82vw;
  margin: 0px 9%;
}

@media only screen and (max-width: 576px) {
  .card-image-bottom {
    transform: translate(0px, 0px) !important;
  }
}

@media only screen and (max-width: 1000px) {
  .open-source-projects > .card-white {
    flex-wrap: wrap;
  }

  .open-source-projects > .card-white > .card-content {
    min-width: 400px;
  }
}
</style>

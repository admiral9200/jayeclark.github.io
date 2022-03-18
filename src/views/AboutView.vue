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
    <div class="video">
      <div class="video-container">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/pNaepLSho48"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
      <div id="story"></div>
    </div>

    <!-- ABOUT-CONTENT -->
    <div class="about-content" style="margin: 0px 0px 90px 0px"></div>
    <div class="about-content">
      <span style="text-align: center">
        <hr style="width: 60%" />
        <h2 style="padding-bottom: 40px">My Story</h2>
      </span>
      <p></p>
      <p>
        When the pandemic put my small business executive job on pause, I
        reflected on my past roles and realized none had been quite the right
        fit. I started to give serious, deep thought to what that 'right' type
        of work might be, and realized I'd felt most fulfilled (and most useful)
        applying technology to solve business problems.
      </p>

      <p>
        In May 2021, I took the humbling step of completely rebooting my career,
        starting over from scratch as a software engineer.
      </p>

      <p>
        My previous experience includes co-founding and running a talent
        management business for gaming content creators, working in management
        consulting, and internships at a nonprofit biotech and a software
        startup. I received my AB <i>magna cum laude</i> from Harvard, where my
        thesis on internet culture was nominated for a Hoopes Prize.
      </p>

      <p>
        In my spare time, I enjoy traveling, assembling IKEA furniture, Bikram
        yoga, and the culinary arts. You can see some of my culinary plating
        ventures on my hobby
        <a href="https://www.instagram.com/jennbot3000/" target="_blank"
          >Instagram</a
        >
        account. I collect silvestre Mezcals (made from wild harvested agave)
        and obscure worm salts to accompany them. I've never lived more than 10
        minutes from the ocean.
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

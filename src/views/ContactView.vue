<script lang="js">

import emailjs from '@emailjs/browser';

export default {
  methods: {
    sendEmail() {
      emailjs.sendForm('service_p5qd7wt', 'template_5dbp12j', this.$refs.form, 'user_UP4JSX06bSO1AlwW13SGc')
        .then(() => {() => {
            alert(
              "Thank you for reaching out! I'll be in touch shortly regarding your inquiry."
            );
            document.getElementById("contact_name").value = "";
            document.getElementById("contact_email").value = "";
            document.getElementById("contact_message").value = "";
            document.getElementById("contact_number").value =
              (Math.random() * 100000) | 0;
          };
        }, () => {
          alert(
              "Unfortunately, there was a problem submitting your message - please try again later or use one of the other listed contact methods!"
            );
        });
    }
  }
}
</script>

<template>
  <div class="contact-wrapper">
    <div class="contact-card">
      <div
        class="contact-content"
        style="
          padding-top: 70px;
          min-height: calc(100vh - 250px);
          width: max-content;
        "
      >
        <h2>Let's get in touch</h2>
        <p>Explore the future with me.</p>
        <a href="mailto:jay@jayeclark.dev" class="btn btn-default">Email Me</a>
        <a
          href="https://www.linkedin.com/in/jayeclark/"
          class="btn btn-default"
          target="_blank"
          >Connect on LinkedIn</a
        >
        <div style="margin-top: 20px; min-width: 40vw">
          Or submit your contact details here:
          <form
            id="contact-form"
            ref="form"
            style="padding: 10px 0px"
            @submit.prevent="sendEmail"
          >
            <input id="contact_number" type="hidden" name="contact_number" />
            <input
              id="contact_name"
              style="
                width: 100%;
                max-width: 400px;
                margin: 5px 0px;
                padding: 5px;
              "
              placeholder="Name"
              type="text"
              name="from_name"
            /><br />
            <input
              id="contact_email"
              style="
                width: 100%;
                max-width: 400px;
                margin: 5px 0px;
                padding: 5px;
              "
              placeholder="Email"
              type="email"
              name="from_email"
            /><br />
            <textarea
              id="contact_message"
              style="
                width: 100%;
                max-width: 400px;
                margin: 5px 0px;
                padding: 5px;
                height: 80px;
              "
              placeholder="Message"
              name="message"
            ></textarea
            ><br />
            <input
              class="btn btn-primary"
              style="width: 120px; margin: 10px 0px 10px calc(100% - 120px)"
              type="submit"
              value="Send"
            />
          </form>
        </div>
      </div>

      <!-- PHOTO -->
      <div class="contact-photo">
        <img src="@/assets/images/hireme.png" style="max-width: 100%" />
      </div>
    </div>
  </div>
</template>

<style>
main {
  margin: 0px 9%;
}
.contact-wrapper {
  width: 100%;
  padding: 0px calc(9%);
}
.contact-card {
  display: flex;
  flex-direction: row-reverse;
  justify-content: center;
  flex-wrap: nowrap;
}
.contact-photo,
.contact-content {
  margin: 0px 16px;
}

.contact-photo {
  max-width: 400px;
  display: flex;
  align-items: center;
}

#contact-form {
  max-width: 400px;
}

@media only screen and (max-width: 796px) {
  .contact-card {
    flex-wrap: wrap;
  }
}
</style>

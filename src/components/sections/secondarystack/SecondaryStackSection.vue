<script lang="js">
import { stack } from "@/scripts/technologies";
import { nextTick } from "vue";
import ImageLockup from "./ImageLockup.vue";
export default {
    name: "SecondaryStackSection",
    props: ['cardsToDisplay'],
    data() {
        return {
            technologies: stack,
            startingCard: 0,
            cardWidth: 170,
            imgHeight: 100,
            ribbonHeight: 135,
            arrowWidth: 20,
            scrollInProgress: false,
            ratings: [0, 1, 2, 3],
            beforeStart: stack.length - this.cardsToDisplay,
            afterStart: this.cardsToDisplay,
        };
    },
    computed: {
        adjustedWidth() {
            console.log(this.cardsToDisplay);
            const availableWidth = window.innerWidth * 0.82 - this.arrowWidth * 2;
            const cardsToDisplay = Math.floor(availableWidth / this.cardWidth);
            return Math.floor(availableWidth / (cardsToDisplay * 10)) * 10;
        },
        techSlice() {
            const start = this.startingCard;
            const num = this.cardsToDisplay;
            const len = this.technologies.length;
            if (start + num > len) {
                return [...this.technologies.slice(start, len), ...this.technologies.slice(0, start + num - len)];
            }
            return this.technologies.slice(start, start + num);
        },
        beforeSlice() {
            const technologies = [];
            this.technologies.forEach(t => technologies.push({ ...t }));
            const num = this.cardsToDisplay;
            let newStart = this.beforeStart;
            const len = technologies.length;
            if (newStart + num > len) {
                return [...technologies.slice(newStart, len), ...technologies.slice(0, newStart + num - len)];
            }
            return technologies.slice(newStart, newStart + num);
        },
        afterSlice() {
            const technologies = [];
            this.technologies.forEach(t => technologies.push({ ...t }));
            const num = this.cardsToDisplay;
            let newStart = this.afterStart;;
            const len = technologies.length;
            if (newStart + num > len) {
                return [...this.technologies.slice(newStart, len), ...this.technologies.slice(0, newStart + num - len)];
            }
            return this.technologies.slice(newStart, newStart + num);
        }
    },
    methods: {
        setUpScroll(dir) {
            this.scrollInProgress = true;
            this.$refs.before.style.transition = "left 0.8s ease";
            this.$refs.current.style.transition = "left 0.8s ease";
            this.$refs.after.style.transition = "left 0.8s ease";
            const newBefore = dir === "left" ? "0px" : this.$refs.before.style.left;
            const newCurrent = dir === "left" ? `${this.cardsToDisplay * this.adjustedWidth}px` : `${-1 * this.cardsToDisplay * this.adjustedWidth}px`;
            const newAfter = dir === "left" ? this.$refs.after.style.left : "0px";
            return { newBefore, newCurrent, newAfter };
        },
        scroll(dir) {
            if (this.scrollInProgress)
                return;
            const positions = this.setUpScroll(dir);
            // Set new positions
            setTimeout(() => {
                this.$refs.before.style.left = positions.newBefore;
                this.$refs.current.style.left = positions.newCurrent;
                this.$refs.after.style.left = positions.newAfter;
            }, 20);
            // Set new state and reset transitions
            setTimeout(() => {
                this.$refs.before.style.transition = "opacity 100ms ease";
                this.$refs.current.style.transition = "";
                this.$refs.current.style.opacity = "0";
                this.$refs.after.style.transition = "opacity 100ms ease";
                this.scrollInProgress = false;

                // Set the current starting card and move the div back to 0px
                const [start, num, len] = [this.startingCard, this.cardsToDisplay, this.technologies.length];
                this.startingCard = dir === "left" ? (start - num < 0 ? start - num + len : start - num) : (start + num > len ? start + num - len : start + num);

                setTimeout(() => {
                  this.$refs.current.style.left = "0px";
                  this.$refs.current.style.opacity = "1";
                  this.$refs.before.style.opacity = "0";
                  this.$refs.after.style.opacity = "0";
                }, 20);
                setTimeout(() => {
                  this.beforeStart = this.startingCard - this.cardsToDisplay < 0 ? this.startingCard - this.cardsToDisplay + this.technologies.length : this.startingCard - this.cardsToDisplay;
                  this.afterStart = this.startingCard + this.cardsToDisplay > this.technologies.length ? this.startingCard + this.cardsToDisplay - this.technologies.length : this.startingCard + this.cardsToDisplay;
                }, 40);
                setTimeout(() => {
                  this.$refs.before.style.left = `${-1 * this.adjustedWidth * this.cardsToDisplay}px`;
                  this.$refs.after.style.left = `${this.adjustedWidth * this.cardsToDisplay}px`;
                  this.$refs.before.style.opacity = '1';
                  this.$refs.after.style.opacity = '1';
                }, 50);
            }, 800);
            // Reset positions
            //setTimeout(() => {
            //  this.$refs.before.style.left = `${-1 * this.adjustedWidth * this.cardsToDisplay}px`;
            //  this.$refs.current.style.left = "0px";
            //  this.$refs.after.style.left = `${this.adjustedWidth * this.cardsToDisplay}px`
            //}, 810)
        },
    },
    components: { ImageLockup }
}
</script>
<template>
  <div class="technologies" style="width: 100%">
    <hr />
    <span class="centered"><h6>Additional languages & skills</h6></span>

    <div class="ribbon-div">
      <div
        class="left-arrow"
        :style="{ width: `${arrowWidth}px`, height: `${ribbonHeight}px` }"
        @click="scroll('left')"
      >
        <img src="@/assets/chevron-left.svg" />
      </div>
      <div
        class="cards-container"
        :style="{
          width: `${adjustedWidth * cardsToDisplay}px`,
          height: `${ribbonHeight}px`,
        }"
      >
        <div
          class="cards-div tech-cards"
          ref="before"
          :style="{
            width: `${adjustedWidth * cardsToDisplay}px`,
            height: `${ribbonHeight}px`,
            left: `${-1 * adjustedWidth * cardsToDisplay}px`,
          }"
        >
          <ImageLockup
            v-for="(tech, index) in beforeSlice"
            :key="index"
            :refToSet="`before-${index}`"
            :ribbonHeight="ribbonHeight"
            :adjustedWidth="adjustedWidth"
            :imgHeight="imgHeight"
            :image="tech.url"
            :tech="{ ...tech }"
          ></ImageLockup>
        </div>
        <div
          class="cards-div tech-cards"
          ref="current"
          :style="{
            width: `${adjustedWidth * cardsToDisplay}px`,
          }"
        >
          <ImageLockup
            v-for="(tech, index) in techSlice"
            :key="index"
            :refToSet="`current-${index}`"
            :ribbonHeight="ribbonHeight"
            :adjustedWidth="adjustedWidth"
            :imgHeight="imgHeight"
            :image="tech.url"
            :tech="tech"
          ></ImageLockup>
        </div>
        <div
          class="cards-div tech-cards"
          ref="after"
          :style="{
            width: `${adjustedWidth * cardsToDisplay}px`,
            left: `${adjustedWidth * cardsToDisplay}px`,
          }"
        >
          <ImageLockup
            v-for="(tech, index) in afterSlice"
            :key="index"
            :refToSet="`after-${index}`"
            :ribbonHeight="ribbonHeight"
            :adjustedWidth="adjustedWidth"
            :imgHeight="imgHeight"
            :image="tech.url"
            :tech="tech"
          ></ImageLockup>
        </div>
      </div>
      <div
        class="right-arrow"
        :style="{ width: `${arrowWidth}px`, height: `${ribbonHeight}px` }"
        @click="scroll('right')"
      >
        <img src="@/assets/chevron-right.svg" />
      </div>
    </div>
  </div>
</template>

<style>
hr {
  width: 30%;
  border-bottom: 1px solid #ccc;
  margin: 40px auto 20px auto !important;
}
.ribbon-div {
  display: flex;
  width: 100%;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
}
.cards-container {
  display: flex;
  overflow: hidden;
  position: relative;
}
.image-div {
  margin: auto 0px;
  overflow: hidden;
  display: flex;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
}
.image-alt-name {
  border: 1 px solid #666;
  padding: 10px;
  border-radius: 4px;
  text-align: center;
  margin: auto 0px;
}
.left-arrow,
.right-arrow {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ddd;
  cursor: pointer;
}
.cards-div {
  position: absolute;
  display: flex;
  left: 0px;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
  padding: 0px 10px;
}
.logo {
  width: 180px;
  flex-shrink: 0;
  margin-left: auto;
  margin-right: auto;
  display: block;
  padding: 5px;
}
.logo-container {
  display: flex;
  flex-wrap: wrap;
  width: 250px;
  flex-shrink: 1;
  padding: 10px 0px;
}
.logo-container {
  flex-grow: 1;
  max-width: 550px;
}
</style>

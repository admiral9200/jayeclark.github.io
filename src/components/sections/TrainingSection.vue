<script setup lang="ts">
import { trainingMatrix } from "@/scripts/training";
interface Milestone {
  date: string;
  weight: number;
  topics: string;
}
const isDateInPast = (str: string) => {
  const dates = str.split("/");
  const [month, day, year] = [
    Number(dates[0]),
    Number(dates[1]),
    Number(dates[2]) + 2000,
  ];
  const todayMonth = new Date().getMonth() + 1;
  const todayDate = new Date().getDate();
  const todayYear = new Date().getFullYear();
  if (month < todayMonth && year <= todayYear) {
    return true;
  }
  return month === todayMonth && year === todayYear && day < todayDate;
};

const percentComplete = (milestones: Array<Milestone>) => {
  const pointsCompletedToDate = milestones
    .filter((milestone: Milestone) => isDateInPast(milestone.date))
    .reduce((a: number, b: Milestone) => a + b.weight, 0);
  const totalPoints = milestones.reduce(
    (a: number, b: Milestone) => a + b.weight,
    0
  );
  return Math.ceil((pointsCompletedToDate * 100) / totalPoints);
};

const mostRecentTopic = (milestones: Array<Milestone>) => {
  const completedToDate = milestones
    .filter((milestone: Milestone) => isDateInPast(milestone.date))
    .reverse();
  return `<p><b>Currently working on:</b> ${completedToDate[0]?.topics}</p>`;
};
</script>

<template>
  <div class="training">
    <span style="text-align: center"><h6>My Training Plan</h6></span>
    <div class="training-cards">
      <template v-for="(course, index) in trainingMatrix" :key="index">
        <div class="card-white training-card">
          <h4 id="fullStackCert-title">
            {{ course.fullname }}
          </h4>
          <p
            class="project-description"
            :innerHTML="
              percentComplete(course.milestones) === 100
                ? course.completed
                : `${course.description}<br/><br/>${mostRecentTopic(
                    course.milestones
                  )}`
            "
          ></p>
          &nbsp;
          <div class="progress-container">
            <b>Completed: </b>{{ percentComplete(course.milestones) }}%
            <div class="progress" style="width: 100%">
              <div
                id="fullStackCert-progress"
                class="progress-bar"
                role="progressbar"
                :aria-valuenow="percentComplete(course.milestones)"
                aria-valuemin="0"
                aria-valuemax="100"
                :style="{ width: `${percentComplete(course.milestones)}%` }"
              >
                <span class="sr-only"
                  >{{ percentComplete(course.milestones) }}% Complete</span
                >
              </div>
            </div>
          </div>
        </div>
      </template>
    </div>
  </div>
</template>

<style>
.training {
  margin-bottom: 60px;
}
.training-cards {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 0px -8px;
}
.training-card {
  margin: 8px !important;
  width: calc(33% - 16px) !important;
  min-width: 300px !important;
  flex-grow: 1 !important;
}
.progress-container {
  width: 100%;
  position: relative;
  bottom: 0px;
}
</style>

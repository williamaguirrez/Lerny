<template>
  <div class="meeting">
    <div class="container-zoom">
      <ZoomFrame :nickname="nickname" :meetingId="meetingId"/>
    </div>
  </div>
</template>

<script>
import ZoomFrame from './ZoomFrame.vue';

export default {
  name: "Meeting",
  data: function () {
      return {
          nickname: '',
          meetingId: '',
      }
  },
  /* components: {Foo,}, */
  component: {
      ZoomFrame: () => import('./ZoomFrame.vue'),
  },
  created : function (){
      this.nickname = this.$route.query.nickname;
      this.meetingId = this.$route.query.meetingId;
      console.log(this.$route.query.nickname);
      console.log(this.$route.query.meetingId)
  }
};
</script>


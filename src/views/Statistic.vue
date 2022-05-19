<template>
  <div>
    <v-container>
      <v-card class="mx-auto text-center" color="teals" dark max-width="600">
        <v-card-text>
          <v-sheet color="rgba(0, 0, 0, .12)">
            <v-sparkline
              :value="value"
              color="rgba(255, 255, 255, .7)"
              height="100"
              padding="24"
              stroke-linecap="round"
              smooth
            >
              <!-- <template v-slot:label="item">${{ item.value }}</template> -->
            </v-sparkline>
          </v-sheet>
        </v-card-text>

        <v-card-text>
          <div class="text-h4 font-weight-thin">
            Shoots Total
          </div>
        </v-card-text>

        <v-divider></v-divider>
      </v-card>
    </v-container>
  </div>
</template>
<script>
export default {
  name: 'Statistic',
  data: () => ({
    statistics: {},
  }),
  created() {
    this.axios
      .get(
        'https://apiv3.apifootball.com/?action=get_statistics&match_id=86392&APIkey=0b3a2166786c39c5c38f91ee986af9356ca95ffea6e571819ff0c6ae85968d58',
      )
      .then((response) => {
        let data = response.data.match_id
        this.statistics = data
        console.log(this.statistics)
      })
      .catch((error) => {
        console.error(error)
      })
  },
}
</script>

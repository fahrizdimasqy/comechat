<template>
  <div>
    <h2 class="px-3 mb-3 mt-3">TopScore</h2>
    <v-card
      v-for="topscore in topscores"
      :key="topscore.player_place"
      class="mx-auto mb-2"
      max-width="344"
      outlined
    >
      <v-list-item three-line>
        <v-list-item-content>
          <!-- <div class="d-flex"> -->
          <!-- <v-avatar color="primary" size="48" class="me-2"></v-avatar> -->
          <div class="mb-4">
            <p>{{ topscore.player_name }}</p>
            <p>Goals: {{ topscore.goals }}</p>
            <p>Assists: {{ topscore.assists }}</p>
            <!-- </div> -->
          </div>
          <!-- <v-list-item-title class="text-h5 mb-1">
              Headline 5
            </v-list-item-title> -->
        </v-list-item-content>
        <v-spacer></v-spacer>
        <h5>{{ topscore.team_name }}</h5>
      </v-list-item>
    </v-card>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'TopScore',
  data: () => ({
    model: null,
    topscores: {},
  }),
  created() {
    this.axios
      .get(
        'https://apiv3.apifootball.com/?action=get_topscorers&league_id=302&APIkey=0b3a2166786c39c5c38f91ee986af9356ca95ffea6e571819ff0c6ae85968d58',
      )
      .then((response) => {
        this.topscores = response.data
      })
      .catch((error) => {
        console.error(error)
      })
  },
  components: {},
}
</script>

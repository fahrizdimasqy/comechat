<template>
  <div class="mt-5 mb-16">
    <h2 class="px-3 text-primary">Teams</h2>
    <v-card
      v-for="team in teams"
      :key="team.team_key"
      class="mx-auto mb-2"
      max-width="344"
      outlined
    >
      <v-list-item three-line>
        <v-list-item-content>
          <div class="d-flex align-center">
            <v-avatar size="48" class="me-2">
              <img :src="team.team_badge" class="align-center" />
            </v-avatar>
            <p class="mt-4">{{ team.team_name }}</p>
            {{ team['coaches'].coache_name }}
          </div>
          <!-- <v-list-item-title class="text-h5 mb-1">
              Headline 5
            </v-list-item-title> -->
        </v-list-item-content>
      </v-list-item>
    </v-card>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Team',
  data: () => ({
    model: null,
    teams: {},
  }),
  created() {
    this.axios
      .get(
        'https://apiv3.apifootball.com/?action=get_teams&league_id=302&APIkey=0b3a2166786c39c5c38f91ee986af9356ca95ffea6e571819ff0c6ae85968d58',
      )
      .then((response) => {
        this.teams = response.data
      })
      .catch((error) => {
        console.error(error)
      })
  },
  components: {},
}
</script>

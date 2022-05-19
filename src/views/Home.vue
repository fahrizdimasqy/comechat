<template>
  <div class="mt-5 mb-15">
    <h2 class="px-3 text-primary">First Team Result</h2>
    <v-slide-group v-model="model" active-class="success">
      <v-slide-item
        v-for="fl in firsteams"
        :key="fl.match_id"
        v-slot="{ toggle }"
      >
        <v-card class="ma-4 myshadow" height="150" width="250" @click="toggle">
          <div class="my-auto">
            <v-container>
              <div class="d-flex align-center">
                <v-avatar size="48" class="me-2">
                  <img :src="fl.team_away_badge" alt="" />
                </v-avatar>
                <h5>{{ fl.match_awayteam_name }}</h5>
                <v-spacer></v-spacer>
                <h4>{{ fl.match_awayteam_score }}</h4>
              </div>
            </v-container>
            <div>
              <v-divider>
                <p>Vs</p>
              </v-divider>
            </div>
            <v-container>
              <div class="d-flex align-center">
                <v-avatar size="48" class="me-2">
                  <img :src="fl.team_home_badge" alt="" />
                </v-avatar>
                <h5>{{ fl.match_hometeam_name }}</h5>
                <v-spacer></v-spacer>
                <h4>{{ fl.match_hometeam_score }}</h4>
              </div>
            </v-container>
          </div>
        </v-card>
      </v-slide-item>
    </v-slide-group>
    <div>
      <h2 class="px-3 mb-3 mt-3">Last Team Result</h2>
      <v-card
        v-for="st in secondteams"
        :key="st.match_id"
        class="mx-auto mb-2"
        max-width="344"
        outlined
      >
        <v-list-item three-line>
          <v-list-item-content>
            <div class="d-flex mb-3 align-center">
              <v-avatar size="48" class="me-2">
                <img :src="st.team_away_badge" alt="" />
              </v-avatar>
              <h5 class="me-1">{{ st.match_awayteam_name }}</h5>
              <v-spacer></v-spacer>
              <p class="mt-4">{{ st.match_awayteam_score }}</p>
            </div>

            <!-- <v-list-item-title class="text-h5 mb-1">
              Headline 5
            </v-list-item-title> -->
            <div class="d-flex align-center">
              <v-avatar size="48" class="me-2">
                <img :src="st.team_home_badge" alt="" />
              </v-avatar>
              <h5>{{ st.match_hometeam_name }}</h5>
              <v-spacer></v-spacer>
              <p class="mt-4">{{ st.match_hometeam_score }}</p>
            </div>
          </v-list-item-content>
          <v-spacer></v-spacer>
          <h5>{{ st.match_date }}</h5>
        </v-list-item>
      </v-card>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  data: () => ({
    model: null,
    firsteams: {},
    secondteams: {},
    h2h: {},
  }),
  created() {
    this.axios
      .get(
        'https://apiv3.apifootball.com/?action=get_H2H&firstTeamId=7275&secondTeamId=151&APIkey=0b3a2166786c39c5c38f91ee986af9356ca95ffea6e571819ff0c6ae85968d58',
      )
      .then((response) => {
        let firstTeam_lastResults = response.data.firstTeam_lastResults
        this.firsteams = firstTeam_lastResults
        let secondTeam_lastResults = response.data.secondTeam_lastResults
        this.secondteams = secondTeam_lastResults
        console.log(this.secondteams)
      })
      .catch((error) => {
        console.error(error)
      })
  },
  components: {},
}
</script>

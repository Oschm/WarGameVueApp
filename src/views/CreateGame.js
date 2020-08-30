import HeaderComp from '../components/HeaderComp';
// import AxiosService from '../libs/axios';

export default {
  props: {
    source: String,
  },
  data: () => ({
    drawer: null,
    errorState: false,
    selectedUser: null,
    userData: null,
    items: [
      'Programming',
      'Design',
      'Vue',
      'Vuetify',
    ],
    playerObjects: [{
        firstName: 'Nazar',
        lastName: 'Kulyk',
        id: '1',
      },
      {
        firstName: 'Patrick',
        lastName: 'Schmidt',
        id: '2',
      },
    ],
  }),

  components: {
    HeaderComp,
  },
  created() {
    // fetch the data when the view is created and the data is
    // already being observed
    console.log('loading');
    this.userData = this.$route.params.userData;
    this.loadPlayers();
  },

  methods: {
    loadPlayers() {
      // console log loading userData
      // AxiosService.get('user/players', this.getUserDataSuccess, this.getUserDataSuccess);
    },
    getUserDataSuccess(response) {
      this.players = response.data;
    },
    getUserDataFail(error) {
      alert(error.message);
    },
    onClick(route) {
      this.$router.push(route);
    },
    formatter(item) {
      console.log('item');
      return `${item.firstName} ${item.lastName}`;
    },
    createGame() {
      // get selected User
      if (!this.selectedUser) {
        this.errorState = true;
        return;
      }
      debugger;
    },
    resetErrorState() {
      this.errorState = false;
    },
  },
};

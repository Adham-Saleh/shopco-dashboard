import type { User } from "~/gql/default";

export const authStore = defineStore("auth", {
  state: () => ({
    user: {},
    token: useCookie("gql:default") || null,
  }),
  actions: {
    async login(email: string, password: string) {
      const { data: tokens, error } = await useAsyncData(
        "login",
        () =>
          GqlLogin({
            email,
            password,
          }),
        { transform: (data) => data?.login }
      );
      if (!tokens.value) {
        return {
          accessToken: null,
          refreshToken: null,
        };
      }
      return {
        accessToken: tokens.value?.access_token,
        refreshToken: tokens.value?.refresh_token,
      };
    },
    async authorize() {
      const { data: me } = await useAsyncData("authorize", () => GqlMe(), {
        transform: (data) => data?.myProfile,
      });
      return me.value;
    },
    setData(user: User) {
      this.user = user;
    },
  },
});

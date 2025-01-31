import type { User } from "~/gql/default";
import { Role } from "#gql/default";

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
    async signup(usersData: { email: string; password: string; name: string }) {
      const { data: user, error } = await useAsyncData("createAccount", () =>
        GqlAddUser({
          data: {
            ...usersData,
            avatar: "https://picsum.photos/400/300",
            role: Role.Admin,
          },
        })
      );
      if (!user.value?.addUser) {
        return {
          success: false,
        };
      }
      return {
        success: true,
        user: user.value.addUser,
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

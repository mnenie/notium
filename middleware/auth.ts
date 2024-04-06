export default defineNuxtRouteMiddleware(async () => {
  if (!useCookie("token").value) {
    return navigateTo(LOGIN_ROUTE);
  }
});
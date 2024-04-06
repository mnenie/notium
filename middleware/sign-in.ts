export default defineNuxtRouteMiddleware(async (to) => {
  if (useCookie('token').value && (to.path === LOGIN_ROUTE || to.path === REGISTRATION_ROUTE)) {
    return navigateTo(ABOUT_ROUTE);
  }
});

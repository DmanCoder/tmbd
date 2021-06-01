import { gsap } from 'gsap';
// import { ScrollToPlugin }z from 'gsap/ScrollToPlugin';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';

// gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);
// TODO: This is a hack fix. Solve the issue later
// TODO: Jest picks up on the warning and throws an error when running tests
gsap.config({
  nullTargetWarn: false, // Disable warning
});
export default gsap;

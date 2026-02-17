import { Ticker } from "../ui/molecules";
import { AdventurersLog, GuildFaqs, GuildGoals, HeroSection, KickstarterGoals, TheGuildHall } from "../ui/organisms";

export const Home = () => {
  return (
    <>
      <HeroSection />
      <Ticker />
      <KickstarterGoals />
      <TheGuildHall />
      <GuildGoals />
      <GuildFaqs />
      <AdventurersLog />
    </>
  )
}
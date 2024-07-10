import TypeSection from './TypeSection';
export default function Classement({ stageClassements, monthlyProgression, SeasonProgression }) {

  const stageClassementsTitle = "Classement des joueurs par phase"
  const monthlyProgressionTitle = "Progression mensuelle des joueurs"
  const seasonProgressionTitle = "Progression sur la saison des joueurs"
  return (
    <section className="p-6 md:w-4/6 m-auto 2xl:w-3/6 flex flex-col gap-4">
      <h1 className="text-xl text-center font-bold p-4 mb-8">Classement et progression</h1>
      
    {stageClassements ? <TypeSection type={stageClassements} sectionTitle={stageClassementsTitle} /> : null}
    {monthlyProgression ? <TypeSection type={monthlyProgression} sectionTitle={monthlyProgressionTitle} /> : null}
    {SeasonProgression ? <TypeSection type={SeasonProgression} sectionTitle={seasonProgressionTitle} /> : null}

    </section>
  );
}

import ArticleTournament from "./ArticleTournament";
export default function Inscription({ trophys }) {
  return (
    <section className="p-6 md:w-4/6 m-auto 2xl:w-4/6">
      <h1 className="text-xl text-center font-bold p-4 mb-8">
        Les tournois interne
      </h1>

      <p className="text-justify mb-10">
        Hommage aux Vainqueurs du Tournoi Interne du Club de <strong>tennis de table</strong>{" "}
        <strong className="inline-block">T.T. Farguais</strong>. Depuis sa
        fondation, notre club de <strong>tennis de table</strong>{" "}
        <strong className="inline-block">T.T. Farguais</strong> a toujours été
        un lieu où la passion, la compétition et l&apos;amitié se rencontrent.
        Chaque année, notre tournoi interne est l&apos;occasion de célébrer non
        seulement les talents individuels, mais aussi l&apos;esprit sportif et
        la camaraderie qui animent notre club. Nous souhaitons aujourd&apos;hui
        rendre hommage à tous ceux qui ont marqué l&apos;histoire de ce tournoi
        par leurs victoires mémorables.
      </p>
     
        {trophys.map((trophy, index) => (
          <ArticleTournament key={index} trophy={trophy}></ArticleTournament>
        ))}
    </section>
  );
}

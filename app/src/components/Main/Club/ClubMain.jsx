import MemberCard from "../Club/MemberCard"

export default function ClubMain({membres}) {

  return (
    <>
    <section className="flex flex-col lg:flex-row gap-10 sm:gap-2 p-6 text-center lg:text-left">

    <article className="flex flex-col lg:flex-1 gap-4">

    <div className="gap-4 sm:p-10 text-justify lg:w-4/6 m-auto">
   
    <p className="mb-4">
        Créé à l’initiative d’<span className="font-bold">Alain MOTILLON</span> au cours de l’automne 1991, le <strong>TENNIS DE TABLE FARGUAIS</strong> obtient l’accord de la municipalité de <strong>FARGUES-St-HILAIRE</strong> afin d’utiliser la salle des fêtes pour ses entraînements et ses compétitions, puis dépose ses statuts en avril 1992, s’affilie à la FFTT et engage ainsi ses premières équipes en compétition pour la saison 1992/1993.
      </p> 
      <p className="mb-4">
      Les résultats ne se sont pas faits attendre puisque fort d’un recrutement de joueurs déjà aguerris, le premier titre de Champion de Gironde est acquis dès la première saison.
      </p>
      <p className="mb-4">
      A la rentrée 1993 la création d’une école de Tennis de Table s’est avérée évidente. Plusieurs titres sont remportés en jeunes ou en adultes.
      </p>
      <p className="mb-4">
      Cette école, encadrée par Stéphane AIMÉE, éducateur Diplômé d’État, va rapidement progresser tant par son effectif (de 20 à 35 jeunes selon les saisons) que par la qualité de leurs niveaux de jeu. Certains d’entre eux ont accédé aux compétitions régionales puis nationales et ont remporté plusieurs titres. Trois jeunes filles ont atteint les phases finales nationales par classement en 2003/2004 et un jeune garçon a fait un parcours exceptionnel depuis 2009. Certains jeunes ont été intégrés dans les équipes adultes et évoluent toujours avec elles.
      </p>
      <p className="mb-4">
      Notre éducateur organise des stages sportifs pendant les vacances scolaires ainsi que des initiations au sein de l’école primaire de FARGUES-St-HILAIRE et intervient plus récemment sur les TAPS (Temps d’Aménagement Péri- Scolaires) tous les vendredis après-midi depuis la rentrée 2014.
      </p>
      <p className="mb-4">
      A son apogée, à la fin des années 90, le club a atteint la centaine d’adhérents et continua à recruter pour faire monter l’équipe 1 en première division régionale.  Il entra dans le « Top 10 » des clubs aquitains, obtenant ainsi le Label Régional de la Ligue d’Aquitaine.
      Depuis 2008, la nouvelle équipe municipale a accueilli de nouvelles associations entraînant des restrictions de créneaux d’entraînements pour le Tennis de  Table. Nous nous réservions alors à une cinquantaine de licenciés, nous limitant à l’accueil de 24 jeunes.
      </p>
      <p className="mb-4">
      En 2014, un nouveau changement de municipalité vote le projet de construction d’une salle polyvalente qui a vu le jour en 2017, le club l’utilise de façon régulière pour les entraînements en semaine et les WE pour les rencontres compétitives quand la disponibilité le permet.
      </p>
    </div>
    
    </article>


    </section>

    <section className="bg-contrast-2 px-4 py-10">
      <h1 className="text-center text-lg font-bold uppercase mb-10">Membres du bureau</h1>
      <div className="flex gap-6 md:gap-16  justify-center flex-wrap">
      {membres.map((membre, index) =>(
      <MemberCard membre={membre} key={index}></MemberCard>
      ))}
      </div>
    </section>
  </>
  )
}
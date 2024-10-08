
import ImageAndClick from "../../UI/ImageAndClick";
const TeamResultList = ({ resultsFiles }) => {
  // {console.log(resultsFiles)}
  return (
    <section className="p-6 md:w-4/6 m-auto 2xl:w-3/6 flex flex-col gap-4">
      <h1 className="text-xl text-center font-bold p-4 mb-8">
        Résultats Compétitions par équipes
      </h1>
      {resultsFiles.map(
        (files, index) =>
          files.category.length > 0 && (
            <div key={index} className="flex flex-col gap-3 border-b mb-10">
              <h2 className="font-bold text-lg mb-4 underline underline-offset-8">
                {files.title}
              </h2>
              <div className="flex gap-4 flex-wrap justify-around">
                {files.category.map((item, index) => (
                  <div key={index} className="flex flex-col mb-6 max-w-60">
                    <h3 className="mb-2 font-bold">{item.name} :</h3>
                    <div className="flex gap-5 m-auto justify-center">
                      {item.url && (
                        <ImageAndClick
                          src={item.url}
                          href={item.url}
                          alt={item.name}
                          actionTitle="Voir la fiche"
                        />
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )
        )
        }
    </section>
  );
};

export default TeamResultList;
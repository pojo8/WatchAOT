export async function getSeasonEpisodes(season) {
  await fetch("http://localhost:8080/api/episodesSeason/" + season.seasonId, {
    method: "GET",
    headers: new Headers({}),
  })
    .then((res) => res.json())
    .then((res) => {
      return res;
      const rows = [];
      res.forEach((episode) => {
        rows.push(
          createData(
            episode.episode_Number,
            episode.episode_Title,
            episode.views
          )
        );
      });
      setRows(rows);
      setIsLoading(false);
    })
    .catch((error) => console.log(error));
}

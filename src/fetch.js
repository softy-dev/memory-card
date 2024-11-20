const getData = async function getDataFromAPI() {
  const response = await fetch(`https://api.opendota.com/api/heroStats`, {
    mode: 'cors',
  });

  const data = await response.json();

  const characters = data.reduce((acc, character, index) => {
    const indices = [19, 20, 41, 48, 56, 60, 90, 104, 108, 116, 117, 122];
    if (indices.includes(index)) {
      acc.push({
        name: character['localized_name'],
        image: `https://cdn.cloudflare.steamstatic.com${character['img']}`,
      });
    }

    return acc;
  }, []);

  return characters;
};

export default getData;

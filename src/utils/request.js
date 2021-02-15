const root_url = "https://animechanapi.xyz/api/quotes";

let query;

export default async function (keyword) {
    query = `${root_url}${keyword}`
    let quotes = []
    try {
      const res = await fetch(query);
      const data = await res.json();
      quotes = data.data;
      return quotes;

    } catch (err) {
      console.log(err);
    }
}
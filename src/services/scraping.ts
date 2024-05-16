export const pornHub = async () => {
  const res = await fetch('https://scraping-server.vercel.app/phub/models') 
  
  const {models:data} = await res.json()

  return data.data
}
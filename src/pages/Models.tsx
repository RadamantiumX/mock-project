import CardsModels from "../components/modelsComponents/CardsModels";
import SearchModel from "../components/modelsComponents/SearchModel";


export default function Models() {
  return (
	<>
	<SearchModel/>
    <CardsModels/>
	</>
  )
}
// ❗ La respuesta puede contener mucho mas resultados.
/**
 * Example Response:
 * 
 * {
	"result": [
		{
			"pornStarName": "Sophia Leone",
			"picture": "https://cdni.pornpics.com/460/7/528/75635576/75635576_029_6bdc.jpg",
			"nationality": "US",
			"galleries": " 434",
			"id": "d1c00899-8fa5-4b06-9364-b43196616de8"
		},
		{
			"pornStarName": "Emily Willis",
			"picture": "https://cdni.pornpics.com/460/7/548/77065581/77065581_181_d1ef.jpg",
			"nationality": "US",
			"galleries": " 512",
			"id": "b47a7511-08dd-41ad-ada3-5845d51f8e74"
		},
		{
			"pornStarName": "Riley Reid",
			"picture": "https://cdni.pornpics.com/460/7/253/13871244/13871244_191_bc95.jpg",
			"nationality": "US",
			"galleries": " 1670",
			"id": "bc7c4b9b-a01e-44a6-889d-7fc303402a9d"
		},
		....-> More results....
 */
import Api from "services/apiService";

class CatService {
  static axiosInstance = Api.initialize();
  /**
   * Search for cat breeds
   */
  static searchCatBreed = async breed => {
    try {
      const serverResponse = await CatService.axiosInstance.get(
        "/breeds/search/",
        {
          params: {
            q: breed
          }
        }
      );

      return serverResponse.data;
    } catch (e) {
      throw e;
    }
  };

  static getCatsImage = async cats => {
    try {
      const catsMap = cats.map(async (cat, index) => {
        const catImage = await CatService.axiosInstance.get("/images/search/", {
          params: {
            breed_id: cat.id
          }
        });
        const catImageUrl =
          catImage.data.length && catImage.data[0].url
            ? catImage.data[0].url
            : "http://www.quickmeme.com/img/a8/a8022006b463b5ed9be5a62f1bdbac43b4f3dbd5c6b3bb44707fe5f5e26635b0.jpg";

        cat.image = catImageUrl;

        return cat;
      });

      return await Promise.all(catsMap);
    } catch (e) {
      throw e;
    }
  };
}

export default CatService;

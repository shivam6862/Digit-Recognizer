import { useNotification } from "./useNotification";

const usePYModels = () => {
  const { NotificationHandler } = useNotification();

  const predictDigitRecognizer = async (images) => {
    console.log(images);
    if (images.length == 0) {
      return [];
    }
    try {
      const data = new FormData();
      const files = [];
      for (let i = 0; i < images.length; i++) {
        data.append("file", images[i].file);
        files.push(images[i].file.name);
      }
      const response = await fetch(
        "http://localhost:8501/predictdigitrecognizer",
        {
          method: "POST",
          body: data,
        }
      );
      const resData = await response.json();
      if (resData.status == resData.status) {
        NotificationHandler(resData.title, resData.message, resData.status);
      }
      return resData.about;
    } catch (error) {
      console.log(error.message);
      NotificationHandler("Error", "Predictions failed to work.", "Error");
      const about = [];
      return about;
    }
  };
  return { predictDigitRecognizer };
};
export default usePYModels;

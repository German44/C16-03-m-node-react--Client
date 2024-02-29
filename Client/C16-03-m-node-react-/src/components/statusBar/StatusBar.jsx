import { ProgressBar, Step } from "react-step-progress-bar";
import "react-step-progress-bar/styles.css";

const StatusBar = ({ initialStatus = {} }) => {
  const getProgress = () => {
    switch (initialStatus.product?.status) {
      case "In Warehouse":
        return 0;
      case "In Progress":
        return 34;
      case "In Transit":
        return 67;
      case "Delivered":
        return 100;
      case "Canceled":
        return 0;
      default:
        return 0;
    }
  };

  return (
    <div className="p-4 w-full md:w-3/4 lg:w-2/3  mx-auto min-w-sm bg-Amethyst rounded-lg">
      <h2 className="text-[24px] lg:text-[45px] sm:text-lg font-bold text-white  w-fit mx-auto pb-5">
        Envío Nro. {initialStatus.product?._id}
      </h2>
      <div className="w-full relative">
        <ProgressBar
          percent={getProgress()}
          filledBackground="#8BEA00"
          height={15}
        >
          <Step>
            {({ accomplished }) => (
              <div
                className={`step ${
                  accomplished ? "accomplished" : ""
                } flex items-center justify-center absolute -left-2`}
              >
                <div
                  style={{
                    width: "25px",
                    height: "25px",
                    borderRadius: "50%",
                    background: accomplished ? "#FFFF00" : "#ddd",
                  }}
                ></div>
              </div>
            )}
          </Step>
          <Step>
            {({ accomplished }) => (
              <div
                className={`step ${
                  accomplished ? "accomplished" : ""
                } flex items-center justify-center absolute left-1/3 -translate-x-1/2`}
              >
                <div
                  style={{
                    width: "25px",
                    height: "25px",
                    borderRadius: "50%",
                    background: accomplished ? "#0000FF" : "#ddd",
                  }}
                ></div>
              </div>
            )}
          </Step>
          <Step>
            {({ accomplished }) => (
              <div
                className={`step ${
                  accomplished ? "accomplished" : ""
                } flex items-center justify-center absolute left-2/3 -translate-x-1/2`}
              >
                <div
                  style={{
                    width: "25px",
                    height: "25px",
                    borderRadius: "50%",
                    background: accomplished ? "#4caf50" : "#ddd",
                  }}
                ></div>
              </div>
            )}
          </Step>
          <Step>
            {({ accomplished }) => (
              <div
                className={`step ${
                  accomplished ? "accomplished" : ""
                } flex items-center justify-center absolute right-2 -translate-x-full`}
              >
                <div
                  style={{
                    margin: "-15px",
                    width: "25px",
                    height: "25px",
                    borderRadius: "50%",
                    background: accomplished ? "#21da21" : "#ddd",
                  }}
                ></div>
              </div>
            )}
          </Step>
        </ProgressBar>
        <div className="flex justify-between mt-2 ">
          <span className="sm:text-sm lg:text-md xl:text-xl text-center mt-4 text-white font-semibold">
            En Almacén
          </span>
          <span className="sm:text-sm lg:text-md xl:text-xl text-center mt-4 text-white font-semibold">
            En Progreso
          </span>
          <span className="sm:text-sm lg:text-md xl:text-xl text-center mt-4 text-white font-semibold">
            En Tránsito
          </span>
          <span className="sm:text-sm lg:text-md xl:text-xl text-center mt-4 text-white font-semibold">
            Entregado
          </span>
        </div>
      </div>
    </div>
  );
};

export default StatusBar;

import { Chart } from "react-google-charts";

const BarChat = () => {
    const data = [
        ["Task", "Hours per Day"],
        ["Work", 9],
        ["Eat", 2],
        ["Commute", 2],
        ["Watch TV", 2],
        ["Sleep", 7],
      ];
    
      const options = {
        title: "My Daily Activities",
      };
    return (
        <div className="">
            <Chart
            chartType="BarChart"
            width="90%"
            height="300px"
            data={data}
            options={options}
          />
        </div>
    );
};

export default BarChat;
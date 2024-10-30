import { Chart } from "react-google-charts";
export const data = [
    [
      "Element",
      "Density",
      { role: "style" },
      {
        role: "annotation",
        type: "string",
      },
    ],
    ["Copper", 8.94, "#b87333", "Cu"],
    ["Silver", 10.49, "silver", "Ag"],
    ["Gold", 19.3, "gold", "Au"],
    ["Platinum", 21.45, "color: #e5e4e2", "Pt"],
  ];
  
  export const options = {
    title: "Density of Precious Metals, in g/cm^3",
    width: 400,
    height: 300,
    bar: { groupWidth: "95%" },
    legend: { position: "none" },
  };
const PieChart = () => {
    return (
        <div>
            <Chart
              chartType="PieChart"
              data={data}
              options={options}
              width={"100%"}
              height={"100px"}
            />
        </div>
    );
};

export default PieChart;
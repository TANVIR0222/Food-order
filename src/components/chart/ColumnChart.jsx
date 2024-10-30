import { Chart } from "react-google-charts";

export const options = {
    title: "Density of Precious Metals, in g/cm^3",
    width: 400,
    height: 300,
    bar: { groupWidth: "95%" },
    legend: { position: "none" },
  };

const ColumnChart = () => {
    
    return (
        <div>
             <Chart
              chartType="ColumnChart"
              spreadSheetUrl="https://docs.google.com/spreadsheets/d/1jN0iw0usssnsG1_oi-NXtuKfsUsGme09GsFidbqxFYA"
              options={options}
              height={'300px'}
            />
        </div>
    );
};

export default ColumnChart;
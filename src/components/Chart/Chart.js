import './Chart.css';
import ChartBar from './ChartBar';

function Chart(props) {
	const dataChartValue = props.dataCharts.map((dataChart) => dataChart.value);
	const totalMax = Math.max(...dataChartValue);

	return (
		<div className="chart">
			{props.dataCharts.map((dataChart) => (
				<ChartBar
					key={dataChart.label}
					value={dataChart.value}
					maxValue={totalMax}
					label={dataChart.label}
				/>
			))}
		</div>
	);
}
export default Chart;

const React = require("react");
const { Box, Text } = require("ink");

module.exports = () => {
	const [pants, setPants] = React.useState("dirty");
	React.useEffect(() => {
		const timer = setTimeout(() => {
			setPants(pants === "dirty" ? "clean" : "dirty");
		}, 1000);
		return () => clearTimeout(timer);
	});

	return (
		<Box>
			i make the thing go boomboom
		</Box>
	);
};

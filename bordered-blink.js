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
			<Box
				borderStyle="classic"
				width={40}
				height={3}
				borderColor="red"
				padding="2"
				justifyContent="center"
        alignItems="center"
        marginRight={2}
			>
				<Text>Today, i'll be mostly be wearing {pants} pants</Text>
			</Box>
			<Box
				borderStyle="classic"
				width={40}
				height={3}
				borderColor="red"
				padding="2"
				justifyContent="center"
        alignItems="center"
        marginRight={2}
			>
				<Text>Today, i'll be mostly be wearing {pants} pants</Text>
			</Box>
			<Box
				borderStyle="classic"
				width={40}
				height={3}
				borderColor="red"
				padding="2"
				justifyContent="center"
        alignItems="center"
        marginRight={2}
			>
				<Text>Today, i'll be mostly be wearing {pants} pants</Text>
			</Box>
			<Box
				borderStyle="classic"
				width={40}
				height={3}
				borderColor="red"
				padding="2"
				justifyContent="center"
        alignItems="center"
        marginRight={2}
			>
				<Text>Today, i'll be mostly be wearing {pants} pants</Text>
			</Box>
			<Box
				borderStyle="classic"
				width={40}
				height={3}
				borderColor="red"
				padding="2"
				justifyContent="center"
        alignItems="center"
        marginRight={2}
			>
				<Text>Today, i'll be mostly be wearing {pants} pants</Text>
			</Box>
			<Box
				borderStyle="classic"
				width={40}
				height={3}
				borderColor="red"
				padding="2"
				justifyContent="center"
        alignItems="center"
        marginRight={2}
			>
				<Text>Today, i'll be mostly be wearing {pants} pants</Text>
			</Box>
			<Box
				borderStyle="classic"
				width={40}
				height={3}
				borderColor="red"
				padding="2"
				justifyContent="center"
        alignItems="center"
        marginRight={2}
			>
				<Text>Today, i'll be mostly be wearing {pants} pants</Text>
			</Box>
			<Box
				borderStyle="classic"
				width={40}
				height={3}
				borderColor="red"
				padding="2"
				justifyContent="center"
        alignItems="center"
        marginRight={2}
			>
				<Text>Today, i'll be mostly be wearing {pants} pants</Text>
			</Box>
			<Box
				borderStyle="classic"
				width={40}
				height={3}
				borderColor="red"
				padding="2"
				justifyContent="center"
        alignItems="center"
        marginRight={2}
			>
				<Text>Today, i'll be mostly be wearing {pants} pants</Text>
			</Box>
		</Box>
	);
};

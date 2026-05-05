import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

export default function Index() {
	return (
		<Stack direction="column" sx={{ m: 3, gap: 2 }}>
			<Stack direction="row" sx={{ gap: 2 }}>
				<Box sx={{ flexGrow: 1 }}>
					<Typography variant="h1">Hello</Typography>
					<Typography variant="subtitle2" sx={{ mb: 3 }}>
						This is some stuff Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum quos praesentium iste autem eligendi ab eos asperiores. Ipsam impedit hic sed, consequuntur similique itaque inventore nesciunt dolore aliquam cupiditate voluptatum?
					</Typography>
				</Box>
				<Stack direction="column" sx={{
					p: 2,
					flexShrink: 0,
					width: "38.2%",
					backgroundColor: "#f0f0f0",
					display: "flex",
					alignItems: "center",
					justifyContent: "space-between",
				}}>
					<Stack direction="row" sx={{ gap: 2 }}>
						<Button variant="outlined">STUFF</Button>
						<Button variant="text">STUFF</Button>
						<Button variant="contained">STUFF</Button>
					</Stack>
					<Stack direction="row" sx={{ gap: 2 }}>
						<Button color="secondary" variant="outlined" onClick={() => {}}>STUFF</Button>
						<Button color="secondary" variant="text" onClick={() => {}}>STUFF</Button>
						<Button color="secondary" variant="contained"  onClick={() => {}}>STUFF</Button>
					</Stack>
				</Stack>
			</Stack>
			<Typography gutterBottom>
				<Link href="#">Lorem ipsum dolor</Link>, sit amet consectetur adipisicing elit. Ipsum quos praesentium iste autem eligendi ab eos asperiores. Ipsam impedit hic sed, consequuntur similique itaque inventore nesciunt dolore aliquam cupiditate voluptatum?
			</Typography>
			<Typography gutterBottom>
				<Link href="#">Lorem ipsum dolor</Link>, sit amet consectetur adipisicing elit. Ipsum quos praesentium iste autem eligendi ab eos asperiores. Ipsam impedit hic sed, consequuntur similique itaque inventore nesciunt dolore aliquam cupiditate voluptatum?
			</Typography>
			<Typography gutterBottom>
				<Link href="#">Lorem ipsum dolor</Link>, sit amet consectetur adipisicing elit. Ipsum quos praesentium iste autem eligendi ab eos asperiores. Ipsam impedit hic sed, consequuntur similique itaque inventore nesciunt dolore aliquam cupiditate voluptatum?
			</Typography>
			<Typography gutterBottom>
				Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum quos praesentium iste autem eligendi ab eos asperiores. Ipsam impedit hic sed, consequuntur similique itaque inventore nesciunt dolore aliquam cupiditate voluptatum?
			</Typography>
			<Typography gutterBottom>
				Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum quos praesentium iste autem eligendi ab eos asperiores. Ipsam impedit hic sed, consequuntur similique itaque inventore nesciunt dolore aliquam cupiditate voluptatum?
			</Typography>
		</Stack>
	);
}


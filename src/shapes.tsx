
export function Line({color, height, width}: {color: string, height: string, width: string}) {
  return (
	<hr style = {{
		border: 'none',
		backgroundColor: color,
		height: height,
		margin: '0 auto',
		width: width
	  }}
	/>
  );
}

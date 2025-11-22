export function Line({color, height, width})
{
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

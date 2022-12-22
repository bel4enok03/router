function Buttons({chosenClothes}) {
	return (
		<div className="cont">
			<button className="change" onClick={() => chosenClothes('pants')}>Pants</button>
			<button className="change" onClick={() => chosenClothes('skirt')}>Skirts</button>
			<button className="change" onClick={() => chosenClothes('shoes')}>Shoes</button>
			<button className="change" onClick={() => chosenClothes('shirt')}>Shirts</button>
            <button className="change" onClick={() => chosenClothes('dress')}>Dresses</button>
		</div>
	);
}

export default Buttons;

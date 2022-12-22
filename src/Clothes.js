function Clothes({ clothes }) {
	return (
		<div className="products">
			{clothes.map((element) => {
				const { id, name, price, image } = element;
				return (
					<div key={id} className='product-card '>
						<img src={image} width="400px" height="500px" alt="clothes" />
                        <div>
                            <h3>{name}</h3>
                            <h4>$ {price}</h4>
                        </div>
					</div>
				);
			})}
		</div>
	);
}

export default Clothes;

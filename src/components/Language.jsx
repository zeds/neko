import React from 'react'

const Language = ({
	name,
	image
}) => {
	return (
		<div className="item">
			<div className="hoge">{name}</div>
			<img src="https://img.benesse-cms.jp/item/image/user/dc685e2c3fd7a3a63944383a54aa249ea27f5fdd/701f45dd-fbc3-4c90-8c9e-2f0dc95745d3.jpg" />
			<button>購入</button>
		</div>
	)
}

export default Language
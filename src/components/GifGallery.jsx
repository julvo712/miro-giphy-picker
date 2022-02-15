import * as React from 'react';
import Gif from './Gif'


export default function GifGallery(props) {
	if(props.galleryready == 0) {
		return (null)
	}
	else if(props.apidata != "") {
		//console.log(props.apidata['data'])
		let apiDataSanitized = props.apidata['data']
		let urls = []
		let response = []
		let even = ""
		apiDataSanitized.map((arrayItem) => urls.push(arrayItem.images.original.url))
		urls.forEach((element, index) => {
					if(index % 2 == 1) {
						even = "True"
					}
					else { even = "False"}
					response.push(<Gif key={index} source={element} even={even} />)
				})
		return(response)
	}
	else {
		return null
	}
}
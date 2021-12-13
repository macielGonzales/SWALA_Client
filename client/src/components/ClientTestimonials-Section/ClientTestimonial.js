import * as React from 'react';
import TestimonialItem from './ClientTestimonialItem';
import './ClientTestimonial.css';
import '../../App.css';



function ClientTestimonial(){
	return (
        <>
		<div className="cards-testimonials">
			<h1>Client Testimonials</h1>
			<div className="cards__testimonial-container">
				<div className="cards__testimonial-wrapper">
					<ul className="cards__testimonials">
						<TestimonialItem
							src="https://res.cloudinary.com/dr9mltwij/image/upload/v1634593559/LADLOLA/Torta_Feliz_dia_Papa_a0klpv.jpg"
							description="Descripcion del producto de alta calidad super recomendado 1."
							rrss="Facebook"
						/>
						<TestimonialItem
							src="https://res.cloudinary.com/dr9mltwij/image/upload/v1634593559/LADLOLA/Torta_infantil_k3okw0.jpg"
							description="Descripcion del producto de alta calidad super recomendado 2."
							rrss="Instagram"
						/>
						<TestimonialItem
							src="https://res.cloudinary.com/dr9mltwij/image/upload/v1635913551/LADLOLA/tortaQuincea%C3%B1era_eh3hml.png"
							description="Descripcion del producto de alta calidad super recomendado 3."
							rrss="Twitter"
						/>
					</ul>
				</div>
			</div>
		</div>
        </>
	);
};

export default ClientTestimonial;



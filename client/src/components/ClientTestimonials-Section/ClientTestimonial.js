import * as React from 'react';
import TestimonialItem from './ClientTestimonialItem';
import './ClientTestimonial.css';
import '../../App.css';



function ClientTestimonial(){
	return (
        <>
		<div className="cards-testimonials">
			<h1>Testimonios de clientes</h1>
			<div className="cards__testimonial-container">
				<div className="cards__testimonial-wrapper">
					<ul className="cards__testimonials">
						<TestimonialItem
							src="https://res.cloudinary.com/dr9mltwij/image/upload/v1634593559/LADLOLA/Torta_Feliz_dia_Papa_a0klpv.jpg"
							description="Excelente servicio, y que decir del pastel 10 de 10, super recomendado"
							             
							rrss="Facebook"
						/>
						<TestimonialItem
							src="https://res.cloudinary.com/dr9mltwij/image/upload/v1634593559/LADLOLA/Torta_infantil_k3okw0.jpg"
							description="Me encanto la decoracion del pastel, y tenia un sabor a chocolate exquisito"
							rrss="Instagram"
						/>
						<TestimonialItem
							src="https://res.cloudinary.com/dr9mltwij/image/upload/v1635913551/LADLOLA/tortaQuincea%C3%B1era_eh3hml.png"
							description="El pastel tenia un sabor a fresa unico, 100% recomendado"
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



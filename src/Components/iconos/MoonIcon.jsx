const MoonIcon = ({ fill = "#000", ...props }) => {
  return (
  <svg
  {...props}
  className="fill-red-500"
  fill={fill}
   xmlns="http://www.w3.org/2000/svg" width="26" height="26">
    <path 
    fillRule="evenodd" d="M13 0c.81 0 1.603.074 2.373.216C10.593 1.199 7 5.43 7 10.5 7 16.299 11.701 21 17.5 21c2.996 0 5.7-1.255 7.613-3.268C23.22 22.572 18.51 26 13 26 5.82 26 0 20.18 0 13S5.82 0 13 0z"/></svg>
  );
};
export default MoonIcon;
//el fill es el encargado de cambiar el color del icono

//selecciono como props ese fill y le cambio el color desde el lugar donde lo utilizo, le puedo poner aca que por defecto use un color, si es que no lo cambio desde donde lo uso

//className se lo aplico como clase
//fill se lo aplico como propiedad

// el ...props almacena el resto de las propiedades, para hacerlo de esa manera puedo ponerle en la const {...props} y en el svg {...props}, donde utilizo el props le doy un className y ahi pongo la clases de tailwind que le voy a dar

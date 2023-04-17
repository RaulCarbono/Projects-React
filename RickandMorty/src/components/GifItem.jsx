export const GifItem = ({title, url, id}) => {

    
  return (
   <div className="">
        <img src={ url } alt={ title } />
        <p>{ title }</p>
   </div>
  )
}
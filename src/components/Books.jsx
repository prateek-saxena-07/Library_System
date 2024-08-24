export  function Books(props)
{
    const {title,description,genre}=props.details
    return (<>
        <p>Name:{title}</p>
        <p>Description:{description}</p>
        <p>Category:{genre[0]},{genre[1]}</p>
        <hr />
    </>)
}
import CoverImage from '../../assets/project/cover-default-vanilla-leak.png'
interface Props{
    name: string | undefined
    cover: string | undefined
    about: string | undefined
    avatar: string | undefined
    height: string | undefined
    weight: string | undefined
    gender: string | undefined
}

export const ModelCardIndex:React.FC<Props> = ({name, cover, about, avatar, height, weight, gender}) => {
  return (
    <article className="h-auto">
        {name !== undefined ? <div>
        <div>
             <h1 className="text-2xl font-bold">{name}</h1> : <h1>No Info for this Model, we sorry 😢</h1>
             <img src={cover} alt={`${name} cover`} title={`${name} cover image from PORN-HUB`}/>  

            <div className="flex flex-row">
            <img src={avatar} alt={`${name} profile image`} title={`${name} profile image from PORN-HUB`}/>
              <div>
                <h2 className="font-bold">Model Info</h2>
                 <h3>Gender: {gender}</h3>
                 <h3>Height: {height}</h3>
                 <h3>Weight: {weight}</h3>
              </div>
            </div>

        </div>
        <div>
            <h4 className="font-bold">About</h4>
           <p>

             {about}
           </p>
        </div>
        </div> : <div><img src={CoverImage} alt="Image default" title='Image defualt cover no info Model'/></div>}

    </article>
  )
}

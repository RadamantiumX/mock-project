import './searchModel.scss'


export default function SearchModel() {
  return (
    <>
  <div className="justify-items-start justify-start gap-y-20 gap-x-2 mt-10 mb-5 mx-4 md:mx-0 md:ml-4 ">
  <h2 className="font-subtitle">The Most Popular Pornstars and Models</h2>

  <div className="max-w-md rounded-lg overflow-hidden md:max-w-xl mt-5">
      <div className="md:flex">
          <div className="w-80  relative">
              <i className="absolute fa fa-search text-gray-400 top-4 left-4"></i>
              <input type="text" className="bg-white-200 h-10 w-full px-12 rounded-lg focus:outline-none cursor-text " name="" 
              placeholder="Search Model..."
              />
          </div>
 
      </div>
  </div>
</div>



          
            
       

       
        

     
  
  
  


    </>
  )
}

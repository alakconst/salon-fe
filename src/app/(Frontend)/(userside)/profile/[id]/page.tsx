import profileData from '@/app/constants/profileData'; // Update the path accordingly



export default function Page({ params }: { params: { id: string} }) {
    
    const userProfile = profileData.find((user) => user.username === params.id);
      if (!userProfile) {
    return <div className='m-auto flex items-center justify-center h-screen w-full '>User not found</div>;
  }
    return (
      
   <div className="p-4">
      <div className="bg-white rounded-lg m-auto shadow-md p-4 max-w-4xl">
       
         <div className='flex flex-row gap-2 items-center'>
            <div>
              <img src="https://via.placeholder.com/150" alt="" />
             </div>
        <div>
        <h1 className="text-xl  font-semibold mb-2">{userProfile.name}</h1>
        <p className="text-gray-600 mb-2 text-[12px] lg:text-sm">{userProfile.email}</p>
        <p className="text-gray-700 text-[12px] lg:text-base">{userProfile.info}</p>
     </div>
       </div>
      </div>
    </div>


  )
}
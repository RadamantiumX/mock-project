import { InfoCard } from "./InfoCard"
import { PasswordCard } from "./PasswordCard"
import { useUserInfo } from "../../customsHooks/profileHooks"

export const UserInfo = () => {
 const {user} = useUserInfo()
  return (
    <>
         <section>
            <div className="flex flex-col items-center mt-10 mb-10 gap-y-10">
              <InfoCard nickname={user?.nickname} email={user?.email}/>
              <PasswordCard/>
            </div>
         </section>
    </>
  )
}

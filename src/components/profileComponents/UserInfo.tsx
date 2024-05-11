import { InfoCard } from "./InfoCard"
import { PasswordCard } from "./PasswordCard"

export const UserInfo = () => {
  return (
    <>
         <section>
            <div className="flex flex-col items-center mt-10 mb-10 gap-y-10">
              <InfoCard/>
              <PasswordCard/>
            </div>
         </section>
    </>
  )
}

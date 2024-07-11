import { PageHeader } from "../components/commonComponents/PageHeader"
import { UserInfo } from "../components/profileComponents/UserInfo"
export default function Profile () {
    return(
        <main>
          <PageHeader title={'Account Settings'}/>
          <UserInfo/>
        </main>
    )
}
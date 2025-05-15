import { atom, useRecoilValue } from 'recoil';
import { setRecoil } from 'recoil-nexus'
import AuthServiceController from '../service/auth_service_controller';
import UserData from '../data/user_data';
import UserModel from '../../model/user';

class DashboardPageController {
    authService = new AuthServiceController()
    userData = new UserData()

    constructor() {
        this.changePageIndex;
    }

    pageName = [
        'Dashboard',
        'Kategori'
    ]

    getUser = atom({ key: "user_data", default: {} as UserModel });
    user = useRecoilValue(this.getUser)

    getPageIndex = atom({ key: "page_index", default: 0 });
    pageIndex = useRecoilValue(this.getPageIndex)

    getPageLoad = atom({ key: "load_data", default: true });
    pageLoad = useRecoilValue(this.getPageLoad)

    getNavigateLoad= atom({ key: "navigate_load", default: false });
    navigateLoad = useRecoilValue(this.getNavigateLoad)

    checkSession = async () => {
        var result = await this.authService.authSession()

        if (result.data.session == null) {
            return false
        } else {
            await this.getData(result.data.session.user.id)
            return true
        }
    }

    getData = async (idUser : string) => {
        setRecoil(this.getPageLoad, true)

        var data = await this.userData.getUser(idUser)
        setRecoil(this.getUser, data)

        setRecoil(this.getPageLoad, false)
    }

    changePageIndex = (index: number) => {
        setRecoil(this.getPageIndex, index)
    }

    signOut = async () => {
        setRecoil(this.getNavigateLoad, true)
        await this.authService.authSignOut()
        setRecoil(this.getNavigateLoad, false)
    }
}

export default DashboardPageController
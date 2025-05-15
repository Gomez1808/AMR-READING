import AuthServiceController from "./auth_service_controller"

class MainAppController {
    authService = new AuthServiceController

    checkSession = async () => {
        var result = await this.authService.authSession()
        
        if (result.data.session == null) {
            return false
        } else {
            return true
        }
    } 
}

export default MainAppController
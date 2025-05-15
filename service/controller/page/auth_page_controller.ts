import { atom, useRecoilValue } from "recoil";
import { setRecoil } from "recoil-nexus";

import AuthServiceController from "../service/auth_service_controller";
import { basicSuccessToast, basicWarningToast } from "../../service/toast/basic";
import UserData from "../data/user_data";

class AuthPageController {
    authService = new AuthServiceController()
    userData = new UserData()

    getForm = atom({ key: "signin-form", default: { email: '', password: '' } });
    form = useRecoilValue(this.getForm)

    getPreload = atom({ key: "preload", default: false });
    preload = useRecoilValue(this.getPreload)

    getPageLoad = atom({ key: "page_load", default: true });
    pageLoad = useRecoilValue(this.getPageLoad)

    getSNK = atom({ key: "snk", default: false });
    snk = useRecoilValue(this.getSNK)

    getVisiblePassword = atom({ key: "visible-password", default: false });
    visiblePassword = useRecoilValue(this.getVisiblePassword)

    checkSession = async () => {
        var result = await this.authService.authSession()

        if (result.data.session == null) {
            return false
        } else {
            return true
        }
    }

    setLoad = (isLoad: boolean) => {
        setRecoil(this.getPageLoad, isLoad)
    }

    checkSnk = () => {
        setRecoil(this.getSNK, !this.snk)
    }

    setVisiblePassword = () => {
        setRecoil(this.getVisiblePassword, !this.visiblePassword)
    }

    changeForm = (text: string, field: string) => {
        if (field == 'email') {
            var data = { ...this.form, email: text }

            setRecoil(this.getForm, data)
        }

        if (field == 'password') {
            var data = { ...this.form, password: text }

            setRecoil(this.getForm, data)
        }
    }

    validateData = async (mode: string) => {
        if (this.form.email === '' && this.form.password === '') {
            basicWarningToast('Email dan Password anda masih kosong!', mode)
            return false
        } else if (this.form.email === '') {
            basicWarningToast('Email anda masih kosong!', mode)
            return false
        } else if (this.form.password === '') {
            basicWarningToast('Password anda masih kosong!', mode)
            return false
        } else if (this.snk === false) {
            basicWarningToast('Anda masih belum menyetujui Syarat dan Ketentuan kami!', mode)
            return false
        } else {
            return await this.signIn(this.form.email, this.form.password, mode)
        }
    }

    signIn = async (email: string, password: string, mode: string) => {
        setRecoil(this.getPreload, true)

        var result = await this.authService.authSignIn(email, password)

        setRecoil(this.getPreload, false)

        if (result.data.session == null) {
            basicWarningToast('Login Gagal', mode)
            return false
        } else {
            basicSuccessToast('Login Berhasil', mode)
            return true
        }
    }
}

export default AuthPageController
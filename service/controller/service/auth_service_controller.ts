import supabaseConfig from "../../config/supabase-config";

class AuthServiceController {
    supabase = supabaseConfig.supabase

    authSession = async () => {
        return await this.supabase.auth.getSession();
    }

    authSignIn = async (email: string, password: string) => {
        return await this.supabase.auth.signInWithPassword({
            email: email,
            password: password,
        })
    }

    authRegister = async (email: string, password: string) => {
        return await this.supabase.auth.signUp({
            email: email,
            password: password,
        })
    }

    authSignOut = async () => {
        return await this.supabase.auth.signOut()
    }
}

export default AuthServiceController
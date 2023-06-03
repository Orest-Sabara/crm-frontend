import {useForm} from "react-hook-form";
import {authService} from "../../services";

const LoginPage = () => {
    const {register, handleSubmit} = useForm();

    const login = async (userCredential: any) => {
        try {
            const {data} = await authService.login(userCredential)
            console.log(data)
        } catch (e: any) {
            console.log(e.response.data)
        }
    };

    return (
        <div>
            <div>
                <form onSubmit={handleSubmit(login)}>
                    <input type="text" placeholder={'username'} {...register('username')}/>
                    <input type="text" placeholder={'password'} {...register('password')}/>
                    <button>login</button>
                </form>
            </div>
        </div>
    )
}

export {LoginPage}
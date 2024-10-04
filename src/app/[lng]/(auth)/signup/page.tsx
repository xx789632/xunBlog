import Link from "next/link";
import SignUpForm from "@/components/forms/SignUpForm";
import SignInWithNaverButton from "@/components/buttons/SignInWithNaverButton";
import {useTranslation} from "@/app/i18n";

interface Props {
    params: {
        lng: string
    }
}
const Page: React.FC<Props> =async ({params}) => {
    const {t} =await useTranslation(params.lng, "auth");
    return (
        <div className="w-sm p-4 border rounded-lg shadow-lg flex-col-g2">
            <h2 className="text-center text-2xl font-bold">{t("signUp")}</h2>
            <SignUpForm lng={params.lng}/>
            <p>
                {t("orSignInWith")}
            </p>
            <SignInWithNaverButton />
            <p className="text-gray-700 text-md">
                {t("alreadyHaveAccount")}&nbsp;&nbsp;
                <Link href="/signin" className="underline text-blue-500">
                    {t("signIn")}
                </Link>
            </p>
        </div>
    );
};

export default Page;

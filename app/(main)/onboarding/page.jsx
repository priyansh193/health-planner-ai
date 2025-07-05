import { redirect } from "next/navigation";
import { countries } from '@/data/countries'
import OnBoardingForm from "./_components/OnBoardingForm";
import { getUserOnboardingStatus } from "@/actions/user";

const OnboardingPage = async () => {
    // Check if user is already onboarded
    const { isOnboarded } = await getUserOnboardingStatus();

    if (isOnboarded){
      redirect('/dashboard')
    }

  return (
    <main>
        <OnBoardingForm countries={countries} />
    </main>
  )
}

export default OnboardingPage

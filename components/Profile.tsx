"use client";
import '@fortawesome/fontawesome-svg-core/styles.css'
import { sourceCodePro } from '@/utils/fonts';
import { internshipExperiences, collegeExperiences } from '../data/experience';
import Experience from '@/components/Experience';

const Profile = () => {
  return (
    <>
      <main className="min-h-screen flex flex-col items-center px-4 sm:px-8">
        <div className="flex flex-col gap-12 mt-16 w-full max-w-4xl">
          <div>
            <h2 className={`text-2xl font-bold mb-8 animate-fade-in-up delay-2 ${sourceCodePro.className}`}>
              My Prior Internship Experience:
            </h2>
            <Experience data={internshipExperiences} />
            <h2 className={`text-2xl font-bold mt-16 mb-8 animate-fade-in-up delay-3  ${sourceCodePro.className}`}>
              @ The College of Wooster
            </h2>
            <Experience data={collegeExperiences} />
          </div>      
        </div>
      </main>
    </>
  );
}
export default Profile;



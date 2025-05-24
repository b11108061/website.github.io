import React, { useState } from 'react';
import { Briefcase, GraduationCap, User, ArrowDownCircle } from 'lucide-react';
import ShimmerText from '@/components/ShimmerText';

type TabId = 'about' | 'work' | 'education';

const About: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabId>('about');

  const tabs: {
    id: TabId;
    label: string;
    icon: React.ReactNode;
    content: React.ReactNode;
  }[] = [
    {
      id: 'about',
      label: 'About Me',
      icon: <User className="w-6 h-6" />,
      content: (
        <div className="flex flex-col h-full justify-between">
          <div className="space-y-6">
            <p className="text-lg text-gray-900 leading-relaxed">
              Hi, I'm Yao-An Chung — a Business Administration student with
              <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text font-semibold">
                {' '}a passion for strategic marketing and brand development.
              </span>
              {' '}I believe great marketing happens where insight meets execution — and that's the space where I thrive.
            </p>
            <p className="text-lg text-gray-900 leading-relaxed">
              I've contributed to
              <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text font-semibold">
                {' '}various marketing projects and social media campaigns,
              </span>
              {' '}sharpening both creative and analytical skills. I'm preparing for future roles in digital marketing and brand management, where I can bring powerful ideas to life.
            </p>
          </div>
          <div className="mt-8">
            <p className="text-gray-800 font-semibold text-lg mb-2">
              If you'd like to learn more about me, feel free to download my full resume.
            </p>
            <a
              href="/resume.pdf"
              download="Yao-An_Chung_Resume.pdf"
              className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold rounded-lg border border-blue-500 bg-white text-blue-500 transition hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500 hover:text-white"
            >
              <ArrowDownCircle className="w-4 h-4" />
              Download Resume
            </a>
          </div>
        </div>
      )
    },
    {
      id: 'work',
      label: 'Work Experience',
      icon: <Briefcase className="w-6 h-6" />,
      content: (
        <div className="space-y-8 text-gray-700 leading-relaxed">
          {/* Sales Associate */}
          <div>
            <div className="flex items-center justify-between">
              <h5 className="font-semibold text-lg text-gray-800">Sales Associate | Watsons Taiwan</h5>
              <p className="text-sm text-gray-500">Sep 2024 – May 2025</p>
            </div>
            <ul className="list-disc list-inside ml-5 space-y-1">
              <li>Assisted customers and recommended products.</li>
              <li>Operated cash register and processed payments accurately.</li>
              <li>Managed stock receiving, shelving, and returns.</li>
            </ul>
          </div>
          {/* Hong Yun Music */}
          <div>
            <div className="flex items-center justify-between">
              <h5 className="font-semibold text-lg text-gray-800">Summer Program Teacher | Hong Yun Music Co., Ltd.</h5>
              <p className="text-sm text-gray-500">Jul 2024 – Aug 2024</p>
            </div>
            <ul className="list-disc list-inside ml-5 space-y-1">
              <li>Planned and led summer camp activities for elementary students.</li>
              <li>Guided daily tasks, fostering creativity and teamwork.</li>
            </ul>
          </div>
          {/* Joy English */}
          <div>
            <div className="flex items-center justify-between">
              <h5 className="font-semibold text-lg text-gray-800">Summer Program Teacher | Joy English Language School</h5>
              <p className="text-sm text-gray-500">Jul 2023 – Aug 2023</p>
            </div>
            <ul className="list-disc list-inside ml-5 space-y-1">
              <li>Organized and supervised daily summer camp activities.</li>
              <li>Maintained a positive and safe learning environment.</li>
            </ul>
          </div>
        </div>
      )
    },
    {
      id: 'education',
      label: 'Education',
      icon: <GraduationCap className="w-6 h-6" />,
      content: (
        <div className="space-y-8 text-gray-700 leading-relaxed">
          {/* NTUST */}
          <div>
            <div className="flex items-center justify-between">
              <h5 className="font-semibold text-lg text-gray-800">NTUST | Business Administration</h5>
              <p className="text-sm text-gray-500">Sep 2022 – Jun 2026</p>
            </div>
            <ul className="list-disc list-inside ml-5 space-y-1">
              <li>GPA: 4.0</li>
              <li>Member, NTUST Central Region Alumni Association</li>
            </ul>
            <div className="bg-gray-100 p-4 rounded-lg mt-2 ml-5">
              <p className="text-gray-700">
                Learned to engage with professionals across diverse fields, and during the 2023 and 2024 winter breaks led three-day, two-night camps in Changhua, Taiwan for elementary school students.
              </p>
            </div>
          </div>
          {/* Senior High */}
          <div>
            <div className="flex items-center justify-between">
              <h5 className="font-semibold text-lg text-gray-800">National Zhubei Senior High School</h5>
              <p className="text-sm text-gray-500">Sep 2020 – Jun 2022</p>
            </div>
            <ul className="list-disc list-inside ml-5 space-y-1">
              <li>2nd Place Nationwide – 2022 Business Management Division, TVE Joint Entrance Exam</li>
              <li>Officer, Media and Communication Club (Event Planning Leader)</li>
            </ul>
            <div className="bg-gray-100 p-4 rounded-lg mt-2 ml-5">
              <p className="text-gray-700">
                Planned club programs and drafted event proposals; collaborated with other high schools to organize over five large-scale events.
              </p>
            </div>
          </div>
        </div>
      )
    }
  ];

  return (
    <section id="about" className="relative py-32 bg-[#F9FAFB] overflow-hidden">
      <div className="max-w-screen-xl mx-auto px-4">
        {/* Big Moving Text */}
        <div className="text-center mb-16">
          <ShimmerText className="text-5xl font-extrabold animate-gradient-slide-fast">
            Seeking passionate new talent in marketing?
          </ShimmerText>
          <p className="text-2xl font-bold text-gray-800 mt-4">
            I'm ready to grow and succeed together with you.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-4 items-start">
          {/* Left Side */}
          <div className="flex flex-col items-start justify-start w-full">
            {/* Button tabs */}
            <div className="flex justify-start space-x-4 mb-4 w-full">
              {tabs.map(tab => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center justify-center min-w-[160px] gap-2 px-4 py-2 rounded-full border transition ${
                    activeTab === tab.id
                      ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white'
                      : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-100'
                  }`}
                >
                  {tab.icon}
                  <span className="text-sm font-bold">{tab.label}</span>
                </button>
              ))}
            </div>

            {/* Info Card */}
            <div className="bg-white p-8 rounded-2xl shadow-md min-h-[400px] w-full fade-in">
              {tabs.find(t => t.id === activeTab)?.content}
            </div>
          </div>

          {/* Right Side */}
          <div className="flex flex-col items-center justify-start ml-auto">
            <div
              className="relative w-80 h-80 rounded-full overflow-hidden shadow-xl hover:scale-105 transition-all duration-500 p-[2px] fade-in"
              style={{ backgroundImage: 'linear-gradient(135deg, #3B82F6, #8B5CF6)' }}
            >
              <img
                src="https://i.imgur.com/tJ1hl5n.jpeg"
                alt="Yao-An Chung"
                className="w-full h-full object-cover object-center rounded-full"
              />
            </div>
            <p className="mt-6 text-xl font-semibold text-gray-800">Yao-An Chung</p>
            <p className="mt-2 text-sm text-gray-500">"Driven by creativity, defined by strategy.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

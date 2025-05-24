import React, { useRef, useState, useEffect } from 'react';
import {
  Lightbulb,
  Share2,
  LineChart,
  Presentation as PresentationScreen,
  Users,
  Puzzle as PuzzlePiece,
  CheckCircle
} from 'lucide-react';

interface SkillData {
  title: string;
  summary: string;
  points: string[];
  icon: React.ReactNode;
}

const Skills: React.FC = () => {
  const skills: SkillData[] = [
    {
      title: "Marketing Strategy",
      summary:
        "Developed comprehensive marketing knowledge and project management skills through university coursework and projects.",
      points: [
        "Service marketing, entrepreneurship, marketing management, data science, and digital business.",
        "Deep understanding of industry trends and market dynamics.",
        "Experienced in developing strategic plans aligning with market needs."
      ],
      icon: <Lightbulb className="w-8 h-8" />
    },
    {
      title: "Social Media Marketing",
      summary:
        "Strengthened practical social media marketing skills through real-world campaign execution.",
      points: [
        "Boosted summer camp enrollment by 10 students through weekly updates.",
        "Experienced in content creation and engagement growth.",
        "Understanding of social media's role in driving marketing success."
      ],
      icon: <Share2 className="w-8 h-8" />
    },
    {
      title: "Statistical Data Analysis & Programming",
      summary:
        "Gained proficiency in statistical tools and AI applications for research and business insights.",
      points: [
        "Practical experience with SPSS and Python (PyCharm).",
        "Applied SEM (Structural Equation Modeling) in graduation thesis.",
        "Strong skills in data interpretation and model analysis."
      ],
      icon: <LineChart className="w-8 h-8" />
    },
    {
      title: "Communication & Presentation",
      summary:
        "Developed clear and persuasive communication skills through academic presentations.",
      points: [
        "Delivered multiple formal presentations on diverse topics.",
        "Skilled in visual storytelling and audience engagement.",
        "Ability to simplify complex ideas effectively."
      ],
      icon: <PresentationScreen className="w-8 h-8" />
    },
    {
      title: "Leadership",
      summary:
        "Built leadership and conflict-resolution skills through mentoring and team coordination.",
      points: [
        "Mentored students in project-based activities.",
        "Fostered teamwork and maintained positive learning environments.",
        "Effective communication for conflict prevention and resolution."
      ],
      icon: <Users className="w-8 h-8" />
    },
    {
      title: "Problem-Solving",
      summary:
        "Refined problem-solving skills by organizing and managing various events.",
      points: [
        "Handled unexpected situations during event organization.",
        "Improved processes by reflecting on experience.",
        "Enhanced adaptability and resilience in dynamic environments."
      ],
      icon: <PuzzlePiece className="w-8 h-8" />
    }
  ];

  const [activeSkillIndex, setActiveSkillIndex] = useState(0);
  const buttonRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const [dotTop, setDotTop] = useState(0);

  // 更新圓點位置以對應當前選中的技能按鈕
  useEffect(() => {
    const btn = buttonRefs.current[activeSkillIndex];
    if (btn) {
      const top = btn.offsetTop + btn.offsetHeight / 2 - 8;
      setDotTop(top);
    }
  }, [activeSkillIndex]);

  return (
    <section id="skills" className="py-32 bg-gray-50 animate-fadeIn">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* header */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-5xl font-extrabold inline-block border-b-4 border-transparent bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
            Skills & Expertise
          </h2>
          <p className="mt-6 text-xl text-gray-600">
            Combining strategic thinking with creative execution to deliver impactful marketing solutions.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-12 max-w-7xl mx-auto relative">
          {/* 左側內容 */}
          <div className="md:w-5/12 flex flex-col justify-center p-8 bg-white rounded-2xl shadow-md min-h-[500px] max-h-[500px] overflow-hidden">
            <div className="text-blue-500 mb-4">
              {skills[activeSkillIndex].icon}
            </div>
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              {skills[activeSkillIndex].title}
            </h3>
            <p className="text-gray-600 text-lg leading-relaxed mb-4">
              {skills[activeSkillIndex].summary}
            </p>

            {/* 只有 Marketing Strategy 時，插入 Courses 內文 */}
            {activeSkillIndex === 0 && (
              <p className="text-gray-700 mb-6">
                <strong className="font-bold text-gray-900 text-xl mr-2">
                  Courses:
                </strong>
                <span className="text-lg">
                  {skills[0].points[0]}
                </span>
              </p>
            )}

            <ul className="space-y-4 text-gray-600">
              {skills[activeSkillIndex].points
                .slice(activeSkillIndex === 0 ? 1 : 0)
                .map((point, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-blue-500 flex-shrink-0 mt-1" />
                    <span>{point}</span>
                  </li>
                ))
              }
            </ul>
          </div>

          {/* 中間線與小圓點 */}
          <div className="hidden md:flex flex-col items-center relative py-6">
            <div className="w-1 bg-gray-300 rounded-full h-full"></div>
            <div
              className="absolute w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transition-all duration-300"
              style={{ top: `${dotTop}px`, left: '50%', transform: 'translateX(-50%)' }}
            ></div>
          </div>

          {/* 右側技能按鈕列表（恢復原始樣式與大小） */}
          <div className="md:w-5/12 flex flex-col justify-center space-y-2">
            {skills.map((skill, index) => (
              <button
                key={index}
                ref={el => (buttonRefs.current[index] = el)}
                onMouseEnter={() => setActiveSkillIndex(index)}
                className={`w-full text-left px-6 py-3 rounded-lg transition-all duration-300 font-bold text-lg ${
                  activeSkillIndex === index
                    ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                {skill.title}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;

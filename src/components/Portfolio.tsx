import React, { useState } from 'react';

interface PortfolioItemData {
  title: string;
  description: string;
  imageUrl: string;
  tags: string[];
  category: 'Marketing' | 'Programming' | 'Project Mgmt';
  detailsHtml: string;
  canvaLink?: string;
}

const PortfolioItem: React.FC<{
  item: PortfolioItemData;
  onLearnMore: (item: PortfolioItemData) => void;
}> = ({ item, onLearnMore }) => (
  <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 flex flex-col h-full">
    
  <div className="aspect-[4/3] overflow-hidden rounded-lg mb-4">
    {item.videoUrl ? (
      <iframe
        src={item.videoUrl}
        frameBorder="0"
        allow="autoplay; fullscreen"
        allowFullScreen
        className="w-full h-full rounded-lg object-contain"
      />
    ) : (
      <img
        src={item.imageUrl}
        alt={item.title}
        className="w-full h-full object-contain bg-gray-50 rounded-lg"
      />
  )}
</div>
<h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-1">{item.title}</h3>
<p className="text-gray-600 text-base leading-relaxed mb-4 line-clamp-2">{item.description}</p>
<div className="flex flex-wrap gap-2 mt-auto mb-4">
  {item.tags.map((tag, idx) => (
    <span key={idx} className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">
      {tag}
    </span>
  ))}
</div>


    <button
      onClick={() => onLearnMore(item)}
      className="w-full px-6 py-2 text-base border border-gray-300 text-gray-700 font-semibold rounded-full transition-all duration-300 hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500 hover:text-white hover:border-transparent"
    >
      Learn More
    </button>
  </div>
);

const Portfolio: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<'Marketing' | 'Programming' | 'Project Mgmt'>('Marketing');
  const [modalItem, setModalItem] = useState<PortfolioItemData | null>(null);

  const portfolioItems: PortfolioItemData[] = [
        // Marketing
    {
      title: "Marketing Course Startup Proposal",
      description: "This project focuses on an entrepreneurial plan surrounding the theme of marine sustainability.",
      imageUrl: "https://i.imgur.com/wv0zVMQ.png",
      tags: ["Marketing", "Proposal"],
      category: 'Marketing',
      detailsHtml: `
        <p>It proposes the establishment of a marine workshop to promote environmental protection awareness. The plan includes a project overview, marketing strategy analysis, detailed execution contents, and benefit evaluation.</p>

        <h3 class="text-xl font-bold text-black mt-6 mb-3">1. Project Overview:</h3>
        <p>This project aims to establish the "Marine Workshop," dedicated to raising public awareness of marine conservation and sustainable development. The activities will combine educational courses, interactive workshops, and environmental advocacy to further promote marine protection actions.</p>

        <h3 class="text-xl font-bold text-black mt-6 mb-3">2. Marketing Strategy Analysis:</h3>
        <ul class="list-disc list-inside">
          <li>SWOT Analysis</li>
          <li>STP Analysis</li>
          <li>7P Analysis</li>
          <li>PEST Analysis</li>
        </ul>

        <h3 class="text-xl font-bold text-black mt-6 mb-3">3. Project Content:</h3>
        <ul class="list-disc list-inside">
          <li><strong>Marine Education Courses:</strong> Provide courses on marine conservation, including marine biology introduction, pollution prevention, recycling, and practical sustainability skills.</li>
          <li><strong>Handmade Workshops:</strong> Participants can learn to create eco-friendly products, such as reusable marine-themed packaging, handmade cleaning products, and other ways to protect the ocean in daily life.</li>
        </ul>

        <h3 class="text-xl font-bold text-black mt-6 mb-3">4. Benefit Evaluation:</h3>
        <ul class="list-disc list-inside">
          <li><strong>Social Benefits:</strong> The project is expected to raise public awareness of marine sustainability.</li>
          <li><strong>Environmental Benefits:</strong> Through practical actions and clean-up activities, the project aims to reduce marine pollution and promote community and government support for marine conservation policies.</li>
          <li><strong>Economic Benefits:</strong> The establishment of the workshop will attract interested participants and partners, creating a stable income source for the business and promoting the development of the marine protection industry chain.</li>
        </ul>
      `,
      canvaLink: "https://www.canva.com/design/DAGnOMGRrPQ/EE68xeDPT3G8AWF9FIAfQg/view"
    },
    {
      title: "2025 ITAC Conference Submission",
      description: "FOMO or JOMO? A study on how short-form videos impact travel intentions.",
      imageUrl: "https://i.imgur.com/2UfdIA8.png",
      tags: ["Research", "Conference"],
      category: 'Marketing',
      detailsHtml: `
        <p>This project is a senior graduation thesis from the Department of Business Administration, National Taiwan University of Science and Technology. It explores the impact of short-form video content on travel intentions, focusing on FOMO and JOMO phenomena.</p>

        <h3 class="text-xl font-bold text-black mt-6 mb-3">1. Research Background</h3>
        <p>Examining the rise of short-form video platforms and their influence on consumer behavior, particularly in tourism decisions.</p>

        <h3 class="text-xl font-bold text-black mt-6 mb-3">2. Research Motivation</h3>
        <p>Understanding whether FOMO (Fear of Missing Out) or JOMO (Joy of Missing Out) better explains the psychological mechanisms behind travel decisions influenced by short videos.</p>

        <h3 class="text-xl font-bold text-black mt-6 mb-3">3. Literature Review</h3>
        <p>Comprehensive review of existing studies on FOMO, JOMO, social media effects, and travel intention formation.</p>

        <h3 class="text-xl font-bold text-black mt-6 mb-3">4. Hypothesis Development</h3>
        <p>Formulation of hypotheses regarding the mediating roles of emotional states and cognitive evaluations.</p>

        <h3 class="text-xl font-bold text-black mt-6 mb-3">5. Research Design</h3>
        <p>Design of survey methodology, measurement scales, and data analysis plans for testing hypotheses.</p>

        <h3 class="text-xl font-bold text-black mt-6 mb-3">6. Expected Future Development</h3>
        <p>Discussion of potential academic contributions, marketing implications, and future research directions based on findings.</p>

        <p>This project was submitted to the 2025 ITAC International Conference at China University of Technology and successfully received abstract publication certification.</p>
      `,
      canvaLink: "https://www.canva.com/design/DAGlMTAj5YA/WN_B_7Wyktz8m8a470KgBQ/view"
    },
    {
      title: "Smart Home Integration Platform",
      description: "Proposal project for Innovation and Entrepreneurship course.",
      imageUrl: "https://i.imgur.com/6hU5QDL.jpeg",
      tags: ["Startup", "Smart Home"],
      category: 'Marketing',
      detailsHtml: `
        <p>This proposal is a business plan for developing a Smart Home Integration Platform, aiming to solve the current issues of fragmented devices and complex operations in the smart home market. It offers a unified platform to enhance user experience and quality of life.</p>

        <h3 class="text-xl font-bold text-black mt-6 mb-3">Contents:</h3>
        <ul class="list-disc list-inside">
          <li><strong>Executive Summary</strong></li>
          <li><strong>Industry, Competitor, and Customer Analysis</strong></li>
          <li><strong>Product and Content Offering</strong></li>
          <li><strong>Business Strategy and Business Model</strong></li>
          <li><strong>Marketing Plan</strong></li>
          <li><strong>Operational Plan</strong></li>
          <li><strong>Future Development Plan</strong></li>
          <li><strong>Management Team</strong></li>
          <li><strong>Key Risks</strong></li>
          <li><strong>Financial Plan</strong></li>
        </ul>

        <p>The goal is to provide a seamless, efficient, and user-friendly smart home experience through system integration and strategic development.</p>
      `,
      canvaLink: "https://www.canva.com/design/DAFlEJxgVD4/GR7VhPbTlSVj_DcT3pqSTw/view"
    },
    // Programming
    {
  title: "Facial Landmark Mesh",
  description: "Capture live camera feed in real time and overlay a facial landmark mesh on the display.",
  imageUrl: "https://i.ibb.co/TBwKmFVX/1.png",
  tags: ["MediaPipe Drawing", "Face Mesh"],
  category: 'Programming',
  detailsHtml: `
    <!-- 頂部圖片 -->
    <img src="https://i.ibb.co/xKF6KYWf/2.png"
         alt="Facial Landmark Mesh Demo"
         class="w-full rounded-lg mb-4"/>

    <!-- 說明文字 -->
    <p>This program uses MediaPipe Face Mesh for real-time facial landmark detection and visualizes the results as mesh lines using OpenCV. It can be applied in facial expression analysis, video filters, and virtual character face tracking.
</p>
        <h3 class="text-xl font-bold text-black mt-6 mb-3">1. Import Required Libraries </h3>
        <p># cv2: OpenCV, for image capture and display.</p>
        <p># numpy: For image array manipulation.<p>
        <p># mediapipe: Provides Face Mesh and drawing utilities.<p>

        <h3 class="text-xl font-bold text-black mt-6 mb-3">2. Set Up MediaPipe Drawing and Face Mesh </h3>
        <p>Configure drawing styles for facial landmarks and connections.</p>
        <p>Initialize the Face Mesh detector with minimum detection and tracking confidence.<p>

         <h3 class="text-xl font-bold text-black mt-6 mb-3">3. Activate the Webcam and Read Frames </h3>
        <p>Open the default camera (# 0) and continuously read frames from it.</p>
        <p>Each frame will be used for facial landmark processing and drawing.<p>

        <h3 class="text-xl font-bold text-black mt-6 mb-3">4. Preprocess Image and Detect Facial Landmarks </h3>
        <p>Create a blank white background (optional and unused in this case).</p>
        <p>Convert the BGR image to RGB format (required by MediaPipe).<p>
        <p>Use # FaceMesh.process() to detect facial landmarks in the current frame.<p>
        
        <h3 class="text-xl font-bold text-black mt-6 mb-3">5. Draw Detected Facial Mesh </h3>
        <p>If any faces are detected, iterate through each detected face.</p>
        <p>Draw the facial landmark points and mesh connections on the original image using predefined styles.<p>

        <h3 class="text-xl font-bold text-black mt-6 mb-3">Display Image and Exit Condition </h3>
        <p>Show the processed frame in a window .</p>
        <p>Wait for a key press; if the ESC key (ASCII 27) is pressed, exit the loop.<p>
        <p>Release the webcam and close all OpenCV windows.<p>


 

    <!-- 代碼區塊，外面包一層淺灰背景 -->
    <div class="bg-gray-100 p-4 rounded-lg overflow-x-auto mt-4">
      <pre><code class="language-python">
import cv2
import numpy as np
import mediapipe as mp


mpd = mp.solutions.drawing_utils
mpfm = mp.solutions.face_mesh
dspec = mpd.DrawingSpec((0, 255, 0), 1, 1)
cspec = mpd.DrawingSpec((128, 128, 128), 1, 1)
cpoint = mpfm.FACEMESH_TESSELATION
fm = mpfm.FaceMesh(min_detection_confidence=0.5, min_tracking_confidence=0.5)


cap = cv2.VideoCapture(0)
while cap.isOpened():
    success, image = cap.read()

    
    bgb = np.full_like(image, (255, 255, 255), np.uint8)
    imgrgb = cv2.cvtColor(image, cv2.COLOR_BGR2RGB)
    results = fm.process(imgrgb)

    
    if results.multi_face_landmarks:
        for f_landmarks in results.multi_face_landmarks:
            mpd.draw_landmarks(
                image,
                landmark_list=f_landmarks,
                connections=cpoint,
                landmark_drawing_spec=dspec,
                connection_drawing_spec=cspec
            )

    
    cv2.imshow('b11108061_faceLM1', image)
    if cv2.waitKey(5) & 0xFF == 27:
        break

cap.release()
cv2.destroyAllWindows()
      </code></pre>
    </div>
  `,
  canvaLink: "https://…"
    },
    {
      title: "PoseCurl Tracker",
      description: "Real-time bicep curl detection and repetition counter using pose estimation.",
      videoUrl: "https://www.youtube.com/embed/kDVRpPxxKxg",
      tags: ["MediaPipe Pose", "OpenCV"],
      category: 'Programming',
      detailsHtml: `
        <!-- 頂部圖片 -->
        <img src="https://i.ibb.co/ZRnKX88g/3.png"
             alt="PoseCurl Tracker Demo"
             class="w-full rounded-lg mb-4"/>

        <!-- 功能描述 -->
        <p>This Python program utilizes MediaPipe Pose and OpenCV to detect and analyze real-time body movements, specifically focusing on counting the number of right arm bicep curls. It calculates the angle at the right elbow joint and visually displays the curl percentage and total repetitions on screen.</p>

        <!-- 步驟 1 -->
        <h3 class="text-xl font-bold text-black mt-6 mb-3">1. Import Libraries and Initialize Components</h3>
        <p># cv2: OpenCV for video capture and image rendering</p>
        <p># mediapipe: Used for pose landmark detection</p>
        <p># numpy, # math: For numerical operations</p>
        <p>Initializes the MediaPipe Pose detector and drawing styles.</p>

        <!-- 步驟 2 -->
        <h3 class="text-xl font-bold text-black mt-6 mb-3">2. Capture Webcam Video</h3>
        <p>Opens the default webcam (index 0).</p>

        <!-- 步驟 3 -->
        <h3 class="text-xl font-bold text-black mt-6 mb-3">3. Preprocess Frame and Detect Pose Landmarks</h3>
        <p>Convert to RGB and detect pose landmarks.</p>

        <!-- 步驟 4 -->
        <h3 class="text-xl font-bold text-black mt-6 mb-3">4. Extract Pose Landmark Positions</h3>
        <p>Convert normalized landmark coords to pixel values and store in a list for calculations.</p>

        <!-- 步驟 5 -->
        <h3 class="text-xl font-bold text-black mt-6 mb-3">5. Calculate Right Elbow Angle</h3>
        <p>Compute the angle at the right elbow using three joint positions and arctangent formulas.</p>

        <!-- 步驟 6 -->
        <h3 class="text-xl font-bold text-black mt-6 mb-3">6. Visualize Angle and Progress Bar</h3>
        <p>Draw lines, circles, interpolate angle to percentage and bar height.</p>

        <!-- 步驟 7 -->
        <h3 class="text-xl font-bold text-black mt-6 mb-3">7. Count Repetitions Based on Motion State</h3>
        <p>Track the up/down motion to increment the rep counter when thresholds are crossed.</p>

        <!-- 步驟 8 -->
        <h3 class="text-xl font-bold text-black mt-6 mb-3">8. Display Count and Video Output</h3>
        <p>Overlay the repetition count and show the processed frame in a named window.</p>

        <!-- 步驟 9 -->
        <h3 class="text-xl font-bold text-black mt-6 mb-3">9. Exit Condition</h3>
        <p>Press ESC to exit, then release the webcam and close all windows.</p>

        <!-- 完整代碼 -->
        <div class="bg-gray-100 p-4 rounded-lg overflow-x-auto mt-4">
          <pre><code class="language-python">
import cv2, mediapipe as mp, numpy as np, math

pose = mp.solutions.pose.Pose()
conn = mp.solutions.pose.POSE_CONNECTIONS
mpd = mp.solutions.drawing_utils
spec = mp.solutions.drawing_styles.get_default_pose_landmarks_style()
switch, count = 0, 0
color = (0, 0, 255)

cap = cv2.VideoCapture(0)
while cap.isOpened():
    success, image = cap.read()

    imgrgb = cv2.cvtColor(image, cv2.COLOR_BGR2RGB)
    results = pose.process(imgrgb)

    h, w, _ = image.shape
    poslist = []
    if results.pose_landmarks:
        for id, lm in enumerate(results.pose_landmarks.landmark):
            cx, cy = int(lm.x * w), int(lm.y * h)
            poslist.append([id, cx, cy])

        x1, y1 = poslist[12][1], poslist[12][2]
        x2, y2 = poslist[14][1], poslist[14][2]
        x3, y3 = poslist[16][1], poslist[16][2]
        angle = math.degrees(math.atan2(y3 - y2, x3 - x2) - math.atan2(y1 - y2, x1 - x2))
        right_angle = abs(int(angle))

        right_per = np.interp(right_angle, (10, 170), (100, 0))
        right_bar = int(np.interp(right_angle, (10, 170), (200, 400)))

        cv2.rectangle(image, (180, 200), (210, right_bar), color, cv2.FILLED)
        cv2.putText(image, f'{int(right_per)}%', (180, 430), cv2.FONT_HERSHEY_PLAIN, 2, color, 2)

        if right_per >= 95 and switch === 0:
            count += 0.5
            switch = 1
        if right_per <= 5 and switch === 1:
            count += 0.5
            switch = 0

        cv2.putText(image, str(int(count)), (50, 100), cv2.FONT_HERSHEY_PLAIN, 5, color, 5)

    cv2.imshow('PoseCurl Tracker', image)
    if cv2.waitKey(5) & 0xFF === 27:
        break

cap.release()
cv2.destroyAllWindows()
          </code></pre>
        </div>
      `
    },
    {
  title: "Smart Guide: Assistive Navigation System",
  description: "Voice-driven, audio-guided intelligent navigation experience.",
  videoUrl: "https://www.youtube.com/embed/DTQ37IiiWww",
  tags: ["Streamlit", "YOLO", "Speech Recognition", "OpenCV"],
  category: 'Programming',
  detailsHtml: `
    <!-- Feature Description -->
    <p>The program consists of four main modules. Via voice input, it automatically opens navigation, activates the camera for obstacle detection, and then provides audio feedback—offering visually impaired users a friendly, accessible interface.</p>

    <!-- Module 1 -->
    <h3 class="text-xl font-bold text-black mt-6 mb-2">Speech Recognition Module</h3>
    <p>This module uses the <code>speech_recognition</code> library to capture the user’s voice commands. It listens through the microphone, converts spoken words into text, and passes them on to the navigation logic.</p>

    <!-- Module 2 -->
    <h3 class="text-xl font-bold text-black mt-6 mb-2">Google Maps Integration</h3>
    <p>Once a destination and transport mode are received, this module builds and opens a Google Maps URL in the browser, providing turn-by-turn directions tailored to walking, bus, or metro.</p>

    <!-- Module 3 -->
    <h3 class="text-xl font-bold text-black mt-6 mb-2">YOLO + OpenCV Detection</h3>
    <p>Leveraging an Ultralytics YOLO model and OpenCV, this component analyzes each video frame for objects and obstacles. Detected items are labeled and region-based alerts are sent as audio cues.</p>

    <!-- Module 4 -->
    <h3 class="text-xl font-bold text-black mt-6 mb-2">Text-to-Speech Engine</h3>
    <p>Powered by <code>pyttsx3</code>, this module converts navigation instructions and obstacle warnings back into natural-sounding speech, ensuring the user is guided every step of the way.</p>

    <!-- Code Sample -->
    <div class="bg-gray-100 p-4 rounded-lg overflow-x-auto mt-4">
      <pre><code class="language-python">
import streamlit as st
import cv2
import time
import webbrowser
from ultralytics import YOLO
import speech_recognition as sr
import pyttsx3

# 初始化模型與引擎
model = YOLO("yolov8n")  # 自動下載權重
engine = pyttsx3.init()


def speak(text: str):
    """
    播報文字，同時在側邊欄顯示。
    """
    st.sidebar.write(f"🤖: {text}")
    engine.say(text)
    engine.runAndWait()


def listen(prompt: str = "請開始說話") -> str:
    """
    語音錄製並辨識。
    """
    recognizer = sr.Recognizer()
    with sr.Microphone() as source:
        speak(prompt)
        audio = recognizer.listen(source)
    try:
        return recognizer.recognize_google(audio, language="zh-TW")
    except Exception:
        return "我沒有聽清楚，請再說一次。"


def build_maps_url(destination: str, transport: str) -> str:
    base = "https://www.google.com/maps/dir/?api=1"
    mode_map = {"走路": "walking", "公車": "transit", "捷運": "transit"}
    tm = mode_map.get(transport, "walking")
    return f"{base}&destination={destination}&travelmode={tm}"


def main():
    st.set_page_config(page_title="智慧導盲系統 SmartGuide", layout="wide")
    st.title("🤖 智慧導盲系統 Web App")

    session = st.session_state
    session.setdefault("step", 0)
    session.setdefault("dest", "")
    session.setdefault("transport", "")
    session.setdefault("detecting", False)

    # 側邊欄：導航 & 對話控制
    with st.sidebar:
        st.header("導航功能（手動）")
        dest_in = st.text_input("目的地", session.dest)
        transport_in = st.selectbox("交通方式", ["走路", "公車", "捷運"], index=["走路","公車","捷運"].index(session.transport) if session.transport in ["走路","公車","捷運"] else 0)
        if st.button("開始導航 (手動)"):
            session.dest = dest_in
            session.transport = transport_in
            url = build_maps_url(dest_in, transport_in)
            webbrowser.open(url)
            speak("已為您開啟 Google Maps 導航，並啟用智慧鏡頭偵測。")
            session.step = 1
            session.detecting = True

        st.markdown("---")
        st.header("語音互動 (自動)")
        if session.step == 0:
            # 啟動語音問路流程
            time.sleep(20)
            speak("您好，我是您的智慧導盲助手。請問今天想要去哪裡？")
            session.dest = listen()
            st.sidebar.write(f"目的地 (語音)：{session.dest}")
            speak("請問您想用什麼交通工具？例如走路、公車或捷運。")
            session.transport = listen()
            st.sidebar.write(f"交通方式 (語音)：{session.transport}")
            url = build_maps_url(session.dest, session.transport)
            webbrowser.open(url)
            speak("已為您開啟 Google Maps 導航，並啟用智慧鏡頭偵測。")
            session.step = 1
            session.detecting = True

        if session.detecting:
            if st.button("停止偵測"):
                session.detecting = False

    # 若已啟動偵測，使用 OpenCV loop
    if session.detecting:
        st.header("🔍 智慧鏡頭即時偵測 (OpenCV)")
        cap = cv2.VideoCapture(0)
        FRAME_WINDOW = st.empty()
        last_spoken = time.time()
        interval = 3

        while session.detecting:
            ret, frame = cap.read()
            if not ret:
                break

            # YOLO 偵測
            results = model(frame)[0]
            height, width = frame.shape[:2]
            region_labels = {"左邊": [], "中間": [], "右邊": []}
            for box in results.boxes:
                cls_id = int(box.cls[0])
                label = results.names[cls_id]
                x1, y1, x2, y2 = map(int, box.xyxy[0])
                cx = (x1 + x2) // 2
                region = "左邊" if cx < width/3 else ("中間" if cx < 2*width/3 else "右邊")
                region_labels[region].append(label)
                # 畫框和標籤
                cv2.rectangle(frame, (x1, y1), (x2, y2), (0,255,0), 2)
                cv2.putText(frame, label, (x1, y1-10), cv2.FONT_HERSHEY_SIMPLEX, 0.9, (0,255,0), 2)

            # 每隔 interval 播報
            if time.time() - last_spoken > interval:
                descriptions = []
                for region, items in region_labels.items():
                    if items:
                        unique = set(items)
                        text = "、".join(unique)
                        if "斑馬線" in text:
                            descriptions.append(f"{region}是斑馬線，請注意過馬路安全")
                        elif "人" in text or "person" in text:
                            descriptions.append(f"{region}有人")
                        elif "腳踏車" in text or "bicycle" in text:
                            descriptions.append(f"{region}有腳踏車")
                        elif "交通燈" in text or "traffic light" in text:
                            descriptions.append(f"{region}是交通燈號，請注意等候或通行")
                        elif "車" in text or "car" in text:
                            descriptions.append(f"{region}有車輛經過，請小心通行")
                        elif "貓" in text or "cat" in text:
                            descriptions.append(f"{region}有貓")
                        elif "椅子" in text or "chair" in text:
                            descriptions.append(f"{region}有椅子")
                        elif "垃圾桶" in text or "trash can" in text:
                            descriptions.append(f"{region}有垃圾桶")
                        elif "樓梯" in text or "stair" in text:
                            descriptions.append(f"{region}是樓梯，請注意上下台階安全")
                        else:
                            descriptions.append(f"{region}有{text}")
                if descriptions:
                    speak("，".join(descriptions))
                last_spoken = time.time()

            # 顯示影像
            FRAME_WINDOW.image(frame, channels="BGR")
            # 偵測停止按鈕跑在同一側邊欄即可觸發退出
            if not session.detecting:
                break
        cap.release()

if __name__ == "__main__":
    main()

      </code></pre>
    </div>
  `,
      canvaLink: "https://www.canva.com/design/DAGoL54fC4M/Fm9PsNwxQYAmhV1KlUZk7Q/view?utm_content=DAGoL54fC4M&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h3cdfb21a3c"
    },

    // Project Mgmt
    {
      title: "Youth Volunteer Rural Service",
      description: "Project for Writing a Rural Service Summer Camp Plan.",
      imageUrl: "https://i.imgur.com/rO8DZ6Z.png",
      tags: ["Volunteer", "Education", "CSR"],
      category: 'Project Mgmt',
      detailsHtml: `
        <p>This project designs a three-day Youth Volunteer Rural Service Camp, aiming to bring university volunteers back to rural areas and offer rich learning experiences to elementary students, promoting their growth and development.</p>

        <h3 class="text-xl font-bold text-black mt-6 mb-3">Project Contents:</h3>
        <ul class="list-disc list-inside">
          <li>Project Overview</li>
          <li>Project Flowchart</li>
          <li>Gantt Chart</li>
          <li>Funding Budget Table</li>
          <li>Human Resource Assignment</li>
          <li>Target KPIs</li>
        </ul>

        <h3 class="text-xl font-bold text-black mt-6 mb-3">Practical Goals and Descriptions:</h3>

        <h4 class="text-lg font-semibold text-black mt-4 mb-2">1. Professional Social Engagement</h4>
        <p>Through science storytelling and interactive science challenges, children develop interest in science by understanding physics and chemistry principles via practical activities, integrating science into daily life.</p>

        <h4 class="text-lg font-semibold text-black mt-4 mb-2">2. Civic Awareness Cultivation</h4>
        <p>By participating in interactive performances and educational games, students learn about traffic safety, empathy towards people with disabilities, and environmental protection through waste classification activities.</p>

        <h4 class="text-lg font-semibold text-black mt-4 mb-2">3. University Social Responsibility</h4>
        <p>Returning to rural schools in Changhua for winter camps, volunteers not only enrich the experiences of local students but also develop their own skills in event organization and problem-solving.</p>

        <h4 class="text-lg font-semibold text-black mt-4 mb-2">4. Real-world Problem Solving</h4>
        <p>During preparation, leaders must negotiate with schools and solve execution challenges, while weekly meetings help improve and refine activities in progress.</p>

        <h4 class="text-lg font-semibold text-black mt-4 mb-2">5. Cross-disciplinary Innovation</h4>
        <p>Through interviews and team building activities, volunteers are grouped based on their personalities and interests into "Counselor" and "Activity" teams to enhance cooperation and mutual learning.</p>
      `,
      canvaLink: "https://www.canva.com/design/DAGGhIw3c5k/Bnyg9v_dT_NCALlQtowJZA/view"
    },
    {
      title: "Company Analysis - Kasisto",
      description: "In-depth Analysis of Kasisto's Marketing Strategy and AI Financial Solutions.",
      imageUrl: "https://i.postimg.cc/fbH0mkZj/kasisto.png",
      tags: ["Company Analysis", "FinTech", "AI"],
      category: 'Project Mgmt',
      detailsHtml: `
        <p>This project provides an in-depth analysis of Kasisto, focusing on its marketing strategies, company background, product offerings, pricing models, communication channels, and integrated marketing communication (IMC) strategies.</p>

        <h3 class="text-xl font-bold text-black mt-6 mb-3">Company Overview:</h3>
        <p>Kasisto leverages advanced artificial intelligence (AI) and natural language processing (NLP) technologies to provide intelligent customer service solutions for financial institutions, transforming traditional banking operations.</p>

        <h3 class="text-xl font-bold text-black mt-6 mb-3">Marketing Strategy Analysis:</h3>
        <ul class="list-disc list-inside">
          <li><strong>Product Introduction:</strong> AI-powered smart assistants specialized in the banking sector.</li>
          <li><strong>Pricing Strategy:</strong> B2B service model focusing on long-term enterprise contracts and customization.</li>
          <li><strong>Communication Channels:</strong> Direct B2B sales, industry conferences, and professional digital marketing.</li>
          <li><strong>IMC Strategy:</strong> Integration of thought leadership content, partnerships with fintech ecosystems, and consistent brand messaging across channels.</li>
        </ul>

        <h3 class="text-xl font-bold text-black mt-6 mb-3">Future Development Recommendations:</h3>
        <p>Kasisto should continue strengthening collaborations with industry leaders and leverage digital marketing tools to accelerate global expansion and brand recognition within the fintech sector.</p>
      `,
      canvaLink: "https://www.canva.com/design/DAGF2mA0vsU/hSd2ILTZB7Q6hNgsD5b_ZA/view"
    },
    {
      title: "Employee Recruitment - MSI",
      description: "Analysis of MSI's (Micro-Star International) Human Resource Recruitment and Selection Strategy.",
      imageUrl: "https://i.postimg.cc/KvNLx0VH/image.png",
      tags: ["HR", "Recruitment", "Employer Branding"],
      category: 'Project Mgmt',
      detailsHtml: `
        <p>This project analyzes the human resources recruitment and selection strategies of MSI (Micro-Star International) based on available information and credible sources such as Business Weekly.</p>

        <h3 class="text-xl font-bold text-black mt-6 mb-3">Key Analysis Areas:</h3>

        <h4 class="text-lg font-semibold text-black mt-4 mb-2">1. Recruitment Activities and Content</h4>
        <p>Analyzes MSI's recruitment team structure, key performance indicators (KPIs) set during hiring, and how recruitment planning aligns with overall business needs.</p>

        <h4 class="text-lg font-semibold text-black mt-4 mb-2">2. Sourcing Strategies</h4>
        <p>Studies MSI's primary recruitment platforms (LinkedIn, 104 Job Bank) and social media recruiting efforts (Facebook, Instagram, Weibo), emphasizing employer branding and candidate attraction.</p>

        <h4 class="text-lg font-semibold text-black mt-4 mb-2">3. Recruiting Programs</h4>
        <ul class="list-disc list-inside">
          <li><strong>STI Sustainable Talent Incubation Program:</strong> How MSI attracts and nurtures long-term employees through structured development programs.</li>
          <li><strong>MSI Campus Ambassador Program:</strong> Recruitment strategy aimed at engaging talented students and building a future talent pipeline.</li>
        </ul>

        <h4 class="text-lg font-semibold text-black mt-4 mb-2">4. Selection Process</h4>
        <p>Explores MSI's interview procedures (technical and behavioral interviews) and evaluation tools such as skill assessments, simulation exercises, and psychometric testing to ensure selecting the best candidates.</p>

        <h4 class="text-lg font-semibold text-black mt-4 mb-2">5. Talent Acquisition and Employer Branding</h4>
        <p>Discusses MSI's approach to enhancing employer brand attractiveness, improving candidate experience during the interview process, and maintaining transparency and efficiency throughout recruitment.</p>
      `,
      canvaLink: "https://www.canva.com/design/DAGnSrMR7hw/oS6k2BsZuHCb100JKnzaKg/view"
    }
  ];

  const filteredItems = portfolioItems.filter(item => item.category === activeCategory);

  const categoryDescriptions: Record<'Marketing' | 'Programming' | 'Project Mgmt', string> = {
    Marketing: 'This category features university coursework entrepreneurial marketing projects, \nincluding various marketing strategy analyses and certificates earned from participating in academic conferences.',
    Programming: 'With AI trends emerging and potential integration into marketing, \nthis category showcases works from programming courses in the PyCharm environment.',
    'Project Mgmt': 'This category includes other related works, such as project management and company analysis.'
  };

  return (
    <section id="portfolio" className="py-32 bg-[#F9FAFB]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-6">
          <h2 className="text-5xl font-extrabold inline-block bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
            Portfolio
          </h2>
        </div>

        {/* Category Toggle */}
        <div className="flex justify-center mb-4">
          <div className="relative flex bg-gray-200 rounded-full overflow-hidden w-[540px] h-14">
            <div
              className={`absolute top-0 left-0 h-full w-1/3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transition-all duration-300 ${
                activeCategory === 'Programming'
                  ? 'translate-x-full'
                  : activeCategory === 'Project Mgmt'
                  ? 'translate-x-[200%]'
                  : ''
              }`}
            />
            {['Marketing', 'Programming', 'Project Mgmt'].map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat as any)}
                className={`relative z-10 w-1/3 text-xl font-bold transition-all duration-300 ${
                  activeCategory === cat ? 'text-white' : 'text-gray-700 hover:text-gray-900'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Category Description */}
        <div className="text-center mb-8">
          <p className="text-lg font-bold text-black whitespace-pre-line">
            {categoryDescriptions[activeCategory]}
          </p>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {filteredItems.map(item => (
            <PortfolioItem key={item.title} item={item} onLearnMore={setModalItem} />
          ))}
        </div>
      </div>

      {/* Modal */}
      {modalItem && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          onClick={() => setModalItem(null)}
        >
          <div
            className="bg-white p-8 rounded-2xl max-w-2xl mx-4 relative transition-all duration-300"
            onClick={e => e.stopPropagation()}
          >
            <button
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-2xl"
              onClick={() => setModalItem(null)}
            >
              ×
            </button>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">{modalItem.title}</h2>
            <div
              className="text-gray-700 leading-relaxed max-h-[60vh] overflow-y-auto mb-6"
              dangerouslySetInnerHTML={{ __html: modalItem.detailsHtml }}
            />
            {modalItem.canvaLink && (
              <a
                href={modalItem.canvaLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-2 border border-gray-300 text-gray-700 font-bold rounded-full transition-all duration-300 hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500 hover:text-white hover:border-transparent"
              >
                View Full Presentation
              </a>
            )}
          </div>
        </div>
      )}
    </section>
  );
};

export default Portfolio;

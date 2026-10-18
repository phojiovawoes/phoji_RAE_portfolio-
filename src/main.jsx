import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { ArrowDown, ArrowUpRight, Mail, MoveUpRight, Phone, Play } from 'lucide-react';
import go2StairsUpVideo from './a1fdf127d9e482cee07788db485aabe3.mp4';
import go2StairsDownVideo from './bd69e6693086cb8d2b516649c306e0f4.mp4';
import './styles.css';

const asset = (path) => `${import.meta.env.BASE_URL}${path}`;

function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const updateNavigation = () => setIsScrolled(window.scrollY > window.innerHeight * 0.8);
    updateNavigation();
    window.addEventListener('scroll', updateNavigation, { passive: true });
    window.addEventListener('resize', updateNavigation);
    return () => {
      window.removeEventListener('scroll', updateNavigation);
      window.removeEventListener('resize', updateNavigation);
    };
  }, []);

  return <header className={`navigation${isScrolled ? ' navigation-scrolled' : ''}`}>
    <a className="identity" href="#home"><span className="identity-mark">YH</span><span>游海洋<span className="lime">.</span></span></a>
    <nav><a href="#about">经历</a><a href="#projects">项目</a><a href="#capabilities">技能</a><a href="#honors">荣誉与论文</a></nav>
    <a className="nav-contact" href="#contact">联系我 <ArrowUpRight size={15}/></a>
  </header>;
}

function Hero() {
  return <section className="hero" id="home">
    <div className="hero-image-wrap"><img className="hero-image" src={asset('hero-robot.jpg')} alt="机器人相机与感知设备" /></div>
    <div className="hero-overlay"/><div className="hero-grid"/>
    <div className="hero-content">
      <p className="kicker"><i/> ROBOTICS ALGORITHM ENGINEER <span/></p>
      <h1>让机器人在<br/>真实世界里<br/><em>行动自如。</em></h1>
      <p className="hero-description hero-signature"><strong>游海洋 /phoji</strong><br/><strong>Robotics &amp; Algorithm Engineer</strong></p>
      <div className="hero-actions"><button className="button-main" type="button">求职 / 实习开放中</button></div>
    </div>
    <div className="hero-footer"><span>01 / 04 <i/> PORTFOLIO</span><span>NANJING · CHINA</span><a href="#about">向下探索 <ArrowDown size={13}/></a></div>
  </section>;
}

function Heading({ number, label, title, note }) {
  return <div className="section-heading" data-reveal-sequence><span className="section-number">{number}<i> / 04</i></span><div data-reveal-sequence><p className="section-label">{label}</p><h2>{title}</h2></div><p className="section-note">{note}</p></div>;
}

function About() {
  return <section className="about section-wrap" id="about">
    <Heading number="01" label="PROFILE / 个人经历" title={<>从算法出发，<br/><span>走向真实机器。</span></>} note="用学习方法构建策略，以控制方法抵达现实。"/>
    <div className="about-body">
      <div className="about-copy" data-reveal-sequence><span className="micro-label">A — 01 / ABOUT</span><h3>关于<span className="about-title-light">我</span></h3>
        <div className="intro-paragraphs" data-reveal-sequence>
          <p>专注于<strong>机器人运动控制与AI网络架构</strong>领域的研发工程师，具备从硬件选型集成到上层智能算法的完整开发能力。研究覆盖<strong>自主导航与路径规划、强化学习步态控制、具身智能大模型</strong>等方向。独立跑通<strong>PPO、SAC、TD3、MAPPO</strong>等顶会算法，并在<strong>Jetson Nano</strong>设备完成实机部署。</p>
          <p>同时参与光伏储能预测控制与嵌入式智能车系统开发：基于<strong>Transformer-BiLSTM-CNN</strong>进行光伏功率预测，结合<strong>MPC</strong>完成储能调度；在<strong>Infineon TC364</strong>平台上完成<strong>ADC、PWM、UART</strong>采集，与<strong>PID</strong>控制和神经网络训练模型加权融合，优化控制算法从仿真、软件到整机落地。</p>
        </div>
        <div className="education" data-reveal-sequence><span className="education-title">教育背景</span><div className="education-row"><div className="education-main"><span className="education-date">2024.09 — 至今</span><b>南京邮电大学</b><span>电子信息</span><strong>硕士在读</strong></div><p className="education-detail">排名 26/92（前 30%），研究生三等奖学金，ICASSP 机器学习论文在投，预计 2027 年 6 月毕业</p></div><div className="education-row"><div className="education-main"><span className="education-date">2019.09 — 2023.06</span><b>西南石油大学</b><span>自动化</span><strong>工学学士</strong></div><p className="education-detail">排名 49/203（前 25%），2020 RoboMaster 国一、2020 中国工程机器人大赛国一、2021 恩智浦智能车国二</p></div></div>
        <div className="social-links"><a href="#contact">联系信息 <MoveUpRight size={12}/></a></div>
      </div>
    </div>
    <div className="facts" data-reveal-sequence><div><b>02</b><span>研究与实习经历</span></div><div><b>04</b><span>学科竞赛实践</span></div><div><b>01</b><span>ICASSP论文在投</span></div><div className="fact-status"><i/> OPEN TO ROBOTICS & AUTONOMY</div></div>
  </section>;
}

function LeggedArt() {
  return <div className="project-art legged-art"><div className="art-label"><span>SIMULATION / ENV 04</span><span>POLICY RUNNING <i/></span></div><div className="terrain-grid"/><svg className="trajectory" viewBox="0 0 600 350" aria-hidden="true"><path d="M17 275C106 270 100 211 183 218s86 61 148 2 94-75 146-54 75-61 116-92"/><path className="path-ghost" d="M17 287c91-8 102-54 169-50s98 58 160-2 102-74 156-50 74-61 105-77"/><circle cx="331" cy="220" r="5"/><circle cx="477" cy="166" r="5"/></svg><div className="mini-robot"><i className="bot-body"/><i className="bot-leg leg1"/><i className="bot-leg leg2"/><i className="bot-leg leg3"/><i className="bot-leg leg4"/><i className="bot-eye"/></div><div className="readout"><small>BASE VELOCITY</small><b>0.82 <i>m/s</i></b></div><span className="terrain-tag">ROUGH TERRAIN <b>+12.4°</b></span><span className="art-index">01 / 03</span></div>;
}

function EnergyArt() {
  return <div className="project-art energy-art"><div className="art-label"><span>ENERGY SYSTEM / MPC</span><span>LIVE MODEL <i/></span></div><div className="energy-flow"><div><span className="sun-mark">☼</span><b>PV ARRAY</b><small>FORECAST</small></div><i/><div><span className="battery-mark"><i/></span><b>HYBRID ESS</b><small>BATTERY + SC</small></div><i/><div><span className="load-mark">↗</span><b>GRID LOAD</b><small>STABILITY</small></div></div><div className="chart"><div><span>POWER PROFILE</span><span>24 H / ROLLING</span></div><svg viewBox="0 0 520 120" preserveAspectRatio="none" aria-hidden="true"><path className="area" d="M0 94C42 92 55 82 84 87s43 5 66-24 39-37 65-20 43 45 69 36 33-27 60-24 42 31 68 17 55-49 108-43v91H0Z"/><path d="M0 94C42 92 55 82 84 87s43 5 66-24 39-37 65-20 43 45 69 36 33-27 60-24 42 31 68 17 55-49 108-43"/><path className="secondary" d="M0 105c70-3 92-14 132-12s68-15 105-14 76 3 115-3 82-14 168-22"/></svg><div className="chart-time"><span>06:00</span><span>12:00</span><span>18:00</span><span>24:00</span></div></div><span className="art-index">02 / 03</span></div>;
}

function CarArt() {
  return <div className="project-art car-art"><div className="art-label"><span>EMBEDDED CONTROL / MCU</span><span>TRACK TEST <i/></span></div><div className="car-grid"/><div className="oval-track"><i/><i/><i/><i/></div><div className="mini-car"><i/><b/><span/></div><div className="car-readout"><b>1.6</b><small>m/s</small><span>TRACKING SPEED</span></div><span className="sensor sensor-a">EM SENSOR<br/><b>08 CH</b></span><span className="sensor sensor-b">STEERING<br/><b>PID + NN</b></span><span className="art-index">03 / 03</span></div>;
}

const projects = [
  { n:'01', type:'LOCOMOTION / REINFORCEMENT LEARNING', title:'让四足机器人，走过复杂地形。', stack:'宇树四足 · 强化学习 · 仿真迁移', body:'搭建四足机器人强化学习训练环境，设计状态、动作与奖励，并结合底层闭环控制和 sim-to-real 流程，提升复杂地形中的步态稳定性。', tags:['PPO / RL','SIM-TO-REAL','运动控制'], art:<LeggedArt/>, main:true },
  { n:'02', type:'ENERGY / PREDICTIVE CONTROL', title:'让预测，参与每一次能量调度。', stack:'光伏功率预测 · 混合储能 · MPC', body:'围绕光伏出力与储能协同，完成时序特征处理、多模型预测、储能系统建模与滚动优化控制，并在仿真中比较调度效果。', tags:['时间序列','混合储能','优化控制'], art:<EnergyArt/> },
  { n:'03', type:'EMBEDDED / AUTONOMOUS VEHICLE', title:'把感知信号，变成稳定循迹。', stack:'电磁循迹车 · 神经网络 · 嵌入式控制', body:'基于英飞凌 MCU 完成传感器采集、信号滤波和车辆控制，并将轻量神经网络与传统控制融合，完成整车调参与复杂赛道测试。', tags:['C / MCU','传感器融合','国赛二等奖'], art:<CarArt/> }
];

function LegacyProjects() {
  return <section className="projects" id="projects"><div className="section-wrap"><Heading number="02" label="SELECTED WORK / 精选项目" title={<>把研究问题，<br/><span>变成可运行的系统。</span></>} note="从策略训练，到控制闭环与部署验证。"/><div className="project-list">{projects.map(p=><article className={`project ${p.main?'project-main':''}`} key={p.n}><div className="project-image">{p.art}</div><div className="project-copy"><div className="project-meta"><span>{p.type}</span><span>精选项目 — {p.n}</span></div><h3>{p.title}</h3><p className="project-stack">{p.stack}</p><p className="project-description">{p.body}</p><div className="project-bottom"><div className="tags">{p.tags.map(t=><span key={t}>{t}</span>)}</div><a href="#contact" aria-label={`联系了解项目 ${p.n}`}><ArrowUpRight size={18}/></a></div></div></article>)}</div></div></section>;
}

const skillGroups = [
  { label: '感知 / 定位', items: ['自主导航', '路径规划', '传感器融合'] },
  { label: '规划 / 控制', items: ['PID', 'Dijkstra', 'LQR', 'MPC', 'Hybrid A*'] },
  { label: 'RL算法', items: ['PPO', 'SAC', 'TD3', 'MAPPO'] },
  { label: '网络架构', items: ['Actor-Critic', 'MLP', 'Transformer', 'CNN', 'GNN'] },
  { label: '框架平台', items: ['Isaac Sim', 'Gazebo', 'ROS / ROS2', 'MuJoCo'] },
  { label: '硬件工具', items: ['Unitree Go2', 'Jetson Nano', 'Infineon TC364', 'STM32'] },
  { label: '语言', items: ['C++', 'Python', 'MATLAB'] }
];

const honorHighlights = [
  { kind: '论文', title: 'ICASSP 机器学习论文在投', detail: 'ICASSP · 在投' },
  { kind: '奖学金', title: '研究生三等奖学金 · 专业排名 26/92（前 30%）', detail: '南京邮电大学 · 2024 — 2025' },
  { kind: '国一', title: '第十九届全国大学生机器人ROBOMASTER2020机甲大师对抗赛全国一等奖', detail: '西南石油大学 · 2020' },
  { kind: '国一', title: '2020 中国工程机器人大赛暨国际公开赛全国一等奖', detail: '西南石油大学 · 2020' },
  { kind: '国二', title: '第十六届全国大学生智能汽车竞赛二等奖', detail: '西南石油大学 · 2021' }
];

const honorCertificates = [
  {
    title: '2020 RoboMaster 机甲大师赛 · 全国一等奖',
    image: asset('certificate-01.jpeg'),
    alt: 'ROBOMASTER2020 机甲大师对抗赛全国一等奖证书'
  },
  {
    title: '2020 中国工程机器人大赛 · 全国一等奖',
    image: asset('certificate-02.jpeg'),
    alt: '2020 中国工程机器人大赛暨国际公开赛全国一等奖证书'
  },
  {
    title: '2021 恩智浦智能车大赛 · 全国二等奖',
    image: asset('certificate-03.jpg'),
    alt: '第十六届全国大学生智能汽车竞赛二等奖证书'
  },
  {
    title: '2020四川省大学生电子设计竞赛 · 四川省三等奖',
    image: asset('certificate-04.jpg'),
    alt: '2020年四川省大学生电子设计竞赛本科组三等奖证书'
  }
];

function BorderGlow({ children }) {
  const tagRef = useRef(null);

  const handlePointerMove = (event) => {
    const tag = tagRef.current;
    if (!tag) return;
    const rect = tag.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const edgeDistance = Math.min(x, y, rect.width - x, rect.height - y);
    const proximity = Math.max(0, Math.min(1, 1 - edgeDistance / 34));
    tag.style.setProperty('--pointer-x', `${x}px`);
    tag.style.setProperty('--pointer-y', `${y}px`);
    tag.style.setProperty('--glow-opacity', proximity.toFixed(3));
  };

  const handlePointerLeave = () => {
    tagRef.current?.style.setProperty('--glow-opacity', '0');
  };

  return <span ref={tagRef} className="skill-glow-tag" onPointerMove={handlePointerMove} onPointerLeave={handlePointerLeave}><span className="skill-glow-label">{children}</span></span>;
}

const projectVideos = [
  { label: 'issac gym可视化', src: asset('isaac-gym-visualization.mp4') },
  { label: 'mujoco 仿真测试', src: asset('mujoco-visualization.mp4') },
  { label: 'go2实机连续上楼梯效果', src: go2StairsUpVideo },
  { label: 'go2实机连续下楼梯效果', src: go2StairsDownVideo }
];

function VideoSlot({ video }) {
  const { label, src } = video;
  return <div className={`video-slot${src ? ' has-video' : ''}`} data-reveal-sequence aria-label={`${label}${src ? '' : '，视频待补充'}`}>
    <span className="video-slot-label">{label}</span>
    {src ? <video src={src} controls preload="metadata" playsInline/> : <><span className="video-slot-play" aria-hidden="true"><Play size={20} fill="currentColor"/></span><span className="video-slot-note">视频待补充</span></>}
  </div>;
}

function VideoGroup({ label, videos }) {
  return <section className="video-group">
    <div className="video-group-heading" data-reveal-sequence><span>{label}</span><i/></div>
    <div className="video-grid" data-reveal-sequence>{videos.map((video) => <VideoSlot key={video.label} video={video}/>)}</div>
  </section>;
}

const energySlides = [
  { src: asset('project-02-00.png'), alt: '风机与混合储能系统结构图', label: '混合储能系统' },
  { src: asset('project-02-02.png'), alt: 'Transformer-BiLSTM-CNN 光伏功率预测网络结构', label: '功率预测神经网络架构' },
  { src: asset('project-02-01.png'), alt: '光伏储能滚动时域 MPC 控制框架', label: 'MPC算法框架' },
  { src: asset('project-02-05.png'), alt: '安谷水电站多能互补平台系统图', label: '乐山安谷光伏电站建设图' },
  { src: asset('project-02-03.png'), alt: '光伏功率与储能功率仿真结果', label: '算法平抑效果I（乐山安谷光伏电站功率24h阴天数据）' },
  { src: asset('project-02-04.png'), alt: '储能控制策略仿真结果', label: '算法平抑效果II（乐山安谷光伏电站功率24h雨天数据）' }
];

function ImageCarousel() {
  const [activeSlide, setActiveSlide] = useState(0);
  const slide = energySlides[activeSlide];
  const moveSlide = (direction) => setActiveSlide((current) => (current + direction + energySlides.length) % energySlides.length);

  return <div className="project-carousel">
    <button className="carousel-button" type="button" aria-label="上一张图片" onClick={() => moveSlide(-1)}><span className="carousel-triangle carousel-triangle-left"/></button>
    <div className="project-carousel-center">
      <div className="project-carousel-frame">
        <img src={slide.src} alt={slide.alt} onLoad={(event) => event.currentTarget.parentElement.classList.add('has-image')} onError={(event) => { event.currentTarget.style.display = 'none'; event.currentTarget.parentElement.classList.remove('has-image'); }}/>
        <span className="carousel-fallback">图片 {String(activeSlide + 1).padStart(2, '0')} / 待补充</span>
      </div>
      <div className="carousel-caption" data-reveal-sequence>
        <span className="carousel-caption-label">{slide.label}</span>
        <div className="carousel-indicators" aria-label="图片切换">
          {energySlides.map((_, index) => <button key={index} className={`carousel-indicator${index === activeSlide ? ' is-active' : ''}`} type="button" aria-label={`查看第 ${index + 1} 张图片`} aria-current={index === activeSlide ? 'true' : undefined} onClick={() => setActiveSlide(index)}/>) }
        </div>
      </div>
    </div>
    <button className="carousel-button" type="button" aria-label="下一张图片" onClick={() => moveSlide(1)}><span className="carousel-triangle carousel-triangle-right"/></button>
  </div>;
}

function EnergyProject() {
  return <section className="energy-project">
    <header className="project-detail-header" data-reveal-sequence>
      <div className="project-detail-kicker">PROJECT 02 / ENERGY CONTROL</div>
      <div className="project-detail-title-row" data-reveal-sequence>
        <h2>清华四川能源互联网研究院</h2>
        <span>2026.05 — 2026.09</span>
      </div>
      <p className="project-detail-role">光伏电控算法开发实习</p>
    </header>
    <div className="project-detail-copy" data-reveal-sequence>
      <p className="project-detail-lead"><strong>基于 Transformer-BiLSTM-CNN 的光伏电功率预测与储能互补 MPC 优化控制</strong></p>
      <p><strong>光伏数据预处理与特征工程：</strong>对历史光伏功率、环境温度、水平辐照度、倾斜面辐照度、风速及风向等数据进行清洗、缺失值处理与归一化，构建多维时序特征，为功率预测模型提供数据支撑。</p>
      <p><strong>多模型融合的光伏功率预测：</strong>构建 Transformer-BiLSTM-CNN 组合预测模型，利用 CNN 提取局部特征、BiLSTM 捕获双时序依赖关系、Transformer 建模长距离时间关联，实现未来时段光伏输出功率的滚动预测。</p>
      <p><strong>混合储能系统建模：</strong>建立蓄电池与超级电容的充放电及 SOC 状态模型，综合考虑储能功率限制、SOC 安全范围和充放电效率，发挥蓄电池能量型储能与超级电容功率型储能的互补优势。</p>
      <p><strong>基于 MPC 的储能功率优化：</strong>将预测得到的未来光伏功率序列作为 MPC 的前瞻输入，以平抑功率波动、降低储能系统运行成本及维持 SOC 稳定为优化目标，在滚动时域内求解储能功率分配方案，并在每个控制周期执行首个控制量。</p>
      <p><strong>仿真验证与控制策略优化：</strong>在 Python 环境中搭建光伏预测与混合储能协同控制仿真平台，通过对比未配置储能、传统控制策略及 MPC 优化策略，分析光伏功率波动率、预测误差、储能 SOC 变化和功率分配效果，验证系统的功率平抑能力与运行稳定性。</p>
    </div>
    <ImageCarousel/>
  </section>;
}

function Projects() {
  return <section className="projects project-detail" id="projects">
    <div className="project-detail-inner">
      <header className="project-detail-header" data-reveal-sequence>
        <div className="project-detail-kicker">PROJECT 01 / ROBOTICS CONTROL</div>
        <div className="project-detail-title-row" data-reveal-sequence>
          <h2>中国航天科技集团公司五院—南京邮电大学</h2>
          <span>2025.03 — 2025.12</span>
        </div>
        <p className="project-detail-role">强化学习运控算法开发</p>
      </header>

      <div className="project-detail-copy" data-reveal-sequence>
        <p className="project-detail-lead"><strong>基于 PPO-attention 算法和 PD 控制器的四足机器人月球巡检勘探系统</strong>（核心开发 / 算法移植与适配）</p>
        <p><strong>系统架构与步态训练：</strong>针对宇树 Unitree Go2 四足机器人，基于 Isaac Gym 搭建四足机器人强化学习训练环境，设计状态空间、动作空间以及奖励函数，训练高鲁棒性的直行走姿态，使其具备在非平整地形与斜坡等复杂环境下的稳定跨越能力。</p>
        <p><strong>底层动作控制与稳定性优化：</strong>在 PPO 输出关节期望运动指令后，引入 PD 控制器进行底层闭环控制，通过比例项根据目标值与实际状态之间的偏差快速调整控制输出，并以微分项抑制运动过程中的振荡与超调，实现关节运动的平稳跟踪，提高四足机器人在复杂地形下的运动稳定性与控制响应能力。</p>
        <p><strong>仿真迁移与策略优化：</strong>构建 Sim2Real 仿真到真实机器人的迁移流程，利用 Gazebo 搭建真实机器人运行环境并开展策略验证，通过对比仿真与实际运动表现，优化策略参数与控制性能，降低模型迁移过程中的动力学差异影响，提高强化学习策略在真实复杂地形下的泛化能力与部署稳定性。</p>
        <p><strong>巡检探索与建图系统融合：</strong>搭建基于四足机器人的自主探索、实时三维建图与巡检一体化框架，将全局探索效率提升 15%—25%，成功实现机器狗在平面或立体复杂空间场景下的高速、全自主巡检与探索建图。</p>
      </div>

      <VideoGroup label="强化学习仿真模拟" videos={projectVideos.slice(0, 2)}/>
      <VideoGroup label="仿真迁移与实机效果" videos={projectVideos.slice(2)}/>

      <EnergyProject/>
    </div>
  </section>;
}

function Capabilities() {
  return <section className="capabilities skill-stack-page section-wrap" id="capabilities">
    <header className="skill-stack-heading" data-reveal-sequence><h2><strong>技能</strong><span>栈</span></h2></header>
    <div className="skill-stack-grid">
      {skillGroups.map((group) => <article className="skill-stack-group" data-reveal-sequence key={group.label}>
        <h3>{group.label}</h3>
        <div className="skill-stack-tags" data-reveal-sequence>{group.items.map((item) => <BorderGlow key={item}>{item}</BorderGlow>)}</div>
      </article>)}
    </div>
  </section>;
}

function Honors() {
  const [expandedCertificate, setExpandedCertificate] = useState(null);

  return <section className="honors honors-page section-wrap" id="honors" aria-label="荣誉与论文">
    <header className="honors-heading" data-reveal-sequence><h2><strong>荣誉</strong><i>与</i><span>论文</span></h2></header>
    <div className="honor-highlights" data-reveal-sequence>
      {honorHighlights.map((item) => <article className="honor-highlight" key={item.title}>
        <span className="honor-badge">{item.kind}</span>
        <div><h3>{item.title}</h3>{item.detail && <p>{item.detail}</p>}</div>
      </article>)}
    </div>
    <div className="honor-certificates-heading" data-reveal-sequence><span>获奖证书</span><b>AWARDS · CERTIFICATES</b><i/></div>
    <div className="honor-certificates" data-reveal-sequence>
      {honorCertificates.map((item, index) => <div className={`honor-certificate${expandedCertificate === index ? ' is-expanded' : ''}`} key={item.title}>
        <div className="honor-certificate-row">
          <span>{String(index + 1).padStart(2, '0')}</span>
          <p>{item.title}</p>
          <button
            className="honor-certificate-toggle"
            type="button"
            aria-label={`${expandedCertificate === index ? '收起' : '查看'}${item.title}证书`}
            aria-expanded={expandedCertificate === index}
            onClick={() => setExpandedCertificate(expandedCertificate === index ? null : index)}
          >
            <ArrowDown size={16} aria-hidden="true" />
          </button>
        </div>
        <div className="honor-certificate-panel" aria-hidden={expandedCertificate !== index}>
          <div className="honor-certificate-image-wrap">
            <img src={item.image} alt={item.alt} loading="lazy" />
          </div>
        </div>
      </div>)}
    </div>
  </section>;
}

function Contact() {
  return <footer className="contact" id="contact"><div className="contact-pattern"/><div className="contact-inner" data-reveal-sequence><div className="contact-top"><span><i/> AVAILABLE FOR COLLABORATION</span><span>04 — 04 / CONTACT</span></div><p className="section-label">NEXT STEP / 下一步</p><h2>一起把机器人<br/><em>带进真实世界。</em></h2><div className="contact-bottom"><div className="contact-details"><p><Phone size={18} aria-hidden="true"/><span>177-2195-3617</span></p><p><Mail size={18} aria-hidden="true"/><span>p786027337@163.com</span></p></div></div><div className="footer-bottom"><a href="#home">游海洋 <i>·</i> 机器人算法工程师</a><span>南京邮电大学 / 电子信息</span><a href="#home">回到顶部 ↑</a></div></div></footer>;
}

function useScrollReveal() {
  useLayoutEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || !('IntersectionObserver' in window)) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('scroll-revealed');
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -6% 0px' });

    document.querySelectorAll('[data-reveal-sequence]').forEach((group) => {
      Array.from(group.children).forEach((item, index) => {
        item.classList.add('scroll-reveal-item');
        item.style.setProperty('--scroll-reveal-delay', `${Math.min(index * 90, 360)}ms`);
        observer.observe(item);
      });
    });

    return () => observer.disconnect();
  }, []);
}

function App() {
  useScrollReveal();
  return <><Navigation/><Hero/><main><About/><Projects/><Capabilities/><Honors/></main><Contact/></>;
}
createRoot(document.getElementById('root')).render(<App/>);

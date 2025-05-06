import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import {
  Heart,
  MessageCircle,
  CheckCheck,
  FileText,
  Menu,
  ArrowUp,
} from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(1);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className="app">
      <header className="header">
        <div className="container header-content">
          <div className="logo">
            <span className="logo-before">Before</span>
            <span className="logo-yes">Yes</span>
          </div>
          <div className="mobile-toggle" onClick={toggleMenu}>
            <Menu size={24} />
          </div>
          <nav className={isMenuOpen ? 'active' : ''}>
            <ul>
              <li><a href="#features">기능</a></li>
              <li><a href="#how-it-works">이용방법</a></li>
              <li><a href="#pricing">가격</a></li>
              <li><a href="#testimonials">후기</a></li>
              <li><a href="#" className="btn btn-secondary">무료 테스트</a></li>
              <li><a href="#pricing" className="btn btn-primary">시작하기</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <section className="hero">
        <div className="container">
          <h1 className="headline">
            드레스, 청첩장까지는 준비됐는데...<br />
            <span className="gradient-text">그 후에 후회가 되면 어떻게 하죠?</span>
          </h1>
          <p className="hero-sub">
            BeforeYes는 결혼 전 확신이 없는 당신의 감정을 정리해주는 AI 기반 리포트 서비스입니다.
          </p>
          <div className="hero-btns">
            <a href="#pricing" className="btn btn-cta">감정 리포트 받기</a>
            <a href="#" className="btn btn-secondary">무료 테스트 시작</a>
          </div>
          <div className="hero-img">
            <img src="/api/placeholder/800/450" alt="BeforeYes 서비스 화면" />
          </div>
        </div>
      </section>

      <section id="features" className="features-section">
        <div className="container">
          <div className="section-title">
            <h2>혼자서도 할 수 있는<br />결혼 전 감정 정리</h2>
            <p>
              상대방에게 말하기 어렵고, 가족이나 친구에게도 털어놓기 힘든 결혼 전 고민을 AI와 함께 정리해보세요.
            </p>
          </div>
          <div className="features">
            <div className="feature-card">
              <div className="feature-icon"><CheckCheck size={40} /></div>
              <h3>결혼 확신 체크리스트</h3>
              <p>관계 만족도, 가치관 차이, 신뢰 문제 등 항목별로 나의 불안 요소를 시각화하여 보여드립니다.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon"><MessageCircle size={40} /></div>
              <h3>AI 저널링 챗봇</h3>
              <p>마음속 이야기를 정리해주는 AI와 대화하며 객관적인 시선으로 감정을 정리해 볼 수 있습니다.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon"><ArrowUp size={40} /></div>
              <h3>결혼 시뮬레이션 대화</h3>
              <p>결혼 후 발생할 수 있는 실제 상황을 AI와 시뮬레이션하며 미리 대비해 볼 수 있습니다.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon"><FileText size={40} /></div>
              <h3>PDF 감정 리포트</h3>
              <p>나의 감정 상태, 갈등 예측, 관계 만족도를 분석한 전문적인 리포트를 받아보세요.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);

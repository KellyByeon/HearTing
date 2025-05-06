// File: src/App.jsx

import React from 'react';

function App() {
  return (
    <>
      <header>
        <div className="container header-content">
          <div className="logo">
            <span>Before</span><span>Yes</span>
          </div>
          <nav>
            <ul>
              <li><a href="#features">기능</a></li>
              <li><a href="#how-it-works">이용방법</a></li>
              <li><a href="#pricing">가격</a></li>
              <li><a href="#testimonials">후기</a></li>
              <li><a href="#test" className="btn btn-secondary">무료 테스트</a></li>
              <li><a href="#pricing" className="btn btn-primary">시작하기</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <section className="hero">
        <div className="container">
          <h1>결혼은 준비됐는데,<br />마음은 아직 정리 안 됐나요?</h1>
          <p>BeforeYes는 결혼 전 확신이 없는 당신의 감정을 정리해주는 AI 기반 리포트 서비스입니다.</p>
          <div className="hero-btns">
            <a href="#pricing" className="btn btn-cta">감정 리포트 받기</a>
            <a href="#test" className="btn btn-secondary">무료 테스트 시작</a>
          </div>
          <div className="hero-img">
            <img src="/public/image.png" alt="BeforeYes 서비스 화면" />
          </div>
        </div>
      </section>

      <section id="features">
        <div className="container">
          <h2>혼자서도 할 수 있는 감정 정리</h2>
          <p>AI와 함께 결혼 전 고민을 조용히 정리해보세요.</p>
          <ul>
            <li>📋 결혼 확신 체크리스트</li>
            <li>💬 AI 저널링 챗봇</li>
            <li>🔄 결혼 시뮬레이션 대화</li>
            <li>📊 감정 분석 PDF 리포트</li>
          </ul>
        </div>
      </section>

      <section id="how-it-works">
        <div className="container">
          <h2>BeforeYes는 이렇게 작동해요</h2>
          <ol>
            <li>감정 진단 테스트</li>
            <li>AI 저널링 & 시뮬레이션</li>
            <li>PDF 감정 리포트 제공</li>
          </ol>
        </div>
      </section>

      <section id="pricing">
        <div className="container">
          <h2>가격 안내</h2>
          <ul>
            <li>무료 테스트 - 0원</li>
            <li>리포트 미리보기 - 3,900원</li>
            <li>정식 리포트 PDF - 14,900원</li>
            <li>전체 기능 번들 - 19,900원</li>
          </ul>
        </div>
      </section>

      <section id="testimonials">
        <div className="container">
          <h2>사용자 후기</h2>
          <blockquote>"결혼 전에 BeforeYes를 해보고 마음이 훨씬 정리됐어요."</blockquote>
          <p>- 사용자 김OO</p>
        </div>
      </section>

      <footer>
        <div className="container">
          <p>&copy; 2025 BeforeYes. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}

export default App;
import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';

// Icons
import { Heart, MessageCircle, CheckCircle, FileText, Menu, CheckCheck, ArrowUp } from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(1);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

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
          <nav className={isMenuOpen ? "active" : ""}>
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
          <h1>결혼은 준비됐는데,<br />마음은 아직 정리 안 됐나요?</h1>
          <p>BeforeYes는 결혼 전 확신이 없는 당신의 감정을 정리해주는 AI 기반 리포트 서비스입니다.</p>
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
            <p>상대방에게 말하기 어렵고, 가족이나 친구에게도 털어놓기 힘든 결혼 전 고민을 AI와 함께 정리해보세요.</p>
          </div>
          <div className="features">
            <div className="feature-card">
              <div className="feature-icon">
                <CheckCheck size={40} />
              </div>
              <h3>결혼 확신 체크리스트</h3>
              <p>관계 만족도, 가치관 차이, 신뢰 문제 등 항목별로 나의 불안 요소를 시각화하여 보여드립니다.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <MessageCircle size={40} />
              </div>
              <h3>AI 저널링 챗봇</h3>
              <p>마음속 이야기를 정리해주는 AI와 대화하며 객관적인 시선으로 감정을 정리해 볼 수 있습니다.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <ArrowUp size={40} />
              </div>
              <h3>결혼 시뮬레이션 대화</h3>
              <p>결혼 후 발생할 수 있는 실제 상황을 AI와 시뮬레이션하며 미리 대비해 볼 수 있습니다.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <FileText size={40} />
              </div>
              <h3>PDF 감정 리포트</h3>
              <p>나의 감정 상태, 갈등 예측, 관계 만족도를 분석한 전문적인 리포트를 받아보세요.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="how-it-works" className="how-it-works">
        <div className="container">
          <div className="section-title">
            <h2>BeforeYes 이용 방법</h2>
            <p>단 몇 분만에 나의 결혼 전 감정과 고민을 정리해보세요.</p>
          </div>
          <div className="steps">
            <div className="step">
              <h3>회원가입 및 플랜 선택</h3>
              <p>간단한 정보만으로 빠르게 가입하고, 나에게 맞는 플랜을 선택하세요.</p>
            </div>
            <div className="step">
              <h3>AI 챗봇과 대화</h3>
              <p>마음속 고민을 AI 챗봇에게 털어놓으며 감정을 정리해보세요.</p>
            </div>
            <div className="step">
              <h3>상황별 시뮬레이션</h3>
              <p>결혼 후 발생할 수 있는 다양한 상황을 시뮬레이션하며 준비해보세요.</p>
            </div>
            <div className="step">
              <h3>개인화된 리포트 받기</h3>
              <p>나만의 감정 분석 리포트를 받아보고 결혼 전 확신을 다져보세요.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="dialog-simulation">
        <div className="container">
          <div className="section-title">
            <h2>AI와 함께하는 대화 시뮬레이션</h2>
            <p>결혼 후 일어날 수 있는 갈등 상황을 미리 체험하고 준비해보세요.</p>
          </div>
          
          <div className="dialog-container">
            <div className="dialog-header">
              <h3>결혼 후 가사 분담 대화 시뮬레이션</h3>
            </div>
            <div className="dialog-content">
              <div className="scenario">
                <p><strong>상황:</strong> 결혼 후 3개월, 당신은 일과 집안일을 병행하느라 지쳐있습니다. 파트너가 가사 분담에 소극적인 모습을 보이고 있습니다.</p>
              </div>
              
              <div className="options">
                <button 
                  className={`option-btn ${selectedOption === 0 ? 'selected' : ''}`}
                  onClick={() => setSelectedOption(0)}
                >
                  "요즘 너무 바빠서 힘든데, 집안일 좀 도와줄 수 있어?"
                </button>
                <button 
                  className={`option-btn ${selectedOption === 1 ? 'selected' : ''}`}
                  onClick={() => setSelectedOption(1)}
                >
                  "왜 항상 내가 다 해야 하는 거야? 너도 좀 해!"
                </button>
                <button 
                  className={`option-btn ${selectedOption === 2 ? 'selected' : ''}`}
                  onClick={() => setSelectedOption(2)}
                >
                  "우리 가사 분담에 대해 이야기해보고 싶어. 시간 있을 때 얘기할 수 있을까?"
                </button>
              </div>
              
              <div className="feedback">
                <p><strong>AI 피드백:</strong> 이런 표현은 상대방에게 공격적으로 느껴질 수 있어요. 감정을 인정하면서도 협력적으로 문제를 해결하는 방향으로 대화해보는 건 어떨까요?</p>
                <div className="ai-suggestion">
                  <div className="suggestion-label">
                    <ArrowUp size={16} />
                    개선 제안
                  </div>
                  <p className="suggestion-text">"요즘 일도 바쁘고 집안일까지 하려니 많이 지치는 것 같아. 우리 서로 도울 수 있는 방법에 대해 이야기해볼까?"</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="chat-example">
        <div className="container">
          <div className="section-title">
            <h2>AI 저널링 챗봇으로<br />솔직한 마음 털어놓기</h2>
            <p>혼자서도 할 수 있는 감정 정리, AI 챗봇이 편안한 대화를 통해 도와드립니다.</p>
          </div>
          
          <div className="chat-bubble">
            <div className="chat-header">
              <div className="chat-avatar">B</div>
              <div>
                <div className="chat-name">BeforeYes AI</div>
                <div className="chat-status">항상 당신 편</div>
              </div>
            </div>
            <div className="chat-body">
              <div className="message received">
                안녕하세요! 오늘은 어떤 고민이 있으신가요?
                <span className="message-time">10:30</span>
              </div>
              <div className="message sent">
                결혼이 두 달 앞으로 다가왔는데, 가끔 불안해요. 정말 이 결정이 맞는지...
                <span className="message-time">10:32</span>
              </div>
              <div className="message received">
                결혼 전 불안감은 자연스러운 감정이에요. 어떤 부분이 가장 걱정되시나요?
                <span className="message-time">10:33</span>
              </div>
              <div className="message sent">
                우리가 가치관이 맞을지, 함께 살면서 서로 실망하게 되진 않을지...
                <span className="message-time">10:35</span>
              </div>
              <div className="ai-suggestion">
                <div className="suggestion-label">
                  <Heart size={16} />
                  감정 분석
                </div>
                <p className="suggestion-text">
                  미래에 대한 불확실성과 관계 지속성에 대한 고민이 느껴집니다. 이런 감정은 장기적 결정 앞에서 매우 자연스러워요.
                </p>
                <div className="action-btns">
                  <button className="btn btn-outline">더 깊이 탐색하기</button>
                  <button className="btn btn-outline">가치관 체크리스트</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="testimonials" className="testimonials">
        <div className="container">
          <div className="section-title">
            <h2>사용자 후기</h2>
            <p>BeforeYes를 통해 결혼 전 고민을 해결한 분들의 이야기를 들어보세요.</p>
          </div>
          <div className="testimonial-grid">
            <div className="testimonial-card">
              <div className="rating">
                <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
              </div>
              <p className="testimonial-text">
                "혼자서 고민하던 불안감이 정리가 안 돼서 힘들었는데, AI와 대화하며 제 마음을 객관적으로 볼 수 있었어요. 결혼을 앞두고 큰 확신을 얻었습니다."
              </p>
              <div className="testimonial-author">
                <div className="author-img">
                  <img src="/api/placeholder/60/60" alt="사용자" />
                </div>
                <div className="author-info">
                  <h4>김서연, 32세</h4>
                  <p>결혼 3개월 전 사용</p>
                </div>
              </div>
            </div>
            <div className="testimonial-card">
              <div className="rating">
                <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
              </div>
              <p className="testimonial-text">
                "시뮬레이션을 통해 결혼 후 발생할 수 있는 상황들을 미리 경험해보니 훨씬 준비된 마음으로 결혼을 할 수 있었어요. 파트너와의 대화 방식도 개선되었습니다."
              </p>
              <div className="testimonial-author">
                <div className="author-img">
                  <img src="/api/placeholder/60/60" alt="사용자" />
                </div>
                <div className="author-info">
                  <h4>이준호, 29세</h4>
                  <p>결혼 1개월 전 사용</p>
                </div>
              </div>
            </div>
            <div className="testimonial-card">
              <div className="rating">
                <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
              </div>
              <p className="testimonial-text">
                "주변에 결혼 고민을 털어놓기가 쉽지 않았는데, 비판 없이 들어주는 AI 챗봇 덕분에 마음의 짐을 덜 수 있었어요. 리포트도 정말 도움이 많이 됐습니다."
              </p>
              <div className="testimonial-author">
                <div className="author-img">
                  <img src="/api/placeholder/60/60" alt="사용자" />
                </div>
                <div className="author-info">
                  <h4>박민지, 31세</h4>
                  <p>결혼 6개월 전 사용</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="pricing" className="pricing">
        <div className="container">
          <div className="section-title">
            <h2>나에게 맞는 플랜 선택하기</h2>
            <p>다양한 고민과 상황에 맞는 맞춤형 플랜을 제공합니다.</p>
          </div>
          <div className="pricing-plans">
            <div className="pricing-card">
              <div className="plan-type">라이트 플랜</div>
              <div className="plan-price">29,000<span>원</span></div>
              <p>결혼 전 간단한 고민 해결에 적합한 플랜</p>
              <ul className="plan-features">
                <li>기본 감정 분석 리포트</li>
                <li>AI 챗봇 대화 (7일)</li>
                <li>5가지 상황 시뮬레이션</li>
                <li>기본 체크리스트</li>
              </ul>
              <a href="#" className="btn btn-secondary">선택하기</a>
            </div>
            <div className="pricing-card featured">
              <div className="plan-type">프리미엄 플랜</div>
              <div className="plan-price">49,000<span>원</span></div>
              <p>깊은 고민과 종합적인 분석이 필요한 분들께 추천</p>
              <ul className="plan-features">
                <li>심층 감정 분석 리포트</li>
                <li>AI 챗봇 대화 (30일)</li>
                <li>15가지 상황 시뮬레이션</li>
                <li>심층 체크리스트</li>
                <li>관계 유형 분석</li>
                <li>1:1 전문가 메일 상담 (1회)</li>
              </ul>
              <a href="#" className="btn btn-cta">선택하기</a>
            </div>
            <div className="pricing-card">
              <div className="plan-type">커플 플랜</div>
              <div className="plan-price">79,000<span>원</span></div>
              <p>두 사람이 함께 고민을 나누고 성장하길 원하는 커플</p>
              <ul className="plan-features">
                <li>커플 매칭 감정 분석 리포트</li>
                <li>AI 챗봇 대화 (30일/2인)</li>
                <li>20가지 상황 시뮬레이션</li>
                <li>가치관 일치도 분석</li>
                <li>커플 대화 가이드</li>
                <li>1:1 전문가 화상 상담 (1회)</li>
              </ul>
              <a href="#" className="btn btn-secondary">선택하기</a>
            </div>
          </div>
        </div>
      </section>

      <section className="cta">
        <div className="container">
          <h2>결혼 전, 마음의 확신을 찾아보세요</h2>
          <p>AI와 함께 나만의 결혼 고민을 정리하고 더 확신 있는 결정을 내려보세요.</p>
          <a href="#" className="btn btn-light">무료로 시작하기</a>
        </div>
      </section>

      <section id="faq" className="faq-section">
        <div className="container">
          <div className="section-title">
            <h2>자주 묻는 질문</h2>
            <p>BeforeYes에 대해 궁금한 점이 있으신가요?</p>
          </div>
          <div className="faq-container">
            <div className="faq-item">
              <div className="faq-question">
                BeforeYes는 어떤 서비스인가요?
              </div>
              <div className="faq-answer">
                BeforeYes는 결혼을 앞둔 예비 신혼부부들이 결혼 전 감정을 정리하고 확신을 얻을 수 있도록 도와주는 AI 기반 서비스입니다. AI 챗봇과의 대화, 상황별 시뮬레이션, 감정 분석 리포트 등을 통해 결혼 전 불안감을 해소하고 더 준비된 결혼 생활을 시작할 수 있도록 돕습니다.
              </div>
            </div>
            <div className="faq-item">
              <div className="faq-question">
                대화 내용은 안전하게 보관되나요?
              </div>
              <div className="faq-answer">
                네, 모든 대화 내용은 암호화되어 안전하게 보관됩니다. 개인 정보는 철저히 보호되며, AI 학습을 위한 데이터로 활용될 때는 모든 개인 식별 정보가 제거됩니다. 언제든지 원하시면 모든 데이터 삭제를 요청하실 수 있습니다.
              </div>
            </div>
            <div className="faq-item">
              <div className="faq-question">
                서비스 이용 후 실제 결혼 생활에 얼마나 도움이 되나요?
              </div>
              <div className="faq-answer">
                사용자들의 피드백에 따르면, BeforeYes 이용 후 결혼 생활에서 발생할 수 있는 갈등 상황에 대한 이해도가 높아지고 의사소통 방식이 개선되었다고 합니다. 결혼 전 미처 생각하지 못했던 부분들을 미리 점검함으로써 결혼 생활의 초기 적응 기간을 더 순조롭게 보낼 수 있습니다.
              </div>
            </div>
            <div className="faq-item">
              <div className="faq-question">
                환불 정책은 어떻게 되나요?
              </div>
              <div className="faq-answer">
                서비스 이용 후 7일 이내에 만족하지 못하시면 100% 환불해 드립니다. 단, 리포트 다운로드 시에는 환불이 불가능하니 참고해 주세요.
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer>
        <div className="container">
          <div className="footer-content">
            <div className="footer-col">
              <div className="logo">
                <span className="logo-before">Before</span>
                <span className="logo-yes">Yes</span>
              </div>
              <p>결혼 전, 마음의 확신을 찾아드립니다.</p>
            </div>
            <div className="footer-col">
              <h3>서비스</h3>
              <ul className="footer-links">
                <li><a href="#features">기능 소개</a></li>
                <li><a href="#pricing">요금제</a></li>
                <li><a href="#">사례 연구</a></li>
                <li><a href="#">전문가 상담</a></li>
              </ul>
            </div>
            <div className="footer-col">
              <h3>회사</h3>
              <ul className="footer-links">
                <li><a href="#">소개</a></li>
                <li><a href="#">블로그</a></li>
                <li><a href="#">채용</a></li>
                <li><a href="#">언론 보도</a></li>
              </ul>
            </div>
            <div className="footer-col">
              <h3>지원</h3>
              <ul className="footer-links">
                <li><a href="#faq">자주 묻는 질문</a></li>
                <li><a href="#">고객센터</a></li>
                <li><a href="#">개인정보 처리방침</a></li>
                <li><a href="#">이용약관</a></li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2025 BeforeYes. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);
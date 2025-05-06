// src/App.jsx
import React from 'react';

// 이건 스타일을 적용하기 위해 쓰는 부분이야 (간단한 CSS)
const pageStyle = {
  fontFamily: 'Arial, sans-serif',
  backgroundColor: '#FBD6CF',
  color: '#333',
  padding: '30px',
  textAlign: 'center'
};

const buttonStyle = {
  marginTop: '20px',
  padding: '12px 24px',
  backgroundColor: '#fff',
  color: '#F0827F',
  border: '2px solid #F0827F',
  borderRadius: '8px',
  fontSize: '16px',
  cursor: 'pointer'
};

const logoStyle = {
  width: '120px',
  marginBottom: '20px'
};

function App() {
  return (
    <div style={pageStyle}>
      {/* 로고 이미지 보여주기 */}
      <img src="/beforeyes-logo.png" alt="BeforeYes Logo" style={logoStyle} />

      {/* 큰 제목 */}
      <h1>결혼은 준비됐는데, 마음은 준비되셨나요?</h1>

      {/* 짧은 설명 */}
      <p>BeforeYes는 혼자 조용히 감정을 정리할 수 있는 AI 기반 감정 점검 도구입니다.</p>

      {/* 시작하기 버튼 */}
      <button
        style={buttonStyle}
        onClick={() => {
          // 여기에 Firebase 연결 또는 테스트 페이지로 이동하는 기능을 넣을 수 있어
          alert('아직 준비 중이에요! 곧 시작됩니다 ✨');
        }}
      >
        무료 테스트 시작하기
      </button>
    </div>
  );
}

export default App;

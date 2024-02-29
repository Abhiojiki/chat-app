import React, { useState } from 'react';

function ThemeSwitcher() {
  const [theme, setTheme] = useState('light'); // 기본 테마 설정

  const changeTheme = (newTheme) => {
    setTheme(newTheme);
  }

  return (
    <div data-theme={theme}>
      {/* 나머지 앱 컴포넌트 */}
      <button onClick={() => changeTheme('dark')}>Dark Theme</button>
    
    </div>
  );
}

export default ThemeSwitcher;
